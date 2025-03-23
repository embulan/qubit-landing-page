import { prisma } from "@/db";
import { DEFAULT_FILENAME } from '@/utils/constants'; // adjust the path based on your project structure
import { createAssistantAndThread } from '@/services/openai/threads'; // adjust the path based on your project structure
import { randomUUID } from "crypto";
{/* taken directly from previously used web-ui, will be alrtered as needed */}

export function getProfileByClerkUid(clerkUserId: string) {
  const profileInstance = prisma.user.findFirst({
    where: {
      id: clerkUserId,
    },
  });
  return profileInstance;
}

export async function findUserByAuthCode(authCode: string) {
  return await prisma.user.findFirst({
    where: { authCode }
  });
}

export async function fetchUserObjByAuthCode(authCode: string) {
  return await prisma.user.findFirst({
    where: {
      authCode,
    },
    include: {
      MessageThreads: {
        include: {
          Message: true,
        },
      },
    },
  });
}

export async function updateUserContext(userId: string, context: string | null) {
  return await prisma.user.update({
    where: { id: userId },
    data: { context: context?.toString() }
  });
}

export async function createProfile(clerkUserId: string, data: any) {
  try {
    return await prisma.$transaction(async (prisma) => {
      // Lock the row for the user with the given email to prevent race conditions
      await prisma.$executeRaw`
        SELECT 1 FROM \`User\` WHERE \`email\` = ${data.email} FOR UPDATE;
      `;

      // Check if the user already exists by ID
      const existingUserById = await prisma.user.findUnique({
        where: { id: clerkUserId },
      });

      if (existingUserById) {
        throw new Error('User with this ID already exists');
      }

      // Check if the email already exists
      const existingUserByEmail = await prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUserByEmail) {
        throw new Error('User with this email already exists');
      }

      const { assistant, thread } = await createAssistantAndThread();

      // Create user profile and associate the new thread with the user
      const profileInstance = await prisma.user.create({
        data: {
          id: clerkUserId,
          authCode: randomUUID().toString(),
          assistantId: assistant.id,
          currentEnergy: 50,
          maxEnergy: 50,
          ...data,
          MessageThreads: {
            create: {
              id: thread.id,
              fileName: DEFAULT_FILENAME,
            },
          },
        },
      });

      return profileInstance;
    });
  } catch (error: any) {
    console.error('Error creating profile:', error);
    if (error.message === 'User with this ID already exists' || error.message === 'User with this email already exists') {
      return { status: 400, message: error.message };
    }
    return { status: 500, message: 'Internal server error' };
  }
}

export async function resetUserEnergy() {
  try {
    await prisma.$executeRaw`
      UPDATE \`User\`
      SET \`current_energy\` = \`max_energy\`
    `;

    return { message: "Energy reset for all users" };
  } catch (error) {
    console.error('Error resetting energy:', error);
    throw new Error('Internal server error');
  }
}

export async function fetchUserWithMessageThreads(authCode: string) {
  const user = await prisma.user.findFirst({
    where: { authCode },
    include: { MessageThreads: true },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}

export async function updateUser(email: string, firstName: string, selectedLevel: number, userDescription: string) { 
  const updatedUser = await prisma.user.update({
      where: { email },
      data: {
          firstName,
          skillLevel: selectedLevel,
          bio: userDescription,
      },
  });

  return updatedUser;
}
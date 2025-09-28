import { hash, compare } from 'bcryptjs'

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth/next";

export async function hashPassword(password: string) {
    return await hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = compare(password, hashedPassword);
  return isValid
}

export async function getUserEmail() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email

  return userEmail    
}
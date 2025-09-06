// this is from the Prisma documentation
// a workaround to avoid multiple client instances
// caused by hot reloading in development environment
// https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections

import { PrismaClient } from './generated/prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
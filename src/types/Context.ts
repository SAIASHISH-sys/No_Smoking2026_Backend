import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

export interface MyContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  user: User | null;
  pendingEmail: string | null;
}

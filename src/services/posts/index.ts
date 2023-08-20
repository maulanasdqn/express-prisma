import { TPostRequest, TPostResponse, TPostSingleResponse } from "@/entities";
import { metaResponse } from "@/utilities";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postServices = {
  createPost: async (data: TPostRequest): Promise<TPostSingleResponse> => metaResponse(await prisma.post.create({ data })),
  getPosts: async (): Promise<TPostResponse> => metaResponse(await prisma.post.findMany()),
  getPost: async (id?: string): Promise<TPostSingleResponse> => metaResponse(await prisma.post.findUnique({ where: { id } })),
  updatePost: async (data: TPostRequest): Promise<TPostSingleResponse> => metaResponse(await prisma.post.update({ where: { id: data?.id }, data })),
  deletePost: async (id?: string): Promise<TPostSingleResponse> => metaResponse(await prisma.post.delete({ where: { id } })),
};

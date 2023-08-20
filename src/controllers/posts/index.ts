import { postServices } from "@/services"
import { Response, Request } from "express"

export const postControllers = {
  getPosts: async (res: Response): Promise<Response> => res.send(postServices.getPosts),
  getPost: async (req: Request, res: Response): Promise<Response> => res.send(await postServices.getPost(req.params?.id)),
  createPost: async (req: Request, res: Response): Promise<Response> => res.send(await postServices.createPost(req.body)),
  updatePost: async (req: Request, res: Response): Promise<Response> => res.send(await postServices.updatePost(req.body)),
  deletePost: async (req: Request, res: Response): Promise<Response> => res.send(await postServices.deletePost(req.params?.id)),
}

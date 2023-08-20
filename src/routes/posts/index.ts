import { Router } from "express";
import { postControllers } from "@/controllers";

export const postRouter = Router();

postRouter.get("/", postControllers.getPosts);
postRouter.get("/:id", postControllers.getPost);
postRouter.post("/", postControllers.createPost);
postRouter.put("/:id", postControllers.updatePost);
postRouter.delete("/:id", postControllers.deletePost);

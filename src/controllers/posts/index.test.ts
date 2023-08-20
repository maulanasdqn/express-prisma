import { describe, expect, it } from "vitest";
import { postControllers } from "@/controllers";

describe("Test Post Controller", () => {
  it("Should return post controller", () => {
    expect(postControllers).toEqual({
      getPosts: expect.any(Function),
      getPost: expect.any(Function),
      createPost: expect.any(Function),
      updatePost: expect.any(Function),
      deletePost: expect.any(Function),
    })
  })
})

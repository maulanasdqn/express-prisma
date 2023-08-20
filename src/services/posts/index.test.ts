import { describe, expect, it } from "vitest";
import { postServices } from "@/services";

describe("Test Post Service", () => {
  it("Should return post service", () => {
    expect(postServices).toEqual({
      getPosts: expect.any(Function),
      getPost: expect.any(Function),
      createPost: expect.any(Function),
      updatePost: expect.any(Function),
      deletePost: expect.any(Function),
    })
  })
})



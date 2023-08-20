import { describe, expect, it } from "vitest";
import { metaResponse } from "@/utilities";

describe("Test Meta Response Function", () => {
  it("Should return meta response", () => {
    expect(metaResponse({})).toEqual({ data: {} })
  })
})

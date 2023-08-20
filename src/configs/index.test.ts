import { describe, expect, it } from "vitest";
import { config } from "./"

describe("Test Config Env", () => {
  it("Should return 3000", () => {
    expect(config.port).toEqual("3000")
  })

  it("Should return http://localhost", () => {
    expect(config.host).toEqual("http://localhost")
  })

})

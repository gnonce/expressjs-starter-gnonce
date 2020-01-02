import request from "supertest";
import app from "../../src/lib/server";

describe("GET /api/v1", () => {
  it("should return 200 OK and greetings", () => {
    return request(app)
      .get("/api/v1")
      .expect(200);
  });
});

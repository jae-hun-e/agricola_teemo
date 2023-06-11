const request = require("supertest");
const baseURL = "http://localhost:8000";
describe("카카오 로그인 POST요청", () => {
  const newTodo = {
    access_token: process.env.NEXT_PUBLIC_TEST_TOKEN,
  };
  beforeAll(async () => {
    await request(baseURL).post("/account/login").send(newTodo);
  });
  it("should return 200", async () => {
    const response = await request(baseURL).get("/account/login");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(null);
  });
  // it("should return todos", async () => {
  //   const response = await request(baseURL).get("/account/login");
  //   expect(response.body.data.length >= 1).toBe(true);
  // });
});

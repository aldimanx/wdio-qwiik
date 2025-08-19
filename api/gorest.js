//mport dotenv from "dotenv";
import axios from "axios";

// Load env file
//dotenv.config({ path: "./config.env" });

const BASE_URL = "https://gorest.co.in/public/v2";
const TOKEN = process.env.GOREST_TOKEN;

describe("GoREST Users API with Axios", () => {
  let userId;

  it("should create a new user", async () => {
    console.log("lognya nih" + TOKEN);
    const response = await axios.post(
      `${BASE_URL}/users`,
      {
        name: "Aldi QA",
        gender: "male",
        email: `aldi.qa.${Date.now()}@example.com`,
        status: "active",
      },
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
    expect(response.data.name).toBe("Aldi QA");

    userId = response.data.id;
  });

  it("should get user details", async () => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(userId);
    expect(response.data.name).toBe("Aldi QA");
  });

  it("should update user details", async () => {
    const response = await axios.patch(
      `${BASE_URL}/users/${userId}`,
      {
        name: "Aldi QA Updated",
        status: "inactive",
      },
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    expect(response.status).toBe(200);
    expect(response.data.name).toBe("Aldi QA Updated");
    expect(response.data.status).toBe("inactive");
  });
});

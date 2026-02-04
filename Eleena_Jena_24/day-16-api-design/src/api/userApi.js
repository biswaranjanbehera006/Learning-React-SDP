const BASE_URL = "https://example.com/api"; // backend URL

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
}

export async function createUser(user) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  return response.json();
}

export const loginUser = async (email, password) => {
  const response = await fetch(
    "https://reqres.in/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );

  return response.json();
};

export const registerUser = async (email, password) => {
  const response = await fetch(
    "https://reqres.in/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );

  return response.json();
};
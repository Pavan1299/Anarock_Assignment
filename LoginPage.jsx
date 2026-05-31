import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async e => {
    e.preventDefault();

    try {
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

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/explore");
      } else {
        setError(data.error);
      }
    } catch {
      setError("Login Failed");
    }
  };

  return (
    <div>

      <h1>WanderLog</h1>

      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>

      <p>{error}</p>

      <Link to="/register">
        Create Account
      </Link>

    </div>
  );
}

export default Login;
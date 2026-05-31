import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav>

      <h2>WanderLog</h2>

      <button onClick={logoutHandler}>
        Logout
      </button>

    </nav>
  );
}

export default Navbar;
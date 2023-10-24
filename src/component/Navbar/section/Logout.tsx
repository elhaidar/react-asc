import { Button } from "@chakra-ui/react";
import { textColor } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setIsLoggedIn } from "../../../redux/slices/authSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch(setIsLoggedIn(false));
    navigate("/login");
  };

  return (
    <Button
      bg={"transparent"}
      _hover={{
        background: "transparent",
        textDecoration: "underline",
        textUnderlineOffset: "6px",
      }}
      fontWeight={400}
      color={textColor()}
      onClick={() => handleLogout()}
    >
      Log out
    </Button>
  );
};

export default Logout;

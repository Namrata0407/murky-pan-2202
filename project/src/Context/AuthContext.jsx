import { useState, createContext } from "react";
// import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext();

export const logoutAdmin = ()=>{
  localStorage.clear()
}

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  // const navigate = useNavigate();
  const toast = useToast();

  const loginUser = (data) => {
    setIsAuth(true);
    setName(data);
  };

  const logoutSuccess = () => {
    toast({
      title: "Logout Successful.",
      description: "You are Logged out now",
      status: "error",
      duration: 9000,
      isClosable: true,
      position:'top'
    });
  };

  const logoutUser = () => {
    // alert("User logged out Successfull!!");
    logoutSuccess();
    setIsAuth(false);
    localStorage.setItem("auth", false);
    localStorage.setItem("name", "");
    window.location.reload();
    // navigate('/signin')
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, name }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

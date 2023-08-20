import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import login from "../../assests/login.jpg";
const Login = () => {
  return (
    <section className="login">
      <img src={login} alt="image" />
      <motion.button initial={{ y: "-100vh" }} animate={{ y: 0 }}>
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import SinglePlayerPage from "@/components/singleplayerpage/singleplayerpage";
import { Box } from "@mui/material";

const Play = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Navbar></Navbar>
      <SinglePlayerPage></SinglePlayerPage>
      <Footer></Footer>
    </Box>
  );
};

export default Play;

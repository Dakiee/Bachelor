import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import RankContent from "@/components/rankpage/rankpage";
import { Box } from "@mui/material";

const RankPage = () => {
  return (
    <Box height={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
      <Navbar></Navbar>
      <RankContent></RankContent>
      <Footer></Footer>
    </Box>
  );
};

export default RankPage;

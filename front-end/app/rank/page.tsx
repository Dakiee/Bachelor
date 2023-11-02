import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import RankContent from "@/components/rankpage/rankpage";

const RankPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <RankContent></RankContent>
      <Footer></Footer>
    </div>
  );
};

export default RankPage;

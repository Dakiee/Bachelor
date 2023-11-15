import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MultiPlayerPage from "@/components/multiplayer/multiplayerpage";


const Play = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MultiPlayerPage></MultiPlayerPage>
      <Footer></Footer>
    </div>
  );
};

export default Play;

import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MultiPlayerPage from "@/components/multiplayer/multiplayerpage";
import { SocketProvider } from "./SocketProvider";
import { Socket } from "socket.io-client";

const Play = async () => {
  const text = await fetch("http://localhost:3030/api/race_text", {
    cache: "no-cache",
  });
  const textData = await text.json();

  const raceResponse = await fetch("http://localhost:3030/api/race", {
    cache: "no-cache",
  });
  const raceId = await raceResponse.json();

  const userStatisticsResponse = await fetch(
    "http://localhost:3030/api/user_statistics",
    { cache: "no-cache" }
  );
  const userStatisticsId = await userStatisticsResponse.json();

  return (
    <div>
      <Navbar></Navbar>
      <SocketProvider>
        <MultiPlayerPage
          textData={textData}
          raceId={raceId}
          userStatisticsId={userStatisticsId}
        />
      </SocketProvider>
      <Footer></Footer>
    </div>
  );
};

export default Play;

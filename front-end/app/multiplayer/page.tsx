import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MultiPlayerPage from "@/components/multiplayer/multiplayerpage";
import { SocketProvider } from "./SocketProvider";
import { Box } from "@mui/material";

const Play = async () => {
  const text = await fetch(
    "https://typeracer-ytd7.onrender.com/api/race_text",
    {
      cache: "no-cache",
    }
  );
  const textData = await text.json();

  const raceResponse = await fetch(
    "https://typeracer-ytd7.onrender.com/api/race",
    {
      cache: "no-cache",
    }
  );
  const raceId = await raceResponse.json();

  const userStatisticsResponse = await fetch(
    "https://typeracer-ytd7.onrender.com/api/user_statistics",
    { cache: "no-cache" }
  );
  const userStatisticsId = await userStatisticsResponse.json();

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Navbar></Navbar>
      <SocketProvider>
        <MultiPlayerPage
          textData={textData}
          raceId={raceId}
          userStatisticsId={userStatisticsId}
        />
      </SocketProvider>
      <Footer></Footer>
    </Box>
  );
};

export default Play;

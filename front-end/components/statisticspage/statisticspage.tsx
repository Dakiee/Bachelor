"use client";

import { Box, Container, Card, Typography, Grid } from "@mui/material";
import Image from "next/image";
import style from "./statistics.module.css";
import { useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

const StatisticsPage = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  const [userName, setName] = useState("");
  const [avgWFM, setAvgWFM] = useState(0);
  const [highestWFM, setHighestWFM] = useState(0);
  const [totalTime, setTotalTime] = useState("");
  const [averageAccuracy, setAverageAccuracy] = useState("");
  const [testCount, setTestCount] = useState("");
  const [userPlace, setUserPlace] = useState("");
  const [totalData, setTotalData] = useState("");

  useEffect(() => {
    const originalName = session?.data?.user?.email;

    if (originalName) {
      const atIndex = originalName.indexOf("@");

      if (atIndex !== -1) {
        const modifiedName = originalName.substring(0, atIndex);
        setName(modifiedName);
      } else {
        console.log("Invalid name format");
      }
    } else {
      console.log("User name not available");
    }
  }, [session?.data?.user?.email]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetch(
          "https://typeracer-1be53-default-rtdb.asia-southeast1.firebasedatabase.app/user_statistics.json"
        );
        const data = await responseData.json();
        const email = session?.data?.user?.email;

        const filteredData = data.filter(
          (entry: any) => entry.user_email === email
        );

        if (filteredData.length === 0) {
          return null;
        }

        const total_time = filteredData.reduce(
          (sum: any, entry: any) => sum + entry.total_time,
          0
        );
        const highest_wpm = Math.max(
          ...filteredData.map((entry: any) => entry.highest_wpm)
        );
        const average_wpm =
          filteredData.reduce(
            (sum: any, entry: any) => sum + parseInt(entry.avg_wfm),
            0
          ) / filteredData.length;

        const totalData = filteredData.length;

        const averageAccuracy = (
          filteredData.reduce(
            (sum: any, entry: any) => sum + parseFloat(entry.avg_accuracy),
            0
          ) / totalData
        ).toFixed(2);

        const sortedUsers = data.slice().sort((a:any, b:any) => b.highest_wpm - a.highest_wpm);

        const userIndex = sortedUsers.findIndex((entry:any) => entry.user_email === email);

        const userPlace = userIndex + 1;

        setUserPlace(userPlace);
        setTotalData(totalData);
        setTotalTime(total_time);
        setHighestWFM(highest_wpm);
        setAvgWFM(average_wpm);
        setTestCount(totalData);
        setTotalTime(total_time);
        setAverageAccuracy(averageAccuracy);
      } catch (error) {
        console.error("Error fetching user statistics:", error);
      }
    };

    fetchData();
  }, [session?.data?.user?.email]);

  const StatCard = (props: any) => {
    const { value, fieldName, backgroundColor } = props;

    return (
      <Card
        style={{
          backgroundColor: backgroundColor,
          height: "100px",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography
          variant="body1"
          color="black"
          fontSize={20}
          fontWeight={"bold"}
          className={rubik.className}
          textAlign={"center"}
        >
          {value}
        </Typography>
        <Typography
          variant="body1"
          color="black"
          fontSize={20}
          className={rubik.className}
          textAlign={"center"}
        >
          {fieldName}
        </Typography>
      </Card>
    );
  };

  return (
    <>
      <Container>
        <Card className={style.firstCard}>
          <Typography
            variant="body1"
            color="black"
            className={`${rubik.className} ${style.firstCardHeaderText}`}
          >
            {userName}
          </Typography>
          <Typography
            variant="body1"
            color="black"
            className={`${rubik.className} ${style.firstCardMailText}`}
          >
            {session?.data?.user?.email}
          </Typography>
        </Card>
        <Card className={style.secondCard}>
          <Typography
            variant="body1"
            color="initial"
            className={`${rubik.className} ${style.secondCardHeaderText}`}
          >
            Статистик
          </Typography>
          <Grid container spacing={2} mx={2}>
            <Grid item xs={4}>
              <StatCard
                value={testCount}
                fieldName="Туршилтын тоо"
                backgroundColor="#FFD0D0"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={avgWFM}
                fieldName="Дундаж WPM"
                backgroundColor="#E6FFD2"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={averageAccuracy}
                fieldName="Дундаж нарийвчлал"
                backgroundColor="#C3FFFB"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={totalTime}
                fieldName="Зарцуулсан хугацаа"
                backgroundColor="#C8BAFF"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={highestWFM}
                fieldName="Хамгийн өндөр WPM"
                backgroundColor="#FFFCBB"
              />
            </Grid>
            <Grid item xs={4} className={style.secondCardFooter}>
              <StatCard
                value={"7/13"}
                fieldName="Одоогийн зэрэглэл"
                backgroundColor="#D3D3D3"
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default StatisticsPage;

"use client";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import style from "./rank.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

import { Roboto_Slab, Rubik } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["700"] });
const roboto1 = Roboto_Slab({ subsets: ["latin"], weight: ["400"] });
const rubik = Rubik({ subsets: ["latin"] });

const RankContent = () => {
  const [data, setOrderedData] = useState([]);
  const [filter, setFilter] = useState("week");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetch(
          "https://typeracer-1be53-default-rtdb.asia-southeast1.firebasedatabase.app/user_statistics.json"
        );
        const data = await responseData.json();

        if (data.length === 0) {
          return null;
        }

        const orderedData = data.sort(
          (a: any, b: any) => parseInt(b.avg_wfm) - parseInt(a.avg_wfm)
        );

        const modifiedData = orderedData.map((item: any) => {
          return {
            ...item,
            user_email: item.user_email.split("@")[0],
            updated_at: new Date(item.updated_at).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
          };
        });

        setOrderedData(modifiedData);
      } catch (error) {
        console.error("Error fetching user statistics:", error);
      }
    };

    fetchData();
  }, []);

  const filterData = (filter: any) => {
    const currentDate: any = new Date();
    let filteredData = [];

    switch (filter) {
      case "week":
        filteredData = data.filter((item: any) => {
          const itemDate = new Date(item.updated_at);
          return itemDate >= new Date(currentDate - 7 * 24 * 60 * 60 * 1000);
        });
        break;

      case "month":
        filteredData = data.filter((item: any) => {
          const itemDate = new Date(item.updated_at);
          return itemDate.getMonth() === currentDate.getMonth();
        });
        break;

      case "year":
        filteredData = data.filter((item: any) => {
          const itemDate = new Date(item.updated_at);
          return itemDate.getFullYear() === currentDate.getFullYear();
        });
        break;

      default:
        filteredData = data;
        break;
    }

    setOrderedData(filteredData);
  };

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <>
      <Container>
        <Card className={style.cardBody}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            className={roboto.className}
            pt={4}
            pl={3}
            pb={1}
          >
            Тэргүүлэгчдийн самбар
          </Typography>
          <Typography
            variant="body1"
            className={roboto1.className}
            pl={3}
            color={"gray"}
          >
            Бусад хэрэглэгчидтэй өрсөлдөж, тэргүүлэгчдийн самбарын тэргүүн
            байрыг зорь.
          </Typography>
          <div className={style.buttons}>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
              onClick={() => {
                setFilter("week");
                filterData("week");
              }}
            >
              week
            </Button>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
              onClick={() => {
                setFilter("month");
                filterData("month");
              }}
            >
              month
            </Button>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
              onClick={() => {
                setFilter("year");
                filterData("year");
              }}
            >
              year
            </Button>
          </div>
          <div>
            <Grid container className={style.tableContent}>
              <Grid item xs={2} textAlign={"center"}>
                <Typography
                  variant="body1"
                  className={style.tableHeaderText}
                  py={1}
                >
                  Ранк
                </Typography>
              </Grid>
              <Grid item xs={3} textAlign={"center"}>
                <Typography
                  variant="body1"
                  className={style.tableHeaderText}
                  py={1}
                >
                  Нэр
                </Typography>
              </Grid>
              <Grid item xs={4} textAlign={"center"}>
                <Typography
                  variant="body1"
                  className={style.tableHeaderText}
                  py={1}
                >
                  Хугацаа
                </Typography>
              </Grid>
              <Grid item xs={3} textAlign={"center"}>
                <Typography
                  variant="body1"
                  className={style.tableHeaderText}
                  py={1}
                >
                  Хамгийн их WPM
                </Typography>
              </Grid>
              {data.map((entry: any, index) => {
                return (
                  <>
                    <Grid
                      item
                      xs={2}
                      py={1}
                      display={"flex"}
                      justifyContent={"center"}
                      borderBottom={"1px solid black"}
                    >
                      <Typography
                        variant="body1"
                        className={`${style.tableCellRank}`}
                        style={{ background: getRandomColor() }}
                      >
                        {index + 1}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      textAlign={"center"}
                      py={1}
                      className={style.tableCellText}
                      borderBottom={"1px solid black"}
                    >
                      {entry.user_email}
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      textAlign={"center"}
                      py={1}
                      className={style.tableCellDate}
                      borderBottom={"1px solid black"}
                    >
                      {entry.updated_at}
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      textAlign={"center"}
                      py={1}
                      className={style.tableCellText}
                      borderBottom={"1px solid black"}
                    >
                      {entry.highest_wpm}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default RankContent;

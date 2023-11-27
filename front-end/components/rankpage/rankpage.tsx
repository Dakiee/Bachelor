import React from "react";
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
  const data = [
    { name: "Dakie", date: "2023-11-07", wpm: 120 },
    { name: "Bald", date: "2023-11-07", wpm: 80 },
    { name: "Blgn", date: "2023-11-07", wpm: 70 },
    { name: "Dalai", date: "2023-11-07", wpm: 120 },
    { name: "Boldoo", date: "2023-11-07", wpm: 80 },
    { name: "Tsedo", date: "2023-11-07", wpm: 70 },
  ];

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
            >
              7 хоног
            </Button>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
            >
              сар
            </Button>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
            >
              жил
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
              {data.map((entry, index) => {
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
                      {entry.name}
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      textAlign={"center"}
                      py={1}
                      className={style.tableCellDate}
                      borderBottom={"1px solid black"}
                    >
                      {entry.date}
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      textAlign={"center"}
                      py={1}
                      className={style.tableCellText}
                      borderBottom={"1px solid black"}
                    >
                      {entry.wpm}
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
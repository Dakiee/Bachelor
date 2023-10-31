"use client";

import React, { useState } from "react";
import { Card, Container, Typography, Grid, Button, Box } from "@mui/material";
import style from "./playpage.module.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const PlayPage = () => {
  const progress = 30;

  return (
    <div className={style.container}>
      <Container maxWidth="xl">
        <Card className={style.cardBody}>
          <Typography
            variant="body1"
            fontSize={30}
            className={`${rubik.className} ${style.playHeaderText}`}
          >
            The race is on! Type the text below:
          </Typography>
          <div className={style.playContent}>
            <div className={style.playContentHeader}>
              <Typography variant="body1">Speed</Typography>
              <Typography variant="body1">Accuracy</Typography>
            </div>
            <div className={style.playStatus}>
              <Typography variant="body1" fontSize={24}>You</Typography>
              <div className={style.progress_bar}>
                <div
                  className={style.progress}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <Typography variant="body1">80WPM</Typography>
            <Typography variant="body1">100%</Typography>
            <div></div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default PlayPage;

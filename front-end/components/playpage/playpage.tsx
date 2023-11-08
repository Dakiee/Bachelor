import React from "react";
import {
  Card,
  Container,
  Typography,
  Grid,
  Button,
  Box,
  TextField,
} from "@mui/material";
import style from "./playpage.module.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const PlayPage = () => {
  const PlayContent = (props: any) => {
    const { name, progress, wpm, completion, style } = props;

    return (
      <div className={`${style.playStatus} ${rubik.className}`}>
        <Typography
          variant="body1"
          fontSize={18}
          className={style.playStatusName}
        >
          {name}
        </Typography>
        <div className={style.progress_bar}>
          <div
            className={style.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={style.playContentEnd}>
          <Typography
            variant="body1"
            fontSize={18}
            className={style.playContentBodyText}
          >
            {wpm}
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            className={style.playContentBodyText}
          >
            {completion}
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <div className={`${style.container} ${rubik.className}`}>
      <Container>
        <Card className={style.cardBody}>
          <div className={style.topText}>
            <Typography
              variant="body1"
              fontSize={24}
              className={`${rubik.className} ${style.playHeaderText}`}
            >
              Уралдаан үргэлжилж байна! Доорх текстийг бичнэ үү:
            </Typography>
            <Typography variant="body1" color="red" className={`${rubik.className} ${style.linkText}`}>
              invite people
            </Typography>
          </div>

          <div className={style.playContent}>
            <div className={style.playContentHeader}>
              <Typography
                variant="body1"
                fontSize={18}
                className={style.playContentHeaderText}
              >
                Хурд
              </Typography>
              <Typography
                variant="body1"
                fontSize={18}
                className={style.playContentHeaderText}
              >
                Нарийвчлал
              </Typography>
            </div>

            <PlayContent
              name="Dakie"
              progress={80}
              wpm="80WPM"
              completion="100%"
              style={style}
            />

            <PlayContent
              name="Baldan"
              progress={60}
              wpm="80WPM"
              completion="100%"
              style={style}
            />

            <div className={style.typingTextContainer}>
              <Typography
                variant="body1"
                className={style.typingText}
                fontSize={20}
              >
                Эрт урьд цагт энэ дэлхийд долоон нар гараад, ган гачиг болоод,
                газрын хөрс улайдаад, ус мөрөн ширгээд, ургамал мод хатаад,
                амьтан хүн халууцаад, адуу мал харангадаад, байх суухын аргагүй
                болж гэнэ. Тэгтэл тэр нутагт Эрхий мэргэн гэдэг харснаа
                харвадаг, харваснаа онодог хавтай мэргэн харваач байж гэнээ.
              </Typography>
            </div>

            <div>
              <TextField
                id=""
                className={`${style.typingField} ${rubik.className}`}
                // onChange={}
              />
            </div>

            <Button
              variant="text"
              className={`${rubik.className} ${style.leaveBtn}`}
            >
              уралдааныг орхи
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default PlayPage;

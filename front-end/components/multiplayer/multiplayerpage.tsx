"use client";

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
import { useRef, useEffect, useState, useContext } from "react";
import { calculateWPM, calculateAccuracy } from "../../utils/tools";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/app/api/firebase";
import { ref, set } from "firebase/database";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import ResultModal from "./resultmodal";
import { useSocket } from "@/app/multiplayer/SocketProvider";
import { useSearchParams } from "next/dist/client/components/navigation";

const rubik = Rubik({ subsets: ["latin"] });

interface User {
  id: string;
  roomId: string;
  data: {
    progress: number;
    wpm: number;
    accuracy: number;
  };
}

const MultiPlayerPage = (props: any) => {
  const textId = props.textData.id;
  const quote = props.textData.content;
  const raceId = props.raceId;
  const userId = props.userStatisticsId;

  const TIME_LIMIT = 90;
  const MAX_LENGTH = 32;

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [startCountDown, setStartCountDown] = useState(0);
  const [fetchData, setFetchData] = useState(false);

  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [status, setStatus] = useState("idle");
  const [wordIndex, setWordIndex] = useState(0);
  const [charStatus, setCharStatus] = useState<any[]>([]);
  const [words, setWords] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [failed, setFailed] = useState(false);

  const socket = useSocket();
  const searchParams = useSearchParams();
  const [roomId, setRoomId] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const animalNames = [
    "Lion",
    "Elephant",
    "Giraffe",
    "Penguin",
    "Kangaroo",
    "Tiger",
    "Cheetah",
    "Dolphin",
    "Koala",
    "Panda",
  ];

  function getRandomAnimalName() {
    const randomIndex = Math.floor(Math.random() * animalNames.length);
    return animalNames[randomIndex];
  }

  useEffect(() => {
    if (socket) {
      if (searchParams!.get("roomId")) {
        const roomId = searchParams!.get("roomId");
        socket!.emit("join-room", roomId);
      } else {
        socket!.emit("create-room", props.textData.content);
      }
      socket.on("room-checker", (checker) => {
        if (checker === 1) {
          setFetchData(true);
          start();
        }
      });

      socket!.on("update-room", (res) => {
        const { users, textContent, roomId } = JSON.parse(res);
        setUsers(users);
        setWords(textContent);
        setRoomId(roomId);
      });
    }
  }, [socket]);

  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login");
  //   },
  // });

  useEffect(() => {
    setWords(quote);

    // return () => {
    //   socket!.disconnect();
    // };
  }, []);

  useEffect(() => {
    if (words) {
      const initial_array = new Array(words.length).fill(-1);
      setCharStatus(initial_array);
    }
  }, [words]);

  useEffect(() => {
    let timeLimit: any;
    if (status === "playing") {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      timeLimit = setInterval(() => {
        setTime((prev) => {
          if (prev >= TIME_LIMIT) {
            clearInterval(timeLimit);
            setStatus("finished");
            return TIME_LIMIT;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    } else if (status === "completed") {
      clearInterval(timeLimit);
      setFailed(false);
      setShowModal(true);

      // set(ref(db, "race/" + raceId), {
      //   creator_id: session?.data?.user?.email,
      //   race_type_id: 2,
      //   text_id: textId,
      //   created_at: Date.now(),
      //   updated_at: Date.now(),
      // });

      // set(ref(db, "user_statistics/" + userId), {
      //   user_id: session?.data?.user?.email,
      //   avg_wfm: calculateWPM(time, wordIndex).currentWPM,
      //   avg_accuracy: calculateAccuracy(correct, wrong),
      //   highest_wpm: calculateWPM(time, wordIndex).highestWPM,
      //   lowest_wpm: calculateWPM(time, wordIndex).lowestWPM,
      //   created_at: Date.now(),
      //   updated_at: Date.now(),
      // });
    } else if (status === "finished") {
      clearInterval(timeLimit);
      setFailed(true);
      setShowModal(true);

      // set(ref(db, "race/" + raceId), {
      //   creator_id: session?.data?.user?.email,
      //   race_type_id: 2,
      //   text_id: textId,
      //   created_at: Date.now(),
      //   updated_at: Date.now(),
      // });

      // set(ref(db, "user_statistics/" + userId), {
      //   user_id: session?.data?.user?.email,
      //   avg_wfm: calculateWPM(time, wordIndex).currentWPM,
      //   avg_accuracy: calculateAccuracy(correct, wrong),
      //   highest_wpm: calculateWPM(time, wordIndex).highestWPM,
      //   lowest_wpm: calculateWPM(time, wordIndex).lowestWPM,
      //   created_at: Date.now(),
      //   updated_at: Date.now(),
      // });
    }

    return () => clearInterval(timeLimit);
  }, [status]);

  const resetGame = () => {
    setCharStatus(new Array(words.length).fill(-1));
    setCharIndex(0);
    setWordIndex(0);
    setInput("");
    setCorrect(0);
    setWrong(0);
    setTime(0);
    setProgress(0);
  };

  const start = () => {
    setStartCountDown(5);
    setFetchData(true);
    resetGame();

    const interval = setInterval(() => {
      setStartCountDown((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setFetchData(false);
          setStatus("playing");
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  const TextCharColor = ({ index, char }: { index: any; char: string }) => {
    return (
      <span
        className={`
        ${charStatus[index] === 1 ? style.greenText : ""} 
        ${charStatus[index] === 0 ? style.redText : ""}`}
      >
        {char}
      </span>
    );
  };

  const handleInput = (e: any) => {
    const currString = e.target.value;
    if (currString.length > MAX_LENGTH) {
      return;
    }
    let isCorrect = true;
    let char_correct = 0;
    let word_correct = 0;
    let last_space = 0;

    for (let idx = 0; idx < currString.length && idx < words.length; idx++) {
      if (currString.charAt(idx) !== words.charAt(charIndex + idx)) {
        isCorrect = false;
        break;
      }
      if (currString.charAt(idx) === " ") {
        last_space = idx + 1;
        word_correct = word_correct + 1;
      }
      char_correct = idx + 1;
    }
    // remaining input
    const remaining = currString.substring(last_space);

    // update char status
    const currStatus = charStatus;

    // correct
    currStatus.fill(1, charIndex, charIndex + char_correct);

    // wrong
    currStatus.fill(0, charIndex + char_correct, charIndex + currString.length);

    // n.a
    currStatus.fill(-1, charIndex + currString.length, charIndex + MAX_LENGTH);

    // progress
    const userIndex = users.findIndex((user) => user.id === socket?.id);

    const user = users[userIndex];
    user.roomId = roomId;
    user.data.progress = ((charIndex + char_correct) / words.length) * 100;
    user.data.wpm = Number(calculateWPM(time, userIndex).currentWPM);
    user.data.accuracy = Number(calculateAccuracy(correct, wrong));

    // switch index
    setCharIndex(charIndex + last_space);
    setWordIndex(wordIndex + word_correct);
    setCharStatus(currStatus);

    if (currString.length > input.length) {
      isCorrect ? setCorrect(correct + 1) : setWrong(wrong + 1);
    }
    setInput(remaining);
    if (charIndex + char_correct >= words.length) {
      setStatus("completed");
    }

    socket!.emit("update-progress", user);
  };

  const handleRenderText = () => {
    let index = 0;
    const curr_words = words.split(" ");

    const res = curr_words.map((word, word_index) => {
      const letters = word.split("");
      const results = letters.map((char) => {
        const curr_index = index;
        index = index + 1;
        return <TextCharColor key={index} char={char} index={curr_index} />;
      });
      const space_index = index;
      index = index + 1;
      return (
        <span key={word_index}>
          <span
            className={`${wordIndex === word_index ? style.grayBorder : ""}`}
          >
            {results}
          </span>
          {word_index !== curr_words.length - 1 && (
            <TextCharColor char={" "} index={space_index} />
          )}
        </span>
      );
    });
    return res;
  };

  const ProgressBar = (props: any) => {
    const { name, progress, wpm, accuracy, style } = props;
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
            {wpm}WPM
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            className={style.playContentBodyText}
          >
            {accuracy}%
          </Typography>
        </div>
      </div>
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRetry = () => {
    setStatus("idle");
    setShowModal(false);
    start();
  };

  const handleLeave = () => {
    setStatus("idle");
    setShowModal(false);
    setFetchData(false);
  };

  const handleCopyClick = (props: any) => {
    navigator.clipboard
      .writeText(
        `https://duckracer-git-main-dakiee.vercel.app/multiplayer?roomId=${props}`
      )
      .then(function () {
        alert(
          "Text copied: " +
            `https://duckracer-git-main-dakiee.vercel.app/multiplayer?roomId=${props}`
        );
      })
      .catch(function (err) {
        console.error("Unable to copy text to clipboard", err);
      });
  };

  return (
    <>
      <ResultModal
        open={showModal}
        onClose={handleCloseModal}
        handleRetry={handleRetry}
        handleLeave={handleLeave}
        wpm={calculateWPM(time, wordIndex).currentWPM}
        time={time}
        accuracy={calculateAccuracy(correct, wrong)}
        failed={failed}
      />
      {status === "idle" ? (
        <div className={`${style.container} ${rubik.className}`}>
          <Container>
            <Card className={style.loadBody}>
              <div className={`${style.container} ${rubik.className}`}>
                <div className={style.renderTest}>
                  <Image
                    src={fetchData ? "/assets/loading.gif" : "/assets/idle.gif"}
                    width={450}
                    height={400}
                    alt="icon"
                  />
                  {fetchData
                    ? `Тест эхлэхэд ${startCountDown}...`
                    : "Хүн орж ирэхийг хүлээж байна"}

                  <Typography
                    variant="body1"
                    color="red"
                    className={`${rubik.className} ${style.linkText}`}
                    onClick={() => handleCopyClick(roomId)}
                  >
                    copy URL
                  </Typography>
                </div>
              </div>
            </Card>
          </Container>
        </div>
      ) : (
        <div className={`${style.container} ${rubik.className}`}>
          <Container>
            <Card className={style.cardBody}>
              <div className={style.topText}>
                <Typography
                  variant="body1"
                  fontSize={24}
                  className={`${rubik.className} ${style.playHeaderText}`}
                >
                  Уралдаан үргэлжилж байна:
                  {time < TIME_LIMIT
                    ? ` ${TIME_LIMIT - time} секунд`
                    : "Дууслаа"}
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

                {users.map((user, index) => (
                  <ProgressBar
                    key={user.id}
                    name={`user ${index + 1}`}
                    progress={user.data.progress}
                    wpm={user.data.wpm}
                    accuracy={user.data.accuracy}
                    style={style}
                  />
                ))}

                <div className={style.typingTextContainer}>
                  <Typography
                    variant="body1"
                    className={style.typingText}
                    fontSize={20}
                  >
                    {handleRenderText()}
                  </Typography>
                </div>

                <div>
                  <TextField
                    id=""
                    value={input}
                    className={`${style.typingField} ${rubik.className}`}
                    onChange={handleInput}
                    ref={inputRef}
                  />
                </div>

                <Button
                  variant="text"
                  className={`${rubik.className} ${style.leaveBtn}`}
                >
                  <Link href="/">уралдааныг орхи</Link>
                </Button>
              </div>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
};

export default MultiPlayerPage;

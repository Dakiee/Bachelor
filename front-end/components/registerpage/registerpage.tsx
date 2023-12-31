"use client";

import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { Poppins } from "next/font/google";
import style from "./register.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/api/firebase";
import { signIn } from "next-auth/react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (passwordOne !== passwordTwo) {
      console.log("wrong password blyat");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, passwordOne);
      const password = passwordOne;

      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });

      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container style={{ height: "100vh", backgroundColor: "white" }}>
      <Grid item xs={6}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              color={"black"}
              fontWeight={"bold"}
              className={poppins.className}
            >
              WELCOME BACK
            </Typography>
            <Typography
              variant="body1"
              align="center"
              mb={10}
              margin={"m-5"}
              color={"gray"}
              className={poppins.className}
            >
              Тавтай морил! Мэдээллээ оруулна уу.
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              style={{ height: "100%" }}
            >
              <Grid item xs={7}>
                <form>
                  <Typography
                    variant="h1"
                    color="black"
                    className={poppins.className}
                    fontWeight={"bold"}
                    fontSize={"16px"}
                  >
                    Имэйл
                  </Typography>
                  <TextField
                    label="Имэйлээ оруулна уу"
                    variant="outlined"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <Typography
                    variant="h1"
                    color="black"
                    className={poppins.className}
                    fontWeight={"bold"}
                    fontSize={"16px"}
                  >
                    Нууц үг
                  </Typography>
                  <TextField
                    label="Нууц үгээ оруулна уу"
                    type="password"
                    onChange={(event) => setPasswordOne(event.target.value)}
                    name="passwordOne"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Typography
                    variant="h1"
                    color="black"
                    className={poppins.className}
                    fontWeight={"bold"}
                    fontSize={"16px"}
                  >
                    Нууц үгээ баталгаажуулна уу
                  </Typography>

                  <TextField
                    label="Нууц үгээ батлах"
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    name="passwordTwo"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Grid container alignItems="center">
                    <Grid item xs={12} alignItems="right">
                      <Button
                        color="primary"
                        size="small"
                        className={poppins.className}
                      >
                        <Link href="/login">Таньд бүртгэл байгаа юу ??</Link>
                      </Button>
                    </Grid>
                  </Grid>

                  <Button
                    variant="contained"
                    onClick={handleSignUp}
                    fullWidth
                    className={`${poppins.className} ${style.forgotBtn}`}
                    sx={{ borderRadius: "15px" }}
                    style={{ marginTop: "20px" }}
                  >
                    Бүртгүүлэх
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    type="submit"
                    sx={{ borderRadius: "15px" }}
                    className={`${poppins.className} ${style.googleBtn}`}
                    style={{ marginTop: "10px" }}
                  >
                    <Image
                      src="/assets/img/google.png"
                      width={20}
                      height={20}
                      alt="Picture of the google btn"
                      className={style.googleImg}
                    ></Image>
                    Sign In with Google
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{
            height: "100%",
            background: 'url("../assets/img/keyboard.png")',
            backgroundSize: "cover",
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;

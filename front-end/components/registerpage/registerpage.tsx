"use client";

import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { Poppins } from "next/font/google";
import style from "./register.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp, auth } from "../../app/api/firebase";

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
      console.log("User created");
      router.push("/");
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
              Welcome! Please enter your details.
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
                    Email
                  </Typography>
                  <TextField
                    label="Enter your email"
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
                    Password
                  </Typography>
                  <TextField
                    label="Enter your password"
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
                    Confirm Password
                  </Typography>
                  <TextField
                    label="Confirm your password"
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    name="passwordTwo"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    onClick={handleSignUp}
                    fullWidth
                    className={`${poppins.className} ${style.forgotBtn}`}
                    sx={{ borderRadius: "15px" }}
                    style={{ marginTop: "20px" }}
                  >
                    Sign Up
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

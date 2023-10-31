"use client";

import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import style from "./login.module.css";
import Image from "next/image";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../api/firebase";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { onAuthStateChanged } from "firebase/auth";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(firebaseApp);

  const handleSignIn = async () => {

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      setError(error.message);
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
              Welcome back! Please enter your details.
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
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
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
                    variant="outlined"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <Grid container alignItems="center">
                    <Grid item xs={1}>
                      <Checkbox color="primary" />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography
                        variant="body1"
                        color="black"
                        className={poppins.className}
                      >
                        Remember Me
                      </Typography>
                    </Grid>
                    <Grid item xs={4} alignItems="right">
                      <Button
                        color="primary"
                        size="small"
                        className={poppins.className}
                      >
                        Forgot Password
                      </Button>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    onClick={handleSignIn}
                    fullWidth
                    className={`${poppins.className} ${style.forgotBtn}`}
                    sx={{ borderRadius: "15px" }}
                    style={{ marginTop: "20px" }}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
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

export default SignIn;

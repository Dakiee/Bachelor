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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const LogInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              Буцаад тавтай морил! Мэдээллээ оруулна уу.
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              style={{ height: "100%" }}
            >
              <Grid item xs={7}>
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
                  Нууц үг
                </Typography>
                <TextField
                  label="Нууц үгээ оруулна уу"
                  type="password"
                  variant="outlined"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Grid container alignItems="center">
                  <Grid item xs={1}>
                    <Checkbox color="primary" checked={true}/>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      variant="body1"
                      color="black"
                      className={poppins.className}
                    >
                      Намайг сана
                    </Typography>
                  </Grid>
                  <Grid item xs={4} alignItems="right">
                    <Button
                      color="primary"
                      size="small"
                      className={poppins.className}
                    >
                      Нууц үгээ мартсан
                    </Button>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  onClick={() =>
                    signIn("credentials", {
                      email,
                      password,
                      redirect: true,
                      callbackUrl: "/",
                    })
                  }
                  disabled={!email || !password}
                  fullWidth
                  className={`${poppins.className} ${style.forgotBtn}`}
                  sx={{ borderRadius: "15px" }}
                  style={{ marginTop: "20px" }}
                >
                  Нэвтрэх
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

export default LogInPage;

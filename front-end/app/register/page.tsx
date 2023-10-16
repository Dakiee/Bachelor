import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Poppins } from "next/font/google";
import style from "./register.module.css";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const SignUp = () => {
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
              color={"grey"}
              className={poppins.className}
            >
              Welcome! Please enter your details.
            </Typography>
            <Grid
              container
              xs={12}
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
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    className={style.forgotBtn}
                    sx={{ borderRadius: "15px" }}
                    style={{ marginTop: "20px" }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ borderRadius: "15px" }}
                    className={style.googleBtn}
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

export default SignUp;

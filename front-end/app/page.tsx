"use client";

import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import MainPage from "@/components/mainpage/mainpage";
import Footer from "@/components/footer/footer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login");
  //   },
  // });

  return (
    <div>
      <Navbar></Navbar>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

Home.requireAuth = true;

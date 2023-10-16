import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import MainPage from "@/components/mainpage/mainpage";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainPage></MainPage>
    </div>
  );
}

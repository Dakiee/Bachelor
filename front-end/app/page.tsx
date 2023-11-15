import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import MainPage from "@/components/mainpage/mainpage";
import Footer from "@/components/footer/footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./api/firebase";

export default function Home() {
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is authenticated:", user);
    } else {
      console.log("No user authenticated");
    }
  });

  return (
    <div>
      <Navbar></Navbar>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

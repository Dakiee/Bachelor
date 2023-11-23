"use client";

import { useState } from "react";
import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const session = useSession({
    required: false,
    onUnauthenticated() {},
  });

  const goToProfile = () => {
    router.push("/statistics");
  };

  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick1 = (event: any) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_left}>
        <Link href="/" className={style.navbar_left}>
          <Image
            src="/assets/img/ducklogo.png"
            width={50}
            height={50}
            alt="Logo"
          ></Image>
          Race
        </Link>
      </div>
      <div className={style.navbar_right}>
        <div className={style.navItem}>
          <Image
            src="/assets/img/play.png"
            width={35}
            height={35}
            alt="Logo"
          ></Image>
          <Link href="/singleplayer">Тоглох</Link>
        </div>
        <div className={style.navItem}>
          <Image
            src="/assets/img/rank.png"
            width={35}
            height={35}
            alt="Logo"
          ></Image>
          <Link href="/rank">Ранк</Link>
        </div>
        <div className={style.navItem}>
          <Image
            src="/assets/img/about.png"
            width={35}
            height={35}
            alt="Logo"
          ></Image>
          <Link href="/about">Тухай</Link>
        </div>

        <div>
          <Button
            variant="contained"
            onClick={handleClick1}
            style={{
              marginRight: 30,
              marginLeft: 30,
              backgroundColor: "transparent",
            }}
          >
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
          </Button>

          <Menu
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            {session ? (
              <MenuItem onClick={goToProfile}>Профайл</MenuItem>
            ) : (
              <MenuItem onClick={() => router.push("/login")}>Нэвтрэх</MenuItem>
            )}
            {session && <MenuItem onClick={() => signOut()}>Гарах</MenuItem>}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

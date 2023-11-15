import Link from "next/link";
import style from "./navbar.module.css"; // Import the CSS file
import Image from "next/image";

const Navbar = ({}) => (
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
      <div className={style.userIcon}>
        <Image
          src="/assets/img/keyboard.png"
          alt="Logo"
          width={25}
          height={25}
          className={style.user_profile}
        ></Image>
      </div>
    </div>
  </nav>
);

export default Navbar;

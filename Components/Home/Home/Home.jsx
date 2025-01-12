import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logoImg}
            src="/images/logo.png"
            alt="logo"
            width={220}
            height={50}
          />
        </Link>
        <Link href="/test-auth">Test Auth</Link>
        <Link href="/register">Register</Link>
        {/* <Link href="/login">Login</Link> */}
      </div>
    </div>
  );
};

export default Home;

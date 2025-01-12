"use client";
import useGetUserData from "@/hooks/user/useGetUserData";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const TestAuth = () => {
  const [userProfileData, isLoading] = useGetUserData();

  console.log("--------------userProfileData:", userProfileData);
  return (
    <div className={styles.testAuth}>
      <Link href="/">
        <Image
          className={styles.logoImg}
          src="/images/logo.png"
          alt="logo"
          width={220}
          height={50}
        />
      </Link>
      <div className={styles.conrainer}>
        <span>Logged in user: </span>
        <h1>{userProfileData?.name}</h1>
      </div>
    </div>
  );
};

export default TestAuth;

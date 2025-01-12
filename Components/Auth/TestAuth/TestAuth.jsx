"use client";
import useGetUserData from "@/hooks/user/useGetUserData";
import styles from "./styles.module.scss";

const TestAuth = () => {
  const [userProfileData, isLoading] = useGetUserData();

  console.log("--------------userProfileData:", userProfileData);
  return (
    <div className={styles.testAuth}>
      <div className={styles.conrainer}>
        <span>Logged in user: </span>
        <h1>{userProfileData?.name}</h1>
      </div>
    </div>
  );
};

export default TestAuth;

"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import InputRHF2 from "@/Components/utils/InputRHF2/InputRHF2";
import Link from "next/link";
import useLogin from "@/hooks/auth/useLogin";

const Login = () => {
  const [
    setValue,
    register,
    control,
    onSubmit,
    handleSubmit,
    errors,
    isSuccess,
    respMessage,
    isLoading,
  ] = useLogin();
  return (
    <section className={styles.register}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/images/auth-login-illustration-light.png"
            alt="img"
            width={500}
            height={500}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.regForm}>
          <div className={styles.allInputs}>
            <Link href="/">
              <Image
                className={styles.logoImg}
                src="/images/logo.png"
                alt="logo"
                width={220}
                height={50}
              />
            </Link>

            <InputRHF2
              isRequired={true}
              label="Email"
              placeholder="Enter your email address"
              type="email"
              id="email"
              register={{ ...register("email") }}
              error={errors.email?.message}
            />
            <InputRHF2
              isRequired={true}
              label="Password"
              placeholder="Enter your password"
              type="password"
              id="password"
              register={{ ...register("password") }}
              error={errors.password?.message}
            />
          </div>

          <div className={styles.btns}>
            <button type="submit" className={styles.authBtn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import InputRHF2 from "@/Components/utils/InputRHF2/InputRHF2";
import PhoneNumberInput from "@/Components/utils/PhoneNumberInput/PhoneNumberInput";
import ReactSelectRHF from "@/Components/utils/ReactSelect/ReactSelectRHF";
import useRegister from "@/hooks/auth/useRegister";
import Link from "next/link";

const clientTypesList = [
  {
    value: "MY_COMPANY",
    label: "MY_COMPANY",
  },
  {
    value: "B2C",
    label: "B2C",
  },
  {
    value: "B2B",
    label: "B2B",
  },
];

const Register = () => {
  const [
    setValue,
    register,
    control,
    onSubmit,
    handleSubmit,
    errors,
    onChangePhone,
    isPhoneValid,
    onChangeNationalIDImage,
    onChangProfileImage,
    uploadedImg,
    isSuccess,
    respMessage,
    isLoading,
  ] = useRegister();
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
          <Link href="/">
            <Image
              className={styles.logoImg}
              src="/images/logo.png"
              alt="logo"
              width={220}
              height={50}
            />
          </Link>
          <div className={styles.inputWrapper}>
            <InputRHF2
              isRequired={true}
              label="Name"
              placeholder="Enter your name"
              type="text"
              id="name"
              register={{ ...register("name") }}
              error={errors.name?.message}
            />
            <InputRHF2
              isRequired={true}
              label="Email"
              placeholder="Enter your email address"
              type="email"
              id="email"
              register={{ ...register("email") }}
              error={errors.email?.message}
            />
          </div>
          <div className={styles.inputWrapper}>
            <InputRHF2
              isRequired={true}
              label="Password"
              placeholder="Enter your password"
              type="password"
              id="password"
              register={{ ...register("password") }}
              error={errors.password?.message}
            />
            <InputRHF2
              isRequired={true}
              label="Password confirmation"
              placeholder="Re enter your password"
              type="password"
              id="passwordConfirmation"
              register={{ ...register("passwordConfirmation") }}
              error={errors.passwordConfirmation?.message}
            />
          </div>
          <div className={styles.inputWrapper}>
            <PhoneNumberInput
              isRequired={true}
              label="Phone Number"
              onChangePhone={onChangePhone}
            />
            <ReactSelectRHF
              isRequired={true}
              label="Client type"
              placeholder="Select client type"
              options={clientTypesList}
              error={errors.clientType?.message}
              classNamePrefix="react-select2"
              control={control}
              name="clientType"
            />
          </div>

          <InputRHF2
            isRequired={true}
            label="Issuing authority"
            placeholder="Enter the issuing authority"
            type="text"
            id="authorityauthority"
            register={{ ...register("authority") }}
            error={errors.authority?.message}
          />
          <InputRHF2
            isRequired={true}
            label="Company name"
            placeholder="Enter the company name"
            type="text"
            id="companyName"
            register={{ ...register("companyName") }}
            error={errors.companyName?.message}
          />
          <InputRHF2
            isRequired={true}
            label="Commercial license number"
            placeholder="Enter the commercial license number"
            type="text"
            id="commercialLicenseNumber"
            register={{ ...register("commercialLicenseNumber") }}
            error={errors.commercialLicenseNumber?.message}
          />
          <div className={styles.btns}>
            <button type="submit" className={styles.authBtn}>
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;

"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { baseUrl } from "../functions/baseUrl";
import {
  sendData,
  sendDataFileAxios,
  sendDataFiles,
} from "../functions/sendData";
import { useEffect, useState } from "react";
import notify from "../notify/useNotification";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import useGetSavedUserData from "./useGetSavedUserData";

const useRegister = () => {
  const locale = "en";
  const router = useRouter();
  const pathname = usePathname();

  const [token, userData, selectedCountry2] = useGetSavedUserData();

  const [respMessage, setRespMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseFromApi, setResponseFromApi] = useState(null);

  // ------------------------Phone Input----------------------------------------
  const [isB2B, setIsB2B] = useState(false);
  const [enteredPhone, setEnteredPhone] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  let onChangePhone = (isValid, key, num) => {
    setIsPhoneValid(isValid);
    setSelectedCountryCode(key);
    setEnteredPhone(num);
  };

  const selectClientTypeHandler = (type) => {
    if (type === "B2B") {
      setIsB2B(true);
    } else {
      setIsB2B(false);
    }
  };

  // ----------------------------------------------------------------

  const schema = Yup.object({
    name: Yup.string()
      .max(255, "Name must be at most 255 characters long")
      .required("Name is required"),
    phone: Yup.string(),
    countryCode: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be at most 32 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &)"
      )
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be at most 32 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &)"
      )
      .oneOf([Yup.ref("password")], "Password mismatch")
      .required("Password confirmation is required"),
    clientType: Yup.string().required("Client type is required"),
    authority: Yup.string(),
    companyName: Yup.string(),
    commercialLicenseNumber: Yup.string(),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm: "",
      countryCode: "",
      clientType: "",
      authority: "",
      companyName: "",
      commercialLicenseNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("*** *** *** Data:", data);

    const formData = {
      name: data.name,
      mobile: enteredPhone,
      mobile_country_code: selectedCountryCode,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirm,
      client_type: data.clientType,
      issuing_authority: data.authority,
      company_name: data.companyName,
      commercial_license_number: data.commercialLicenseNumber,
    };

    console.log("Form submission data:", formData);

    const response = await sendDataFileAxios(
      `${baseUrl}register`,
      formData,
      locale,
      token
    );
    setResponseFromApi(response);
    setIsLoading(false);
    console.log("response:", response);
  };

  useEffect(() => {
    if (responseFromApi) {
      setRespMessage(responseFromApi?.data?.message);
      if (responseFromApi.status === true) {
        if (responseFromApi.message) {
          setRespMessage(responseFromApi?.message);
          notify(responseFromApi.message, "success");
        }
        setIsSuccess(true);
        if (responseFromApi.data) {
          // Cookies.set("token", responseFromApi.data.token);
          // Cookies.set("userData", responseFromApi.data);

          setTimeout(() => {
            router.push("/");
            // window.location.href = "/";
          }, 2000);
        }
      } else {
        setRespMessage(responseFromApi?.data?.message);
      }
    } else {
      setRespMessage(responseFromApi?.message);
    }
  }, [responseFromApi]);

  return [
    setValue,
    register,
    control,
    onSubmit,
    handleSubmit,
    errors,
    onChangePhone,
    isPhoneValid,
    isSuccess,
    respMessage,
    isLoading,
    isB2B,
    selectClientTypeHandler,
  ];
};

export default useRegister;

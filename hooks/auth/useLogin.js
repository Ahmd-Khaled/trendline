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

const useLogin = () => {
  const locale = "en";
  const router = useRouter();
  const pathname = usePathname();

  const [token, userData, selectedCountry2] = useGetSavedUserData();

  const [respMessage, setRespMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseFromApi, setResponseFromApi] = useState(null);

  // ----------------------------------------------------------------

  const schema = Yup.object({
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
        /[@$!%*?&#]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &,#)"
      )
      .required("Password is required"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  console.log("Form errors:", errors);

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("*** *** *** Data:", data);

    const formData = {
      email: data.email,
      password: data.password,
    };

    console.log("Form submission data:", formData);

    const response = await sendDataFileAxios(
      `${baseUrl}auth/login`,
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
      if (responseFromApi.status) {
        if (responseFromApi.message) {
          notify(responseFromApi.message, "success");
        }
        if (responseFromApi.data) {
          Cookies.set("token", responseFromApi.data.token);
          // Cookies.set("userData", responseFromApi.data);
          // redirect("/sick-leave-request");
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      }
    }
  }, [responseFromApi]);

  return [
    setValue,
    register,
    control,
    onSubmit,
    handleSubmit,
    errors,
    isSuccess,
    respMessage,
    isLoading,
  ];
};

export default useLogin;

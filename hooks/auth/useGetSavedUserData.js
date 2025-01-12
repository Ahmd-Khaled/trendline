"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useGetSavedUserData = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("eg");

  let windowType = typeof window;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(Cookies.get("token"));
      setSelectedCountry(Cookies.get("country"));
      //   setUserData(Cookies.get("userData"));
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, [windowType, token]);

  return [token, userData, selectedCountry];
  // return [token, userData, selectedCountry];
};

export default useGetSavedUserData;

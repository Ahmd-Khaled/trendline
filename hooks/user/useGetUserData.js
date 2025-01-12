"use client";
import { useEffect, useState } from "react";
import { getData, getDataWithToken } from "../functions/getData";
import { baseUrl } from "../functions/baseUrl";
import useGetSavedUserData from "../auth/useGetSavedUserData";

const useGetUserData = () => {
  const locale = "en";
  const [userProfileData, setUserProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, userData, selectedCountry2] = useGetSavedUserData();
  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      const response = await getData(
        `${baseUrl}test-auth`,
        {
          // next: { revalidate: 3600 },
          // cache: 'no-store',
        },
        locale,
        token
      );

      if (response) {
        if (response.data) {
          setUserProfileData(response.data);
          setIsLoading(false);
        }
      }
    };

    run();
  }, [locale]);

  return [userProfileData, isLoading];
};

export default useGetUserData;

import axios from "axios";
import Cookies from "js-cookie";

export const sendData = async (url, data, locale) => {
  let userToken;
  if (typeof window !== "undefined") {
    userToken = Cookies.get("token") || localStorage.getItem("token") || "";
  }
  // e.preventDefault();
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "language",
          "apiPassword",
        ],
        "Accept-Language": "*",
        "x-api-key": "yum_gutt_1666",
        "X-country-id": "dc",
        lang: locale || "en",
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(res);
    if (res.ok) {
      console.log("Success!");
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  return res.json();
};

export const sendDataWithToken = async (url, data, locale, userToken) => {
  // e.preventDefault();
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "language",
          "apiPassword",
        ],
        "Accept-Language": "*",
        apiPassword: "123",
        country: "33",
        lang: locale || "ar",
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(res);
    if (res.ok) {
      console.log("Success!");
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  return res.json();
};

export const sendwithoutData = async (url, locale, userToken) => {
  // e.preventDefault();
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "language",
          "apiPassword",
        ],
        "Accept-Language": "*",
        "x-api-key": "yum_gutt_1666",
        "X-country-id": "dc",
        lang: locale || "en",
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(res);
    if (res.ok) {
      console.log("Success!");
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  return res.json();
};

export const sendDataForgetPassword = async (url, data) => {
  // e.preventDefault();
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "language",
          "apiPassword",
        ],
        "Accept-Language": "*",
        country: "33",
        apiPassword: "123456",
      },
      // mode: 'no-cors'
    });
    console.log(res);
    if (res.ok) {
      console.log("Success!");
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  return res.json();
};

export const sendDataFileAxios = async (url, data, locale, userToken) => {
  let axiosRes;
  try {
    let axiosConfig = {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "language",
          "apiPassword",
        ],
        "Accept-Language": "*",
        "x-api-key": "yum_gutt_1666",
        "X-country-id": "dc",
        lang: locale || "en",
        Authorization: `Bearer ${userToken}`,
      },
    };

    await axios
      .post(url, data, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        axiosRes = res.data;
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        axiosRes = err?.response;
      });
  } catch (error) {
    console.log(error);
  }

  return axiosRes;
};

export const sendDataFiles = async (url, data, locale, userToken) => {
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "language",
          "apiPassword",
        ],
        "Accept-Language": "*",
        "x-api-key": "yum_gutt_1666",
        "X-country-id": "dc",
        lang: locale || "en",
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(res);
    if (res.ok) {
      console.log("Success!");
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  return res.json();
};

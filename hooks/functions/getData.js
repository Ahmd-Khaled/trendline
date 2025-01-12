import Cookies from "js-cookie";

export const getData = async (url, type, locale) => {
  let userToken;
  if (typeof window !== "undefined") {
    userToken = Cookies.get("token") || localStorage.getItem("token") || "";
  }

  const res = await fetch(url, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      allow_headers: [
        "Content-Type",
        "Authorization",
        "language",
        "apiPassword",
      ],
      "Accept-Language": "*",
      apiPassword: "123456",
      lang: locale || "ar",
      Authorization: `Bearer ${userToken}`,
    },
    type,
  });

  // console.log("=======url from getData()=====", url)
  // console.log("=======res from getData()=====", res)

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getDataWithToken = async (url, type, locale, userToken) => {
  const res = await fetch(url, {
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      allow_headers: ["Content-Type", "Authorization", "Accept-Language"],
      "Accept-Language": locale || "en",
      Authorization: `Bearer ${userToken}`,
      // Authorization: `Bearer ${Cookies.get("token")}`,
    },
    type,
  });

  // console.log("=======url from getData()=====", url)
  // console.log("=======res from getData()=====", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

import Cookies from "js-cookie";

export const putData = async (url, data, locale) => {
  let userToken;
  if (typeof window !== "undefined") {
    userToken = Cookies.get("token") || localStorage.getItem("token") || "";
  }
  // e.preventDefault();
  let res;
  try {
    res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'allow_headers': ['Content-Type', 'Authorization', 'language', 'apiPassword'],
        'Accept-Language': '*',
        'apiPassword': '123',
        'country': '33',
        'lang': locale || "ar",
        'Authorization': `Bearer ${userToken}`,
      },
  }
  );
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
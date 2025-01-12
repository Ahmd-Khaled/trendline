import Cookies from "js-cookie";

export const deleteData = async (url, locale, userToken) => {
  // e.preventDefault();
  let res;
  try {
    res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        allow_headers: [
          "Content-Type",
          "Authorization",
          "Accept-Language",
          "x-api-key",
          "X-country-id",
        ],
        "Accept-Language": locale || "en",
        "x-api-key": "yum_gutt_1666",
        "X-country-id": "dc",
        Authorization: `Bearer ${userToken}`,
        // Authorization: `Bearer ${Cookies.get("token")}`,
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

import { cookies } from "next/headers";

export const getDataServer = async (url, type, locale) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("token");

  // console.log("=====================accessToken: ", accessToken?.value);

  // console.log("****************************************url:", url)

  const res = await fetch(url, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      'allow_headers': ["Content-Type","Authorization","language","apiPassword"],
      "Accept-Language": "*",
      'apiPassword': "123456",
      'lang': locale || 'ar',
      'Authorization': `Bearer ${accessToken?.value}`,
    },
    type,
  })

    // console.log("=======url from getData()=====", url)
    // console.log("=======res from getData()=====", res)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import decrypt from "../util/decrypt";

export const indexApiUrl = "https://probation.sirkell.com/probation/test"
export const propertiesApiUrl = "https://probation.sirkell.com/probation/test/properties"
export const reqresUserApiUrl = "https://reqres.in/api/users"

// export const fetchData = async () => {
//     try {
//         const res = await axios.get(propertiesApiUrl);
//         const data = decrypt(res.data);
//         return data;
//     }
//     catch(err){
//         console.log(err)
//     }

// }

export const fetchData = async (url: string, callbackFunction: any) => {
    try {
      const res = await axios.get(url);
      const data = decrypt(res.data);
      return callbackFunction(true, data);
    } catch (err) {
      return callbackFunction(false, err);
    }
  };

export const postData = async (url: string, data: any) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const res = await axios.post(url, data, config);
        console.log(res);
        return res
      } catch (err: any) {
        console.log(decrypt(err.response.data))
      }
}

export const patchData = async (url: string, data: any) => {
  try {
      const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
      const res = await axios.patch(url, data, config);
      return res
    } catch (err: any) {
      console.log(decrypt(err.response.data))
    }
}
export const deleteData = async (url: string) => {
  try {
      const res = await axios.delete(url);
      return res
    } catch (err: any) {
      console.log(decrypt(err.response.data))
    }
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from "crypto-js";
import { SECRET_CODE } from "./data";

export default function encrypt(data: any) {
    const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        SECRET_CODE
      ).toString();
    return encryptedData
}
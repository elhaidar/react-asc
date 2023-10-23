import CryptoJS from 'crypto-js'
import { SECRET_CODE } from './data';

export default function decrypt (data: string)  {
    const bytes  = CryptoJS.AES.decrypt(data, SECRET_CODE)
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return JSON.parse(decryptedData)
}
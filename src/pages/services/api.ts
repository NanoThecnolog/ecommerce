import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL
if (!url) console.log("variável de ambiente não definida")
export const api = axios.create({
    baseURL: url
})
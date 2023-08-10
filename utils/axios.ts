import axios from "axios";

export const axiosCustom = axios.create({
  baseURL: "https://stake88.up.railway.app/api",
  headers: {
    Authorization:
      "Bearer 5a97b20ae88712eda6935b1704c7c603da4c6828db9053b03e68747175dd9e0ede970dec5780cb248bdd15d76e0bfca49175190399fc14697579defa51e72dc719db02536db8ab06048ac31f2107bbb0dd6d046a8c2a7b48cf68b8d773f908c24650d6f2ef4870189f5f65e236f6e70746a9c1b38c3611160dc806b9bfb68921",
  },
});

export const fetcher = (url: any) => axiosCustom.get(url).then((res) => res);

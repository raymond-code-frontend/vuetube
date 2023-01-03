import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    part: "snippet,id",
    maxResults: 50,
    regionCode: "VN",
  },
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url: any) => {
  const data = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

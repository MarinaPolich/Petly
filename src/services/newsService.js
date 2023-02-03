import axios from "axios";
// const newsInstance = axios.create({
//     baseURL: "https://petly-back.onrender.com/api/news"
// })

export const getNews = async () => {
  try {
    const { data } = await axios.get("https://pet-ly.onrender.com/api/news");
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

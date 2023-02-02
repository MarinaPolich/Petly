import axios from "axios";
// const newsInstance = axios.create({
//     baseURL: "https://petly-back.onrender.com/api/news"
// })

export const getNews = async () => {
  const { data } = await axios.get("/news"); //newsInstance.get()
  console.log('data', data)
  return data.data.result;
};

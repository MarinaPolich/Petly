import axios from "axios";
// const newsInstance = axios.create({
//     baseURL: "https://petly-back.onrender.com/api/news"
// })

export const getNews = async () => {

  try {
    const { data } = await axios.get("https://petly-back.onrender.com/api/news");
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }
};

import axios from "axios";

// const friendsInstance = axios.create({
//     baseURL: "https://petly-back.onrender.com/api/friends"
// })

export const getFriends = async () => {
  try {
    const { data } = await axios.get("https://pet-ly.onrender.com/api/friends");
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

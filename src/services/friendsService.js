import axios from "axios";

// const friendsInstance = axios.create({
//     baseURL: "https://petly-back.onrender.com/api/friends"
// })

export const getFriends = async () => {
  const { data } = await axios.get("/friends");
  return data;
};

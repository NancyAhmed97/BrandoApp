import { useDispatch } from "react-redux";
import { userMethod } from "../Redux/authRducer";
import axios from "./axios";

const getCategories = async () => {
  try {
    const response = await axios.post(`https://marriage-application.onrender.com/getall?gender=Female`);
    return console.log(response.data);
  } catch (e) {
    return e.response
  }
}

const getAllUser = async (email,password) => {
  try {
    await axios({

      url: "/signin",
      method: "POST",
      data:{
      
          email:email,
          password:password
      

      }
    }).then((res) => {
      dispatch(userMethod(res.data.user))
      dispatch(tokenMethod(res.data.token))

    });

  } catch (error) {
    console.log(error.response);

  }
}

export default getAllUser;
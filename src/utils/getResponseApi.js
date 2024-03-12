import axios from "axios";

const getResponseApi = async (shortcode) => {
    const instance = axios.create({
        baseURL:process.env.NEXT_PUBLIC_NEXT_URL,
        });
    let response;
    try {
      response = await instance.get(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/shortcode/${shortcode}`
      );
    } catch (error) {
      if (error.response) {
        response = error.response;
      }
    }
    return response;
  };

  export default getResponseApi;
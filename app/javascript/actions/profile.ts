import axios from "axios";

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.get('/api/profiles');
    return data;
  } catch (error) {
    console.error(error);
  }
}

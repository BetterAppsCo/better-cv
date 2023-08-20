import axios from "axios";
import { useQuery } from 'react-query'

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.get('/api/profiles');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const useProfile = () => {
  const { isLoading, data: user } = useQuery('profiles', getCurrentUser);
  return {
    isLoading,
    user
  }
}
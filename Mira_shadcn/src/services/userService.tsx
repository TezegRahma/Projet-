import axios from 'axios';

export const checkEmailExists = async (email: string) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/users/check_email/?email=${email}`);
    return response.data.exists;
  } catch (error) {
    console.error('Error de recherche sur email:', error);
    return false;
  }
};
export const checkCinExists = async (cin: number) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/users/check_identifient/?cin=${cin}`);
      return response.data.exists;
    } catch (error) {
      console.error('Error recherche existance CIN :', error);
      return false;
    }
  };
const BASE_URL = 'http://localhost:5005/fruits';

export const getAllFruits = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
    return data;
  } catch (error) {
    console.error('error fetching all fruit', error);
  }
};

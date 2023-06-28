import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //*: get category
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/category/get-category`);
      setCategories(data?.category);
    } catch (error) {
      console.error('Error',error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}

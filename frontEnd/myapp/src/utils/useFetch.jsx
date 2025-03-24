import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.techiconnect.shop/getItems");
      setData(response.data)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading }
}

export default useFetch;

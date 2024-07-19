import { useState } from "react";

const useFetch = async (url, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  try {
    setLoading(true);
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    if (responseData) {
      setData(responseData);
    }
  } catch (error) {
    console.error(error);
    setError(
      error.body.message || error.message || `Sorry! Something went wrong`
    );
  } finally {
    setLoading(false);
  }

  return { data, loading, error };
};

export default useFetch;

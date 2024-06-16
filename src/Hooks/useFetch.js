import { useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  const fetchData = async (url, options= {method: "GET"}) => {
    setLoading(true);
    try {
      const response = await fetch(url, {...options});
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      const errorMessage = `Error in useFetch.fetchData: ${
        error.response.body
          ? error.response.body.message
          : error.response.error?.message
      }`;
      console.error(errorMessage);

      setError("Sorry unable to fetch data! please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) fetchData(url);
  }, [url]);

  return { loading, data, error };
};

export default useFetch;

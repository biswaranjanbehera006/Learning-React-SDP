import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]); // must be an array

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [url]);

  return data;
}

export default useFetch;

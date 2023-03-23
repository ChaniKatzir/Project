import useAxios from "axios-hooks";
import React, { useEffect } from "react";
import fetch from "node-fetch";
import axios from "axios";

  const getData =async (url) => {

  try {
    
      const response = await axios.get(`http://localhost:2000/${url}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

//   const [{ data, loading, error }, refetch] = useAxios(`http://localhost:2000/${url}`)

//   useEffect(() => { console.error(error); }, [error])
//   return { data, loading, error, refetch };
// }
  // useEffect(() => {
  //   fetchData();
  // }, []);
//}

export default getData;
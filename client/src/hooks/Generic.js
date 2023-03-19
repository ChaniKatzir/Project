import React from "react";
import axios from 'axios';
async function UseGet(url,props) {
debugger
    try {
      const response = await axios.get(`${url}/${props}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  export default UseGet;
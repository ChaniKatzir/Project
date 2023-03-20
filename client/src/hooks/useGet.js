import useAxios from "axios-hooks";
import { useEffect } from "react";

const useGet = (url) => {
  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:2000/${url}`)

  useEffect(() => { console.error(error); }, [error])
  return { data, loading, error, refetch };
}

export default useGet;
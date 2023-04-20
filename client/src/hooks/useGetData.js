// import useAxios from 'axios-hooks'
// import { useEffect } from 'react'

// export const usePutData = () => {
//     const [data, setData] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');


//     const putDataA = async (url, body) => {
//         try {
//             setLoading(true)
//             let response = await axios.put(`http://localhost:2000/${url}`, body).then(
//                 setData(response)
//             ).then(
//                 setLoading(false)
//             );
//             return data,loading,error;
//         } catch (error) {
//             console.log(error).then(
//                 setError(response)
//             ).then(
//                 setLoading(false)
//             );
//         }
//     }
//     return putDataA;
// }





// // export const useGetData=(url)=> {
// //   const [{ data, loading, error }, refetch] = useAxios(
// //     url
// //   )
// // useEffect((err)=>{console.log(err)},[error])
// // return{data,loading,error,refetch}
// // }



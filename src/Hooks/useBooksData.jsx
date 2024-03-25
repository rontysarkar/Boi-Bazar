import { useEffect, useState } from "react";


const useBooksData = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('/Books.json')
            const data = await res.json();
            setData(data)
        }

        fetchData();
    },[])

    return {data};
};

export default useBooksData;

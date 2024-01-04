import { useEffect, useState } from "react";
import { getRestaurants } from "../api/api";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')

function HomeView() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const listData = await getRestaurants()
                setData(listData)
            } catch (error) {
                
            }
        }
        fetchData();
    }, [])

    useEffect(()=>{
        if(ACCESS_TOKEN) {
            const token = jwtDecode(ACCESS_TOKEN)
            const userEmail = token.email;

            console.log(userEmail);
        }
    },[])

    return(
        <>
        {ACCESS_TOKEN}
        <div className="container">
            {
                data.length > 0 ? (
                    data.map((item, i)=>{
                        return (
                            <li key={i}><Link to={`/view/${item.id}`}>{item.name}</Link></li>
                        )
                    })
                ) : (
                    <p>nodata</p>
                )
            }
        </div>
        </>
    )
}

export default HomeView;
import { useParams } from "react-router-dom";
import { getListView } from "../api/api";
import { useEffect, useState } from "react";

function ListView() {
    const {id} = useParams()
    const [listData, setListData] = useState(null)

    useEffect(()=>{
        const fetchData = async (id) => {
            try {
                const data = await getListView(id)
                setListData(data)
            } catch (error) {
                console.error("레스토랑 데이터를 가져오는 중 오류 발생:", error);
            }
        }
        fetchData(id);
    }, [id])

    return(
        <>
            <div>
                {listData ? 
                (
                <div>
                    <h2>{listData.name}</h2>
                    <p>주소 : {listData.address}</p>
                </div>
                ): 
                (<div>로그인 필요</div>)}
            </div>
        </>
    )
}

export default ListView;
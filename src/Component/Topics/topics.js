import { useEffect, useState } from "react";
import "./topics.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


function Topic(){
    const [data,setData] = useState([])
    const token = useSelector(state => state.changeLogin);
    useEffect(() => {
        fetch("http://localhost:3000/topics")
            .then(res => res.json())
            .then(duLieu => {
                setData(duLieu);
            })
    },[])
    return (
        <>
            {token.isLogin&&<Outlet />}
            <div className="topics">
                <div className="topics__container">
                    <div className="topics__title">
                        <h4>Danh sách các bài kiểm tra</h4>
                    </div>
                    <div className="topics__main">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên Chủ Đề</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => 
                                    <tr aria-rowspan={2}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><Link to = {""+item.id}><button>Làm Bài</button></Link></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Topic;
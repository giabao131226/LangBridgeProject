import { Link } from "react-router-dom";
import "./RegisterPage.css"
import { useState } from "react";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import { useDispatch, useSelector } from "react-redux"; 
import { add } from "../../Actions/allAction";
function RegisterPage(){
    const dataSelect = useSelector(state => state.account);
    const dispatch = useDispatch();
    const [data,setData ] = useState({});
    const guiThongTinDky = (e) => {
        e.preventDefault();
        const chars = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            '0','1','2','3','4','5','6','7','8','9'
        ];
        let token = "";
        for(let i=0;i<20;i++){
            token += chars[Math.floor(Math.random()*chars.length)];
        }
        const fullData = {...data,"token":token};
        setData(fullData);
        dispatch(add(fullData));
        fetch("http://localhost:3000/user",{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type":  "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(duLieu => {
            Swal.fire({
                title: "Chúc Mừng!",
                text: "Bạn đã tạo tài khoản thành công",
                icon: "success"
            });
            e.target.childNodes.forEach((item) => {
                item.value = "";
            });
        })
    }
    const handleChange = (e) =>{
        setData({...data,[e.target.name]: e.target.value})
    }
    return (
        <>
            <div className="Register">
                <div className = "Register__container">
                    <div className="Register__main">
                        <h4 className="Register__title">
                            Đăng Ký
                        </h4>
                        <form className="Register__main" onSubmit={guiThongTinDky}>
                            <label>Email</label>
                            <input name = "email" type="email" placeholder="Email" onChange={ handleChange}></input>
                            <label>Tên Đăng Nhập</label>
                            <input name="user" type = "text" placeholder="UserName" onChange={handleChange}></input>
                            <label>Mật Khẩu</label>
                            <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                            <button>Đăng Ký</button>
                        </form>
                    </div>
                    <p className="Register__condition">By signing up, you accept our <Link to = {"/terms"}>Terms and Conditions</Link> and <Link to ={"/terms"}>Privacy Policy</Link>.</p>
                    <p className="Register__account">Got account? <Link to ={"/signin"}>Sign in here</Link></p>
                </div>
            </div>
        </>
    )
}
export default RegisterPage;
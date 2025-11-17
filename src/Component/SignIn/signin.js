import { Link, Navigate, useNavigate } from "react-router-dom";
import "./signin.css";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLogin } from "../../Actions/allAction";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

function SignIn(){
    const check = useSelector(state => state.changeLogin);
    const dispatch = useDispatch();
    const [account,setAccount] = useState([]);
    const [login,setLogin] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLogin({...login,[e.target.name]: e.target.value})
    }
    useEffect(() => {
        fetch("http://localhost:3000/user")
            .then(res => res.json())
            .then(duLieu => {
                setAccount(duLieu);
            })
    },[navigate])
    const handleNavigate = useCallback(() => {
        navigate("/");
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        let found = false;
        for(let i = 0;i<account.length;i++){
            if(account[i].user == login.user && account[i].password==login.password){
                dispatch(changeLogin({
                    isLogin : true,
                    token: account[i].token
                }));
                Swal.fire({
                    title: "Chúc Mừng!",
                    text: "Bạn Đã Đăng Nhập Thành Công!",
                    icon: "success"
                });
                found = true;
                document.cookie = `token = ${account[i].token}`;
                break;
            }
        }
        if(found==false){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }else{
            handleNavigate();
        }
    }
    return (
        <>
            <div className="Signin">
                <div className = "Signin__container">
                    <div className="Signin__main">
                        <h4 className="Signin__title">
                            Đăng Nhập
                        </h4>
                        <form className="Signin__main" onSubmit={handleSubmit} >
                            <label>Tên Đăng Nhập</label>
                            <input name="user" type = "text" placeholder="UserName" onChange={handleChange}></input>
                            <label>Mật Khẩu</label>
                            <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                            <button>Đăng Nhập</button>
                        </form>
                        <div className="Signin__account">
                            <span>No account? <Link to = {"/register"}>Create here</Link></span>
                            <span><Link to = {"/register"}>Forgot password?</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;
import { IoSearch } from "react-icons/io5";
import "./head.css";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { changeLogin } from "../../Actions/allAction";
function Head(){
    const token = useSelector(state => state.changeLogin)
    const dispatch = useDispatch();
    const handleLogOut = useCallback(() => {
        dispatch(changeLogin({}))
        document.cookie = `token = ${token.token};expires = Thu,01 Jan 1970 00:00:00 utc`;
    },[token])
    return (
        <>
        <header className = "Header">
            <div className="Header__main">
                <div className="Header__img">
                    <img src="../../../../AnhNe.png"></img>
                </div>
                <form className="Header__search">
                    <div className="Header__SearchMain">
                        <span>Join Game? Enter PIN: </span>
                        <input type="text" placeholder="123 456"></input>
                    </div>
                    <button><IoSearch /></button>
                </form>
                <div className="Header__tool">
                {token.isLogin==true 
                    ?  <button onClick={handleLogOut}>Log Out</button>
                    :
                    <>
                    <Link to = {"/signin"}><button>Sign in</button></Link>
                    <Link to = {"/register"}><button>Register</button></Link>
                    </>
                }
                </div>
            </div>
            <hr></hr>
        </header>
        </>
    )
}
export default Head;
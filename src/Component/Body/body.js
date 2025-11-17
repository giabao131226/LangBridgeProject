import { useSelector } from "react-redux";
import "./body.css";
import { Link, Outlet } from "react-router-dom";
function Body(){
    const token = useSelector(state => state.changeLogin)
    return (
        <>  
            <div className="body">
                <div className="body__container">
                    {
                        token.isLogin==true&&
                        <div className="body__main">
                            <p>Chúc mừng bạn đã đăng nhập thành công</p>
                            <div className="body__tool">
                                <Link to = {"/topic"}><button>Danh sách chủ đề ôn tập</button></Link>
                                <Link to ={"/done"}><button>Danh sách bài đã luyện tập</button></Link>
                            </div>
                            <hr></hr>
                        </div>
                    }
                    <div className="body__introduce">
                        <p>Trang web QuizIT được xây dựng nhằm tạo ra một môi trường học tập chủ động và thú vị dành cho sinh viên công nghệ thông tin. Thay vì chỉ ghi nhớ lý thuyết, sinh viên có thể ôn luyện kiến thức thông qua các trò chơi câu hỏi nhanh, giúp củng cố lại kiến thức nền tảng về lập trình, thuật toán, cấu trúc dữ liệu, mạng máy tính, hệ điều hành và nhiều môn học khác. Với giao diện đơn giản, dễ sử dụng, QuizIT hỗ trợ người học rèn luyện tư duy và phản xạ thông tin một cách tự nhiên và hiệu quả.</p>
                        <p>Không chỉ là một công cụ ôn thi, QuizIT còn hướng đến việc tạo ra tinh thần cạnh tranh lành mạnh giữa các sinh viên IT. Người dùng có thể tham gia các phòng thi, thi đấu theo mã PIN, xếp hạng điểm số và chia sẻ kết quả với bạn bè. Từ đó, việc học trở nên thú vị hơn, không còn nhàm chán và tạo động lực phát triển bản thân mỗi ngày. QuizIT là lựa chọn phù hợp cho những ai muốn học nhanh – nhớ lâu – và tự tin hơn trong quá trình học tập và thực hành công nghệ thông tin.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body;
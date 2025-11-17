
import "./checkDiem.css"
function CheckDiem(){
    return (
        <>
            <div className="checkDiem">
                <div className="checkDiem__container">
                    <div className="vienImg">
                        <img src="../../../../Gemini_Generated_Image_18jjdl18jjdl18jj.png"></img> 
                    </div>
                    <div className="checkDiem__main">
                        <p className="checkDiem__congratulation">🎉 Chúc mừng bạn!</p>
                        <p>Bạn đã hoàn thành bài thi</p>
                        <p>Điểm Số Của Bạn Là: 10</p>
                    </div>
                    <div className="checkDiem__button">
                        <button className="checkDiem__lamLai">Làm Lại Bài</button>
                        <button className="checkDiem__close">Đóng</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckDiem;
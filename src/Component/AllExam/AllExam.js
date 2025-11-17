import { useCallback, useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import "./AllExam.css";
import { ImExit } from "react-icons/im";
import { FaPaperPlane } from "react-icons/fa6";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import confetti from "canvas-confetti"
import CheckDiem from "../CheckDiem/checkDiem";

function AllExam(){
    const [data,setData] = useState([]);
    const [topic,setTopic] = useState("");
    const ToPicID = useParams().id;
    const navigate = useNavigate();
    const handleBack = useCallback(() => {
        navigate(-1);
    },[])
    const handleSubmit = useCallback((e) => {
        e.preventDefault(); 
        const form = e.target.closest("form"); 
        const formData = new FormData(form);

        let soCauDung = 0;

        for (let [key, value] of formData.entries()) {
            const question = data.find(q => q.id == key);
            if (question && parseInt(value) === question.correctAnswer) {
                soCauDung++;
            }
        }

        const diem = (soCauDung / data.length) * 10;

        if (diem >= 8.5) {
            const duration = 3000;
            const end = performance.now() + duration;
            const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
            
            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    startVelocity: 50,
                    origin: { x: 0, y: 0.6 },
                    colors,
                });

                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    startVelocity: 50,
                    origin: { x: 1, y: 0.6 },
                    colors,
                });

                if (performance.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }
    }, [data]);
    const handleValue = useCallback((id) => {
        let element = document.querySelector(`.boxThu${id}`)
        element.classList.add("lamMoBox");
    },[])
    useEffect(() => {
        fetch("http://localhost:3000/questions")
            .then(res => res.json())
            .then(duLieu => {
                setData(duLieu)
            })
        fetch("http://localhost:3000/topics")
            .then(res => res.json())
            .then(topic => {
                let tmp;
                for(let i=0;i<topic.length;i++){
                    if(topic[i].id==ToPicID){
                        tmp = topic[i].name;
                        break;
                    }
                }
                setTopic(tmp);
            })
    },[])
    return (
        <>  
            <CheckDiem />
            <div className="button">
                <button onClick={handleBack}><ImExit/> Trở Về</button>
            </div>
            <hr></hr>
            <div className="exam">
                <div className="exam__container">
                    <div className="exam__taskBar">
                        <div className="exam__title">
                            Bài Quiz Chủ Đề: {topic}
                        </div>
                        <p>Mục lục câu hỏi {"("+data.length+")"}</p>
                        <div className="exam__numberQuestions ">
                            {
                                data.map((item,index) => 
                                    <div className={`exam__numberBox boxThu${index+1}`}>{index+1}</div>
                                )
                            }
                        </div>
                    </div>
                    <form className="exam__main">
                        <p className="exam__listQuestion">Danh sách câu hỏi</p>
                        {
                            data.map((item,index) => 
                                <div className="exam__questions">
                                    <p>Câu {index+1}</p>
                                    <p>{item.question}</p>
                                    <div className="exam__answers">
                                        {
                                            item.answers.map((e,dapAn) =>
                                                <label className="exam__answer">
                                                    <input type = "radio" name = {item.id} value = {dapAn} onClick={() => handleValue(item.id)}></input>
                                                    {e}
                                                </label>   
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                        <button onClick={handleSubmit} className="buttonSubmit"><FaPaperPlane /> Nộp Bài</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AllExam;
import React from 'react'
import { useState,useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import "./User.css";
import datas from "./Data.json";

function AdminDashboard() {

    const [chartData, setChartData] = useState({});
    const [daywiseData, setDaywiseData] = useState([]);

    const chart =()=>{
        setChartData({
            labels:['12 A.M.','2 A.M.','4 A.M.','6 A.M.','8 A.M.','10 A.M.','12 P.M.','2 P.M.','4 P.M.'
        ,'6 P.M.','8 P.M.','10 P.M.'],
            datasets:[
                {   data:daywiseData,
                    label: 'Mood Trends',
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                    borderwidth:4
                }
            ]
        })
    }
    function showData(day){
        setDaywiseData(datas[day.date].data)
        chart()
        console.log(day,daywiseData)
    }

    useEffect(()=>{
        chart()
    },[])

    return (
            <div className="graphh-container">
                <div style={{display:"grid", marginTop:"auto",marginBottom:"auto",transform:"rotate(-90deg)"}}>hasgwid</div>
                <Line data={chartData} options={{
                    responsive: true,
                    title:{text:'THICCNESS SCALE',display:true},
                    scales:{
                        yAxes:[

                            {label:"happiness Index",
                                gridLines:{
                                    display:false
                                }
                            }
                        ],
                        xAxes:[
                            {
                                gridLines:{
                                    display:false
                                }
                            }
                        ]
                    }
                }}/>

                <div className="selectDay">
                    <select className="select1">
                        <option value="">January</option>
                        <option value="">February</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                    <select className="select2">
                        <option value="">Week 1</option>
                        <option value="">Week 2</option>
                        <option value="">Week 3</option>
                        <option value="">Week 4</option>
                    </select>
                </div>

                <div className="dates">
                    <button  onClick={()=>showData("Monday")}>Monday</button>
                    <button onClick={()=>showData("Tuesday")}>Tuesday</button>
                    <button onClick={()=>showData("Wednesday")}>Wednesday</button>
                    <button onClick={()=>showData("Thursday")}>Thursday</button>
                    <button onClick={()=>showData("Friday")}>Friday</button>
                    <button onClick={()=>showData("Saturday")}>Saturday</button>
                    <button onClick={()=>showData("Sunday")}>Sunday</button>
                </div>
            </div>
        
    )
}


export default AdminDashboard

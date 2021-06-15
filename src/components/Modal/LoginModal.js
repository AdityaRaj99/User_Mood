import React, { useState } from 'react';
import './Modal.css';
import { useHistory } from 'react-router';

export const LoginModal = ({ show, setShowModal, user }) => {

    const history = useHistory();
    const [checkOutState, setCheckoutSatate] = useState("first");


    function AdminLogin() {
        history.push('/AdminDashboard')
    }
    
    function UserLogin(){
        history.push('/UserDashboard')
    }

    return (
        <div className="modal-wrapper" hidden={!show}>
            <div className='modal-container' hidden={checkOutState === "first" ? false : true}>
                <div className="modal-header">
                    <span onClick={() => { setShowModal(false); setCheckoutSatate("first") }} className="close-modal-btn">x</span>
                </div>
                <div className="modal-content">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="password" />
                    <button onClick={UserLogin}>User Login</button>
                    <div className="modal-footer">
                    <button onClick={() => { setCheckoutSatate("second") }} className="btn-cancel">Admin Login</button>
                    </div>
                </div>
            </div>


            <div className='modal-container2' hidden={checkOutState === "first" ? true : false}>
                
                <button onClick={() => { setShowModal(false); setCheckoutSatate("first") }} className="close-payment-btn">x</button>
                <div className="details">
                <h3>Admin Login</h3>
                    <input type="password" placeholder="Admin Key" />
                    <button onClick={AdminLogin} className="Login">Login</button>
                </div>
            </div>
        </div>
    )
};
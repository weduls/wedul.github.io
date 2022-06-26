import React, {useEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom';

function Detail() {
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (state == undefined) {
            console.log('redirect!!')
            navigate('/home');
        }
    });

    if (state) {
        return (
            <div>
                <span>{state.title ? state.title : ''}</span>
            </div>
        );
    }
    return null;
}

export default Detail
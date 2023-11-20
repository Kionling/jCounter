import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            navigate('/'); // Replace '/' with the desired home page URL
        }
    }, [countdown, navigate]);

    return (
        <div>
            <h1>404: Not Found</h1>
            <p>Redirecting back to the home page in {countdown} seconds...</p>
        </div>
    );
}



export default NotFound;
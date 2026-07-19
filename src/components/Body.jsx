import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if (userData) return;
        try {
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            });
            dispatch(addUser(res.data));
        } catch (err) {
            if (err.response?.status === 401) {
                navigate("/login");
            }
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">

            {/* Background blobs */}

            <div className="fixed w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] top-0 left-0 opacity-30"></div>

            <div className="fixed w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] bottom-0 right-0 opacity-30"></div>

            {/* Actual page content */}
            <div className="relative z-10">

                <Navbar />

                <Outlet />

                <Footer />

            </div>

        </div>
    )
}

export default Body
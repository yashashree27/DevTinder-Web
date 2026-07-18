import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'

const Connections = () => {

    const connections = useSelector((store) => store.connections);
    
    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/connections', {
                withCredentials: true
            });
            dispatch(addConnection(res?.data?.data))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchConnections();
    }, [])

    return (
        <div className='text-center my-4'>
            <h1 className='font-bold text-2xl'> Connections</h1>

            {connections?.map(connection => {
                const { firstName, lastName, age, about, gender, photoUrl, skills } = connection;
                return (
                    <div className='flex m-4 p-4 bg-base-300 rounded-xl w-1/2 mx-auto'>
                        <div>
                            <img
                            alt="photo"
                            src={photoUrl}
                            className='w-20 h-20 rounded-full'
                        />
                        </div>
                        <div className='mx-5 text-left'>
                            <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                            { age && gender && (<p>{age + ", " + gender}</p>)}
                            <p>{about}</p>
                            <p>{skills?.join(",  ")}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Connections
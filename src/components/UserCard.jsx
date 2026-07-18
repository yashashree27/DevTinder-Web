import React from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';
import axios from 'axios';

const UserCard = ({ feed }) => {

    const dispatch = useDispatch();

    const { _id, firstName, lastName, photoUrl, about, age, gender } = feed;

    const handleSendRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + '/sendConnectionRequest/' + status + '/' + _id ,{} , {
                withCredentials: true
            });
            dispatch(removeUserFromFeed(_id));
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <div className="card bg-base-300 w-80 shadow-sm">
                <figure>
                    <img
                        src={photoUrl}
                        alt="Photo"
                        className="w-full h-80 object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    <p>{about}</p>
                    { age && gender && (<p>{age + ", " + gender}</p>)}
                    <div className="card-actions justify-center m-4 gap-4">
                        <button className="btn btn-primary" onClick={() => handleSendRequest('Ignored', _id)}>Ignore</button>
                        <button className="btn btn-secondary" onClick={() => handleSendRequest('Interested', _id)}>Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
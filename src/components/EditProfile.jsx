import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [skills, setSkills] = useState(user.skills);
    const [age, setAge] = useState(user.age);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false)

    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("")
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit', {
                firstName,
                lastName,
                about,
                age,
                skills,
                photoUrl,
                gender
            }, {
                withCredentials: true
            });
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
            dispatch(addUser(res?.data?.data));

        } catch (err) {
            setError(err.response?.data)
        }
    }

    return (
        <>
            <div className="flex justify-center my-10">
                <div className="flex justify-center mx-10">
                    <div className="card bg-base-300 w-85 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title my-3 justify-center"> Edit Profile </h2>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">First Name</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Last Name</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Age</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Photo URL</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        value={photoUrl}
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">About</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Gender</legend>
                                    <select 
                                     className="select select-neutral"
                                     value={gender}
                                     onChange={(e) => setGender(e.target.value)}
                                     >
                                        <option>male</option>
                                        <option>female</option>
                                        <option>others</option>
                                    </select>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Skills</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                    />
                                </fieldset>
                            </div>
                            <p className="text-red-500 text-center mt-2">
                                {error}
                            </p>
                            <div className="card-actions justify-center my-4">
                                <button className="btn btn-primary" onClick={saveProfile}> Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard feed={{ firstName, lastName, photoUrl, about, age, gender }} />
            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile updated successfully.</span>
                    </div>
                </div>
            )}
        </>

    )
}

export default EditProfile
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {

  const [emailId, setEmailId] = useState("sheela@gmail.com");
  const [password, setPassword] = useState("Sheela@1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLoginClick = async () => {
    try {
      const response = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      }, { withCredentials: true });
      dispatch(addUser(response.data));
      navigate("/")
    } catch (error) {
      console.error(error);

    }
  }

  return (
    <div className="flex justify-center my-15">
      <div className="card bg-base-300 w-85 shadow-sm">
        <div className="card-body">
          <h2 className="card-title my-3 justify-center"> Login Page </h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                className="input"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={handleLoginClick}> Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
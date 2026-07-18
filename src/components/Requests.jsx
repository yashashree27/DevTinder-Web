import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestSlice';

const Requests = () => {

  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/receive/pendingRequest", {
        withCredentials: true
      });
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.log(err);

      console.error(err)
    }
  }

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1 className='font-bold text-center my-10'>No Request Found</h1>

  return (
    <div className='text-center my-4'>
      <h1 className='font-bold text-2xl'> Connection Requests</h1>

      {requests?.map(request => {
        const { _id, firstName, lastName, age, about, gender, photoUrl, skills } = request.fromUserId;
        return (
          <div key={_id} className='flex justify-between items-center m-4 p-4 bg-base-300 rounded-xl w-1/2 mx-auto'>
            <div>
              <img
                alt="photo"
                src={photoUrl}
                className='w-20 h-20 rounded-full'
              />
            </div>
            <div className='flex-1 mx-5 text-left'>
              <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
              {age && gender && (<p>{age + ", " + gender}</p>)}
              <p>{about}</p>
              <p>{skills?.join(",  ")}</p>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-primary">Reject</button>
              <button className="btn btn-secondary">Accept</button>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Requests
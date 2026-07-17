import React from 'react';

const UserFeed = ({ feed }) => {

    const { firstName, lastName, photoUrl, about } = feed;

    return (
        <div>
            <div className="card bg-base-300 w-80 shadow-sm">
                <figure>
                    <img
                        src={photoUrl}
                        alt="Photo"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    <p>{about}</p>
                    <div className="card-actions justify-center m-4 gap-4">
                        <button className="btn btn-primary">Ignore</button>
                        <button className="btn btn-secondary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserFeed
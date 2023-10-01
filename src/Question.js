import React, { useState } from 'react';
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
        <div className='header'>
            <h4>{title}</h4>
            <button className="question-btn" onClick={()=> setShowInfo(!showInfo)}>
                {showInfo?  <i className="fa-solid fa-circle-minus"></i> 
                : <i className="fa-solid fa-circle-plus"></i>}
            </button>
        </div>
        {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
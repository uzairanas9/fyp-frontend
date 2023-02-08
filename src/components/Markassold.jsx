import React, { useEffect, useState } from 'react';
import Manageanimal from './Manageanimal';

function MarkAsSoldButton({postId}) {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // const adId = "6394ab2e0049fc3e367ca917";
  

  const handleClick = async () => {
    const yes = window.confirm("Do you want to Delete this Post, This can't be restore")
    if (yes){
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/deletePost/${postId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      setSuccess(true)
      // do something with the data, e.g. update the UI
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
}

    else{
        setIsLoading(false);
    }
  };

  return (
    <button className='signup_btm1_sold' onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Mark as Sold Or Delete Post'}
    </button>
  );
}

export default MarkAsSoldButton;

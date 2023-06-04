import React from 'react';
import { Link } from 'react-router-dom';

const Task = () => {
  return (
    <div className='bg-[#0079BF] min-h-[400px] py-[25px] px-[26px]'>
      <div className=' rounded-[5px] bg-white py-[25px] px-[30px] w-full h-full relative'>
        {}
        <Link to={'/'}>
          <img
            className=' rotate-[45deg] w-[26px] h-[26px] absolute top-4 right-4 cursor-pointer'
            src='/Plus.svg'
          />
        </Link>
      </div>
    </div>
  );
};

export default Task;

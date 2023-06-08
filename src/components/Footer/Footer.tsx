import React from 'react'
import useCategory from '../../hooks/useCategory';
import useNotCategory from '../../hooks/useNotCategory';

const Footer = () => {
  const finishedTasks = useCategory('finished').length;
  const activeTasks = useNotCategory('finished').length;

  return (
    <footer className='flex justify-between w-full px-5 py-[8px] items-center bg-[#0067A3] shadow-md'>
      <div className='flex gap-[36px]'>
        <p className='text-[18px] text-white'>Active tasks: {activeTasks} </p>
        <p className='text-[18px] text-white'>
          Finished tasks: {finishedTasks}{' '}
        </p>
      </div>
      <div>
        <p className='text-[18px] text-white'>Kanban board 2023</p>
      </div>
    </footer>
  );
};

export default Footer;

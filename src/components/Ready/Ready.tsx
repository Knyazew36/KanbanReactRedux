import { useState } from 'react';
import Button from '../Button/Button';
import useCategory from '../../hooks/useCategory';
import { useDispatch } from 'react-redux';
import { taskToReady } from '../../store/slice/tasksSlice';
import { Link } from 'react-router-dom';
// import { readyTask } from '../../store/slice/tasksSlice';

const Ready = () => {
  const [buttonIsActive, setButtonActive] = useState(false);
  const data = useCategory('backlog');
  const readyData = useCategory('ready');
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setButtonActive(true);
  };

  const handleTaskClick = (id: number) => {
    dispatch(taskToReady(id));
    setButtonActive(false);
  };

  return (
    <div className='rounded-[10px] bg-[#EBECF0] h-auto p-3 flex justify-between flex-col gap-4 relative'>
      <div>
        <h2 className='text-[18px]'>Ready </h2>
        <ul className='flex flex-col gap-4'>
          {readyData &&
            readyData.map((e) => (
              <Link key={e.id} to={`/task/${e.id}`}>
                <li
                  className='cursor-pointer text-[18px] bg-white p-2 rounded-md '
                  onClick={() => handleTaskClick(e.id)}
                >
                  {e.title}
                </li>
              </Link>
            ))}
        </ul>
      </div>
      {buttonIsActive && (
        <div className='bg-white shadow-md rounded-md h-[100px] p-2 overflow-y-scroll absolute bottom-10 left-[50%] w-[90%] translate-x-[-50%] z-10 bg-slate-400'>
          <ul>
            {data &&
              data?.map((e) => (
                <li
                  key={e.id}
                  className='cursor-pointer'
                  onClick={() => handleTaskClick(e.id)}
                >
                  {e.title}
                </li>
              ))}
          </ul>
        </div>
      )}

      <Button
        handleButtonClick={handleButtonClick}
        buttonIsActive={buttonIsActive}
      />
    </div>
  );
};

export default Ready;

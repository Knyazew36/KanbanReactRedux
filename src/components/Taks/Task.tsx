import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { objectChange } from '../../store/slice/tasksSlice';


const Task = () => {
  const { id } = useParams();
  const idAsNumber = +id!;

  const data = useSelector((state: RootState) => state.tasks);
  const index = data.findIndex((e) => e.id === idAsNumber);
  const item = data[index];

  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)

  const dispatch = useDispatch()

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleDescriptionClick = () => {
    setIsEditing(true);
  };

  const formSubmit = () => {
    dispatch(objectChange({ id: idAsNumber, title, description }));
    setIsEditing(prev => !prev)
  }
  return (

    <div className='bg-[#0079BF] min-h-[400px] py-[25px] px-[26px]'>
      <div className='  rounded-[5px] bg-white py-[25px] px-[30px] w-full h-full relative flex flex-col gap-4 '>
        <Link to={'/'} className='absolute right-[25px] top-[30px]'>
          <img src='/close.png' alt='close' />
        </Link>
        {isEditing ? (
          <>
            <form className='flex flex-col gap-4 pt-14' onSubmit={(e) => {
              e.preventDefault()
              formSubmit()
            }
            }>
              <input
                type='text'
                className='text-lg font-bold border px-2
                py-2 rounded-md'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className='text-lg border px-2 py-2 rounded-md'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className='border rounded-md bg-[#0067A3] text-white px-3
              py-3 shadow-md hover:bg-blue-700 transition-all  ' type='submit'>Сохранить изменения</button>
            </form>

          </>
        ) : (
          <>
            <p className='text-lg font-bold mt-14' onClick={handleTitleClick}>
              Title: {title}
            </p>
            <p onClick={handleDescriptionClick}>
              Description:{' '}
              {description ? description : 'This task has no description'}
            </p>
          </>
        )}
      </div>
    </div >
  );
};

export default Task;

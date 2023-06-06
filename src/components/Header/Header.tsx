import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const onClickMenuHandler = () => {
    setIsActive(prev => !prev)
  }
  return (
    <header className='flex justify-between w-full px-5 py-[8px] items-center bg-[#0067A3] shadow-md relative'>
      <h1 className=' text-lg text-white '>Awesome Kanban Board</h1>
      <div className="relative">
        <div className='flex items-center cursor-pointer' onClick={onClickMenuHandler}>
          <img src='/user-avatar.svg' alt='avatar' />
          <img src='/arrow-down.svg' alt='arrow' />
        </div>
        {isActive && <div
          className="px-2 rounded-md py-3 bg-white  absolute top-11 z-30 -left-16 w-[134px]  flex flex-col gap-1 shadow-md ">
          <p className="cursor-pointer hover:underline ">Profile</p>
          <p className="cursor-pointer hover:underline " >Log Out</p>
        </div>}

      </div>

    </header>
  );
};

export default Header;

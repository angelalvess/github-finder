import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center py-10 bg-[#0e1129] text-white">
      <h1 className="text-center text-3xl mt-10 ">Github Finder</h1>

      <Outlet />
    </div>
  );
};

export default Container;

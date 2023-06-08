
import React from 'react'
import RouteApp from "../../route/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <div className='wrapper h-screen flex flex-col justify-between bg-[#0079BF]'>
      <Header />
      <RouteApp />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import TopBar from './Topbar/Topbar';


const createProductDatabase = () => {
   localStorage.setItem("Product", []);
}

const AppLayout = ({ children }) => {

   React.useEffect(() => {
      createProductDatabase();
   }, [createProductDatabase]);

   return <>
      <TopBar />
      {children}
   </>
}

export default AppLayout;
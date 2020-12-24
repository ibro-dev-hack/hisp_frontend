import React from 'react';
import { Grid } from '@material-ui/core'
import Sidebar from './Sidebar/Sidebar';


const Home = ({ children }) => {
   return <Grid container>
      <Grid item md={4}>
         <Sidebar />
      </Grid>
      <Grid container md={8}>
         {children}
      </Grid>
   </Grid>
}

export default Home;
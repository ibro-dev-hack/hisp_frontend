import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   root: {
      display: "flex",
      height: "50px",
      background: "blue",
      color: "#ffffff",
      fontSize: "1.1rem"
   }
}))


export default function Topbar() {
   const classes = useStyles();

   return <div className={classes.root}>
      hispwca application
   </div>
}
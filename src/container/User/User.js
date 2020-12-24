import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import base64 from 'base-64'


const useStyle = makeStyles(theme => ({
   root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
   },
}))



const User = () => {
   const classes = useStyle();
   const [user, setUser] = React.useState([]);

   const getUserFromApi = React.useCallback(async () => {
      try {
         const username = localStorage.getItem("username");
         const password = localStorage.getItem("password");

         const response = await fetch("https://play.dhis2.org/2.35.1/api/users?fields=*&paging=false", {
            method: "GET",
            headers: {
               "Content-Type": "Application/json",
               'Authorization': 'Basic ' + base64.encode(username + ":" + password)
            }
         })
         const result = await response.json();
         console.log(result);
         setUser(result.users);

      } catch (err) {
         console.log(err);
         alert(err);
      }

   }, [])

   React.useEffect(() => {
      getUserFromApi();
   }, [getUserFromApi]);

   return <div className={classes.root}>

      <Typography> la list des users </Typography>
      <Box>
         {user.length > 0 ? user.map((user, index) => {
            return <div key={index}>
               { user.name }
            </div>
         }) : <div>pas d'utilisateur </div>}
      </Box>
   </div>
}


export default User;
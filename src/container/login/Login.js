import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid, makeStyles, TextField, Typography, Button, Box } from '@material-ui/core';
import { Formik } from 'formik';
import { useAuthDispatch, useAuthState, login } from 'context/auth/authContext';


const initialFormState = {
   username: "",
   password: ""
}

const useStyle = makeStyles(theme => ({
   root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
   },
   box: {

      flexDirection: "column",
   }
}))


const Login = () => {

   const dispatch = useAuthDispatch();
   const location = useLocation();
   const history = useHistory();
   const classes = useStyle();
   const { from } = location.state || { from: { pathname: "/" } };

   const handleSubmite = React.useCallback(({ username, password }) => login(dispatch, { username, password }, () => history.replace(from)))

   return <div className={classes.root}>
      <Typography variant="h1"> Login </Typography>
      <Formik
         initialValues={initialFormState}
         onSubmit={handleSubmite}
      >
         {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
               <Box p={1} display="flex" className={classes.box}>
                  <TextField
                     variant="outlined"
                     type="text"
                     name="username"
                     label="username"
                     value={values.username}
                     onChange={handleChange}
                  />
                  <TextField
                     onChange={handleChange}
                     variant="outlined"
                     label="password"
                     value={values.password}
                     name="password"
                     type="password"
                  />
                  <Grid container>
                     <Grid item xs={6}>
                        <Button
                        > Annulez </Button>
                     </Grid>
                     <Grid item xs={6}>
                        <Button
                           variante="contained"
                           type="submit"
                        >Connecter</Button>
                     </Grid>
                  </Grid>
               </Box>
            </form >
         )}
      </Formik>
   </div >
}

export default Login;
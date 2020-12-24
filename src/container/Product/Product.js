import React from 'react';
import { makeStyles, Box, Button } from '@material-ui/core'


const useStyle = makeStyles(theme => ({
   root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
   },
   menu: {
      display: "flex",
      background: "#eeeeee",
   }
}))



const Product = ({ children }) => {
   const classes = useStyle();
   return <div className={classes.root}>
      <Box>
         <Button variante="outlined" onClick={() => console.log("pop add produt")}> Ajouter produit </Button>
      </Box>
      <Box>
         la list des produits
      </Box>
   </div>
}


export default Product;
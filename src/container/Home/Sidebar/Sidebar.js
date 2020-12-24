import React from 'react';
import { USERS, PRODUCT } from 'settings/constants';
import { List, ListItem, Button, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const ListMenu = [
   {
      name: "Produit",
      path: PRODUCT,
      icon: null,
   },
   {
      name: "User",
      path: USERS,
      icon: null
   }
]

const useStyles = makeStyles(theme => {
   return {
      root: {
         background: "#eeeeee",
         padding: "1rem",
         display: "flex",
         flexDirection: "column",
         borderRadius: "5px",
         justifyContent: "center",
         alignItems: "center",
      }
   }
})

export default function Sidebar() {
   const classes = useStyles();
   return <List className={classes.root}>
      {ListMenu.map((list, index) => (
         <ListItem key={index}>
            <Button
               component={NavLink}
               fullWidth={true}
               to={list.path}
            >
               {list.name}
            </Button>
         </ListItem>
      ))
      }
   </List >
}
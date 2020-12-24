import React from 'react';


export const useMedia = (query) => {
   const [state, setState] = React.useState(window.matchMedia(query).matches);

   React.useEffect(function () {
      let media = window.matchMedia(query);
      media.onchange = () => {
         setState(media.matches);
      }

   },[query])
   return state;
}
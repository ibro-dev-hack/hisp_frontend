import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import InLineLoader from 'component/InlineLoading';

import {
   DASHBOARD,
   LOGIN,
   INDEX,
   USERS,
   PRODUCT

} from 'settings/constants';

const Login = React.lazy(() => import("container/login/Login"));
const AppLayout = React.lazy(() => import("container/Layout/AppLayout/AppLayout"));
const Home = React.lazy(() => import("container/Home/Home"));
const User = React.lazy(() => import("container/User/User"));
const PageNotFound = React.lazy(() => import("container/PageNotFound/PageNotFound"));
const Product = React.lazy(() => import("container/Product/Product"));

const PrivateRoutes = ({ children, ...rests }) => {
   const token = localStorage.getItem("token");

   return <Route {...rests} render={({ location }) => {
      return token ? (children) :
         (<Redirect to={{ pathname: LOGIN, state: { from: location } }} />)
   }} />
}


export default function Routes() {
   return <Suspense fallback={<InLineLoader />}>
      <Switch>
         <Route exact path={INDEX} render={({ location }) => <Redirect to={{ pathname: DASHBOARD, state: { from: location } }} />} />
         <PrivateRoutes exact path={DASHBOARD} >
            <Suspense fallback="chargement du Dashboard">
               <AppLayout>
                  <Home>
                     <Redirect to={USERS} />
                  </Home>
               </AppLayout>
            </Suspense>
         </PrivateRoutes>
         <PrivateRoutes path={USERS} >
            <Suspense fallback="chargement de user">
               <AppLayout>
                  <Home>
                     <User />
                  </Home>
               </AppLayout>
            </Suspense>
         </PrivateRoutes>
         <PrivateRoutes path={PRODUCT} >
            <Suspense fallback="chargement du PRODUIT">
               <AppLayout>
                  <Home>
                     <Product />
                  </Home>
               </AppLayout>
            </Suspense>
         </PrivateRoutes>
         <Route path={LOGIN}>
            <Suspense fallback="chargement du login page">
               <Login />
            </Suspense>
         </Route>
         <Route component={PageNotFound} />
      </Switch>
   </Suspense>

}
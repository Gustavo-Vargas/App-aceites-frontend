import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';

const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path="/"
                   element={<Layout showHero={true}> <HomePage/> </Layout>}
            />
            <Route path="/auth-callback"
                   element={<AuthCallBackPage />}
            />

              <Route>


            <Route element={<ProtectedRoute />}>
              <Route path="/user-profile"
                     element={<Layout> <UserProfilePage /> </Layout>}
                     />

                     </Route>
            </Route>
            <Route path="*"
                   element={<Navigate to="/" />}
                   />
        </Routes>
    )
}

export default AppRoutes;
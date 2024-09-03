
import { createBrowserRouter } from 'react-router-dom';
import PublicOutlet from '../LayOut/PublicOutlet';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Redister/Register';
import PrivateOutlet from '../LayOut/PrivateOutlet';
import DashboardHome from '../PrivatePages/DashboardHome';
import PrivateRoutes from './PrivateRoutes';
import UpdateUserInfo from '../Pages/updateUserInfo/updateUserInfo';

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<PublicOutlet/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                }
            ]
        },
        {
            path:'/dashboard',
            element:<PrivateRoutes><PrivateOutlet/></PrivateRoutes>,
            children:[
                {
                    path:'Home',
                    element:<DashboardHome/>
                },
                {
                    path:"updateInfo",
                    element:<UpdateUserInfo/>
                }
            ]
        }
    ]
)


export default router;
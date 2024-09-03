
import { createBrowserRouter } from 'react-router-dom';
import PublicOutlet from '../LayOut/PublicOutlet';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Redister/Register';

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
        }
    ]
)


export default router;
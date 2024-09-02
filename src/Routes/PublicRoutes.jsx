
import { createBrowserRouter } from 'react-router-dom';
import PublicOutlet from '../LayOut/PublicOutlet';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<PublicOutlet/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        }
    ]
)


export default router;
import LayourDefault from "../layout/LayoutDefault";
import Cart from "../page/Cart";
import Home from "../page/Home";
import Error404 from "../page/Error404";

export const routes = [
    {
        path: '/',
        element: <LayourDefault/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: '*',
                element: <Error404/>
            }
        ]
    }
]
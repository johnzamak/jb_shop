import App from './pages/App'
import POSMain from './pages/POSMain'
import Sellproduct from './pages/Sellproduct'
import Addproduct from "./pages/Addproduct"

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Addproduct },
    childRoutes: [
        { path: '/add_product', component: Addproduct },
        { path: '/sell_product', component: Sellproduct },
        // { path: 'album/:userID(/:title)', component: Album },
        // { path: 'photo/:albumID(/:title)', component: Photo }
    ]
}]

export default routes
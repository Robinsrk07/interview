
import './App.css'
import Body from './components/Body'
import CreateMenu from './components/CreateMenu'
import Main from './components/Main'
import { BrowserRouter,Router,Route,Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/store"
function App() {

  return (
    <>
<Provider store={store}>
    <BrowserRouter>
         <Routes>
              <Route path='/'element={<Body/>}>
                 <Route path='/' element={<Main/>}/>
                 <Route path='/addmenu' element={<CreateMenu/>}/>
               </Route>
         </Routes>
    </BrowserRouter>
    
    </Provider>
  
    </>
  )
}

export default App

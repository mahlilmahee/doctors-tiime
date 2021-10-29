import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import ManageOrder from './Component/ManageOrder/ManageOrder';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Admin from './Component/Admin/Admin';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
     <Home></Home>
     </Route>
     <Route  path="/home">
     <Home></Home>
     </Route>
     <Route  path="/manageorders">
     <ManageOrder></ManageOrder>
     </Route>
     <Route  path="/admin">
    <Admin></Admin>
     </Route>
     <Route  path="/login">
     <Login></Login>
     </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

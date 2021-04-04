
import Contact from './components/contact/Contact';
import Navbar from './components/elements/Navbar';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import './styles/App.scss';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
function App() {
  return (
    <Provider store={store}>
     <Router>
     <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3">
         <Switch>
           <Route exact path = "/" component={Contact} />
           <Route exact path = "/contacts/add" component={AddContact} />
           <Route exact path = "/contacts/edit/:id" component={EditContact} />
         </Switch>
        </div>
      </div>
    </div>
     </Router>
    </Provider>
  );
}

export default App;

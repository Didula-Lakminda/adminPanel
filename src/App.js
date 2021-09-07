
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminPanel from './components/adminPanel/AdminPanel';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <section>
          <Switch>

            <AdminPanel>
              <Route path="/home" component={Home} />
            </AdminPanel>

          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;


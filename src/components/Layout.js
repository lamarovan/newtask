import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import Welcome from './Welcome/Welcome';
import Sidebar from './Sidebar/Sidebar';
import Cards from './Cards/Cards';
import Navbar from './Navbar/Navbar';
import Button from './Button/Button';
import Input from './Input/Input';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <Router>
      <Sidebar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/navbar" component={Navbar} />
          <Route exact path="/button" component={Button} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/input" component={Input} />
        </Switch>
    </Router>
  )
}

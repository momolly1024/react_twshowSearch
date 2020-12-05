// npm
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components
import Navbar from './components/Navbar'
// pages
import HomePage from './pages/Homepage'
import AboutPage from './pages/Aboutpage'
import SinglePage from './pages/Singlepage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/singleshow/:id" component={SinglePage} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;

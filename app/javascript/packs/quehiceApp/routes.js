import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Welcome from './components/Welcome';
const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={Welcome} />
    </div>
  </Router>
)
export default App;
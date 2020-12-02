  
import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Events from "./Events"
import Home from "./Home"
import Menu from "./Menu"
import Create from "./Create"
import ShowEvents from "./ShowEvents"

function App() {
  return (
    <Container>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Menu></Menu>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/explore" component={Events} />
              <Route path="/events" component={ShowEvents} />
              <Route path="/create" component={Create} />
              <Route path="/" component={Home} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
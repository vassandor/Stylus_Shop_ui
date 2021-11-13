import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import SignInPage from "./components/Users/SignInPage";
import RegistrationPage from "./components/Users/RegistrationPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PasswordResetPage from "./components/Users/PasswordResetPage";
import ItemListPage from "./components/Pages/ItemListPage";

function App() {
  return (
  <Router>
        <div className="App">
            <div>
                <Header/>

                <Switch>
                    <Route path="/categories/:category/:subcategory?" component={ItemListPage}/>

                    <Route path="/users/login" component={SignInPage}/>

                    <Route path="/users/registration" component={RegistrationPage}/>

                    <Route path="/users/password-reset" component={PasswordResetPage}/>

                    <Route path="/" component={HomePage}/>
                </Switch>

            </div>

            <Footer/>
        </div>
  </Router>
  );
}

export default App;

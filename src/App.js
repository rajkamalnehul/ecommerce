import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import ShopPage from './pages/shoppage/shoppage.js';
import Header from './components/header/header.js';
import UserRegistrationPage from './pages/userregistrationpage/userregistrationpage.js';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils.js';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
 class App extends React.Component 
 
{
  unsubscribeFromAuth = null;

  componentDidMount()
  {
    const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      else
        this.props.setCurrentUser({userAuth}); //currentUser=userAuth(null)
    });
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className='background'>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={UserRegistrationPage}/>
        </Switch>
      </BrowserRouter>
    </div>
      );
    }
 }

 const mapDispatchToProps = dispatch =>({
   setCurrentUser: user => dispatch(setCurrentUser(user))
 });

export default connect(null,mapDispatchToProps)(App);

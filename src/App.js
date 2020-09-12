import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import ShopPage from './pages/shoppage/shoppage.js';
import Header from './components/header/header.js';
import UserRegistrationPage from './pages/userregistrationpage/userregistrationpage.js';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils.js';

 class App extends React.Component 
 {
   constructor(){
     super();

     this.state= {
       currentuser: null
     };
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentuser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          },
          ()=>{
            console.log(this.state);
          });
        });
      }
      else
        this.setState({currentuser:userAuth}); //currentUser=userAuth(null)
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
        <Header currentuser={this.state.currentuser}/>
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

export default App;

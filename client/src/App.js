import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/homepage/homepage';
import { RegisterView } from './pages/authpage/register';
import { LoginView } from './pages/authpage/login';
import { Tags } from './pages/audience/tags';
import { TemplatesContainer } from './pages/template/template';
import { CreateView } from './pages/template/components/create';
import { Subscribers } from './pages/audience/subscribers';
import { ForgetPassword } from './pages/authpage/forgetpassword';
import { ProfilePage } from './pages/profile/profile';
import { CustomerHomePage } from './pages/customer/homepage/homepage';
import { AllCampaign } from './pages/customer/campaign/allcampaign';
import { TemplateList } from './pages/customer/template/template';
import { OverviewsPage } from './pages/customer/list/overview';
import { ListsPage } from './pages/customer/list/list';
import { SubscribersPage } from './pages/customer/list/subscribers';
import { TagsPage } from './pages/customer/list/tags';
import { CollabsPage } from './pages/customer/list/collaborators';
import { Inbox } from './pages/customer/inbox';


const App =()=> {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={ <CustomerHomePage/>}/>
          <Route exact path='/auth'>
            <Route exact path='/auth/register' element={ <RegisterView/>}/>
            <Route exact path='/auth/login' element={ <LoginView/>}/>
            <Route exact path='/auth/forget/password' element={ <ForgetPassword/>}/>
          </Route>
          <Route exact path='/Lists'>
            <Route exact path='/Lists/Overview' element={ <OverviewsPage/>}/>
            <Route exact path='/Lists/Lists' element={ <ListsPage/>}/>
            <Route exact path='/Lists/Subscribers' element={ <SubscribersPage/>}/>
            <Route exact path='/Lists/Tags' element={ <TagsPage/>}/>
            <Route exact path='/Lists/Collaborations' element={ <CollabsPage/>}/>
          </Route>
          <Route exact path='/campaigns'  element={ <AllCampaign/>} />
          <Route exact path='/templates'  element={ <TemplateList/>} />
          <Route exact path='/inbox' element={ <Inbox/>}/>
          
          <Route exact path='/Audience'>
          <Route exact path='/Audience/Tags' element={ <Tags/>}/>
          <Route exact path='/Audience/Subscribers' element={ <Subscribers/>}/>
          </Route>
          <Route exact path="/wizard/template" element={<TemplatesContainer/>}/>
          <Route exact path="/create/template/:id" element={<CreateView/>}/>
          <Route exact path="/account/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;

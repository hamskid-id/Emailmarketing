import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProfilePage } from './pages/customer/profile/profile';
import { CustomerHomePage } from './pages/customer/homepage/homepage';
import { AllCampaign } from './pages/customer/campaign/allcampaign';
import { TemplateList } from './pages/customer/template/template';
import { OverviewsPage } from './pages/customer/list/overview';
import { ListsPage } from './pages/customer/list/list';
import { SubscribersPage } from './pages/customer/list/subscribers';
import { TagsPage } from './pages/customer/list/tags';
import { CollabsPage } from './pages/customer/list/collaborators';
import { Inbox } from './pages/customer/notification/inbox';
import { AutoPage } from './pages/customer/automation/automation';
import { AutomationDesign } from './pages/customer/automation/automationdesign';
import { CreateView } from './pages/customer/template/create';
import {RegisterView} from "./pages/customer/authpage/register"
import {LoginView} from "./pages/customer/authpage/login"
import {ForgetPassword} from "./pages/customer/authpage/forgetpassword"


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
          <Route exact path='/automations'  element={ <AutoPage/>} />
          <Route exact path='/automations/design'  element={ <AutomationDesign/>} />
          <Route exact path='/inbox' element={ <Inbox/>}/>
          <Route exact path="/create/template" element={<CreateView/>}/>
          <Route exact path="/preview/template/:id" element={<CreateView/>}/>
          <Route exact path="/account/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;

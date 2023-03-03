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
import { InvitesPage } from './pages/customer/list/invites';
import { ProtectedRoute } from './protectedroute';
import { ListOverViewPage } from './pages/customer/list/liststat';
import { SelectTypeSection } from './pages/customer/campaign/component/selectsection';
import { SelectTypeView } from './pages/customer/campaign/select';
import { CreateCampaignPage } from './pages/customer/campaign/component/CreateCampaignPage';
import { SendingDomainPage } from './pages/customer/sending/sending';
import { TrackingDomainPage } from './pages/customer/sending/trackin';
import { BlacklistPage } from './pages/customer/sending/blacklisted';
import { ImportBlacklistPage } from './pages/customer/sending/importblacklist';
import { CampaignStatistics } from './pages/customer/campaign/statistics.js/stat';
import { UnSubsrcibedPage } from './pages/customer/list/unsubscribe';
import { SpamReportPage } from './pages/customer/list/spamreport';
import { EditView } from './pages/customer/template/edit';
import { UpdateTagPage } from './pages/customer/list/updateTag';


const App =()=> {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/auth'>
            <Route exact path='/auth/register' element={ <RegisterView/>}/>
            <Route exact path='/auth/login' element={ <LoginView/>}/>
            <Route exact path='/auth/forget/password' element={ <ForgetPassword/>}/>
          </Route>
          <Route
              element={
                  <ProtectedRoute/>
              }
          >
            <Route exact path='/' element={ <CustomerHomePage/>}/>
            <Route exact path='/Lists'>
              <Route exact path='/Lists/Overview' element={ <OverviewsPage/>}/>
              <Route exact path='/Lists/Lists' element={ <ListsPage/>}/>
              <Route exact path='/Lists/Subscribers' element={ <SubscribersPage/>}/>
            <Route exact path='/Lists/Unsubscribe' element={ <UnSubsrcibedPage/>}/>
            <Route exact path='/Lists/Spam Report' element={ <SpamReportPage/>}/>
              <Route exact path='/Lists/Tags' element={ <TagsPage/>}/>
              <Route exact path='/Lists/Lists/stat' element={ <ListOverViewPage/>}/>
              <Route exact path='/Lists/Collaborations' element={ <CollabsPage/>}/>
              <Route exact path='/Lists/Invites' element={ <InvitesPage/>}/>
            </Route>
            <Route eaxct path="/Sending">
              <Route exact path='/Sending/Sending domains' element={ <SendingDomainPage/>}/>
              <Route exact path='/Sending/Tracking domains' element={ <TrackingDomainPage/>}/>
              <Route exact path='/Sending/Blacklist' element={ <BlacklistPage/>}/>
              <Route exact path='/Sending/Blacklist/import' element={ <ImportBlacklistPage/>}/>
            </Route>
            <Route exact path='/campaigns'  element={ <AllCampaign/>} />
            <Route exact path='/campaigns/stat/:id'  element={ <CampaignStatistics/>} />
             <Route exact path='/campaigns/Create'  element={ <CreateCampaignPage/>} />
             <Route exact path="/user/tag/update/:id"  element={ <UpdateTagPage/>} />
            <Route exact path='/campaign/select-type'  element={ <SelectTypeView/>} />
            <Route exact path='/templates'  element={ <TemplateList/>} />
            <Route exact path='/edit/template/:id'  element={ <EditView/>} />
            <Route exact path='/automations'  element={ <AutoPage/>} />
            <Route exact path='/automations/design'  element={ <AutomationDesign/>} />
            <Route exact path='/inbox' element={ <Inbox/>}/>
            <Route exact path="/create/template" element={<CreateView/>}/>
            <Route exact path="/preview/template/:id" element={<CreateView/>}/>
            <Route exact path="/account/profile" element={<ProfilePage/>}/>
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </Provider>
  );
}

export default App;

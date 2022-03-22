import {Route, Switch } from 'react-router-dom'

import AllMeetUp from './pages/AllMeetUp';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetUp';
import Layout from './components/layout/Layout';

function App() {
  return <Layout>
    
    <Switch>
    <Route path='/' exact ={true}>
      <AllMeetUp />
    </Route>
    <Route path='/new-meetups'>
      <NewMeetUp />
    </Route>
    <Route path='/favourites'>
      <Favourites />
    </Route>
    </Switch>
    
  </Layout>;
}

export default App;

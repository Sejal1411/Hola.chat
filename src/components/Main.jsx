import ChatArea from './ChatArea';
import SideBar from './SideBar';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import { Outlet } from 'react-router-dom';
import Users from './Users';


const Main = () => {
  return (
    <main>
      <SideBar />
      {/* <Outlet /> */}
      {/* <CreateGroups /> */}
      {/* <Welcome /> */}
      {/* <ChatArea /> */}
      <Users />
    </main>
  );
};

export default Main;

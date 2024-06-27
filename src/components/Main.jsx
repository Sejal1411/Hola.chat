import ChatArea from './ChatArea';
import SideBar from './SideBar';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';


const Main = () => {
  return (
    <main>
      <SideBar />
      {/* <CreateGroups /> */}
      {/* <Welcome /> */}
      <ChatArea />
    </main>
  );
};

export default Main;

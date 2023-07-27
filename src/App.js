import './App.css';
import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID="54d0dd34-ba12-4de2-aa8b-61ea06d593dc"
      userName="Jack"
      userSecret="12345"
      renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;

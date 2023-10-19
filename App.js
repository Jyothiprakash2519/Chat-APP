/* eslint-disable no-undef */
import ChatRoom from './Chat-Room/Chat-Room.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Full-Stack Chat APP</h1>

      <input
        type="text"
        name='Message'
        placeholder="Enter a message..." 
        // eslint-disable-next-line no-undef
        onChange={(e) => sendMessage(e.target.value)}
      />
      <br></br>
    </div>
  );
}

export default App;
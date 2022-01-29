import Header from './parts/header/header';
import Chat from './pages/chat/chat';
import './App.css';

function App() {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
  }
  
  return (
    <div className="App">
      <Header></Header>
      <Chat></Chat>
    </div>
  );
}

export default App;

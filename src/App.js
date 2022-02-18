import logo from './logo.svg';
import './App.css';
import MessageBasic from './MessageBasic';
import FlashCard from './FlashCard'
import DemoContainer from './DemoContainer';

function App() {

  return (
    <div>
      <h1>App HERE YO</h1>
      <DemoContainer header='FlashCard'>
        <FlashCard />
      </DemoContainer>

      <DemoContainer header='Message'>
         <MessageBasic />
      </DemoContainer>

      <DemoContainer header='TODO:'>
         <p>TODO:</p>
         <p>sdfsd</p>
      </DemoContainer>
    </div>
  );
}

export default App;

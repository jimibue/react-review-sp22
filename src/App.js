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
        <FlashCard question='What is 1+1' answer='2' color='green'/>
        <FlashCard question='What is 2+2' answer='4'/>
        <FlashCard question='What is 4+4' answer='8' color='orange'/>
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

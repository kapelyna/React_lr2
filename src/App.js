import logo from './logo.svg';
import './App.css';
import Card from "./components/card"
import CardFooter from './components/cardFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple to-pink flex flex-col justify-center items-center font-inter text-black">
     <Card/>
     <CardFooter/>
    </div>
  );
}

export default App;

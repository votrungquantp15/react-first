import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
        <ShoppingList />
        <hr />
        <Calculator />
    </div>
  )
}

export default App;

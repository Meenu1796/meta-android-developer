import MealsProvider from './providers/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>
    </div>
  );
}

export default App;

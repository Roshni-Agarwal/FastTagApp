import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/header';
import Main from './component/Main';
import { DurationProvider } from './context/DurationContext';

function App() {
  return (
    <DurationProvider>
       <div className="App">
        <Header />
        <Main />
      </div>
    </DurationProvider>
   
  );
}

export default App;

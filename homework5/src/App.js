import './App.css';
import ChangeTheme from '../src/components/ToggleTheme.js'
import {store} from './Store/store.js'
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <ChangeTheme />
    </div>
    </Provider>
  );
}

export default App;

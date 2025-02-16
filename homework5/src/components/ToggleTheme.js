import { useSelector, useDispatch,Provider } from "react-redux";
import { black, light } from "../Slice/ThemeSlice.js";
import "../Styles/themeStyle.css";
import {store} from '../Store/store.js'


function ChangeTheme() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  

  return (
  
    <div className={theme}>
     
        <h1>Hello</h1>
        <button onClick={() => dispatch(light())}>Light</button>
        <button onClick={() => dispatch(black())}>Black</button>
      
    </div>
  
  );
}

export default ChangeTheme;

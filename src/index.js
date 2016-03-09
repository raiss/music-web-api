import { render } from 'react-dom';
import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";

import  { App }  from "./App";

injectTapEventPlugin();

render(
  <App/>,
  document.getElementById('root')
);

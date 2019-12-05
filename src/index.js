import React from 'react'
import { App } from './App';
import CustomRenderer from './renderer/index';

CustomRenderer.render(<App />, document.getElementById("root"))

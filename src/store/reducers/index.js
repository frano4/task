import { combineReducers } from 'redux';

import projects from './projects';
import investment from './investment';

const mainReducer = combineReducers({
  projects, investment
});

export default mainReducer;
import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/projects';

const initialState = {
  collection: [],
  selected: {}
};

const projects = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return {
        collection: [...action.data.projects]
      }
    case RECEIVE_PROJECT:
      return {
        ...state.collection,
        selected: action.project
      }
    default:
      return state;
  }
};

export default projects;
import axios from 'axios';

export const RECEIVE_PROJECTS = 'linus/RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'linus/RECEIVE_PROJECT';

export const receiveProjects = data => ({
    type: RECEIVE_PROJECTS,
    data
});

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

export const fetchProjects = () => dispatch => {
    axios('https://fullstack.linus-capital.com/projects')
        .then(({ data }) => dispatch(receiveProjects(data)))};
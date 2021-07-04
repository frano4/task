import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from 'lodash';

import { fetchProjects, receiveProject } from '../../store/actions/projects'
import { Project } from '../../components';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.collection);

  const selectProject = id => {
    const selected = projects.find(project => project.id === id);

    dispatch(receiveProject(selected));
  };

  useEffect(() => { 
    dispatch(fetchProjects()); 
  }, [dispatch]);

  return (
    !isEmpty(projects)
      ? projects.map(project => 
          <Project key={project.id} 
                   project={project}
                   onClick={() => selectProject(project.id)}
          />)
      : 'No projects available'
  );
}

export default WelcomePage;

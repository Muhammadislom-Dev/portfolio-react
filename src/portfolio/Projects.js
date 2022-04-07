import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import db from '../firebase/config';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Slide from 'react-reveal/Slide';

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("project").onSnapshot((snapshot) =>
      setProjects(snapshot.docs.map(doc => doc.data()))
    )
  }, []);

  return (
    <>
      <Container>
        <Row>
          {
            projects.map((project, index) => (
              <Col md='12' key={index}>

                <Slide bottom >
                  <div className='projectCard' >

                    <img className='projectImage' src={project.image} alt='portfolio' />

                    <div className='projectInfo'>

                      <div className='projectAbout'>
                        <h3 className='projectName' >{project.projectName}</h3>
                        <p className='projectDesc' >{project.projectDesc}</p>
                      </div>

                      <div className='projectButtons'>
                        <a className='buttons' href={project.github} target='_blank' rel="noreferrer">
                          Source <GitHubIcon />
                        </a>
                        <a className='buttons' href={project.code} target='_blank' rel="noreferrer">
                          Demo <LinkIcon />
                        </a>
                      </div>

                    </div>

                  </div>
                </Slide>

              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default Projects;
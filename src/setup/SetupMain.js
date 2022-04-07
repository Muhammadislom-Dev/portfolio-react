import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import db from '../firebase/config';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Shake from 'react-reveal/Shake';

function SetupMain(props) {

  const [setups, setSetups] = useState([]);

  useEffect(() => {
    db.collection("setup").onSnapshot((snapshot) =>
      setSetups(snapshot.docs.map(doc => doc.data()))
    )
  }, []);


  return (
    <div className='setup-main'>
      {
        setups.map((setup) => (
          <div className='setup-image'>
            <img src={setup.image} alt='Setup pic' />
          </div>
        ))
      }
      <Container>
        <Row>
          <Col md='12'>
            <div className='my-setup'>
              <span className='laptop-specs'>
                <ul>
                  <a href='https://www.acer.com/ac/en/GB/content/model/NX.HNTEK.002' target='_blank' rel="noreferrer">
                    <h2 className='laptop-logo'>Aspire 3 A315-55G</h2>
                    <Shake duration='1500'>
                      <ArrowUpwardIcon />
                    </Shake>
                  </a>
                  <li>Intel&reg; Core&trade; i3 - 10110U</li>
                  <li>NVIDIA&reg; GeForce&reg; MX230 with 2 GB VRAM</li>
                  <li>8 GB DDR4 Memory</li>
                  <li>1000 GB HDD</li>
                  <li>Kingston 120G Internal SSD M.2</li>
                </ul>
              </span>
              <span className='keyboard-specs'>
                <ul>
                  <div className='keyboard-title'>
                    <h2>Keyboard & Mouse</h2>
                    <Shake duration='1500'>
                      <ArrowUpwardIcon />
                    </Shake>
                  </div>
                  <li>Rapoo multi-wireless keyboard, mouse</li>
                  <li>AVTECH</li>
                </ul>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SetupMain;
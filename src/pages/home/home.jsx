/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import { MobileOnlyView } from 'react-device-detect';
import Dialog from 'react-bootstrap-dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import getRoomService from 'api/http/room-service';
import { toast } from 'react-toastify';

import DemoImage from 'assets/images/demo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {
  const roomService = getRoomService();
  let clicked = false;
  toast.info(
    `Hi! I'm currently hosting the backend for this site on Heroku and AWS free tiers so you might experience some failed requests and errors from time to time due to max connection limits. Sorry for being broke. (T▽T) Enjoy!`,
    { position: 'bottom-right', autoClose: true }
  );
  return (
    <Container fluid className="p-4 wrapper text-center">
      <Row className="d-flex flex-column justify-content-center">
        <Card className="p-4 align-self-center mt-4 text-center welcome-card">
          <Card.Body>
            <Card.Title as="h1">Welcome to Coderview!</Card.Title>
            <Card.Text as ="h5">
            Coderview is an interviewing and screening web application designed
             to let candidates write codes that interviewer can dry run along
              with live video conference between interviewer and candidate. No sign-ups, just create a room and share the URL.  
{/* 
              Coderview is a home made solution and personal
              self-learning project for online coding interviews by Abdullah Mirza{' '} */}
               
              <br />
              {/* You can also check it out on{' '} */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="d-flex flex-column align-self-center">
        <img
          className="demo-image align-self-center"
          src={DemoImage}
          alt="demo"
        />

        <Button
          className="align-self-center mb-4 p-2"
          size="sm"
          variant="primary"
          href="#"
          onClick={() => {
            if (clicked) return;
            clicked = true;
            toast.dark('Creating new room...');
            roomService
              .createNewRoom()
              .then(room => {
                toast.dark('Redirecting...');
                window.location.href = `/room/${room.data.room_id}`;
              })
              .catch(err => {
                toast.error(
                  `Failed to create new room: ${err.message}`
                );
                clicked = false;
              });
          }}
        >
          Start Hiring
         </Button>
        { <Button
          className="align-self-center p-2"
          size="sm"
          variant="light"
          target="_blank"
        >
         Sign-up & Code
        </Button> } 
      </Row>
      <Card className="p-4 align-self-left mt-4 text-left End-card">
          <Card.Body>
            <Card.Title as="h2">Coderview</Card.Title>
            <Card.Text as ="h5">
              Questions? <br/>
              You can contact me on mirzeeyas@gmail.com <br />
              © 2022 Coderview,Inc <br/>
              
              
            </Card.Text>
          </Card.Body>
        </Card>
      <MobileOnlyView>
        <Dialog
          ref={dialog => {
            dialog.show({
              body: `Hey. Coderview works best on desktops. Head on to your desktop browser. I'll wait :)`,
              actions: [Dialog.OKAction()],
              onHide: () => null,
            });
          }}
        />
      </MobileOnlyView>
    </Container>
  );
};

export default Home;
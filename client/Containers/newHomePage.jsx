import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import * as actions from "../actions/actions";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Notification,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


// import the components below
import EventsHosting from "../Components/eventsHosting.jsx";
import EventsParticipatingIn from "../Components/eventsParticipatingIn.jsx";

import store from '../store.js'

const mapStateToProps = ({
	events: { eventsHosting, eventsParticipatingIn },
}) => ({
  eventsHosting,
  eventsParticipatingIn,
});

// const [eventsHosting, setEventsHosting] = useState();

const homePage = (props) => {
  const navigate = useNavigate();
  // grab necessary pieces of state assigned to variables from store (useSelector)
  let result;
  useEffect(() => {

  	result = props.dispatch(actions.getHostEvents())

  }, []);
  console.log('result: ', result)
	console.log("props in homepage: ", props);
  
  // const result = props.dispatch(actions.getHostEvents());
  // console.log('result of dispatch: ', result);
  // props.dispatch(getPartEvents());

  // return our element tags and components (passing down the retrieved state)
  return (
    <div>
      <h1>Home Page</h1>
      <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/user/createEvent')}
        >
          + Create new event
        </Button>
      <EventsHosting {...props} />
      <EventsParticipatingIn {...props} />
    </div>
  );
};

export default connect(mapStateToProps)(homePage);

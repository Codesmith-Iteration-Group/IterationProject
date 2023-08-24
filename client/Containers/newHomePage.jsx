import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import * as actions from "../actions/actions";


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
      <EventsHosting {...props} />
      <EventsParticipatingIn {...props} />
    </div>
  );
};

export default connect(mapStateToProps)(homePage);

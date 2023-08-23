import React from "react";
import { useSelector, connect } from "react-redux";

// import the components below
import eventsHosting from "../Components/eventsHosting.jsx";
import eventsParticipatingIn from "../Components/eventsParticipatingIn.jsx";

const mapStateToProps = ({ 
	events: {invitee, eventName, eventLocation, eventDetails, availableTime, usernames}
}) => ({
  invitee, eventName, eventLocation, eventDetails, availableTime, usernames
});



const homePage = props => {
  // grab necessary pieces of state assigned to variables from store (useSelector)

  // return our element tags and components (passing down the retrieved state)
  return (
    <div>
      <h1>Home Page</h1>
      <eventsHosting {...props}/>
			<eventsParticipatingIn {...props}/>
    </div>
  );
};

export default connect(mapStateToProps)(homePage);

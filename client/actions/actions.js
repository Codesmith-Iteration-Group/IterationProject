import axios from "axios";
import * as types from "../constants/actionTypes";

export const getHostEvents = (event) => (dispatch, getState) => {
  // event.preventDefault();
  axios
    .get("/event/organizer-invited-events")
    .then(({ events }) => {
      dispatch({
        type: types.GET_HOST_EVENTS,
        payload: events,
      });
    })
    .catch(console.error);
};

export const getPartEvents = (event) => (dispatch, getState) => {
	// event.preventDefault();
  axios
    .get("/event/user-invited-events")
    .then(({ events }) => {
      dispatch({
        type: types.GET_PART_EVENTS,
        payload: events,
      });
    })
    .catch(console.error);
};

//   router.get(
//     '/user-invited-events',
//     eventController.getEventsForUser,
//     (req, res) => {
//       return res.status(200).json(res.locals.events);
//     }
//   );

//   router.get(
//     '/organizer-invited-events',
//     eventController.getEventsForOrganizer,
//     (req, res) => {
//       return res.status(200).json(res.locals.eventsFromOrganizer);
//     }
//   );

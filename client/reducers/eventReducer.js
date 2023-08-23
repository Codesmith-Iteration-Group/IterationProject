import * as types from "../constants/actionTypes.js";

const initialState = {
  eventsHosting: [],
  eventsParticipatingIn: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOST_EVENTS:
      return {
        ...state,
        eventsHosting: action.payload,
      };

    case types.GET_PART_EVENTS:
      return {
        ...state,
        eventsParticipatingIn: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;

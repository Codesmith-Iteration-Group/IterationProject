import * as types from '../constants/actionTypes.js';

const initialState = {
    invitee: [],
    eventName: 'Event Name',
    eventLocation: 'Event Location',
    eventDetails: 'Event Details',
    availableTime: 'Available Time',
    usernames: ['Usernames of potential invitees go here']
};

const eventReducer = (state = initialState, action) => {

    switch (action.type) {

    }
}
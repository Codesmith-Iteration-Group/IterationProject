const db = require('../models/model');

const eventController = {};

eventController.createEvent = async (req, res, next) => {
  try {
    console.log('currently in eventController.createEvent');
    // destructure req.body for relevent data
    const { usernames, locations, event_name, details, times } = req.body;

    // REQ.BODY CONSOLE LOGS
    console.log('req.body.usernames: ', usernames);
    console.log('req.body.locations: ', locations);
    console.log('req.body.event_name: ', event_name);
    console.log('req.body.details: ', details);
    console.log('req.body.times: ', times);
    // COOKIES CONSOLE LOGS
    console.log(req.cookies.userId);

    const userIDs = [];

    // getting all the columns in the 'users' table regarding a specific username
    const createEventQuery = `SELECT * FROM "user" WHERE username = $1;`;
    for (let i = 0; i < usernames.length; i++) {
      console.log('username is: ', usernames[i]);
      let userID = await db.query(createEventQuery, [usernames[i]]);
      console.log('userID: ', userID);
      userIDs.push(userID.rows[0]);
    }
    // checking array of userIDs - should equivalate to ..?
    console.log(userIDs, 'useridss');

    // insert eventValue array properties (below) into events table
    const insertEventQuery = `
      INSERT INTO "events" (organizer_id, location, event_name, details) 
      VALUES($1, $2, $3, $4) 
      RETURNING *;
      `;
    const eventValue = [req.cookies.userId, locations, event_name, details];
    const createEvents = await db.query(insertEventQuery, eventValue);
    console.log('successful insert query for new event');

    // access unique eventID from newly created event
    const eventID = createEvents.rows[0].event_id;

    // insert userID and the event into invitation table
    const insertInvitation = `INSERT INTO "invitation" ("user", "event") VALUES($1, $2) RETURNING *;`;
    let invitationValues = [];
    for (let i = 0; i < userIDs.length; i++) {
      invitationValues = [userIDs[i].user_id, eventID];
      console.log(invitationValues);
      const createInvitation = await db.query( insertInvitation, invitationValues );
      // NOTE: createInvitation is never called^ ..?
    }

    // inset the user, event and available times into user_availability table
    const eventOrgAvailability = `
      INSERT INTO "user_availability" ("user", "event", "available_start_time", "available_end_time") 
      VALUES($1,$2,$3,$4)
      RETURNING * ;
    `;

    // create an array with cookie, eventID, start time, and end time.. for what purpose..?
    // NOTE: there is a for-loop here but eventOrgValues array gets reassigned each time..? doesn't make sense..
    let eventOrgValues = [];
    let startTime = '';
    let endTime = '';
    for (let i = 0; i < times.length; i++) {
      console.log(times[i].start);
      console.log(times[i].end);
      startTime = times[i].start.slice(0, 19).replace('T', ' ');
      endTime = times[i].end.slice(0, 19).replace('T', ' ');
      console.log(startTime, endTime);
      eventOrgValues = [
        req.cookies.userId,
        eventID,
        times[i].start,
        times[i].end,
      ];
      const addEventOrgAvailability = await db.query( eventOrgAvailability, eventOrgValues );
      // NOTE: addEventOrgAvailability is never called either^ ..? also is inside of the for-loop??
    }
    return next();
  } catch (err) {
    return err;
  }
};

// gets all usernames in the database
eventController.getAllUsernames = async (req, res, next) => {
  try {
    console.log('currently in eventController.getAllUsernames');
    const getAllUsernamesQuery = 'SELECT username FROM "user"';
    const usernamesResult = await db.query(getAllUsernamesQuery);
    // console.log('usernamesResult.rows: ', usernamesResult.rows);
    const usernames = usernamesResult.rows.map((row) => row.username);
    console.log('usernames: ', usernames);
    res.locals.usernames = usernames;
    next();
  } catch (err) {
    return next(err);
  }
};

// gets all events that a user has been invited to
eventController.getEventsForUser = async (req, res, next) => {
  try {
    console.log('inside of eventController.getEventsForUser');
    const userId = req.cookies.userId;
    const getInvitedEventsQuery = `
      SELECT * FROM "events"
      INNER JOIN invitation ON events.event_id = invitation.event_id
      WHERE invitation.user_id = $1;
    `;
    const events = await db.query(getInvitedEventsQuery, [userId]);
    // console.log('events.fields: ', events.fields);
    // console.log('events.rows: ', events.rows);
    res.locals.events = events.rows;
    next();
  } catch (err) {
    return next(err);
  }
};

// get all events that are hosted by user
eventController.getEventsForOrganizer = async (req, res, next) => {
  try {
    console.log('inside of eventController.getEventsForOrganizer')
    const userId = req.cookies.userId;
    const getEventsQuery = `
      SELECT * FROM "events"
      WHERE organizer_id = $1;
    `;
    const events = await db.query(getEventsQuery, [userId]);
    res.locals.eventsFromOrganizer = events.rows;
    next();
  } catch (err) {
    return next(err);
  }
};

eventController.getTimesForEvent = async (req, res, next) => {
  try {
    console.log('inside of eventController.getTimesForEvent');
    // console.log('req.query: ', req.query);
    // console.log('req.query.event: ', req.query.event);
    const event_id = req.query.event;
    const getOrganizer = `
      SELECT * from "events" 
      WHERE "event_id" = $1;
    `;
    const gettingOrganizerId = await db.query(getOrganizer, [event_id]);
    // console.log('gettingOrganizerId.rows: ', gettingOrganizerId.rows);
    const organizer_id = gettingOrganizerId.rows[0].organizer_id;
    console.log('organizer_id: ', organizer_id);
    const getTimes = `
      SELECT * from "user_availability" 
      WHERE "user" = $1 AND "event" = $2;
    `;
    const gettingTimes = await db.query(getTimes, [organizer_id, event_id]);
    console.log('gettingTimes: ', gettingTimes);

    const result = [];
    for (let el of gettingTimes.rows) {
      result.push({
        start: el.available_start_time,
        end: el.available_end_time,
      });
    }
    // console.log('result array: ', result);
    res.locals.times = result;
    console.log(res.locals.times);
    return next();
  } catch (err) {
    return next(err);
  }
};

//let user select the time from the event time
//insert table userid, event id, times available, be able to select more times
//post request
eventController.inviteeChooseEventTime = async (req, res, next) => {
  // const testinggtimes = [
  //   { start: '2023-08-20T06:30:00.000Z', end: '2023-08-22T18:30:00.000Z' },
  //   { start: '2023-08-23T06:30:00.000Z', end: '2023-08-25T18:30:00.000Z' },
  // ];
  try {
    console.log('inside of eventController.inviteeChooseEventTime');
    const { event_id, times } = req.body;
    const chooseTimes = `
      INSERT INTO "user_availability" ("user", "event", "available_start_time", "available_end_time") 
      VALUES($1, $2, $3, $4) 
      RETURNING *;
    `;
    const userId = req.cookies.userId;
    for (let i = 0; i < times.length; i++) {
      await db.query(chooseTimes, [
        userId,
        event_id,
        times[i].start,
        times[i].end,
      ]);
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = eventController;

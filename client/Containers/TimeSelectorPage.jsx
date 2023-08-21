import React, {useState, useEffect} from 'react';
import TimeSelector from '../Components/TimeSelector.jsx';
import {Button, Container, Typography} from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TimeSelectorPage = (props) => {

  const event_id = props.event.event_id;
  console.log('props', props);
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);
  const timeSelectors = [];
    // const getEventTimes = async () => {
  //      try{
  //       const response = axios.get(`http://localhost:3000/event/gettingInvitationTimes/?event=${event_id}`);
  //       const times = response.data.times;
  //       console.log('you got back', times); 
  //       for (let time of times){
  //         timeSelectors.push(<TimeSelector av = {availableTimes} set = {setAvailableTimes} timeConstraints = {time}/>)
  //       }
  //      }
  //      catch (err){
  //       console.log(err);
  //      }
  //   }
  //   useEffect(() => {
  //     getEventTimes()}, []);
  //   const times = [{start: new Date('August 20, 2023 06:30:00'), end: new Date('August 22, 2023 18:30:00')}, {start: new Date('August 23, 2023 06:30:00'), end: new Date('August 25, 2023 18:30:00')}]; //dummy code for testing front end
  
    

    const handleClick = async () => {
      try{
        const result = await axios.post(`http://localhost:3000/event/inviteeChooseEventTime`, {
          event_id: event_id,
          times: availableTimes,
        });
        if(result){
          navigate('/')
        }
      }
      catch(err){
        console.log(err);
      }
      // console.log({
      //       event_id: event_id,
      //       times: availableTimes,
      // });
      // navigate('/home');
    }  
    return (
      <Container maxWidth="md" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" gutterBottom>
            Select Your Availability
        </Typography>
        {timeSelectors}
        <Button onClick={handleClick}>Submit</Button>
      </Container>
    )
}

export default TimeSelectorPage;

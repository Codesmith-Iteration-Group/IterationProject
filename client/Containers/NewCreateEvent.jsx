import React, { useState, useEffect } from 'react';
import TimeSelector from '../Components/TimeSelector.jsx';
import {
    Box,
    Button,
    Container,
    Typography,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    IconButton,
    TextField,
} from '@mui/material';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const createEvent = () => {
    // add functionality here
    const navigate = useNavigate();
    
    return (
        <Container
          maxWidth='md'
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant='h4' gutterBottom>
            Create Event
          </Typography>
          <TextField
            fullWidth
            label='Event Name'
            margin='normal'
          
          />
          <TextField
            fullWidth
            label='Event Location'
            margin='normal'
            
          />
          <TextField
            fullWidth
            label='Event Summary'
            margin='normal'
            multiline
            rows={4}
            
          />
    
          <Button>
            Add another availability window
          </Button>
    
          {/* (??)
          <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {selectedDates.map((date, idx) => (
                        <Box key={idx} display="flex" alignItems="center" marginY={2}>
                            <DesktopDateTimePicker
                                label="Start Time"
                                inputFormat="MM/dd/yyyy HH:mm a"
                                value={date.start}
                                onChange={(newDate) => {
                                    const newDates = [...selectedDates];
                                    newDates[idx].start = newDate;
                                    setSelectedDates(newDates);
                                }}
                                renderInput={(params) => <TextField {...params} fullWidth margin="normal" variant="outlined" />}
                            />
                            <DesktopDateTimePicker
                                label="End Time"
                                inputFormat="MM/dd/yyyy HH:mm a"
                                value={date.end}
                                onChange={(newDate) => {
                                    const newDates = [...selectedDates];
                                    newDates[idx].end = newDate;
                                    setSelectedDates(newDates);
                                }}
                                renderInput={(params) => <TextField {...params} fullWidth margin="normal" variant="outlined" />}
                            />
                            <IconButton onClick={handleAddDateTime}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    ))}
                </LocalizationProvider> */}
    
          <FormControl fullWidth margin='normal'>
            <InputLabel>Invite</InputLabel>
            <Select
              value='users'
              
            >
   
            </Select>
          </FormControl>
    
          <Box display='flex' justifyContent='flex-end' marginTop={3}>
            <Button variant='contained' color='primary'>
              Create Event
            </Button>
          </Box>
        </Container>
      );
    }

export default createEvent;
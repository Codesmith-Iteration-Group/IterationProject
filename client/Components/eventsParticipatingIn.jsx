import React from "react";

const eventsParticipatingIn = (props) => {
  // destructure props for relevant data

  // return component render
  return (
    <div>
      <Box flex="1">
        <Typography variant="h5" marginBottom="1rem">
          Events you are participating in:
        </Typography>
        {pEvents.map((event) => (
          <Container>
            <Box key={event.event_id}>{event.event_name}</Box>
            <Button
              onClick={() => {
                set(event);
                navigate("/event/select-times");
              }}
            >
              Set your availability
            </Button>
          </Container>
        ))}
      </Box>
    </div>
  );
};

export default eventsParticipatingIn;

/* !!OLD HOMEPAGE REFERENCE!! */

// {/* <Box flex='1'>
// <Typography variant='h5' marginBottom='1rem'>
//   Participating
// </Typography>
// {/* Render the participating events */}
// {pEvents.map((event) => (
//   <Container>
//     <Box key={event.event_id}>{event.event_name}</Box>
//     <Button
//       onClick={() => {
//         set(event);
//         navigate('/event/select-times');
//       }}
//     >
//       Set your availability
//     </Button>
//   </Container>
// ))}
// </Box> */}

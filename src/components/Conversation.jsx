import { Grid, Avatar } from '@mui/material';

const Conversation = ({ props, test }) => {
  return (
    <Grid container className='conversation'>
      <Grid item>
        <Avatar className='avatar big' />
      </Grid>
      <Grid item>
        <p>{props.name}</p>
        <p>{props.lastMessage}</p>
        <p>{props.timeStamp}</p>
      </Grid>
    </Grid>
  );
};

export default Conversation;

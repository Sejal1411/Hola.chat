import { Grid } from '@mui/material';
import { conversations } from '/dev-data/conversations';
import Conversation from './Conversation';

const Conversations = () => {
  console.log({ conversations });
  return (
    <Grid container className='conversations'>
      {conversations.map((conversation, i) => {
        return <Conversation props={conversation} key={i} />;
      })}
    </Grid>
  );
};

export default Conversations;

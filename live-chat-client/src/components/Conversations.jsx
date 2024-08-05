import { Grid } from '@mui/material';
import { conversations } from '/dev-data/conversations';
import Conversation from './Conversation';
import { useNavigate } from 'react-router-dom';

const Conversations = () => {
  console.log({ conversations });
  return (
    <Grid container className='conversations'>
      {conversations.map((conversation, i) => {
        return <Conversation props={conversation} key={i}/>;
      })}
    </Grid>
  );
};

export default Conversations;

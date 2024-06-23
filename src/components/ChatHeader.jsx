import { Logout } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

const ChatHeader = () => {
  return (
    <Grid item className='chat-header'>
      <IconButton>
        <Logout />
      </IconButton>
    </Grid>
  );
};

export default ChatHeader;

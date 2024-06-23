import { Grid, Avatar, ButtonGroup, IconButton } from '@mui/material';
import {
  DarkMode,
  PersonAddAlt1,
  GroupAdd,
  AddCircle,
} from '@mui/icons-material';

const SideHeader = () => {
  return (
    <Grid container className='side-header'>
      <Avatar className='avatar' />
      <ButtonGroup>
        <IconButton>
          <PersonAddAlt1 />
        </IconButton>
        <IconButton>
          <GroupAdd />
        </IconButton>
        <IconButton>
          <AddCircle />
        </IconButton>
        <IconButton>
          <DarkMode />
        </IconButton>
      </ButtonGroup>
    </Grid>
  );
};

export default SideHeader;

import { Grid, Avatar, ButtonGroup, IconButton } from '@mui/material';
import {
  DarkMode,
  PersonAddAlt1,
  GroupAdd,
  AddCircle,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';

const SideHeader = () => {
 const navigate =  useNavigate();
 const [lightTheme,setLightTheme] = useState(true);

  return (
    <Grid container className={'side-header' + (lightTheme ?"" : " dark")}>
      <Avatar className='avatar' />
      <ButtonGroup>

        <IconButton onClick={() => {
          navigate("users");
        }}>
          <PersonAddAlt1 className={(lightTheme ?"" : " dark")}/>
        </IconButton>

        <IconButton onClick={() => {
          navigate("groups")
        }}>
          <GroupAdd className={(lightTheme ?"" : " dark")}/>
        </IconButton>

        <IconButton onClick={() => {
          navigate("create-groups")
        }}>
          <AddCircle className={(lightTheme ?"" : " dark")}/>
        </IconButton>

        <IconButton onClick={()=> {
          setLightTheme((prevValue) => {
            return !prevValue;
          });
        }}>
          {lightTheme && <DarkMode />}
          {!lightTheme && <LightModeIcon />}
        </IconButton>

      </ButtonGroup>
    </Grid>
  );
};

export default SideHeader;

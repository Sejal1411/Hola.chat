import { IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";

const Users = () => {
  return (
    <div className="users-list">
      <div className="ug-header">
        <img src="chat1.png" style={{ }} 
        />
        <p className="ug-title">Online Users</p>
      </div>
      <div className="sb-search">
        <IconButton>
            <SearchIcon />
        </IconButton>
        <input type="Search" className="search-box" />
      </div>
      <div className="ug-list"> 
            

      </div>
    </div>
  )
}

export default Users

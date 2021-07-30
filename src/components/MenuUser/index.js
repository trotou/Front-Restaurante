import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import { useServices } from "../../Providers/Services";

export default function SimpleMenu({ id }) {
  const { deleteUser } = useServices();
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    deleteUser(id);
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertIcon color="disabled" onClick={handleClick}></MoreVertIcon>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDelete(id)}>Deletar</MenuItem>
      </Menu>
    </div>
  );
}

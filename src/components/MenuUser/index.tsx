import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Store/slices/servicesSlicer';

type MenuProps = {
  id: number;
};

const SimpleMenu = ({ id }: MenuProps) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon color="disabled" />
      </IconButton>

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
};

export default SimpleMenu;

import {
  Avatar,
  Badge,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IOSSwitch from '../IosSwitch';
import SimpleMenu from '../MenuUser';
import { userListStyles } from '../../Helpers/styles';
import { RootState } from '../../Store/store';
import { getUsers, patchUser } from '../../Store/slices/servicesSlicer';

const UsersList = () => {
  const classes = userListStyles();
  const dispatch = useDispatch();
  const userList = useSelector((state: RootState) => state.service.userList);
  const update = useSelector((state: RootState) => state.service.update);

  useEffect(() => {
    dispatch(getUsers());
  }, [update]);

  return (
    <div>
      {userList &&
        userList.map((item: any, i: number) => (
          <List className={classes.root} key={item.idFuncionario}>
            <ListItem className={classes.item}>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${i}`} />
              </ListItemAvatar>

              {item.registrado ? (
                <IconButton style={{ margin: '0 -0.5% 0 -1%' }}>
                  <span className="material-icons">&#xe324;</span>
                </IconButton>
              ) : null}

              <span>
                <Badge
                  classes={
                    item.online
                      ? { badge: classes.customBadgeOn }
                      : { badge: classes.customBadgeOff }
                  }
                  badgeContent=""
                  variant="dot"
                >
                  <Typography>{item.nome}</Typography>
                </Badge>

                <ListItemText secondary={item.cargo} />
              </span>

              <ListItemSecondaryAction>
                <FormControlLabel
                  labelPlacement="start"
                  control={
                    <IOSSwitch
                      checked={item.online}
                      onChange={() => {
                        dispatch(
                          patchUser({
                            id: item.idFuncionario,
                            data: item.online,
                          })
                        );
                      }}
                    />
                  }
                  label={
                    item.online ? (
                      <p style={{ color: '#838180' }}>Online</p>
                    ) : (
                      <p style={{ color: '#838180' }}>Offline</p>
                    )
                  }
                />

                <IconButton
                  disableFocusRipple
                  disableRipple
                  style={{
                    backgroundColor: 'transparent',
                    paddingBottom: '5%',
                  }}
                >
                  <SimpleMenu id={item.idFuncionario} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        ))}
    </div>
  );
};

export default UsersList;

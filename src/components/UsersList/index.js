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
} from "@material-ui/core";
import { useEffect } from "react";
import { useServices } from "../../Providers/Services";
import IOSSwitch from "../IosSwitch";
import SimpleMenu from "../MenuUser";
import { userListStyles } from "../../Helpers/styles";

const UsersList = () => {
  const classes = userListStyles();
  const { getUsers, userList, patchUser } = useServices();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {userList &&
        userList.map((item, i) => (
          <List className={classes.root} key={item.idFuncionario}>
            <ListItem className={classes.item}>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${i}`} />
              </ListItemAvatar>

              {item.registrado ? (
                <IconButton style={{ margin: "0 -0.5% 0 -1%" }}>
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
                  badgeContent={""}
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
                        patchUser(item.idFuncionario, { online: !item.online });
                      }}
                    />
                  }
                  label={
                    item.online ? (
                      <p style={{ color: "#838180" }}>Online</p>
                    ) : (
                      <p style={{ color: "#838180" }}>Offline</p>
                    )
                  }
                />

                <IconButton
                  disableFocusRipple
                  disableRipple
                  style={{
                    backgroundColor: "transparent",
                    paddingBottom: "5%",
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

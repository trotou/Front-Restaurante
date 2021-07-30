import { Button, makeStyles, TextField, withStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  formControl: {
    backgroundColor: "#f7f7f7",
    border: "none",
  },
  hideIconPadding: {
    "& .MuiSelect-outlined": {
      paddingRight: "20px",
      color: "black",
    },
  },
  drawerPaper: {
    padding: "1%",
    width: "310px",
  },
  multilineColor: {
    color: "red",
  },
  textStyle: {
    color: "black",
    backgroundColor: "#f5ecec",
    borderRadius: "3%",
  },
  item: { display: "flex", flexDirection: "column", flexWrap: "wrap" },
});

export const StyledInput = withStyles({
  root: {
    margin: "1%",
  },
})(TextField);

export const StyledButtonHome = withStyles({
  root: {
    backgroundColor: "#f51e34",
    borderRadius: 6,
    width: "12%",
    border: 0,
    color: "white",
    height: 48,
    fontSize: "50%",
    margin: "1% 0 1% 0",
    "&:hover": {
      backgroundColor: "purple",
    },
  },
})(Button);

export const StyledButton = withStyles({
  root: {
    backgroundColor: "#f51e34",
    borderRadius: 6,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 40px",
    fontSize: "1.2rem",
    position: "absolute",
    width: "92%",
    top: "85%",
    "&:hover": {
      backgroundColor: "purple",
    },
  },
})(Button);

export const userListStyles = makeStyles((theme) => ({
  root: {
    color: "black",
  },
  item: {
    backgroundColor: theme.palette.background.paper,
    width: "95vw",
    borderRadius: "3%",
  },
  customBadgeOn: {
    backgroundColor: theme.palette.success.main,
  },
  customBadgeOff: {
    backgroundColor: theme.palette.error.dark,
  },
}));

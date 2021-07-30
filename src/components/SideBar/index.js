import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { useServices } from "../../Providers/Services";
import RegisterForm from "../RegisterForm";
import { InsideDiv, OutSideDiv } from "./styles";
import { StyledButtonHome, useStyles } from "../../Helpers/styles";
import { IconButton } from "@material-ui/core";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const { handleClose, handleOpen, open } = useServices();

  return (
    <OutSideDiv>
      <React.Fragment>
        <StyledButtonHome onClick={handleOpen}>
          Novo funcionário
        </StyledButtonHome>

        {open && (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            open={open}
            anchor="right"
            onClose={handleClose}
          >
            <InsideDiv>
              <IconButton
                disableFocusRipple
                disableRipple
                size="small"
                style={{
                  backgroundColor: "transparent",
                }}
                onClick={handleClose}
              >
                <CloseIcon color="secondary" />
              </IconButton>

              <p style={{ marginLeft: "4%", fontWeight: "bold" }}>
                Funcionário
              </p>
            </InsideDiv>

            <h2 style={{ margin: "0" }}>Novo Funcionário</h2>

            <p style={{ marginTop: "1%", marginBottom: "6%" }}>
              Se atente às indicações do formulário
              <span value="donut">{`\u{1f609}`}</span>
            </p>

            <RegisterForm />
          </Drawer>
        )}
      </React.Fragment>
    </OutSideDiv>
  );
}

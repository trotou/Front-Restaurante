import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { InsideDiv, OutSideDiv } from './styles';
import { StyledButtonHome, useStyles } from '../../Helpers/styles';
import { RootState } from '../../Store/store';
import { handleClose, handleOpen } from '../../Store/slices/openSlicer';

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = useSelector((state: RootState) => state.open.value);

  return (
    <OutSideDiv>
      <>
        <StyledButtonHome onClick={() => dispatch(handleOpen())}>
          Novo funcionário
        </StyledButtonHome>

        {open && (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            open={open}
            anchor="right"
            onClose={() => dispatch(handleClose())}
          >
            <InsideDiv>
              <IconButton
                disableFocusRipple
                disableRipple
                size="small"
                style={{
                  backgroundColor: 'transparent',
                }}
                onClick={() => dispatch(handleClose())}
              >
                <CloseIcon color="secondary" />
              </IconButton>

              <p style={{ marginLeft: '4%', fontWeight: 'bold' }}>
                Funcionário
              </p>
            </InsideDiv>

            <h2 style={{ margin: '0' }}>Novo Funcionário</h2>

            <p style={{ marginTop: '1%', marginBottom: '6%' }}>
              Se atente às indicações do formulário
              <span>{'\u{1f609}'}</span>
            </p>

            <RegisterForm />
          </Drawer>
        )}
      </>
    </OutSideDiv>
  );
}

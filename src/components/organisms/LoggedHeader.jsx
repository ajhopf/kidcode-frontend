import { AppBar, Toolbar, Grid, IconButton } from '@mui/material';
import React from 'react';
import { InputBase, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LoggedHeader() {
  return (
    <AppBar className="loggedHeader" position="static">
      <Toolbar>
        <Grid container>
          <Grid item style={{ border: '1px solid #fff' }}>
            <InputBase />
          </Grid>

          {/*Colocou esste grid item vazio para ocupar o espaço que sobra, desta forma o item anterior e o próximo irão ocupar apenas o espaço necessário para os icones */}
          <Grid sm />
          <Grid item style={{ border: '1px solid #000' }}>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

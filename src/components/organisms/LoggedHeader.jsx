// import { AppBar, Toolbar, Grid, IconButton } from '@mui/material';
import React from 'react';
// import { InputBase, Badge } from '@mui/material';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../images/logo-laranja.png';
import { Link } from 'react-router-dom';

export default function AppHeader(props) {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Link to="/">
          <img src={logo} className="responsive" alt="Tera Logo" />
        </Link>
      </div>
      <div className="app-header__menu">
        <i onClick={() => props.setIsOpen(true)} className="fa fa-bars"></i>
      </div>
    </div>
  );
}

// return (
//   <AppBar className="loggedHeader" position="static">
//     <Toolbar>
//       <Grid container>
//         <Grid item style={{ border: '1px solid #fff' }}>
//           <InputBase />
//         </Grid>

//         {/*Colocou esste grid item vazio para ocupar o espaço que sobra, desta forma o item anterior e o próximo irão ocupar apenas o espaço necessário para os icones */}
//         <Grid sm />
//         <Grid item style={{ border: '1px solid #000' }}>
//           <IconButton>
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsNoneIcon />
//             </Badge>
//           </IconButton>
//           <IconButton>
//             <Badge badgeContent={4} color="primary">
//               <ChatBubbleOutlineIcon />
//             </Badge>
//           </IconButton>
//           <IconButton>
//             <LogoutIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//     </Toolbar>
//   </AppBar>
// );

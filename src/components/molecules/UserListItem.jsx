import React from 'react';
import { ListItem } from '@mui/material';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserListItem(props) {
  const user = props.user;

  return (
    <ListItem className="userListItem">
      <Card sc={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={user.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Email: {user.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Membro desde: {user.createdAt}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}

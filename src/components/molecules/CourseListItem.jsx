import React from 'react';
import { ListItem } from '@mui/material';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CourseListItem(props) {
  const course = props.course;

  return (
    <ListItem className="courseListItem">
      <Card sc={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Idade: {course.age}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Membro desde: {course.createdAt}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}

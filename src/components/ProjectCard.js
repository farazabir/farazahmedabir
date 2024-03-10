import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ProjectCard = (props) => {
  const gotoWebsite = () => window.location.href = props.link;

  return (
    <Card 
      sx={{ 
        maxWidth: 380, 
        m: 1,
        transition: 'transform 0.3s ease-in-out',
        fontFamily: 'monospace', 
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }}
    >
      <CardActionArea onClick={gotoWebsite}>
        <CardMedia
          component="img"
          height="200"
          image={props.src}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace',}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            fontFamily: 'monospace',
          }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Stack direction="row" spacing={1} justifyContent="start">
          <Chip label={props.buttonText1} variant="outlined" size="medium" />
          {props.buttonText2 && <Chip label={props.buttonText2} variant="outlined" size="medium" />}
          {props.buttonText3 && <Chip label={props.buttonText3} variant="outlined" size="medium" />}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;

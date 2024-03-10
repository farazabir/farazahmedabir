import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code'; 
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web'; 
import JavascriptIcon from '@mui/icons-material/Javascript'; 
import CloudQueueIcon from '@mui/icons-material/CloudQueue'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import TaskIcon from '@mui/icons-material/Task'; 
import VideoCallIcon from '@mui/icons-material/VideoCall';

const skills = [
  { skill: 'Python', Icon: CodeIcon },
  { skill: 'JavaScript', Icon: JavascriptIcon },
  { skill: 'Dart', Icon: CodeIcon },
  { skill: 'C#', Icon: CodeIcon },
  { skill: 'Java', Icon: CodeIcon },
  { skill: 'SQL', Icon: StorageIcon },

  { skill: 'Django', Icon: CodeIcon },
  { skill: 'React', Icon: WebIcon },
  { skill: 'Node.js', Icon: CodeIcon },
  { skill: 'Spring Boot', Icon: CodeIcon },
  { skill: 'Flutter', Icon: CodeIcon },
  { skill: 'NumPy', Icon: CodeIcon },
  { skill: 'Image Processing', Icon: CodeIcon },
  { skill: 'HTML', Icon: WebIcon },
  { skill: 'CSS', Icon: WebIcon },
  { skill: 'MongoDB', Icon: StorageIcon },
  { skill: 'AWS', Icon: CloudQueueIcon },
  { skill: 'Docker', Icon: CodeIcon },
  { skill: 'Unity', Icon: CodeIcon },
  { skill: 'Google Meet', Icon: VideoCallIcon },
  { skill: 'Slack', Icon: ChatIcon },
  { skill: 'Jira', Icon: TaskIcon },
  ];
  


const Skills = () => {
  return (
    <Container sx={{ mt: 3, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
      <Typography 
  variant="h4" 
  component="h1" 
  align="center"
  sx={(theme) => ({
    marginBottom: theme.spacing(2), 
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  })}
>
  Familiar With
</Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
             <Chip
              icon={<skill.Icon />}
              label={skill.skill}
              variant="outlined"
              sx={{ fontSize: '1rem', height: '48px', margin: '4px', padding: '0 12px' , fontWeight : '700', fontFamily: 'monospace',}}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;

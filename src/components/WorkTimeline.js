import React from 'react';
import { Typography, Container, List, ListItem, Fade, useTheme, Card, CardContent } from '@mui/material';

function TimelineItem({ year, title, duration, details, index }) {
  const theme = useTheme(); 

  return (
    <Fade in={true} timeout={2000}>
      <Card sx={{ 
          mb: 4, 
          maxWidth: 600, 
          width: '100%',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'monospace',
        }}>
        <CardContent sx={{
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          fontFamily: 'monospace',
        }}>
          <Typography variant="h5" component="div" gutterBottom>
            {year}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '700', fontFamily: 'monospace', }} gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: '600', fontFamily: 'monospace', }}gutterBottom>
            {duration}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: '500', fontFamily: 'monospace', }}>
            {details}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
}

function WorkTimeline() {
  const experienceData = [
    {
      year: '2023 - Today',
      title: 'Full Stack Developer',
      duration: 'Ongoing',
      details: 'Currently working as a Full Stack Developer, focusing on end-to-end application development including both front-end and back-end technologies.',
    },
    {
      year: '2022 - 2023',
      title: 'Mobile App Development With kotlin And Dart',
      duration: '1.5 years',
      details: 'Developed Various Mobile apps',
    },
    {
      year: '2021 - 2022',
      title: 'Full Stack Web Development',
      duration: '8 months',
      details: 'Started Learning Web Development',
    },
    {
      year: '2020 - 2021',
      title: 'Unity Game Development',
      duration: '10 months',
      details: 'Developed games using Unity engine and C#',
    },
    {
      year: "2020-2021",
      title: "C and C++",
      details: "Problem Solving With C and C++",
    },
    {
      year: "2020",
      title: "First Line Of Code",
      details: "In 2020, I got my first laptop.",
    },
  ];

  return (
    <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" align="center" sx={(theme) => ({
        marginBottom: theme.spacing(2), 
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(6),
        },
      })}>
        Timeline
      </Typography>
      <List sx={{ width: '100%', maxWidth: 600 }}>
        {experienceData.map((item, index) => (
          <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
            <TimelineItem index={index} {...item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default WorkTimeline;

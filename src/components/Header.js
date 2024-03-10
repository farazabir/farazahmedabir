import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PhotoFrame from "./PhotoFrame";
import '../App.css'; // Keep your custom styles, but ensure they don't conflict with MUI

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
        <PhotoFrame imageSrc="https://avatars.githubusercontent.com/u/62275863?v=4" altText="My photo" />
      </div>
      <Typography variant="h3" component="h1" gutterBottom>
        Faraz Ahmed Abir
      </Typography>
      <Typography variant="h4" component="h4" sx={{ fontWeight: '500', fontFamily: 'monospace', mt: 3, mb: 2 }} gutterBottom>
      Crafting robust web and mobile solutions tailored to client needs, leveraging cross-platform development, competitive programming, AI, Docker, and GitHub expertise.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h5" sx={{
          fontWeight: '500',
          fontFamily: 'monospace',
          margin: 'auto',
          lineHeight: '1.5',
          letterSpacing: 'normal',
          textAlign: 'justify', 
        }}>
         Currently, I'm a full-stack developer at Drag Me, where I leverage my diverse skill set to build robust web and mobile applications. My expertise spans a range of technologies, including Django, Node.js, and Spring Boot for backend development, along with proficiency in creating cross-platform mobile apps using React Native, Kotlin, and Flutter. Beyond application development, I'm passionate about competitive programming, regularly honing my skills on platforms like LeetCode. I also have a keen interest in artificial intelligence, capable of undertaking AI projects with my knowledge of Python. My technical repertoire includes familiarity with Docker, GitHub, and other essential development tools, enabling me to maintain a versatile and forward-thinking approach to technology solutions.
        </Typography>
      </div>
    </Container>
  );
}

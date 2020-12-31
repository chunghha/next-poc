import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import UsersAppBar from '../src/components/UsersAppBar';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <UsersAppBar />
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
      </Box>
    </Container>
  );
}

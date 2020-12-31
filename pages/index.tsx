import React from 'react';
import '@fontsource/inter';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import UsersAppBar from '../src/components/UsersAppBar';
import UserTable from '../src/components/UserTable';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <UsersAppBar />
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha with TypeScript example
        </Typography>
        <Link href="/about" color="primary">
          Go to the about page
        </Link>
        <ProTip />
        <UserTable />
      </Box>
    </Container>
  );
}

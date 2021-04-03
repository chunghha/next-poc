import React from 'react';
import '@fontsource/inter';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import UsersAppBar from '../src/components/UsersAppBar';
import UserTable from '../src/components/UserTable';

export default function Index() {
  return (
    <Container maxWidth="lg">
        <UsersAppBar />
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha with TypeScript example
        </Typography>
        <Link href="/about" color="primary">
          Go to the about page
        </Link>
        <div>
          <Link href="/three/birds" color="error">
            Birds Example
          </Link>
        </div>
        <div>
          <Link href="/three/boxes" color="primary">
            Boxes Example
          </Link>
        </div>
        <ProTip />
        <UserTable />
    </Container>
  );
}

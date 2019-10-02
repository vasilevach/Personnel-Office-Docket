import React from 'react';

import withSession from 'client/src/pages/Session/withSession';

import { MessageCreate, Messages } from 'client/src/pages/Message';

const Landing = ({ session }) => (
  <div>
    <h2>Landing Page</h2>

    {session && session.me && <MessageCreate />}
    <Messages limit={2} />
  </div>
);

export default withSession(Landing);

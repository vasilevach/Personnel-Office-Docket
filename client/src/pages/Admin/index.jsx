import React from 'react';

import withAuthorization from 'client/src/pages/Session/withAuthorization';

const AdminPage = () => (
  <div>
    <h1>Admin Page</h1>
  </div>
);

export default withAuthorization(
  session => session && session.me && session.me.role === 'ADMIN',
)(AdminPage);

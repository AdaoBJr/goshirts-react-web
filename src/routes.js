import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateAccount from './lib/pages/CreateAccount';
import SignIn from './lib/pages/SignIn';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default MainRoutes;

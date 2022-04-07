import React from 'react';
import { Button, useStyle } from '@goshirts-react/lib';

import defaultClasses from './signIn.module.css';

const SignIn = (props) => {
  const classes = useStyle(defaultClasses, props.classes);
  return (
    <>
      <h1 className={classes.root}>LOGIN</h1>
      <Button classes={{ defaultStyles: classes.buttonEnter }}>ENTRAR</Button>
    </>
  );
};

export default SignIn;

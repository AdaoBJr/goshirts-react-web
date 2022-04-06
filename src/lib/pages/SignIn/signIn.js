import React from 'react';
import { Button, mergeClasses } from '@goshirts-react/lib';

import defaultClasses from './signIn.module.css';

const SignIn = (props) => {
  const { useStyles } = mergeClasses();
  const classes = useStyles(defaultClasses, props.classes);
  return (
    <>
      <h1 className={classes.root}>LOGIN</h1>
      <Button>ENTRAR</Button>
    </>
  );
};

export default SignIn;

import React from 'react';
import { mergeClasses } from '@goshirts-react/lib';

import defaultClasses from './signIn.modules.css';

const SignIn = (props) => {
  const { useStyles } = mergeClasses();
  const classes = useStyles(defaultClasses, props.classes);
  return <div className={classes.root}>SIGNIN</div>;
};

export default SignIn;

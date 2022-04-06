import React from 'react';
import defaultClasses from './createAccount.modules.css';
import { mergeClasses } from '@goshirts-react/lib';

const CreateAccount = (props) => {
  const { useStyles } = mergeClasses();
  const classes = useStyles(defaultClasses, props.classes);

  return <h1 className={classes.root}>CreateAccount</h1>;
};

export default CreateAccount;

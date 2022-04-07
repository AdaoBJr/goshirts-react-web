import React from 'react';
import defaultClasses from './createAccount.module.css';
import { mergeClasses } from '@goshirts-react/lib';

const CreateAccount = (props) => {
  const { useStyle } = mergeClasses();
  const classes = useStyle(defaultClasses, props.classes);

  return <h1 className={classes.root}>CreateAccount</h1>;
};

export default CreateAccount;

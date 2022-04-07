import React from 'react';
import defaultClasses from './createAccount.module.css';
import { InputText, useStyle } from '@goshirts-react/lib';

const CreateAccount = (props) => {
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <>
      <h1 className={classes.root}>CreateAccount</h1>
      <InputText
        label="Primeiro Nome"
        name="firstname"
        placeholder="Insira seu primeiro nome"
        classes={{ input: classes.createAccountInput }}
      />
    </>
  );
};

export default CreateAccount;

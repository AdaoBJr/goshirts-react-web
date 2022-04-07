import React from 'react';
import defaultClasses from './createAccount.module.css';
import { InputText, useStyle } from '@goshirts-react/lib';

const CreateAccount = (props) => {
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>CreateAccount</h1>
        <InputText
          label="Nome"
          name="firstname"
          placeholder="Insira seu nome"
          classes={{ input: classes.createAccountInput }}
        />
        <InputText
          label="Sobrenome"
          name="lastname"
          placeholder="Insira seu sobrenome"
          classes={{ input: classes.createAccountInput }}
        />
      </div>
    </div>
  );
};

export default CreateAccount;

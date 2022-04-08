import React from 'react';
import defaultClasses from './createAccount.module.css';
import { InputText, Dropdown, useStyle } from '@goshirts-react/lib';

const items = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 },
];

const CreateAccount = (props) => {
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Cadastrar</h1>
        <InputText id="firstname" name="firstname" label="Nome*" autoComplete="off" />
        <InputText id="lastname" name="lastname" label="Sobrenome*" autoComplete="off" />
        <Dropdown label="Gênero*" items={items} />
      </div>
    </div>
  );
};

export default CreateAccount;

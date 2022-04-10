import React from 'react';
import { Visibility } from '@material-ui/icons';

import defaultClasses from './createAccount.module.css';
import {
  InputText,
  Dropdown,
  useStyle,
  Button,
  Icon,
  Label,
  Form,
} from '@goshirts-react/lib';

import { useCreateAccount } from '../../services/talons';

const gender = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 },
];

const country = [
  { key: 1, label: 'Brasil', value: 'Brasil' },
  { key: 2, label: 'Chile', value: 'Chile' },
  { key: 3, label: 'Espanha', value: 'Espanha' },
  { key: 4, label: 'Estados Unidos', value: 'Estados Unidos' },
  { key: 5, label: 'Inglaterra', value: 'Inglaterra' },
];

const CreateAccount = (props) => {
  const classes = useStyle(defaultClasses, props.classes);

  const { handleChange, handleSubmit, onValueChange, inputData } = useCreateAccount();

  console.log(inputData);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Cadastrar</h1>
        <Form onSubmit={handleSubmit} classes={{ form: classes.form }}>
          <InputText
            id="firstname"
            type="text"
            name="firstname"
            label="Nome*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <InputText
            id="lastname"
            type="text"
            name="lastname"
            label="Sobrenome*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <div className={classes.genderBirth}>
            <Dropdown
              id="gender"
              label="Gênero*"
              items={gender}
              onValueChange={onValueChange}
            />
            <InputText
              id="birthOfDate"
              type="text"
              name="birthOfDate"
              label="Data de Nascimento*"
              autoComplete="off"
              onBlur={handleChange}
            />
          </div>
          <Dropdown
            id="country"
            label="País*"
            items={country}
            onValueChange={onValueChange}
            classes={{
              items: classes.dropCountryItems,
              itemsActive: classes.dropCountryItemsActive,
            }}
          />
          <div className={classes.cpfPhone}>
            <InputText
              id="CPF"
              type="text"
              name="CPF"
              label="CPF*"
              autoComplete="off"
              onBlur={handleChange}
            />
            <InputText
              id="phone"
              type="text"
              name="phone"
              label="Telefone Celular*"
              autoComplete="off"
              onBlur={handleChange}
            />
          </div>
          <InputText
            id="email"
            type="e-mail"
            name="email"
            label="E-mail*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <InputText
            id="newsletter"
            type="checkbox"
            name="newsletter"
            label="Quero receber a newsletter"
            autoComplete="off"
            classes={{
              root: classes.checkNewsletter,
              label: classes.checkNewsletterLabel,
              input: classes.checkNewsletterInput,
              textVisible: classes.checkNewsletterTextVisible,
              textInvisible: classes.checkNewsletterTextInvisible,
            }}
            onChange={handleChange}
          />
          <div className={classes.passwordContainer}>
            <Label id="password" label="Senha*" />
            <div className={classes.passwordContent}>
              <InputText
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                classes={{ root: classes.rootPassword, input: classes.inputPassword }}
                onBlur={handleChange}
              />
              <span className={classes.passwordIcon}>
                <Icon icon={Visibility} />
              </span>
            </div>
          </div>
          <InputText
            id="confirm_password"
            type="password"
            name="confirm_password"
            label="Confirme senha*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <Button type="submit" id="register" classes={{ button: classes.buttonSubmit }}>
            Cadastre-se
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAccount;

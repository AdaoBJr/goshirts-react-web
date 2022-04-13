import React from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import defaultClasses from './signIn.module.css';
import { InputText, useStyle, Button, Icon, Label, Form } from '@goshirts-react/lib';

import { useSignIn } from '../../services/talons';

const SignIn = props => {
  const classes = useStyle(defaultClasses, props.classes);

  const { handleChange, handleSubmit, handleClickPwd, activePwdIcon } = useSignIn();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Entrar</h1>
        <Form onSubmit={handleSubmit} classes={{ form: classes.form }}>
          <InputText
            id="email"
            type="text"
            name="email"
            label="E-mail*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <div className={classes.passwordContainer}>
            <Label id="password" label="Senha*" />
            <div className={classes.passwordContent}>
              <InputText
                id="password"
                type={activePwdIcon.password ? 'text' : 'password'}
                name="password"
                autoComplete="off"
                classes={{ root: classes.rootPassword, input: classes.inputPassword }}
                onBlur={handleChange}
              />
              <div className={classes.passwordIcon}>
                <Icon
                  id="password"
                  onClick={handleClickPwd}
                  icon={activePwdIcon.password ? FiEyeOff : FiEye}
                  size={28}
                  classes={{ icon: classes.iconPassword }}
                />
              </div>
            </div>
          </div>
          <Link className={classes.forgotPassword} to="/create-account">
            Esqueceu sua senha? Clique aqui.
          </Link>
          <Button type="submit" id="login" classes={{ button: classes.buttonSubmit }}>
            Entrar
          </Button>
          <Button
            type="button"
            id="register"
            classes={{ button: classes.buttonRegister }}
          >
            Cadastre-se
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;

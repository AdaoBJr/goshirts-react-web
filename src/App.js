import { Button, mergeClasses } from '@goshirts-react/lib';
import defaultClasses from './App.module.css';

const { useStyles } = mergeClasses();

const App = (props) => {
  const classes = useStyles(defaultClasses, props.classes);

  return <Button classes={{ default: classes.buttonBuy }}>CLICK AQUI</Button>;
};

export default App;

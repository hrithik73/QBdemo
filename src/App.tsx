import * as QB from 'quickblox/quickblox';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';
import {
  DefaultTheme,
  QuickBloxUIKitDesktopLayout,
} from 'quickblox-react-ui-kit';

class CustomTheme extends DefaultTheme {
  divider = () => 'var(--divider)';
  mainText = () => '#FFFFFF';
  fontFamily = () => 'Roboto';
}

function App() {
  const changeTheme = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const loginHandler = () => {
    QB.createSession(function (error, result) {
      console.log('Session Successfully', result);
      console.log('Session error', error);

      const params = { login: 'hrithik73', password: 'zxcv@1234' };

      QB.login(params, function (error, result) {
        console.log('Login Successfully', result);
        console.log('Login error', error);
      });
    });
  };

  useEffect(() => {
    const APPLICATION_ID = 99744;
    const AUTH_KEY = 'YEXy7Y6TpLKpdps';
    const AUTH_SECRET = 'whnC5eWffPxzg8u';
    const ACCOUNT_KEY = '_sAK7MuuZMxTZHmFeGva';
    const CONFIG = { debug: true };

    QB.init(APPLICATION_ID, AUTH_KEY, AUTH_SECRET, ACCOUNT_KEY, CONFIG);
  }, []);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={loginHandler}>Login</button>
      </div>
      <button onClick={changeTheme}>Change Theme</button>

      <QuickBloxUIKitDesktopLayout
        theme={new CustomTheme()}
      ></QuickBloxUIKitDesktopLayout>
    </>
  );
}

export default App;

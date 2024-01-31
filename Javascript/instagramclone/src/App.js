import { useEffect, useState } from 'react';
import { db } from './services/firebaseConnection';

import './App.css'

export default function App(){

  const [user, setUser] = useState(null);

  useEffect(() => {

  }, [])

  return(
    <div>
      <div className='header'>
        <div className='center'>
          <div className='header__logo'>
            <a href=""><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" /></a>
          </div>

          {
            (user) ? 
            <div>Teste</div>
            : 
            <div className='header__loginForm'>
              <form>
                <input type='text' placeholder='Login'/>
                <input type='password' placeholder='Senha'/>
                <input type='submit' name='acao' value="logar"/>
              </form>
          </div>
          }

          
        </div>
        </div>
    </div>
  )
}
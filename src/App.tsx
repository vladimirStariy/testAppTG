import React from 'react';
import logo from './logo.svg';
import './App.css';
import TelegramLoginButton from './TelegramButton';

function App() {
  const name = 'cool_notificator_bot'
  
  const handleBot = (user: any) => {
    console.log(user);
  };

  return (
    <main>
      <TelegramLoginButton
        botName={name}
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={3} // 0 - 20
        usePic={false} // true | false
        dataOnauth={handleBot}
      />
    </main>
  );
}

export default App;

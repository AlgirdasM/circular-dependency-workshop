import React from 'react';
import './App.css';
import { getUserConfig } from "./util";
import { AppConfigs } from "./AppConfig";
import {Paragraph} from "./Paragraph";

export type AppConfig = {
  data: Record<string, string>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppConfigs />
        <Paragraph>User Id = {getUserConfig()?.id}</Paragraph>
      </header>
    </div>
  );
}

export default App;

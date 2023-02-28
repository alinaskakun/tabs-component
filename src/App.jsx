import Tabs from './components/Tabs/Tabs';

import { TABS } from './constants/data';

import './App.css';

function App() {
  return (
      <>
          <nav>
            <a href="#maincontent" className="skipLink">Skip to main content</a>
          </nav>
          <a href="https://www.google.com.ua/">Not main content</a>
          <main>
              <button id="maincontent" tabIndex="-1" />
              <Tabs data={TABS}/>
          </main>
      </>
  );
}

export default App;

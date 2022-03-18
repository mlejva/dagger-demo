import './App.css';

import { useDevbook } from '@devbookhq/sdk';
import {
  Terminal,
  Filesystem,
} from '@devbookhq/ui';

const devbookOptions = {
  env: 'dagger',
  config: {
    domain: 'dev.usedevbook.com',
  },
}

function App() {
  const devbook = useDevbook(devbookOptions)

  return (
    <div className="App">
      <div className="terminal">
        <Terminal
          title="Dagger"
          devbook={devbook}
          height="500px"
        />
      </div>
      <Filesystem
        initialFilepath="/"
        devbook={devbook}
        height="500px"
      />
    </div>
  );
}

export default App;

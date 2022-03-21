import { useRef } from 'react';
import './App.css';

import {
  useDevbook,
  DevbookStatus,
} from '@devbookhq/sdk';
import {
  Terminal,
  Filesystem,
  TerminalHandler,
  Button,
} from '@devbookhq/ui';

const devbookOptions = {
  env: 'dagger',
  config: {
    domain: 'dev.usedevbook.com',
  },
}

function App() {
  const devbook = useDevbook(devbookOptions)
  const terminalRef = useRef<TerminalHandler>(null)


  function goTodoapp() {
    if (devbook.status !== DevbookStatus.Connected) return
    if (!terminalRef.current) return

    terminalRef.current.handleInput('cd /dagger/pkg/universe.dagger.io/examples/todoapp')
    terminalRef.current.focus()
  }

  function build() {
    if (devbook.status !== DevbookStatus.Connected) return
    if (!terminalRef.current) return

    terminalRef.current.handleInput('dagger do build')
    terminalRef.current.focus()
  }

  return (
    <div className="App">
      <h3 className="title">Dagger</h3>
      <div className="buttons">
        <Button
          onClick={goTodoapp}
          text="Go to todoapp"
        />
        <Button
          onClick={build}
          text="Build"
        />
      </div>
      <div className="terminal">
        <Terminal
          ref={terminalRef}
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

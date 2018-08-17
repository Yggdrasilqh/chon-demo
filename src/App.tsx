import * as React from 'react';
import { observer } from 'mobx-react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import compMapping from './config/compMapping'

library.add(faStroopwafel)
@observer
class App extends React.Component {

  render() {
    const { Button } = compMapping;
    return (
      <div className="App">
        <Button fontSize={13} fontColor={'123'}>
        button
        </Button>
      </div>
    );
  }
}

export default App;

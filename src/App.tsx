import * as React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import Button from "./component/button";
import { ButtonLayoutProps } from "./component/button/button";
import { Props } from '@fortawesome/react-fontawesome';
import style from 'styled-components';

library.add(faStroopwafel);
@observer
class App extends React.Component {

  @observable
  buttonLoading = false;

  @action
  changeLoading = () => {
    this.buttonLoading = !this.buttonLoading;
  }

  render() {
    const buttonLayout = ({ Icon, Text }: ButtonLayoutProps) => {
      return (
        <><Icon icon='square' test={"1234"} /><Text style={{fontSize: 300}} /></>
      );
    };

    return (
      <div className="App">
        <Button onClick={this.changeLoading} loading={this.buttonLoading}>this is a Button</Button>
      </div>
    );
  }
}

export default App;

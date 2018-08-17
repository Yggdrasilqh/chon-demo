import * as React from "react";
import style from 'styled-components';
import colorScheme from '../color/ColorScheme';
import './style.less'
import _Icon from "./Icon";
import _Text from './text'


interface ButtonProps {
  fontSize?: string | number;
  fontColor?: string;
}

export default class  Button extends React.Component<ButtonProps> {
    
  Icon = _Icon;
  Text = _Text;
  ButtonWrapper = style.button`
    background: ${colorScheme.backgroundColor.hex};
    color: ${colorScheme.textColor.hex};
    padding: 6px 12px;
  `

  render() {
    const { Icon, Text, ButtonWrapper } = this;
    const { children } = this.props;

    return (
      <div>
        <ButtonWrapper>
          <Icon icon="stroopwafel" />
          <Text>{children}</Text>
        </ButtonWrapper>
      </div>
    )
  }
}

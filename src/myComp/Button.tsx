import * as React from 'react';
import style from 'styled-components';
import _Button from '../component/button';
import Text from '../component/button/text';

export default class Button extends _Button {
  render() {
    const { Icon, Text, ButtonWrapper: _ButtonWrapper, props: { children } } = this
    const ButtonWrapper = style(_ButtonWrapper)`
      font-size: 30px
    `
    return (
      <ButtonWrapper>
        <Text>{children}</Text>
        <Icon icon="stroopwafel" />
      </ButtonWrapper>
    )
  }
}

import * as React from 'react';
import { ButtonLayoutProps, ButtonProps } from '../component/button/button';
import { LayoutMapping } from '../component/layout';
import { Component } from 'react';

const buttonLayouts: LayoutMapping<ButtonLayoutProps> = {
  leftIcon: ({ Icon, Text }: ButtonLayoutProps) => {
    return (
      <>
        <Icon />
        <Text />
      </>
    )
  }
}

export class ButtonLayoutsClass extends React.Component<ButtonLayoutProps> {
  compose() {
    const { Icon, Text } = this.props
    return (<><Icon /><Text>this is class layout</Text></>)
  }
}

export default buttonLayouts;

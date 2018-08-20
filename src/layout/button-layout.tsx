import * as React from 'react';
import { ButtonLayoutProps } from '../component/button/button';
import { LayoutMapping } from '../component/layout';

const buttonLayouts: LayoutMapping = {
  leftIcon: ({ Icon, Text }: ButtonLayoutProps) => {
    return (
      <>
        <Icon />
        <Text />
      </>
    )
  }
}

export default buttonLayouts;

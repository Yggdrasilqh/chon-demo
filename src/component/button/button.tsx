import * as React from 'react';
import { CommonProps, LayoutDefine } from '../common/common-props';
import _Text, { TextProps } from './text';
import _Icon, { IconProps } from './icon';
import './styles/index.less'
import { LayoutElement, LayoutMapping } from '../layout';
import { compose } from '../utils/compose-utils';

export interface ButtonLayoutProps {
  Text: LayoutElement<TextProps>;
  Icon: LayoutElement<IconProps>;
}

export interface ButtonProps extends CommonProps<ButtonLayoutProps>{
  loading?: boolean;
}

export default class Button extends React.Component<ButtonProps, any> {

  static Icon = (props: IconProps, children: React.ReactNode[]) => React.createElement(_Icon, props);
  static Text = (props: TextProps, children: React.ReactNode[]) => React.createElement(_Text, props);

  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  defaultLayout: LayoutMapping<ButtonLayoutProps> = {
    default: ({ Icon, Text }: ButtonLayoutProps) => {
      return (
        <>
          <Icon />
          <Text>this is default button</Text>
        </>
      )
    },
    leftIcon: ({ Icon, Text }: ButtonLayoutProps) => {
      return (
        <>
          <Text>this is default button two</Text>
          <Icon />
        </>
      )
    },
  }

  render() {
    let { props: {layout, children, loading} } = this;
    let { Icon, Text } = Button;
    const component = compose<ButtonLayoutProps>({Icon ,Text}, this.defaultLayout, layout)
    console.log();
    
    return (
      <button className='mf-button' onClick={this.handleClick}>{component}</button>
    );
  }
};

import * as React from 'react';
import { CommonProps } from "../common/common-props";
import _Text, { TextProps } from './text';
import _Icon, { IconProps } from './icon';
import { switchLayout } from '../utils/compose-utils';
import './styles/index.less'
import style from 'styled-components';
import { HTMLAttributes } from 'react';
import { LayoutElement } from '../layout';

export interface ButtonLayoutProps {
  Text: LayoutElement<TextProps>;
  Icon: LayoutElement<IconProps>;
}

export interface ButtonProps extends CommonProps<ButtonLayoutProps> {
  loading?: boolean;
}

export default class Button extends React.Component<ButtonProps, any> {

  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  compose(): React.ReactChild {
    let { layout, children, loading } = this.props;
    const Icon = (props: IconProps) => React.createElement(_Icon, props);
    const Text = (props: TextProps) => React.createElement(_Text, props, loading ? 'loading...' : children);
    if (!layout) {
      layout = () => <><Icon /><Text /></>
    }
    return switchLayout(layout)({ Icon, Text });
  }

  render() {
    const { loading } = this.props;
    return (
      <button className='mf-button' onClick={this.handleClick}>{this.compose()}</button>
    );
  }
};

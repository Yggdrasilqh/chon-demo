import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from 'styled-components';
import { CommonProps } from '../common/common-props';


export interface TextProps extends CommonProps<Object>{

}
export default class Text extends React.Component<TextProps>{

  render() {
    const { children } = this.props;
    return (
      <span>{children}</span>
    )
  }
}

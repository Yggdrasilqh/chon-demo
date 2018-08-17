import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as _FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome'
import style from 'styled-components';


export default class Icon extends React.Component<Props>{

  render() {
    const FontAwesomeIcon = style(_FontAwesomeIcon)`
      margin: 0px 4px
    `
    return (
      <FontAwesomeIcon {...this.props} />
    )
  }
}

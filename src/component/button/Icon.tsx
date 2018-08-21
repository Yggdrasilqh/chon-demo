import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommonProps } from "../common/common-props";


export interface IconProps extends CommonProps<Object> { 
  icon?: string;
  test?: string;
}

export default class Icon extends React.Component<IconProps> {
  render() {
    console.log(this.props.test);
    return <FontAwesomeIcon {...Object.assign({ icon: "stroopwafel" }, this.props as any)} />;
  }
};

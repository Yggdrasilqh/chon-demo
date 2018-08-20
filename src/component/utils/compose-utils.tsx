import { LayoutDefine } from "../common/common-props";
import buttonLayouts from "src/layout/button-layout";

export function switchLayout<T>(layout: LayoutDefine<T> | string): LayoutDefine<T> {
  if (typeof layout === 'string') {
    if (!buttonLayouts[layout]) throw new Error(`can not find layout '${layout}', please check layout file`)
    return buttonLayouts[layout];
  } else {
    return layout;
  }
}

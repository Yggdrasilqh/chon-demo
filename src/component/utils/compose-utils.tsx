import { LayoutDefine } from "../common/common-props";
import buttonLayouts from "src/layout/button-layout";
import { LayoutMapping } from '../layout';

export function compose<T>(layoutProps: T, defaultLayout: LayoutMapping<T>, layout?: LayoutDefine<T> | string): React.ReactChild {
  if (!layout) { return defaultLayout[Object.keys(defaultLayout)[0]](layoutProps) }
  if (typeof layout === 'string') {
    if (!buttonLayouts[layout]) {
      if(!defaultLayout[layout]) {
        throw new Error(`can not find layout '${layout}', please check layout file`)
      }
      return defaultLayout[layout](layoutProps);
    }
    return buttonLayouts[layout](layoutProps);
  } else {
    return layout(layoutProps);
  }
}

import { LayoutDefine } from "./common/common-props";

export type LayoutMapping<T> = {[p: string] : any}

export type LayoutElement<T> = (props: T, children?: React.ReactNode[]) => React.ReactElement<T>

// export abstract class Layout<T> {
//   compose(keyof T): any;
// }
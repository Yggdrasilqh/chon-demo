import * as React from "react";

export type LayoutDefine<T> = (p: T) => React.ReactChild;
// Global
export interface CommonProps<T> extends React.HTMLAttributes<HTMLButtonElement>{
  layout?: LayoutDefine<T> | string;
  background?: string;
  align?: 'start' | 'center' | 'end';
}

export type LayoutMapping = {[p: string] : any}

export type LayoutElement<T> = (props: T) => React.ReactElement<T>
# 使用

## 自定义组件内部布局

- 使用框架内部自带布局方式

```jsx
<ChonButton />
<ChonButton layout='withIcon' />
<ChonButton layout='icon' />
<ChonButton layout='rightIcon' />
```

- 定义布局函数并套用在组建上

```jsx
const customButtonLayout = ({ Icon, Text }) => {
  return <><Icon /><Text /><Icon /></>
}

<ChonButton layout={customButtonLayout} />
```

- 定义布局并注册到全局

```jsx
// `layouts.jsx` 文件

// 函数方式（用于简单的布局）
const globalButtonLayout = ({ Icon, Text }) => {
  return <><Icon /><Text /></>
}

// 类方式（用于复杂的布局）
class AnotherButtonLayout extends ChonButtonLayout {
  compose({ Icon, Text }) {
    return <><Icon /><Text /></>
  }
}

const layouts = {
  first: globalButtonLayout,
  second: AnotherButtonLayout,
}

export default layouts;


// 使用自定义全局布局

<ChonButton layout='first' />
<ChonButton layout='second' />
```
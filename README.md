# 使用文档

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
  return <div><Icon /><Text /><Icon /><div/>
}

<ChonButton layout={customButtonLayout} />
```

- 定义布局并注册到全局

```jsx
// `layouts.jsx` 配置文件

// 函数方式（用于简单的布局）
const globalButtonLayout = ({ Icon, Text }) => {
  return <div><Icon /><Text /></div>
}

// 类方式（用于复杂的布局）
class AnotherButtonLayout extends ChonButtonLayout {
  compose({ Icon, Text }) {
    return <div><Icon /><Text /></div>
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

## 使用主题

- 静态主题

```js
// `themes.js` 配置文件
export default {
  default: {
    primaryColor: '#EEEEEE',
    accentColor: '#FFFFFF',
    baseBorderRadius: '3px',
    basePadding: '10px',
    baseFontSize: '0.8rem',
  }
}
```

- 动态主题

```js
// `theme.js` 配置文件
export default {
  default: {
    primaryColor: '#000'，
    accentColor: '#666',
    baseBorderRadius: '5px',
    basePadding: '10px',
    baseFontSize: '0.8rem',
  },
  blue: {
    primaryColor: '#4285F4',
    accentColor: '#FBBC05',
  },
  green: {
    primaryColor: '#34A853',
    accentColor: '#EA4335',
  }
}

// 在运行时动态切换主题

Chon.activeTheme('blue');
Chon.activeTheme('blue');
```

- 自定义取色方案

```js
class CustomColorScheme extends ChonColorScheme {
  
  // 父类中的构造函数
  // constructor(primaryColor, accentColor) {
  //   this.primaryColor = primaryColor;
  //   this.accentColor = accentColor;
  // }

  // 自定义一些全局颜色获取方法
  getDarkenPrimaryColor() {
    // darken() 为用户自定义的颜色计算函数
    return darken(this.primaryColor);
  }
  
  getLightenPrimaryColor() {
    // lighten() 为用户自定义颜色计算函数
    return lighten(this.primaryColor);
  }

  getBackgroundColor() {
    return '#FFF';
  }

  getTextColor() {
    return '#000';
  }

  getTitleColor() {
    return this.primaryColor;
  }

  // ...

  // 自定义组件相关颜色获取方法
  getButtonBackground() {
    return this.primaryColor;
  }

  getButtonTextColor() {
    return '#FFF';
  }

  // ...
}

// 激活颜色方案
Chon.active(CustomColorScheme);
```



## 实现可布局组件

```js
// 组件属性
export interface ButtonProps extends CommonProps<ButtonLayoutProps> {
  loading?: boolean;
}

// 布局（子组件）申明
export interface ButtonLayoutProps {
  Text: LayoutElement<TextProps>;
  Icon: LayoutElement<IconProps>;
}

export default class Button extends React.Component<ButtonProps, any> {

  // 子组件实现
  static Icon = (props: IconProps) => React.createElement(_Icon, props);
  static Text = (props: TextProps) => React.createElement(_Text, props);

  // 定义基本layout
  defaultLayout: LayoutMapping<ButtonLayoutProps> = {
    one: ({ Icon, Text }: ButtonLayoutProps) => {
      return (
        <>
          <Icon />
          <Text>this is default button</Text>
        </>
      )
    },
    tow: ({ Icon, Text }: ButtonLayoutProps) => {
      return (
        <>
          <Text>this is a confused button</Text>
          <Icon />
        </>
      )
    },
  }

  render() {
    let { props: {layout, loading}, compose } = this;
    let { Icon, Text } = Button;
    // 组合组件
    const product = compose<ButtonLayoutProps>({Icon ,Text}, layout, this.defaultLayout)
    
    return (
      <button className='mf-button' onClick={this.handleClick}>{product}</button>
    );
  }
};

```
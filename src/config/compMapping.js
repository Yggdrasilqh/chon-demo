import MyButton from '../myComp/Button'
import defaultMapping from '../component/defaultMapping'

const customMapping = {
  Button: MyButton,
}

export default Object.assign(defaultMapping, customMapping)

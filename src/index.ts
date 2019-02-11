import { PluginObj } from '@babel/core'
import jsxSyntax from '@babel/plugin-syntax-jsx'
// import blog from 'babel-log'

interface State {
  opts: {
    prefix?: string
  }
}

export default (): PluginObj<State> => {
  return {
    inherits: jsxSyntax,
    name: 'react-remove-classname',
    visitor: {
      Program(path, state) {
        const prefix = state.opts.prefix || 'test-'
        path.traverse({
          JSXAttribute(jsxPath) {
            // @ts-ignore
            if (jsxPath.get('name.name').node === 'className') {
              // @ts-ignore
              const valueNode = jsxPath.get('value.value').node

              if (typeof valueNode !== 'string') {
                return
              }

              const classNames = valueNode
                .split(' ')
                .filter(str => !str.startsWith(prefix))

              // @ts-ignore
              jsxPath.node.value.value = classNames.join(' ')
            }
          },
        })
      },
    },
  }
}

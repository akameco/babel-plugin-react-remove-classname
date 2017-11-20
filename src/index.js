// @flow weak
import jsxSyntax from 'babel-plugin-syntax-jsx'
// import blog from 'babel-log'

export default () => {
  return {
    inherits: jsxSyntax,
    name: 'react-remove-classname',
    visitor: {
      Program(path, state) {
        const prefix = state.opts.prefix || 'test-'
        path.traverse({
          JSXAttribute(jsxPath) {
            if (jsxPath.get('name.name').node === 'className') {
              const valueNode = jsxPath.get('value.value').node

              const classNames = valueNode
                .split(' ')
                .filter(str => !str.startsWith(prefix))

              jsxPath.node.value.value = classNames.join(' ')
            }
          },
        })
      },
    },
  }
}

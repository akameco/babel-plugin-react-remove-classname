// @flow
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  title: 'default',
  plugin,
  snapshot: true,
  tests: [
    {
      title: 'remove test-hello',
      code: `
  const hello = () => (
    <div className="test-hello"></div>
  )
`,
    },
    {
      title: 'remove test-other',
      code: `
  const hello = () => (
    <div className="test-other"></div>
  )
`,
    },
    {
      title: 'remove some className',
      code: `
  const hello = () => (
    <div className="test-a hello test-b"></div>
  )
`,
    },
    {
      title: 'no remove',
      code: `
  const hello = () => (
    <div data-test="test-hello"></div>
  )
`,
    },
  ],
})

pluginTester({
  title: 'with option',
  plugin,
  snapshot: true,
  pluginOptions: { prefix: 'babel-' },
  tests: [
    {
      title: 'with prefix',
      code: `
  const hello = () => (
    <div className="babel-a hello test-b"></div>
  )
`,
    },
  ],
})

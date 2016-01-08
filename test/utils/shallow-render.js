import React from 'react/dist/react-with-addons';

let shallowRender = (component, props, ...children) => {

  const TestUtils = React.addons.TestUtils;
  const ShallowRenderer = TestUtils.createRenderer();

  ShallowRenderer.render(React.createElement(component, props, children));
  return ShallowRenderer.getRenderOutput();
}

export { shallowRender };

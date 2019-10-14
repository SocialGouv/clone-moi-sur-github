import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Ribbon from "../src";

test("should render Ribbon", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Ribbon url="https://github.com/org/repo" />);
  expect(result).toMatchSnapshot();
});

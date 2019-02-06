import React from "react";
import renderer from "react-test-renderer";
import Example from "./Example";

describe("Example", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<Example label="Email" placeholder="name@example.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
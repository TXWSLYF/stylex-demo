import * as stylex from "@stylexjs/stylex";
import { createRoot } from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import React from "react";

console.log(stylex);

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: "rgb(60,60,60)",
  },
  highlighted: {
    color: "red",
  },
});

console.log(styles);

function MyComponent() {
  return (
    <div {...stylex.props(styles.base, styles.highlighted)}>Hello World</div>
  );
}

console.log(MyComponent);

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<MyComponent />);

console.log("webpack starterkit");

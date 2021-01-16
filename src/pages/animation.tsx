import React, { ReactElement } from "react";
import Nav from "@components/Nav";
import { Container } from "react-bootstrap";
import { Controls, SplitChars, PlayState, Timeline, Tween } from "react-gsap";

const TargetWithNames = React.forwardRef((props, targets: any) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3 ref={(el) => targets.set("div1", el)}>this</h3>
      <SplitChars
        ref={(div: ReactElement) => targets.set("div2", [div])}
        wrapper={<h3 style={{ display: "inline-block" }} />}
      >
        hello
      </SplitChars>
      <h3 ref={(div) => targets.set("div3", div)}>bro</h3>
    </div>
  );
});

function Animation() {
  return <></>;
}

export default Animation;

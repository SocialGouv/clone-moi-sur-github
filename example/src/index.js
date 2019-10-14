import React, { Fragment } from "react";
import { hydrate } from "react-dom";

import Ribbon from "../../src";

const Demo = () => (
  <div>
    <h3>Demo clone-moi-sur-github</h3>
    <Ribbon url="https://github.com/SocialGouv/clone-moi-sur-github" />
  </div>
);

hydrate(<Demo />, document.getElementById("root"));

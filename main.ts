/**
 * 程序执行入口
 */

import { createElement } from "react";
import { render } from "react-dom";
import { App } from "./src";

const app = createElement(App);
const target = document.getElementById("root");
render(app, target);

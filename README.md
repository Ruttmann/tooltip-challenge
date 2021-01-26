# Convincely Tooltip Challenge

<p align="center">
  <a href="https://tooltip-challenge.netlify.app/" target="_blank">
    <img alt="Demo on Netlify" src="docs/demo-netlify.png">
  </a>
</p>

## Project overview

- This solution was implemented using Svelte Actions. A tooltip can be attached to any HTML element;
- Legacy browser support: IE11+, iOS 10+;
- Linting with **Svelte for VSCode** extension (no need to configure eslint, prettier, etc.);
- Basic accessibility features.
- Fixed parent element boundary padding fixed in 20px;
- Adherent to those [specs](https://github.com/shirotech/code-test).

## How to place a tooltip

- Import the tooltip action:

```
  import { tooltip } from "./actions/Tooltip";
```

- Define the tooltip text with a `title` attribute in the desired element;
- Available tooltip positioning: `TOP` and `BOTTOM`;
- Apply the `use:tooltip` directive to the base element. A positioning prop can be passed to it with the format `{ position: "TOP" }` or `{ position: "BOTTOM" }`. If no prop is passed, the fallback is `TOP`.

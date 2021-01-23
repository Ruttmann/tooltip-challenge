# code-test

> **Please do not fork this repo for your solution**

## Build a Tooltip component (React, Preact, Vue.js or Svelte)

- Please avoid any boilerplates or template starters/generators etc.
- It should be re-usable as much as possible, i.e. a tooltip can be attached to anything
- Keep the code clean, concise, elegant, robust and efficient as possible
- Add animations and/or transitions when the tooltip appears and disappear
- Make use of advanced sass/scss features

### Bonus points

- Minimum browser support, IE11+, iOS 10+
- Would be good to include some linting tools like eslint and stylelint etc.
- Please also take accessibility into consideration if time allows it
- No tests are required due to the timing constraint, but feel free to add some

### Specs:

- On a client without a mouse, the tooltip should be activated on tap only, it can be deactivated on scroll or tapping outside of the tooltip
- On a client with a mouse, the tooltip should be activated onMouseOver and deactivated onMouseLeave, also it should deactivate on scroll and resize
- Should support detecting the bounds, e.g. if the tooltip is displayed on left, the tail should correspond to it, see example below. A good idea to demo it displaying in corners and top, right, bottom, left bounds.
- It should also auto detect and place the tooltip on different directions depending on the content if it fits. E.g. if there is not enough space at the top of the page, tooltip should appear below the content.

![tooltip](https://user-images.githubusercontent.com/1149825/69400248-1a196d80-0d45-11ea-8231-9a462fe7bb5d.png)

Please note this is to show how it looks like, ideally no more than one tooltip should be displayed at one time.

Hope you find this exercise interesting, please let me know if need any clarification. However, if not mentioned it is open-ended and you are free to interpret at your discretion.

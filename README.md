Insure landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)


### Links

- Live Site URL: [Add live site URL here](https://mojtabamosavi.github.io/loopstudios-landing-page-main.io/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript (hamburger nav)
- BEM Methodology

### What I learned

1. How to reset the outline on interactive elements but not create any accessibility issues.
  What I did before:
  ```button { 
  &:focus{ outline:none}
  &:focus-visible { outline: 2px solid color}
  }
  button {
      &:focus {
    outline: max(1, 0.1em) dashed #000;
    outline-offset: -0.25em;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: max(1, 0.1em) dashed #000;
    outline-offset: -0.25em;
  }
  }
  ```
 The simple difference between these two code snippets are that the second one takes browser support into consideration.
 
 2. The usage of title property which is to add a tooltip to html elements to increase their accessibility to sighted user. In this project i used them in various way for example 
 to make my social icons more accessible.
 
 3. In the previous similar projects I used to struggle with how to center content in neat way but I am qiute pleased how I handled this issue in this project with a help of 
 utility class and modifying its width in relation to viewprt width.
 
 4. How to make a responsive card elements with custom hover states. If you look at card elements available in the bootstrap you see that they're wrapped inside a div but here I
 wrapped the card inside a anchor tag because it needs to be clickable.
 
```html

          <a href="#" class="features__card features__card--night-arcade" aria-label="products" title="products">
            <div class="features__card-overlay" aria-hidden="true" aria-lablel="read more">
              <span>read more</span>

            </div>
            <h3 class="features__card-heading">Night arcade</h3>
          </a>

```

5- How make my code more dyr trough use of mixins. For example the underline for each interactive element in the site comes form mixin withe reduces the make the code more dry.

### Continued development

1- Advancing my knowledge of accessiblity.
2- Deepen my knowledge about the proper usage of BEM 
3- Try out a bit more complex projects which involve other technologies such as react.
4- Get familiar with more advanced features of sass.

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid) - A great and thorogh guide for grid.
- [Example resource 2](https://sass-lang.com/documentation/at-rules/mixin) - Sass documentation to look up thing if you unsure about sass-related topics.






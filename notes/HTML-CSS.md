# HTML and CSS basics

## Common Tags

### Headers

* [heading mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

```html
<h1> Header 1 </h1>
<h1> Header 2 </h2>
<h3> Header 3 </h3>
<h4> Header 4 </h4>
<h5> Header 5 </h5>
<h6> Header 6 </h6>
```

### Paragraphs

* [p mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

```html
<p> Paragraph </p>
```

### Lists

* [ul mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
* [ol mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
* [li mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

```html
<ul>
    <li> This is an un ordered list </li>
</ul>

<ol>
    <li> This is an ordered list </li>
    <li> It has multiple items </li>
</ol>
```

### Images

* [img mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

```html
<img src="..." />
```

Images can be resized by adding a height and or a width property.
```html
<img src="..." height="50px" width="200px" />
```

### Links (anchor tags)

* [a mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

```html
<a href="https://google.com"> Google </a>
```

### Line Breaks

* [br mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

```html
<br />
```

### Horizontal Rules

* [hr mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)

```html
<hr />
```

### Marquee Tags

* [marquee mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee)

```html
<marquee>
    Moving Text
</marquee>
```

### Title Tags

Title tags are used to set the title of a webpage in the browser tab

```html
<title> The Title </title>
```

## CSS

External css can be loaded into an html page with a link tag
```html
<link rel="stylesheet" type="text/css" href="..." />
```
Or embedded directly with a style tag
```html
<style>
    body {
        color: red;
    }
</style>
```

### CSS Properties

* [css mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

```css
body {
   color: red;
   background: #c0c0c0;
   text-decoration: underline;
   border: 1px solid purple;
   font-family: "Comic Sans MS";
   font-size: 18px;
}
```

### Classes

Classes can be used to target specefic html elements

```html
<p class="fancy"> Some Text </p>
<p class="fancy"> More Text </p>
```

And then styled with css

```css
.fancy {
    color: lightblue;
    text-decoration: overline;
}
```

### Hex Colors

* [html color picker](https://htmlcolorcodes.com/)
* [hex colors explained](https://www.mathsisfun.com/hexadecimal-decimal-colors.html)


## Comments
Comments are information left by a programmer, but not processed by a computer. Both html and css have comments, but they have different format.

```html
<!-- HTML comments look like this -->
```

```css
/* css comments look like this */
```

## Anatomy of an HTML Page

```html
<!Doctype html>
<html>
    <head>
        <!-- Information about the website goes here -->
        <title> Website </title>
    </head>
    <body>
        <!-- The content of the website goes here -->
        <h1> Website </h1>
    </body>
</html>
```

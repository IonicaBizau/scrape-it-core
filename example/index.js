"use strict";

const scrapeIt = require("../lib")

// Promise interface
const data = scrapeIt(`
    <h1 class='heading'>Hello World</h1>
    <img src="test.jpg" />
    <p>Lorem ipsum dolor sit amet...</p>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li><i>6</i></li>
    </ul>
`, {
    title: ".heading"
  , desc: "p"
  , avatar: {
        selector: "img"
      , attr: "src"
    }
  , items: {
        listItem: "ul > li"
      , data: {
            content: {
                how: "text"
            }
        }
    }
})

console.log(data)
// { title: 'Hello World',
//   desc: 'Lorem ipsum dolor sit amet...',
//   avatar: 'test.jpg',
//   items:
//    [ { content: '1' },
//      { content: '2' },
//      { content: '3' },
//      { content: '4' },
//      { content: '5' },
//      { content: '6' } ] }

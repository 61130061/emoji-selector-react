# React Emoji Selectors

Simple, ready to use, and customable react emoji selector component for every react project.

<p float="left">
   <img src="doc/light_mode.png" width="300" />
   <img src="doc/dark_mode.png" width="300" /> 
</p>


## 👺 Demo 
Try and custom your emoji selector [here](https://61130061.github.io/react-emoji-selectors/).


## Content
- [Guideline](#-guideline)
   - [Install](#install-)
   - [Usage](#usage-)
- [EmojiSelector Props (Desktop version)](#-emojiselector-props-desktop-version)
   - [onClose](#onclose-default-none)
   - [output](#output-default-none)
   - [closeAfterSelect](#closeafterselect-default-true)
   - [clickOutsideToClose](#clickoutsidetoclose-default-true)
   - [highlihgt](#highlight-default-lightblue)
   - [darkMode](#darkmode-default-false)
   - [backgroundColor](#backgroundcolor-default-none)
   - [cornerRadius](#cornerradius-default-10px)
- [MEmojiSelector Props (Mobile version)](#-memojiselector-props-mobile-version)
   - [onClose](#onclose-default-none-1)
   - [output](#output-default-none-1)
   - [closeAfterSelect](#closeafterselect-default-true-1)
   - [clickOutsideToClose](#clickoutsidetoclose-default-true-1)
   - [highlihgt](#highlight-default-lightblue-1)
   - [darkMode](#darkmode-default-false-1)

## 📒 Guideline 

### Install 💾
```sh
yarn add react-emoji-selectors
```

### Usage 📠
To use `EmojiSelector`, we recommend you to wrap your triggle element and `EmojiSelector` under the same tag as an example below.
This is just a simple example of EmojiSelector.
You can customize it by using component props from [next section](#-emojiselector-props-desktop-version).

```js
import React, { useState } from 'react';
import { EmojiSelector } from 'react-emoji-selectors';

function App () {
   const [output, setOutput] = useState('🦁');
   const [showSelector, setShowSelector] = useState(true);

   return (
      <div className="App">
         <div>

            <div onClick={() => setShowSelector(true)}>
               Click {output}!
            </div>

            {showEmoji &&
               <EmojiSelector 
                  onClose={() => setShowSelector(false)} 
                  output={setOutput} 
               />
            }

         </div>
      </div>
   )
}
```

If you want responsive version for your responsive app, we recommend you to use mobile version `MEmojiSelector` for mobile and tablet screen size. 
Of course, you can use both in one application as well.
Here is the example of mobile version.

```js
{showEmoji &&
   <MEmojiSelector 
      onClose={() => setShowSelector(false)} 
      output={setOutput} 
   />
}
```


## 🐼 EmojiSelector Props (Desktop version)

### onClose (default: none)
Use this attribute as a function to set useState variable to close the emoji selector.
- input `function`
- return nothing

### output (default: none)
Use to get selected emoji from selector.
You can pass function through this attribute as an example below.
- input `function`
- return `string (emoji)`

### closeAfterSelect (default: true)
The emoji selector will close after user select an emoji when this attribute is true otherwise nothing happen.
- input `boolean`

### clickOutsideToClose (default: true)
If this attribute set to true, onClose function will be called when user clicks outside the emoji selector.
- input `boolean`

### highlight (default: 'lightblue')
Change color of highlight color of emoji selector.
- input `string (rgb or hex)`

### darkMode (default: false)
Change to true, if you want it darker.
- input `boolean`

### backgroundColor (default: none)
Change background color of emoji selector container.
- input `string (rgb or hex)`

### cornerRadius (default: '10px')
Change corner radius of the selector.
- input `string`


## 📱 MEmojiSelector Props (Mobile version)

### onClose (default: none)
Use this attribute as a function to set useState variable to close the emoji selector.
- input `function`
- return nothing

### output (default: none)
Use to get selected emoji from selector.
You can pass function through this attribute as an example below.
- input `function`
- return `string (emoji)`

### closeAfterSelect (default: true)
The emoji selector will close after user select an emoji when this attribute is true otherwise nothing happen.
- input `boolean`

### clickOutsideToClose (default: true)
If this attribute set to true, onClose function will be called when user clicks outside the emoji selector.
- input `boolean`

### highlight (default: 'lightblue')
Change color of highlight color of emoji selector.
- input `string (rgb or hex)`

### darkMode (default: false)
Change to true, if you want it darker.
- input `boolean`



## 📝 TodoList
- [x] Demo page
- [ ] Emoji name badge when hover
- [x] Category tab
- [x] Close button
- [ ] Recenly group
- [ ] Better search
- [x] Mobile version
- [x] Light/Dark mode
- [x] Selector position
- [x] README.md guideline

## Contributing
I'm a newbiew developer so feel free to pull requiests or log issues.

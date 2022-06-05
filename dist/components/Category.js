import React from 'react';
import IconPath from '../Icon';

function Category({
  pickerRef,
  scrollRef,
  highlight,
  darkMode
}) {
  const ScrollTo = key => {
    //document.getElementById(key).scrollIntoView();
    console.dir(pickerRef.current.clientWidth);

    if (pickerRef.current.clientWidth < 500) {
      scrollRef.current.scrollTop = document.getElementById(key).offsetTop - 140;
    } else {
      scrollRef.current.scrollTop = document.getElementById(key).offsetTop - 210;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: darkMode ? "emoji-mobile-category emoji-mobile-dark" : "emoji-mobile-category"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Smileys & Emotion'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 106.059 106.06"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.smile
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('People & Body'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20px",
    height: "20px",
    viewBox: "0 0 16 16",
    version: "1.1"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.hand
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Animals & Nature'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512.001 512.001",
    width: "23px",
    height: "23px"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.dog
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Food & Drink'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "23px",
    height: "23px",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.pizza[0]
  }), /*#__PURE__*/React.createElement("path", {
    d: IconPath.pizza[1]
  }), /*#__PURE__*/React.createElement("path", {
    d: IconPath.pizza[2]
  }), /*#__PURE__*/React.createElement("path", {
    d: IconPath.pizza[3]
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Travel & Places'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "23px",
    height: "23px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.globe
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Activities'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 390.044 390.043"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.basketball
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Objects'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    widtd: "20px",
    height: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.light
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Symbols'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22px",
    height: "22px",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.lang
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => ScrollTo('Flags'),
    onMouseEnter: e => e.target.style.color = highlight,
    onMouseLeave: e => e.target.style.color = "rgb(0,0,0,0.4)"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "18px",
    height: "18px",
    x: "0px",
    y: "0px",
    viewBox: "0 0 489 489"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.flag
  }))));
}

export default Category;
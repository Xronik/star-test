(this["webpackJsonpstar-test"]=this["webpackJsonpstar-test"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),u=(n(13),n(2)),i=(n(4),n(0));var o=function(e){var t=e.modes,n=e.setInput,r=Object(c.useRef)(null);return Object(i.jsxs)("div",{className:"input_wrap",children:[Object(i.jsxs)("select",{ref:r,name:"mode",className:"input",children:[Object(i.jsx)("option",{value:"0",children:"Pick mode:"}),Object.entries(t).map((function(e,t){return Object(i.jsx)("option",{value:e[1].field,children:e[0]},t)}))]}),Object(i.jsx)("button",{className:"btn",type:"submit",onClick:function(){return n(Number(r.current.value))},children:"START"})]})};var l=function(e){var t=e.hoverSquares;return Object(i.jsxs)("div",{className:"list",children:[Object(i.jsx)("span",{className:"list_title",children:"Hover squares"}),Object(i.jsx)("div",{className:"list_wrap",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(i.jsxs)("span",{children:[" row:",e[1]," col:",e[2]," "]},t)}))})]})},j=n(8),b=Object(c.createContext)();var d=function(e){var t=e.column,n=e.row,r=e.index,s=Object(c.useState)(!0),a=Object(u.a)(s,2),o=a[0],l=a[1],d=Object(c.useContext)(b),O={backgroundColor:o?"white":"deepskyblue"};return Object(c.useEffect)((function(){l(!0)}),[d.input]),Object(i.jsx)("div",{style:O,className:"cell",onMouseEnter:function(){o?d.setHoverSquares((function(e){return[].concat(Object(j.a)(e),[[r,t,n]])})):d.setHoverSquares((function(e){return e.filter((function(e){return e[0]!==r}))})),l(!o)}})};var O=function(e){var t=e.input,n=Object(c.useState)(0),r=Object(u.a)(n,2),s=r[0],a=r[1],o=Object(c.useRef)(""),l=function(e){return e%t+1};return Object(c.useEffect)((function(){var e;e=t,o.current.style.gridTemplateColumns="repeat(".concat(e,",41px)"),o.current.style.gridTemplateRows="repeat(".concat(e,",41px)"),a(t*t)}),[t]),Object(i.jsx)("div",{className:"field",ref:o,children:Array(s).fill("").map((function(e,n){return Object(i.jsx)(d,{column:(c=n,Math.ceil((c+1)/t)),row:l(n),index:n},n);var c}))})};var f=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(0),a=Object(u.a)(s,2),j=a[0],d=a[1],f=Object(c.useState)([]),p=Object(u.a)(f,2),v=p[0],m=p[1],x={input:j,setHoverSquares:m};return Object(c.useEffect)((function(){fetch("http://demo1030918.mockable.io/").then((function(e){return e.json()})).then((function(e){return r(e)})),m([])}),[j]),Object(i.jsx)(b.Provider,{value:x,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsxs)("div",{className:"main_wrap",children:[Object(i.jsx)(o,{setInput:d,modes:n}),Object(i.jsx)(O,{input:j})]}),Object(i.jsx)(l,{className:"list",hoverSquares:v})]})})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.d8229444.chunk.js.map
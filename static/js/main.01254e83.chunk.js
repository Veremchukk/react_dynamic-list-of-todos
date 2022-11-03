(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(4),r=c(2),l=c(3),i=c.n(l),o=c(1),d=(c(13),c(14),c(6)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,s=e.selectTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:n&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!n},{"has-text-success":n}),children:a})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id},{"fa-eye":void 0===c})})})})})]},t)}))})]})},h=function(e){var t=e.query,c=e.setQuery,s=e.filterType,a=e.setFilterType;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x,f=function(e){return O("/users/".concat(e))},p=function(e){var t=e.todo,c=e.setSelectedTodo,s=t.id,a=t.title,l=t.userId,d=t.completed,j=Object(o.useState)(void 0),b=Object(r.a)(j,2),h=b[0],O=b[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(l);case 3:t=e.sent,O(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error on loading user");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),void 0===h?Object(u.jsx)(m,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(void 0)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[d?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(h.email),children:h.name})]})]})]})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(x||(x={}));var v=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),l=Object(r.a)(a,2),d=l[0],j=l[1],f=Object(o.useState)(void 0),v=Object(r.a)(f,2),N=v[0],y=v[1],g=Object(o.useState)(""),T=Object(r.a)(g,2),w=T[0],k=T[1],E=Object(o.useState)(x.ALL),C=Object(r.a)(E,2),S=C[0],L=C[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/todos");case 3:t=e.sent,s(t),j(!0),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error on loading todos");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{query:w,setQuery:k,filterType:S,setFilterType:L})}),Object(u.jsx)("div",{className:"block",children:d?Object(u.jsx)(b,{todos:c.filter((function(e){var t=e.title.toLowerCase().includes(w.toLowerCase());switch(S){case x.ACTIVE:return!e.completed&&t;case x.COMPLETED:return e.completed&&t;default:return t}})),selectedTodo:N,selectTodo:y}):Object(u.jsx)(m,{})})]})})}),N&&Object(u.jsx)(p,{todo:N,setSelectedTodo:y})]})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.01254e83.chunk.js.map
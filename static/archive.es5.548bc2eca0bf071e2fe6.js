(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{257:function(e,t,r){"use strict";r.r(t);r(22);var n=r(1),i=r(2),c=r(362),s=r(246),a=r(73),o=r(0);var l={thin:"58rem",small:"80rem",medium:"100rem"},d={name:"1r5gb7q",styles:"display:inline-block"},h=Object(n.styled)("div",{target:"euzzpev5"})("font-size:1em;font-weight:600;margin:0 auto;line-height:30px;width:calc(100% - 4rem);max-width:",(function(e){return l[e.size]||l.medium}),";@media (min-width: 700px){display:flex;align-items:center;justify-content:space-between;width:calc(100% - 8rem);font-size:1.3em;font-weight:700;}"),m=Object(n.styled)("ul",{target:"euzzpev4"})({name:"1c2hn16",styles:"list-style:none;margin:0 2rem"}),u=Object(n.styled)("li",{target:"euzzpev3"})({name:"5ths8r",styles:"display:inline-block;margin:0;&:not(:last-of-type){margin-right:2rem;}"}),j=Object(n.styled)("div",{target:"euzzpev2"})({name:"1r5gb7q",styles:"display:inline-block"}),b=Object(n.styled)("span",{target:"euzzpev1"})({name:"vlp44u",styles:'@media (min-width: 700px){&:after{content:" Posts";}}'}),p=Object(n.styled)(a.a,{target:"euzzpev0"})({name:"9x8bsw",styles:"text-decoration:none;&:hover{text-decoration:underline;}"}),x=Object(n.connect)((function(e){var t=e.state,r=e.actions,n=e.libraries,c=t.source.get(t.router.link),s=c.route,a=c.query,l=c.totalPages,x=c.next,O=c.previous,g=c.page,f=function(e){return n.source.stringify({route:s,query:a,page:e})},y=function(e,t){for(var r=[],n=Math.max(2,t-1);n<=Math.min(e-1,t+1);n++)r.push(n);return t-1>2&&r.unshift("..."),t+1<e-1&&r.push("..."),r.unshift(1),r.push(e),r}(l,g);return Object(i.useEffect)((function(){x&&r.source.fetch(x)}),[]),Object(o.jsxs)(h,{children:[Object(o.jsx)(j,{children:O&&Object(o.jsxs)(p,{link:O,children:["← ",Object(o.jsx)(b,{children:"Newer"})]})}),Object(o.jsx)("div",{css:d,children:Object(o.jsx)(m,{children:y.map((function(e,t){return"..."===e?Object(o.jsx)(u,{children:"..."},t):e===g?Object(o.jsx)(u,{children:e},t):Object(o.jsx)(u,{children:Object(o.jsx)(p,{link:f(e),children:e})},t)}))})}),Object(o.jsx)(j,{children:x&&Object(o.jsxs)(p,{link:x,children:[Object(o.jsx)(b,{children:"Older"})," →"]})})]})}));var O=Object(n.styled)("hr",{target:"e1dbkvv00"})({name:"1jbnsxs",styles:'color:#6d6d6d;margin-left:auto;margin-right:auto;width:calc(100% - 4rem);opacity:0.6;background:linear-gradient(\n    to left,\n    currentColor calc(50% - 16px),\n    transparent calc(50% - 16px),\n    transparent calc(50% + 16px),\n    currentColor calc(50% + 16px)\n  );background-color:transparent!important;border:none;height:0.1rem;overflow:visible;position:relative;max-width:120rem;@media (min-width: 700px){width:calc(100% - 8rem);margin:8rem auto;}&:before,&:after{background:currentColor;content:"";display:block;height:1.6rem;position:absolute;top:calc(50% - 0.8rem);transform:rotate(22.5deg);width:0.1rem;}&:before{left:calc(50% - 0.5rem);}&:after{right:calc(50% - 0.5rem);}'}),g=r(245);t.default=Object(n.connect)((function(e){var t=e.state,r=e.showExcerpt,a=e.showMedia,l=t.source.get(t.router.link),d=t.theme.colors.primary,h=r||!t.theme.showAllContentOnArchive;return Object(i.useEffect)((function(){g.a.preload()}),[]),Object(o.jsxs)(o.Fragment,{children:[l.isTaxonomy&&Object(o.jsx)(s.a,{labelColor:d,label:l.taxonomy,children:Object(o.jsx)("span",{children:Object(n.decode)(t.source[l.taxonomy][l.id].name)})}),l.isAuthor&&Object(o.jsx)(s.a,{labelColor:d,label:"Author",children:Object(o.jsx)("b",{children:Object(n.decode)(t.source.author[l.id].name)})}),l.items.map((function(e,r){var n=e.type,s=e.id,d=r===l.items.length-1,m=t.source[n][s];return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(c.h,{item:m,showExcerpt:h,showMedia:a},m.id),!d&&Object(o.jsx)(O,{})]},m.id)})),l.totalPages>1&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{}),Object(o.jsx)(x,{size:"thin"})]})]})}))}}]);
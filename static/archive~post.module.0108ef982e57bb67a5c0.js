(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{279:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return m}));var n=r(1),i=r(282),a=r(43),s=r(0);const c=Object(n.styled)("div",{target:"e1f4xj5v1"})({name:"nh1gw8",styles:"margin-top:2rem;@media (min-width: 700px){margin-top:3rem;}"}),m=Object(n.styled)("ul",{target:"e1f4xj5v0"})({name:"130c4ue",styles:"justify-content:center;color:#6d6d6d;display:flex;flex-wrap:wrap;font-size:1.5rem;font-weight:500;list-style:none;margin:-1rem 0 0 -2rem;svg{fill:currentColor;}@media (min-width: 700px){font-size:1.6rem;margin:-1.4rem 0 0 -3rem;}"});t.c=Object(n.connect)(({state:e,item:t})=>{const r=e.source.author[t.author],l=new Date(t.date);return Object(s.jsx)(c,{children:Object(s.jsxs)(m,{children:[r&&Object(s.jsxs)(i.a,{icon:a.f,label:"Post Author",link:r.link,children:["By ",Object(n.decode)(r.name)]}),Object(s.jsx)(i.a,{icon:a.a,label:"Post Date",children:l.toDateString()})]})})})},280:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return o})),r.d(t,"g",(function(){return g})),r.d(t,"f",(function(){return x})),r.d(t,"c",(function(){return u})),r.d(t,"e",(function(){return f})),r.d(t,"a",(function(){return O}));var n=r(1),i=r(49),a=r(281),s=r(279),c=r(283),m=r(284),l=r(0);t.h=Object(n.connect)(({state:e,libraries:t,item:r,showExcerpt:n,showMedia:i=!0})=>{const h=e.source.category,j=r.categories&&r.categories.map(e=>h[e]),x=e.source.tag,u=r.tags&&r.tags.map(e=>x[e]),y=n?r.excerpt:r.content,{Component:w}=t.html2react;return Object(l.jsxs)(d,{children:[Object(l.jsx)(o,{children:Object(l.jsxs)(g,{children:[r.categories&&Object(l.jsx)(c.a,{categories:j}),Object(l.jsx)(p,{link:r.link,children:Object(l.jsx)(b,{className:"heading-size-1",dangerouslySetInnerHTML:{__html:r.title.rendered}})}),Object(l.jsx)(s.c,{item:r})]})}),e.theme.featuredMedia.showOnArchive&&i&&Object(l.jsx)(a.a,{id:r.featured_media}),y&&Object(l.jsxs)(f,{size:"thin",children:[Object(l.jsx)(O,{children:Object(l.jsx)(w,{html:y.rendered})}),r.tags&&Object(l.jsx)(m.a,{tags:u})]})]})});const d=Object(n.styled)("article",{target:"e7lz0qr8"})({name:"16d7dqd",styles:"&:first-of-type{padding:4rem 0 0;}@media (min-width: 700px){&:first-of-type{padding:8rem 0 0;}}"}),o=Object(n.styled)("header",{target:"e7lz0qr7"})({name:"1azakc",styles:"text-align:center"}),h={thin:"58rem",small:"80rem",medium:"100rem"},j=e=>h[e.size]||h.medium,g=Object(n.styled)("div",{target:"e7lz0qr6"})("margin-left:auto;margin-right:auto;width:calc(100% - 4rem);max-width:",j,";@media (min-width: 700px){width:calc(100% - 8rem);}"),b=Object(n.styled)("h2",{target:"e7lz0qr5"})({name:"1wfzr2w",styles:"margin:0;@media (min-width: 700px){font-size:6.4rem;}"}),x=Object(n.styled)("h1",{target:"e7lz0qr4"})({name:"ti75j2",styles:"margin:0"}),u=Object(n.styled)(g,{target:"e7lz0qr3"})("margin-left:auto;margin-right:auto;max-width:",j({size:"small"}),";width:100%;margin-top:2rem;font-size:2rem;letter-spacing:-0.0315em;line-height:1.4;@media (min-width: 700px){margin-top:2.5rem;font-size:2.6rem;}@media (min-width: 1000px){font-size:2.8rem;}@media (min-width: 1220px){font-size:3.2rem;letter-spacing:-0.03125em;line-height:1.375;}"),p=Object(n.styled)(i.a,{target:"e7lz0qr2"})({name:"6un5p1",styles:"color:#000000;text-decoration:none;display:inline-block;&:hover{text-decoration:underline;}"}),f=Object(n.styled)(g,{target:"e7lz0qr1"})({name:"1xm5ovs",styles:"padding-top:5rem;@media (min-width: 700px){padding-top:8rem;}"}),O=Object(n.styled)("div",{target:"e7lz0qr0"})({name:"47eph1",styles:'line-height:1.5;max-width:58rem;font-family:"Hoefler Text",Garamond,"Times New Roman",serif;letter-spacing:normal;@media (min-width: 700px){font-size:2.1rem;}>*:first-of-type{margin-top:0;}figure{margin:2em 0;max-width:100%;}h1,h2,h3,h4,h5,h6,cite,figcaption,table,address,.wp-caption-text,.wp-block-file{font-family:"Inter",-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,sans-serif;}h1,h2,h3,h4,h5,h6{margin:3.5rem auto 2rem;}@media (min-width: 700px){h1,h2,h3{margin:6rem auto 3rem;}h4,h5,h6{margin:4.5rem auto 2.5rem;}}'})},281:function(e,t,r){"use strict";r(25);var n=r(1),i=r(134),a=r(38),s=r(0);t.a=Object(n.connect)(({state:e,id:t,className:r})=>{const n=e.source.attachment[t];if(!n)return null;const i=Object.values(n.media_details.sizes).map(e=>[e.source_url,e.width]).reduce((e,t,r,n)=>e.concat(`${t.join(" ")}w${r!==n.length-1?", ":""}`),"")||null;return Object(s.jsx)(c,{className:r,children:Object(s.jsx)(a.a,{size:"medium",children:Object(s.jsx)(m,{alt:n.title.rendered,src:n.source_url,srcSet:i})})})});const c=Object(n.styled)("figure",{target:"edgxlej1"})({name:"x7iaiv",styles:"margin-top:5rem;position:relative;@media (min-width: 700px){margin-top:6rem;}"}),m=Object(n.styled)(i.a,{target:"edgxlej0"})({name:"1pdkais",styles:"margin:0 auto;max-width:100%;display:block;height:auto;max-height:440px"})},282:function(e,t,r){"use strict";var n=r(1),i=r(49),a=r(68),s=r(0);const c=Object(n.styled)("span",{target:"enbhvbr2"})({name:"1qt7at2",styles:"flex-shrink:0;margin-right:1rem"}),m=Object(n.styled)("span",{target:"enbhvbr1"})({name:"kiqxjt",styles:"a{color:inherit;text-decoration:none;}a:hover{text-decoration:underline;}"}),l=Object(n.styled)("li",{target:"enbhvbr0"})({name:"1050j2p",styles:"align-items:center;display:flex;flex-wrap:nowrap;flex-shrink:0;letter-spacing:-0.016875em;margin:1rem 0 0 2rem;max-width:calc(100% - 2rem);text-transform:capitalize;@media (min-width: 700px){margin:1.4rem 0 0 3rem;max-width:calc(100% - 3rem);}"});t.a=({icon:e,label:t,link:r,children:n})=>Object(s.jsxs)(l,{children:[Object(s.jsxs)(c,{children:[Object(s.jsx)(a.a,{children:t}),Object(s.jsx)(e,{})]}),Object(s.jsx)(m,{children:r?Object(s.jsx)(i.a,{link:r,children:n}):n})]})},283:function(e,t,r){"use strict";var n=r(1),i=r(68),a=r(49),s=r(0);t.a=Object(n.connect)(({categories:e})=>{const t=e.filter(Boolean);return 0===t.length?null:Object(s.jsxs)(c,{children:[Object(s.jsx)(i.a,{children:"Categories"}),Object(s.jsx)(m,{children:t.map(e=>Object(s.jsx)(l,{link:e.link,children:Object(n.decode)(e.name)},e.id))})]})});const c=Object(n.styled)("div",{target:"e13btr6x2"})({name:"in1q1e",styles:"line-height:1.25;margin-bottom:2rem;@media (min-width: 700px){margin-bottom:3rem;}"}),m=Object(n.styled)("div",{target:"e13btr6x1"})({name:"15qk1og",styles:"justify-content:center;display:flex;flex-wrap:wrap;margin:-0.5rem 0 0 -1rem;@media (min-width: 700px){margin:-1rem 0 0 -2rem;}"}),l=Object(n.styled)(a.a,{target:"e13btr6x0"})({name:"100n8le",styles:"border-bottom:0.15rem solid currentColor;font-size:1.4rem;font-weight:700;letter-spacing:0.036666667em;margin:0.5rem 0 0 1rem;text-decoration:none;text-transform:uppercase;@media (min-width: 700px){font-size:1.5rem;margin:1rem 0 0 2rem;}transition:border-bottom-color 150ms;:hover{border-bottom-color:transparent;}"})},284:function(e,t,r){"use strict";var n=r(1),i=r(2),a=r(43),s=r(49),c=r(279),m=r(282),l=r(0);t.a=Object(n.connect)(({tags:e})=>{const t=e.filter(Boolean);return 0===t.length?null:Object(l.jsx)(c.b,{children:Object(l.jsx)(c.a,{style:{justifyContent:"flex-start"},children:Object(l.jsx)(m.a,{icon:a.d,label:"Post Tags",children:t.map((e,r)=>{const a=r===t.length-1;return Object(l.jsxs)(i.Fragment,{children:[Object(l.jsx)(s.a,{link:e.link,children:Object(n.decode)(e.name)}),!a&&Object(l.jsx)(l.Fragment,{children:", "})]},e.id)})})})})})}}]);
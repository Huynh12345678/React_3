(this["webpackJsonptmdb-huynh"]=this["webpackJsonptmdb-huynh"]||[]).push([[18],{272:function(e,t,c){"use strict";t.a=function(e){return/[\u3400-\u9FBF]/.test(e)?"undefined":e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/(\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5)/g,"a")).replace(/(\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5)/g,"e")).replace(/(\xec|\xed|\u1ecb|\u1ec9|\u0129)/g,"i")).replace(/(\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1)/g,"o")).replace(/(\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef)/g,"u")).replace(/(\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9)/g,"y")).replace(/(\u0111)/g,"d")).replace(/([^0-9a-z-\s])/g,"")).replace(/(\s+)/g,"-")).replace(/^-+/g,"")).replace(/-+$/g,"")}},273:function(e,t,c){"use strict";var n=c(2),r=(c(274),c(20)),s=c(27);t.a=function(){var e=Object(s.c)((function(e){return e.user})),t=e.isAuth,c=e.user;return Object(n.jsxs)("footer",{className:"single_column movie header_large",children:[Object(n.jsxs)("nav",{className:"container",children:[Object(n.jsxs)("div",{className:"join",children:[Object(n.jsx)(r.b,{to:"/",className:"pl-0",children:Object(n.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"The Movie Database (TMDb)",width:130,height:94})}),Object(n.jsx)(r.b,{className:"rounded",to:"/signup",children:t?Object(n.jsxs)("span",{children:["h",Object(n.jsx)("span",{style:{textTransform:"lowercase"},children:"i "+c.user.username})]}):"Join the Community"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"The Basics"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"About TMDb"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Contact Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Support Forums"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"API"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",target:"_blank",rel:"noopener",children:"System Status"})})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Get Involved"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Contribution Bible"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"3rd Party Applications"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Add New Movie"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Add New TV Show"})})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Community"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Guidelines"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Discussions"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Leaderboard"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"",target:"_blank",rel:"noopener",children:"Twitter"})})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Legal"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Terms of Use"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"API Terms of Use"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"#",children:"Privacy Policy"})})]})]})]}),Object(n.jsx)("section",{children:"Build 68f56ea (685)"})]})}},274:function(e,t,c){},279:function(e,t,c){"use strict";var n=c(275),r=c.n(n);t.a=function(e){return r()(e,"YYYY-MM-DD").format("LL")}},290:function(e,t,c){},299:function(e,t,c){"use strict";var n=c(2),r=c(272),s=c(20),i=c(279);t.a=function(e){var t=e.value,c=document.getElementsByTagName("HTML")[0].getAttribute("data-theme");return Object(n.jsxs)("div",{className:"movie",style:{border:"dark"===c&&"none"},children:[Object(n.jsx)(s.b,{to:"/movie/"+t.id+"-"+Object(r.a)(t.title),children:Object(n.jsx)("img",{src:t.poster_path,alt:""})}),Object(n.jsxs)("div",{className:"root",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)(s.b,{to:"/movie/"+t.id+"-"+Object(r.a)(t.title),children:[" ",Object(n.jsx)("h6",{className:"title",children:t.title})]}),Object(n.jsx)("p",{className:"date",children:t.release_date&&Object(i.a)(t.release_date)})]}),Object(n.jsx)("p",{className:"overview",children:t.overview})]})]})}},316:function(e,t,c){"use strict";var n=c(2),r=c(28),s=c(211),i=c(209),a=c(148),o=c(0),l=function(e){var t=e.loading,c=e.handleClick,l=Object(o.useState)(!1),j=Object(r.a)(l,2),b=j[0],d=j[1],u={backgroundColor:"#01B4E4",fontWeight:"700",fontSize:"24px",color:b?"black":"white",boxShadow:"none",marginTop:"20px"},h=document.getElementsByTagName("HTML")[0].getAttribute("data-theme");return t?Object(n.jsx)(s.a,{display:"flex",justifyContent:"center",style:{padding:"4px 0px",marginTop:"20px"},children:Object(n.jsx)(i.a,{color:"dark"===h?"secondary":"primary"})}):Object(n.jsx)(a.a,{style:u,variant:"contained",fullWidth:!0,onClick:c,children:Object(n.jsx)("p",{className:"m-0",onClick:function(){return d(!1)},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},children:"Load More"})})};t.a=Object(o.memo)(l)},317:function(e,t,c){},501:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(6),s=c.n(r),i=c(24),a=c(7),o=c(14),l=c(28),j=c(0),b=c(316),d=c(299),u=function(e){var t=e.props,c=e.loadingBtn,r=e.handleClick,s=e.page,i=t.movies;return Object(n.jsx)("div",{id:"main",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"movie_list",children:i.results.map((function(e,t){return Object(n.jsx)(d.a,{value:e},t)}))}),s<i.total_pages&&Object(n.jsx)(b.a,{loading:c,handleClick:r})]})})},h=(c(290),c(317),function(e){var t=e.props,c=t.name;return Object(n.jsx)("div",{id:"top-keyword",children:Object(n.jsx)("div",{className:"content light-blue_icon",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsxs)("h4",{children:[t.movies.total_results," movies"]})]})})})}),O=c(106),x=c(29),p=c(70),m=c(100),f=function(){var e=Object(o.a)(s.a.mark((function e(t,c){var n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(x.b,"keyword/").concat(t),{params:{api_key:x.a,append_to_response:"movies",page:c}});case 3:return n=e.sent,r=n.data,i=Object(a.a)(Object(a.a)({},r),{},{movies:Object(a.a)(Object(a.a)({},r.movies),{},{results:r.movies.results.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{poster_path:e.poster_path?x.g+x.i+e.poster_path:p.c})}))})}),e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),v=c(273),g=c(99),w=function(e){var t=e.props.match.params.id,c=Object(j.useState)(null),r=Object(l.a)(c,2),b=r[0],d=r[1],x=Object(j.useState)(!0),p=Object(l.a)(x,2),m=p[0],w=p[1],y=Object(j.useState)(!1),k=Object(l.a)(y,2),_=k[0],N=k[1],T=Object(j.useState)(1),C=Object(l.a)(T,2),M=C[0],S=C[1],A=Object(g.useMediaQuery)({query:"(max-device-width: 991.98px)"});return Object(j.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=5;break}return e.next=3,f(t,M).then((function(e){d(e);Promise.all(e.movies.results.slice(0,5).map((function(e){return function(e){return new Promise((function(t,c){var n=new Image;n.src=e.poster_path,n.onload=function(){return t(e.url)},n.onerror=function(e){return c(e)}}))}(e)}))).then((function(){w(!1)})).catch((function(e){return console.log("Failed to load images",e)}))}));case 3:e.next=8;break;case 5:return N(!0),e.next=8,f(t,M).then((function(e){Promise.all(e.movies.results.slice(0,A?3:4).map((function(e){return function(e){return new Promise((function(t,c){var n=new Image;n.src=e.poster_path,n.onload=function(){return t(e.url)},n.onerror=function(e){return c(e)}}))}(e)}))).then((function(){d(Object(a.a)(Object(a.a)({},b),{},{movies:Object(a.a)(Object(a.a)({},b.movies),{},{results:[].concat(Object(i.a)(b.movies.results),Object(i.a)(e.movies.results))})})),N(!1)})).catch((function(e){return console.log("Failed to load images",e)}))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,M]),Object(n.jsx)(n.Fragment,{children:m?Object(n.jsx)(O.a,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h,{props:b}),Object(n.jsx)(u,{props:b,loadingBtn:_,handleClick:function(){S(M+1)},page:M}),Object(n.jsx)(v.a,{})]})})};t.default=function(e){return Object(n.jsx)(w,{props:e})}}}]);
//# sourceMappingURL=18.13ac55f2.chunk.js.map
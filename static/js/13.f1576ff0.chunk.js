(this["webpackJsonptmdb-huynh"]=this["webpackJsonptmdb-huynh"]||[]).push([[13],{273:function(e,t,n){"use strict";var a=n(2),r=(n(274),n(20)),i=n(27);t.a=function(){var e=Object(i.c)((function(e){return e.user})),t=e.isAuth,n=e.user;return Object(a.jsxs)("footer",{className:"single_column movie header_large",children:[Object(a.jsxs)("nav",{className:"container",children:[Object(a.jsxs)("div",{className:"join",children:[Object(a.jsx)(r.b,{to:"/",className:"pl-0",children:Object(a.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"The Movie Database (TMDb)",width:130,height:94})}),Object(a.jsx)(r.b,{className:"rounded",to:"/signup",children:t?Object(a.jsxs)("span",{children:["h",Object(a.jsx)("span",{style:{textTransform:"lowercase"},children:"i "+n.user.username})]}):"Join the Community"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"The Basics"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"About TMDb"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Contact Us"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Support Forums"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"API"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",target:"_blank",rel:"noopener",children:"System Status"})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Get Involved"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Contribution Bible"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"3rd Party Applications"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Add New Movie"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Add New TV Show"})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Community"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Guidelines"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Discussions"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Leaderboard"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"",target:"_blank",rel:"noopener",children:"Twitter"})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Legal"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Terms of Use"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"API Terms of Use"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"#",children:"Privacy Policy"})})]})]})]}),Object(a.jsx)("section",{children:"Build 68f56ea (685)"})]})}},274:function(e,t,n){},276:function(e,t,n){},279:function(e,t,n){"use strict";var a=n(275),r=n.n(a);t.a=function(e){return r()(e,"YYYY-MM-DD").format("LL")}},289:function(e,t,n){},296:function(e,t,n){"use strict";var a=n(2),r=n(275),i=n.n(r),c=n(27),s=n(20);t.a=function(e){var t,n=Object(c.c)((function(e){return e.color}));return Object(a.jsx)("div",{className:"top",style:{backgroundColor:"light"===document.documentElement.style.getPropertyValue("--theme")?"rgba(".concat(n.backdrop,",1)"):"#2C3132"},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(s.b,{to:"/movie/"+e.data.id+"-"+e.data.title,children:Object(a.jsx)("img",{src:e.url.poster_path,alt:"",width:58,height:87,loading:"eager"})}),Object(a.jsxs)("div",{className:"ahihi",style:{color:"light"===document.documentElement.style.getPropertyValue("--theme")?n.text:"white"},children:[Object(a.jsxs)("h4",{className:"display-5",children:[Object(a.jsx)(s.b,{style:{color:"inherit"},to:"/movie/"+e.data.id+"-"+e.data.title,children:e.url.title}),Object(a.jsxs)("span",{style:{fontWeight:"400",opacity:"0.8",color:"inherit"},children:["\xa0",e.url.date&&"("+(t=e.url.date,i()(t,"YYYY-MM-DD").format("YYYY")+")")]})]}),Object(a.jsx)("h3",{children:Object(a.jsx)(s.b,{style:{color:"inherit"},to:"/movie/"+e.data.id+"-"+e.data.title,children:"\u2190 Back to main"})})]})]})})})}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),r=n.n(a),i=n(7),c=n(14),s=n(29),o=n(70),l=n(100),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(s.b,"movie/").concat(t),{params:{api_key:s.a,append_to_response:"credits"}});case 3:return n=e.sent,a=n.data,c=Object(i.a)(Object(i.a)({},a.credits),{},{cast:a.credits.cast.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{profile_path:e.profile_path?s.g+s.i+e.profile_path:o.d})})),crew:a.credits.crew.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{profile_path:e.profile_path?s.g+s.i+e.profile_path:o.d})})),item:{poster_path:a.poster_path?s.g+s.i+a.poster_path:o.c,title:a.title,date:a.release_date}}),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(19),r=n(206),i=Object(r.a)((function(e){return{root:{"& .MuiTypography-root":{fontFamily:"var(--font) !important"},"& .MuiBox-root":{"& .MuiTypography-root":{fontWeight:"600"}},"& .MuiTab-textColorInherit":{opacity:1},"&.MuiPaper-root":{background:"none"},"& .MuiTabs-root":{"& .MuiTabScrollButton-root":{color:function(e){return"dark"===e.darkmode?"white":"black"}}}},tab:function(t){var n;return n={background:"dark"===t.darkmode?"#111111":"white",padding:"24px 12px",marginRight:0,color:"dark"===t.darkmode?"white":"black","&.Mui-selected":{color:"dark"===t.darkmode?"white":"black",background:"dark"===t.darkmode?"#272C34":"#E0E0E0","& $span":{background:"dark"===t.darkmode?"black":"white"}}},Object(a.a)(n,e.breakpoints.down("sm"),{padding:12}),Object(a.a)(n,"&:hover",{color:"dark"===t.darkmode?"white":"black",background:"dark"===t.darkmode?"#272C34":"#E0E0E0","& $span":{background:"dark"===t.darkmode?"black":"white"}}),n},label:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",paddingLeft:4,paddingRight:4,fontWeight:"inherit"},span:{padding:"0 10px",background:function(e){return"dark"===e.darkmode?"black":"#E0E0E0"},borderRadius:10,marginLeft:e.spacing(1),opacity:.7}}}))},305:function(e,t,n){"use strict";var a=n(2),r=n(275),i=n.n(r),c=n(20),s=n(27);t.a=function(e){var t,n=Object(s.c)((function(e){return e.color}));return Object(a.jsx)("div",{className:"top",style:{backgroundColor:"light"===document.documentElement.style.getPropertyValue("--theme")?"rgba(".concat(n.backdrop,",1)"):"#2C3132"},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(c.b,{to:"/tv/"+e.data.id+"-"+e.data.title,children:Object(a.jsx)("img",{src:e.url.poster_path,alt:"",width:58,height:87,loading:"eager"})}),Object(a.jsxs)("div",{className:"ahihi",style:{color:"light"===document.documentElement.style.getPropertyValue("--theme")?n.text:"white"},children:[Object(a.jsxs)("h4",{className:"display-5",children:[Object(a.jsx)(c.b,{style:{color:"inherit"},to:"/tv/"+e.data.id+"-"+e.data.title,children:e.url.title}),Object(a.jsxs)("span",{style:{fontWeight:"400",opacity:"0.8",color:"inherit"},children:["\xa0",e.url.date&&"("+(t=e.url.date,i()(t,"YYYY-MM-DD").format("YYYY")+")")]})]}),Object(a.jsx)("h3",{children:Object(a.jsx)(c.b,{style:{color:"inherit"},to:"/tv/"+e.data.id+"-"+e.data.title,children:"\u2190 Back to main"})})]})]})})})}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),r=n.n(a),i=n(7),c=n(14),s=n(29),o=n(70),l=n(100),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(s.b,"tv/").concat(t),{params:{api_key:s.a,append_to_response:"credits"}});case 3:return n=e.sent,a=n.data,c=Object(i.a)(Object(i.a)({},a.credits),{},{cast:a.credits.cast.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{profile_path:e.profile_path?s.g+s.i+e.profile_path:o.d})})),crew:a.credits.crew.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{profile_path:e.profile_path?s.g+s.i+e.profile_path:o.d})})),item:{poster_path:a.poster_path?s.g+s.i+a.poster_path:o.c,title:a.name,date:a.first_air_date}}),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),r=n(0),i=n(98),c=n(249);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(i.a)(),s=Object(c.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var o="function"===typeof e?e(n):e;o=o.replace(/^@media( ?)/m,"");var l="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,d=Object(a.a)({},s,t),u=d.defaultMatches,p=void 0!==u&&u,b=d.matchMedia,h=void 0===b?l?window.matchMedia:null:b,j=d.noSsr,m=void 0!==j&&j,f=d.ssrMatchMedia,x=void 0===f?null:f,g=r.useState((function(){return m&&l?h(o).matches:x?x(o).matches:p})),O=g[0],v=g[1];return r.useEffect((function(){var e=!0;if(l){var t=h(o),n=function(){e&&v(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[o,h,l]),O}},358:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(0),c=(n(5),n(4)),s=n(253),o=n(9),l=i.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return i.createElement(s.a,Object(a.a)({className:Object(c.a)(n.root,o),elevation:d?8:1,ref:t},u))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},450:function(e,t,n){"use strict";var a=n(3),r=n(1),i=n(0),c=(n(5),n(4)),s=n(9),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=i.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,d=e.classes,u=e.className,p=e.component,b=void 0===p?"div":p,h=e.container,j=void 0!==h&&h,m=e.direction,f=void 0===m?"row":m,x=e.item,g=void 0!==x&&x,O=e.justify,v=void 0===O?"flex-start":O,y=e.lg,w=void 0!==y&&y,k=e.md,_=void 0!==k&&k,C=e.sm,N=void 0!==C&&C,S=e.spacing,T=void 0===S?0:S,M=e.wrap,B=void 0===M?"wrap":M,E=e.xl,I=void 0!==E&&E,Y=e.xs,W=void 0!==Y&&Y,L=e.zeroMinWidth,D=void 0!==L&&L,F=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(c.a)(d.root,u,j&&[d.container,0!==T&&d["spacing-xs-".concat(String(T))]],g&&d.item,D&&d.zeroMinWidth,"row"!==f&&d["direction-xs-".concat(String(f))],"wrap"!==B&&d["wrap-xs-".concat(String(B))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==v&&d["justify-xs-".concat(String(v))],!1!==W&&d["grid-xs-".concat(String(W))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==_&&d["grid-md-".concat(String(_))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==I&&d["grid-xl-".concat(String(I))]);return i.createElement(b,Object(r.a)({className:P,ref:t},F))})),p=Object(s.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=p},500:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(6),i=n.n(r),c=n(14),s=n(28),o=n(0),l=n(27),d=n(296),u=n(305),p=n(298),b=n(306),h=n(106),j=n(314),m=n(358),f=n(211),x=n(256),g=n(495),O=n(483),v=n(20),y=n(300),w=function(e){var t=e.params,n=e.data,r=e.options,i=e.mediaType,c=Object(l.c)((function(e){return e.color})),s=t,o={darkmode:document.getElementsByTagName("HTML")[0].getAttribute("data-theme")},d=Object(y.a)(o),u=Object(j.a)((function(e){return e.breakpoints.down("sm")})),p=[{type:"Trailers",label:"Trailers",total_results:r.Trailers.length},{type:"Teasers",label:"Teasers",total_results:r.Teasers.length},{type:"Clips",label:"Clips",total_results:r.Clips.length},{type:"Scenes",label:"Behind the Scenes",total_results:r.Scenes.length},{type:"Bloopers",label:"Bloopers",total_results:r.Bloopers.length},{type:"Featurettes",label:"Featurettes",total_results:r.Featurettes.length}],b=[].concat(p,[{type:"Opening",label:"Opening Credits",total_results:r.Opening.length}]);return Object(a.jsxs)(m.a,{style:{borderRadius:"8px"},className:d.root,children:[Object(a.jsx)(f.a,{p:2,color:"white",style:{backgroundColor:"dark"===o.darkmode?"#333333":"rgba(".concat(c.backdrop,",1)"),color:"dark"===o.darkmode?"white":c.text},children:Object(a.jsx)(x.a,{variant:"h6",children:"Videos"})}),Object(a.jsx)(g.a,{orientation:u?"horizontal":"vertical",variant:u?"scrollable":"fullWidth",scrollButtons:"on",indicatorColor:"primary",value:s,TabIndicatorProps:{style:{backgroundColor:"dark"===o.darkmode?"#333333":"rgba(".concat(c.backdrop,",1)")}},children:"movie"===i?p.map((function(e){return Object(a.jsx)(O.a,{component:v.b,to:"/movie/".concat(n.id,"-").concat(n.title,"/videos/").concat(e.type),selected:e.type===s,value:e.type,className:d.tab,label:Object(a.jsxs)(x.a,{className:d.label,children:[e.label,Object(a.jsx)("span",{className:d.span,children:e.total_results.toLocaleString()})]})},e.type)})):b.map((function(e){return Object(a.jsx)(O.a,{component:v.b,to:"/tv/".concat(n.id,"-").concat(n.title,"/videos/").concat(e.type),selected:e.type===s,value:e.type,className:d.tab,label:Object(a.jsxs)(x.a,{className:d.label,children:[e.label,Object(a.jsx)("span",{className:d.span,children:e.total_results.toLocaleString()})]})},e.type)}))})]})},k=n(450),_=n(19),C=n(105),N=n(285),S=n.n(N),T=n(104),M=(n(276),n(29)),B=n(279),E=n(31),I=n.n(E),Y=function(e){if(e.includes("M")){var t=e.substring(2).split("M"),n=t[1].replace("S",""),a=t[0],r=n;return r.length<2?a+":0"+r:a+":"+r}return"0:"+e.substring(2).replace("S","")},W=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,r,c,s,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={params:{key:M.c,id:t,part:M.h}},a={params:{key:M.c,id:t,part:M.j}},r=[],c=function(e){r.push(e)},e.next=7,I.a.all([I.a.get("".concat(M.d),n),I.a.get("".concat(M.d),a)]).then(I.a.spread((function(e,t){c(e.data),c(t.data)})));case 7:return s=r[0],o=r[1],l={info:{channelTitle:s.items[0].snippet.channelTitle,publishedAt:Object(B.a)((i=s.items[0].snippet.publishedAt,i.substring(0,10))),runtime:Y(o.items[0].contentDetails.duration),channelId:s.items[0].snippet.channelId}},e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}var i}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),L=n(99);function D(){var e=Object(C.a)(["\n  padding: 10px 16px;\n"]);return D=function(){return e},e}function F(){var e=Object(C.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return F=function(){return e},e}function P(){var e=Object(C.a)(["\n  transition: all 0.2s;\n  &: hover {\n    opacity: 0.6;\n  }\n"]);return P=function(){return e},e}function A(){var e=Object(C.a)(["\n  margin-bottom: 30px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]);return A=function(){return e},e}var z=T.a.div(A()),R=T.a.div(P()),G=T.a.div(F()),V=T.a.div((function(e){var t=e.theme;return"\n  border-top: 1px solid rgba(227, 227, 227, 1);\n  border-bottom: 1px solid rgba(227, 227, 227, 1);\n  border-right: 1px solid rgba(227, 227, 227, 1);\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  ".concat("dark"===t&&"background:#111111;border:none;","\n")})),q=T.a.div(D()),U=T.a.span((function(e){var t=e.theme;return"\nbackground-size: cover;\ndisplay: flex;\nwidth: 20px;\nheight: 14.09px;\nmargin-right: 6px;\n  &: last-child {\n  margin-left: 4px;\n  width: 17.6px;\n  height: 17.6px;\n  opacity: 0.6;\n}\n".concat("dark"===t&&"filter:invert(1)","\n")})),H=function(e){var t=e.item,n=e.index,r=e.type,l=Object(L.useMediaQuery)({query:"(max-device-width: 991.98px)"}),d=document.getElementsByTagName("HTML")[0].getAttribute("data-theme"),u=t.key,p=Object(o.useState)({id:!1}),b=Object(s.a)(p,2),h=b[0],j=b[1],m=Object(o.useState)(null),f=Object(s.a)(m,2),g=f[0],O=f[1];return Object(o.useEffect)((function(){!l&&O(null),function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(u).then((function(e){O(e?{name:t.name,date:e.info.publishedAt,runtime:e.info.runtime,channel:e.info.channelTitle,idChannel:e.info.channelId}:{name:t.name,date:"-",runtime:"-",channel:"-",idChannel:"-"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u,l,t.name]),g&&Object(a.jsxs)(z,{className:"col-12",style:{paddingLeft:l?"15px":"24px"},children:[Object(a.jsx)(S.a,{channel:"youtube",isOpen:h[u],videoId:u,onClose:function(){return function(e){j(Object(_.a)({},e,!1))}(u)}}),Object(a.jsxs)(V,{className:"d-md-flex",theme:d,children:[Object(a.jsx)("div",{style:{minWidth:"350px",height:"197px",backgroundImage:"url('https://i.ytimg.com/vi/".concat(t.key,"/hqdefault.jpg')"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},className:"d-flex  justify-content-center align-items-center",id:"video",children:Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{paddingLeft:"2px",borderRadius:"100%",width:"65px",height:"65px",background:"rgba(0,0,0,0.7)"},children:Object(a.jsx)(R,{className:"btnPlay",onClick:function(){return function(e){j(Object(_.a)({},e,!0))}(u)},style:{backgroundImage:"url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg')",width:"35px",height:"35px",filter:"invert(1)"}})})}),Object(a.jsxs)(G,{className:"info",children:[Object(a.jsxs)(q,{children:[Object(a.jsx)("b",{children:g.name}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{style:{fontSize:"14.4px"},children:[r," \u2022 ",g.runtime," \u2022 ",g.date]})]}),Object(a.jsxs)(q,{style:{backgroundColor:"dark"===d?"#313131":"#F7F7F7",display:"flex",alignItems:"center"},children:[Object(a.jsx)(U,{className:"youtube_icon",theme:d}),Object(a.jsx)(x.a,{style:{opacity:"0.6",fontSize:"14.5px"},children:Object(a.jsx)("a",{href:"https://www.youtube.com/channel/"+g.idChannel,target:"_blank",rel:"noreferrer",children:g.channel})}),Object(a.jsx)(U,{className:"verifyCheck_icon",theme:d})]})]})]})]},n)},J=function(e){var t=e.type,n=e.movies,r=e.title,i=e.item;return Object(a.jsx)("div",{className:"row",children:n.length?n.map((function(e,n){return Object(a.jsx)(H,{item:e,index:n,type:t},n)})):Object(a.jsxs)("p",{className:"mb-0",style:{paddingLeft:"24px"},children:["There are no English ",i[t].toLowerCase()," added to ",r,"."]})})},Q=n(273),$=(n(289),function(e){var t=e.match,n=t.params.mediaType,r=t.params.type,j=Object(l.c)((function(e){return e.videos})),m=Object(o.useState)(null),f=Object(s.a)(m,2),x=f[0],g=f[1],O=Object(o.useState)(!0),v=Object(s.a)(O,2),y=v[0],_=v[1],C={id:t.params.id,title:t.params.title},N={Trailers:j.filter((function(e){return"Trailer"===e.type})),Teasers:j.filter((function(e){return"Teaser"===e.type})),Clips:j.filter((function(e){return"Clip"===e.type})),Scenes:j.filter((function(e){return"Behind the Scenes"===e.type})),Bloopers:j.filter((function(e){return"Bloopers"===e.type})),Featurettes:j.filter((function(e){return"Featurette"===e.type})),Opening:j.filter((function(e){return"Opening Credits"===e.type}))};Object(o.useEffect)((function(){(function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),"movie"!==n){e.next=6;break}return e.next=4,Object(p.a)(t.params.id).then((function(e){var t=new Image;t.src=e.item.poster_path,t.onload=function(){g(e.item),_(!1)}}));case 4:e.next=8;break;case 6:return e.next=8,Object(b.a)(t.params.id).then((function(e){var t=new Image;t.src=e.item.poster_path,t.onload=function(){g(e.item),_(!1)}}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,t.params.id]);var S=Object(L.useMediaQuery)({query:"(max-device-width: 991.98px)"});return y?Object(a.jsx)(h.a,{}):Object(a.jsxs)(a.Fragment,{children:["movie"===n?Object(a.jsx)(d.a,{data:C,url:x}):Object(a.jsx)(u.a,{data:C,url:x}),Object(a.jsx)("div",{className:"container",style:{maxWidth:"1300px",padding:S?"30px 15px":"30px 31px"},children:Object(a.jsxs)(k.a,{container:!0,spacing:3,children:[Object(a.jsx)(k.a,{item:!0,md:3,xs:12,children:Object(a.jsx)(w,{params:r,data:C,videos:j,options:N,mediaType:n})}),Object(a.jsx)(k.a,{item:!0,md:9,xs:12,children:Object(a.jsx)("section",{style:{minHeight:S?"auto":"552px"},children:Object(a.jsx)(J,{item:{Trailers:"Trailers",Teasers:"Teasers",Clips:"Clips",Scenes:"Behind the Scenes",Bloopers:"Bloopers",Featurettes:"Featurettes",Opening:"Opening Credits"},title:x.title,type:r,movies:N[r]})})})]})}),Object(a.jsx)(Q.a,{})]})});t.default=function(e){var t=e.match;return Object(a.jsx)($,{match:t})}}}]);
//# sourceMappingURL=13.f1576ff0.chunk.js.map
(this["webpackJsonptmdb-huynh"]=this["webpackJsonptmdb-huynh"]||[]).push([[22],{272:function(e,t,a){"use strict";t.a=function(e){return/[\u3400-\u9FBF]/.test(e)?"undefined":e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/(\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5)/g,"a")).replace(/(\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5)/g,"e")).replace(/(\xec|\xed|\u1ecb|\u1ec9|\u0129)/g,"i")).replace(/(\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1)/g,"o")).replace(/(\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef)/g,"u")).replace(/(\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9)/g,"y")).replace(/(\u0111)/g,"d")).replace(/([^0-9a-z-\s])/g,"")).replace(/(\s+)/g,"-")).replace(/^-+/g,"")).replace(/-+$/g,"")}},273:function(e,t,a){"use strict";var s=a(2),i=(a(274),a(20)),n=a(27);t.a=function(){var e=Object(n.c)((function(e){return e.user})),t=e.isAuth,a=e.user;return Object(s.jsxs)("footer",{className:"single_column movie header_large",children:[Object(s.jsxs)("nav",{className:"container",children:[Object(s.jsxs)("div",{className:"join",children:[Object(s.jsx)(i.b,{to:"/",className:"pl-0",children:Object(s.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"The Movie Database (TMDb)",width:130,height:94})}),Object(s.jsx)(i.b,{className:"rounded",to:"/signup",children:t?Object(s.jsxs)("span",{children:["h",Object(s.jsx)("span",{style:{textTransform:"lowercase"},children:"i "+a.user.username})]}):"Join the Community"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"The Basics"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"About TMDb"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Contact Us"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Support Forums"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"API"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",target:"_blank",rel:"noopener",children:"System Status"})})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Get Involved"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Contribution Bible"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"3rd Party Applications"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Add New Movie"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Add New TV Show"})})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Community"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Guidelines"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Discussions"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Leaderboard"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"",target:"_blank",rel:"noopener",children:"Twitter"})})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Legal"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Terms of Use"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"API Terms of Use"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"#",children:"Privacy Policy"})})]})]})]}),Object(s.jsx)("section",{children:"Build 68f56ea (685)"})]})}},274:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){"use strict";var s=a(2),i=a(291),n=a(206),r=a(18),c=a(256),o=a(84),l=a(0),d=Object(n.a)((function(e){return{customDoughnut:function(e){return{position:"relative",borderRadius:"50%",backgroundColor:"#081C22",padding:e.size2?e.size2:4,color:"white",display:"flex",justifyContent:"center",alignItems:"center"}},absoluteCenter:function(e){return{position:"absolute",marginLeft:2,"& > h6":{fontSize:e.size/3,fontWeight:"bold","& > span":{fontSize:e.size/7,verticalAlign:"text-top"}}}}}})),u=function(e){var t=e.vote_average,a=void 0===t?"":t,n=e.size,l=e.size2,u=e.rounded,j=e.offAnimation,b=e.fontSize,h=d({size:n,size2:l}),m={datasets:""!==a&&[{data:[a,10-a],backgroundColor:[a>=7?"#21D07A":a>=4?"#D2D531":o.a[500],a>=7?"#204529":a>=4?"#423D0F":Object(r.c)(o.a[500],.5)],pointHoverRadius:5,borderWidth:0}]};return Object(s.jsxs)("div",{className:h.customDoughnut,children:[Object(s.jsx)(i.Doughnut,{data:m,width:n,height:n,options:{responsive:!0,maintainAspectRatio:!1,cutoutPercentage:87,animation:j?{duration:0}:{},tooltips:{enabled:!1},hover:{mode:null},legend:{display:!1},elements:u?{arc:{}}:{}}}),Object(s.jsx)("div",{className:h.absoluteCenter,children:Object(s.jsx)(c.a,{className:a?"icon-r".concat(Math.round(10*a)):"icon-rNR",style:{fontSize:b}})})]})};t.a=Object(l.memo)(u)},279:function(e,t,a){"use strict";var s=a(275),i=a.n(s);t.a=function(e){return i()(e,"YYYY-MM-DD").format("LL")}},290:function(e,t,a){},490:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a(273),n=a(28),r=a(19),c=a(255),o=a(269),l=a(256),d=a(475),u=a(206),j=a(27),b=Object(u.a)((function(e){return{icon:{padding:0,"& span":{"& div":Object(r.a)({width:"150px",height:"150px"},e.breakpoints.down("sm"),{width:"100px",height:"100px"})}},container:{display:"flex"},text:{fontWeight:500,opacity:.7,fontSize:"1.1em"}}})),h=function(){var e=b(),t=Object(j.c)((function(e){return e.user})).user;return Object(s.jsxs)("div",{className:"container "+e.container,style:{padding:"30px"},children:[Object(s.jsx)(c.a,{className:e.icon,children:t.user.avatar?Object(s.jsx)(o.a,{alt:"avatar",src:t.user.avatar}):Object(s.jsx)(o.a,{className:"bg-danger",children:Object(s.jsx)(l.a,{className:"text-uppercase",variant:"h1",color:"initial",children:t.user.username[0]})})}),Object(s.jsxs)("div",{className:"text-white d-flex flex-column justify-content-center",style:{paddingLeft:"30px"},children:[Object(s.jsx)("p",{className:"m-0 font-weight-bold",style:{fontSize:"32px"},children:t.user.username}),Object(s.jsxs)("p",{className:e.text,children:["Member since"," ",d.DateTime.fromISO(t.user.createdAt).toFormat("MMMM yyyy")]})]})]})},m=(a(276),Object(u.a)((function(e){return{headerColor:{backgroundImage:"radial-gradient(at 30% top, #24343b 0%, rgba(3, 37, 65, 1) 70%)"}}}))),p=function(e){var t=e.children,a=m();return Object(s.jsx)("div",{className:a.headerColor,children:Object(s.jsx)("div",{className:"headerBackground",children:t})})},x=a(7),O=a(272),f=a(20),v=a(279),g=a(458),y=a(450),w=a(355),N=a(209),C=a(131),k=a.n(C),S=a(281),z=a.n(S),F=a(108),A=a(109),D=a(277),M=a(99),T=function(e){var t=e.value,a=e.classes,i=e.select,n=e.theme,r=Object(j.b)(),c=Object(j.c)((function(e){return e.watchlist})).isRemoving,o=Object(j.c)((function(e){return e.favorite})),l=o.favoritelist,d=o.isAdding2,u=o.isRemoving2,b=t.media_type,h=Object(M.useMediaQuery)({query:"(max-device-width: 991.98px)"}),m={height:h?"auto":"201px",width:h?"100px":"133.32px"},p=l.some((function(e){return e.id===t.id}));return Object(s.jsx)(g.a,{in:!0,timeout:(t.id,300),children:Object(s.jsxs)("div",{className:"movie",style:{border:"dark"===n&&"none"},children:[Object(s.jsx)(f.b,{to:"/".concat(b,"/")+t.id+"-"+Object(O.a)(t.title),children:Object(s.jsx)("img",{style:m,src:t.poster_path,alt:""})}),Object(s.jsx)("div",{className:"d-flex flex-column justify-content-around w-100",children:Object(s.jsxs)("div",{className:"root py-0 h-100",children:[Object(s.jsxs)("div",{className:"d-flex",children:[!h&&Object(s.jsx)(y.a,{item:!0,className:a.styledDoughnut,style:{marginRight:"10px"},children:Object(s.jsx)(D.a,{fontSize:"0.6em",size2:2,offAnimation:!0,rounded:!0,vote_average:t.vote_average,size:h?30:34})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(f.b,{to:"/".concat(b,"/")+t.id+"-"+Object(O.a)(t.title),children:Object(s.jsx)("h6",{className:"title",children:t.title})}),Object(s.jsx)("p",{className:"date",children:t.release_date&&Object(v.a)(t.release_date)})]})]}),Object(s.jsx)("p",{className:"overview",style:{WebkitLineClamp:h?2:3},children:t.overview}),Object(s.jsxs)(y.a,{className:a.grid,children:[Object(s.jsxs)("span",{className:"mr-4 position-relative",onClick:p?function(){return r(Object(A.c)(t.id))}:function(){return r(Object(A.a)(t))},children:[Object(s.jsx)(w.a,{className:a.fab+" mr-2 "+a.fab2,style:{background:p&&"#EF47B6",border:p&&"#EF47B6"},children:Object(s.jsx)(z.a,{className:a.icon,style:{color:p&&"white"}})}),"Favorite",(d===t.id||u===t.id)&&Object(s.jsx)(N.a,{className:a.progress,size:30})]}),"watchlist"===i&&Object(s.jsxs)("span",{className:"position-relative",onClick:function(){return r(("watchlist"===i?F.c:A.c)(t.id))},children:[Object(s.jsx)(w.a,{className:a.fab+" mr-2",children:Object(s.jsx)(k.a,{className:a.icon,style:{fontSize:"18px"}})}),"Remove",c===t.id&&Object(s.jsx)(N.a,{className:a.progress,size:30})]})]})]})})]})})},P=Object(u.a)((function(e){return{option:{fontWeight:"bold",paddingBottom:"11px",fontSize:"1.5rem",alignItems:"center"},tabs:{marginLeft:e.spacing(3)},tab:function(e){return{backgroundColor:"unset !important",fontWeight:"normal !important",color:"dark"===e.theme&&"gray","&:hover":{backgroundColor:"unset"},"&.MuiTab-textColorPrimary.Mui-selected":{color:"dark"===e.theme?"white":"black"}}},fab:{width:"30px",height:"30px",backgroundColor:"unset",boxShadow:"unset",border:"1px solid #959595","&:hover":{backgroundColor:"#959595","& $icon":{color:"white"}},"&.MuiFab-root":{minHeight:"auto"}},grid:{padding:"5px 0px 3px",color:"#959595","& span:hover":{"& $fab":{backgroundColor:"#959595","& $icon":{color:"white"}},"& $fab2":{backgroundColor:"#EF47B6",border:"1px solid #EF47B6","& $icon":{color:"#EF47B6"}}}},icon:{color:"#959595",fontSize:"15px"},fab2:{"&:hover":{backgroundColor:"#EF47B6",border:"1px solid #EF47B6"}},progress:{position:"absolute",left:0},styledDoughnut:{paddingRight:"0 !important",display:"flex",alignItems:"center"},formControl:{"&.MuiFormControl-root":{marginTop:e.spacing(-.1),marginLeft:e.spacing(2),minWidth:120}},fix:{fontFamily:"var(--font)"},container:{padding:"8px 0px","& li":{display:"block !important",textAlign:"start",padding:"3px 64px 3px 24px !important",margin:"0 !important","&:hover":{backgroundColor:"#F8F9FA"}}},bar:{border:"1px solid rgb(227,227,227)",textAlign:"center","& div":{"& ul":{marginBottom:"0","& li":{listStyle:"none",display:"inline-block",marginRight:"40px",padding:"10px 0px"}},"& $listFavorites":{"& ul":{"& li":{padding:"3px 10px 3px 24px",marginRight:0,width:"100%","&:hover":{backgroundColor:"#F8F9FA"}}}}}},favorites:{"&:hover":{backgroundColor:"#959595 !important",color:"white"}},listFavorites:Object(r.a)({zIndex:-1,visibility:"hidden",backgroundColor:"white",borderRadius:".25rem",right:0,transform:"translate(153.5px, -76px)",position:"absolute",border:"1px solid rgb(227,227,227)","& ul":{textAlign:"start",padding:"8px 0",width:"152px"}},e.breakpoints.down("sm"),{transform:"translate(117.5px, -76px)","& ul":{width:"115px"}})}})),L=a(0),R=a(251),B=a(263),E=a(268),_=a(88),I=a(207),V=function(e){var t=e.option,a=e.handleChange2,i=e.classes,n=e.theme;return Object(s.jsxs)("div",{style:{fontWeight:"normal",fontSize:"1.07rem"},children:["Filter by:",Object(s.jsx)(I.a,{theme:"dark"===n?_.b:_.c,children:Object(s.jsx)(R.a,{className:i.formControl,children:Object(s.jsxs)(B.a,{style:{paddingLeft:"4px"},value:t,onChange:a,children:[Object(s.jsx)(E.a,{className:i.fix,value:"Date Added",children:"Date Added"}),Object(s.jsx)(E.a,{className:i.fix,value:"Popularity",children:"Popularity"}),Object(s.jsx)(E.a,{className:i.fix,value:"Release Date",children:"Release Date"})]})})})]})},W=a(495),U=a(483),H=function(e){var t=e.classes,a=e.type,i=e.handleChange,n=e.movieList,r=e.tvList,c=e.select,o=e.theme;return Object(s.jsx)(s.Fragment,{children:"edit"!==c?Object(s.jsxs)(W.a,{TabIndicatorProps:{style:{background:"dark"===o?"white":"black"}},className:t.tabs+" mr-auto",value:a,indicatorColor:"primary",textColor:"primary",onChange:i,children:[Object(s.jsx)(U.a,{label:Object(s.jsxs)("span",{children:["Movies \xa0",Object(s.jsx)("span",{style:{fontSize:"0.9em",color:"#959595"},children:n.length})]}),value:"movie",className:t.tab}),Object(s.jsx)(U.a,{label:Object(s.jsxs)("span",{children:["TV \xa0",Object(s.jsx)("span",{style:{fontSize:"0.9em",color:"#959595"},children:r.length})]}),value:"tv",className:t.tab})]}):Object(s.jsxs)(W.a,{TabIndicatorProps:{style:{background:"dark"===o?"white":"black"}},className:t.tabs+" mr-auto",value:a,indicatorColor:"primary",textColor:"primary",onChange:i,children:[Object(s.jsx)(U.a,{label:Object(s.jsx)("span",{children:"Profile"}),value:"profile",className:t.tab}),Object(s.jsx)(U.a,{label:Object(s.jsx)("span",{children:"Change password"}),value:"password",className:t.tab})]})})},Y=a(150),q=a(211),$=a(148),G=a(74),J=a(6),K=a.n(J),Q=a(14),X=a(31),Z=a.n(X),ee=a(8),te=a(29),ae=function(e,t){return function(){var a=Object(Q.a)(K.a.mark((function a(s){return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s({type:ee.k}),a.prev=1,a.next=4,Z.a.post("".concat(te.f,"users/changeProfile"),e);case 4:s({type:ee.l}),s({type:ee.w,user:t}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),s({type:ee.j,error:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},se=a(356);a(479);se.a.initializeApp({apiKey:"AIzaSyBa57ehMe6uaWm4sqKTEkzCPDVilO1UAvY",authDomain:"tmdb-huynh.firebaseapp.com",projectId:"tmdb-huynh",storageBucket:"tmdb-huynh.appspot.com",messagingSenderId:"976678230795",appId:"1:976678230795:web:8d1d6e268db9f340d3600e"});var ie=se.a.storage(),ne=Object(u.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7),"& .MuiSvgIcon-root":{display:"none"}},customFileUpload:{display:"inline-block",marginLeft:"10px",cursor:"pointer",borderBottom:"3px solid  white",fontSize:"18px","&:hover":{borderBottom:"3px solid  black"}}}})),re=Object(L.forwardRef)((function(e,t){var a=Object(L.useState)(null),i=Object(n.a)(a,2),r=i[0],c=i[1],l=ne(),d=Object(L.useState)(!1),u=Object(n.a)(d,2),b=u[0],h=u[1],m=Object(L.useState)(),p=Object(n.a)(m,2),x=p[0],O=p[1],f=Object(j.c)((function(e){return e.user})).user;return Object(L.useImperativeHandle)(t,(function(){return{handleUpload:function(t){r&&!b?(e.setLoad(!0),ie.ref("images/".concat(r.name)).put(r).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){ie.ref("images").child(r.name).getDownloadURL().then((function(a){t.email===f.user.email&&a===f.user.avatar||(f.user.email=t.email,f.user.avatar=a,t.username=f.user.username,t.avatar=a,e.dispatch(ae(t,f)).then((function(t){document.getElementById("uploadCaptureInputFile").value="",e.notify(),setTimeout((function(){e.setLoad(!1)}),0)})))}))}))):t.email!==f.user.email&&(f.user.email=t.email,t.username=f.user.username,t.avatar=f.user.avatar,e.dispatch(ae(t,f)),e.notify())}}})),Object(L.useEffect)((function(){if(r){var e=URL.createObjectURL(r);return r.size>163840?(O(),h("File too large")):(O(e),h(!1)),function(){return URL.revokeObjectURL(e)}}O(void 0)}),[r]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)(o.a,{alt:"avatar",src:x,className:l.large}),Object(s.jsx)("label",{htmlFor:"uploadCaptureInputFile",className:l.customFileUpload+" mb-0",children:"Upload"}),b&&Object(s.jsx)("span",{className:"ml-2",style:{borderBottom:"2px solid transparent",color:"red"},children:b})]}),Object(s.jsx)("input",{type:"file",className:"d-none",onChange:function(e){return function(e){e.target.files[0]&&c(e.target.files[0])}(e)},id:"uploadCaptureInputFile"})]})})),ce=a(478),oe=(a(477),a(328)),le=a.n(oe),de=function(e){var t=ue(),a=Object(L.useRef)(),i=Object(G.b)(),r=i.handleSubmit,c=i.control,o=i.errors,l=Object(j.c)((function(e){return e.setting})).loading,d=Object(L.useState)(!1),u=Object(n.a)(d,2),b=u[0],h=u[1],m=Object(j.c)((function(e){return e.user})).user,p=Object(j.b)(),x=le.a.debounce((function(){return ce.b.success("\ud83d\ude0e Update Profile Successfully!")}),900);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"display-5 font-weight-bold",children:"MY PROFILE"}),Object(s.jsx)(re,{ref:a,dispatch:p,notify:x,setLoad:function(e){h(e)}}),Object(s.jsx)("br",{}),Object(s.jsxs)("form",{noValidate:!0,onSubmit:r((function(e){b||a.current.handleUpload(e)})),children:[Object(s.jsx)(I.a,{theme:"dark"===e.theme?_.b:_.c,children:Object(s.jsx)(G.a,{control:c,name:"email",defaultValue:m.user.email,rules:{required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"Email is invalid"}},as:Object(s.jsx)(Y.a,{id:"outlined-basic4",label:"Email",variant:"outlined",fullWidth:!0,size:"small",error:!!o.email,helperText:o.email&&("required"===o.email.type?"Please enter your email":"pattern"===o.email.type?"Email is invalid":null)})})}),Object(s.jsx)(q.a,{display:"flex",className:"justify-content-center mb-0 mt-3",children:Object(s.jsxs)($.a,{type:"submit",variant:"contained",color:"primary",style:{fontWeight:"600",width:"200px"},children:[(l||b)&&Object(s.jsx)(N.a,{className:t.loader}),"SAVE CHANGES"]})})]}),Object(s.jsx)(ce.a,{className:"foo"})]})},ue=Object(u.a)((function(e){return{root:{width:"100%","& > *":{marginBottom:"15px"}},loader:{marginRight:e.spacing(1),color:"white",width:"22px !important",height:"22px !important",position:"absolute",left:"7%"}}})),je=function(e){var t=ue(),a=Object(j.b)(),i=Object(j.c)((function(e){return e.setting})),n=i.loading,r=i.error,c=i.success,o=Object(j.c)((function(e){return e.user})).user,l=Object(G.b)(),d=l.watch,u=l.handleSubmit,b=l.control,h=l.errors,m=Object(x.a)({},e).type;return Object(L.useEffect)((function(){a({type:"DEFAULT"})}),[a]),Object(s.jsx)(s.Fragment,{children:"profile"===m?Object(s.jsx)(de,Object(x.a)({},e)):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{className:"display-5 font-weight-bold",children:"CHANGE MY PASSWORD"}),c&&Object(s.jsx)("div",{className:"alert alert-success",style:{fontSize:"19.2px"},children:Object(s.jsx)("strong",{children:"You have been successfully changed password !"})}),Object(s.jsxs)("form",{className:t.root,noValidate:!0,onSubmit:u((function(e){var t;e.username=o.user.username,a((t=e,function(){var e=Object(Q.a)(K.a.mark((function e(a){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:ee.h}),e.prev=1,e.next=4,Z.a.post("".concat(te.f,"users/changePassword"),t);case 4:a({type:ee.i}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({type:ee.g,error:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()))})),children:[Object(s.jsxs)(I.a,{theme:"dark"===e.theme?_.b:_.c,children:[Object(s.jsx)(G.a,{control:b,name:"oldPassword",defaultValue:"",rules:{required:{value:!0,message:"This field is required"}},as:Object(s.jsx)(Y.a,{autoComplete:"con cac",type:"password",id:"outlined-basic1",label:"Old Password",variant:"outlined",fullWidth:!0,size:"small",error:!!h.oldPassword||r,helperText:h.oldPassword?h.oldPassword.message:r})}),Object(s.jsx)(G.a,{control:b,name:"newPassword",defaultValue:"",rules:{required:{value:!0,message:"This field is required"},minLength:{value:6,message:"This field min 6 characters"}},as:Object(s.jsx)(Y.a,{autoComplete:"off",type:"password",id:"outlined-basic2",label:"New Password",variant:"outlined",fullWidth:!0,size:"small",error:!!h.newPassword,helperText:h.newPassword&&h.newPassword.message})}),Object(s.jsx)(G.a,{control:b,name:"confirmPassword",defaultValue:"",rules:{required:{value:!0,message:"This field is required"},validate:function(e){return e===d("newPassword")||"Both password need to be the same"}},as:Object(s.jsx)(Y.a,{autoComplete:"off",type:"password",id:"outlined-basic3",label:"New password confirmation",variant:"outlined",fullWidth:!0,size:"small",error:!!h.confirmPassword,helperText:h.confirmPassword&&h.confirmPassword.message})})]}),Object(s.jsx)(q.a,{display:"flex",className:"justify-content-center mb-0 mt-2",children:Object(s.jsxs)($.a,{type:"submit",variant:"contained",color:"primary",style:{fontWeight:"600",width:"200px"},children:[n&&Object(s.jsx)(N.a,{className:t.loader}),"SAVE CHANGES"]})})]})]})})},be=function(e){var t=Object(x.a)({},e),a=t.type,i=t.setType,r=t.select,c=Object(L.useState)("Date Added"),o=Object(n.a)(c,2),l=o[0],d=o[1],u={theme:e.theme},b=P(u),h=Object(j.c)((function(e){return e.watchlist})).watchlist,m=Object(j.c)((function(e){return e.favorite})).favoritelist,p=function(e,t){i(t)},O=("watchlist"===r?h:m).filter((function(e){return"movie"===e.media_type})),f=("watchlist"===r?h:m).filter((function(e){return"tv"===e.media_type}));return Object(s.jsx)("div",{id:"main",children:Object(s.jsx)("div",{className:"container",style:{minHeight:"auto",paddingTop:"11px"},children:Object(s.jsxs)("div",{className:"movie_list",children:["favoritelist"===r||"watchlist"===r?Object(s.jsxs)(y.a,{container:!0,className:b.option,children:["watchlist"===r?"My Watchlist":"My Favorites",Object(s.jsx)(H,{classes:b,select:r,type:a,handleChange:p,movieList:O,tvList:f,theme:e.theme}),Object(s.jsx)(y.a,{item:!0,children:Object(s.jsx)(V,{classes:b,option:l,handleChange2:function(e){d(e.target.value)},theme:e.theme})})]}):"main"===r?null:Object(s.jsxs)(y.a,{container:!0,className:b.option,children:["Settings",Object(s.jsx)(H,{classes:b,select:r,type:a,handleChange:p,movieList:O,tvList:f,theme:e.theme})]}),"favoritelist"===r||"watchlist"===r?"movie"===a?O.length?O.sort((function(e,t){return"Date Added"===l?new Date(t.createdAt)-new Date(e.createdAt):"Release Date"===l?new Date(t.release_date)-new Date(e.release_date):t.popularity-e.popularity})).map((function(t){return Object(s.jsx)(T,{select:r,value:t,classes:b,theme:e.theme},t.id)})):"".concat("watchlist"===r?"You haven't added any movies to your watchlist.":"You haven't added any favorite movies."):f.length?f.sort((function(e,t){return"Date Added"===l?new Date(t.createdAt)-new Date(e.createdAt):"Release Date"===l?new Date(t.release_date)-new Date(e.release_date):t.popularity-e.popularity})).map((function(t){return Object(s.jsx)(T,{select:r,value:t,classes:b,theme:e.theme},t.id)})):"".concat("watchlist"===r?"You haven't added any TV shows to your watchlist.":"You haven't added any favorite TV shows."):"main"===r?Object(s.jsx)("div",{className:"main text-center display-4 font-weight-bold",children:Object(s.jsxs)("div",{className:"not-found",children:[Object(s.jsxs)("div",{className:"not-found__404",children:[Object(s.jsx)("span",{children:"4"}),Object(s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M176.938 24.03V75.44c-52.96 6.715-94.96 48.652-101.72 101.593H24.564v160.096h50.75c7.034 52.62 48.895 94.247 101.624 100.938V489.5H337v-51.374c53.01-6.453 95.158-48.183 102.22-101h50.811V177.03h-50.717C432.526 123.893 390.238 81.85 337 75.376V24.03H176.938zm18.687 18.69h122.688v139.75L257.25 243.5l-61.625-61.625V42.72zm61.656 17.436c-24.524 0-44.405 19.88-44.405 44.407 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.882 44.376-44.407 0-24.526-19.85-44.407-44.375-44.407zM43.25 195.72h139.78l61.032 61.03-61.718 61.688H43.25v-122.72zm288.25 0h139.844v122.718H332.188L270.5 256.75l61-61.03zm-226.406 16.624c-24.525 0-44.406 19.88-44.406 44.406 0 24.525 19.88 44.406 44.406 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zm304.344 0c-24.526 0-44.407 19.88-44.407 44.406 0 24.525 19.882 44.406 44.408 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zM257.25 269.938L318.313 331v139.813H195.625v-139.22l61.625-61.656zm.03 94.562c-24.524 0-44.405 19.88-44.405 44.406 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.88 44.376-44.406 0-24.525-19.85-44.406-44.375-44.406z"})}),Object(s.jsx)("span",{children:"4"})]}),Object(s.jsx)("span",{className:"not-found__title",children:"PAGE NOT FOUND"})]})}):Object(s.jsx)(je,Object(x.a)({},e))]})})})},he=Object(L.memo)(be),me=(a(290),function(e){var t=Object(x.a)({},e),a=t.setType,i=t.setSelect,r=t.select,c=Object(L.useState)(!1),o=Object(n.a)(c,2),l=o[0],d=o[1],u=Object(L.useState)(!1),j=Object(n.a)(u,2),b=j[0],h=j[1],m=P(e);return Object(s.jsx)(y.a,{className:m.bar+" border-right-0 border-left-0 "+("dark"===e.theme&&"border-top-0"),style:{border:"dark"===e.theme&&"1px solid rgb(49,49,49)"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{style:{borderBottom:"watchlist"!==r&&"4px solid #959595"},onMouseOver:function(){return d("overview")},onMouseOut:function(){return d(!1)},children:["Overview \xa0",Object(s.jsx)("span",{style:{fontSize:"10px"},children:"\u25bc"}),Object(s.jsxs)("div",{className:"position-absolute border text-dark",style:{zIndex:"1000",backgroundColor:"white",borderRadius:".25rem",visibility:"overview"===l?"visible":"hidden"},children:[Object(s.jsxs)("ul",{className:m.container,children:[Object(s.jsx)("li",{onClick:function(){i("main")},children:"Main"}),Object(s.jsxs)("li",{className:m.favorites,onMouseOver:function(){return h(!0)},onMouseOut:function(){return h(!1)},children:["Favorites ",Object(s.jsx)("span",{style:{fontSize:"10px",position:"absolute",right:"20px",top:"51%",transform:"translateY(-50%)"},children:"\u25ba"})]}),Object(s.jsx)("li",{onClick:function(){i("edit"),a("profile")},children:"Edit Profile"})]}),Object(s.jsx)("div",{className:m.listFavorites,style:{visibility:b?"visible":"hidden"},onMouseOver:function(){return h(!0)},onMouseOut:function(){return h(!1)},children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:function(){i("favoritelist"),a("movie")},children:"Movies"}),Object(s.jsx)("li",{onClick:function(){i("favoritelist"),a("tv")},children:"TV Shows"})]})})]})]}),Object(s.jsxs)("li",{style:{borderBottom:"watchlist"===r&&"4px solid #959595"},className:"mr-0",onMouseOver:function(){return d("watchlist")},onMouseOut:function(){return d(!1)},children:["Watchlist \xa0",Object(s.jsx)("span",{style:{fontSize:"10px"},children:"\u25bc"}),Object(s.jsx)("div",{className:"position-absolute border text-dark",style:{zIndex:"1000",backgroundColor:"white",borderRadius:".25rem",visibility:"watchlist"===l?"visible":"hidden"},children:Object(s.jsxs)("ul",{className:m.container,children:[Object(s.jsx)("li",{onClick:function(){a("movie"),i("watchlist")},children:"Movies"}),Object(s.jsx)("li",{onClick:function(){a("tv"),i("watchlist")},children:"TV Shows"})]})})]})]})})})}),pe=Object(L.memo)(me),xe=function(){var e=Object(L.useState)("watchlist"),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(L.useState)("movie"),c=Object(n.a)(r,2),o=c[0],l=c[1],d=document.getElementsByTagName("HTML")[0].getAttribute("data-theme");return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{children:Object(s.jsx)(h,{})}),Object(s.jsx)(pe,{type:o,setType:l,select:a,setSelect:i,theme:d}),Object(s.jsx)(he,{type:o,setType:l,select:a,setSelect:i,theme:d})]})},Oe=Object(L.memo)(xe);t.default=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Oe,{props:e}),Object(s.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=22.4b148842.chunk.js.map
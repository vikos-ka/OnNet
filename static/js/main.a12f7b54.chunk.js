(this.webpackJsonponnet=this.webpackJsonponnet||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var a=n(133),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9929cf51-9531-43cd-b9e4-397389514684"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},o={getCaptcha:function(){return r.get("security/get-captcha-url")}}},108:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(35),r=n(9),c={dialogs:[{id:1,name:"Max"},{id:2,name:"Oliver"},{id:3,name:"Andrew"},{id:4,name:"Mike"},{id:5,name:"Tom"},{id:6,name:"Miles"},{id:7,name:"Vika"}],messages:[{id:1,message:"Hello"},{id:2,message:"Hi"},{id:3,message:"Yo"},{id:4,message:"How are you"},{id:5,message:"What's up"},{id:6,message:"Miles"},{id:7,message:"Vika"}]},s=function(e){return{type:"dialogs/SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},109:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return _})),n.d(t,"f",(function(){return v}));var a=n(6),r=n.n(a),c=n(13),s=n(35),i=n(9),o=n(10),u="users/FOLLOW",l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},m=function(e){return{type:u,userId:e}},f=function(e){return{type:"users/UNFOLLOW",userId:e}},d=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"users/FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},E=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(!0)),a(d(e)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,a(p(!1)),a({type:"users/SET_USERS",users:c.items}),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(n,e,o.d.follow.bind(o.d),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(n,e,o.d.unfollow.bind(o.d),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!1}):e}))});case"users/SET_USERS":return Object(i.a)({},e,{users:Object(s.a)(t.users)});case"users/SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"users/FOLLOWING_IN_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},137:function(e,t,n){e.exports=n.p+"static/media/loader.144c7166.svg"},163:function(e,t,n){e.exports=n(288)},168:function(e,t,n){},23:function(e,t,n){e.exports={header:"Header_header__Hs2EL",logo:"Header_logo__3xv7c",serviceBar:"Header_serviceBar__PB_82",topSearch:"Header_topSearch__-A4wJ",searchBtn:"Header_searchBtn__mt2J7",btn:"Header_btn__29VYW",login__block:"Header_login__block__1sUw3"}},24:function(e,t,n){e.exports={nav:"Navbar_nav__1zlGi",item:"Navbar_item__2cd5F",activeLink:"Navbar_activeLink__2VlGu",active:"Navbar_active__LQPUz"}},25:function(e,t,n){e.exports={form__container:"Login_form__container__2EFcB",form__field:"Login_form__field__2r-D5",input__right:"Login_input__right__1Iq2c",checkbox:"Login_checkbox__Q1wpu",loginBtn:"Login_loginBtn__2_cpY"}},288:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(63),s=n.n(c),i=(n(168),n(50)),o=n(51),u=n(61),l=n(52),m=n(62),f=n(30),d=n(16),p=n(19),h=n(8),E=n(97),g=n(108),_={friends:[{id:1,name:"Max",ava:"https://klike.net/uploads/posts/2019-06/1561878174_4.jpg"},{id:2,name:"Oliver",ava:"https://klike.net/uploads/posts/2019-06/1561878099_15.jpg"},{id:3,name:"Andrew",ava:"https://klike.net/uploads/posts/2019-06/1561878174_4.jpg"},{id:4,name:"Mike",ava:"https://klike.net/uploads/posts/2019-06/1561878096_2.jpg"},{id:5,name:"Tom",ava:"https://www.meme-arsenal.com/memes/b1960e7d08b8a78c37bfce0dfb980651.jpg"},{id:6,name:"Miles",ava:"https://klike.net/uploads/posts/2019-06/1561878099_15.jpg"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;arguments.length>1&&arguments[1];return e},b=n(109),O=n(6),w=n.n(O),S=n(13),j=n(9),N=n(10),k=n(31),y={usersId:null,email:null,login:null,isAuth:!1,captcha:null},T=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},x=function(e){return{type:"auth/GET_CAPTCHA_URL",data:{captcha:e}}},P=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n,a,r,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.email,s=a.login,t(T(r,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.logout();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(j.a)({},e,{},t.data,{isAuth:!0});case"auth/GET_CAPTCHA_URL":return Object(j.a)({},e,{},t.payload);default:return e}},I=n(134),L=n(131),U={initialised:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALISED_SUCCESS":return Object(j.a)({},e,{initialised:!0});default:return e}},F=Object(h.c)({profilePage:E.b,dialogsPage:g.a,friendsPage:v,usersPage:b.a,authReducer:C,form:L.a,app:R}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,G=Object(h.e)(F,M(Object(h.a)(I.a))),H=n(69),D=n.n(H),B=n(23),W=n.n(B),V=function(e){return r.a.createElement("header",{className:W.a.header},r.a.createElement("div",{className:W.a.logo},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-power-off"}),"nNet")),r.a.createElement("div",{className:W.a.serviceBar},r.a.createElement("div",{className:W.a.topSearch},r.a.createElement("form",{action:"",method:"post"},r.a.createElement("input",{type:"text",placeholder:"Search People, Groups, Pages etc"}),r.a.createElement("button",{id:W.a.searchBtn},r.a.createElement("i",{className:"fas fa-search"}))))),r.a.createElement("div",{className:W.a.login__block},e.isAuth?r.a.createElement("div",null," ",e.login,r.a.createElement("button",{className:W.a.btn,onClick:e.logoutThunk},"Logout")):r.a.createElement(d.b,{to:"/login"},r.a.createElement("button",{className:W.a.btn},"Login"))))},z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(V,this.props)}}]),t}(r.a.Component),Y=Object(p.b)((function(e){return{isAuth:e.authReducer.isAuth,login:e.authReducer.login}}),{logoutThunk:A})(z),J=n(24),q=n.n(J);var Q=function(){return r.a.createElement("nav",{className:q.a.nav},r.a.createElement("ul",null,r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/profile"},r.a.createElement("i",{className:"fas fa-user-circle"}),"My profile")),r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/dialogs"},r.a.createElement("i",{className:"fas fa-envelope"}),"Dialogs")),r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/friends"},r.a.createElement("i",{className:"fas fa-user-friends"}),"Friends")),r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/users"},r.a.createElement("i",{className:"fas fa-users"}),"Find Users")),r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/news"},r.a.createElement("i",{className:"fas fa-rss"}),"News")),r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/music"},r.a.createElement("i",{className:"fas fa-headphones-alt"}),"Music")),r.a.createElement("li",{className:q.a.item},r.a.createElement(d.b,{to:"/settings"},r.a.createElement("i",{className:"fas fa-cogs"}),"Settings"))))},X=n(91),K=n(130),Z=n(38),$=n(25),ee=n.n($),te=n(64),ne=Object(K.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("h2",null,"Login Page"),r.a.createElement("div",{className:ee.a.form__field+" "+ee.a.input__right},r.a.createElement(X.a,{component:Z.b,validate:[te.b],name:"email",id:"login",placeholder:"Your email"})),r.a.createElement("div",{className:ee.a.form__field+" "+ee.a.input__right},r.a.createElement(X.a,{component:Z.b,validate:[te.b],type:"password",name:"password",id:"pass",placeholder:"Password"})),r.a.createElement("div",{id:"checkbox",className:ee.a.form__field},r.a.createElement("label",null,r.a.createElement(X.a,{component:Z.b,type:"checkbox",name:"rememberMe",id:"rememberMe"}),"Remember me on this computer")),e.captcha&&r.a.createElement("img",{src:e.captcha,alt:"captcha"}),e.captcha&&Object(Z.a)("Symbols","captcha",[te.b],Z.b),e.error&&r.a.createElement("div",null,e.error),r.a.createElement("button",{id:"loginBtn",className:ee.a.form__field+" "+ee.a.loginBtn,type:"submit"},"Login"))})),ae=Object(p.b)((function(e){return{captcha:e.authReducer.captcha,isAuth:e.authReducer.isAuth}}),{loginThunk:function(e,t,n,a){return function(){var r=Object(S.a)(w.a.mark((function r(c){var s,i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,N.a.login(e,t,n,a);case 2:0===(s=r.sent).data.resultCode?c(P()):(10===s.data.resultCode&&c(x()),i=s.data.messages.length>0?s.data.messages[0]:"some error",c(Object(k.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},logoutThunk:A,getCaptchaThunk:function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.c.getCaptcha();case 2:n=e.sent,a=n.data.url,t(x(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement("div",{className:ee.a.form__container},r.a.createElement(ne,{onSubmit:function(t){e.loginThunk(t.email,t.password,t.rememberMe,t.captcha)},captcha:e.captcha}))})),re=n(72),ce=n.n(re);var se=function(){return r.a.createElement("section",{className:ce.a.music},r.a.createElement("div",{className:ce.a.cover}),r.a.createElement("div",{className:ce.a.user},"Ava + disc"))},ie=n(73),oe=n.n(ie);var ue=function(){return r.a.createElement("section",{className:oe.a.news},r.a.createElement("div",{className:oe.a.cover}),r.a.createElement("div",{className:oe.a.user},"Ava + disc"))},le=n(74),me=n.n(le);var fe=function(){return r.a.createElement("section",{className:me.a.settings},r.a.createElement("div",{className:me.a.cover}),r.a.createElement("div",{className:me.a.user},"Ava + disc"))},de=n(47),pe=r.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),he=r.a.lazy((function(){return n.e(5).then(n.bind(null,302))})),Ee=r.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),ge=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandledErrors=function(e){console.error(e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.initialiseThunk(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialised?r.a.createElement("div",{className:D.a.wrapper},r.a.createElement(Y,null),r.a.createElement(Q,null),r.a.createElement("main",{className:D.a.wrapperContent},r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{to:"/profile"})}}),r.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:de.a},r.a.createElement(Ee,null))}}),r.a.createElement(f.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:de.a},r.a.createElement(pe,null))}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(a.Suspense,{fallback:de.a},r.a.createElement(he,null))}}),r.a.createElement(f.b,{path:"/music",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(f.b,{path:"/news",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(f.b,{path:"/settings",render:function(){return r.a.createElement(fe,null)}})))):r.a.createElement("div",{className:D.a.preloaderWrapper},r.a.createElement(de.a,null))}}]),t}(r.a.Component),_e=Object(h.d)(f.g,Object(p.b)((function(e){return{initialised:e.app.initialised}}),{initialiseThunk:function(){return function(e){var t=e(P());Promise.all([t]).then((function(){return e({type:"app/INITIALISED_SUCCESS"})}))}}}))(ge),ve=function(e){return r.a.createElement(d.a,{basename:"/OnNet"},r.a.createElement(p.a,{store:G},r.a.createElement(_e,null)))};s.a.render(r.a.createElement(ve,null),document.querySelector("#root"))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n(70),r=n(0),c=n.n(r),s=n(94),i=n.n(s),o=n(91),u=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return c.a.createElement("div",{className:i.a.form__control+" "+(r?i.a.error:"")},c.a.createElement("div",null,n.children),r&&c.a.createElement("span",null,t.error))},l=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(o.a,Object.assign({olaceholder:e,name:t,validator:n,component:a},r))," ",s)},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,n)))}},47:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(137),s=n.n(c);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:s.a,alt:"spinner"}))}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={wrapper:"App_wrapper__2fW0f",wrapperContent:"App_wrapperContent__2NBCt",preloaderWrapper:"App_preloaderWrapper__1gvDF"}},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},94:function(e,t,n){e.exports={form__control:"Forms_form__control__2r_U-",error:"Forms_error__2ywVw"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return E})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return _}));var a=n(6),r=n.n(a),c=n(13),s=n(35),i=n(9),o=n(10),u=n(31),l="profile/ADD-POST",m={posts:[{id:1,message:"Hi! How are you?",like:12,comment:9999},{id:2,message:"It's my first page",like:40,comment:1},{id:3,message:"Some text",like:12,comment:9999},{id:4,message:"Mike",like:12,comment:9999},{id:5,message:"Tom",like:12,comment:9999},{id:6,message:"Miles",like:12,comment:9999},{id:7,message:"Vika",like:12,comment:9999}],profile:null,status:""},f=function(e){return{type:l,newPostText:e}},d=function(e){return{type:"profile/SET_STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"profile/SET_USER_PHOTO",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().authReducer.userId,t.next=3,o.b.saveProfile(e);case 3:0===(s=t.sent).data.resultCode?n(p(c)):(i=s.data.messages.length>0?s.data.messages[0]:"some error",n(Object(u.a)("editProfile",{_error:i})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:Math.ceil(100*Math.random())+8,message:t.newPostText,like:12,comment:9999};return Object(i.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case"profile/DELETE-POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"profile/SET_STATUS":return Object(i.a)({},e,{status:t.status});case"profile/SET_USER_PHOTO":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.a12f7b54.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(71),a=(n(25),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bab29b53-a707-47b5-9681-8a903fcb2d49"}})),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("obsolete method. Please use profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status/",{status:e})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(43),a=n(5),u={messages:[{id:1,message:"How is your it-kamasutra"},{id:2,message:"Hi"},{id:3,message:"Yo"},{id:4,message:"Yo"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"}]},o=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_BODY":return Object(a.a)(Object(a.a)({},e),{},{newMessageBody:t.body});case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},131:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__x7UOB"}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6"}},133:function(e,t){e.exports="data:image/jpeg;base64,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"},137:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(11),o=n(8),c=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){return Object(u.b)(c)((function(t){return t.isAuth?a.a.createElement(e,t):a.a.createElement(o.a,{to:"/login"})}))}},15:function(e,t,n){e.exports={nav:"NavBar_nav__wuJZA",item:"NavBar_item__37ciS",activeLink:"NavBar_activeLink__22vtT"}},163:function(e,t,n){e.exports=n(290)},168:function(e,t,n){},169:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return A})),n.d(t,"f",(function(){return v}));var r=n(10),a=n.n(r),u=n(20),o=n(43),c=n(5),s=n(12),i=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),r):e}))},l={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},d=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(d(!0)),r(p(e)),n.next=4,s.c.getUsers(e,t);case 4:u=n.sent,r(d(!1)),r({type:"SET_USERS",users:u.items}),r({type:"SET_TOTAL_USERS_COUNT",totalCount:u.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(u(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),A=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,s.c.follow.bind(s.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,s.c.unfollow.bind(s.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},290:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),u=n(64),o=n.n(u),c=(n(168),n(35)),s=n(36),i=n(39),l=n(38),f=(n(169),n(15)),m=n.n(f),p=n(14),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(p.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/news",activeClassName:m.a.activeLink},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/settings",activeClassName:m.a.activeLink},"Settings")))},E=n(8),g=n(11),b=n(25),A=n(55),v=n(131),O=n.n(v),h=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,u=e.onPageChanged,o=Math.ceil(t/n),c=[],s=1;s<=o;s++)c.push(s);return a.a.createElement("div",null,c.map((function(e){return a.a.createElement("span",{className:r===e&&O.a.selectedPage,onClick:function(t){u(e)}},e)})))},C=n(132),B=n.n(C),j=n(133),S=n.n(j),y=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,u=e.follow;return a.a.createElement("div",{key:t.id},a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/profile/".concat(t.id)},a.a.createElement("img",{src:t.photos.small?t.photos.small:S.a,className:B.a.userPhoto,alt:""}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){u(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},I=function(e){for(var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,u=e.onPageChanged,o=e.users,c=Object(A.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]),s=Math.ceil(c.totalUsersCount/c.pageSize),i=[],l=1;l<=s;l++)i.push(l);return a.a.createElement("div",null,a.a.createElement(h,{currentPage:t,onPageChanged:u,totalUsersCount:n,pageSize:r}),a.a.createElement("button",{onClick:c.getUsers},"Get users"),o.map((function(e){return a.a.createElement(y,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow})})))},P=(n(87),n(65)),w=n(12),x=(n(137),n(134)),z=Object(x.a)((function(e){return e.usersPage.users}),(function(e){return e})),L=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},Q=function(e){return e.usersPage.currentPage},T=function(e){return e.usersPage.isFetching},W=function(e){return e.usersPage.followingInProgress},H=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props,r=n.pageSize;(0,n.requestUsers)(t,r)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(P.a,null):null,a.a.createElement(I,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),V=Object(g.b)((function(e){return{users:z(e),pageSize:L(e),totalUsersCount:N(e),currentPage:Q(e),isFetching:T(e),followingInProgress:W(e)}}),{follow:b.b,unfollow:b.f,setCurrentPage:b.d,toggleFollowingProgress:b.e,requestUsers:b.c})(H),U=n(92),X=n.n(U),k=function(e){return a.a.createElement("header",{className:X.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/file/app/client/thumb/0c7243cd-eec9-4acd-8a31-15138c3a28c8_200x200.png?1589734502634",alt:"logo"}),a.a.createElement("div",{className:X.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Logout")):a.a.createElement(p.b,{to:"/login"},"Login")))},R=(n(71),n(10)),D=n.n(R),G=n(20),Y=n(5),F=n(44),M="samurai-network/auth/SET_USER_DATA",q={userId:null,email:null,login:null,isAuth:!1},Z=function(e,t,n,r){return{type:M,payload:{userId:e,email:t,login:n,isAuth:r}}},J=function(){return function(){var e=Object(G.a)(D.a.mark((function e(t){var n,r,a,u,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,u=r.email,o=r.login,t(Z(a,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(Y.a)(Object(Y.a)({},e),t.payload);default:return e}},_=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(k,this.props)}}]),n}(r.Component),$=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(G.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(Z(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(_),ee=n(128),te=n(72),ne=n(33),re=n(52),ae=n.n(re),ue=Object(ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(ne.c)("Email","email",[te.b],ne.a),Object(ne.c)("Password","password",[te.b],ne.a,{type:"password"}),Object(ne.c)(null,"rememberMe",[],ne.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:ae.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Submit")))})),oe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(G.a)(D.a.mark((function r(a){var u,o;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.a.login(e,t,n);case 2:0===(u=r.sent).data.resultCode?a(J()):(o=u.data.messages.length>0?u.data.messages[0]:"Some error",a(Object(F.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return console.log(e),e.isAuth?a.a.createElement(E.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ce=n(9),se={initalized:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(Y.a)(Object(Y.a)({},e),{},{initalized:!0});default:return e}},le=n(95),fe=n(127),me={},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return e},de=n(136),Ee=n(129),ge=Object(ce.c)({profilePage:le.b,dialogsPage:fe.a,sidebar:pe,usersPage:b.a,auth:K,form:Ee.a,app:ie}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Ae=Object(ce.e)(ge,be(Object(ce.a)(de.a)));window.__store__=Ae;var ve=Ae,Oe=a.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),he=a.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Ce=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement($,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(E.b,{path:"/dialogs",render:(e=Oe,function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))})}),a.a.createElement(E.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(he,null))}}),a.a.createElement(E.b,{path:"/users",render:function(){return a.a.createElement(V,null)}}),a.a.createElement(E.b,{path:"/login",render:function(){return a.a.createElement(oe,null)}}))):a.a.createElement(P.a,null);var e}}]),n}(a.a.Component),Be=Object(ce.d)(E.f,Object(g.b)((function(e){return{initialized:e.app.initalized}}),{initializeApp:function(){return function(e){var t=e(J());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ce),je=function(){return a.a.createElement(p.a,null,a.a.createElement(g.a,{store:ve},a.a.createElement(Be,null)))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(je,null)),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(55),a=n(0),u=n.n(a),o=n(88),c=n(52),s=n.n(c),i=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,o=r&&n;return u.a.createElement("div",{className:"".concat(s.a.formControl," ").concat(o&&s.a.error)},u.a.createElement("div",null,a),u.a.createElement("div",null,o&&u.a.createElement("span",null,r)))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return u.a.createElement(i,e,u.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return u.a.createElement(i,e,u.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return u.a.createElement("div",null,u.a.createElement(o.a,Object.assign({placeholder:e,validate:n,component:r,name:t},a))," ",c)}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__ajVyF",error:"FormsControls_error__35B8G",formSummaryError:"FormsControls_formSummaryError__3e7lO"}},65:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(87),o=n.n(u);t.a=function(){return a.a.createElement("div",null,a.a.createElement("img",{src:o.a,alt:""}))}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},87:function(e,t,n){e.exports=n.p+"static/media/808.e70633c6.gif"},92:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(10),a=n.n(r),u=n(20),o=n(43),c=n(5),s=n(12),i={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Hi, how are you?",likesCount:12}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.98b97036.chunk.js.map
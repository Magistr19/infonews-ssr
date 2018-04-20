webpackJsonp([4],{100:function(t,e,n){"use strict";var r=n(12),o=n.n(r),a={getAllCategories:function(){return o.a.get("/api/allCategories").then(function(t){return t.data}).catch(function(t){return[]})},addNewCategory:function(t){return o.a.post("/api/addCategory",t).then(function(t){return t.data}).catch(function(t){throw new Error(t.response.data.message)})},editCategory:function(t){return o.a.put("/api/editCategory",t).then(function(t){return t.data}).catch(function(t){throw new Error(t.response.data.message)})},removeCategory:function(t){return o.a.delete("/api/removeCategory/"+t).then(function(t){return t.data}).catch(function(t){throw new Error(t.response.data.message)})}};e.a=a},101:function(t,e,n){"use strict";var r=n(12),o=n.n(r),a={getPostsByCategory:function(t,e,n){return o.a.get("/api/posts/"+t,{params:{from:e,to:n}}).then(function(t){return t.data}).catch(function(t){return[]})},getLastPostsInAllCategories:function(t){return o.a.get("/api/lastPosts").then(function(t){return t.data}).catch(function(t){return[]})},getPostById:function(t){return o.a.get("/api/post/"+t).then(function(t){return t.data}).catch(function(t){throw new Error(t)})},getAllPostsPreview:function(t){return o.a.get("/api/postsAll",{headers:{token:t}}).then(function(t){return t.data}).catch(function(t){return[]})},addNewPost:function(t){return o.a.post("/api/addNewPost",t).then(function(t){return t}).catch(function(t){throw new Error(t.response.data.message)})},editPost:function(t,e){return o.a.put("/api/editPost/"+e,t).then(function(t){return t}).catch(function(t){throw new Error(t.response.data.message)})},removePost:function(t){return o.a.delete("/api/removePost/"+t).then(function(t){return t}).catch(function(t){throw new Error(t.response.data.message)})}};e.a=a},102:function(t,e,n){"use strict";var r=n(12),o=n.n(r),a={getCurrentUser:function(t){return o.a.get("/api/getCurrentUser",{headers:{token:t}}).then(function(t){return t.data}).catch(function(){})},getAllUsers:function(){return o.a.get("/api/getAllUsers").then(function(t){return t.data}).catch(function(){return[]})},createNewUser:function(t){return o.a.post("/api/createNewUser",t).then(function(t){return t.data}).catch(function(t){throw new Error(t.response.data.message)})}};e.a=a},103:function(t,e,n){"use strict";function r(){return new s.c.Store({state:{postsList:[],currentPost:{_id:null,title:"",date:"",content:"",author:"",views:null,category:{},shortcat:""},categoriesList:[],users:[],currentUser:{},authToken:""},actions:{fetchLastPosts:function(t){var e=t.commit;return console.log("Fetch last posts"),c.a.postsApi.getLastPostsInAllCategories().then(function(t){return e("setPostsList",t)}).catch(function(t){return console.error(t)})},fetchPostsByCategory:function(t,e){var n=t.commit,r=e.category,o=e.from,a=e.to;return console.group("Fetch posts"),console.log("Category: ",r),console.log("From: ",o),console.log("To: ",a),console.groupEnd(),c.a.postsApi.getPostsByCategory(r,o,a).then(function(t){return n("setPostsList",t)}).catch(function(t){return console.error(t)})},fetchOnePost:function(t,e){var n=t.commit;return console.log("Fetch post: ",e),c.a.postsApi.getPostById(e).then(function(t){return n("setPost",t)}).catch(function(t){return console.log(t)})},fetchCategories:function(t){var e=t.commit;return console.log("Fetch categories"),c.a.categoriesApi.getAllCategories().then(function(t){e("setCategories",t)}).catch(function(t){return console.log("Error: ",t)})},logIn:function(t,e){var n=(t.commit,e.login),r=e.password;console.group("LogIn"),console.log("Login: ",n," Password: ",r),console.groupEnd()},logOut:function(t){t.commit;console.log("Logout")}},mutations:{setPostsList:function(t,e){t.postsList=e},setPost:function(t,e){t.currentPost=e},setCurrentUser:function(t,e){var n=e.user,r=e.token;t.currentUser=n,t.authToken=r,sessionStorage.setItem("infonews-token",r)},clearCurrentUser:function(t){t.authToken="",sessionStorage.removeItem("infonews-token"),t.currentUser={}},setCategories:function(t,e){t.categoriesList=e}},getters:{posts:function(t){return t.postsList},categories:function(t){return t.categoriesList},user:function(t){return t.currentUser},users:function(t){return t.users},currentPost:function(t){return t.currentPost}}})}e.a=r;var o=n(16),a=n.n(o),s=n(24),i=n(12),c=(n.n(i),n(99));a.a.use(s.c)},162:function(t,e){},166:function(t,e,n){var r=n(44)(n(96),n(169),null,null,null);t.exports=r.exports},167:function(t,e,n){function r(t){n(162)}var o=n(44)(n(97),n(168),r,null,null);t.exports=o.exports},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{fixed:"fixed",app:"app"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-toolbar",[n("v-toolbar-title",[t._v("Категории")])],1),n("v-list",{attrs:{dense:"dense"}},t._l(t.categories,function(e,r){return n("v-list-tile",{key:r},[n("v-btn",{attrs:{to:"/categories/"+e.link,flat:"flat"}},[t._v(t._s(e.title))])],1)}))],1),n("v-toolbar",{attrs:{fixed:"fixed",app:"app"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[n("span",{staticClass:"red--text"},[t._v("Info")]),n("span",[t._v("News")])])],1)],1)],1)},staticRenderFns:[]}},169:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:"dark"}},[n("appHeader"),n("v-content",[n("v-container",{attrs:{fluid:"fluid"}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1),n("v-footer",{attrs:{fixed:"fixed",app:"app"}},[n("span",[t._v("© 2018")])])],1)},staticRenderFns:[]}},239:function(t,e,n){function r(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./categoryView.vue":[240,2],"./indexView.vue":[241,1],"./postView.vue":[242,0]};r.keys=function(){return Object.keys(o)},t.exports=r,r.id=239},71:function(t,e){t.exports={index:{title:"InfoNews - Главная",description:"My Vuetify.js Project",keywords:"vue 2.0, vuetify"},category:{title:"InfoNews - Рубрики",description:"",keywords:""},post:{title:"InfoNews",description:"",keywords:""}}},72:function(t,e,n){"use strict";function r(t){var e=n.i(j.a)(),r=n.i(B.a)();return n.i($.sync)(e,r),{app:new i.a({router:r,store:e,ssrContext:t,render:function(t){return t(F.a)}}),router:r,store:e}}e.a=r;var o=n(105),a=n.n(o),s=n(16),i=n.n(s),c=n(223),u=n.n(c),f=n(188),d=n.n(f),l=n(215),p=n.n(l),g=n(201),h=n.n(g),v=n(213),w=n.n(v),m=n(65),y=n.n(m),P=n(37),C=n.n(P),_=n(206),k=n.n(_),x=n(222),A=n.n(x),I=n(197),E=n.n(I),b=n(66),L=n.n(b),V=n(199),N=n.n(V),U=n(219),T=n.n(U),S=n(171),M=(n.n(S),n(166)),F=n.n(M),O=n(94),j=n(103),B=n(98),$=n(238);n.n($);i.a.use(u.a,{components:{VApp:d.a,VNavigationDrawer:p.a,VFooter:h.a,VList:w.a,VBtn:y.a,VIcon:C.a,VGrid:k.a,VToolbar:A.a,VCard:E.a,transitions:L.a,VDivider:N.a,VSubheader:T.a}}),a()(O.a).forEach(function(t){i.a.component(t,O.a[t])})},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(73),o=n.n(r),a=n(16),s=(n.n(a),n(74)),i=(n.n(s),n(72)),c=n.i(i.a)(),u=c.app,f=c.router,d=c.store;window.__INITIAL_STATE__&&d.replaceState(window.__INITIAL_STATE__),f.onReady(function(){f.beforeResolve(function(t,e,n){var r=f.getMatchedComponents(t),a=f.getMatchedComponents(e),s=!1,i=r.filter(function(t,e){return s||(s=a[e]!==t)});if(!i.length)return n();o.a.all(i.map(function(e){if(e.asyncData)return e.asyncData({store:d,route:t})})).then(function(){n()}).catch(n)}),u.$mount("#app")})},94:function(t,e,n){"use strict";var r=n(167),o=n.n(r);e.a={appHeader:o.a}},95:function(t,e,n){"use strict";var r=n(71);e.a={watch:{$route:function(){this.setMeta()}},created:function(){return},mounted:function(){this.setMeta()},methods:{setMeta:function(){if("undefined"!=typeof document){var t=r[this.$route.name]||{};document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords)}}}}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(95);n(24);e.default={mixins:[r.a]}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(75),o=n.n(r),a=n(24);e.default={data:function(){return{drawer:!0}},computed:o()({},n.i(a.a)(["categories"]))}},98:function(t,e,n){"use strict";(function(t){function r(t,e){return{name:e,path:t,meta:c[e],component:function(t){return n(239)("./"+e+"View.vue").then(t)}}}function o(){var e=new i.a({base:t,mode:"history",scrollBehavior:function(){return{y:0}},routes:[r("/","index"),r("/post/:id","post"),r("/categories/:cat","category"),{path:"*",redirect:"/"}]});return e.beforeEach(function(t,e,n){"undefined"!=typeof ga&&(ga("set","page",t.path),ga("send","pageview")),n()}),e}e.a=o;var a=n(16),s=n.n(a),i=n(170),c=n(71);s.a.use(i.a)}).call(e,"/")},99:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(12),o=n.n(r),a=n(100),s=n(101),i=n(102),c={categoriesApi:a.a,postsApi:s.a,usersApi:i.a,logIn:function(t){return o.a.post("/api/logIn",t).then(function(t){return t.data}).catch(function(t){throw new Error(t.response.data.message)})},logOut:function(){return o.a.post("/api/logOut").then(function(t){return t.data}).catch(function(t){throw new Error(t.response.data.message)})}}}},[93]);
webpackJsonp([0],{622:function(t,e,s){function r(t){s(632)}var n=s(140)(s(626),s(636),r,null,null);t.exports=n.exports},626:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(209),n=s.n(r),a=s(92);e.default={asyncData:function(t){var e=t.store,s=t.route;return e.dispatch("fetchOnePost",s.params.id)},computed:n()({},s.i(a.a)(["currentPost"]))}},628:function(t,e,s){e=t.exports=s(6)(!1),e.push([t.i,".post-content>*{color:#fff!important}",""])},632:function(t,e,s){var r=s(628);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(7)("01d22e23",r,!0,{})},636:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",[s("v-flex",[s("v-card",[s("v-card-media",{attrs:{src:"https://infonews-payareli.herokuapp.com"+t.currentPost.picture,height:"400px"}}),s("v-card-title",[s("h1",{staticClass:"headline"},[t._v(t._s(t.currentPost.title))])]),s("v-card-text",{staticClass:"post-content",domProps:{innerHTML:t._s(t.currentPost.content)}}),s("v-card-actions",[s("v-layout",{attrs:{row:"row",wrap:"wrap","justify-content-between":"justify-content-between"}},[s("v-flex",[s("span",{staticClass:"px-2"},[s("v-icon",{attrs:{left:"left"}},[t._v("remove_red_eye")]),s("span",{staticClass:"ml-1"},[t._v(t._s(t.currentPost.views))])],1),s("span",{staticClass:"px-2"},[s("v-icon",{attrs:{left:"left"}},[t._v("query_builder")]),s("span",{staticClass:"ml-2"},[t._v(t._s(t._f("toDateString")(t.currentPost.date)))])],1)]),s("v-flex",[s("span",{staticClass:"px-2"},[s("v-icon",{attrs:{left:"left"}},[t._v("account_circle")]),s("span",{staticClass:"ml-2"},[t._v(t._s(t.currentPost.author))])],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
webpackJsonp([2],{293:function(t,e,s){function o(t){s(303)}var r=s(50)(s(297),s(306),o,null,null);t.exports=r.exports},296:function(t,e,s){"use strict";var o=function(t){var e=new Date(t);return(e.getDate()<10?"0"+e.getDate():e.getDate())+"."+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"."+e.getFullYear()+" - "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())};e.a=o},297:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(85),r=s.n(o),a=s(28),i=s(296);e.default={asyncData:function(t){var e=t.store,s=t.route;return e.dispatch("fetchCategories").then(function(){return e.dispatch("fetchPostsByCategory",{category:s.params.cat,from:0,to:5,sort:""})})},data:function(){return{from:0,to:5,selectedSort:"",sortOptions:[{value:"",text:"За умовчанням"},{value:"new",text:"Спочатку нові"},{value:"old",text:"Спочатку старі"},{value:"popular",text:"Спочатку популярні"}]}},computed:r()({},s.i(a.a)(["posts","categories"]),{categoryTitle:function(){var t=this,e=this.categories.find(function(e){return e.link===t.$route.params.cat});return e?e.title:""}}),methods:r()({},s.i(a.b)(["fetchPostsByCategory"]),{cyrToLat:i.a,loadNext:function(){this.from+=5,this.to+=5,this.fetchPostsByCategory({category:this.$route.params.cat,from:this.from,to:this.to,sort:this.selectedSort})},loadPrev:function(){this.to=this.from,this.from-5?this.from-=5:this.from=0,this.fetchPostsByCategory({category:this.$route.params.cat,from:this.from,to:this.to,sort:this.selectedSort})}}),watch:{$route:function(){this.fetchPostsByCategory({category:this.$route.params.cat,from:0,to:5,sort:this.selectedSort}),this.from=0,this.to=5,this.selectedSort=""},selectedSort:function(t){this.fetchPostsByCategory({category:this.$route.params.cat,from:this.from,to:this.to,sort:t})}}}},300:function(t,e,s){e=t.exports=s(0)(!1),e.push([t.i,"",""])},303:function(t,e,s){var o=s(300);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(1)("03d40570",o,!0,{})},306:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",[s("v-flex",[s("h1",{staticClass:"headline mb-3"},[t._v(t._s(t.categoryTitle))]),s("v-select",{attrs:{items:t.sortOptions,label:"Сортувати по"},model:{value:t.selectedSort,callback:function(e){t.selectedSort=e},expression:"selectedSort"}}),t.from>0?s("v-btn",{attrs:{block:"block"},on:{click:t.loadPrev}},[t._v("Попередні 5")]):t._e(),t._l(t.posts,function(e,o){return[s("v-card",{staticClass:"px-3 py-3",attrs:{to:"/post/"+e._id,ripple:"ripple"}},[s("v-layout",{attrs:{row:"row",wrap:"wrap"}},[s("v-flex",{attrs:{xs12:"xs12",md3:"md3",lg4:"lg4"}},[s("img",{staticClass:"d-block",staticStyle:{"max-width":"100%"},attrs:{src:"https://infonews-payareli.herokuapp.com"+e.picture}})]),s("v-flex",{attrs:{xs12:"xs12",md9:"md9",lg8:"lg8"}},[s("v-layout",{staticStyle:{height:"100%"},attrs:{column:"column"}},[s("v-card-title",[s("h3",{staticClass:"title"},[t._v(t._s(e.title))])]),s("v-card-text",[s("p",[t._v(t._s(e.shortcat))])]),s("v-card-actions",{staticStyle:{"margin-top":"auto"}},[s("v-layout",{attrs:{row:"row",wrap:"wrap","justify-content-between":"justify-content-between"}},[s("v-flex",[s("span",{staticClass:"px-2"},[s("v-icon",{attrs:{left:"left"}},[t._v("remove_red_eye")]),s("span",{staticClass:"ml-1"},[t._v(t._s(e.views))])],1),s("span",{staticClass:"px-2"},[s("v-icon",{attrs:{left:"left"}},[t._v("query_builder")]),s("span",{staticClass:"ml-2"},[t._v(t._s(t.cyrToLat(e.date)))])],1)]),s("v-flex",[s("span",{staticClass:"px-2"},[s("v-icon",{attrs:{left:"left"}},[t._v("account_circle")]),s("span",{staticClass:"ml-2"},[t._v(t._s(e.author))])],1)])],1)],1)],1)],1)],1)],1),s("v-divider")]}),t.posts.length>=5?s("v-btn",{attrs:{block:"block"},on:{click:t.loadNext}},[t._v("Наступні 5")]):t._e()],2)],1)},staticRenderFns:[]}}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["article"],{f957:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-wrap"},[a("div",{staticClass:"header-cate-wrap"},[a("a-row",[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:4},lg:{span:2}}},[t._v("文章列表:")]),a("a-col",{attrs:{span:18}},[a("div",{staticClass:"mb-20"},[a("router-link",{attrs:{to:"/addArticle"}},[a("a-button",{attrs:{type:"primary"}},[t._v("添加")])],1)],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.articles,pagination:t.isShowPagination,rowKey:"tit"},scopedSlots:t._u([{key:"tit",fn:function(e){return a("span",{},[t._v(t._s(e))])}},{key:"faceUrl",fn:function(e){return a("span",{},[a("span",{staticClass:"text-overflow-20",attrs:{title:e}},[t._v(t._s(e))])])}},{key:"label",fn:function(e){return a("span",{},[a("a-tag",{key:e,attrs:{color:"blue"}},[t._v(t._s(e))])],1)}},{key:"action",fn:function(e){return a("span",{},[a("a",{on:{click:function(a){return t.editArticle(e)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return t.delArticle(e)}}},[t._v("删除")])],1)}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t._v("标题")])])],1)],1)],1)])},i=[],o=(a("cd17"),a("ed3b")),s=a("85f2"),r=a.n(s),c=a("9ab4"),l=a("60a3"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="article",e.isShowPagination=!1,e.columns=[{dataIndex:"tit",key:"tit",slots:{title:"customTitle"},scopedSlots:{customRender:"tit"}},{title:"图片",dataIndex:"faceUrl",key:"faceUrl",scopedSlots:{customRender:"faceUrl"}},{title:"文章分类",key:"label",dataIndex:"label",scopedSlots:{customRender:"label"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],e}return c["c"](e,t),r()(e.prototype,"articles",{get:function(){return this.$store.state.articleList},enumerable:!0,configurable:!0}),e.prototype.created=function(){this.$store.dispatch("getArticles")},e.prototype.editArticle=function(t){this.$router.push({path:"/addArticle",query:{id:t.id,label:t.label}})},e.prototype.delArticle=function(t){var e=this;o["a"].confirm({title:"提示",content:"确定要删除吗？",okText:"确认",cancelText:"取消",onOk:function(){e.$store.dispatch("delArticle",{id:t.id,label:t.label})}})},e.prototype.add=function(){this.$store.commit("add")},e.prototype.addAsync=function(t){this.$store.dispatch("asyncAdd",{num:t})},r()(e.prototype,"total",{get:function(){return this.$store.state.total},enumerable:!0,configurable:!0}),e=c["b"]([l["a"]],e),e}(l["c"]),d=u,p=d,f=a("2877"),y=Object(f["a"])(p,n,i,!1,null,"e627863e",null);e["default"]=y.exports}}]);
//# sourceMappingURL=article.bd13804f.js.map
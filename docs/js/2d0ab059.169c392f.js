(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0ab059"],{1400:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"HHh LpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),e.$q.screen.width>500?n("q-toolbar-title",[e._v("\n        QMediaPlayer "),n("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]):e._e(),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),n("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),n("q-drawer",{attrs:{bordered:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[e._v("Essential Links")]),n("q-separator")],1),n("essential-links")],1),n("q-page-container",[n("router-view")],1)],1)},r=[],s=n("b06b"),l=n("384e"),i={name:"MyLayout",components:{"essential-links":function(){return n.e("2d0cc070").then(n.bind(null,"4bd0"))}},data:function(){return{version:l["b"],leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:s["a"]}},o=i,c=n("2877"),u=Object(c["a"])(o,a,r,!1,null,null,null);t["default"]=u.exports}}]);
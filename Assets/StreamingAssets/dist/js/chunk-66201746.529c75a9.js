(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66201746"],{"47c6":function(e,t,r){},"739b":function(e,t,r){"use strict";r.r(t);var n,a,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{"nav-bar-options":e.navBarOptions},on:{"click-right":e.handleSave}},[r("van-cell-group",[r("van-field",{attrs:{placeholder:e.robotInfo.deviceName,maxlength:"16",formatter:e.formatter,"format-trigger":"onChange",clearable:""},model:{value:e.nick,callback:function(t){e.nick=t},expression:"nick"}})],1),r("div",{staticClass:"tips"},[e._v(e._s(e.$t("robotlanid_10431")))]),r("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showError,expression:"showError === true"}],staticClass:"error-msg"},[e._v(e._s(this.$t("lang_210831_105802_790c").replace("[string]","#&_*/")))])],1)},o=[],c=r("a34a"),s=r.n(c),u=r("2f62"),l=r("365c"),f=r("73c1"),v=r("0530"),h=r("60fe");function b(e,t,r,n,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){b(i,n,a,o,c,"next",e)}function c(e){b(i,n,a,o,c,"throw",e)}o(void 0)}))}}function d(e,t,r,n,a){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),a&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(a):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={data:function(){return{navBarOptions:{rightText:this.$t("common_save"),rightDisabled:this.saveBtnDisabled,nativeBack:"h5"!==this.$route.query.from},nick:null,authInfo:{},showError:!1}},computed:O(O({},Object(u["d"])(["robotInfo"])),{},{saveBtnDisabled:function(){return 0===this.nick.length}}),created:function(){var e=this;console.log(this.robotInfo),Object(v["b"])((function(){Object(v["c"])((function(t){e.authInfo=t}))}))},watch:{robotInfo:{handler:function(e){var t=e.nickName,r=e.deviceName;this.nick=t||r},immediate:!0}},methods:(n=Object(f["a"])(),a={formatter:function(e){this.showError=!1;var t=/[#&_*/]/g,r=RegExp(t);return r.test(e)&&(this.showError=!0),e.replace(t,"")},navigateBack:function(){var e="h5"===this.$route.query.from;e?this.$router.back():Object(v["g"])()},handleSave:function(){var e=this;return p(s.a.mark((function t(){var r,n,a,i;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.nick,!r){t.next=8;break}if(""!==r.trim()){t.next=5;break}return e.$toast(e.$t("rename_empty")),t.abrupt("return");case 5:r=r.trim(),t.next=9;break;case 8:r=e.robotInfo.deviceName;case 9:return n={todo:"SetDeviceNick",userid:e.authInfo.userid,did:e.robotInfo.sn,nick:r,auth:e.authInfo,class:e.robotInfo.mid},t.prev=10,t.next=13,Object(l["j"])(n);case 13:a=t.sent,i=a.result,"ok"===i?(e.$store.commit("SET_ROBOT_INFO",O(O({},e.robotInfo),{},{nickName:r})),Object(v["o"])({nickname:r}),Object(v["p"])("GLOBALAPP_MACHINE_RENAME"),Object(v["a"])(h["c"].ROBOT_RENAME,{page_title:"操控设置页",robot_nickname:r}),e.$toast(e.$t("common_save_success")),e.navigateBack()):e.$toast(e.$t("lang_200119_121247_e5ZD")),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](10),e.$toast(e.$t("atomlanid_10237"));case 21:case"end":return t.stop()}}),t,null,[[10,18]])})))()}},d(a,"handleSave",[n],Object.getOwnPropertyDescriptor(a,"handleSave"),a),a)},k=w,_=(r("d2b5"),r("2877")),j=Object(_["a"])(k,i,o,!1,null,"542b613e",null);t["default"]=j.exports},"73c1":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("47e2"),r("2241");var n=r("a34a"),a=r.n(n);var i=r("2af9");function o(e,t,r,n,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function c(e){o(i,n,a,c,s,"next",e)}function s(e){o(i,n,a,c,s,"throw",e)}c(void 0)}))}}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return function(t,r,n){var o=n.value;n.value=c(a.a.mark((function t(){var r,n,c,s=arguments;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(i["d"].loading(),r=s.length,n=new Array(r),c=0;c<r;c++)n[c]=s[c];return t.prev=2,t.next=5,o.call.apply(o,[this].concat(n));case 5:return t.abrupt("return",t.sent);case 8:t.prev=8,t.t0=t["catch"](2),e&&e.call.apply(e,[this,t.t0].concat(n));case 11:return t.prev=11,i["d"].hideLoading(),t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[2,8,11,14]])})))}}},d2b5:function(e,t,r){"use strict";r("47c6")}}]);
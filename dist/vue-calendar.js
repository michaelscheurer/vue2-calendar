!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueCalendar=t():e.vueCalendar=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=5)}([function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(m){var o=h++;r=f||(f=a()),t=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(10),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var a=c(e,t);return r(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=d[i.id];s.refs--,n.push(s)}t?(a=c(e,t),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,a){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(e,t){return c.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:o,exports:i,options:l}}},function(e,t,n){"use strict";var r=n(4),a=function(e){return e||(e=new Date),new Date(e.getFullYear(),e.getMonth(),1)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=t<0||t>6?0:t;var n=e.getDay(),r=new Date(e),a=r.getDate()-n+((0===n?-7:0)+t);return r.setDate(a),r>e?r.setDate(r.getDate()-7):r},i=function(e,t){return new Date(e.setMonth(e.getMonth()-t))},s=function(e,t,n){for(var r=[],i=(new Date).setHours(0,0,0,0),s=o(a(e),n),c=0;c<6;c++){for(var d=[],u=0;u<7;u++)d.push({weekDay:u,date:s,monthDay:s.getDate(),events:l(s,t),isToday:s.setHours(0,0,0,0)===i,isCurrentMonth:s.getMonth()===e.getMonth()}),s.setDate(s.getDate()+1);r.push(d)}return r},l=function(e,t){return t.filter(function(t){var n=new Date(t.start),r=t.end?new Date(t.end):new Date(t.start);return e.getTime()<=r.getTime()&&e.getTime()>=n.getTime()})},c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=r.a[e];return n?a.monthNameLong[t]:a.monthNameShort[t]},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=r.a[e];return n?a.dayNameLong[t]:a.dayNameShort[t]};t.a={shiftMonth:i,startOfWeek:o,localDayName:d,eventsForDate:l,buildCalendar:s,localMonthName:c,firstDateOfMonth:a}},function(e,t,n){"use strict";t.a={en:{showMore:"Show more",dayNameShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNameLong:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNameShort:["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."],monthNameLong:["January","February","March","April","May","June","July","August","September","October","November","December"]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n(7),r=t.a;e.export=r}.call(t,n(6)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";function r(e){n(8)}var a=n(11),o=n(27),i=n(2),s=r,l=i(a.a,o.a,s,null,null);t.a=l.exports},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("45b51f75",r,!0)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".vue-calendar{background:#fff;margin:0 auto}.calendar-body{margin:10px 0}.days-header{display:flex;border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;border-left:1px solid #e0e0e0}.day-label{flex:1;text-align:center;border-right:1px solid #e0e0e0}.day-number{text-align:right;margin-right:10px}.week-row{border-left:1px solid #e0e0e0;display:flex}.week-day-cell{flex:1;min-height:112px;padding:4px;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.week-day-cell.disabled-day{background-color:#f5f5f5}.week-day-cell.not-current-month>.day-number{color:#c3c3c3}.week-day-cell.today>.day-number{font-size:25px;font-weight:700;color:red}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],l=o[2],c=o[3],d={id:e+":"+a,css:s,media:l,sourceMap:c};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},function(e,t,n){"use strict";var r=n(3),a=n(12),o=n(17),i=n(22);t.a={props:{events:{type:Array,default:[]},locale:{type:String,default:"en"},firstDay:{type:Number|String,default:0},fullMonthNames:{type:Boolean,default:!0},fullDayNames:{type:Boolean,default:!1},showLimit:{type:Number,default:3},moreText:{type:String,default:"Show more"},disabled:{type:Object},highlight:{type:Object}},data:function(){return{showModal:!1,currentEventsList:null,currentMonthStart:r.a.firstDateOfMonth()}},computed:{calendar:function(){return r.a.buildCalendar(this.currentMonthStart,this.events,this.firstDay)}},methods:{changeMonth:function(e){this.currentMonthStart=e,this.$emit("monthChanged",e)},dayClick:function(e){this.$emit("dayClicked",e)},eventClicked:function(e){this.$emit("eventClicked",e)},showEventsModal:function(e){this.currentEventsList=e,this.showModal=!0},hideEventsModal:function(){this.showModal=!1}},filters:{dayToString:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return e=parseInt(e+n)%7,r.a.localDayName(t,e,a)}},components:{"calendar-header":a.a,"events-box":o.a,"events-modal":i.a}}},function(e,t,n){"use strict";function r(e){n(13)}var a=n(15),o=n(16),i=n(2),s=r,l=i(a.a,o.a,s,null,null);t.a=l.exports},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4536fba1",r,!0)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".calendar-header{display:flex;align-items:center}.header-left,.header-right{flex:1}.header-center{flex:3;text-align:center}.title{margin:0 5px}.next-month,.prev-month{cursor:pointer}",""])},function(e,t,n){"use strict";var r=n(3);t.a={props:["locale","fullMonthNames","firstDayOfMonth"],computed:{title:function(){return r.a.localMonthName(this.locale,this.firstDayOfMonth.getMonth(),this.fullMonthNames)}},methods:{goPrev:function(){var e=r.a.shiftMonth(this.firstDayOfMonth,1);this.$emit("changeMonth",e)},goNext:function(){var e=r.a.shiftMonth(this.firstDayOfMonth,-1);this.$emit("changeMonth",e)}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar-header"},[n("div",{staticClass:"header-left"},[e._t("header-left")],2),e._v(" "),n("div",{staticClass:"header-center"},[n("span",{staticClass:"prev-month",on:{click:function(t){t.stopPropagation(),e.goPrev(t)}}},[e._v(" < ")]),e._v(" "),n("span",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")]),e._v(" "),n("span",{staticClass:"next-month",on:{click:function(t){t.stopPropagation(),e.goNext(t)}}},[e._v(" > ")])]),e._v(" "),n("div",{staticClass:"header-right"},[e._t("header-right")],2)])},a=[],o={render:r,staticRenderFns:a};t.a=o},function(e,t,n){"use strict";function r(e){n(18)}var a=n(20),o=n(21),i=n(2),s=r,l=i(a.a,o.a,s,null,null);t.a=l.exports},function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("09c4161a",r,!0)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".event{cursor:pointer;font-size:12px;margin-bottom:2px;color:rgba(0,0,0,.87);padding:0 0 0 4px;height:18px;line-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#d4dcec;margin-left:4px}.more-link{cursor:pointer;padding-left:8px;padding-right:2px;color:rgba(0,0,0,.38);font-size:14px}",""])},function(e,t,n){"use strict";var r=n(4);t.a={props:{events:{type:Array,default:[]},showLimit:{type:Number,default:3},locale:{type:String,default:"en"}},computed:{moreText:function(){return r.a[this.locale].showMore}},methods:{eventClick:function(e){this.$emit("eventClicked",e)},eventClasses:function(e){return e.class?e.class:""},selectDay:function(){this.$emit("showMore",this.events)}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"events"},[e._l(e.events,function(t,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:r<=e.showLimit-1,expression:"index <= (showLimit - 1)"}],staticClass:"events-container",class:e.eventClasses(t),on:{click:function(n){n.stopPropagation(),e.eventClick(t)}}},[n("div",{staticClass:"event"},[e._v(" "+e._s(t.title)+" ")])])}),e._v(" "),e.events.length>e.showLimit?n("p",{staticClass:"more-link",on:{click:function(t){t.stopPropagation(),e.selectDay(t)}}},[e._v("\n    "+e._s(e.moreText)+"\n  ")]):e._e()],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},function(e,t,n){"use strict";function r(e){n(23)}var a=n(25),o=n(26),i=n(2),s=r,l=i(a.a,o.a,s,null,null);t.a=l.exports},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("42d174db",r,!0)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}.modal-container{width:300px;margin:0 auto;padding:20px 30px;background-color:#fff;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease;font-family:Helvetica,Arial,sans-serif}.modal-header h3{margin-top:0;color:#42b983}.modal-body{margin:20px 0}.modal-default-button{float:right}.modal-enter .modal-container,.modal-leave-active .modal-container{-webkit-transform:scale(1.1);transform:scale(1.1)}",""])},function(e,t,n){"use strict";t.a={props:{events:{type:Array,default:[]}},computed:{date:function(){return this.events.length?this.events[0].start.split("T")[0]:""}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[e._v("\n          Events for: "+e._s(e.date)+"\n        ")]),e._v(" "),n("div",{staticClass:"modal-body"},e._l(e.events,function(t){return n("div",{staticClass:"event"},[e._v("\n            "+e._s(t.title)+"\n          ")])})),e._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"modal-default-button",on:{click:function(t){e.$emit("hideModal")}}},[e._v("\n              close\n            ")])])])])])])},a=[],o={render:r,staticRenderFns:a};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-calendar"},[n("calendar-header",{attrs:{locale:e.locale,"full-month-names":e.fullMonthNames,"first-day-of-month":e.currentMonthStart},on:{changeMonth:e.changeMonth}}),e._v(" "),n("div",{staticClass:"calendar-body"},[n("div",{staticClass:"days-header"},e._l(7,function(t){return n("strong",{staticClass:"day-label"},[e._v(e._s(e._f("dayToString")(t-1,e.locale,e.firstDay,e.fullDayNames)))])})),e._v(" "),n("div",{staticClass:"days-container"},e._l(e.calendar,function(t){return n("div",{staticClass:"week-row"},e._l(t,function(t){return n("div",{staticClass:"week-day-cell",class:{today:t.isToday,"not-current-month":!t.isCurrentMonth},on:{click:function(n){n.stopPropagation(),e.dayClick(t)}}},[n("div",{staticClass:"day-number"},[e._v("\n                        "+e._s(t.monthDay)+"\n                    ")]),e._v(" "),n("events-box",{attrs:{events:t.events,"show-limit":e.showLimit},on:{eventClicked:e.eventClicked,showMore:e.showEventsModal}})],1)}))}))]),e._v(" "),e.showModal?n("events-modal",{attrs:{events:e.currentEventsList},on:{hideModal:e.hideEventsModal}}):e._e()],1)},a=[],o={render:r,staticRenderFns:a};t.a=o}])});
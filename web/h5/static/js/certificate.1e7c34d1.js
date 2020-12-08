(window.webpackJsonp=window.webpackJsonp||[]).push([["certificate"],{"2d31":function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d");var c=i("bd86"),a=(i("e7e5"),i("d399")),r=i("3ce7"),s=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}var o={data:function(){return{certificates:[]}},methods:{toCertificateDetail:function(t){this.$router.push({path:"/certificate/detail/".concat(t)})}},created:function(){var t=this;r.a.certificates({params:{targetId:this.$route.params.id}}).then((function(e){t.certificates=e.data})).catch((function(t){a.a.fail(t.message)}))},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(c.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(s.e)({isLoading:function(t){return t.isLoading}}))},f=i("a6c2"),l=Object(f.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"certificate-list"},[t.isLoading?i("e-loading"):t._e(),t._l(t.certificates,(function(e,c){return i("div",{key:c,staticClass:"certificate-list__item",on:{click:function(i){return t.toCertificateDetail(e.id)}}},[t._m(0,!0),i("div",{staticClass:"certificate-list__item__info"},[i("p",{staticClass:"title"},[i("span",{staticClass:"text-overflow text"},[t._v(t._s(e.name))]),e.isObtained?i("span",{staticClass:"acquired"},[t._v("已获取")]):i("span",{staticClass:"obtain"},[t._v("待获取")])]),"classroom"==e.targetType?i("p",{staticClass:"condition text-overflow"},[t._v("\n        通过完成班级学习可以获得\n      ")]):t._e(),"course"==e.targetType?i("p",{staticClass:"condition text-overflow"},[t._v("\n        通过完成课程学习可以获得\n      ")]):t._e()]),t._m(1,!0)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"certificate-list__item__img"},[e("img",{attrs:{src:"static/images/certificate.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"certificate-list__item__more"},[e("i",{staticClass:"van-icon van-icon-arrow pull-right"})])}],!1,null,null,null);e.default=l.exports},"944d":function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d");var c=i("bd86"),a=(i("e7e5"),i("d399")),r=(i("7f7f"),i("3ce7")),s=i("faa5"),n=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(c.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={data:function(){return{certificate:{}}},created:function(){var t=this;r.a.certificatesDetail({query:{certificateId:this.$route.params.id}}).then((function(e){t.certificate=e,t.setNavBarTitle(e.name)})).catch((function(t){a.a.fail(t.message)}))},computed:f({},Object(n.e)({isLoading:function(t){return t.isLoading}})),methods:f({},Object(n.d)({setNavBarTitle:s.s}))},u=i("a6c2"),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"course-certificate-detail"},[t.isLoading?i("e-loading"):t._e(),i("div",{staticClass:"ccd-item"},[i("h3",{staticClass:"ccd-item__title"},[t._v("证书名称")]),i("div",{staticClass:"ccd-item__body"},[t._v("\n      "+t._s(t.certificate.name)+"\n      "),t.certificate.isObtained?i("span",{staticClass:"acquired"},[t._v("已获取")]):i("span",{staticClass:"obtain"},[t._v("待获取")])])]),i("div",{staticClass:"ccd-item"},[i("h3",{staticClass:"ccd-item__title"},[t._v("证书简介")]),i("div",{staticClass:"ccd-item__body",domProps:{innerHTML:t._s(t.certificate.description)}})]),i("div",{staticClass:"ccd-item"},[i("h3",{staticClass:"ccd-item__title"},[t._v("获取途径")]),"course"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      通过参加"+t._s(t.certificate.course.courseSetTitle)+"可以获得。\n    ")]):t._e(),"classroom"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      通过参加"+t._s(t.certificate.classroom.title)+"可以获得。\n    ")]):t._e()]),i("div",{staticClass:"ccd-item ccd-item--noborder"},[i("h3",{staticClass:"ccd-item__title"},[t._v("获取条件")]),"course"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      完成课程全部任务\n    ")]):t._e(),"classroom"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      完成班级全部任务\n    ")]):t._e()])],1)}),[],!1,null,null,null);e.default=d.exports},b097:function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d");var c=i("bd86"),a=(i("e7e5"),i("d399")),r=(i("6b54"),i("2f62"));function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}var n={props:{certificate:{type:Object,default:function(){return{}}}},filters:{formatSlashTime:function(t){var e=new Date(t);return[e.getFullYear(),e.getMonth()+1,e.getDate()].map((function(t){return(t=t.toString())[1]?t:"0"+t})).join("/")}},methods:{toCertificateDetail:function(t){this.$router.push({path:"/certificate_records/".concat(t)})}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){Object(c.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(r.e)({isLoading:function(t){return t.isLoading}}))},o=i("a6c2"),f=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"certificate-item"},[t.isLoading?i("e-loading"):t._e(),t._m(0),i("div",{staticClass:"certificate-item__right item-right"},[i("p",{staticClass:"item-right__title"},[t._v(t._s(t.certificate.certificate.name))]),i("p",{staticClass:"item-right__time"},[t._v("\n      获取时间："+t._s(t._f("formatSlashTime")(t.certificate.issueTime))+"\n    ")]),i("p",{staticClass:"item-right__time"},[t._v("\n      有效时间："),0==t.certificate.expiryTime?i("span",{staticClass:"item-right__time--green"},[t._v("长期有效")]):"expired"==t.certificate.status?i("span",{staticClass:"item-right__time--red"},[t._v(t._s(t._f("formatSlashTime")(t.certificate.expiryTime))+"\n        "),i("span",[t._v("已过期")])]):"valid"==t.certificate.status?i("span",{staticClass:"item-right__time--green"},[t._v(t._s(t._f("formatSlashTime")(t.certificate.expiryTime))+"\n        "),i("span",[t._v("有效中")])]):t._e()]),i("div",{staticClass:"item-right__show",on:{click:function(e){return t.toCertificateDetail(t.certificate.id)}}},[t._v("\n      查看证书\n    ")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"certificate-item__left"},[e("img",{attrs:{src:"static/images/certificate.png",alt:""}})])}],!1,null,null,null).exports,l=i("3ce7");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}var d={data:function(){return{certificates:[]}},components:{CertificateItem:f},created:function(){var t=this;l.a.meCertificate().then((function(e){t.certificates=e.data})).catch((function(t){a.a.fail(t.message)}))},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(c.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(r.e)({isLoading:function(t){return t.isLoading}}))},_=Object(o.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"certificate"},[t.isLoading?i("e-loading"):t._e(),t._l(t.certificates,(function(e,c){return i("div",{key:c,staticClass:"certificate-year",class:[c+1==t.certificates.length?"lastChild":""]},[i("p",{staticClass:"certificate-year__title"},[t._v(t._s(e.issueYear))]),t._l(e.certificateRecords,(function(t,c){return i("certificate-item",{key:t.id,class:[0==c?"firstChild":"",c+1==e.certificateRecords.length?"lastChild":""],attrs:{certificate:t}})}))],2)}))],2)}),[],!1,null,null,null);e.default=_.exports},c3f3:function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var c=i("d399"),a=(i("7f7f"),i("bd86")),r=(i("6b54"),i("3ce7")),s=i("faa5"),n=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={data:function(){return{certificate:{},userInfo:{},isUser:!1}},filters:{formatSlashTime:function(t){var e=new Date(t);return[e.getFullYear(),e.getMonth()+1,e.getDate()].map((function(t){return(t=t.toString())[1]?t:"0"+t})).join("/")}},computed:f(f({},Object(n.e)({isLoading:function(t){return t.isLoading}})),Object(n.e)(["user"])),methods:f(f({},Object(n.d)({setNavBarTitle:s.s})),{},{getUserInfo:function(t){var e=this;r.a.getCertificateUserInfo({query:{userId:t}}).then((function(t){e.userInfo=t,t.nickname==e.user.nickname?e.isUser=!0:e.isUser=!1}))}}),created:function(){var t=this;r.a.certificateRecords({query:{certificateRecordId:this.$route.params.id}}).then((function(e){t.certificate=e,t.setNavBarTitle(e.certificate.name),t.getUserInfo(e.userId)})).catch((function(t){c.a.fail(t.message)}))}},u=i("a6c2"),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading?i("e-loading"):t._e(),i("div",{staticClass:"certificate-detail"},[i("h3",{staticClass:"certificate-detail__title"},[t._v("认证对象")]),i("div",{staticClass:"certificate-user clearfix"},[i("div",{staticClass:"certificate-user__img pull-left"},[t.userInfo.avatar?i("img",{attrs:{src:t.userInfo.avatar.small}}):t._e()]),i("div",{staticClass:"certificate-user__info pull-left"},[i("p",[t._v("姓名："+t._s(t.certificate.truename))]),i("p",[t._v("用户名："+t._s(t.userInfo.nickname))])])])]),i("div",{staticClass:"certificate-detail"},[i("h3",{staticClass:"certificate-detail__title"},[t._v("证书信息")]),i("div",{staticClass:"certificate-info"},[t.certificate.certificate?i("p",{staticClass:"certificate-info__item"},[t._v("\n        证书名称："+t._s(t.certificate.certificate.name)+"\n      ")]):t._e(),i("p",{staticClass:"certificate-info__item"},[t._v("\n        证书编号："+t._s(t.certificate.certificateCode)+"\n      ")]),i("p",{staticClass:"certificate-info__item"},[t._v("\n        发证日期："+t._s(t._f("formatSlashTime")(t.certificate.issueTime))+"\n      ")]),i("p",{staticClass:"certificate-info__item certificate-info__time"},[t._v("\n        有效日期："),0==t.certificate.expiryTime?i("span",{staticClass:"item-right__time--green"},[t._v("长期有效")]):"expired"==t.certificate.status?i("span",{staticClass:"item-right__time--red"},[t._v(t._s(t._f("formatSlashTime")(t.certificate.expiryTime))+"\n          "),i("span",[t._v("已过期")])]):"valid"==t.certificate.status?i("span",{staticClass:"item-right__time--green"},[t._v(t._s(t._f("formatSlashTime")(t.certificate.expiryTime))+"\n          "),i("span",[t._v("有效中")])]):t._e()]),i("div",{staticClass:"certificate-info__img"},[i("img",{attrs:{src:t.certificate.qrcodeUrl}})])])]),i("div",{staticClass:"certificate-detail certificate-detail--border"},[i("div",{staticClass:"certificate-detail__img"},[i("img",{attrs:{src:t.certificate.imgUrl}})]),t.isUser?i("a",{staticClass:"certificate-detail__download",attrs:{href:"javascript:;"}},[t._v("\n      长按图片保存\n    ")]):t._e()])],1)}),[],!1,null,null,null);e.default=d.exports},f1f1:function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var c=i("d399"),a=(i("7f7f"),i("bd86")),r=i("3ce7"),s=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}var o={data:function(){return{certificate:{},token:"",headers:{}}},created:function(){this.getUserInfo()},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(s.e)({isLoading:function(t){return t.isLoading}})),methods:{getCertificate:function(){var t=this;this.token?this.headers={"Content-Type":"application/x-www-form-urlencoded","X-Auth-Token":this.token}:this.headers={"Content-Type":"application/x-www-form-urlencoded"},r.a.certificatesDetail({query:{certificateId:this.$route.params.id},headers:this.headers}).then((function(e){t.certificate=e,t.setTitle(e.name)})).catch((function(t){c.a.fail(t.message)}))},setTitle:function(t){window.postNativeMessage({action:"kuozhi_native_header",data:{title:t}})},getUserInfo:function(){var t=this;window.nativeCallback=function(e){t.token=e.token,t.getCertificate()},window.postNativeMessage({action:"kuozhi_login_user",data:{force:0}})}}},f=i("a6c2"),l=Object(f.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"course-certificate-detail"},[t.isLoading?i("e-loading"):t._e(),i("div",{staticClass:"ccd-item"},[i("h3",{staticClass:"ccd-item__title"},[t._v("证书名称")]),i("div",{staticClass:"ccd-item__body"},[t._v("\n      "+t._s(t.certificate.name)+"\n      "),t.certificate.isObtained?i("span",{staticClass:"acquired"},[t._v("已获取")]):i("span",{staticClass:"obtain"},[t._v("待获取")])])]),i("div",{staticClass:"ccd-item"},[i("h3",{staticClass:"ccd-item__title"},[t._v("证书简介")]),i("div",{staticClass:"ccd-item__body",domProps:{innerHTML:t._s(t.certificate.description)}})]),i("div",{staticClass:"ccd-item"},[i("h3",{staticClass:"ccd-item__title"},[t._v("获取途径")]),"course"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      通过参加"+t._s(t.certificate.course.courseSetTitle)+"可以获得。\n    ")]):t._e(),"classroom"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      通过参加"+t._s(t.certificate.classroom.title)+"可以获得。\n    ")]):t._e()]),i("div",{staticClass:"ccd-item ccd-item--noborder"},[i("h3",{staticClass:"ccd-item__title"},[t._v("获取条件")]),"course"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      完成课程全部任务\n    ")]):t._e(),"classroom"==t.certificate.targetType?i("div",{staticClass:"ccd-item__body"},[t._v("\n      完成班级全部任务\n    ")]):t._e()])],1)}),[],!1,null,null,null);e.default=l.exports}}]);
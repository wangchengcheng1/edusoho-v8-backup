(window.webpackJsonp=window.webpackJsonp||[]).push([["homeworkResult"],{c8a5:function(t,e,r){"use strict";var i=r("3ce7"),s=r("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0}},beforeDestroy:function(){this.clearReportIntervalTime()},methods:{initReportData:function(t,e,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=r,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,i&&this.initReportEvent()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var r=this,s={courseId:t,taskId:e};return new Promise((function(t,e){i.a.getCourseData({query:s}).then((function(e){r.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"doing",r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||r)){var n={};if("doing"===e){if(null!==this.reportResult){var a=this.reportResult.lastTime;n={lastTime:a}}s&&(n.watchTime=s)}var o={courseId:this.reportData.courseId,taskId:this.reportData.taskId,events:e};return new Promise((function(e,r){i.a.reportTask({query:o,data:n}).then((function(r){t.handleReprtResult(r),e(r)})).catch((function(t){r(t)}))}))}},handleReprtResult:function(t){this.reportResult=t,"finish"===t.result.status?(this.isFinish=!0,this.$store.commit(s.w,"finish"),this.$store.commit("course/".concat(s.A),t.completionRate)):this.$store.commit(s.w,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData("doing",!0)}),e)},checkoutTime:function(){this.reportFinishCondition&&"time"===this.reportFinishCondition.type&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData("finish")},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null}}}},cae6:function(t,e,r){"use strict";r.r(e),r("8e6e"),r("456d"),r("a481"),r("ac6a");var i=r("bd86"),s=r("3ce7"),n=r("2f62"),a=r("faa5"),o=r("ea9a"),u=r("c8a5");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"HomeworkResult",mixins:[o.a,u.a],data:function(){return{result:null,calHeight:null,items:null,title:null,color:{right:"green",none:"brown",wrong:"orange",partRight:"orange",noAnswer:"gray"}}},computed:c(c({},Object(n.e)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}})),{},{usedTime:function(){var t=parseInt(this.result.usedTime)||0;return t<60?1:Math.round(t/60)},isReadOver:function(){return!(!this.result||"finished"!==this.result.status)}}),created:function(){this.gethomeworkResult(),this.initReport()},beforeRouteEnter:function(t,e,r){document.getElementById("app").style.background="#f6f6f6",r()},beforeRouteLeave:function(t,e,r){document.getElementById("app").style.background="",r()},methods:c(c({},Object(n.d)({setNavbarTitle:a.s})),{},{gethomeworkResult:function(){var t=this;s.a.homeworkResult({query:{homeworkId:this.$route.query.homeworkId,homeworkResultId:this.$route.query.homeworkResultId}}).then((function(e){t.result=e,t.setNavbarTitle(e.paperName),t.title=e.paperName,t.interruption(),t.formatData(e),t.calSubjectHeight()}))},initReport:function(){this.initReportData(this.$route.query.courseId,this.$route.query.taskId,"homework",!1)},interruption:function(){var t=this;this.canDoing(this.result,this.user.id).then((function(){t.startHomework()})).catch((function(e){var r=e.answer;t.submitHomework(r)}))},formatData:function(t){var e=this,r=[];t.items.forEach((function(t){"material"!=t.type&&(t.status=e.getStatus(t),r.push(t)),"material"==t.type&&t.subs.forEach((function(t){t.status=e.getStatus(t),r.push(t)}))})),this.items=r},getStatus:function(t){return t.testResult&&t.testResult.status?t.testResult.status:"noAnswer"},startHomework:function(){this.$router.replace({name:"homeworkDo",query:{targetId:this.$route.query.taskId,homeworkId:this.$route.query.homeworkId,courseId:this.$route.query.courseId},params:{KeepDoing:!0}})},submitHomework:function(t){var e=this,r={answer:t,homeworkId:this.$route.query.homeworkId,userId:this.user.id,homeworkResultId:this.$route.query.homeworkResultId};this.handHomeworkdo(r).then((function(t){e.reprtData("finish"),e.$router.replace({name:"homeworkResult",query:{homeworkId:e.$route.query.homeworkId,homeworkResultId:e.$route.query.homeworkResultId,courseId:e.$route.query.courseId,taskId:e.$route.query.taskId}})})).catch((function(t){Toast.fail(t.message)}))},calSubjectHeight:function(){var t=this;this.$nextTick((function(){var e=t.$refs.data.offsetHeight+t.$refs.tag.offsetHeight+46,r=document.documentElement.clientHeight-e-(t.$refs.footer.offsetHeight||0);t.calHeight="".concat(r,"px")}))},viewAnalysis:function(){this.$router.push({name:"homeworkAnalysis",query:{homeworkId:this.$route.query.homeworkId,homeworkResultId:this.$route.query.homeworkResultId,title:this.title}})}})},m=r("a6c2"),d=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"testResults"},[t.isLoading?r("e-loading"):t._e(),t.result?r("div",{ref:"data",staticClass:"result-data"},[r("div",{staticClass:"result-data__item"},[t._v("\n      正确率\n      "),t.isReadOver?r("div",{staticClass:"result-data__bottom data-number-green data-medium"},[r("span",{staticClass:"data-number"},[t._v(t._s(t.result.rightRate))]),t._v("%\n      ")]):r("div",{staticClass:"result-data__bottom data-text-blue"},[t._v("待批阅")])]),r("div",{staticClass:"result-data__item"},[t._v("\n      做题用时\n      "),r("div",{staticClass:"result-data__bottom data-number-gray data-medium"},[r("span",{staticClass:" data-number"},[t._v(t._s(t.usedTime))]),t._v("分钟\n      ")])])]):t._e(),r("div",{ref:"tag",staticClass:"result-tag"},[t._m(0),t._m(1),t._m(2),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isReadOver,expression:"!isReadOver"}],staticClass:"result-tag-item clearfix"},[r("div",{staticClass:"result-tag-item__circle circle-brown"}),t._v("\n      待批阅\n    ")])]),r("div",{staticClass:"result-subject",style:{height:t.calHeight}},[r("div",{staticClass:"result-paner"},[r("ul",{staticClass:"result-list"},t._l(t.items,(function(e,i){return r("li",{key:i,class:["result-list__item homework-number","circle-"+t.color[e.status]]},[t._v(t._s(e.seq)+"\n        ")])})),0)]),r("div",{ref:"footer",staticClass:"result-footer"},[r("van-button",{staticClass:"result-footer__btn",style:{marginRight:t.isReadOver?"2vw":0},attrs:{type:"primary"},on:{click:t.viewAnalysis}},[t._v("查看解析\n      ")]),t.isReadOver?r("van-button",{staticClass:"result-footer__btn",attrs:{type:"primary"},on:{click:function(e){return t.startHomework()}}},[t._v("再做一次\n      ")]):t._e()],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-green"}),this._v("\n      正确\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-orange"}),this._v("\n      错误\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-gray"}),this._v("\n      未作答\n    ")])}],!1,null,null,null);e.default=d.exports},ea9a:function(t,e,r){"use strict";r("e17f");var i=r("2241");r("456d"),r("ac6a"),e.a={methods:{canDoing:function(t,e){return new Promise((function(r,s){if(t&&"doing"===t.status){var n="homework-".concat(e,"-").concat(t.id),a=JSON.parse(localStorage.getItem(n));a=a?Object.keys(a).forEach((function(t){a[t]=a[t].filter((function(t){return""!==t}))})):{},i.a.confirm({title:"提示",cancelButtonText:"放弃做题",confirmButtonText:"继续做题",message:"您有未完成的作业，是否继续？"}).then((function(){r()})).catch((function(){s({answer:a})}))}}))}}}}}]);
!function(s){function e(e){for(var t,n,a=e[0],r=e[1],o=e[2],c=0,l=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&l.push(d[n][0]),d[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(s[t]=r[t]);for(p&&p(e);l.length;)l.shift()();return u.push.apply(u,o||[]),i()}function i(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==d[o]&&(a=!1)}a&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var n={},d={78:0},u=[];function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=s,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=a;u.push([752,0]),i()}({752:function(e,t,n){"use strict";n.r(t);var a,r=n(20),o=n.n(r),c={data:function(){return{questionFavorites:[],showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),fileId:0}},created:function(){var t=this;$.ajax({url:"/api/answer_record/"+$("[name='answer_record_id']").val(),type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done(function(e){t.assessment=e.assessment,t.answerReport=e.answer_report,t.answerRecord=e.answer_record,t.answerScene=e.answer_scene})},methods:{deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,n=this;return new o.a(function(t){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,t(e),n.fileId=0})})},downloadAttachmentCallback:function(){var e=this,n=this;return new o.a(function(t){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),n.fileId=0})})},deleteAttachmentCallback:function(){var e=this,n=this;return new o.a(function(t){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),n.fileId=0})})}}},l=n(93),s=Object(l.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("assessment-result",{attrs:{answerReport:e.answerReport,assessment:e.assessment,answerRecord:e.answerRecord,answerScene:e.answerScene,showCKEditorData:e.showCKEditorData,showAttachment:e.showAttachment,cdnHost:e.cdnHost,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment}})],1)},[],!1,null,null,null).exports;jQuery.support.cors=!0,Vue.config.productionTip=!1,"en"==app.lang&&(a=local.default,itemBank.default.install(Vue,{locale:a})),new Vue({render:function(e){return e(s)}}).$mount("#app")}});
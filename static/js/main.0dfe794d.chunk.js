(this["webpackJsonpyoutube-video-gallery-hooks-practice"]=this["webpackJsonpyoutube-video-gallery-hooks-practice"]||[]).push([[0],{10:function(e,t,n){e.exports=n(32)},15:function(e,t,n){},17:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=(n(15),n(3)),l=n.n(i),s=n(6),u=n(2);function d(e){var t=e.onClick,n=e.img,a=e.title,o=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"video",onClick:function(){return t(o)}},r.a.createElement("img",{src:n,alt:""}),r.a.createElement("h4",null,a)))}function m(e){var t=e.videoData,n=e.play,o=t;return o=t.length>1?t.map((function(e,t){return r.a.createElement(d,{key:t,id:t,onClick:function(){return n(t)},title:e.snippet.title,img:e.snippet.thumbnails.standard.url})})):null,r.a.createElement(a.Fragment,null,o)}n(17);var v=n(7);function p(e){return r.a.createElement("div",{className:"modal"},r.a.createElement(v.a,{videoId:e.videoId,opts:{height:"100%",width:"100%",playerVars:{autoplay:1}},onReady:function(e){return function(e){e.target.playVideo()}(e)}}))}function f(e){return r.a.createElement("div",{className:"modal-background",onClick:e.closeModal},r.a.createElement(p,{videoId:e.videoId}))}var h=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),d=i[0],v=i[1],p=Object(a.useState)(!1),h=Object(u.a)(p,2),y=h[0],g=h[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&autoplay=1&playlistId=PLjaGDYrvE9VwKidNDZwcaxzLOjKfD9CjC&key=".concat("AIzaSyDlWPniIY-QyJWeCvl6mN4rl5LDc2onv6U"));case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,o(t.items),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.error.errors.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,y&&r.a.createElement(f,{videoId:d,closeModal:function(){g(!1)}}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"flex-container"},r.a.createElement(m,{videoData:n,play:function(e){var t=n[e].contentDetails.videoId;v(t),g(!0)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0dfe794d.chunk.js.map
(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(15),n(7)),i=n.n(o);n(16);function s(e,t,n,a){var r;a&&(r=JSON.stringify(a));var c=new XMLHttpRequest,l="http://tweetmeapp.herokuapp.com/api".concat(t);c.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");c.open(e,l),c.setRequestHeader("Content-Type","application/json"),o&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",o)),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(c.response,c.status)},c.onerror=function(e){n({message:"The request was an error"},400)},c.send(r)}function u(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://tweetmeapp.herokuapp.com/api","")),s("GET",n,e)}function m(e,t,n){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://tweetmeapp.herokuapp.com/api","")),s("GET",a,t)}function d(e){var t=e.tweet,n=e.action,a=e.didPerformAction,c=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)},u="like"===n.type?"".concat(c," ").concat(o):o;return r.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,n){s("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)}},u)}var f=n(2),p=n(1);function w(e){var t=r.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return r.a.createElement("div",{className:e.className},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;s("POST","/tweets/create/",a,{content:n}),t.current.value=""}},r.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var b=n(9);function E(e){var t=e.username;return r.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function v(e){var t=e.user,n=e.includeFullName,a=e.hideLink,c=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return r.a.createElement(r.a.Fragment,null,c,!0===a?"@".concat(t.username):r.a.createElement(E,{username:t.username},"@",t.username))}function h(e){var t=e.user,n=e.hideLink,a=r.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]);return!0===n?a:r.a.createElement(E,{username:t.username},a)}var O=n(8),j=n.n(O);function g(e){return r.a.createElement("span",{className:e.className},j()(e.children).format("0a"))}function N(e){var t=e.user,n=e.didFollowToggle,a=e.profileLoading,c=t&&t.is_following?"Unfollow":"Follow";c=a?"Loading...":c;return t?r.a.createElement("div",null,r.a.createElement(h,{user:t,hideLink:!0}),r.a.createElement("p",null,r.a.createElement(v,{user:t,includeFullName:!0,hideLink:!0})),r.a.createElement("p",null,r.a.createElement(g,null,t.follower_count)," ",1===t.follower_count?"follower":"followers"," "),r.a.createElement("p",null,r.a.createElement(g,null,t.following_count)," following"),r.a.createElement("p",null,t.location),r.a.createElement("p",null,t.bio),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!a&&n(c)}},c)):null}function k(e){var t=e.username,n=Object(a.useState)(!1),c=Object(p.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(null),u=Object(p.a)(i,2),m=u[0],d=u[1],f=Object(a.useState)(!1),w=Object(p.a)(f,2),b=w[0],E=w[1],v=function(e,t){200===t&&d(e)};Object(a.useEffect)((function(){!1===l&&(!function(e,t){s("GET","/profiles/".concat(e,"/"),t)}(t,v),o(!0))}),[t,l,o]);return!1===l?"Loading...":m?r.a.createElement(N,{user:m,didFollowToggle:function(e){!function(e,t,n){var a={action:"".concat(t&&t).toLowerCase()};s("POST","/profiles/".concat(e,"/follow"),n,a)}(t,e,(function(e,t){200===t&&d(e),E(!1)})),E(!0)},profileLoading:b}):null}function y(e){var t=e.tweet;return t.parent?r.a.createElement(T,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function T(e){var t=e.tweet,n=e.didRetweet,c=e.hideActions,l=e.isRetweet,o=e.retweeter,i=Object(a.useState)(e.tweet?e.tweet:null),s=Object(p.a)(i,2),u=s[0],m=s[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===l?"".concat(f," p-2 border rounded"):f;var w=window.location.pathname.match(Object(b.a)(/([0-9]+)/,{tweetid:1})),E=w?w.groups.tweetid:-1,O="".concat(t.id)==="".concat(E),j=function(e,t){200===t?m(e):201===t&&n&&n(e)};return r.a.createElement("div",{className:f},!0===l&&r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"small text-muted"},"Retweet via ",r.a.createElement(v,{user:o}))),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:""},r.a.createElement(h,{user:t.user})),r.a.createElement("div",{className:"col-11"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(v,{includeFullName:!0,user:t.user})),r.a.createElement("p",null,t.content),r.a.createElement(y,{tweet:t,retweeter:t.user})),r.a.createElement("div",{className:"btn btn-group px-0"},u&&!0!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{tweet:u,didPerformAction:j,action:{type:"like",display:"Likes"}}),r.a.createElement(d,{tweet:u,didPerformAction:j,action:{type:"unlike",display:"Unlike"}}),r.a.createElement(d,{tweet:u,didPerformAction:j,action:{type:"retweet",display:"Retweet"}})),!0===O?null:r.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function S(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)([]),i=Object(p.a)(o,2),s=i[0],m=i[1],d=Object(a.useState)(null),w=Object(p.a)(d,2),b=w[0],E=w[1],v=Object(a.useState)(!1),h=Object(p.a)(v,2),O=h[0],j=h[1];Object(a.useEffect)((function(){var t=Object(f.a)(e.newTweets).concat(c);t.length!==s.length&&m(t)}),[e.newTweets,s,c]),Object(a.useEffect)((function(){if(!1===O){u((function(e,t){200===t&&(E(e.next),l(e.results),j(!0))}))}}),[c,O,j,e.username]);var g=function(e){var t=Object(f.a)(c);t.unshift(e),l(t);var n=Object(f.a)(s);n.unshift(s),m(n)};return r.a.createElement(r.a.Fragment,null,s.map((function(e,t){return r.a.createElement(T,{tweet:e,didRetweet:g,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&r.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){u((function(e,t){if(200===t){E(e.next);var n=Object(f.a)(s).concat(e.results);l(n),m(n)}}),b)}},className:"btn btn-outline-primary"},"Load next"))}function x(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)([]),i=Object(p.a)(o,2),s=i[0],u=i[1],d=Object(a.useState)(null),w=Object(p.a)(d,2),b=w[0],E=w[1],v=Object(a.useState)(!1),h=Object(p.a)(v,2),O=h[0],j=h[1];Object(a.useEffect)((function(){var t=Object(f.a)(e.newTweets).concat(c);t.length!==s.length&&u(t)}),[e.newTweets,s,c]),Object(a.useEffect)((function(){if(!1===O){m(e.username,(function(e,t){200===t?(E(e.next),l(e.results),j(!0)):alert("There was an error")}))}}),[c,O,j,e.username]);var g=function(e){var t=Object(f.a)(c);t.unshift(e),l(t);var n=Object(f.a)(s);n.unshift(s),u(n)};return r.a.createElement(r.a.Fragment,null,s.map((function(e,t){return r.a.createElement(T,{tweet:e,didRetweet:g,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&r.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==b){m(e.username,(function(e,t){if(200===t){E(e.next);var n=Object(f.a)(s).concat(e.results);l(n),u(n)}else alert("There was an error")}),b)}},className:"btn btn-outline-primary"},"Load next"))}function R(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],l=n[1],o="false"!==e.canTweet;return r.a.createElement("div",{className:e.className},!0===o&&r.a.createElement(w,{didTweet:function(e){var t=Object(f.a)(c);t.unshift(e),l(t)},className:"col-12 mb-3"}),r.a.createElement(x,Object.assign({newTweets:c},e)))}function A(e){var t=e.tweetId,n=Object(a.useState)(!1),c=Object(p.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(null),u=Object(p.a)(i,2),m=u[0],d=u[1],f=function(e,t){200===t?d(e):alert("There was an error finding your tweet.")};return Object(a.useEffect)((function(){!1===l&&(!function(e,t){s("GET","/tweets/".concat(e,"/"),t)}(t,f),o(!0))}),[t,l,o]),null===m?null:r.a.createElement(T,{tweet:m,className:e.className})}var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("div",null,r.a.createElement(R,null)),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=document.getElementById("root");q&&l.a.render(r.a.createElement(L,null),q);var F=r.a.createElement,C=document.getElementById("tweetme-2");C&&l.a.render(F(R,C.dataset),C);var P=document.getElementById("tweetme-2-feed");P&&l.a.render(F((function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],l=n[1],o="false"!==e.canTweet;return r.a.createElement("div",{className:e.className},!0===o&&r.a.createElement(w,{didTweet:function(e){var t=Object(f.a)(c);t.unshift(e),l(t)},className:"col-12 mb-3"}),r.a.createElement(S,Object.assign({newTweets:c},e)))}),P.dataset),P),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){l.a.render(F(A,e.dataset),e)})),document.querySelectorAll(".tweetme-2-profile-badge").forEach((function(e){l.a.render(F(k,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.862c8c31.chunk.js.map
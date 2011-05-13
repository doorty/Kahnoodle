String.prototype.trim===undefined&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===undefined&&(Array.prototype.reduce=function(a){if(this===void 0||this===null)throw new TypeError;var b=Object(this),c=b.length>>>0,d=0,e;if(typeof a!=="function")throw new TypeError;if(c==0&&arguments.length==1)throw new TypeError;if(arguments.length<2){do{if(d in b){e=b[d++];break}if(++d>=c)throw new TypeError}while(!0)}else e=arguments[1];while(d<c)d in b&&(e=a.call(undefined,e,b[d],d,b)),d++;return e});var Zepto=function(){function r(a,b){return b===h?q(a):q(a).filter(b)}function q(a,b){if(a==g)return p();if(b!==h)return q(b).find(a);if(typeof a==="function")return q(g).ready(a);if(a instanceof p)return a;var c;a instanceof Array?c=k(a):a instanceof Element||a===window?c=[a]:e.test(a)?c=o(a):c=d(g,a);return p(c,a)}function p(a,b){a=a||[],a.__proto__=p.prototype,a.selector=b||"";return a}function o(b){f.innerHTML=(""+b).trim();var c=a.call(f.childNodes);f.innerHTML="";return c}function n(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.indexOf(a[c])<0&&b.push(a[c]);return b}function m(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})}function l(a){return a.reduce(function(a,b){return a.concat(b)},[])}function k(a){return a.filter(function(a){return a!==h&&a!==null})}function j(a){return new RegExp("(^|\\s)"+a+"(\\s|$)")}var a=[].slice,b,c,d,e,f,g=window.document,h,i=g.defaultView.getComputedStyle;e=/^\s*<.+>/,f=g.createElement("div"),q.extend=function(a,c){for(b in c)a[b]=c[b];return a},q.qsa=d=function(b,c){return a.call(b.querySelectorAll(c))},q.fn={forEach:[].forEach,map:[].map,reduce:[].reduce,push:[].push,indexOf:[].indexOf,concat:[].concat,ready:function(a){g.addEventListener("DOMContentLoaded",a,!1);return this},get:function(a){return a===h?this:this[a]},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode.removeChild(this)})},each:function(a){this.forEach(function(b,c){a.call(b,c,b)});return this},filter:function(a){return q([].filter.call(this,function(b){return d(b.parentNode,a).indexOf(b)>=0}))},is:function(a){return this.length>0&&q(this[0]).filter(a).length>0},not:function(b){var c=[];if(typeof b=="function"&&b.call!==h)this.each(function(a){b.call(this,a)||c.push(this)});else{var d=a.call(typeof b==="string"?this.filter(b):b instanceof NodeList?b:q(b));a.call(this).forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return q(c)},eq:function(a){return q(this[a])},first:function(){return q(this[0])},last:function(){return q(this[this.length-1])},find:function(a){var b;this.length==1?b=d(this[0],a):b=l(this.map(function(b){return d(b,a)}));return q(b)},closest:function(a,b){var c=this[0],e=d(b!==h?b:g,a);e.length===0&&(c=null);while(c&&c!==g&&e.indexOf(c)<0)c=c.parentNode;return q(c)},parents:function(a){var b=[],c=this;while(c.length>0)c=k(c.map(function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0){b.push(a);return a}}));return r(b,a)},parent:function(a){return r(n(k(this.pluck("parentNode"))),a)},children:function(b){return r(l(this.map(function(b){return a.call(b.children)})),b)},siblings:function(b){return r(l(this.map(function(b){return a.call(b.parentNode.children).filter(function(a){return a!==b})})),b)},pluck:function(a){return this.map(function(b){return b[a]})},show:function(){return this.css("display","block")},hide:function(){return this.css("display","none")},prev:function(){return q(this.pluck("previousElementSibling"))},next:function(){return q(this.pluck("nextElementSibling"))},html:function(a){return a===h?this.length>0?this[0].innerHTML:null:this.each(function(b){this.innerHTML=typeof a=="function"?a.call(this,b,this.innerHTML):a})},text:function(a){return a===h?this.length>0?this[0].innerText:null:this.each(function(){this.innerText=a})},attr:function(a,c){return typeof a=="string"&&c===h?this.length>0&&this[0].nodeName==="INPUT"&&this[0].type==="text"&&a==="value"?this.val():this.length>0?this[0].getAttribute(a)||(a in this[0]?this[0][a]:h):null:this.each(function(d){if(typeof a=="object")for(b in a)this.setAttribute(b,a[b]);else this.setAttribute(a,typeof c=="function"?c.call(this,d,this.getAttribute(a)):c)})},removeAttr:function(a){return this.each(function(){this.removeAttribute(a)})},data:function(a,b){return this.attr("data-"+a,b)},val:function(a){return a===h?this.length>0?this[0].value:null:this.each(function(){this.value=a})},offset:function(){var a=this[0].getBoundingClientRect();return{left:a.left+g.body.scrollLeft,top:a.top+g.body.scrollTop,width:a.width,height:a.height}},css:function(a,d){if(d===h&&typeof a=="string")return this[0].style[m(a)]||i(this[0],"").getPropertyValue(a);c="";for(b in a)c+=b+":"+a[b]+";";typeof a=="string"&&(c=a+":"+d);return this.each(function(){this.style.cssText+=";"+c})},index:function(a){return this.indexOf(q(a)[0])},hasClass:function(a){return j(a).test(this[0].className)},addClass:function(a){return this.each(function(){!q(this).hasClass(a)&&(this.className+=(this.className?" ":"")+a)})},removeClass:function(a){return this.each(function(){this.className=this.className.replace(j(a)," ").trim()})},toggleClass:function(a,b){return this.each(function(){b!==h&&!b||q(this).hasClass(a)?q(this).removeClass(a):q(this).addClass(a)})}},["width","height"].forEach(function(a){q.fn[a]=function(){return this.offset()[a]}});var s={append:"beforeEnd",prepend:"afterBegin",before:"beforeBegin",after:"afterEnd"};for(b in s)q.fn[b]=function(a){return function(b){return this.each(function(c,d){if(b instanceof p){dom=b;if(a=="afterBegin"||a=="afterEnd")for(var e=0;e<dom.length;e++)d.insertAdjacentElement(a,dom[dom.length-e-1]);else for(var e=0;e<dom.length;e++)d.insertAdjacentElement(a,dom[e])}else d["insertAdjacent"+(b instanceof Element?"Element":"HTML")](a,b)})}}(s[b]);p.prototype=q.fn;return q}();"$"in window||(window.$=Zepto),function(a){function l(b){var c=a.extend({originalEvent:b},b);k.forEach(function(a){c[a]=function(){return b[a].apply(b,arguments)}});return c}function j(a,b,d,g){var h=e(a);(b||"").split(/\s/).forEach(function(b){f(a,b,d,g).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.del||b.fn,!1)})})}function i(b,d,f,h,i){var j=e(b),k=c[j]||(c[j]=[]);d.split(/\s/).forEach(function(c){var d=a.extend(g(c),{fn:f,sel:h,del:i,i:k.length});k.push(d),b.addEventListener(d.e,i||f,!1)})}function h(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function g(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function f(a,b,d,f){b=g(b);if(b.ns)var i=h(b.ns);return(c[e(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||i.test(a.ns))&&(!d||a.fn==d)&&(!f||a.sel==f)})}function e(a){return a._zid||(a._zid=d++)}var b=a.qsa,c={},d=1;a.event={add:function(a,b,c){i(a,b,c)},remove:function(a,b,c){j(a,b,c)}},a.fn.bind=function(a,b){return this.each(function(){i(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){j(this,a,b)})},a.fn.one=function(a,b){return this.each(function(){var c=this;i(this,a,function d(){b(),j(c,a,arguments.callee)})})};var k=["preventDefault","stopImmediatePropagation","stopPropagation"];a.fn.delegate=function(c,d,e){return this.each(function(f,g){i(g,d,e,c,function(d){var f=d.target,h=b(g,c);while(f&&h.indexOf(f)<0)f=f.parentNode;f&&f!==g&&f!==document&&e.call(f,a.extend(l(d),{currentTarget:f,liveFired:g}))})})},a.fn.undelegate=function(a,b,c){return this.each(function(){j(this,b,c,a)})},a.fn.live=function(b,c){a(document.body).delegate(this.selector,b,c);return this},a.fn.die=function(b,c){a(document.body).undelegate(this.selector,b,c);return this},a.fn.trigger=function(a){return this.each(function(){var b=document.createEvent("Events");this.dispatchEvent(b,b.initEvent(a,!0,!0))})}}(Zepto),function(a){function b(a){var a=a,b={},c=a.match(/(Android)\s+([\d.]+)/),d=a.match(/(iPhone\sOS)\s([\d_]+)/),e=a.match(/(iPad).*OS\s([\d_]+)/),f=a.match(/(webOS)\/([\d.]+)/),g=a.match(/(BlackBerry).*Version\/([\d.]+)/);c&&(b.android=!0,b.version=c[2]),d&&(b.ios=!0,b.version=d[2].replace(/_/g,"."),b.iphone=!0),e&&(b.ios=!0,b.version=e[2].replace(/_/g,"."),b.ipad=!0),f&&(b.webos=!0,b.version=f[2]),g&&(b.blackberry=!0,b.version=g[2]);return b}a.os=b(navigator.userAgent),a.__detect=b;var c=navigator.userAgent.match(/WebKit\/([\d.]+)/);a.browser=c?{webkit:!0,version:c[1]}:{webkit:!1}}(Zepto),function(a){a.fn.anim=function(a,b,c,d){var e=[],f,g;for(g in a)g==="opacity"?f=a[g]:e.push(g+"("+a[g]+")");typeof d=="function"&&this.one("webkitTransitionEnd",d);return this.css({"-webkit-transition":"all "+(b!==undefined?b:.5)+"s "+(c||""),"-webkit-transform":e.join(" "),opacity:f})}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}var b={},c;a(document).ready(function(){a(document.body).bind("touchstart",function(a){var e=Date.now(),f=e-(b.last||e);b.target=d(a.touches[0].target),c&&clearTimeout(c),b.x1=a.touches[0].pageX,f>0&&f<=250&&(b.isDoubleTap=!0),b.last=e}).bind("touchmove",function(a){b.x2=a.touches[0].pageX}).bind("touchend",function(d){b.isDoubleTap?(a(b.target).trigger("doubleTap"),b={}):b.x2>0?(Math.abs(b.x1-b.x2)>30&&a(b.target).trigger("swipe")&&a(b.target).trigger("swipe"+(b.x1-b.x2>0?"Left":"Right")),b.x1=b.x2=b.last=0):"last"in b&&(c=setTimeout(function(){c=null,a(b.target).trigger("tap"),b={}},250))}).bind("touchcancel",function(){b={}})}),["swipe","swipeLeft","swipeRight","doubleTap","tap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto),function(a){function c(){}var b=0;a.ajaxJSONP=function(c){var d="jsonp"+ ++b,e=document.createElement("script");window[d]=function(a){c.success(a),delete window.jsonpString},e.src=c.url.replace(/=\?/,"="+d),a("head").append(e)},a.ajax=function(b){b=b||{};if(b.url&&/=\?/.test(b.url))return a.ajaxJSONP(b);var e=b.data,f=b.success||c,g=b.error||c,h=d[b.dataType],i=b.type||"GET",j=b.contentType||(i==="POST"?"application/x-www-form-urlencoded":""),k=new XMLHttpRequest;k.onreadystatechange=function(){if(k.readyState==4)if(k.status>=200&&k.status<300||k.status==0)if(h=="application/json"){var a,b=!1;try{a=JSON.parse(k.responseText)}catch(c){b=c}b?g(k,"parsererror",b):f(a,"success",k)}else f(k.responseText,"success",k);else g(k,"error")},k.open(i,b.url||window.location,!0),h&&k.setRequestHeader("Accept",h),e instanceof Object&&(e=a.param(e)),j&&k.setRequestHeader("Content-Type",j),k.setRequestHeader("X-Requested-With","XMLHttpRequest"),k.send(e)};var d=a.ajax.mimeTypes={json:"application/json",xml:"application/xml",html:"text/html",text:"text/plain"};a.get=function(b,c){a.ajax({url:b,success:c})},a.post=function(b,c,d,e){c instanceof Function&&(e=e||d,d=c,c=null),a.ajax({type:"POST",url:b,data:c,success:d,dataType:e})},a.getJSON=function(b,c){a.ajax({url:b,success:c,dataType:"json"})},a.fn.load=function(b,c){if(!this.length)return this;var d=this,e=b.split(/\s/),f;e.length>1&&(b=e[0],f=e[1]),a.get(b,function(b){d.html(f?a(document.createElement("div")).html(b).find(f).html():b),c&&c()});return this},a.param=function(b,c){var d=[],e="",f=function(a,b){c?d[d.length]=encodeURIComponent(c+"["+a+"]")+"="+encodeURIComponent(b):d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};for(var g in b)b[g]instanceof Array||b[g]instanceof Object?e+=(d.length+e.length>0?"&":"")+a.param(b[g],c?c+"["+g+"]":g):f(b instanceof Array?"":g,b[g]);return d.join("&").replace(/%20/g,"+")+e}}(Zepto),function(a){var b=[],c;a.fn.remove=function(){return this.each(function(){this.tagName=="IMG"&&(b.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAAAADs=",c&&clearTimeout(c),c=setTimeout(function(){b=[]},6e4)),this.parentNode.removeChild(this)})}}(Zepto)
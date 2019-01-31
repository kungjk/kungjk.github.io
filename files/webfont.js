/*
 * Copyright 2014 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.5.3 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window,document,undefined){var j=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var q=this;function r(a,b){var c=a.split("."),d=q;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function aa(a,b,c){return a.call.apply(a.bind,arguments)}
function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return t.apply(l,arguments)}var u=Date.now||function(){return+new Date};function v(a,b){this.G=a;this.v=b||a;this.z=this.v.document}v.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));return a};function w(a,b,c){a=a.z.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}
function x(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var g=m,f=0;f<d.length;f+=1)if(b[e]===d[f]){g=j;break}g||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){g=m;for(f=0;f<c.length;f+=1)if(d[e]===c[f]){g=j;break}g||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ca(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return m}
function y(a){var b=a.v.location.protocol;"about:"==b&&(b=a.G.location.protocol);return"https:"==b?"https:":"http:"}function da(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),d=m;c.onload=function(){d||(d=j)};c.onerror=function(){d||(d=j)};w(a,"head",c)}
function z(a,b,c,d){var e=a.z.getElementsByTagName("head")[0];if(e){var g=a.createElement("script",{src:b}),f=m;g.onload=g.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(l),g.onload=g.onreadystatechange=l,"HEAD"==g.parentNode.tagName&&e.removeChild(g)};e.appendChild(g);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},d||5E3);return g}return l};function A(a,b,c){this.M=a;this.U=b;this.Aa=c}r("webfont.BrowserInfo",A);A.prototype.pa=n("M");A.prototype.hasWebFontSupport=A.prototype.pa;A.prototype.qa=n("U");A.prototype.hasWebKitFallbackBug=A.prototype.qa;A.prototype.ra=n("Aa");A.prototype.hasWebKitMetricsBug=A.prototype.ra;function B(a,b,c,d){this.d=a!=l?a:l;this.o=b!=l?b:l;this.aa=c!=l?c:l;this.f=d!=l?d:l}var ea=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;B.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")};
function C(a){a=ea.exec(a);var b=l,c=l,d=l,e=l;a&&(a[1]!==l&&a[1]&&(b=parseInt(a[1],10)),a[2]!==l&&a[2]&&(c=parseInt(a[2],10)),a[3]!==l&&a[3]&&(d=parseInt(a[3],10)),a[4]!==l&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new B(b,c,d,e)};function D(a,b,c,d,e,g,f,h,k,p,s){this.K=a;this.Ga=b;this.za=c;this.fa=d;this.Ea=e;this.ea=g;this.wa=f;this.Fa=h;this.va=k;this.da=p;this.j=s}r("webfont.UserAgent",D);D.prototype.getName=n("K");D.prototype.getName=D.prototype.getName;D.prototype.oa=n("za");D.prototype.getVersion=D.prototype.oa;D.prototype.ka=n("fa");D.prototype.getEngine=D.prototype.ka;D.prototype.la=n("ea");D.prototype.getEngineVersion=D.prototype.la;D.prototype.ma=n("wa");D.prototype.getPlatform=D.prototype.ma;D.prototype.na=n("va");
D.prototype.getPlatformVersion=D.prototype.na;D.prototype.ja=n("da");D.prototype.getDocumentMode=D.prototype.ja;D.prototype.ia=n("j");D.prototype.getBrowserInfo=D.prototype.ia;function E(a,b){this.a=a;this.I=b}var fa=new D("Unknown",new B,"Unknown","Unknown",new B,"Unknown","Unknown",new B,"Unknown",void 0,new A(m,m,m));
E.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=F(this);var b=G(this),c=C(b),d=l,e=l,g=l,f=l,h=H(this.a,/Trident\/([\d\w\.]+)/,1),k=I(this.I),d=-1!=this.a.indexOf("MSIE")?H(this.a,/MSIE ([\d\w\.]+)/,1):H(this.a,/rv:([\d\w\.]+)/,1),e=C(d);""!=h?(g="Trident",f=C(h)):(g="Unknown",f=new B,h="Unknown");a=new D("MSIE",e,d,g,f,h,a,c,b,k,new A("Windows"==a&&6<=e.d||"Windows Phone"==a&&8<=c.d,m,m))}else if(-1!=this.a.indexOf("Opera"))a:if(a="Unknown",b=H(this.a,
/Presto\/([\d\w\.]+)/,1),c=C(b),d=G(this),e=C(d),g=I(this.I),c.d!==l?a="Presto":(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=H(this.a,/rv:([^\)]+)/,1),c=C(b)),-1!=this.a.indexOf("Opera Mini/"))f=H(this.a,/Opera Mini\/([\d\.]+)/,1),h=C(f),a=new D("OperaMini",h,f,a,c,b,F(this),e,d,g,new A(m,m,m));else{if(-1!=this.a.indexOf("Version/")&&(f=H(this.a,/Version\/([\d\.]+)/,1),h=C(f),h.d!==l)){a=new D("Opera",h,f,a,c,b,F(this),e,d,g,new A(10<=h.d,m,m));break a}f=H(this.a,/Opera[\/ ]([\d\.]+)/,1);h=C(f);a=
h.d!==l?new D("Opera",h,f,a,c,b,F(this),e,d,g,new A(10<=h.d,m,m)):new D("Opera",new B,"Unknown",a,c,b,F(this),e,d,g,new A(m,m,m))}else/OPR\/[\d.]+/.test(this.a)?a=ga(this):/AppleWeb(K|k)it/.test(this.a)?a=ga(this):-1!=this.a.indexOf("Gecko")?(a="Unknown",b=new B,c="Unknown",d=G(this),e=C(d),g=m,-1!=this.a.indexOf("Firefox")?(a="Firefox",c=H(this.a,/Firefox\/([\d\w\.]+)/,1),b=C(c),g=3<=b.d&&5<=b.o):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),f=H(this.a,/rv:([^\)]+)/,1),h=C(f),g||(g=1<h.d||1==h.d&&
9<h.o||1==h.d&&9==h.o&&2<=h.aa||f.match(/1\.9\.1b[123]/)!=l||f.match(/1\.9\.1\.[\d\.]+/)!=l),a=new D(a,b,c,"Gecko",h,f,F(this),e,d,I(this.I),new A(g,m,m))):a=fa;return a};function F(a){var b=H(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=H(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function G(a){var b=H(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=H(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=H(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=H(a.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=H(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function ga(a){var b=F(a),c=G(a),d=C(c),e=H(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),g=C(e),f="Unknown",h=new B,k="Unknown",p=m;/OPR\/[\d.]+/.test(a.a)?f="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?f="Chrome":/Silk\/\d/.test(a.a)?f="Silk":"BlackBerry"==b||"Android"==b?f="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?f="PhantomJS":-1!=a.a.indexOf("Safari")?f="Safari":-1!=a.a.indexOf("AdobeAIR")&&(f="AdobeAIR");"BuiltinBrowser"==f?k="Unknown":"Silk"==f?k=H(a.a,
/Silk\/([\d\._]+)/,1):"Chrome"==f?k=H(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?k=H(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==f?k=H(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==f?k=H(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==f&&(k=H(a.a,/PhantomJS\/([\d.]+)/,1));h=C(k);p="AdobeAIR"==f?2<h.d||2==h.d&&5<=h.o:"BlackBerry"==b?10<=d.d:"Android"==b?2<d.d||2==d.d&&1<d.o:526<=g.d||525<=g.d&&13<=g.o;return new D(f,h,k,"AppleWebKit",g,e,b,d,c,I(a.I),new A(p,536>g.d||536==g.d&&11>g.o,"iPhone"==
b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function H(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function I(a){if(a.documentMode)return a.documentMode};function ha(a){this.ua=a||"-"}ha.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ua)};function J(a,b){this.K=a;this.V=4;this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.V=parseInt(c[2],10))}J.prototype.getName=n("K");function K(a){return a.L+a.V}function ia(a){var b=4,c="n",d=l;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ka(a,b,c){this.c=a;this.m=b;this.O=c;this.h="wf";this.g=new ha("-")}function M(a){var b=ca(a.m,a.g.f(a.h,"active")),c=[],d=[a.g.f(a.h,"loading")];b||c.push(a.g.f(a.h,"inactive"));x(a.m,c,d);N(a,"inactive")}function N(a,b,c){if(a.O[b])if(c)a.O[b](c.getName(),K(c));else a.O[b]()};function la(){this.w={}};function O(a,b){this.c=a;this.C=b;this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}
function P(a,b){var c;c=[];for(var d=b.K.split(/,\s*/),e=0;e<d.length;e++){var g=d[e].replace(/['"]/g,"");-1==g.indexOf(" ")?c.push(g):c.push("'"+g+"'")}c=c.join(",");d="normal";e=b.V+"00";"o"===b.L?d="oblique":"i"===b.L&&(d="italic");a.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function Q(a){w(a.c,"body",a.s)}O.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};function ma(a,b,c,d,e,g,f,h){this.W=a;this.sa=b;this.c=c;this.q=d;this.C=h||"BESbswy";this.j=e;this.F={};this.T=g||5E3;this.Z=f||l;this.B=this.A=l;a=new O(this.c,this.C);Q(a);for(var k in R)R.hasOwnProperty(k)&&(P(a,new J(R[k],K(this.q))),this.F[R[k]]=a.s.offsetWidth);a.remove()}var R={Da:"serif",Ca:"sans-serif",Ba:"monospace"};
ma.prototype.start=function(){this.A=new O(this.c,this.C);Q(this.A);this.B=new O(this.c,this.C);Q(this.B);this.xa=u();P(this.A,new J(this.q.getName()+",serif",K(this.q)));P(this.B,new J(this.q.getName()+",sans-serif",K(this.q)));na(this)};function oa(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.F[R[d]]&&c===a.F[R[d]])return j;return m}
function na(a){var b=a.A.s.offsetWidth,c=a.B.s.offsetWidth;b===a.F.serif&&c===a.F["sans-serif"]||a.j.U&&oa(a,b,c)?u()-a.xa>=a.T?a.j.U&&oa(a,b,c)&&(a.Z===l||a.Z.hasOwnProperty(a.q.getName()))?S(a,a.W):S(a,a.sa):setTimeout(t(function(){na(this)},a),25):S(a,a.W)}function S(a,b){a.A.remove();a.B.remove();b(a.q)};function T(a,b,c,d){this.c=b;this.t=c;this.P=0;this.ba=this.Y=m;this.T=d;this.j=a.j}function pa(a,b,c,d,e){if(0===b.length&&e)M(a.t);else{a.P+=b.length;e&&(a.Y=e);for(e=0;e<b.length;e++){var g=b[e],f=c[g.getName()],h=a.t,k=g;x(h.m,[h.g.f(h.h,k.getName(),K(k).toString(),"loading")]);N(h,"fontloading",k);(new ma(t(a.ga,a),t(a.ha,a),a.c,g,a.j,a.T,d,f)).start()}}}
T.prototype.ga=function(a){var b=this.t;x(b.m,[b.g.f(b.h,a.getName(),K(a).toString(),"active")],[b.g.f(b.h,a.getName(),K(a).toString(),"loading"),b.g.f(b.h,a.getName(),K(a).toString(),"inactive")]);N(b,"fontactive",a);this.ba=j;qa(this)};T.prototype.ha=function(a){var b=this.t,c=ca(b.m,b.g.f(b.h,a.getName(),K(a).toString(),"active")),d=[],e=[b.g.f(b.h,a.getName(),K(a).toString(),"loading")];c||d.push(b.g.f(b.h,a.getName(),K(a).toString(),"inactive"));x(b.m,d,e);N(b,"fontinactive",a);qa(this)};
function qa(a){0==--a.P&&a.Y&&(a.ba?(a=a.t,x(a.m,[a.g.f(a.h,"active")],[a.g.f(a.h,"loading"),a.g.f(a.h,"inactive")]),N(a,"active")):M(a.t))};function U(a){this.G=a;this.u=new la;this.ya=new E(a.navigator.userAgent,a.document);this.a=this.ya.parse();this.Q=this.R=0}
U.prototype.load=function(a){var b=a.context||this.G;this.c=new v(this.G,b);var b=new ka(this.c,b.document.documentElement,a),c=[],d=a.timeout;x(b.m,[b.g.f(b.h,"loading")]);N(b,"loading");var c=this.u,e=this.c,g=[],f;for(f in a)if(a.hasOwnProperty(f)){var h=c.w[f];h&&g.push(h(a[f],e))}c=g;this.Q=this.R=c.length;a=new T(this.a,this.c,b,d);f=0;for(d=c.length;f<d;f++)e=c[f],e.H(this.a,t(this.ta,this,e,b,a))};
U.prototype.ta=function(a,b,c,d){var e=this;d?a.load(function(a,b,d){var k=0==--e.R;setTimeout(function(){pa(c,a,b||{},d||l,k)},0)}):(a=0==--this.R,this.Q--,a&&0==this.Q&&M(b),pa(c,[],{},l,a))};function V(a,b){this.c=a;this.e=b;this.k=[]}V.prototype.D=function(a){return y(this.c)+(this.e.api||"//web.archive.org/web/20170606051114/https://f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};
V.prototype.H=function(a,b){var c=this.e.id,d=this.c.v,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,k=c.fonts.length;d<k;++d){var p=c.fonts[d];e.k.push(new J(p.name,ia("font-weight:"+p.weight+";font-style:"+p.style)))}b(a)},z(this.c,this.D(c),function(a){a&&b(m)})):b(m)};V.prototype.load=function(a){a(this.k)};function W(a,b){this.c=a;this.e=b;this.k=[]}W.prototype.D=function(a){var b=y(this.c);return(this.e.api||b+"//web.archive.org/web/20170606051114/https://use.typekit.net/")+"/"+a+".js"};
W.prototype.H=function(a,b){var c=this.e.id,d=this.e,e=this.c.v,g=this;c?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var f=0;f<c.length;f+=1){var e=d[c[f]];if(e)for(var L=0;L<e.length;L+=1)g.k.push(new J(c[f],e[L]));else g.k.push(new J(c[f]))}b(a)})},z(this.c,this.D(c),function(a){a&&b(m)},2E3)):b(m)};W.prototype.load=function(a){a(this.k)};function X(a,b){this.c=a;this.e=b}X.prototype.load=function(a){var b,c,d=this.e.urls||[],e=this.e.families||[],g=this.e.testStrings||{};b=0;for(c=d.length;b<c;b++)da(this.c,d[b]);d=[];b=0;for(c=e.length;b<c;b++){var f=e[b].split(":");if(f[1])for(var h=f[1].split(","),k=0;k<h.length;k+=1)d.push(new J(f[0],h[k]));else d.push(new J(f[0]))}a(d,g)};X.prototype.H=function(a,b){return b(a.j.M)};function ra(a,b,c){this.N=a?a:b+sa;this.p=[];this.S=[];this.ca=c||""}var sa="//web.archive.org/web/20170606051114/https://fonts.googleapis.com/css";ra.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var a=this.p.length,b=[],c=0;c<a;c++)b.push(this.p[c].replace(/ /g,"+"));a=this.N+"?family="+b.join("%7C");0<this.S.length&&(a+="&subset="+this.S.join(","));0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca));return a};function ta(a){this.p=a;this.$=[];this.J={}}
var ua={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ta.prototype.parse=function(){for(var a=this.p.length,b=0;b<a;b++){var c=this.p[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var g;var f=c[1];g=[];if(f)for(var f=f.split(","),h=f.length,k=0;k<h;k++){var p;p=f[k];if(p.match(/^[\w-]+$/)){p=xa.exec(p.toLowerCase());var s=void 0;if(p==l)s="";else{s=void 0;s=p[1];if(s==l||""==s)s="4";else var ja=va[s],s=ja?ja:isNaN(s)?"4":s.substr(0,1);s=[p[2]==l||""==p[2]?"n":wa[p[2]],s].join("")}p=s}else p="";p&&g.push(p)}0<g.length&&(e=g);3==c.length&&
(c=c[2],g=[],c=!c?g:c.split(","),0<c.length&&(c=ua[c[0]])&&(this.J[d]=c))}this.J[d]||(c=ua[d])&&(this.J[d]=c);for(c=0;c<e.length;c+=1)this.$.push(new J(d,e[c]))}};function Y(a,b){this.a=(new E(navigator.userAgent,document)).parse();this.c=a;this.e=b}var ya={Arimo:j,Cousine:j,Tinos:j};Y.prototype.H=function(a,b){b(a.j.M)};Y.prototype.load=function(a){var b=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=j){var c=t(this.X,this,a),d=function(){b.z.body?c():setTimeout(d,0)};d()}else this.X(a)};
Y.prototype.X=function(a){for(var b=this.c,c=new ra(this.e.api,y(b),this.e.text),d=this.e.families,e=d.length,g=0;g<e;g++){var f=d[g].split(":");3==f.length&&c.S.push(f.pop());var h="";2==f.length&&""!=f[1]&&(h=":");c.p.push(f.join(h))}d=new ta(d);d.parse();da(b,c.f());a(d.$,d.J,ya)};function Z(a,b){this.c=a;this.e=b;this.k=[]}Z.prototype.H=function(a,b){var c=this,d=c.e.projectId,e=c.e.version;if(d){var g=c.c.v;z(this.c,c.D(d,e),function(f){if(f)b(m);else{if(g["__mti_fntLst"+d]&&(f=g["__mti_fntLst"+d]()))for(var e=0;e<f.length;e++)c.k.push(new J(f[e].fontfamily));b(a.j.M)}}).id="__MonotypeAPIScript__"+d}else b(m)};Z.prototype.D=function(a,b){var c=y(this.c),d=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};
Z.prototype.load=function(a){a(this.k)};var $=new U(q);$.u.w.custom=function(a,b){return new X(b,a)};$.u.w.fontdeck=function(a,b){return new V(b,a)};$.u.w.monotype=function(a,b){return new Z(b,a)};$.u.w.typekit=function(a,b){return new W(b,a)};$.u.w.google=function(a,b){return new Y(b,a)};q.WebFont||(q.WebFont={},q.WebFont.load=t($.load,$),q.WebFontConfig&&$.load(q.WebFontConfig));})(this,document);


/*
     FILE ARCHIVED ON 05:11:14 Jun 06, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:48:18 Jan 25, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 386.064 (6)
  esindex: 0.009
  CDXLines.iter: 88.646 (3)
  PetaboxLoader3.datanode: 349.589 (8)
  exclusion.robots: 0.226
  exclusion.robots.policy: 0.209
  RedisCDXSource: 15.957
  PetaboxLoader3.resolve: 58.308 (2)
  load_resource: 125.361
*/
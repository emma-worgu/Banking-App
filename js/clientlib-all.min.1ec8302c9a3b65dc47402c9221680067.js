if(!Array.prototype.find){Array.prototype.find=function(b){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(typeof b!=="function"){throw new TypeError("predicate must be a function")
}var c=arguments[1];
var d=0;
while(d<a){var e=f[d];
if(b.call(c,e,d,f)){return e
}d++
}return undefined
}
}if(!Array.prototype.includes){Array.prototype.includes=function(d,e){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(a===0){return false
}var g=e|0;
var c=Math.max(g>=0?g:a-Math.abs(g),0);
function b(h,i){return h===i||(typeof h==="number"&&typeof i==="number"&&isNaN(h)&&isNaN(i))
}while(c<a){if(b(f[c],d)){return true
}c++
}return false
}
}if(!Array.prototype.forEach){Array.prototype.forEach=function(f){var c,b;
if(this==null){throw new TypeError("this is null or not defined")
}var e=Object(this);
var a=e.length>>>0;
if(typeof f!=="function"){throw new TypeError(f+" is not a function")
}if(arguments.length>1){c=arguments[1]
}b=0;
while(b<a){var d;
if(b in e){d=e[b];
f.call(c,d,b,e)
}b++
}}
}if(!Array.prototype.map){Array.prototype.map=function(h){var d,b,c;
if(this==null){throw new TypeError("this is null or not defined")
}var g=Object(this);
var a=g.length>>>0;
if(typeof h!=="function"){throw new TypeError(h+" is not a function")
}if(arguments.length>1){d=arguments[1]
}b=new Array(a);
c=0;
while(c<a){var f,e;
if(c in g){f=g[c];
e=h.call(d,f,c,g);
b[c]=e
}c++
}return b
}
}if(!Array.prototype.filter){Array.prototype.filter=function(c){if(this===void 0||this===null){throw new TypeError()
}var f=Object(this);
var a=f.length>>>0;
if(typeof c!=="function"){throw new TypeError()
}var e=[];
var b=arguments.length>=2?arguments[1]:void 0;
for(var d=0;
d<a;
d++){if(d in f){var g=f[d];
if(c.call(b,g,d,f)){e.push(g)
}}}return e
}
}if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector
}if(!Element.prototype.closest){Element.prototype.closest=function(b){var a=this;
if(!document.documentElement.contains(a)){return null
}do{if(a.matches(b)){return a
}a=a.parentElement||a.parentNode
}while(a!==null);
return null
}
}if(typeof Object.assign!="function"){Object.assign=function(d,f){if(d==null){throw new TypeError("Cannot convert undefined or null to object")
}var e=Object(d);
for(var c=1;
c<arguments.length;
c++){var b=arguments[c];
if(b!=null){for(var a in b){if(Object.prototype.hasOwnProperty.call(b,a)){e[a]=b[a]
}}}}return e
}
}if(typeof Object.create!=="function"){Object.create=function(c,a){function b(){}b.prototype=c;
if(typeof(a)==="object"){for(prop in a){if(a.hasOwnProperty((prop))){b[prop]=a[prop]
}}}return new b()
}
}(function(k){var u={};
k.respond=u;
u.update=function(){};
var c=[],d=(function(){var w=false;
try{w=new k.XMLHttpRequest()
}catch(A){w=new k.ActiveXObject("Microsoft.XMLHTTP")
}return function(){return w
}
})(),n=function(w,B){var A=d();
if(!A){return
}A.open("GET",w,true);
A.onreadystatechange=function(){if(A.readyState!==4||A.status!==200&&A.status!==304){return
}B(A.responseText)
};
if(A.readyState===4){return
}A.send(null)
},r=function(w){return w.replace(u.regex.minmaxwh,"").match(u.regex.other)
};
u.ajax=n;
u.queue=c;
u.unsupportedmq=r;
u.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g};
u.mediaQueriesSupported=k.matchMedia&&k.matchMedia("only all")!==null&&k.matchMedia("only all").matches;
if(u.mediaQueriesSupported){return
}var z=k.document,t=z.documentElement,h=[],j=[],q=[],o={},g=30,e=z.getElementsByTagName("head")[0]||t,f=z.getElementsByTagName("base")[0],b=e.getElementsByTagName("link"),l,s,p,y=function(){var B,E=z.createElement("div"),w=z.body,D=t.style.fontSize,C=w&&w.style.fontSize,A=false;
E.style.cssText="position:absolute;font-size:1em;width:1em";
if(!w){w=A=z.createElement("body");
w.style.background="none"
}t.style.fontSize="100%";
w.style.fontSize="100%";
w.appendChild(E);
if(A){t.insertBefore(w,t.firstChild)
}B=E.offsetWidth;
if(A){t.removeChild(w)
}else{w.removeChild(E)
}t.style.fontSize=D;
if(C){w.style.fontSize=C
}B=p=parseFloat(B);
return B
},i=function(L){var Q="clientWidth",C=t[Q],A=z.compatMode==="CSS1Compat"&&C||z.body[Q]||C,O={},P=b[b.length-1],B=(new Date()).getTime();
if(L&&l&&B-l<g){k.clearTimeout(s);
s=k.setTimeout(i,g);
return
}else{l=B
}for(var J in h){if(h.hasOwnProperty(J)){var M=h[J],F=M.minw,I=M.maxw,K=F===null,N=I===null,w="em";
if(!!F){F=parseFloat(F)*(F.indexOf(w)>-1?(p||y()):1)
}if(!!I){I=parseFloat(I)*(I.indexOf(w)>-1?(p||y()):1)
}if(!M.hasquery||(!K||!N)&&(K||A>=F)&&(N||A<=I)){if(!O[M.media]){O[M.media]=[]
}O[M.media].push(j[M.rules])
}}}for(var H in q){if(q.hasOwnProperty(H)){if(q[H]&&q[H].parentNode===e){e.removeChild(q[H])
}}}q.length=0;
for(var G in O){if(O.hasOwnProperty(G)){var E=z.createElement("style"),D=O[G].join("\n");
E.type="text/css";
E.media=G;
e.insertBefore(E,P.nextSibling);
if(E.styleSheet){E.styleSheet.cssText=D
}else{E.appendChild(z.createTextNode(D))
}q.push(E)
}}},m=function(K,w,B){var I=K.replace(u.regex.comments,"").replace(u.regex.keyframes,"").match(u.regex.media),L=I&&I.length||0;
w=w.substring(0,w.lastIndexOf("/"));
var A=function(M){return M.replace(u.regex.urls,"$1"+w+"$2$3")
},C=!L&&B;
if(w.length){w+="/"
}if(C){L=1
}for(var F=0;
F<L;
F++){var G,H,D,J;
if(C){G=B;
j.push(A(K))
}else{G=I[F].match(u.regex.findStyles)&&RegExp.$1;
j.push(RegExp.$2&&A(RegExp.$2))
}D=G.split(",");
J=D.length;
for(var E=0;
E<J;
E++){H=D[E];
if(r(H)){continue
}h.push({media:H.split("(")[0].match(u.regex.only)&&RegExp.$2||"all",rules:j.length-1,hasquery:H.indexOf("(")>-1,minw:H.match(u.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:H.match(u.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})
}}i()
},x=function(){if(c.length){var w=c.shift();
n(w.href,function(A){m(A,w.href,w.media);
o[w.href]=true;
k.setTimeout(function(){x()
},0)
})
}},a=function(){for(var C=0;
C<b.length;
C++){var B=b[C],A=B.href,D=B.media,w=B.rel&&B.rel.toLowerCase()==="stylesheet";
if(!!A&&w&&!o[A]){if(B.styleSheet&&B.styleSheet.rawCssText){m(B.styleSheet.rawCssText,A,D);
o[A]=true
}else{if((!/^([a-zA-Z:]*\/\/)/.test(A)&&!f)||A.replace(RegExp.$1,"").split("/")[0]===k.location.host){if(A.substring(0,2)==="//"){A=k.location.protocol+A
}c.push({href:A,media:D})
}}}}x()
};
a();
u.update=a;
u.getEmValue=y;
function v(){i(true)
}if(k.addEventListener){k.addEventListener("resize",v,false)
}else{if(k.attachEvent){k.attachEvent("onresize",v)
}}})(this);
if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}if(typeof String.prototype.includes!=="function"){String.prototype.includes=function(a,b){if(typeof b!=="number"){b=0
}if(b+a.length>this.length){return false
}else{return this.indexOf(a,b)!==-1
}}
}if(!String.prototype.endsWith){String.prototype.endsWith=function(b,a){if(a===undefined||a>this.length){a=this.length
}return this.substring(a-b.length,a)===b
}
}new function(e){var d=e.separator||"&";
var c=e.spaces===false?false:true;
var a=e.suffix===false?"":"[]";
var g=e.prefix===false?false:true;
var b=g?e.hash===true?"#":"?":"";
var f=e.numbers===false?false:true;
jQuery.query=new function(){var h=function(m,l){return m!=undefined&&m!==null&&(!!l?m.constructor==l:true)
};
var i=function(r){var l,q=/\[([^[]*)\]/g,n=/^([^[]+)(\[.*\])?$/.exec(r),o=n[1],p=[];
while(l=q.exec(n[2])){p.push(l[1])
}return[o,p]
};
var k=function(s,r,q){var t,p=r.shift();
if(typeof s!="object"){s=null
}if(p===""){if(!s){s=[]
}if(h(s,Array)){s.push(r.length==0?q:k(null,r.slice(0),q))
}else{if(h(s,Object)){var n=0;
while(s[n++]!=null){}s[--n]=r.length==0?q:k(s[n],r.slice(0),q)
}else{s=[];
s.push(r.length==0?q:k(null,r.slice(0),q))
}}}else{if(p&&p.match(/^\s*[0-9]+\s*$/)){var m=parseInt(p,10);
if(!s){s=[]
}s[m]=r.length==0?q:k(s[m],r.slice(0),q)
}else{if(p){var m=p.replace(/^\s*|\s*$/g,"");
if(!s){s={}
}if(h(s,Array)){var l={};
for(var n=0;
n<s.length;
++n){l[n]=s[n]
}s=l
}s[m]=r.length==0?q:k(s[m],r.slice(0),q)
}else{return q
}}}return s
};
var j=function(l){var m=this;
m.keys={};
if(l.queryObject){jQuery.each(l.get(),function(n,o){m.SET(n,o)
})
}else{m.parseNew.apply(m,arguments)
}return m
};
j.prototype={queryObject:true,parseNew:function(){var l=this;
l.keys={};
jQuery.each(arguments,function(){var m=""+this;
m=m.replace(/^[?#]/,"");
m=m.replace(/[;&]$/,"");
if(c){m=m.replace(/[+]/g," ")
}jQuery.each(m.split(/[&;]/),function(){var n=decodeURIComponent(this.split("=")[0]||"");
var o=decodeURIComponent(this.split("=")[1]||"");
if(!n){return
}if(f){if(/^[+-]?[0-9]+\.[0-9]*$/.test(o)){o=parseFloat(o)
}else{if(/^[+-]?[1-9][0-9]*$/.test(o)){o=parseInt(o,10)
}}}o=(!o&&o!==0)?true:o;
l.SET(n,o)
})
});
return l
},has:function(l,m){var n=this.get(l);
return h(n,m)
},GET:function(m){if(!h(m)){return this.keys
}var l=i(m),n=l[0],p=l[1];
var o=this.keys[n];
while(o!=null&&p.length!=0){o=o[p.shift()]
}return typeof o=="number"?o:o||""
},get:function(l){var m=this.GET(l);
if(h(m,Object)){return jQuery.extend(true,{},m)
}else{if(h(m,Array)){return m.slice(0)
}}return m
},SET:function(m,r){var o=!h(r)?null:r;
var l=i(m),n=l[0],q=l[1];
var p=this.keys[n];
this.keys[n]=k(p,q.slice(0),o);
return this
},set:function(l,m){return this.copy().SET(l,m)
},REMOVE:function(m,o){if(o){var n=this.GET(m);
if(h(n,Array)){for(tval in n){n[tval]=n[tval].toString()
}var l=$.inArray(o,n);
if(l>=0){m=n.splice(l,1);
m=m[l]
}else{return
}}else{if(o!=n){return
}}}return this.SET(m,null).COMPACT()
},remove:function(l,m){return this.copy().REMOVE(l,m)
},EMPTY:function(){var l=this;
jQuery.each(l.keys,function(m,n){delete l.keys[m]
});
return l
},load:function(l){var n=l.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");
var m=l.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");
return new j(l.length==m.length?"":m,l.length==n.length?"":n)
},empty:function(){return this.copy().EMPTY()
},copy:function(){return new j(this)
},COMPACT:function(){function l(o){var n=typeof o=="object"?h(o,Array)?[]:{}:o;
if(typeof o=="object"){function m(r,p,q){if(h(r,Array)){r.push(q)
}else{r[p]=q
}}jQuery.each(o,function(p,q){if(!h(q)){return true
}m(n,p,l(q))
})
}return n
}this.keys=l(this.keys);
return this
},compact:function(){return this.copy().COMPACT()
},toString:function(){var n=0,r=[],q=[],m=this;
var o=function(s){s=s+"";
s=encodeURIComponent(s);
if(c){s=s.replace(/%20/g,"+")
}return s
};
var l=function(s,t,u){if(!h(u)||u===false){return
}var v=[o(t)];
if(u!==true){v.push("=");
v.push(o(u))
}s.push(v.join(""))
};
var p=function(t,s){var u=function(v){return !s||s==""?[v].join(""):[s,"[",v,"]"].join("")
};
jQuery.each(t,function(v,w){if(typeof w=="object"){p(w,u(v))
}else{l(q,u(v),w)
}})
};
p(this.keys);
if(q.length>0){r.push(b)
}r.push(q.join(d));
return r.join("")
}};
return new j(location.search,location.hash)
}
}(jQuery.query||{});
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.moment=a()
}(this,(function(){var b7;
function ex(){return b7.apply(null,arguments)
}function aP(eX){b7=eX
}function V(eX){return eX instanceof Array||Object.prototype.toString.call(eX)==="[object Array]"
}function v(eX){return eX!=null&&Object.prototype.toString.call(eX)==="[object Object]"
}function ce(eY){var eX;
for(eX in eY){return false
}return true
}function F(eX){return eX===void 0
}function q(eX){return typeof eX==="number"||Object.prototype.toString.call(eX)==="[object Number]"
}function eq(eX){return eX instanceof Date||Object.prototype.toString.call(eX)==="[object Date]"
}function bl(eX,e0){var eZ=[],eY;
for(eY=0;
eY<eX.length;
++eY){eZ.push(e0(eX[eY],eY))
}return eZ
}function dh(eY,eX){return Object.prototype.hasOwnProperty.call(eY,eX)
}function eR(eY,eX){for(var eZ in eX){if(dh(eX,eZ)){eY[eZ]=eX[eZ]
}}if(dh(eX,"toString")){eY.toString=eX.toString
}if(dh(eX,"valueOf")){eY.valueOf=eX.valueOf
}return eY
}function cr(eZ,e0,eX,eY){return ac(eZ,e0,eX,eY,true).utc()
}function cn(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false}
}function a9(eX){if(eX._pf==null){eX._pf=cn()
}return eX._pf
}var dl;
if(Array.prototype.some){dl=Array.prototype.some
}else{dl=function(eY){var e0=Object(this);
var eX=e0.length>>>0;
for(var eZ=0;
eZ<eX;
eZ++){if(eZ in e0&&eY.call(this,e0[eZ],eZ,e0)){return true
}}return false
}
}var cD=dl;
function an(eY){if(eY._isValid==null){var eZ=a9(eY);
var e0=cD.call(eZ.parsedDateParts,function(e1){return e1!=null
});
var eX=!isNaN(eY._d.getTime())&&eZ.overflow<0&&!eZ.empty&&!eZ.invalidMonth&&!eZ.invalidWeekday&&!eZ.nullInput&&!eZ.invalidFormat&&!eZ.userInvalidated&&(!eZ.meridiem||(eZ.meridiem&&e0));
if(eY._strict){eX=eX&&eZ.charsLeftOver===0&&eZ.unusedTokens.length===0&&eZ.bigHour===undefined
}if(Object.isFrozen==null||!Object.isFrozen(eY)){eY._isValid=eX
}else{return eX
}}return eY._isValid
}function N(eY){var eX=cr(NaN);
if(eY!=null){eR(a9(eX),eY)
}else{a9(eX).userInvalidated=true
}return eX
}var cP=ex.momentProperties=[];
function p(e1,e0){var eX,eZ,eY;
if(!F(e0._isAMomentObject)){e1._isAMomentObject=e0._isAMomentObject
}if(!F(e0._i)){e1._i=e0._i
}if(!F(e0._f)){e1._f=e0._f
}if(!F(e0._l)){e1._l=e0._l
}if(!F(e0._strict)){e1._strict=e0._strict
}if(!F(e0._tzm)){e1._tzm=e0._tzm
}if(!F(e0._isUTC)){e1._isUTC=e0._isUTC
}if(!F(e0._offset)){e1._offset=e0._offset
}if(!F(e0._pf)){e1._pf=a9(e0)
}if(!F(e0._locale)){e1._locale=e0._locale
}if(cP.length>0){for(eX=0;
eX<cP.length;
eX++){eZ=cP[eX];
eY=e0[eZ];
if(!F(eY)){e1[eZ]=eY
}}}return e1
}var db=false;
function em(eX){p(this,eX);
this._d=new Date(eX._d!=null?eX._d.getTime():NaN);
if(!this.isValid()){this._d=new Date(NaN)
}if(db===false){db=true;
ex.updateOffset(this);
db=false
}}function b8(eX){return eX instanceof em||(eX!=null&&eX._isAMomentObject!=null)
}function de(eX){if(eX<0){return Math.ceil(eX)||0
}else{return Math.floor(eX)
}}function cM(eX){var eZ=+eX,eY=0;
if(eZ!==0&&isFinite(eZ)){eY=de(eZ)
}return eY
}function bW(e2,e1,eY){var eX=Math.min(e2.length,e1.length),eZ=Math.abs(e2.length-e1.length),e3=0,e0;
for(e0=0;
e0<eX;
e0++){if((eY&&e2[e0]!==e1[e0])||(!eY&&cM(e2[e0])!==cM(e1[e0]))){e3++
}}return e3+eZ
}function da(eX){if(ex.suppressDeprecationWarnings===false&&(typeof console!=="undefined")&&console.warn){console.warn("Deprecation warning: "+eX)
}}function eb(eY,eX){var eZ=true;
return eR(function(){if(ex.deprecationHandler!=null){ex.deprecationHandler(null,eY)
}if(eZ){var e1=[];
var e0;
for(var e3=0;
e3<arguments.length;
e3++){e0="";
if(typeof arguments[e3]==="object"){e0+="\n["+e3+"] ";
for(var e2 in arguments[0]){e0+=e2+": "+arguments[0][e2]+", "
}e0=e0.slice(0,-2)
}else{e0=arguments[e3]
}e1.push(e0)
}da(eY+"\nArguments: "+Array.prototype.slice.call(e1).join("")+"\n"+(new Error()).stack);
eZ=false
}return eX.apply(this,arguments)
},eX)
}var aa={};
function eK(eX,eY){if(ex.deprecationHandler!=null){ex.deprecationHandler(eX,eY)
}if(!aa[eX]){da(eY);
aa[eX]=true
}}ex.suppressDeprecationWarnings=false;
ex.deprecationHandler=null;
function a4(eX){return eX instanceof Function||Object.prototype.toString.call(eX)==="[object Function]"
}function dj(eX){var eZ,eY;
for(eY in eX){eZ=eX[eY];
if(a4(eZ)){this[eY]=eZ
}else{this["_"+eY]=eZ
}}this._config=eX;
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+(/\d{1,2}/).source)
}function d4(eZ,eX){var eY=eR({},eZ),e0;
for(e0 in eX){if(dh(eX,e0)){if(v(eZ[e0])&&v(eX[e0])){eY[e0]={};
eR(eY[e0],eZ[e0]);
eR(eY[e0],eX[e0])
}else{if(eX[e0]!=null){eY[e0]=eX[e0]
}else{delete eY[e0]
}}}}for(e0 in eZ){if(dh(eZ,e0)&&!dh(eX,e0)&&v(eZ[e0])){eY[e0]=eR({},eY[e0])
}}return eY
}function cy(eX){if(eX!=null){this.set(eX)
}}var bT;
if(Object.keys){bT=Object.keys
}else{bT=function(eZ){var eY,eX=[];
for(eY in eZ){if(dh(eZ,eY)){eX.push(eY)
}}return eX
}
}var dJ=bT;
var cg={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
function d(eZ,e0,eY){var eX=this._calendar[eZ]||this._calendar.sameElse;
return a4(eX)?eX.call(e0,eY):eX
}var dU={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
function cG(eX){var eY=this._longDateFormat[eX],eZ=this._longDateFormat[eX.toUpperCase()];
if(eY||!eZ){return eY
}this._longDateFormat[eX]=eZ.replace(/MMMM|MM|DD|dddd/g,function(e0){return e0.slice(1)
});
return this._longDateFormat[eX]
}var al="Invalid date";
function ek(){return this._invalidDate
}var b3="%d";
var eV=/\d{1,2}/;
function ev(eX){return this._ordinal.replace("%d",eX)
}var eu={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
function T(e0,eZ,eY,e1){var eX=this._relativeTime[eY];
return(a4(eX))?eX(e0,eZ,eY,e1):eX.replace(/%d/i,e0)
}function dV(eZ,eX){var eY=this._relativeTime[eZ>0?"future":"past"];
return a4(eY)?eY(eX):eY.replace(/%s/i,eX)
}var cH={};
function cb(eZ,eX){var eY=eZ.toLowerCase();
cH[eY]=cH[eY+"s"]=cH[eX]=eZ
}function cL(eX){return typeof eX==="string"?cH[eX]||cH[eX.toLowerCase()]:undefined
}function dH(eZ){var eY={},eX,e0;
for(e0 in eZ){if(dh(eZ,e0)){eX=cL(e0);
if(eX){eY[eX]=eZ[e0]
}}}return eY
}var bq={};
function dT(eY,eX){bq[eY]=eX
}function bn(eX){var eY=[];
for(var eZ in eX){eY.push({unit:eZ,priority:bq[eZ]})
}eY.sort(function(e1,e0){return e1.priority-e0.priority
});
return eY
}function d8(eX,eY){return function(eZ){if(eZ!=null){aK(this,eX,eZ);
ex.updateOffset(this,eY);
return this
}else{return dx(this,eX)
}}
}function dx(eY,eX){return eY.isValid()?eY._d["get"+(eY._isUTC?"UTC":"")+eX]():NaN
}function aK(eY,eX,eZ){if(eY.isValid()){eY._d["set"+(eY._isUTC?"UTC":"")+eX](eZ)
}}function ay(eX){eX=cL(eX);
if(a4(this[eX])){return this[eX]()
}return this
}function at(eX,e0){if(typeof eX==="object"){eX=dH(eX);
var eZ=bn(eX);
for(var eY=0;
eY<eZ.length;
eY++){this[eZ[eY].unit](eX[eZ[eY].unit])
}}else{eX=cL(eX);
if(a4(this[eX])){return this[eX](e0)
}}return this
}function ck(e2,e1,eY){var e0=""+Math.abs(e2),eZ=e1-e0.length,eX=e2>=0;
return(eX?(eY?"+":""):"-")+Math.pow(10,Math.max(0,eZ)).toString().substr(1)+e0
}var bO=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var bN=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var bM={};
var a7={};
function ct(eY,eZ,eX,e1){var e0=e1;
if(typeof e1==="string"){e0=function(){return this[e1]()
}
}if(eY){a7[eY]=e0
}if(eZ){a7[eZ[0]]=function(){return ck(e0.apply(this,arguments),eZ[1],eZ[2])
}
}if(eX){a7[eX]=function(){return this.localeData().ordinal(e0.apply(this,arguments),eY)
}
}}function av(eX){if(eX.match(/\[[\s\S]/)){return eX.replace(/^\[|\]$/g,"")
}return eX.replace(/\\/g,"")
}function bu(eZ){var e0=eZ.match(bO),eX,eY;
for(eX=0,eY=e0.length;
eX<eY;
eX++){if(a7[e0[eX]]){e0[eX]=a7[e0[eX]]
}else{e0[eX]=av(e0[eX])
}}return function(e3){var e1="",e2;
for(e2=0;
e2<eY;
e2++){e1+=a4(e0[e2])?e0[e2].call(e3,eZ):e0[e2]
}return e1
}
}function af(eX,eY){if(!eX.isValid()){return eX.localeData().invalidDate()
}eY=bC(eY,eX.localeData());
bM[eY]=bM[eY]||bu(eY);
return bM[eY](eX)
}function bC(e0,eX){var eY=5;
function eZ(e1){return eX.longDateFormat(e1)||e1
}bN.lastIndex=0;
while(eY>=0&&bN.test(e0)){e0=e0.replace(bN,eZ);
bN.lastIndex=0;
eY-=1
}return e0
}var aJ=/\d/;
var aI=/\d\d/;
var aH=/\d{3}/;
var aG=/\d{4}/;
var aF=/[+-]?\d{6}/;
var aq=/\d\d?/;
var ch=/\d\d\d\d?/;
var ea=/\d\d\d\d\d\d?/;
var ap=/\d{1,3}/;
var ao=/\d{1,4}/;
var am=/[+-]?\d{1,6}/;
var r=/\d+/;
var B=/[+-]?\d+/;
var bF=/Z|[+-]\d\d:?\d\d/gi;
var cA=/Z|[+-]\d\d(?::?\d\d)?/gi;
var eL=/[+-]?\d+(\.\d{1,3})?/;
var a6=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var a1={};
function bb(eX,eY,eZ){a1[eX]=a4(eY)?eY:function(e1,e0){return(e1&&eZ)?eZ:eY
}
}function bB(eY,eX){if(!dh(a1,eY)){return new RegExp(df(eY))
}return a1[eY](eX._strict,eX._locale)
}function df(eX){return cd(eX.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(eY,e2,e1,e0,eZ){return e2||e1||e0||eZ
}))
}function cd(eX){return eX.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}var g={};
function bR(eY,e0){var eX,eZ=e0;
if(typeof eY==="string"){eY=[eY]
}if(q(e0)){eZ=function(e1,e2){e2[e0]=cM(e1)
}
}for(eX=0;
eX<eY.length;
eX++){g[eY[eX]]=eZ
}}function X(eX,eY){bR(eX,function(eZ,e2,e0,e1){e0._w=e0._w||{};
eY(eZ,e0._w,e0,e1)
})
}function u(eZ,eX,eY){if(eX!=null&&dh(g,eZ)){g[eZ](eX,eY._a,eY,eZ)
}}var eM=0;
var i=1;
var eo=2;
var eB=3;
var dE=4;
var ai=5;
var bH=6;
var cf=7;
var h=8;
var cN;
if(Array.prototype.indexOf){cN=Array.prototype.indexOf
}else{cN=function(eY){var eX;
for(eX=0;
eX<this.length;
++eX){if(this[eX]===eY){return eX
}}return -1
}
}var c5=cN;
function bE(eX,eY){return new Date(Date.UTC(eX,eY+1,0)).getUTCDate()
}ct("M",["MM",2],"Mo",function(){return this.month()+1
});
ct("MMM",0,0,function(eX){return this.localeData().monthsShort(this,eX)
});
ct("MMMM",0,0,function(eX){return this.localeData().months(this,eX)
});
cb("month","M");
dT("month",8);
bb("M",aq);
bb("MM",aq,aI);
bb("MMM",function(eY,eX){return eX.monthsShortRegex(eY)
});
bb("MMMM",function(eY,eX){return eX.monthsRegex(eY)
});
bR(["M","MM"],function(eX,eY){eY[i]=cM(eX)-1
});
bR(["MMM","MMMM"],function(eX,e1,eY,eZ){var e0=eY._locale.monthsParse(eX,eZ,eY._strict);
if(e0!=null){e1[i]=e0
}else{a9(eY).invalidMonth=eX
}});
var b0=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var P="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function aZ(eX,eY){if(!eX){return V(this._months)?this._months:this._months.standalone
}return V(this._months)?this._months[eX.month()]:this._months[(this._months.isFormat||b0).test(eY)?"format":"standalone"][eX.month()]
}var dY="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function a8(eX,eY){if(!eX){return V(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
}return V(this._monthsShort)?this._monthsShort[eX.month()]:this._monthsShort[b0.test(eY)?"format":"standalone"][eX.month()]
}function bz(eY,e3,eX){var e0,e1,e2,eZ=eY.toLocaleLowerCase();
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[];
for(e0=0;
e0<12;
++e0){e2=cr([2000,e0]);
this._shortMonthsParse[e0]=this.monthsShort(e2,"").toLocaleLowerCase();
this._longMonthsParse[e0]=this.months(e2,"").toLocaleLowerCase()
}}if(eX){if(e3==="MMM"){e1=c5.call(this._shortMonthsParse,eZ);
return e1!==-1?e1:null
}else{e1=c5.call(this._longMonthsParse,eZ);
return e1!==-1?e1:null
}}else{if(e3==="MMM"){e1=c5.call(this._shortMonthsParse,eZ);
if(e1!==-1){return e1
}e1=c5.call(this._longMonthsParse,eZ);
return e1!==-1?e1:null
}else{e1=c5.call(this._longMonthsParse,eZ);
if(e1!==-1){return e1
}e1=c5.call(this._shortMonthsParse,eZ);
return e1!==-1?e1:null
}}}function c8(eY,e2,eX){var eZ,e1,e0;
if(this._monthsParseExact){return bz.call(this,eY,e2,eX)
}if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(eZ=0;
eZ<12;
eZ++){e1=cr([2000,eZ]);
if(eX&&!this._longMonthsParse[eZ]){this._longMonthsParse[eZ]=new RegExp("^"+this.months(e1,"").replace(".","")+"$","i");
this._shortMonthsParse[eZ]=new RegExp("^"+this.monthsShort(e1,"").replace(".","")+"$","i")
}if(!eX&&!this._monthsParse[eZ]){e0="^"+this.months(e1,"")+"|^"+this.monthsShort(e1,"");
this._monthsParse[eZ]=new RegExp(e0.replace(".",""),"i")
}if(eX&&e2==="MMMM"&&this._longMonthsParse[eZ].test(eY)){return eZ
}else{if(eX&&e2==="MMM"&&this._shortMonthsParse[eZ].test(eY)){return eZ
}else{if(!eX&&this._monthsParse[eZ].test(eY)){return eZ
}}}}}function aT(eX,eY){var eZ;
if(!eX.isValid()){return eX
}if(typeof eY==="string"){if(/^\d+$/.test(eY)){eY=cM(eY)
}else{eY=eX.localeData().monthsParse(eY);
if(!q(eY)){return eX
}}}eZ=Math.min(eX.date(),bE(eX.year(),eY));
eX._d["set"+(eX._isUTC?"UTC":"")+"Month"](eY,eZ);
return eX
}function eA(eX){if(eX!=null){aT(this,eX);
ex.updateOffset(this,true);
return this
}else{return dx(this,"Month")
}}function bK(){return bE(this.year(),this.month())
}var dd=a6;
function dg(eX){if(this._monthsParseExact){if(!dh(this,"_monthsRegex")){di.call(this)
}if(eX){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{if(!dh(this,"_monthsShortRegex")){this._monthsShortRegex=dd
}return this._monthsShortStrictRegex&&eX?this._monthsShortStrictRegex:this._monthsShortRegex
}}var es=a6;
function cV(eX){if(this._monthsParseExact){if(!dh(this,"_monthsRegex")){di.call(this)
}if(eX){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{if(!dh(this,"_monthsRegex")){this._monthsRegex=es
}return this._monthsStrictRegex&&eX?this._monthsStrictRegex:this._monthsRegex
}}function di(){function e2(e4,e3){return e3.length-e4.length
}var e1=[],eX=[],e0=[],eY,eZ;
for(eY=0;
eY<12;
eY++){eZ=cr([2000,eY]);
e1.push(this.monthsShort(eZ,""));
eX.push(this.months(eZ,""));
e0.push(this.months(eZ,""));
e0.push(this.monthsShort(eZ,""))
}e1.sort(e2);
eX.sort(e2);
e0.sort(e2);
for(eY=0;
eY<12;
eY++){e1[eY]=cd(e1[eY]);
eX[eY]=cd(eX[eY])
}for(eY=0;
eY<24;
eY++){e0[eY]=cd(e0[eY])
}this._monthsRegex=new RegExp("^("+e0.join("|")+")","i");
this._monthsShortRegex=this._monthsRegex;
this._monthsStrictRegex=new RegExp("^("+eX.join("|")+")","i");
this._monthsShortStrictRegex=new RegExp("^("+e1.join("|")+")","i")
}ct("Y",0,0,function(){var eX=this.year();
return eX<=9999?""+eX:"+"+eX
});
ct(0,["YY",2],0,function(){return this.year()%100
});
ct(0,["YYYY",4],0,"year");
ct(0,["YYYYY",5],0,"year");
ct(0,["YYYYYY",6,true],0,"year");
cb("year","y");
dT("year",1);
bb("Y",B);
bb("YY",aq,aI);
bb("YYYY",ao,aG);
bb("YYYYY",am,aF);
bb("YYYYYY",am,aF);
bR(["YYYYY","YYYYYY"],eM);
bR("YYYY",function(eX,eY){eY[eM]=eX.length===2?ex.parseTwoDigitYear(eX):cM(eX)
});
bR("YY",function(eX,eY){eY[eM]=ex.parseTwoDigitYear(eX)
});
bR("Y",function(eX,eY){eY[eM]=parseInt(eX,10)
});
function dC(eX){return dX(eX)?366:365
}function dX(eX){return(eX%4===0&&eX%100!==0)||eX%400===0
}ex.parseTwoDigitYear=function(eX){return cM(eX)+(cM(eX)>68?1900:2000)
};
var cC=d8("FullYear",true);
function cS(){return dX(this.year())
}function d5(e4,eX,e2,e1,e3,e0,eZ){var eY=new Date(e4,eX,e2,e1,e3,e0,eZ);
if(e4<100&&e4>=0&&isFinite(eY.getFullYear())){eY.setFullYear(e4)
}return eY
}function dr(eY){var eX=new Date(Date.UTC.apply(null,arguments));
if(eY<100&&eY>=0&&isFinite(eX.getUTCFullYear())){eX.setUTCFullYear(eY)
}return eX
}function bg(eY,e1,e0){var eX=7+e1-e0,eZ=(7+dr(eY,0,eX).getUTCDay()-e1)%7;
return -eZ+eX-1
}function bx(e0,eY,eZ,e6,e4){var e5=(7+eZ-e6)%7,eX=bg(e0,e6,e4),e2=1+7*(eY-1)+e5+eX,e3,e1;
if(e2<=0){e3=e0-1;
e1=dC(e3)+e2
}else{if(e2>dC(e0)){e3=e0+1;
e1=e2-dC(e0)
}else{e3=e0;
e1=e2
}}return{year:e3,dayOfYear:e1}
}function en(e1,e3,e2){var eZ=bg(e1.year(),e3,e2),e0=Math.floor((e1.dayOfYear()-eZ-1)/7)+1,eX,eY;
if(e0<1){eY=e1.year()-1;
eX=e0+E(eY,e3,e2)
}else{if(e0>E(e1.year(),e3,e2)){eX=e0-E(e1.year(),e3,e2);
eY=e1.year()+1
}else{eY=e1.year();
eX=e0
}}return{week:eX,year:eY}
}function E(eY,e1,eZ){var eX=bg(eY,e1,eZ),e0=bg(eY+1,e1,eZ);
return(dC(eY)-eX+e0)/7
}ct("w",["ww",2],"wo","week");
ct("W",["WW",2],"Wo","isoWeek");
cb("week","w");
cb("isoWeek","W");
dT("week",5);
dT("isoWeek",5);
bb("w",aq);
bb("ww",aq,aI);
bb("W",aq);
bb("WW",aq,aI);
X(["w","ww","W","WW"],function(eX,e0,eY,eZ){e0[eZ.substr(0,1)]=cM(eX)
});
function bm(eX){return en(eX,this._week.dow,this._week.doy).week
}var bZ={dow:0,doy:6};
function ag(){return this._week.dow
}function c6(){return this._week.doy
}function J(eX){var eY=this.localeData().week(this);
return eX==null?eY:this.add((eX-eY)*7,"d")
}function x(eX){var eY=en(this,1,4).week;
return eX==null?eY:this.add((eX-eY)*7,"d")
}ct("d",0,"do","day");
ct("dd",0,0,function(eX){return this.localeData().weekdaysMin(this,eX)
});
ct("ddd",0,0,function(eX){return this.localeData().weekdaysShort(this,eX)
});
ct("dddd",0,0,function(eX){return this.localeData().weekdays(this,eX)
});
ct("e",0,0,"weekday");
ct("E",0,0,"isoWeekday");
cb("day","d");
cb("weekday","e");
cb("isoWeekday","E");
dT("day",11);
dT("weekday",11);
dT("isoWeekday",11);
bb("d",aq);
bb("e",aq);
bb("E",aq);
bb("dd",function(eY,eX){return eX.weekdaysMinRegex(eY)
});
bb("ddd",function(eY,eX){return eX.weekdaysShortRegex(eY)
});
bb("dddd",function(eY,eX){return eX.weekdaysRegex(eY)
});
X(["dd","ddd","dddd"],function(eX,e0,eY,eZ){var e1=eY._locale.weekdaysParse(eX,eZ,eY._strict);
if(e1!=null){e0.d=e1
}else{a9(eY).invalidWeekday=eX
}});
X(["d","e","E"],function(eX,e0,eY,eZ){e0[eZ]=cM(eX)
});
function bf(eY,eX){if(typeof eY!=="string"){return eY
}if(!isNaN(eY)){return parseInt(eY,10)
}eY=eX.weekdaysParse(eY);
if(typeof eY==="number"){return eY
}return null
}function bA(eY,eX){if(typeof eY==="string"){return eX.weekdaysParse(eY)%7||7
}return isNaN(eY)?null:eY
}var S="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function aw(eX,eY){if(!eX){return V(this._weekdays)?this._weekdays:this._weekdays.standalone
}return V(this._weekdays)?this._weekdays[eX.day()]:this._weekdays[this._weekdays.isFormat.test(eY)?"format":"standalone"][eX.day()]
}var k="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function M(eX){return(eX)?this._weekdaysShort[eX.day()]:this._weekdaysShort
}var br="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function ey(eX){return(eX)?this._weekdaysMin[eX.day()]:this._weekdaysMin
}function dK(e2,e3,eX){var eZ,e0,e1,eY=e2.toLocaleLowerCase();
if(!this._weekdaysParse){this._weekdaysParse=[];
this._shortWeekdaysParse=[];
this._minWeekdaysParse=[];
for(eZ=0;
eZ<7;
++eZ){e1=cr([2000,1]).day(eZ);
this._minWeekdaysParse[eZ]=this.weekdaysMin(e1,"").toLocaleLowerCase();
this._shortWeekdaysParse[eZ]=this.weekdaysShort(e1,"").toLocaleLowerCase();
this._weekdaysParse[eZ]=this.weekdays(e1,"").toLocaleLowerCase()
}}if(eX){if(e3==="dddd"){e0=c5.call(this._weekdaysParse,eY);
return e0!==-1?e0:null
}else{if(e3==="ddd"){e0=c5.call(this._shortWeekdaysParse,eY);
return e0!==-1?e0:null
}else{e0=c5.call(this._minWeekdaysParse,eY);
return e0!==-1?e0:null
}}}else{if(e3==="dddd"){e0=c5.call(this._weekdaysParse,eY);
if(e0!==-1){return e0
}e0=c5.call(this._shortWeekdaysParse,eY);
if(e0!==-1){return e0
}e0=c5.call(this._minWeekdaysParse,eY);
return e0!==-1?e0:null
}else{if(e3==="ddd"){e0=c5.call(this._shortWeekdaysParse,eY);
if(e0!==-1){return e0
}e0=c5.call(this._weekdaysParse,eY);
if(e0!==-1){return e0
}e0=c5.call(this._minWeekdaysParse,eY);
return e0!==-1?e0:null
}else{e0=c5.call(this._minWeekdaysParse,eY);
if(e0!==-1){return e0
}e0=c5.call(this._weekdaysParse,eY);
if(e0!==-1){return e0
}e0=c5.call(this._shortWeekdaysParse,eY);
return e0!==-1?e0:null
}}}}function bJ(e1,e2,eX){var eY,e0,eZ;
if(this._weekdaysParseExact){return dK.call(this,e1,e2,eX)
}if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(eY=0;
eY<7;
eY++){e0=cr([2000,1]).day(eY);
if(eX&&!this._fullWeekdaysParse[eY]){this._fullWeekdaysParse[eY]=new RegExp("^"+this.weekdays(e0,"").replace(".",".?")+"$","i");
this._shortWeekdaysParse[eY]=new RegExp("^"+this.weekdaysShort(e0,"").replace(".",".?")+"$","i");
this._minWeekdaysParse[eY]=new RegExp("^"+this.weekdaysMin(e0,"").replace(".",".?")+"$","i")
}if(!this._weekdaysParse[eY]){eZ="^"+this.weekdays(e0,"")+"|^"+this.weekdaysShort(e0,"")+"|^"+this.weekdaysMin(e0,"");
this._weekdaysParse[eY]=new RegExp(eZ.replace(".",""),"i")
}if(eX&&e2==="dddd"&&this._fullWeekdaysParse[eY].test(e1)){return eY
}else{if(eX&&e2==="ddd"&&this._shortWeekdaysParse[eY].test(e1)){return eY
}else{if(eX&&e2==="dd"&&this._minWeekdaysParse[eY].test(e1)){return eY
}else{if(!eX&&this._weekdaysParse[eY].test(e1)){return eY
}}}}}}function ef(eY){if(!this.isValid()){return eY!=null?this:NaN
}var eX=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(eY!=null){eY=bf(eY,this.localeData());
return this.add(eY-eX,"d")
}else{return eX
}}function ad(eX){if(!this.isValid()){return eX!=null?this:NaN
}var eY=(this.day()+7-this.localeData()._week.dow)%7;
return eX==null?eY:this.add(eX-eY,"d")
}function cp(eX){if(!this.isValid()){return eX!=null?this:NaN
}if(eX!=null){var eY=bA(eX,this.localeData());
return this.day(this.day()%7?eY:eY-7)
}else{return this.day()||7
}}var ab=a6;
function eO(eX){if(this._weekdaysParseExact){if(!dh(this,"_weekdaysRegex")){z.call(this)
}if(eX){return this._weekdaysStrictRegex
}else{return this._weekdaysRegex
}}else{if(!dh(this,"_weekdaysRegex")){this._weekdaysRegex=ab
}return this._weekdaysStrictRegex&&eX?this._weekdaysStrictRegex:this._weekdaysRegex
}}var w=a6;
function aE(eX){if(this._weekdaysParseExact){if(!dh(this,"_weekdaysRegex")){z.call(this)
}if(eX){return this._weekdaysShortStrictRegex
}else{return this._weekdaysShortRegex
}}else{if(!dh(this,"_weekdaysShortRegex")){this._weekdaysShortRegex=w
}return this._weekdaysShortStrictRegex&&eX?this._weekdaysShortStrictRegex:this._weekdaysShortRegex
}}var dR=a6;
function D(eX){if(this._weekdaysParseExact){if(!dh(this,"_weekdaysRegex")){z.call(this)
}if(eX){return this._weekdaysMinStrictRegex
}else{return this._weekdaysMinRegex
}}else{if(!dh(this,"_weekdaysMinRegex")){this._weekdaysMinRegex=dR
}return this._weekdaysMinStrictRegex&&eX?this._weekdaysMinStrictRegex:this._weekdaysMinRegex
}}function z(){function e0(e8,e7){return e7.length-e8.length
}var e2=[],e3=[],e6=[],eX=[],e1,eZ,eY,e4,e5;
for(e1=0;
e1<7;
e1++){eZ=cr([2000,1]).day(e1);
eY=this.weekdaysMin(eZ,"");
e4=this.weekdaysShort(eZ,"");
e5=this.weekdays(eZ,"");
e2.push(eY);
e3.push(e4);
e6.push(e5);
eX.push(eY);
eX.push(e4);
eX.push(e5)
}e2.sort(e0);
e3.sort(e0);
e6.sort(e0);
eX.sort(e0);
for(e1=0;
e1<7;
e1++){e3[e1]=cd(e3[e1]);
e6[e1]=cd(e6[e1]);
eX[e1]=cd(eX[e1])
}this._weekdaysRegex=new RegExp("^("+eX.join("|")+")","i");
this._weekdaysShortRegex=this._weekdaysRegex;
this._weekdaysMinRegex=this._weekdaysRegex;
this._weekdaysStrictRegex=new RegExp("^("+e6.join("|")+")","i");
this._weekdaysShortStrictRegex=new RegExp("^("+e3.join("|")+")","i");
this._weekdaysMinStrictRegex=new RegExp("^("+e2.join("|")+")","i")
}function dv(){return this.hours()%12||12
}function O(){return this.hours()||24
}ct("H",["HH",2],0,"hour");
ct("h",["hh",2],0,dv);
ct("k",["kk",2],0,O);
ct("hmm",0,0,function(){return""+dv.apply(this)+ck(this.minutes(),2)
});
ct("hmmss",0,0,function(){return""+dv.apply(this)+ck(this.minutes(),2)+ck(this.seconds(),2)
});
ct("Hmm",0,0,function(){return""+this.hours()+ck(this.minutes(),2)
});
ct("Hmmss",0,0,function(){return""+this.hours()+ck(this.minutes(),2)+ck(this.seconds(),2)
});
function ei(eX,eY){ct(eX,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),eY)
})
}ei("a",true);
ei("A",false);
cb("hour","h");
dT("hour",13);
function R(eY,eX){return eX._meridiemParse
}bb("a",R);
bb("A",R);
bb("H",aq);
bb("h",aq);
bb("k",aq);
bb("HH",aq,aI);
bb("hh",aq,aI);
bb("kk",aq,aI);
bb("hmm",ch);
bb("hmmss",ea);
bb("Hmm",ch);
bb("Hmmss",ea);
bR(["H","HH"],eB);
bR(["k","kk"],function(eY,e0,eZ){var eX=cM(eY);
e0[eB]=eX===24?0:eX
});
bR(["a","A"],function(eX,eZ,eY){eY._isPm=eY._locale.isPM(eX);
eY._meridiem=eX
});
bR(["h","hh"],function(eX,eZ,eY){eZ[eB]=cM(eX);
a9(eY).bigHour=true
});
bR("hmm",function(eX,e0,eY){var eZ=eX.length-2;
e0[eB]=cM(eX.substr(0,eZ));
e0[dE]=cM(eX.substr(eZ));
a9(eY).bigHour=true
});
bR("hmmss",function(eX,e1,eY){var e0=eX.length-4;
var eZ=eX.length-2;
e1[eB]=cM(eX.substr(0,e0));
e1[dE]=cM(eX.substr(e0,2));
e1[ai]=cM(eX.substr(eZ));
a9(eY).bigHour=true
});
bR("Hmm",function(eX,e0,eY){var eZ=eX.length-2;
e0[eB]=cM(eX.substr(0,eZ));
e0[dE]=cM(eX.substr(eZ))
});
bR("Hmmss",function(eX,e1,eY){var e0=eX.length-4;
var eZ=eX.length-2;
e1[eB]=cM(eX.substr(0,e0));
e1[dE]=cM(eX.substr(e0,2));
e1[ai]=cM(eX.substr(eZ))
});
function ca(eX){return((eX+"").toLowerCase().charAt(0)==="p")
}var b2=/[ap]\.?m?\.?/i;
function aR(eX,eY,eZ){if(eX>11){return eZ?"pm":"PM"
}else{return eZ?"am":"AM"
}}var cl=d8("Hours",true);
var bY={calendar:cg,longDateFormat:dU,invalidDate:al,ordinal:b3,dayOfMonthOrdinalParse:eV,relativeTime:eu,months:P,monthsShort:dY,week:bZ,weekdays:S,weekdaysMin:br,weekdaysShort:k,meridiemParse:b2};
var bv={};
var l={};
var cU;
function dk(eX){return eX?eX.toLowerCase().replace("_","-"):eX
}function cT(e2){var e0=0,eY,e1,eX,eZ;
while(e0<e2.length){eZ=dk(e2[e0]).split("-");
eY=eZ.length;
e1=dk(e2[e0+1]);
e1=e1?e1.split("-"):null;
while(eY>0){eX=aA(eZ.slice(0,eY).join("-"));
if(eX){return eX
}if(e1&&e1.length>=eY&&bW(eZ,e1,true)>=eY-1){break
}eY--
}e0++
}return null
}function aA(eX){var eZ=null;
if(!bv[eX]&&(typeof module!=="undefined")&&module&&module.exports){try{eZ=cU._abbr;
require("./locale/"+eX);
A(eZ)
}catch(eY){}}return bv[eX]
}function A(eY,eX){var eZ;
if(eY){if(F(eX)){eZ=Q(eY)
}else{eZ=cw(eY,eX)
}if(eZ){cU=eZ
}}return cU._abbr
}function cw(eY,eX){if(eX!==null){var eZ=bY;
eX.abbr=eY;
if(bv[eY]!=null){eK("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
eZ=bv[eY]._config
}else{if(eX.parentLocale!=null){if(bv[eX.parentLocale]!=null){eZ=bv[eX.parentLocale]._config
}else{if(!l[eX.parentLocale]){l[eX.parentLocale]=[]
}l[eX.parentLocale].push({name:eY,config:eX});
return null
}}}bv[eY]=new cy(d4(eZ,eX));
if(l[eY]){l[eY].forEach(function(e0){cw(e0.name,e0.config)
})
}A(eY);
return bv[eY]
}else{delete bv[eY];
return null
}}function eg(eZ,eY){if(eY!=null){var eX,e0=bY;
if(bv[eZ]!=null){e0=bv[eZ]._config
}eY=d4(e0,eY);
eX=new cy(eY);
eX.parentLocale=bv[eZ];
bv[eZ]=eX;
A(eZ)
}else{if(bv[eZ]!=null){if(bv[eZ].parentLocale!=null){bv[eZ]=bv[eZ].parentLocale
}else{if(bv[eZ]!=null){delete bv[eZ]
}}}}return bv[eZ]
}function Q(eY){var eX;
if(eY&&eY._locale&&eY._locale._abbr){eY=eY._locale._abbr
}if(!eY){return cU
}if(!V(eY)){eX=aA(eY);
if(eX){return eX
}eY=[eY]
}return cT(eY)
}function b1(){return dJ(bv)
}function cK(eX){var eZ;
var eY=eX._a;
if(eY&&a9(eX).overflow===-2){eZ=eY[i]<0||eY[i]>11?i:eY[eo]<1||eY[eo]>bE(eY[eM],eY[i])?eo:eY[eB]<0||eY[eB]>24||(eY[eB]===24&&(eY[dE]!==0||eY[ai]!==0||eY[bH]!==0))?eB:eY[dE]<0||eY[dE]>59?dE:eY[ai]<0||eY[ai]>59?ai:eY[bH]<0||eY[bH]>999?bH:-1;
if(a9(eX)._overflowDayOfYear&&(eZ<eM||eZ>eo)){eZ=eo
}if(a9(eX)._overflowWeeks&&eZ===-1){eZ=cf
}if(a9(eX)._overflowWeekday&&eZ===-1){eZ=h
}a9(eX).overflow=eZ
}return eX
}var j=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var aQ=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var cB=/Z|[+-]\d\d(?::?\d\d)?/;
var cO=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var cm=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var bS=/^\/?Date\((\-?\d+)/i;
function C(eY){var e2,e0,e4=eY._i,e3=j.exec(e4)||aQ.exec(e4),e5,eX,e1,eZ;
if(e3){a9(eY).iso=true;
for(e2=0,e0=cO.length;
e2<e0;
e2++){if(cO[e2][1].exec(e3[1])){eX=cO[e2][0];
e5=cO[e2][2]!==false;
break
}}if(eX==null){eY._isValid=false;
return
}if(e3[3]){for(e2=0,e0=cm.length;
e2<e0;
e2++){if(cm[e2][1].exec(e3[3])){e1=(e3[2]||" ")+cm[e2][0];
break
}}if(e1==null){eY._isValid=false;
return
}}if(!e5&&e1!=null){eY._isValid=false;
return
}if(e3[4]){if(cB.exec(e3[4])){eZ="Z"
}else{eY._isValid=false;
return
}}eY._f=eX+(e1||"")+(eZ||"");
bU(eY)
}else{eY._isValid=false
}}var bD=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
function bQ(e0){var e7,e6,e5,eX,e4,e1;
var e9={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"};
var e3="YXWVUTSRQPONZABCDEFGHIKLM";
var e8,eY;
e7=e0._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,"");
e6=bD.exec(e7);
if(e6){e5=e6[1]?"ddd"+((e6[1].length===5)?", ":" "):"";
eX="D MMM "+((e6[2].length>10)?"YYYY ":"YY ");
e4="HH:mm"+(e6[4]?":ss":"");
if(e6[1]){var e2=new Date(e6[2]);
var eZ=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e2.getDay()];
if(e6[1].substr(0,3)!==eZ){a9(e0).weekdayMismatch=true;
e0._isValid=false;
return
}}switch(e6[5].length){case 2:if(eY===0){e8=" +0000"
}else{eY=e3.indexOf(e6[5][1].toUpperCase())-12;
e8=((eY<0)?" -":" +")+((""+eY).replace(/^-?/,"0")).match(/..$/)[0]+"00"
}break;
case 4:e8=e9[e6[5]];
break;
default:e8=e9[" GMT"]
}e6[5]=e8;
e0._i=e6.splice(1).join("");
e1=" ZZ";
e0._f=e5+eX+e4+e1;
bU(e0);
a9(e0).rfc2822=true
}else{e0._isValid=false
}}function ba(eY){var eX=bS.exec(eY._i);
if(eX!==null){eY._d=new Date(+eX[1]);
return
}C(eY);
if(eY._isValid===false){delete eY._isValid
}else{return
}bQ(eY);
if(eY._isValid===false){delete eY._isValid
}else{return
}ex.createFromInputFallback(eY)
}ex.createFromInputFallback=eb("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(eX){eX._d=new Date(eX._i+(eX._useUTC?" UTC":""))
});
function d6(eY,eX,eZ){if(eY!=null){return eY
}if(eX!=null){return eX
}return eZ
}function a0(eY){var eX=new Date(ex.now());
if(eY._useUTC){return[eX.getUTCFullYear(),eX.getUTCMonth(),eX.getUTCDate()]
}return[eX.getFullYear(),eX.getMonth(),eX.getDate()]
}function e(e1){var e2,e0,eZ=[],eY,eX;
if(e1._d){return
}eY=a0(e1);
if(e1._w&&e1._a[eo]==null&&e1._a[i]==null){cY(e1)
}if(e1._dayOfYear!=null){eX=d6(e1._a[eM],eY[eM]);
if(e1._dayOfYear>dC(eX)||e1._dayOfYear===0){a9(e1)._overflowDayOfYear=true
}e0=dr(eX,0,e1._dayOfYear);
e1._a[i]=e0.getUTCMonth();
e1._a[eo]=e0.getUTCDate()
}for(e2=0;
e2<3&&e1._a[e2]==null;
++e2){e1._a[e2]=eZ[e2]=eY[e2]
}for(;
e2<7;
e2++){e1._a[e2]=eZ[e2]=(e1._a[e2]==null)?(e2===2?1:0):e1._a[e2]
}if(e1._a[eB]===24&&e1._a[dE]===0&&e1._a[ai]===0&&e1._a[bH]===0){e1._nextDay=true;
e1._a[eB]=0
}e1._d=(e1._useUTC?dr:d5).apply(null,eZ);
if(e1._tzm!=null){e1._d.setUTCMinutes(e1._d.getUTCMinutes()-e1._tzm)
}if(e1._nextDay){e1._a[eB]=24
}}function cY(e0){var e3,eX,eY,e1,e6,e4,e5,e2;
e3=e0._w;
if(e3.GG!=null||e3.W!=null||e3.E!=null){e6=1;
e4=4;
eX=d6(e3.GG,e0._a[eM],en(dy(),1,4).year);
eY=d6(e3.W,1);
e1=d6(e3.E,1);
if(e1<1||e1>7){e2=true
}}else{e6=e0._locale._week.dow;
e4=e0._locale._week.doy;
var eZ=en(dy(),e6,e4);
eX=d6(e3.gg,e0._a[eM],eZ.year);
eY=d6(e3.w,eZ.week);
if(e3.d!=null){e1=e3.d;
if(e1<0||e1>6){e2=true
}}else{if(e3.e!=null){e1=e3.e+e6;
if(e3.e<0||e3.e>6){e2=true
}}else{e1=e6
}}}if(eY<1||eY>E(eX,e6,e4)){a9(e0)._overflowWeeks=true
}else{if(e2!=null){a9(e0)._overflowWeekday=true
}else{e5=bx(eX,eY,e1,e6,e4);
e0._a[eM]=e5.year;
e0._dayOfYear=e5.dayOfYear
}}}ex.ISO_8601=function(){};
ex.RFC_2822=function(){};
function bU(eZ){if(eZ._f===ex.ISO_8601){C(eZ);
return
}if(eZ._f===ex.RFC_2822){bQ(eZ);
return
}eZ._a=[];
a9(eZ).empty=true;
var e2=""+eZ._i,e1,eY,e5,e0,e4,eX=e2.length,e3=0;
e5=bC(eZ._f,eZ._locale).match(bO)||[];
for(e1=0;
e1<e5.length;
e1++){e0=e5[e1];
eY=(e2.match(bB(e0,eZ))||[])[0];
if(eY){e4=e2.substr(0,e2.indexOf(eY));
if(e4.length>0){a9(eZ).unusedInput.push(e4)
}e2=e2.slice(e2.indexOf(eY)+eY.length);
e3+=eY.length
}if(a7[e0]){if(eY){a9(eZ).empty=false
}else{a9(eZ).unusedTokens.push(e0)
}u(e0,eY,eZ)
}else{if(eZ._strict&&!eY){a9(eZ).unusedTokens.push(e0)
}}}a9(eZ).charsLeftOver=eX-e3;
if(e2.length>0){a9(eZ).unusedInput.push(e2)
}if(eZ._a[eB]<=12&&a9(eZ).bigHour===true&&eZ._a[eB]>0){a9(eZ).bigHour=undefined
}a9(eZ).parsedDateParts=eZ._a.slice(0);
a9(eZ).meridiem=eZ._meridiem;
eZ._a[eB]=ec(eZ._locale,eZ._a[eB],eZ._meridiem);
e(eZ);
cK(eZ)
}function ec(eX,eZ,e0){var eY;
if(e0==null){return eZ
}if(eX.meridiemHour!=null){return eX.meridiemHour(eZ,e0)
}else{if(eX.isPM!=null){eY=eX.isPM(e0);
if(eY&&eZ<12){eZ+=12
}if(!eY&&eZ===12){eZ=0
}return eZ
}else{return eZ
}}}function dA(eX){var e1,eZ,e0,eY,e2;
if(eX._f.length===0){a9(eX).invalidFormat=true;
eX._d=new Date(NaN);
return
}for(eY=0;
eY<eX._f.length;
eY++){e2=0;
e1=p({},eX);
if(eX._useUTC!=null){e1._useUTC=eX._useUTC
}e1._f=eX._f[eY];
bU(e1);
if(!an(e1)){continue
}e2+=a9(e1).charsLeftOver;
e2+=a9(e1).unusedTokens.length*10;
a9(e1).score=e2;
if(e0==null||e2<e0){e0=e2;
eZ=e1
}}eR(eX,eZ||e1)
}function a2(eX){if(eX._d){return
}var eY=dH(eX._i);
eX._a=bl([eY.year,eY.month,eY.day||eY.date,eY.hour,eY.minute,eY.second,eY.millisecond],function(eZ){return eZ&&parseInt(eZ,10)
});
e(eX)
}function ak(eX){var eY=new em(cK(bp(eX)));
if(eY._nextDay){eY.add(1,"d");
eY._nextDay=undefined
}return eY
}function bp(eY){var eX=eY._i,eZ=eY._f;
eY._locale=eY._locale||Q(eY._l);
if(eX===null||(eZ===undefined&&eX==="")){return N({nullInput:true})
}if(typeof eX==="string"){eY._i=eX=eY._locale.preparse(eX)
}if(b8(eX)){return new em(cK(eX))
}else{if(eq(eX)){eY._d=eX
}else{if(V(eZ)){dA(eY)
}else{if(eZ){bU(eY)
}else{cq(eY)
}}}}if(!an(eY)){eY._d=null
}return eY
}function cq(eY){var eX=eY._i;
if(F(eX)){eY._d=new Date(ex.now())
}else{if(eq(eX)){eY._d=new Date(eX.valueOf())
}else{if(typeof eX==="string"){ba(eY)
}else{if(V(eX)){eY._a=bl(eX.slice(0),function(eZ){return parseInt(eZ,10)
});
e(eY)
}else{if(v(eX)){a2(eY)
}else{if(q(eX)){eY._d=new Date(eX)
}else{ex.createFromInputFallback(eY)
}}}}}}}function ac(e0,e1,eX,eZ,eY){var e2={};
if(eX===true||eX===false){eZ=eX;
eX=undefined
}if((v(e0)&&ce(e0))||(V(e0)&&e0.length===0)){e0=undefined
}e2._isAMomentObject=true;
e2._useUTC=e2._isUTC=eY;
e2._l=eX;
e2._i=e0;
e2._f=e1;
e2._strict=eZ;
return ak(e2)
}function dy(eZ,e0,eX,eY){return ac(eZ,e0,eX,eY,false)
}var cF=eb("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var eX=dy.apply(null,arguments);
if(this.isValid()&&eX.isValid()){return eX<this?this:eX
}else{return N()
}});
var ej=eb("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var eX=dy.apply(null,arguments);
if(this.isValid()&&eX.isValid()){return eX>this?this:eX
}else{return N()
}});
function eS(eZ,e0){var eY,eX;
if(e0.length===1&&V(e0[0])){e0=e0[0]
}if(!e0.length){return dy()
}eY=e0[0];
for(eX=1;
eX<e0.length;
++eX){if(!e0[eX].isValid()||e0[eX][eZ](eY)){eY=e0[eX]
}}return eY
}function n(){var eX=[].slice.call(arguments,0);
return eS("isBefore",eX)
}function bj(){var eX=[].slice.call(arguments,0);
return eS("isAfter",eX)
}var cu=function(){return Date.now?Date.now():+(new Date())
};
var eQ=["year","quarter","month","week","day","hour","minute","second","millisecond"];
function ar(eY){for(var e0 in eY){if(!(eQ.indexOf(e0)!==-1&&(eY[e0]==null||!isNaN(eY[e0])))){return false
}}var eX=false;
for(var eZ=0;
eZ<eQ.length;
++eZ){if(eY[eQ[eZ]]){if(eX){return false
}if(parseFloat(eY[eQ[eZ]])!==cM(eY[eQ[eZ]])){eX=true
}}}return true
}function s(){return this._isValid
}function aU(){return dc(NaN)
}function dL(e2){var e4=dH(e2),e3=e4.year||0,eY=e4.quarter||0,eZ=e4.month||0,eX=e4.week||0,e7=e4.day||0,e5=e4.hour||0,e1=e4.minute||0,e6=e4.second||0,e0=e4.millisecond||0;
this._isValid=ar(e4);
this._milliseconds=+e0+e6*1000+e1*60000+e5*1000*60*60;
this._days=+e7+eX*7;
this._months=+eZ+eY*3+e3*12;
this._data={};
this._locale=Q();
this._bubble()
}function ae(eX){return eX instanceof dL
}function ee(eX){if(eX<0){return Math.round(-1*eX)*-1
}else{return Math.round(eX)
}}function bt(eX,eY){ct(eX,0,0,function(){var e0=this.utcOffset();
var eZ="+";
if(e0<0){e0=-e0;
eZ="-"
}return eZ+ck(~~(e0/60),2)+eY+ck(~~(e0)%60,2)
})
}bt("Z",":");
bt("ZZ","");
bb("Z",cA);
bb("ZZ",cA);
bR(["Z","ZZ"],function(eX,eZ,eY){eY._useUTC=true;
eY._tzm=m(cA,eX)
});
var ew=/([\+\-]|\d\d)/gi;
function m(e2,eY){var e0=(eY||"").match(e2);
if(e0===null){return null
}var eX=e0[e0.length-1]||[];
var e1=(eX+"").match(ew)||["-",0,0];
var eZ=+(e1[1]*60)+cM(e1[2]);
return eZ===0?0:e1[0]==="+"?eZ:-eZ
}function aB(eX,eY){var eZ,e0;
if(eY._isUTC){eZ=eY.clone();
e0=(b8(eX)||eq(eX)?eX.valueOf():dy(eX).valueOf())-eZ.valueOf();
eZ._d.setTime(eZ._d.valueOf()+e0);
ex.updateOffset(eZ,false);
return eZ
}else{return dy(eX).local()
}}function aM(eX){return -Math.round(eX._d.getTimezoneOffset()/15)*15
}ex.updateOffset=function(){};
function ds(eX,e0,e1){var eZ=this._offset||0,eY;
if(!this.isValid()){return eX!=null?this:NaN
}if(eX!=null){if(typeof eX==="string"){eX=m(cA,eX);
if(eX===null){return this
}}else{if(Math.abs(eX)<16&&!e1){eX=eX*60
}}if(!this._isUTC&&e0){eY=aM(this)
}this._offset=eX;
this._isUTC=true;
if(eY!=null){this.add(eY,"m")
}if(eZ!==eX){if(!e0||this._changeInProgress){aX(this,dc(eX-eZ,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
ex.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?eZ:aM(this)
}}function dm(eX,eY){if(eX!=null){if(typeof eX!=="string"){eX=-eX
}this.utcOffset(eX,eY);
return this
}else{return -this.utcOffset()
}}function aY(eX){return this.utcOffset(0,eX)
}function dp(eX){if(this._isUTC){this.utcOffset(0,eX);
this._isUTC=false;
if(eX){this.subtract(aM(this),"m")
}}return this
}function b5(){if(this._tzm!=null){this.utcOffset(this._tzm,false,true)
}else{if(typeof this._i==="string"){var eX=m(bF,this._i);
if(eX!=null){this.utcOffset(eX)
}else{this.utcOffset(0,true)
}}}return this
}function az(eX){if(!this.isValid()){return false
}eX=eX?dy(eX).utcOffset():0;
return(this.utcOffset()-eX)%60===0
}function aL(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
}function b(){if(!F(this._isDSTShifted)){return this._isDSTShifted
}var eY={};
p(eY,this);
eY=bp(eY);
if(eY._a){var eX=eY._isUTC?cr(eY._a):dy(eY._a);
this._isDSTShifted=this.isValid()&&bW(eY._a,eX.toArray())>0
}else{this._isDSTShifted=false
}return this._isDSTShifted
}function dt(){return this.isValid()?!this._isUTC:false
}function bP(){return this.isValid()?this._isUTC:false
}function dz(){return this.isValid()?this._isUTC&&this._offset===0:false
}var Z=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
var cs=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
function dc(eZ,e2){var e3=eZ,e1=null,eY,e0,eX;
if(ae(eZ)){e3={ms:eZ._milliseconds,d:eZ._days,M:eZ._months}
}else{if(q(eZ)){e3={};
if(e2){e3[e2]=eZ
}else{e3.milliseconds=eZ
}}else{if(!!(e1=Z.exec(eZ))){eY=(e1[1]==="-")?-1:1;
e3={y:0,d:cM(e1[eo])*eY,h:cM(e1[eB])*eY,m:cM(e1[dE])*eY,s:cM(e1[ai])*eY,ms:cM(ee(e1[bH]*1000))*eY}
}else{if(!!(e1=cs.exec(eZ))){eY=(e1[1]==="-")?-1:1;
e3={y:eN(e1[2],eY),M:eN(e1[3],eY),w:eN(e1[4],eY),d:eN(e1[5],eY),h:eN(e1[6],eY),m:eN(e1[7],eY),s:eN(e1[8],eY)}
}else{if(e3==null){e3={}
}else{if(typeof e3==="object"&&("from" in e3||"to" in e3)){eX=bL(dy(e3.from),dy(e3.to));
e3={};
e3.ms=eX.milliseconds;
e3.M=eX.months
}}}}}}e0=new dL(e3);
if(ae(eZ)&&dh(eZ,"_locale")){e0._locale=eZ._locale
}return e0
}dc.fn=dL.prototype;
dc.invalid=aU;
function eN(eZ,eX){var eY=eZ&&parseFloat(eZ.replace(",","."));
return(isNaN(eY)?0:eY)*eX
}function dw(eZ,eX){var eY={milliseconds:0,months:0};
eY.months=eX.month()-eZ.month()+(eX.year()-eZ.year())*12;
if(eZ.clone().add(eY.months,"M").isAfter(eX)){--eY.months
}eY.milliseconds=+eX-+(eZ.clone().add(eY.months,"M"));
return eY
}function bL(eZ,eX){var eY;
if(!(eZ.isValid()&&eX.isValid())){return{milliseconds:0,months:0}
}eX=aB(eX,eZ);
if(eZ.isBefore(eX)){eY=dw(eZ,eX)
}else{eY=dw(eX,eZ);
eY.milliseconds=-eY.milliseconds;
eY.months=-eY.months
}return eY
}function a3(eY,eX){return function(e2,e1){var e0,eZ;
if(e1!==null&&!isNaN(+e1)){eK(eX,"moment()."+eX+"(period, number) is deprecated. Please use moment()."+eX+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
eZ=e2;
e2=e1;
e1=eZ
}e2=typeof e2==="string"?+e2:e2;
e0=dc(e2,e1);
aX(this,e0,eY);
return this
}
}function aX(eZ,e2,e1,e0){var eY=e2._milliseconds,e3=ee(e2._days),eX=ee(e2._months);
if(!eZ.isValid()){return
}e0=e0==null?true:e0;
if(eY){eZ._d.setTime(eZ._d.valueOf()+eY*e1)
}if(e3){aK(eZ,"Date",dx(eZ,"Date")+e3*e1)
}if(eX){aT(eZ,dx(eZ,"Month")+eX*e1)
}if(e0){ex.updateOffset(eZ,e3||eX)
}}var aW=a3(1,"add");
var ax=a3(-1,"subtract");
function au(eZ,eX){var eY=eZ.diff(eX,"days",true);
return eY<-6?"sameElse":eY<-1?"lastWeek":eY<0?"lastDay":eY<1?"sameDay":eY<2?"nextDay":eY<7?"nextWeek":"sameElse"
}function cc(e2,eX){var e0=e2||dy(),eZ=aB(e0,this).startOf("day"),e1=ex.calendarFormat(this,eZ)||"sameElse";
var eY=eX&&(a4(eX[e1])?eX[e1].call(this,e0):eX[e1]);
return this.format(eY||this.localeData().calendar(e1,this,dy(e0)))
}function dn(){return new em(this)
}function cz(eY,eX){var eZ=b8(eY)?eY:dy(eY);
if(!(this.isValid()&&eZ.isValid())){return false
}eX=cL(!F(eX)?eX:"millisecond");
if(eX==="millisecond"){return this.valueOf()>eZ.valueOf()
}else{return eZ.valueOf()<this.clone().startOf(eX).valueOf()
}}function eI(eY,eX){var eZ=b8(eY)?eY:dy(eY);
if(!(this.isValid()&&eZ.isValid())){return false
}eX=cL(!F(eX)?eX:"millisecond");
if(eX==="millisecond"){return this.valueOf()<eZ.valueOf()
}else{return this.clone().endOf(eX).valueOf()<eZ.valueOf()
}}function el(e0,eZ,eX,eY){eY=eY||"()";
return(eY[0]==="("?this.isAfter(e0,eX):!this.isBefore(e0,eX))&&(eY[1]===")"?this.isBefore(eZ,eX):!this.isAfter(eZ,eX))
}function cE(eY,eX){var e0=b8(eY)?eY:dy(eY),eZ;
if(!(this.isValid()&&e0.isValid())){return false
}eX=cL(eX||"millisecond");
if(eX==="millisecond"){return this.valueOf()===e0.valueOf()
}else{eZ=e0.valueOf();
return this.clone().startOf(eX).valueOf()<=eZ&&eZ<=this.clone().endOf(eX).valueOf()
}}function eD(eY,eX){return this.isSame(eY,eX)||this.isAfter(eY,eX)
}function eG(eY,eX){return this.isSame(eY,eX)||this.isBefore(eY,eX)
}function K(e0,eZ,eX){var e2,e1,e3,eY;
if(!this.isValid()){return NaN
}e2=aB(e0,this);
if(!e2.isValid()){return NaN
}e1=(e2.utcOffset()-this.utcOffset())*60000;
eZ=cL(eZ);
if(eZ==="year"||eZ==="month"||eZ==="quarter"){eY=eh(this,e2);
if(eZ==="quarter"){eY=eY/3
}else{if(eZ==="year"){eY=eY/12
}}}else{e3=this-e2;
eY=eZ==="second"?e3/1000:eZ==="minute"?e3/60000:eZ==="hour"?e3/3600000:eZ==="day"?(e3-e1)/86400000:eZ==="week"?(e3-e1)/604800000:e3
}return eX?eY:de(eY)
}function eh(eY,eX){var e2=((eX.year()-eY.year())*12)+(eX.month()-eY.month()),eZ=eY.clone().add(e2,"months"),e0,e1;
if(eX-eZ<0){e0=eY.clone().add(e2-1,"months");
e1=(eX-eZ)/(eZ-e0)
}else{e0=eY.clone().add(e2+1,"months");
e1=(eX-eZ)/(e0-eZ)
}return -(e2+e1)||0
}ex.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
ex.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
function dZ(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function c0(){if(!this.isValid()){return null
}var eX=this.clone().utc();
if(eX.year()<0||eX.year()>9999){return af(eX,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}if(a4(Date.prototype.toISOString)){return this.toDate().toISOString()
}return af(eX,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}function aO(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)"
}var eZ="moment";
var eX="";
if(!this.isLocal()){eZ=this.utcOffset()===0?"moment.utc":"moment.parseZone";
eX="Z"
}var e0="["+eZ+'("]';
var eY=(0<=this.year()&&this.year()<=9999)?"YYYY":"YYYYYY";
var e2="-MM-DD[T]HH:mm:ss.SSS";
var e1=eX+'[")]';
return this.format(e0+eY+e2+e1)
}function c3(eY){if(!eY){eY=this.isUtc()?ex.defaultFormatUtc:ex.defaultFormat
}var eX=af(this,eY);
return this.localeData().postformat(eX)
}function dO(eY,eX){if(this.isValid()&&((b8(eY)&&eY.isValid())||dy(eY).isValid())){return dc({to:this,from:eY}).locale(this.locale()).humanize(!eX)
}else{return this.localeData().invalidDate()
}}function dI(eX){return this.from(dy(),eX)
}function ah(eY,eX){if(this.isValid()&&((b8(eY)&&eY.isValid())||dy(eY).isValid())){return dc({from:this,to:eY}).locale(this.locale()).humanize(!eX)
}else{return this.localeData().invalidDate()
}}function aN(eX){return this.to(dy(),eX)
}function eW(eY){var eX;
if(eY===undefined){return this._locale._abbr
}else{eX=Q(eY);
if(eX!=null){this._locale=eX
}return this
}}var y=eb("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(eX){if(eX===undefined){return this.localeData()
}else{return this.locale(eX)
}});
function dP(){return this._locale
}function b4(eX){eX=cL(eX);
switch(eX){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":case"date":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}if(eX==="week"){this.weekday(0)
}if(eX==="isoWeek"){this.isoWeekday(1)
}if(eX==="quarter"){this.month(Math.floor(this.month()/3)*3)
}return this
}function er(eX){eX=cL(eX);
if(eX===undefined||eX==="millisecond"){return this
}if(eX==="date"){eX="day"
}return this.startOf(eX).add(1,(eX==="isoWeek"?"week":eX)).subtract(1,"ms")
}function dS(){return this._d.valueOf()-((this._offset||0)*60000)
}function bw(){return Math.floor(this.valueOf()/1000)
}function cX(){return new Date(this.valueOf())
}function dG(){var eX=this;
return[eX.year(),eX.month(),eX.date(),eX.hour(),eX.minute(),eX.second(),eX.millisecond()]
}function dQ(){var eX=this;
return{years:eX.year(),months:eX.month(),date:eX.date(),hours:eX.hours(),minutes:eX.minutes(),seconds:eX.seconds(),milliseconds:eX.milliseconds()}
}function c4(){return this.isValid()?this.toISOString():null
}function o(){return an(this)
}function dB(){return eR({},a9(this))
}function cv(){return a9(this).overflow
}function eJ(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}ct(0,["gg",2],0,function(){return this.weekYear()%100
});
ct(0,["GG",2],0,function(){return this.isoWeekYear()%100
});
function W(eY,eX){ct(0,[eY,eY.length],0,eX)
}W("gggg","weekYear");
W("ggggg","weekYear");
W("GGGG","isoWeekYear");
W("GGGGG","isoWeekYear");
cb("weekYear","gg");
cb("isoWeekYear","GG");
dT("weekYear",1);
dT("isoWeekYear",1);
bb("G",B);
bb("g",B);
bb("GG",aq,aI);
bb("gg",aq,aI);
bb("GGGG",ao,aG);
bb("gggg",ao,aG);
bb("GGGGG",am,aF);
bb("ggggg",am,aF);
X(["gggg","ggggg","GGGG","GGGGG"],function(eX,e0,eY,eZ){e0[eZ.substr(0,2)]=cM(eX)
});
X(["gg","GG"],function(eX,e0,eY,eZ){e0[eZ]=ex.parseTwoDigitYear(eX)
});
function bo(eX){return co.call(this,eX,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function dW(eX){return co.call(this,eX,this.isoWeek(),this.isoWeekday(),1,4)
}function c7(){return E(this.year(),1,4)
}function I(){var eX=this.localeData()._week;
return E(this.year(),eX.dow,eX.doy)
}function co(eX,eY,e0,e2,e1){var eZ;
if(eX==null){return en(this,e2,e1).year
}else{eZ=E(eX,e2,e1);
if(eY>eZ){eY=eZ
}return a5.call(this,eX,eY,e0,e2,e1)
}}function a5(eZ,eY,e1,e3,e2){var e0=bx(eZ,eY,e1,e3,e2),eX=dr(e0.year,0,e0.dayOfYear);
this.year(eX.getUTCFullYear());
this.month(eX.getUTCMonth());
this.date(eX.getUTCDate());
return this
}ct("Q",0,"Qo","quarter");
cb("quarter","Q");
dT("quarter",7);
bb("Q",aJ);
bR("Q",function(eX,eY){eY[i]=(cM(eX)-1)*3
});
function bX(eX){return eX==null?Math.ceil((this.month()+1)/3):this.month((eX-1)*3+this.month()%3)
}ct("D",["DD",2],"Do","date");
cb("date","D");
dT("date",9);
bb("D",aq);
bb("DD",aq,aI);
bb("Do",function(eY,eX){return eY?(eX._dayOfMonthOrdinalParse||eX._ordinalParse):eX._dayOfMonthOrdinalParseLenient
});
bR(["D","DD"],eo);
bR("Do",function(eX,eY){eY[eo]=cM(eX.match(aq)[0],10)
});
var cj=d8("Date",true);
ct("DDD",["DDDD",3],"DDDo","dayOfYear");
cb("dayOfYear","DDD");
dT("dayOfYear",4);
bb("DDD",ap);
bb("DDDD",aH);
bR(["DDD","DDDD"],function(eX,eZ,eY){eY._dayOfYear=cM(eX)
});
function bd(eX){var eY=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return eX==null?eY:this.add((eX-eY),"d")
}ct("m",["mm",2],0,"minute");
cb("minute","m");
dT("minute",14);
bb("m",aq);
bb("mm",aq,aI);
bR(["m","mm"],dE);
var eH=d8("Minutes",false);
ct("s",["ss",2],0,"second");
cb("second","s");
dT("second",15);
bb("s",aq);
bb("ss",aq,aI);
bR(["s","ss"],ai);
var bs=d8("Seconds",false);
ct("S",0,0,function(){return ~~(this.millisecond()/100)
});
ct(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
});
ct(0,["SSS",3],0,"millisecond");
ct(0,["SSSS",4],0,function(){return this.millisecond()*10
});
ct(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
ct(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
ct(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
ct(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
ct(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1000000
});
cb("millisecond","ms");
dT("millisecond",16);
bb("S",ap,aJ);
bb("SS",ap,aI);
bb("SSS",ap,aH);
var bi;
for(bi="SSSS";
bi.length<=9;
bi+="S"){bb(bi,r)
}function c1(eX,eY){eY[bH]=cM(("0."+eX)*1000)
}for(bi="S";
bi.length<=9;
bi+="S"){bR(bi,c1)
}var bV=d8("Milliseconds",false);
ct("z",0,0,"zoneAbbr");
ct("zz",0,0,"zoneName");
function eE(){return this._isUTC?"UTC":""
}function ed(){return this._isUTC?"Coordinated Universal Time":""
}var b9=em.prototype;
b9.add=aW;
b9.calendar=cc;
b9.clone=dn;
b9.diff=K;
b9.endOf=er;
b9.format=c3;
b9.from=dO;
b9.fromNow=dI;
b9.to=ah;
b9.toNow=aN;
b9.get=ay;
b9.invalidAt=cv;
b9.isAfter=cz;
b9.isBefore=eI;
b9.isBetween=el;
b9.isSame=cE;
b9.isSameOrAfter=eD;
b9.isSameOrBefore=eG;
b9.isValid=o;
b9.lang=y;
b9.locale=eW;
b9.localeData=dP;
b9.max=ej;
b9.min=cF;
b9.parsingFlags=dB;
b9.set=at;
b9.startOf=b4;
b9.subtract=ax;
b9.toArray=dG;
b9.toObject=dQ;
b9.toDate=cX;
b9.toISOString=c0;
b9.inspect=aO;
b9.toJSON=c4;
b9.toString=dZ;
b9.unix=bw;
b9.valueOf=dS;
b9.creationData=eJ;
b9.year=cC;
b9.isLeapYear=cS;
b9.weekYear=bo;
b9.isoWeekYear=dW;
b9.quarter=b9.quarters=bX;
b9.month=eA;
b9.daysInMonth=bK;
b9.week=b9.weeks=J;
b9.isoWeek=b9.isoWeeks=x;
b9.weeksInYear=I;
b9.isoWeeksInYear=c7;
b9.date=cj;
b9.day=b9.days=ef;
b9.weekday=ad;
b9.isoWeekday=cp;
b9.dayOfYear=bd;
b9.hour=b9.hours=cl;
b9.minute=b9.minutes=eH;
b9.second=b9.seconds=bs;
b9.millisecond=b9.milliseconds=bV;
b9.utcOffset=ds;
b9.utc=aY;
b9.local=dp;
b9.parseZone=b5;
b9.hasAlignedHourOffset=az;
b9.isDST=aL;
b9.isLocal=dt;
b9.isUtcOffset=bP;
b9.isUtc=dz;
b9.isUTC=dz;
b9.zoneAbbr=eE;
b9.zoneName=ed;
b9.dates=eb("dates accessor is deprecated. Use date instead.",cj);
b9.months=eb("months accessor is deprecated. Use month instead",eA);
b9.years=eb("years accessor is deprecated. Use year instead",cC);
b9.zone=eb("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",dm);
b9.isDSTShifted=eb("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",b);
function c9(eX){return dy(eX*1000)
}function cJ(){return dy.apply(null,arguments).parseZone()
}function du(eX){return eX
}var d1=cy.prototype;
d1.calendar=d;
d1.longDateFormat=cG;
d1.invalidDate=ek;
d1.ordinal=ev;
d1.preparse=du;
d1.postformat=du;
d1.relativeTime=T;
d1.pastFuture=dV;
d1.set=dj;
d1.months=aZ;
d1.monthsShort=a8;
d1.monthsParse=c8;
d1.monthsRegex=cV;
d1.monthsShortRegex=dg;
d1.week=bm;
d1.firstDayOfYear=c6;
d1.firstDayOfWeek=ag;
d1.weekdays=aw;
d1.weekdaysMin=ey;
d1.weekdaysShort=M;
d1.weekdaysParse=bJ;
d1.weekdaysRegex=eO;
d1.weekdaysShortRegex=aE;
d1.weekdaysMinRegex=D;
d1.isPM=ca;
d1.meridiem=aR;
function H(e1,eY,e0,e2){var eX=Q();
var eZ=cr().set(e2,eY);
return eX[e0](eZ,e1)
}function aV(e1,eY,e0){if(q(e1)){eY=e1;
e1=undefined
}e1=e1||"";
if(eY!=null){return H(e1,eY,e0,"month")
}var eZ;
var eX=[];
for(eZ=0;
eZ<12;
eZ++){eX[eZ]=H(e1,eZ,e0,"month")
}return eX
}function eP(e2,e4,e0,e3){if(typeof e2==="boolean"){if(q(e4)){e0=e4;
e4=undefined
}e4=e4||""
}else{e4=e2;
e0=e4;
e2=false;
if(q(e4)){e0=e4;
e4=undefined
}e4=e4||""
}var eX=Q(),eY=e2?eX._week.dow:0;
if(e0!=null){return H(e4,(e0+eY)%7,e3,"day")
}var e1;
var eZ=[];
for(e1=0;
e1<7;
e1++){eZ[e1]=H(e4,(e1+eY)%7,e3,"day")
}return eZ
}function cQ(eY,eX){return aV(eY,eX,"months")
}function cx(eY,eX){return aV(eY,eX,"monthsShort")
}function c2(eY,eZ,eX){return eP(eY,eZ,eX,"weekdays")
}function cI(eY,eZ,eX){return eP(eY,eZ,eX,"weekdaysShort")
}function Y(eY,eZ,eX){return eP(eY,eZ,eX,"weekdaysMin")
}A("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(eZ){var eX=eZ%10,eY=(cM(eZ%100/10)===1)?"th":(eX===1)?"st":(eX===2)?"nd":(eX===3)?"rd":"th";
return eZ+eY
}});
ex.lang=eb("moment.lang is deprecated. Use moment.locale instead.",A);
ex.langData=eb("moment.langData is deprecated. Use moment.localeData instead.",Q);
var et=Math.abs;
function bk(){var eX=this._data;
this._milliseconds=et(this._milliseconds);
this._days=et(this._days);
this._months=et(this._months);
eX.milliseconds=et(eX.milliseconds);
eX.seconds=et(eX.seconds);
eX.minutes=et(eX.minutes);
eX.hours=et(eX.hours);
eX.months=et(eX.months);
eX.years=et(eX.years);
return this
}function aD(e1,eY,eZ,e0){var eX=dc(eY,eZ);
e1._milliseconds+=e0*eX._milliseconds;
e1._days+=e0*eX._days;
e1._months+=e0*eX._months;
return e1._bubble()
}function by(eX,eY){return aD(this,eX,eY,1)
}function dM(eX,eY){return aD(this,eX,eY,-1)
}function ez(eX){if(eX<0){return Math.floor(eX)
}else{return Math.ceil(eX)
}}function cR(){var eZ=this._milliseconds;
var e5=this._days;
var eX=this._months;
var e1=this._data;
var e4,e0,e3,e2,eY;
if(!((eZ>=0&&e5>=0&&eX>=0)||(eZ<=0&&e5<=0&&eX<=0))){eZ+=ez(eT(eX)+e5)*86400000;
e5=0;
eX=0
}e1.milliseconds=eZ%1000;
e4=de(eZ/1000);
e1.seconds=e4%60;
e0=de(e4/60);
e1.minutes=e0%60;
e3=de(e0/60);
e1.hours=e3%24;
e5+=de(e3/24);
eY=de(f(e5));
eX+=eY;
e5-=ez(eT(eY));
e2=de(eX/12);
eX%=12;
e1.days=e5;
e1.months=eX;
e1.years=e2;
return this
}function f(eX){return eX*4800/146097
}function eT(eX){return eX*146097/4800
}function eC(eY){if(!this.isValid()){return NaN
}var e0;
var eX;
var eZ=this._milliseconds;
eY=cL(eY);
if(eY==="month"||eY==="year"){e0=this._days+eZ/86400000;
eX=this._months+f(e0);
return eY==="month"?eX:eX/12
}else{e0=this._days+Math.round(eT(this._months));
switch(eY){case"week":return e0/7+eZ/604800000;
case"day":return e0+eZ/86400000;
case"hour":return e0*24+eZ/3600000;
case"minute":return e0*1440+eZ/60000;
case"second":return e0*86400+eZ/1000;
case"millisecond":return Math.floor(e0*86400000)+eZ;
default:throw new Error("Unknown unit "+eY)
}}}function cZ(){if(!this.isValid()){return NaN
}return(this._milliseconds+this._days*86400000+(this._months%12)*2592000000+cM(this._months/12)*31536000000)
}function d3(eX){return function(){return this.as(eX)
}
}var eU=d3("ms");
var L=d3("s");
var dq=d3("m");
var t=d3("h");
var d7=d3("d");
var dN=d3("w");
var d2=d3("M");
var bh=d3("y");
function G(eX){eX=cL(eX);
return this.isValid()?this[eX+"s"]():NaN
}function b6(eX){return function(){return this.isValid()?this._data[eX]:NaN
}
}var c=b6("milliseconds");
var be=b6("seconds");
var aC=b6("minutes");
var U=b6("hours");
var bc=b6("days");
var eF=b6("months");
var bI=b6("years");
function d9(){return de(this.days()/7)
}var cW=Math.round;
var dD={ss:44,s:45,m:45,h:22,d:26,M:11};
function aj(eY,e0,eZ,e1,eX){return eX.relativeTime(e0||1,!!eZ,eY,e1)
}function dF(e1,eY,e5){var eZ=dc(e1).abs();
var e6=cW(eZ.as("s"));
var e0=cW(eZ.as("m"));
var e4=cW(eZ.as("h"));
var e7=cW(eZ.as("d"));
var eX=cW(eZ.as("M"));
var e2=cW(eZ.as("y"));
var e3=e6<=dD.ss&&["s",e6]||e6<dD.s&&["ss",e6]||e0<=1&&["m"]||e0<dD.m&&["mm",e0]||e4<=1&&["h"]||e4<dD.h&&["hh",e4]||e7<=1&&["d"]||e7<dD.d&&["dd",e7]||eX<=1&&["M"]||eX<dD.M&&["MM",eX]||e2<=1&&["y"]||["yy",e2];
e3[2]=eY;
e3[3]=+e1>0;
e3[4]=e5;
return aj.apply(null,e3)
}function ep(eX){if(eX===undefined){return cW
}if(typeof(eX)==="function"){cW=eX;
return true
}return false
}function ci(eX,eY){if(dD[eX]===undefined){return false
}if(eY===undefined){return dD[eX]
}dD[eX]=eY;
if(eX==="s"){dD.ss=eY-1
}return true
}function a(eZ){if(!this.isValid()){return this.localeData().invalidDate()
}var eX=this.localeData();
var eY=dF(this,!eZ,eX);
if(eZ){eY=eX.pastFuture(+this,eY)
}return eX.postformat(eY)
}var aS=Math.abs;
function bG(){if(!this.isValid()){return this.localeData().invalidDate()
}var e7=aS(this._milliseconds)/1000;
var e8=aS(this._days);
var eZ=aS(this._months);
var e1,e6,e3;
e1=de(e7/60);
e6=de(e1/60);
e7%=60;
e1%=60;
e3=de(eZ/12);
eZ%=12;
var eY=e3;
var e4=eZ;
var eX=e8;
var e2=e6;
var e0=e1;
var e9=e7;
var e5=this.asSeconds();
if(!e5){return"P0D"
}return(e5<0?"-":"")+"P"+(eY?eY+"Y":"")+(e4?e4+"M":"")+(eX?eX+"D":"")+((e2||e0||e9)?"T":"")+(e2?e2+"H":"")+(e0?e0+"M":"")+(e9?e9+"S":"")
}var d0=dL.prototype;
d0.isValid=s;
d0.abs=bk;
d0.add=by;
d0.subtract=dM;
d0.as=eC;
d0.asMilliseconds=eU;
d0.asSeconds=L;
d0.asMinutes=dq;
d0.asHours=t;
d0.asDays=d7;
d0.asWeeks=dN;
d0.asMonths=d2;
d0.asYears=bh;
d0.valueOf=cZ;
d0._bubble=cR;
d0.get=G;
d0.milliseconds=c;
d0.seconds=be;
d0.minutes=aC;
d0.hours=U;
d0.days=bc;
d0.weeks=d9;
d0.months=eF;
d0.years=bI;
d0.humanize=a;
d0.toISOString=bG;
d0.toString=bG;
d0.toJSON=bG;
d0.locale=eW;
d0.localeData=dP;
d0.toIsoString=eb("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",bG);
d0.lang=y;
ct("X",0,0,"unix");
ct("x",0,0,"valueOf");
bb("x",B);
bb("X",eL);
bR("X",function(eX,eZ,eY){eY._d=new Date(parseFloat(eX,10)*1000)
});
bR("x",function(eX,eZ,eY){eY._d=new Date(cM(eX))
});
ex.version="2.18.1";
aP(dy);
ex.fn=b9;
ex.min=n;
ex.max=bj;
ex.now=cu;
ex.utc=cr;
ex.unix=c9;
ex.months=cQ;
ex.isDate=eq;
ex.locale=A;
ex.invalid=N;
ex.duration=dc;
ex.isMoment=b8;
ex.weekdays=c2;
ex.parseZone=cJ;
ex.localeData=Q;
ex.isDuration=ae;
ex.monthsShort=cx;
ex.weekdaysMin=Y;
ex.defineLocale=cw;
ex.updateLocale=eg;
ex.locales=b1;
ex.weekdaysShort=cI;
ex.normalizeUnits=cL;
ex.relativeTimeRounding=ep;
ex.relativeTimeThreshold=ci;
ex.calendarFormat=au;
ex.prototype=b9;
return ex
})));
!function(d,c){"function"==typeof define&&define.amd?define(["moment"],c):"object"==typeof module&&module.exports?module.exports=c(require("moment")):c(d.moment)
}(this,function(aC){function aB(b){return b>96?b-87:b>64?b-29:b-48
}function aA(r){var q,p=0,o=r.split("."),n=o[0],m=o[1]||"",l=1,k=0,b=1;
for(45===r.charCodeAt(0)&&(p=1,b=-1),p;
p<n.length;
p++){q=aB(n.charCodeAt(p)),k=60*k+q
}for(p=0;
p<m.length;
p++){l/=60,q=aB(m.charCodeAt(p)),k+=q*l
}return k*b
}function az(d){for(var c=0;
c<d.length;
c++){d[c]=aA(d[c])
}}function ay(e,d){for(var f=0;
f<d;
f++){e[f]=Math.round((e[f-1]||0)+60000*e[f])
}e[d-1]=1/0
}function ax(f,e){var h,g=[];
for(h=0;
h<e.length;
h++){g[h]=f[e[h]]
}return g
}function aw(e){var d=e.split("|"),j=d[2].split(" "),i=d[3].split(""),f=d[4].split(" ");
return az(j),az(i),az(f),ay(f,i.length),{name:d[0],abbrs:ax(d[1].split(" "),i),offsets:ax(j,i),untils:f,population:0|d[5]}
}function av(b){b&&this._set(aw(b))
}function au(e){var d=e.toTimeString(),f=d.match(/\([a-z ]+\)/i);
f&&f[0]?(f=f[0].match(/[A-Z]/g),f=f?f.join(""):void 0):(f=d.match(/[A-Z]{3,5}/g),f=f?f[0]:void 0),"GMT"===f&&(f=void 0),this.at=+e,this.abbr=f,this.offset=e.getTimezoneOffset()
}function at(b){this.zone=b,this.offsetScore=0,this.abbrScore=0
}function ar(f,e){for(var h,g;
g=60000*((e.at-f.at)/120000|0);
){h=new au(new Date(f.at+g)),h.offset===f.offset?f=h:e=h
}return f
}function aq(){var h,g,l,k=(new Date).getFullYear()-2,j=new au(new Date(k,0,1)),i=[j];
for(l=1;
l<48;
l++){g=new au(new Date(k,l,1)),g.offset!==j.offset&&(h=ar(j,g),i.push(h),i.push(new au(new Date(h.at+60000)))),j=g
}for(l=0;
l<4;
l++){i.push(new au(new Date(k+l,0,1))),i.push(new au(new Date(k+l,6,1)))
}return i
}function ap(d,c){return d.offsetScore!==c.offsetScore?d.offsetScore-c.offsetScore:d.abbrScore!==c.abbrScore?d.abbrScore-c.abbrScore:c.zone.population-d.zone.population
}function ao(f,d){var h,g;
for(az(d),h=0;
h<d.length;
h++){g=d[h],T[g]=T[g]||{},T[g][f]=!0
}}function an(i){var h,n,m,l=i.length,k={},j=[];
for(h=0;
h<l;
h++){m=T[i[h].offset]||{};
for(n in m){m.hasOwnProperty(n)&&(k[n]=!0)
}}for(h in k){k.hasOwnProperty(h)&&j.push(U[h])
}return j
}function am(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;
if(t){var s=U[ak(t)];
if(s){return s
}ac("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")
}}catch(r){}var q,p,o,n=aq(),m=n.length,l=an(n),j=[];
for(p=0;
p<l.length;
p++){for(q=new at(ai(l[p]),m),o=0;
o<m;
o++){q.scoreOffsetAt(n[o])
}j.push(q)
}return j.sort(ap),j.length>0?j[0].zone.name:void 0
}function al(b){return Y&&!b||(Y=am()),Y
}function ak(b){return(b||"").toLowerCase().replace(/\//g,"_")
}function aj(g){var f,j,i,h;
for("string"==typeof g&&(g=[g]),f=0;
f<g.length;
f++){i=g[f].split("|"),j=i[0],h=ak(j),W[h]=g[f],U[h]=j,i[5]&&ao(h,i[2].split(" "))
}}function ai(f,e){f=ak(f);
var h,g=W[f];
return g instanceof av?g:"string"==typeof g?(g=new av(g),W[f]=g,g):V[f]&&e!==ai&&(h=ai(V[f],ai))?(g=W[f]=new av,g._set(h),g.name=U[f],g):null
}function ah(){var d,c=[];
for(d in U){U.hasOwnProperty(d)&&(W[d]||W[V[d]])&&U[d]&&c.push(U[d])
}return c.sort()
}function ag(g){var f,j,i,h;
for("string"==typeof g&&(g=[g]),f=0;
f<g.length;
f++){j=g[f].split("|"),i=ak(j[0]),h=ak(j[1]),V[i]=h,U[i]=j[0],V[h]=i,U[h]=j[1]
}}function af(b){aj(b.zones),ag(b.links),ab.dataVersion=b.version
}function ae(b){return ae.didShowError||(ae.didShowError=!0,ac("moment.tz.zoneExists('"+b+"') has been deprecated in favor of !moment.tz.zone('"+b+"')")),!!ai(b)
}function ad(b){return !(!b._a||void 0!==b._tzm)
}function ac(b){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(b)
}function ab(a){var j=Array.prototype.slice.call(arguments,0,-1),i=arguments[arguments.length-1],h=ai(i),g=aC.utc.apply(null,j);
return h&&!aC.isMoment(a)&&ad(g)&&g.add(h.parse(g),"minutes"),g.tz(i),g
}function aa(b){return function(){return this._z?this._z.abbr(this):b.call(this)
}
}function Z(b){return function(){return this._z=null,b.apply(this,arguments)
}
}var Y,X="0.5.13",W={},V={},U={},T={},S=aC.version.split("."),R=+S[0],Q=+S[1];
(R<2||2===R&&Q<6)&&ac("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+aC.version+". See momentjs.com"),av.prototype={_set:function(b){this.name=b.name,this.abbrs=b.abbrs,this.untils=b.untils,this.offsets=b.offsets,this.population=b.population
},_index:function(f){var e,h=+f,g=this.untils;
for(e=0;
e<g.length;
e++){if(h<g[e]){return e
}}},parse:function(r){var q,p,o,n,m=+r,l=this.offsets,k=this.untils,j=k.length-1;
for(n=0;
n<j;
n++){if(q=l[n],p=l[n+1],o=l[n?n-1:n],q<p&&ab.moveAmbiguousForward?q=p:q>o&&ab.moveInvalidForward&&(q=o),m<k[n]-60000*q){return l[n]
}}return l[j]
},abbr:function(b){return this.abbrs[this._index(b)]
},offset:function(b){return this.offsets[this._index(b)]
}},at.prototype.scoreOffsetAt=function(b){this.offsetScore+=Math.abs(this.zone.offset(b.at)-b.offset),this.zone.abbr(b.at).replace(/[^A-Z]/g,"")!==b.abbr&&this.abbrScore++
},ab.version=X,ab.dataVersion="",ab._zones=W,ab._links=V,ab._names=U,ab.add=aj,ab.link=ag,ab.load=af,ab.zone=ai,ab.zoneExists=ae,ab.guess=al,ab.names=ah,ab.Zone=av,ab.unpack=aw,ab.unpackBase60=aA,ab.needsOffset=ad,ab.moveInvalidForward=!0,ab.moveAmbiguousForward=!1;
var P=aC.fn;
aC.tz=ab,aC.defaultZone=null,aC.updateOffset=function(a,h){var g,f=aC.defaultZone;
void 0===a._z&&(f&&ad(a)&&!a._isUTC&&(a._d=aC.utc(a._a)._d,a.utc().add(f.parse(a),"minutes")),a._z=f),a._z&&(g=a._z.offset(a),Math.abs(g)<16&&(g/=60),void 0!==a.utcOffset?a.utcOffset(-g,h):a.zone(g,h))
},P.tz=function(a){return a?(this._z=ai(a),this._z?aC.updateOffset(this):ac("Moment Timezone has no data for "+a+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0
},P.zoneName=aa(P.zoneName),P.zoneAbbr=aa(P.zoneAbbr),P.utc=Z(P.utc),aC.tz.setDefault=function(a){return(R<2||2===R&&Q<9)&&ac("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+aC.version+"."),aC.defaultZone=a?ai(a):null,aC
};
var O=aC.momentProperties;
return"[object Array]"===Object.prototype.toString.call(O)?(O.push("_z"),O.push("_a")):O&&(O._z=null),af({version:"2017b",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Khartoum|EAT|-30|0||51e5","Africa/Algiers|CET|-10|0||26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6","Africa/Casablanca|WET WEST|0 -10|0101010101010101010101010101010101010101010|1H3C0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00|32e5","Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|11e6","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5","Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1GQo0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|HST HDT|a0 90|01010101010101010101010|1GIc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|326","America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1GIb0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|30e4","America/Santo_Domingo|AST|40|0||29e5","America/Araguaina|-03 -02|30 20|010|1IdD0 Lz0|14e4","America/Fortaleza|-03|30|0||34e5","America/Asuncion|-03 -04|30 40|01010101010101010101010|1GTf0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0|28e5","America/Panama|EST|50|0||15e5","America/Bahia|-02 -03|20 30|01|1GCq0|27e5","America/Mexico_City|CST CDT|60 50|01010101010101010101010|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6","America/Managua|CST|60|0||22e5","America/La_Paz|-04|40|0||19e5","America/Lima|-05|50|0||11e6","America/Denver|MST MDT|70 60|01010101010101010101010|1GI90 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|26e5","America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1GCr0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0|77e4","America/Cancun|CST CDT EST|60 50 50|01010102|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5","America/Chicago|CST CDT|60 50|01010101010101010101010|1GI80 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|92e5","America/Chihuahua|MST MDT|70 60|01010101010101010101010|1GQx0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4","America/Phoenix|MST|70|0||42e5","America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|15e6","America/New_York|EST EDT|50 40|01010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|21e6","America/Rio_Branco|-04 -05|40 50|01|1KLE0|31e4","America/Fort_Nelson|PST PDT MST|80 70 70|01010102|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Halifax|AST ADT|40 30|01010101010101010101010|1GI60 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|39e4","America/Godthab|-03 -02|30 20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|17e3","America/Grand_Turk|EST EDT AST|50 40 40|010101012|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Havana|CST CDT|50 40|01010101010101010101010|1GQt0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0|21e5","America/Metlakatla|PST AKST AKDT|80 90 80|0121212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|14e2","America/Miquelon|-03 -02|30 20|01010101010101010101010|1GI50 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|61e2","America/Montevideo|-02 -03|20 30|01010101|1GI40 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Noronha|-02|20|0||30e2","America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|23e5","Antarctica/Palmer|-03 -04|30 40|010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","America/Santiago|-03 -04|30 40|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|62e5","America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1GCq0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0|20e6","Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e4","America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1GI5u 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|11e4","Antarctica/Casey|+11 +08|-b0 -80|010|1GAF0 blz0|10","Antarctica/Davis|+05 +07|-50 -70|01|1GAI0|70","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Guadalcanal|+11|-b0|0||11e4","Asia/Tashkent|+05|-50|0||23e5","Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5","Asia/Baghdad|+03|-30|0||66e5","Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|40","Asia/Dhaka|+06|-60|0||16e6","Asia/Amman|EET EEST|-20 -30|010101010101010101010|1GPy0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00|25e5","Asia/Kamchatka|+12|-c0|0||18e4","Asia/Baku|+04 +05|-40 -50|010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|+07|-70|0||15e6","Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0","Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1GNy0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|22e5","Asia/Manila|+08|-80|0||24e6","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4","Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5","Asia/Shanghai|CST|-80|0||23e6","Asia/Colombo|+0530|-5u|0||22e5","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1GPy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5","Asia/Dili|+09|-90|0||19e4","Asia/Dubai|+04|-40|0||39e5","Asia/Famagusta|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0","Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1GPy0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5","Asia/Hong_Kong|HKT|-80|0||73e5","Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4","Europe/Istanbul|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1GPA0 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0|81e4","Asia/Kabul|+0430|-4u|0||46e5","Asia/Karachi|PKT|-50|0||24e6","Asia/Kathmandu|+0545|-5J|0||12e5","Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4","Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5","Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3","Asia/Makassar|WITA|-80|0||15e5","Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|35e5","Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5","Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5","Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5","Asia/Rangoon|+0630|-6u|0||48e5","Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4","Asia/Seoul|KST|-90|0||23e6","Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2","Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1GLUu 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6","Asia/Tokyo|JST|-90|0||38e6","Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5","Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4","Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5","Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|27e5","Atlantic/Cape_Verde|-01|10|0||50e4","Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1GQg0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1GQgu 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST|-a0|0||20e5","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|+0845|-8J|0||368","Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1GQf0 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347","Australia/Perth|AWST|-80|0||18e5","Pacific/Easter|-05 -06|50 60|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|30e2","Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5","Pacific/Tahiti|-10|a0|0||18e4","Pacific/Niue|-11|b0|0||12e2","Etc/GMT+12|-12|c0|0|","Pacific/Galapagos|-06|60|0||25e3","Etc/GMT+7|-07|70|0|","Pacific/Pitcairn|-08|80|0||56","Pacific/Gambier|-09|90|0||125","Etc/GMT-1|+01|-10|0|","Pacific/Fakaofo|+13|-d0|0||483","Pacific/Kiritimati|+14|-e0|0||51e2","Etc/GMT-2|+02|-20|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Astrakhan|+04 +03|-40 -30|010|1N7y0 3rd0","Europe/London|GMT BST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|10e6","Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|67e4","Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4","Europe/Volgograd|+04 +03|-40 -30|01|1N7y0|10e5","Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6","Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810","Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|0101023|1GNB0 1qM0 11A0 1o00 11z0 1nW0|33e4","Pacific/Honolulu|HST|a0|0||37e4","MET|MET MEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0","Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4","Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Goe0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0|88e4","Pacific/Guam|ChST|-a0|0||17e4","Pacific/Marquesas|-0930|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4","Pacific/Tongatapu|+13 +14|-d0 -e0|01010101010101|1S4d0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0|75e3"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Bissau","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Monrovia","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Sao_Tome","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|America/Danmarkshavn","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Algiers|Africa/Tunis","Africa/Cairo|Egypt","Africa/Casablanca|Africa/El_Aaiun","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Khartoum|Africa/Addis_Ababa","Africa/Khartoum|Africa/Asmara","Africa/Khartoum|Africa/Asmera","Africa/Khartoum|Africa/Dar_es_Salaam","Africa/Khartoum|Africa/Djibouti","Africa/Khartoum|Africa/Juba","Africa/Khartoum|Africa/Kampala","Africa/Khartoum|Africa/Mogadishu","Africa/Khartoum|Africa/Nairobi","Africa/Khartoum|Indian/Antananarivo","Africa/Khartoum|Indian/Comoro","Africa/Khartoum|Indian/Mayotte","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Ndjamena","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|America/Juneau","America/Anchorage|America/Nome","America/Anchorage|America/Sitka","America/Anchorage|America/Yakutat","America/Anchorage|US/Alaska","America/Campo_Grande|America/Cuiaba","America/Chicago|America/Indiana/Knox","America/Chicago|America/Indiana/Tell_City","America/Chicago|America/Knox_IN","America/Chicago|America/Matamoros","America/Chicago|America/Menominee","America/Chicago|America/North_Dakota/Beulah","America/Chicago|America/North_Dakota/Center","America/Chicago|America/North_Dakota/New_Salem","America/Chicago|America/Rainy_River","America/Chicago|America/Rankin_Inlet","America/Chicago|America/Resolute","America/Chicago|America/Winnipeg","America/Chicago|CST6CDT","America/Chicago|Canada/Central","America/Chicago|US/Central","America/Chicago|US/Indiana-Starke","America/Chihuahua|America/Mazatlan","America/Chihuahua|Mexico/BajaSur","America/Denver|America/Boise","America/Denver|America/Cambridge_Bay","America/Denver|America/Edmonton","America/Denver|America/Inuvik","America/Denver|America/Ojinaga","America/Denver|America/Shiprock","America/Denver|America/Yellowknife","America/Denver|Canada/Mountain","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Fortaleza|America/Argentina/Buenos_Aires","America/Fortaleza|America/Argentina/Catamarca","America/Fortaleza|America/Argentina/ComodRivadavia","America/Fortaleza|America/Argentina/Cordoba","America/Fortaleza|America/Argentina/Jujuy","America/Fortaleza|America/Argentina/La_Rioja","America/Fortaleza|America/Argentina/Mendoza","America/Fortaleza|America/Argentina/Rio_Gallegos","America/Fortaleza|America/Argentina/Salta","America/Fortaleza|America/Argentina/San_Juan","America/Fortaleza|America/Argentina/San_Luis","America/Fortaleza|America/Argentina/Tucuman","America/Fortaleza|America/Argentina/Ushuaia","America/Fortaleza|America/Belem","America/Fortaleza|America/Buenos_Aires","America/Fortaleza|America/Catamarca","America/Fortaleza|America/Cayenne","America/Fortaleza|America/Cordoba","America/Fortaleza|America/Jujuy","America/Fortaleza|America/Maceio","America/Fortaleza|America/Mendoza","America/Fortaleza|America/Paramaribo","America/Fortaleza|America/Recife","America/Fortaleza|America/Rosario","America/Fortaleza|America/Santarem","America/Fortaleza|Antarctica/Rothera","America/Fortaleza|Atlantic/Stanley","America/Fortaleza|Etc/GMT+3","America/Halifax|America/Glace_Bay","America/Halifax|America/Goose_Bay","America/Halifax|America/Moncton","America/Halifax|America/Thule","America/Halifax|Atlantic/Bermuda","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/La_Paz|America/Boa_Vista","America/La_Paz|America/Guyana","America/La_Paz|America/Manaus","America/La_Paz|America/Porto_Velho","America/La_Paz|Brazil/West","America/La_Paz|Etc/GMT+4","America/Lima|America/Bogota","America/Lima|America/Guayaquil","America/Lima|Etc/GMT+5","America/Los_Angeles|America/Dawson","America/Los_Angeles|America/Ensenada","America/Los_Angeles|America/Santa_Isabel","America/Los_Angeles|America/Tijuana","America/Los_Angeles|America/Vancouver","America/Los_Angeles|America/Whitehorse","America/Los_Angeles|Canada/Pacific","America/Los_Angeles|Canada/Yukon","America/Los_Angeles|Mexico/BajaNorte","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Managua|America/Belize","America/Managua|America/Costa_Rica","America/Managua|America/El_Salvador","America/Managua|America/Guatemala","America/Managua|America/Regina","America/Managua|America/Swift_Current","America/Managua|America/Tegucigalpa","America/Managua|Canada/East-Saskatchewan","America/Managua|Canada/Saskatchewan","America/Mexico_City|America/Bahia_Banderas","America/Mexico_City|America/Merida","America/Mexico_City|America/Monterrey","America/Mexico_City|Mexico/General","America/New_York|America/Detroit","America/New_York|America/Fort_Wayne","America/New_York|America/Indiana/Indianapolis","America/New_York|America/Indiana/Marengo","America/New_York|America/Indiana/Petersburg","America/New_York|America/Indiana/Vevay","America/New_York|America/Indiana/Vincennes","America/New_York|America/Indiana/Winamac","America/New_York|America/Indianapolis","America/New_York|America/Iqaluit","America/New_York|America/Kentucky/Louisville","America/New_York|America/Kentucky/Monticello","America/New_York|America/Louisville","America/New_York|America/Montreal","America/New_York|America/Nassau","America/New_York|America/Nipigon","America/New_York|America/Pangnirtung","America/New_York|America/Thunder_Bay","America/New_York|America/Toronto","America/New_York|Canada/Eastern","America/New_York|EST5EDT","America/New_York|US/East-Indiana","America/New_York|US/Eastern","America/New_York|US/Michigan","America/Noronha|Atlantic/South_Georgia","America/Noronha|Brazil/DeNoronha","America/Noronha|Etc/GMT+2","America/Panama|America/Atikokan","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|America/Jamaica","America/Panama|EST","America/Panama|Jamaica","America/Phoenix|America/Creston","America/Phoenix|America/Dawson_Creek","America/Phoenix|America/Hermosillo","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Rio_Branco|America/Eirunepe","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Santo_Domingo|America/Anguilla","America/Santo_Domingo|America/Antigua","America/Santo_Domingo|America/Aruba","America/Santo_Domingo|America/Barbados","America/Santo_Domingo|America/Blanc-Sablon","America/Santo_Domingo|America/Curacao","America/Santo_Domingo|America/Dominica","America/Santo_Domingo|America/Grenada","America/Santo_Domingo|America/Guadeloupe","America/Santo_Domingo|America/Kralendijk","America/Santo_Domingo|America/Lower_Princes","America/Santo_Domingo|America/Marigot","America/Santo_Domingo|America/Martinique","America/Santo_Domingo|America/Montserrat","America/Santo_Domingo|America/Port_of_Spain","America/Santo_Domingo|America/Puerto_Rico","America/Santo_Domingo|America/St_Barthelemy","America/Santo_Domingo|America/St_Kitts","America/Santo_Domingo|America/St_Lucia","America/Santo_Domingo|America/St_Thomas","America/Santo_Domingo|America/St_Vincent","America/Santo_Domingo|America/Tortola","America/Santo_Domingo|America/Virgin","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","Antarctica/Palmer|America/Punta_Arenas","Asia/Baghdad|Antarctica/Syowa","Asia/Baghdad|Asia/Aden","Asia/Baghdad|Asia/Bahrain","Asia/Baghdad|Asia/Kuwait","Asia/Baghdad|Asia/Qatar","Asia/Baghdad|Asia/Riyadh","Asia/Baghdad|Etc/GMT-3","Asia/Baghdad|Europe/Minsk","Asia/Bangkok|Asia/Ho_Chi_Minh","Asia/Bangkok|Asia/Novokuznetsk","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Saigon","Asia/Bangkok|Asia/Vientiane","Asia/Bangkok|Etc/GMT-7","Asia/Bangkok|Indian/Christmas","Asia/Dhaka|Antarctica/Vostok","Asia/Dhaka|Asia/Almaty","Asia/Dhaka|Asia/Bishkek","Asia/Dhaka|Asia/Dacca","Asia/Dhaka|Asia/Kashgar","Asia/Dhaka|Asia/Qyzylorda","Asia/Dhaka|Asia/Thimbu","Asia/Dhaka|Asia/Thimphu","Asia/Dhaka|Asia/Urumqi","Asia/Dhaka|Etc/GMT-6","Asia/Dhaka|Indian/Chagos","Asia/Dili|Etc/GMT-9","Asia/Dili|Pacific/Palau","Asia/Dubai|Asia/Muscat","Asia/Dubai|Asia/Tbilisi","Asia/Dubai|Asia/Yerevan","Asia/Dubai|Etc/GMT-4","Asia/Dubai|Europe/Samara","Asia/Dubai|Indian/Mahe","Asia/Dubai|Indian/Mauritius","Asia/Dubai|Indian/Reunion","Asia/Gaza|Asia/Hebron","Asia/Hong_Kong|Hongkong","Asia/Jakarta|Asia/Pontianak","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kamchatka|Asia/Anadyr","Asia/Kamchatka|Etc/GMT-12","Asia/Kamchatka|Kwajalein","Asia/Kamchatka|Pacific/Funafuti","Asia/Kamchatka|Pacific/Kwajalein","Asia/Kamchatka|Pacific/Majuro","Asia/Kamchatka|Pacific/Nauru","Asia/Kamchatka|Pacific/Tarawa","Asia/Kamchatka|Pacific/Wake","Asia/Kamchatka|Pacific/Wallis","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Makassar|Asia/Ujung_Pandang","Asia/Manila|Asia/Brunei","Asia/Manila|Asia/Kuala_Lumpur","Asia/Manila|Asia/Kuching","Asia/Manila|Asia/Singapore","Asia/Manila|Etc/GMT-8","Asia/Manila|Singapore","Asia/Rangoon|Asia/Yangon","Asia/Rangoon|Indian/Cocos","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|Asia/Macao","Asia/Shanghai|Asia/Macau","Asia/Shanghai|Asia/Taipei","Asia/Shanghai|PRC","Asia/Shanghai|ROC","Asia/Tashkent|Antarctica/Mawson","Asia/Tashkent|Asia/Aqtau","Asia/Tashkent|Asia/Aqtobe","Asia/Tashkent|Asia/Ashgabat","Asia/Tashkent|Asia/Ashkhabad","Asia/Tashkent|Asia/Atyrau","Asia/Tashkent|Asia/Dushanbe","Asia/Tashkent|Asia/Oral","Asia/Tashkent|Asia/Samarkand","Asia/Tashkent|Etc/GMT-5","Asia/Tashkent|Indian/Kerguelen","Asia/Tashkent|Indian/Maldives","Asia/Tehran|Iran","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Choibalsan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Vladivostok|Asia/Ust-Nera","Asia/Yakutsk|Asia/Khandyga","Atlantic/Azores|America/Scoresbysund","Atlantic/Cape_Verde|Etc/GMT+1","Australia/Adelaide|Australia/Broken_Hill","Australia/Adelaide|Australia/South","Australia/Adelaide|Australia/Yancowinna","Australia/Brisbane|Australia/Lindeman","Australia/Brisbane|Australia/Queensland","Australia/Darwin|Australia/North","Australia/Lord_Howe|Australia/LHI","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/Currie","Australia/Sydney|Australia/Hobart","Australia/Sydney|Australia/Melbourne","Australia/Sydney|Australia/NSW","Australia/Sydney|Australia/Tasmania","Australia/Sydney|Australia/Victoria","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Astrakhan|Europe/Ulyanovsk","Europe/Athens|Asia/Nicosia","Europe/Athens|EET","Europe/Athens|Europe/Bucharest","Europe/Athens|Europe/Helsinki","Europe/Athens|Europe/Kiev","Europe/Athens|Europe/Mariehamn","Europe/Athens|Europe/Nicosia","Europe/Athens|Europe/Riga","Europe/Athens|Europe/Sofia","Europe/Athens|Europe/Tallinn","Europe/Athens|Europe/Uzhgorod","Europe/Athens|Europe/Vilnius","Europe/Athens|Europe/Zaporozhye","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Atlantic/Canary","Europe/Lisbon|Atlantic/Faeroe","Europe/Lisbon|Atlantic/Faroe","Europe/Lisbon|Atlantic/Madeira","Europe/Lisbon|Portugal","Europe/Lisbon|WET","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Paris|Africa/Ceuta","Europe/Paris|Arctic/Longyearbyen","Europe/Paris|Atlantic/Jan_Mayen","Europe/Paris|CET","Europe/Paris|Europe/Amsterdam","Europe/Paris|Europe/Andorra","Europe/Paris|Europe/Belgrade","Europe/Paris|Europe/Berlin","Europe/Paris|Europe/Bratislava","Europe/Paris|Europe/Brussels","Europe/Paris|Europe/Budapest","Europe/Paris|Europe/Busingen","Europe/Paris|Europe/Copenhagen","Europe/Paris|Europe/Gibraltar","Europe/Paris|Europe/Ljubljana","Europe/Paris|Europe/Luxembourg","Europe/Paris|Europe/Madrid","Europe/Paris|Europe/Malta","Europe/Paris|Europe/Monaco","Europe/Paris|Europe/Oslo","Europe/Paris|Europe/Podgorica","Europe/Paris|Europe/Prague","Europe/Paris|Europe/Rome","Europe/Paris|Europe/San_Marino","Europe/Paris|Europe/Sarajevo","Europe/Paris|Europe/Skopje","Europe/Paris|Europe/Stockholm","Europe/Paris|Europe/Tirane","Europe/Paris|Europe/Vaduz","Europe/Paris|Europe/Vatican","Europe/Paris|Europe/Vienna","Europe/Paris|Europe/Warsaw","Europe/Paris|Europe/Zagreb","Europe/Paris|Europe/Zurich","Europe/Paris|Poland","Europe/Volgograd|Europe/Kirov","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Fakaofo|Etc/GMT-13","Pacific/Fakaofo|Pacific/Enderbury","Pacific/Galapagos|Etc/GMT+6","Pacific/Gambier|Etc/GMT+9","Pacific/Guadalcanal|Antarctica/Macquarie","Pacific/Guadalcanal|Etc/GMT-11","Pacific/Guadalcanal|Pacific/Efate","Pacific/Guadalcanal|Pacific/Kosrae","Pacific/Guadalcanal|Pacific/Noumea","Pacific/Guadalcanal|Pacific/Pohnpei","Pacific/Guadalcanal|Pacific/Ponape","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kiritimati|Etc/GMT-14","Pacific/Niue|Etc/GMT+11","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pitcairn|Etc/GMT+8","Pacific/Port_Moresby|Antarctica/DumontDUrville","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tahiti|Etc/GMT+10","Pacific/Tahiti|Pacific/Rarotonga"]}),aC
});
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{configurable:false,enumerable:true,get:d})
}};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=161)
})({161:(function(b,a,c){c(162);
c(163);
c(164);
c(165);
c(166);
c(167);
c(168);
c(169);
c(170);
c(171);
c(172);
c(2);
b.exports=c(173)
}),162:(function(b,a,c){window.Bootstrap=function(){return{jQuery:jQuery.noConflict()}
}()
}),163:(function(d,c,h){function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var f=Bootstrap.jQuery,b={ie:"MSIE ",edge:"rv:",ff:"Firefox/",safari:"Safari/",chrome:"Chrome/"},a={android:"Android",iphone:"iPhone OS"};
var e=function(){function i(){g(this,i);
this.setUpUserAgentString();
this.setUpUserAgent();
this.useUserAgent()
}i.prototype.setUpUserAgentString=function m(){this.userAgentString=navigator.userAgent
};
i.prototype.setUpUserAgent=function l(){for(var q in b){var o=this.constructor.fetchBrowserVersion(this.userAgentString,b[q]);
if(o){this.userAgent=q+"-"+o
}}for(var n in a){var p=this.constructor.fetchBrowserVersion(this.userAgentString,a[n]);
if(p){this.userAgent+=" "+n+"-"+p
}}};
i.prototype.useUserAgent=function j(){f("html").addClass(this.userAgent)
};
i.fetchBrowserVersion=function k(p,q){var o=p.split(q);
var n=void 0;
if(o.length===2){n=parseInt(o[1],10)
}return n
};
return i
}();
new e()
}),164:(function(c,a,g){function f(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var e=Bootstrap.jQuery,b={fieldsForValidation:"[data-validation-message]"};
var d=function(){function i(){f(this,i)
}i.init=function j(){this.bindUIEvents()
};
i.bindUIEvents=function h(){var k=e(b.fieldsForValidation);
k.on("invalid",function(m){var l=e(m.target).data("validation-message");
if(l!==""){m.target.setCustomValidity(l)
}}).on("input",function(m){var l=e(m.target).data("validation-message");
m.target.setCustomValidity("");
if(m.target.validity.valid!==undefined&&!m.target.validity.valid&&l!==""){m.target.setCustomValidity(l)
}});
e(window).on("load",function(){e.each(k,function(l,m){m.setCustomValidity("")
})
})
};
return i
}();
e(document).ready(function(){return d.init()
})
}),165:(function(b,a,c){(function(f){var d=["Edit","Design","Developer","Preview"],e=typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&d.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1;
if(f("body").data("exit-intent-confirm")&&!e){if("onbeforeunload" in window){f(window).on("beforeunload",function(){return" "
})
}else{if("onunload" in window){f(window).on("onunload",function(){return" "
})
}else{f(document).on("pagehide",function(){return" "
})
}}}})(Bootstrap.jQuery)
}),166:(function(b,a,c){(function(){window.GPWS=window.GPWS||{}
})()
}),167:(function(c,b,g){b.__esModule=true;
b.HSBC_utils=undefined;
var f=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(i){return typeof i
}:function(i){return i&&typeof Symbol==="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i
};
var e=g(5);
var a=d(e);
function d(i){return i&&i.__esModule?i:{"default":i}
}var h=function(){var F=[],v=[],U=["a","button","input",'[tabindex="0"]'],n={small:480,medium:960},G={ENTER:13,SPACE:32,UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,TAB:9,SHIFT:16},W={mobile:7,tablet:9,desktop:10},k={globalSettings:"global-settings"},P={SECOND_MILLISECONDS:1000,MINUTE_MILLISECONDS:60*1000,HOUR_MILLISECONDS:60*60*1000,DAY_MILLISECONDS:24*60*60*1000},L=navigator.userAgent,j=L.toLowerCase().indexOf("firefox")>-1,A=L.includes("MSIE")||navigator.appVersion.indexOf("Trident/")>0,X=L.includes("Chrome"),p=L.includes("Safari")&&!X&&!/(CriOS|FxiOS|OPiOS|mercury|UCBrowser|QQBrowser)/i.test(L),Y=Number(L.split("OS ").slice(1).join().slice(0,3).replace("_","."))<6,Q=/iphone|ipad|ipod/i.test(L),H=/android/i.test(L),m=(0,a["default"])("body").is('[class*="globalSmart"]'),y=typeof utag_data!=="undefined",z=D(),i=r(),K=null,u=200,J=/iphone|android|webos|ipad|ipod|blackberry|iemobile|opera mini|Windows Phone/i.test(L),R=(0,a["default"])("html").attr("dir")=="rtl";
function x(){var ac=(0,a["default"])("a[href^=tel]");
if(!J){ac.addClass("no-link").attr("role","presentation").click(function(ad){ad.preventDefault()
})
}}function M(ac){F.push(ac);
if(ac.reinitIfParent){v.push(ac)
}}function I(ac){F.splice(ac,1)
}function l(ac,ae){var ad=void 0;
if(N()){ad=(0,a["default"])(ae).find(ac.selector)
}else{ad=(0,a["default"])(ae.querySelectorAll(ac.selector))
}ad.each(function(){if(!this.gpwsInitialized){E(ac,this)
}})
}function E(ac,ad){ad.gpwsInitialized=true;
ac.init(ad)
}function V(af){var ae=af||document.body;
for(var ad=0;
ad<F.length;
ad++){var ac=F[ad];
if(af&&(0,a["default"])(ae).is(ac.selector)){E(ac,ae)
}else{l(ac,ae)
}}x()
}function t(ae){do{ae=ae.parentNode
}while(ae&&!ae.gpwsInitialized);
if(!ae){return
}for(var ad=0;
ad<v.length;
ad++){var ac=v[ad];
if((0,a["default"])(ae).is(ac.selector)){ac.reinit(ae);
return
}}}function aa(){var ac=["Edit","Design","Developer"];
return typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&ac.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1
}function w(){var ac=["Preview"];
return typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&ac.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1
}function O(){var ac=false;
if(parent.document&&(0,a["default"])(parent.document.documentElement).attr("id")==="patternlab-html"){ac=true
}return ac
}function N(){return document.addEventListener?false:true
}function S(af){var ae=F.length,ad=null,ac=0;
if(af.prevLayer!==af.layer){if(af.layer==="Edit"){ad="switchToEditHandler"
}else{if(af.layer==="Preview"){ad="switchToPreviewHandler"
}}for(ac;
ac<ae;
ac++){if(F[ac][ad]){F[ac][ad]()
}}}}function D(){return{mobile:r()==="mobile",tablet:r()==="tablet",desktop:r()==="desktop"}
}function r(){var ad="mobile",ac=window.innerWidth;
if(ac<n.small){ad="mobile"
}else{if(ac>=n.medium){ad="desktop"
}else{ad="tablet"
}}return ad
}function Z(){return W[r()]
}function C(){var ad=200,ae=1,ac=300;
if(K){return
}K=setInterval(af,ac);
function af(){V();
if(ae===ad){clearInterval(K);
K=null
}ae++
}}function B(ac,al,ag){var ak=ag||{};
if(!ak.domain){var ah=(0,a["default"])(document.body).data(k.globalSettings);
if(ah&&ah.cookieDomain){ak.domain=ah.cookieDomain
}}var ai=void 0,am=void 0,aj=void 0,ad=void 0,af=void 0;
ak=ak||{};
ai=ak?ak.expires:null;
if((typeof ai==="undefined"?"undefined":f(ai))==="object"){var ae=0;
if(ai.milliseconds){ae=ai.milliseconds
}if(ai.seconds){ae+=ai.seconds*P.SECOND_MILLISECONDS
}if(ai.minutes){ae+=ai.minutes*P.MINUTE_MILLISECONDS
}if(ai.hours){ae+=ai.hours*P.HOUR_MILLISECONDS
}if(ai.days){ae+=ai.days*P.DAY_MILLISECONDS
}if(ai.months){ae+=ai.months*Math.floor(30.5*P.DAY_MILLISECONDS)
}if(ai.years){ae+=ai.years*Math.floor(365.25*P.DAY_MILLISECONDS)
}ai=ae
}if(typeof ai==="number"){if(ai!==0){af=new Date();
af.setTime(af.getTime()+ai);
ak.expires=af;
ai=ak.expires
}else{ak.expires=false
}}if(ai&&ai.toUTCString){ak.expires=ai.toUTCString()
}al=encodeURIComponent(al);
am=ac+"="+al;
for(aj in ak){if(ak.hasOwnProperty(aj)&&ak[aj]){ad=ak[aj];
if(ad!==false){am+="; "+aj;
if(ad!==true){am+="="+ad
}}}}return am
}function s(ac,ae,ad){document.cookie=B(ac,ae,ad)
}function T(ac,ae,ad){s(ac,"",{domain:ad,path:ae,expires:"Thu, 01 Jan 1970 00:00:00 UTC"})
}function q(ac){var ae=new RegExp("(?:^|; )"+ac+"=([^;]*)"),ad=document.cookie.match(ae);
return ad?decodeURIComponent(ad[1]):undefined
}function ab(ad,ac){var ag=void 0,ah=void 0,af=void 0,ae=void 0;
ac=ac||location.href;
ad=ad||"";
ad=ad.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
ag=new RegExp("[\\?&]"+ad+"=([^&#]*)");
ah=ag.exec(ac);
af=ah==null?null:ah[1];
ae=af!=null?decodeURIComponent(af.replace(/\+/g,"%20")):null;
return ae
}function o(ad){var ac=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
ad.animate({height:0},u,function(){if(ac){ad.remove()
}})
}(0,a["default"])(window).on("resize",function(){var ac=r();
if(ac!==i){i=ac;
window.HSBC_utils.matchMedia=D()
}});
(0,a["default"])(document).ready(function(){V()
});
(0,a["default"])(window).on("load",function(){if(aa()||w()){setTimeout(V,300)
}else{C()
}});
return{deregisterComponent:I,init:V,isEditMode:aa,isPreviewMode:w,isPatternLab:O,registerComponent:M,reinitializeParent:t,isIE8orLower:N,dispatchLayerSwitchEvent:S,prepareCookieString:B,setCookie:s,getCookie:q,deleteCookie:T,keyCodes:G,matchMedia:z,getMatchMediaUnit:Z,focusables:U,getUrlParam:ab,collapseElement:o,isFirefox:j,isInternetExplorer:A,isChrome:X,isSafari:p,iOSLowerVersion:Y,isMobileiOS:Q,isMobileAndroid:H,isSmartTemplate:m,isTealiumReady:y,isRTL:R}
}();
window.HSBC_utils=h;
b.HSBC_utils=h
}),168:(function(c,a,f){function e(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var d=Bootstrap.jQuery,b={anchorDataVisuallyHidden:'.text a[title],.text a[target="_blank"],.rich-text a[title],.rich-text a[target="_blank"],table a[title],table a[target="_blank"],[class*="A-PAR"] a[title],[class*="A-PAR"] a[target="_blank"],[class*="A-TYP"] a[title],[class*="A-TYP"] a[target="_blank"],[class*="A-BBS"] a[title],[class*="A-BBS"] a[target="_blank"]',linkTextWrapper:'[aria-hidden="true"]',visuallyHidden:".visuallyhidden",body:"body"},h={visuallyHiddenTagString:'<span class="visuallyhidden"></span>',linkTextWrapperTagString:'<span aria-hidden="true"></span>',visuallyHiddenString:"visuallyhidden",title:"title",globalSettingsDataKey:"global-settings"};
var g=function(){function m(){e(this,m)
}m.init=function l(){this.addVisuallyHiddenTag()
};
m.addVisuallyHiddenTag=function k(){var n=d(b.anchorDataVisuallyHidden);
var o=this.newWindowLinkText();
d.each(n,function(s,t){var x=d(t);
var u=x.text()||"";
var q=x.find(b.visuallyHidden);
var w=x.find(b.linkTextWrapper);
var v=x.attr("target")==="_blank";
var p=x.attr(h.title)||"";
var r=q.text()||"";
if((p!==""||o.length)&&u.length&&!r.length){q.remove();
u=(x.text()||"").trim();
x.empty();
r=u+" "+p+(v?" "+o:"");
w=d(h.linkTextWrapperTagString);
x.append(w);
w.html(u);
q=d(h.visuallyHiddenTagString);
x.append(q);
q.html(r);
x.removeAttr(h.title)
}})
};
m.fetchGlobalSettings=function j(){return d(b.body).data(h.globalSettingsDataKey)||{}
};
m.newWindowLinkText=function i(){return this.fetchGlobalSettings().newWindowLinkText||""
};
return m
}();
d(document).ready(function(){return g.init()
})
}),169:(function(b,d,a){function e(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var c="a[target='_blank']",g="noopener",h={childList:true,attributes:true,characterData:true,subtree:true},f=Bootstrap.jQuery;
var i=function(){function m(){e(this,m)
}m.init=function n(){this.timer=undefined;
this.bindUIEvents();
this.setNoOpenerAttr()
};
m.bindUIEvents=function k(){var o=this;
if(window.MutationObserver){new MutationObserver(function(){return o.handleDOMChange()
}).observe(document.body,h)
}else{f("body").on("DOMNodeInserted",c,function(p){return o.setNoOpenerAttr(f(p.target))
})
}};
m.setNoOpenerAttr=function l(){var o=arguments.length>0&&arguments[0]!==undefined?arguments[0]:f(c);
o.each(function(){var q=f(this),p=q.attr("rel");
if(typeof p==="undefined"){q.attr("rel",g)
}else{if(!p.toLowerCase().includes(g)){q.attr("rel",p+" "+g)
}}})
};
m.handleDOMChange=function j(){var o=this;
if(typeof this.timer==="undefined"){this.timer=setTimeout(function(){o.setNoOpenerAttr();
o.timer=undefined
},10)
}};
return m
}();
f(document).ready(function(){return i.init()
})
}),170:(function(d,a,h){function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var f=Bootstrap.jQuery,e=f("body"),c={noOutlines:"no-outlines"};
var b=function(){function i(){g(this,i)
}i.init=function j(){e.on("mousedown",function(){return e.addClass(c.noOutlines)
}).on("keydown",function(){return e.removeClass(c.noOutlines)
})
};
return i
}();
b.init()
}),171:(function(e,i,d){var c=d(2);
function j(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}var k=Bootstrap.jQuery,n={wrapper:".messaging-banner",smartBanner:".smart-banner",trackEvent:".smart-banner-install",closeButton:".smart-banner-close"},g={smartBanner:"smart-banner",isIOS:"has-ios-banner",isAndroid:"has-android-banner"},a={appId:k('meta[name="apple-itunes-app"]').attr("content"),iosAppUrl:k('meta[name="app-itunes"]').attr("content"),androidAppUrl:k('meta[name="app-google-play"]').attr("content"),pageUrl:HSBC_utils.isTealiumReady&&utag_data.page_url?utag_data.page_url:document.location.pathname,title:k('meta[name="app-title"]').attr("content"),desc:k('meta[name="app-desc"]').attr("content"),viewBtnTxt:k('meta[name="app-view-label"]').attr("content")||"View",closeLabel:k('meta[name="app-close-label"]').attr("content")||"Close"},h=k("body"),o=k(n.wrapper);
var l="smartBanner"+a.appId,b=HSBC_utils.getCookie(l),f=b?parseInt(b,10):0;
var m=function(){function w(){j(this,w)
}w.init=function y(){this.bindUIEvents();
this.setSmartBanner()
};
w.bindUIEvents=function p(){var C=this;
var A=o.find(n.trackEvent),B=o.find(n.closeButton);
A.on("click",function(D){c.TealiumUtils.trackEvent({event_type:"click",page_url:a.pageUrl,event_category:"content",event_action:"button click",event_content:"view smart banner"})
});
B.on("click",function(D){h.removeClass(g.isIOS+" "+g.isAndroid);
o.find(n.smartBanner).remove();
C.bindTriggeredEvents();
c.TealiumUtils.trackEvent({event_type:"click",page_url:a.pageUrl,event_category:"content",event_action:"button click",event_content:"close smart banner"});
HSBC_utils.setCookie(l,"2",{path:"/"})
})
};
w.bindTriggeredEvents=function s(){k(window).trigger("headerMessageChange")
};
w.tealiumLoadEvent=function x(){c.TealiumUtils.trackEvent({event_type:"load",page_url:a.pageUrl,event_category:"content",event_action:"popup",event_content:"smart banner popup"})
};
w.setSmartBanner=function v(){var A=arguments.length>0&&arguments[0]!==undefined?arguments[0]:k(n.smartBanner);
if(f===undefined||k.inArray(f,[0,1])>=0){if(HSBC_utils.isMobileiOS&&this.isEnabledIOS()){if(!HSBC_utils.isSafari||HSBC_utils.iOSLowerVersion){this.iOSBannerLoad();
this.bindUIEvents()
}}else{if(HSBC_utils.isMobileAndroid&&this.isEnabledAndroid()){this.androidBannerLoad();
this.bindUIEvents()
}}HSBC_utils.setCookie(l,"1",{path:"/"})
}};
w.isEnabledAndroid=function u(){return a.androidAppUrl
};
w.isEnabledIOS=function r(){return a.iosAppUrl
};
w.iOSBannerLoad=function z(){var A=this.bannerTemplate("ios");
o.prepend(A);
h.addClass(g.isIOS);
this.tealiumLoadEvent()
};
w.androidBannerLoad=function q(){var A=this.bannerTemplate("android");
o.prepend(A);
h.addClass(g.isAndroid);
this.tealiumLoadEvent()
};
w.bannerTemplate=function t(A){if(A=="ios"){return'\n<div class="'+g.smartBanner+'-wrapper"><div id="'+g.smartBanner+'"  class="'+g.smartBanner+'">\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label=" smartBannerParam.closeLabel}">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <span class="smart-banner-logo"></span>\n     <p class="smart-banner-title">'+a.title+"\n         <span>"+a.desc+'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="'+a.iosAppUrl+'" target="_blank">'+a.viewBtnTxt+"</a>\n     </p>\n<br /></div></div>"
}else{if(A=="android"){return'\n<div class="'+g.smartBanner+'-wrapper"><div id="'+g.smartBanner+'"  class="'+g.smartBanner+'">\n     <span class="smart-banner-logo"></span>\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label="'+a.closeLabel+'">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <p class="smart-banner-title">'+a.title+"\n         <span>"+a.desc+'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="'+a.androidAppUrl+'" target="_blank">'+a.viewBtnTxt+"</a>\n     </p>\n<br /></div></div>"
}}};
return w
}();
k(window).on("load",function(){return m.init()
})
}),172:(function(d,b,g){function f(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var e=Bootstrap.jQuery,c={smartTemplate:'[class*="globalSmart"]',buttons:".buttons-vertically"};
var a=function(){function h(){f(this,h)
}h.init=function k(){this.$smartTemplate=e(c.smartTemplate);
this.$buttons=this.$smartTemplate.find(c.buttons);
this.setButtonsWidth(this.$buttons);
this.bindUIEvents()
};
h.setButtonsWidth=function j(l){l.width("auto");
var m=216,n=Math.max.apply(null,l.map(function(p,q){return e(q).width()
}).get()),o=100;
if(n>m&&!HSBC_utils.matchMedia.mobile){l.width(n)
}else{if(HSBC_utils.matchMedia.mobile){l.width(o+"%")
}else{l.width(m)
}}};
h.bindUIEvents=function i(){var l=this;
e(window).on("resize",function(){return l.setButtonsWidth(l.$buttons)
})
};
return h
}();
a.init()
}),173:(function(f,i,e){i.__esModule=true;
i.trim=g;
i.trimElements=a;
var j=e(5);
var c=m(j);
function m(n){return n&&n.__esModule?n:{"default":n}
}var h={oneWord:"one-word"},b=/^\s+/,d=/\s+$/,k=[".link-container .link"],l=[".visuallyhidden"];
function g(o){function p(s){if(s.nodeType===Node.TEXT_NODE){s.data=s.data.replace(b,"");
return s.data.length===0
}else{var q=0;
var r=s.childNodes.length;
while(q<r&&p(s.childNodes[q])){q=q+1
}return q===r
}}function n(s){if(s.nodeType===Node.TEXT_NODE){s.data=s.data.replace(d,"");
return s.data.length===0
}else{var q=1;
var r=s.childNodes.length;
while(q<=r&&n(s.childNodes[r-q])){q=q+1
}return q>r
}}n(o);
p(o)
}function a(){k.map(function(n){return(0,c["default"])(n)
}).forEach(function(n){n.each(function(){var o=(0,c["default"])(this),q=o.text().trim(),p=q.split(" ").length;
g(o[0]);
if(p===1){o.addClass(h.oneWord)
}})
});
l.map(function(n){return(0,c["default"])(n)
}).forEach(function(n){n.each(function(){var o=(0,c["default"])(this);
o.html(o.text());
o.text(o.html(o.text()).text())
})
})
}a()
}),2:(function(c,b,d){b.__esModule=true;
var e=b.TealiumUtils={trackEvent:function a(f){var g=window.TMS||null;
if(f&&g){g.trackEvent(f)
}}}
}),5:(function(b,a){b.exports=jQuery
})});
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function defineMustache(b,a){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){a(exports)
}else{if(typeof define==="function"&&define.amd){define(["exports"],a)
}else{b.Mustache={};
a(b.Mustache)
}}}(this,function mustacheFactory(F){var x=Object.prototype.toString;
var y=Array.isArray||function d(Q){return x.call(Q)==="[object Array]"
};
function u(Q){return typeof Q==="function"
}function L(Q){return y(Q)?"array":typeof Q
}function i(Q){return Q.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}function J(R,Q){return R!=null&&typeof R==="object"&&(Q in R)
}var o=RegExp.prototype.test;
function c(R,Q){return o.call(R,Q)
}var s=/\S/;
function E(Q){return !c(s,Q)
}var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};
function z(Q){return String(Q).replace(/[&<>"'`=\/]/g,function R(S){return q[S]
})
}var t=/\s*/;
var C=/\s+/;
var l=/\s*=/;
var N=/\s*\}/;
var r=/#|\^|\/|>|\{|&|=|!/;
function e(aj,Y){if(!aj){return[]
}var aa=[];
var Z=[];
var V=[];
var ak=false;
var ah=false;
function ag(){if(ak&&!ah){while(V.length){delete Z[V.pop()]
}}else{V=[]
}ak=false;
ah=false
}var ac,X,ai;
function W(al){if(typeof al==="string"){al=al.split(C,2)
}if(!y(al)||al.length!==2){throw new Error("Invalid tags: "+al)
}ac=new RegExp(i(al[0])+"\\s*");
X=new RegExp("\\s*"+i(al[1]));
ai=new RegExp("\\s*"+i("}"+al[1]))
}W(Y||F.tags);
var S=new a(aj);
var T,R,ab,ae,U,Q;
while(!S.eos()){T=S.pos;
ab=S.scanUntil(ac);
if(ab){for(var af=0,ad=ab.length;
af<ad;
++af){ae=ab.charAt(af);
if(E(ae)){V.push(Z.length)
}else{ah=true
}Z.push(["text",ae,T,T+1]);
T+=1;
if(ae==="\n"){ag()
}}}if(!S.scan(ac)){break
}ak=true;
R=S.scan(r)||"name";
S.scan(t);
if(R==="="){ab=S.scanUntil(l);
S.scan(l);
S.scanUntil(X)
}else{if(R==="{"){ab=S.scanUntil(ai);
S.scan(N);
S.scanUntil(X);
R="&"
}else{ab=S.scanUntil(X)
}}if(!S.scan(X)){throw new Error("Unclosed tag at "+S.pos)
}U=[R,ab,T,S.pos];
Z.push(U);
if(R==="#"||R==="^"){aa.push(U)
}else{if(R==="/"){Q=aa.pop();
if(!Q){throw new Error('Unopened section "'+ab+'" at '+T)
}if(Q[1]!==ab){throw new Error('Unclosed section "'+Q[1]+'" at '+T)
}}else{if(R==="name"||R==="{"||R==="&"){ah=true
}else{if(R==="="){W(ab)
}}}}}Q=aa.pop();
if(Q){throw new Error('Unclosed section "'+Q[1]+'" at '+S.pos)
}return m(p(Z))
}function p(V){var R=[];
var T,Q;
for(var S=0,U=V.length;
S<U;
++S){T=V[S];
if(T){if(T[0]==="text"&&Q&&Q[0]==="text"){Q[1]+=T[1];
Q[3]=T[3]
}else{R.push(T);
Q=T
}}}return R
}function m(V){var X=[];
var U=X;
var W=[];
var R,T;
for(var Q=0,S=V.length;
Q<S;
++Q){R=V[Q];
switch(R[0]){case"#":case"^":U.push(R);
W.push(R);
U=R[4]=[];
break;
case"/":T=W.pop();
T[5]=R[2];
U=W.length>0?W[W.length-1][4]:X;
break;
default:U.push(R)
}}return X
}function a(Q){this.string=Q;
this.tail=Q;
this.pos=0
}a.prototype.eos=function K(){return this.tail===""
};
a.prototype.scan=function O(S){var R=this.tail.match(S);
if(!R||R.index!==0){return""
}var Q=R[0];
this.tail=this.tail.substring(Q.length);
this.pos+=Q.length;
return Q
};
a.prototype.scanUntil=function I(S){var R=this.tail.search(S),Q;
switch(R){case -1:Q=this.tail;
this.tail="";
break;
case 0:Q="";
break;
default:Q=this.tail.substring(0,R);
this.tail=this.tail.substring(R)
}this.pos+=Q.length;
return Q
};
function M(R,Q){this.view=R;
this.cache={".":this.view};
this.parent=Q
}M.prototype.push=function G(Q){return new M(Q,this)
};
M.prototype.lookup=function j(T){var R=this.cache;
var V;
if(R.hasOwnProperty(T)){V=R[T]
}else{var U=this,W,S,Q=false;
while(U){if(T.indexOf(".")>0){V=U.view;
W=T.split(".");
S=0;
while(V!=null&&S<W.length){if(S===W.length-1){Q=J(V,W[S])
}V=V[W[S++]]
}}else{V=U.view[T];
Q=J(U.view,T)
}if(Q){break
}U=U.parent
}R[T]=V
}if(u(V)){V=V.call(this.view)
}return V
};
function k(){this.cache={}
}k.prototype.clearCache=function A(){this.cache={}
};
k.prototype.parse=function v(S,R){var Q=this.cache;
var T=Q[S];
if(T==null){T=Q[S]=e(S,R)
}return T
};
k.prototype.render=function B(T,Q,S){var U=this.parse(T);
var R=(Q instanceof M)?Q:new M(Q);
return this.renderTokens(U,R,S,T)
};
k.prototype.renderTokens=function n(X,Q,V,Z){var T="";
var S,R,Y;
for(var U=0,W=X.length;
U<W;
++U){Y=undefined;
S=X[U];
R=S[0];
if(R==="#"){Y=this.renderSection(S,Q,V,Z)
}else{if(R==="^"){Y=this.renderInverted(S,Q,V,Z)
}else{if(R===">"){Y=this.renderPartial(S,Q,V,Z)
}else{if(R==="&"){Y=this.unescapedValue(S,Q)
}else{if(R==="name"){Y=this.escapedValue(S,Q)
}else{if(R==="text"){Y=this.rawValue(S)
}}}}}}if(Y!==undefined){T+=Y
}}return T
};
k.prototype.renderSection=function w(S,Q,V,Y){var Z=this;
var U="";
var W=Q.lookup(S[1]);
function R(aa){return Z.render(aa,Q,V)
}if(!W){return
}if(y(W)){for(var T=0,X=W.length;
T<X;
++T){U+=this.renderTokens(S[4],Q.push(W[T]),V,Y)
}}else{if(typeof W==="object"||typeof W==="string"||typeof W==="number"){U+=this.renderTokens(S[4],Q.push(W),V,Y)
}else{if(u(W)){if(typeof Y!=="string"){throw new Error("Cannot use higher-order sections without the original template")
}W=W.call(Q.view,Y.slice(S[3],S[5]),R);
if(W!=null){U+=W
}}else{U+=this.renderTokens(S[4],Q,V,Y)
}}}return U
};
k.prototype.renderInverted=function b(S,R,Q,U){var T=R.lookup(S[1]);
if(!T||(y(T)&&T.length===0)){return this.renderTokens(S[4],R,Q,U)
}};
k.prototype.renderPartial=function H(S,R,Q){if(!Q){return
}var T=u(Q)?Q(S[1]):Q[S[1]];
if(T!=null){return this.renderTokens(this.parse(T),R,Q,T)
}};
k.prototype.unescapedValue=function g(R,Q){var S=Q.lookup(R[1]);
if(S!=null){return S
}};
k.prototype.escapedValue=function D(R,Q){var S=Q.lookup(R[1]);
if(S!=null){return F.escape(S)
}};
k.prototype.rawValue=function f(Q){return Q[1]
};
F.name="mustache.js";
F.version="2.3.0";
F.tags=["{{","}}"];
var P=new k();
F.clearCache=function A(){return P.clearCache()
};
F.parse=function v(R,Q){return P.parse(R,Q)
};
F.render=function B(S,Q,R){if(typeof S!=="string"){throw new TypeError('Invalid template! Template should be a "string" but "'+L(S)+'" was given as the first argument for mustache#render(template, view, partials)')
}return P.render(S,Q,R)
};
F.to_html=function h(T,R,S,U){var Q=F.render(T,R,S);
if(u(U)){U(Q)
}else{return Q
}};
F.escape=z;
F.Scanner=a;
F.Context=M;
F.Writer=k;
return F
}));
/*! jQuery Mustache - v0.2.8 - 2013-06-23
 * https://github.com/jonnyreeves/jquery-Mustache
 * Copyright (c) 2013 Jonny Reeves; Licensed MIT */
(function(f,h){var b={},l=null,n={warnOnMissingTemplates:false,allowOverwrite:true,domTemplateType:"text/html",externalTemplateDataType:"text"};
function c(){if(l===null){l=h.Mustache;
if(l===void 0){f.error("Failed to locate Mustache instance, are you sure it has been loaded?")
}}return l
}function k(o){return b[o]!==void 0
}function m(o,p){if(!n.allowOverwrite&&k(o)){f.error("TemplateName: "+o+" is already mapped.");
return
}b[o]=f.trim(p)
}function e(){var o;
if(arguments.length===0){o=f('script[type="'+n.domTemplateType+'"]').map(function(){return this.id
})
}else{o=f.makeArray(arguments)
}f.each(o,function(){var p=document.getElementById(this);
if(p===null){f.error("No such elementId: #"+this)
}else{m(this,f(p).html())
}})
}function d(p){var o=b[p];
delete b[p];
return o
}function g(){b={};
c().clearCache()
}function a(o,p){if(!k(o)){if(n.warnOnMissingTemplates){f.error("No template registered for: "+o)
}return""
}return c().to_html(b[o],p,b)
}function j(o,p){return f.ajax({url:o,dataType:n.externalTemplateDataType}).done(function(q){f(q).filter("script").each(function(r,s){m(s.id,f(s).html())
});
if(f.isFunction(p)){p()
}})
}function i(){return f.map(b,function(p,o){return o
})
}f.Mustache={options:n,load:j,has:k,add:m,addFromDom:e,remove:d,clear:g,render:a,templates:i,instance:l};
f.fn.mustache=function(o,s,q){var r=f.extend({method:"append"},q);
var p=function(u,t){f(u)[r.method](a(o,t))
};
return this.each(function(){var t=this;
if(f.isArray(s)){f.each(s,function(){p(t,this)
})
}else{p(t,s)
}})
}
}(window.jQuery||Bootstrap.jQuery,window));
(function(a,b){if(typeof define==="function"&&define.amd){define(["mustache"],function(d){b(d||a.Mustache)
})
}else{if(typeof exports!=="undefined"){var c=require("mustache");
b(c)
}else{b(a.Mustache)
}}}(this,function Wax(c){c.Formatters={};
c.Context.prototype.parseParam=function b(h){var f,g,e;
f=/^[\'\"](.*)[\'\"]$/g;
g=/^[+-]?\d+$/g;
e=/^[+-]?\d*\.\d+$/g;
if(f.test(h)){return h.replace(f,"$1")
}if(g.test(h)){return parseInt(h,10)
}if(e.test(h)){return parseFloat(h)
}return this._lookup(h)
};
c.Context.prototype.applyFilter=function a(h,g){var k,j,e,f,i=[h];
k=/^\s*([^\:]+)/g;
j=/\:\s*([\'][^\']*[\']|[\"][^\"]*[\"]|[^\:]+)\s*/g;
e=k.exec(g);
f=e[1].trim();
while((e=j.exec(g))){i.push(this.parseParam(e[1].trim()))
}if(c.Formatters.hasOwnProperty(f)){g=c.Formatters[f];
return g.apply(g,i)
}return h
};
c.Context.prototype._lookup=c.Context.prototype.lookup;
c.Context.prototype.lookup=function d(g){var h,e,j,f;
f=g.split("|");
j=f.shift().trim();
j=this._lookup(j);
for(h=0,e=f.length;
h<e;
++h){j=this.applyFilter(j,f[h])
}return j
}
}));
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{configurable:false,enumerable:true,get:d})
}};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=67)
})([(function(d,b,g){var a=g(53)("wks");
var c=g(22);
var e=g(3).Symbol;
var f=typeof e=="function";
var h=d.exports=function(i){return a[i]||(a[i]=f&&e[i]||(f?e:c)("Symbol."+i))
};
h.store=a
}),(function(b,a,e){a.__esModule=true;
function d(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var c=e(5);
var f=a.TealiumObserver=function(){function j(l,k){d(this,j);
this.$elements=c(l);
this.config=k||{};
this.observe()
}j.prototype.observe=function i(){var l=this;
var k=this.config.event_type||"click";
this.$elements.on(k,function(m){return l.trigger(m)
})
};
j.prototype.trigger=function h(k){if(typeof window.TMS!="undefined"){TMS.trackEvent(j.updateConfig(this.config,k.target))
}};
j.updateConfig=function g(l,m){var k=l;
if(typeof l.event_action==="function"){k=c.extend({},k,{event_action:l.event_action(m)||""})
}if(typeof l.event_content==="function"){k=c.extend({},k,{event_content:l.event_content(m)||""})
}return k
};
return j
}()
}),(function(c,b,d){b.__esModule=true;
var e=b.TealiumUtils={trackEvent:function a(f){var g=window.TMS||null;
if(f&&g){g.trackEvent(f)
}}}
}),(function(b,a){var c=b.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();
if(typeof __g=="number"){__g=c
}}),(function(c,b){var a=c.exports={version:"2.6.1"};
if(typeof __e=="number"){__e=a
}}),(function(b,a){b.exports=jQuery
}),(function(b,a,e){a.__esModule=true;
function d(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var c={findDots:/(\d)(?=(\d{3})+(?:\.\d+)?$)/g},g={defaultBranch:"uk"};
var f=a.FormatUtils=function(){function k(m){d(this,k);
this.branch=m||g.defaultBranch
}k.prototype.formatNumber=function i(m){return this.branch==="uk"?this.formatNumberUK(Number(m)):m
};
k.prototype.formatNumberUK=function l(m){var n=m.toFixed(2).replace(c.findDots,"$1,");
return n.replace(/\.00$/,"")
};
k.prototype.formatNumberCalc=function j(m){return m.replace(/\,/,"")
};
k.copyJson=function h(m){return JSON.parse(JSON.stringify(m))
};
return k
}()
}),(function(c,b,e){b.__esModule=true;
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}var a=b.CalculationRules=function(){function g(l){d(this,g);
this.rules=l
}g.prototype.calculateApr=function j(m){var l=this.rules.find(g.getAmountPredicate(m));
return l?l.apr:this.rules[0].apr
};
g.prototype.calculateAmountRange=function i(n){var m=this.rules.filter(g.getMonthsPredicate(n)),l=m.length?m:this.rules;
return{min:l[0].minAmount,max:l[l.length-1].maxAmount}
};
g.prototype.calculateMonthsRange=function k(m){var l=this.rules.find(g.getAmountPredicate(m)),n=l||this.rules[0];
return{min:n.minMonths,max:n.maxMonths}
};
g.getMonthsPredicate=function h(l){return function(m){return m.minMonths<=l.months&&l.months<=m.maxMonths
}
};
g.getAmountPredicate=function f(l){return function(m){return m.minAmount<=l.amount&&l.amount<=m.maxAmount
}
};
return g
}()
}),(function(b,a,e){a.__esModule=true;
a.CalculationService=undefined;
var c=e(6);
function d(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var f=a.CalculationService=function(){function l(m){d(this,l);
this.settings=m||{};
this.formatUtils=new c.FormatUtils(this.settings.branch)
}l.prototype.getCalculationResults=function j(p){var q=p.apr/100,m=p.months,n=p.amount,o=l.getMonthlyRepayment(q,m,n),r=o*m;
return{amount:this.format(n),monthlyRepayment:this.format(o),totalAmount:this.format(r),apr:p.apr}
};
l.prototype.format=function k(m){return this.formatUtils.formatNumber(m)
};
l.getPmt=function i(o,m,n){return o*n*Math.pow(o+1,m)/(1-Math.pow(o+1,m))
};
l.getNominal=function h(n,m){return(Math.pow(n+1,1/m)-1)*m
};
l.getMonthlyRepayment=function g(o,m,n){return this.getPmt(this.getNominal(o,12)/12,m,-n)
};
return l
}()
}),(function(c,b,d){var e=d(10);
var a=d(21);
c.exports=d(12)?function(f,g,h){return e.f(f,g,a(1,h))
}:function(f,g,h){f[g]=h;
return f
}
}),(function(e,c,g){var b=g(11);
var f=g(94);
var d=g(95);
var h=Object.defineProperty;
c.f=g(12)?Object.defineProperty:function a(k,i,l){b(k);
i=d(i,true);
b(l);
if(f){try{return h(k,i,l)
}catch(j){}}if("get" in l||"set" in l){throw TypeError("Accessors not supported!")
}if("value" in l){k[i]=l.value
}return k
}
}),(function(c,b,d){var a=d(20);
c.exports=function(e){if(!a(e)){throw TypeError(e+" is not an object!")
}return e
}
}),(function(b,a,c){b.exports=!c(46)(function(){return Object.defineProperty({},"a",{get:function(){return 7
}}).a!=7
})
}),(function(b,a){var c={}.hasOwnProperty;
b.exports=function(e,d){return c.call(e,d)
}
}),(function(b,a,f){a.__esModule=true;
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var d=Bootstrap.jQuery;
var c=a.SearchService=function(){function m(o,p){e(this,m);
this.config=o||{};
this.resultsPageSize=p;
this.currentId=0
}m.prototype.getSuggestions=function i(s){var u=this;
var r=d.Deferred(),p=s.query,t=this.getNextId(),o=4;
if(p!=null){var q=Object.assign({token:p,max_matches:o},this.getDefaultData());
this.getRequest(this.config.suggestionsEndpointURL,q).done(function(v){return u.resolveSuggestions(r,JSON.parse(v),t)
}).fail(r.reject)
}else{this.resolveSuggestions(r,[],t)
}return r.promise()
};
m.prototype.getNextId=function k(){return isFinite(this.currentId)?++this.currentId:0
};
m.prototype.resolveSuggestions=function h(p,o,q){if(q===this.currentId){p.resolve(o)
}};
m.prototype.getSearchResults=function g(u){var o=this;
var t=d.Deferred(),s=u.query;
if(s){var r=parseInt(u.page,10),q=!isNaN(r)&&r>1?(r-1)*this.resultsPageSize:0,p=Object.assign({q:s.trim(),requiredfields:u.requiredfields,num:this.resultsPageSize,start:q,ie:"utf8",oe:"utf8",filter:0,rc:1},this.getDefaultData());
this.getRequest(this.config.endpointURL,p).done(function(v){t.resolve({results:o.formatSearchRequest(s,v),params:u})
}).fail(t.reject)
}else{t.resolve([])
}return t.promise()
};
m.prototype.formatSearchRequest=function l(v,s){var r={"application/pdf":"pdf","application/msword":"document","text/richtext":"document","application/x-tar":"attachment","application/zip":"attachment","image/gif":"camera","image/jpeg":"camera","image/png":"camera"};
var q={},u=d.parseXML(s),t=d(u),p=t.find("R"),o=t.find("Spelling").find("Suggestion").attr("q");
q={queryString:v,numberOfResults:t.find("M").text(),firstResult:t.find("RES").attr("SN"),lastResult:t.find("RES").attr("EN"),rows:[],suggestion:o};
if(p){p.map(function(x,A){var w=d(A),y=w.attr("MIME"),z=y?{type:r[y]||"assets",directory:w.find("HN").attr("U")}:{};
q.rows.push({url:w.find("U").text(),title:w.find("T").text(),summary:w.find("S").text(),date:w.find("FS").attr("VALUE"),size:w.find("HAS").find("C").attr("SZ"),CID:w.find("HAS").find("C").attr("CID"),attachment:z,language:w.find("LANG").text(),rank:w.find("RK").text()})
})
}return q
};
m.prototype.getRequest=function n(o,q){return d.ajax({method:"GET",url:o,data:q,beforeSend:function p(r){return r.overrideMimeType("text/html; charset=UTF-8")
}})
};
m.prototype.getDefaultData=function j(){return{ssid:this.config.ssid,site:this.config.site}
};
return m
}()
}),(function(e,g,d){g.__esModule=true;
g.InputWithSliderField=g.InputWithSliderFieldAlly=undefined;
var a=d(6);
var j=d(70);
function i(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}g.InputWithSliderFieldAlly=j.InputWithSliderFieldAlly;
var k={calcIndicator:".calc-indicator",handle:".calc-slider-handle",handleMonths:".months-slider-handle",handleInBothSliders:".ui-slider-handle",calcSlider:".calc-slider",calcAreas:".calc-areas",message:".message",headingLeft:".heading-left",headingRight:".heading-right"},c={inputInteraction:"change keyup blur"},l={hide:"hide",areaBorder:"area-border",calcIndicator:"calc-indicator",inputError:"input-error"},b={validationMessageSufix:"-validation-message"},h=Bootstrap.jQuery;
var f=g.InputWithSliderField=function(){function n(H,I){var G=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;
i(this,n);
this.$scope=H;
this.fieldSettings=I;
this.customValues=G;
this.formatUtils=new a.FormatUtils();
this.setRanges();
this._initialiseInput();
this._initialiseSlider();
this.$indicator=this.$slider.find(k.calcIndicator);
this.$labelAmount=this.$scope.find(k.headingLeft);
this.$labelMonths=this.$scope.find(k.headingRight);
this.labelAmountId=this.$labelAmount.attr("id");
this.labelMonthsId=this.$labelMonths.attr("id");
this.$handleInBothSliders=this.$slider.find(k.handleInBothSliders);
this.$handleAmount=this.$slider.find(k.handle);
this.$handleMonths=this.$slider.find(k.handleMonths);
this.allySlider=new j.InputWithSliderFieldAlly(this);
this.allySlider.setAriaOnPercentageIndicator();
this.allySlider.setAriaOnSlider();
this.setCalcIndicatorPosition();
this.bindUiEvents()
}n.prototype.bindUiEvents=function r(){var G=this;
this.$slider.on("mousedown mouseup focus",function(){return G.setCalcIndicatorPosition()
});
h(window).on("resize load",function(){return G.setCalcIndicatorPosition()
})
};
n.prototype.setRanges=function A(){this.ranges={min:this.fieldSettings.range.min,max:this.fieldSettings.range.max}
};
n.prototype.setRange=function D(G){this.fieldSettings.range=G;
this.setRanges();
this.$slider.slider(this.ranges);
this.$minLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.min));
this.$maxLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.max))
};
n.prototype.validateRange=function u(){return this._isInRange(this.fieldSettings.value)
};
n.prototype.setAreas=function x(I){var H=this;
this.$areas.empty();
var G=I.map(function(J){if(J.min>=H.fieldSettings.range.min&&J.max<=H.fieldSettings.range.max){return(J.max-H.fieldSettings.range.min)*100/(H.fieldSettings.range.max-H.fieldSettings.range.min)
}return null
}).filter(function(J){return J!=null
});
[0].concat(G).forEach(function(J){H.$areas.append('<span class="'+l.areaBorder+'" style="margin-left:'+J+'%"></span>')
})
};
n.prototype.setIndicatorValue=function v(G){this.$indicator.text(G)
};
n.prototype.getProperValue=function E(){var I=this.fieldSettings.value,H=this.ranges.min,G=this.ranges.max;
return I>G?G:I<H?H:I
};
n.prototype._initialiseInput=function z(){var G=this;
var H="[data-calc-input="+this.fieldSettings.name+"]";
this.$input=h(H+" input",this.$scope);
this.$validationMessage=h(H+" "+k.message,this.$scope);
h.Mustache.add(this.fieldSettings.name+b.validationMessageSufix,this.$validationMessage.html());
this.$input.val(this.formatUtils.formatNumber(this.getProperValue()));
this.$input.on(c.inputInteraction,function(){G._clearValidationMessage();
if(G._isValidNumber(G.$input.val())){G.fieldSettings.value=Number(G.$input.val().replace(/\.|,/g,""));
if(G._isInRange(G.fieldSettings.value)){G._setSliderValue(G.fieldSettings.value);
G._triggerUpdate()
}else{G._displayValidationMessage();
G._hasError()
}}else{G._displayValidationMessage();
G._hasError()
}})
};
n.prototype._initialiseSlider=function p(){var J=this;
var H="[data-calc-slider="+this.fieldSettings.name+"]";
this.$slider=h(H+" "+k.calcSlider,this.$scope);
this.$slider.slider({range:"min",value:this.getProperValue(),min:this.fieldSettings.range.min,max:this.fieldSettings.range.max,step:this.fieldSettings.step,slide:function G(K,L){if(J.customValues){L.value=J.findNearestValue(K,L.value);
J._setSliderValue(L.value)
}if(J.lastValue!==L.value){J.fieldSettings.value=L.value;
J._setInputValue(L.value);
J._clearValidationMessage();
J._triggerUpdate();
J.setCalcIndicatorPosition();
J.lastValue=L.value
}if(J.customValues){return false
}},create:function I(){J.$slider.find(k.handle).html('<span class="'+l.calcIndicator+'">&nbsp;</span>');
J.setCalcIndicatorPosition();
J.lastValue=J.getProperValue()
}});
this.$minLabel=h(H+" [data-calc-label-min]",this.$scope);
this.$minLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.min));
this.$maxLabel=h(H+" [data-calc-label-max]",this.$scope);
this.$maxLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.max));
this.$areas=this.$slider.parent().find(k.calcAreas)
};
n.prototype.findNearestValue=function C(I,J){var L=I.keyCode!=h.ui.keyCode.RIGHT,G=I.keyCode!=h.ui.keyCode.LEFT;
var H=null,K=null;
this.customValues.forEach(function(N){if(L&&N<=J||G&&N>=J){var M=Math.abs(J-N);
if(K==null||M<K){H=N;
K=M
}}});
return H
};
n.prototype.setCalcIndicatorPosition=function o(){var L=this.$slider.find(k.calcIndicator).outerWidth(),N=this.$slider.find(k.handle).width(),I=this.fieldSettings.value-this.fieldSettings.range.min,H=this.fieldSettings.range.max-this.fieldSettings.range.min,M=100*(I/H),K=parseInt(M.toFixed(0)),G=L-N,J=K/100*G;
this.$slider.find(k.calcIndicator).css("left","-"+J+"px")
};
n.prototype._triggerUpdate=function w(){this.$scope.trigger("fieldUpdated",{name:this.fieldSettings.name,value:this.fieldSettings.value})
};
n.prototype._hasError=function t(){this.$scope.trigger("hasError",{name:this.fieldSettings.name,value:this.fieldSettings.value})
};
n.prototype._setInputValue=function F(G){this.$input.val(this.formatUtils.formatNumber(G))
};
n.prototype._setSliderValue=function q(G){this.$slider.slider({value:G})
};
n.prototype._isValidNumber=function B(G){return(/^[,\.0-9]+$/.test(G))
};
n.prototype._isInRange=function s(G){return this.fieldSettings.range.min<=G&&G<=this.fieldSettings.range.max
};
n.prototype._displayValidationMessage=function m(){var G=this.$validationMessage.attr("id");
this.$validationMessage.empty();
this.$validationMessage.mustache(this.fieldSettings.name+b.validationMessageSufix,this.fieldSettings.range);
this.$input.addClass(l.inputError).attr("aria-describedby",G);
this.$validationMessage.removeClass(l.hide)
};
n.prototype._clearValidationMessage=function y(){var G=this.$validationMessage.attr("id");
this.$input.removeClass(l.inputError).removeAttr("aria-describedby",G);
this.$validationMessage.addClass(l.hide)
};
return n
}()
}),(function(c,b,f){b.__esModule=true;
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var d=Bootstrap.jQuery;
var a=b.DataKeeper=function(){function g(l){e(this,g);
this.lang=g.setUpLang();
this.settings=d.extend({name:"HSBC_"+this.lang+"_"+this.constructor.name,cookieSettings:{path:"/",expires:{days:365}},session:false,forceCookie:false,sessionCookieSettings:{path:"/"}},l);
this.localStorage=window.localStorage;
this.sessionStorage=window.sessionStorage;
this.hasLocalStorage=typeof this.localStorage!=="undefined";
this.hasSessionStorage=typeof this.sessionStorage!=="undefined";
this.setCookie=HSBC_utils.setCookie;
this.getCookie=HSBC_utils.getCookie
}g.prototype.save=function j(l){var m=l||{};
if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){this.sessionStorage[this.settings.name]=JSON.stringify(m)
}else{this.setCookie(this.settings.name,JSON.stringify(m),this.settings.sessionCookieSettings)
}}else{if(this.hasLocalStorage&&!this.settings.forceCookie){this.localStorage[this.settings.name]=JSON.stringify(m)
}else{this.setCookie(this.settings.name,JSON.stringify(m),this.settings.cookieSettings)
}}};
g.prototype.read=function k(){if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){return g.parseData(this.sessionStorage[this.settings.name])
}return g.parseData(this.getCookie(this.settings.name))
}else{if(this.hasLocalStorage&&!this.settings.forceCookie){return g.parseData(this.localStorage[this.settings.name])
}return g.parseData(this.getCookie(this.settings.name))
}};
g.parseData=function i(l){return l?JSON.parse(l):{}
};
g.setUpLang=function h(){return d("html").attr("lang")
};
return g
}()
}),(function(b,a){var c=Math.ceil;
var d=Math.floor;
b.exports=function(e){return isNaN(e=+e)?0:(e>0?d:c)(e)
}
}),(function(b,a){b.exports=function(c){if(c==undefined){throw TypeError("Can't call method on  "+c)
}return c
}
}),(function(c,g,b){var a=b(3);
var d=b(4);
var h=b(9);
var i=b(48);
var j=b(49);
var f="prototype";
var e=function(w,m,k){var l=w&e.F;
var o=w&e.G;
var t=w&e.S;
var n=w&e.P;
var s=w&e.B;
var u=o?a:t?a[m]||(a[m]={}):(a[m]||{})[f];
var r=o?d:d[m]||(d[m]={});
var v=r[f]||(r[f]={});
var x,y,q,p;
if(o){k=m
}for(x in k){y=!l&&u&&u[x]!==undefined;
q=(y?u:k)[x];
p=s&&y?j(q,a):n&&typeof q=="function"?j(Function.call,q):q;
if(u){i(u,x,q,w&e.U)
}if(r[x]!=q){h(r,x,p)
}if(n&&v[x]!=q){v[x]=q
}}};
a.core=d;
e.F=1;
e.G=2;
e.S=4;
e.P=8;
e.B=16;
e.W=32;
e.U=64;
e.R=128;
c.exports=e
}),(function(b,a){b.exports=function(c){return typeof c==="object"?c!==null:typeof c==="function"
}
}),(function(b,a){b.exports=function(d,c){return{enumerable:!(d&1),configurable:!(d&2),writable:!(d&4),value:c}
}
}),(function(c,a){var d=0;
var b=Math.random();
c.exports=function(e){return"Symbol(".concat(e===undefined?"":e,")_",(++d+b).toString(36))
}
}),(function(b,a){b.exports={}
}),(function(b,a,c){var e=c(101);
var d=c(18);
b.exports=function(f){return e(d(f))
}
}),(function(c,a,e){var d=e(53)("keys");
var b=e(22);
c.exports=function(f){return d[f]||(d[f]=b(f))
}
}),(function(c,d,b){d.__esModule=true;
function f(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}var j={arrow:"pagination-arrow",number:"pagination-number",dots:"pagination-dots"},k={pagination:".A-PAGMAN-RW-ALL",pageSwitchers:".number a, .arrow a"},g={page:"page",currentPageText:"current-page-text",pageText:"page-text"},l={disabled:"disabled",active:"active"},a={desktop:2,tablet:1,mobile:0},e=Bootstrap.jQuery;
var i=2;
var h=d.Pagination=function(){function x(B,D,C){f(this,x);
this.$el=e(B);
this.$wrapper=this.$el.find(k.pagination);
this.elNum=D;
this.currentEl=C;
this.allyTexts=this.getAccessibilityTexts();
this.setMustacheTemplates();
this.initElements()
}x.prototype.destroy=function z(){this.$wrapper.empty()
};
x.prototype.getAccessibilityTexts=function n(){var B=this.$el.data(g.currentPageText)||"",C=this.$el.data(g.pageText)||"";
return{currentPage:B,page:C}
};
x.prototype.setMustacheTemplates=function s(){var B=this;
Object.keys(j).forEach(function(C){var D=j[C],E=B.$el.find("."+D);
e.Mustache.add(D,E.html())
})
};
x.prototype.initElements=function t(){if(this.elNum>1){this.setVisibleElCount();
this.render(this.getPaginationMap());
this.bindPaginationUIEvents()
}else{this.destroy()
}};
x.prototype.bindPaginationUIEvents=function q(){var B=this;
this.$pageSwitchers=this.$wrapper.find(k.pageSwitchers).attr("tabindex",2);
this.$pageSwitchers.on("click",function(D){D.preventDefault();
var C=e(D.target);
B.currentEl=C.data(g.page);
B.initElements()
})
};
x.prototype.setVisibleElCount=function A(){i=HSBC_utils.matchMedia.mobile?a.mobile:HSBC_utils.matchMedia.tablet?a.tablet:a.desktop
};
x.prototype.render=function p(B){var C=this;
this.destroy();
B.forEach(function(D){return C.$wrapper.mustache(D.template,D.data)
})
};
x.prototype.getPaginationMap=function r(){var E=[];
E.push(this.getArrowElement("left"));
for(var F=1;
F<=this.elNum;
F++){var D=F===1,I=F===this.elNum,C=this.getElementVisibilityCondition(F),G=this.getDotElement(I,F,-1),B=this.getDotElement(D,F,1);
if(G!==null){E.push(G)
}if(C||D||I){var H=F===this.currentEl?l.active:"";
E.push(this.getNumberElement(F,H))
}if(B!==null){E.push(B)
}}E.push(this.getArrowElement("right"));
return E
};
x.prototype.getDotVisibilityCondition=function u(B){return Math.abs(this.currentEl-B)>i+1
};
x.prototype.getElementVisibilityCondition=function o(B){return Math.abs(this.currentEl-B)<=i
};
x.prototype.getPaginationControls=function y(){if(this.$pageSwitchers===undefined){return{on:function B(){}}
}else{return this.$pageSwitchers
}};
x.prototype.getArrowElement=function m(F){var B=this.currentEl===1&&F==="left"||this.currentEl===this.elNum&&F==="right",E=B?l.disabled:"",D=this.currentEl+(F==="left"?-1:1),C=F==="right";
return{template:j.arrow,data:{direction:F,page:D,isDisabled:B,state:E,isRight:C}}
};
x.prototype.getDotElement=function w(G,C,F){if(G&&this.getDotVisibilityCondition(C)){var E=C+F,D=this.getElementVisibilityCondition(E*2)?j.number:j.dots,B=this.allyTexts.page;
return{template:D,data:{page:E,accessibilityText:B}}
}return null
};
x.prototype.getNumberElement=function v(D,C){var B=C===l.active?this.allyTexts.currentPage:this.allyTexts.page;
return{template:j.number,data:{page:D,state:C,accessibilityText:B}}
};
return x
}()
}),(function(b,e,a){e.__esModule=true;
e.SearchMobileSuggestions=undefined;
var i=a(14);
var l=a(145);
function g(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}var k={searchContainer:".header-mobile-search-container",suggestions:".search-suggestions",suggestionList:".suggestion-list",searchBox:".search-box",suggestionItem:".suggestion-item",helper:".search-suggestions-helper",suggestionsTotal:".suggestions-total"},h={globalSettings:"global-settings",config:"config"},c={hidden:"hidden",suggestionItem:"suggestion-item"},j="search-suggestion-template",f=Bootstrap.jQuery;
var d=e.SearchMobileSuggestions=function(){function u(z){g(this,u);
this.$el=z;
this.$suggestions=this.$el.find(k.suggestions);
this.$suggestionList=this.$suggestions.find(k.suggestionList);
this.$searchBox=this.$el.find(k.searchBox);
this.$helper=this.$el.find(k.helper);
this.searchService=new i.SearchService(this.getConfig());
this.setUpGlobalSettings();
this.$suggestionsTotal=this.$el.find(k.suggestionsTotal);
this.results=[];
this.setMustacheTemplates();
this.bindUIEvents();
this.ally=new l.SearchMobileSuggestionsAlly(this)
}u.prototype.bindUIEvents=function m(){var z=this;
this.$searchBox.on("input",function(){return z.resolveSuggestions()
});
f(window).on("click",function(B){var A=f(B.target);
if(!A.parents(k.searchContainer).length){z.removeSuggestions()
}})
};
u.prototype.setUpGlobalSettings=function y(){this.globalSettings=f(document.body).data(h.globalSettings)
};
u.prototype.fetchTotalSuggestionsAllyText=function v(){return this.globalSettings&&this.globalSettings.totalSuggestions?this.globalSettings.totalSuggestions:""
};
u.prototype.resolveSuggestions=function t(){var z=this;
this.searchService.getSuggestions({query:this.$searchBox.val()}).done(function(A){z.results=A||[];
if(z.results.length){z.showSuggestions()
}else{z.$helper.empty().html(0);
z.hideSuggestions()
}})
};
u.prototype.showSuggestions=function w(){this.$suggestions.removeClass(c.hidden).attr("aria-hidden",false);
this.$helper.empty().html(this.results.length);
this.$helper.parent().attr("aria-hidden",false);
this.render()
};
u.prototype.render=function n(){var z=this;
this.$suggestionList.empty();
this.results.forEach(function(A){return z.$suggestionList.mustache(j,{text:A})
});
this.$suggestionsTotal.html(this.results.length+" "+this.fetchTotalSuggestionsAllyText());
this.$suggestionItems=this.$suggestionList.find(k.suggestionItem);
this.bindSuggestionsUIEvents()
};
u.prototype.bindSuggestionsUIEvents=function s(){var z=this;
this.$suggestionItems.on("click",function(A){return z.handleSuggestionChoice(f(A.target))
}).on("focusout",function(B){var A=f(B.relatedTarget);
if(!A.hasClass(c.suggestionItem)){z.hideSuggestions()
}});
this.ally.bindSuggestionsUIEvents()
};
u.prototype.handleSuggestionChoice=function p(z){var A=z.text();
this.hideSuggestions();
this.$searchBox.val(A)
};
u.prototype.hideSuggestions=function r(){this.removeSuggestions();
this.$searchBox.focus()
};
u.prototype.removeSuggestions=function o(){this.$suggestions.addClass(c.hidden).attr("aria-hidden",true);
this.$helper.parent().attr("aria-hidden",true)
};
u.prototype.getConfig=function x(){return this.$el.data(h.config)
};
u.prototype.setMustacheTemplates=function q(){f.Mustache.add(j,this.$el.find("."+j).html())
};
return u
}()
}),(function(b,g,a){g.__esModule=true;
var c=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(p){return typeof p
}:function(p){return p&&typeof Symbol==="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p
};
function i(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}var e={hidden:"hidden"},l={accountsButton:"my-accounts-button",loginButton:".login-button",registerButton:".register-button",logoutButton:".logout-button",pagePath:"[data-page-path]",loginLinks:".login-links"},j="ICIPDOMAINCOOKIE",o="dpws_logout_command",k="dpws_authorized_true",d="dpws_authorized_false",h=Bootstrap.jQuery,f=h(document.body);
var n={checked:false,during:false,authorized:false,delayed:[]};
var m=g.HeaderLoggedUserState=function(){function x(z){i(this,x);
this.context=z;
this.$el=z.$el;
this.$logoutButton=this.$el.find(l.logoutButton);
this.$loginButton=this.$el.find(l.loginButton);
this.$loginLinks=this.$el.find(l.loginLinks);
this.$mobileAccountsButton=this.$el.find("."+l.accountsButton);
this.$registerButton=f.find(l.registerButton);
if(this.$el.hasClass(l.accountsButton)){this.$accountsButton=this.$el
}else{this.$accountsButton=h("<div></div>")
}this.adjustHeaderElements(this.$loginButton,this.$logoutButton);
this.adjustHeaderElements(this.$registerButton,this.$accountsButton);
this.adjustHeaderElements(h(),this.$mobileAccountsButton);
this.bindUiEvents()
}x.prototype.bindUiEvents=function u(){var z=this;
if(c(this.$logoutButton.attr("href"))===(true?"undefined":c(undefined))||this.$logoutButton.attr("href")===false){this.$logoutButton.on("click",function(){return z.redirectOnLogout()
})
}h(document).on(o,function(){return z.logout()
})
};
x.prototype.adjustHeaderElements=function w(A,B){var C=this;
var z=HSBC_utils.getCookie(j);
if(n.checked){this.changeLoggedState(n.authorized,A,B);
this.isLoggedInEvent(n.authorized)
}else{if(n.during){n.delayed.push(function(D){return C.changeLoggedState(D,A,B)
})
}else{n.during=true;
h.ajax("/authorize.auth.json?q",{cache:false,contentType:"json"}).done(function(E){var D=E&&E.authorized;
C.changeLoggedState(E&&E.authorized,A,B);
C.isLoggedInEvent(D);
n.during=false;
n.checked=true;
n.authorized=D;
n.delayed.forEach(function(F){return F(D)
});
n.delayed=[]
})
}}};
x.prototype.changeLoggedState=function r(B,z,A){if(B){z.addClass(e.hidden);
A.removeClass(e.hidden);
this.$loginLinks.remove()
}else{z.removeClass(e.hidden);
A.addClass(e.hidden)
}};
x.prototype.getPagePath=function q(){var z=h(document).find(l.pagePath);
return z?z.data("page-path"):""
};
x.prototype.redirectOnLogout=function t(){h("<form>",{method:"post",action:"/bin/logout."+this.getPagePath()}).appendTo("body").submit()
};
x.prototype.isLoggedInEvent=function v(z){h(document).trigger(z?k:d)
};
x.prototype.logout=function y(){this.redirectTo(this.fetchLogoutUrl())
};
x.prototype.redirectTo=function p(z){z=z||"";
document.location.href=z
};
x.prototype.fetchLogoutUrl=function s(){return this.$logoutButton.attr("href")||"/bin/logout"
};
return x
}()
}),(function(d,f,c){f.__esModule=true;
f.LoanRepaymentCalculationService=undefined;
var i=c(68);
var b=h(i);
var a=c(6);
function h(l){if(l&&l.__esModule){return l
}else{var j={};
if(l!=null){for(var k in l){if(Object.prototype.hasOwnProperty.call(l,k)){j[k]=l[k]
}}}j["default"]=l;
return j
}}function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var e=f.LoanRepaymentCalculationService=function(){function l(x){g(this,l);
this.rules=x;
this.formatUtils=new a.FormatUtils();
this.initData();
this.formatData();
this.updateRules()
}l.prototype.initData=function w(){this.rulesData=a.FormatUtils.copyJson(this.rules.LoanCalculatorRateConfig.loanCalculatorRateTable)||[];
this.promoCodes=[].concat(this.rulesData.map(function(x){return x.promoCodeList[0]?x.promoCodeList[0]:""
}));
this.rulesWithoutPromoCode=this.rulesData.filter(function(x){return !x.promoCodeList.length
});
this.stages=a.FormatUtils.copyJson(b)
};
l.prototype.updateRules=function v(){var x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";
this.rules=this.getRulesByPromoCode(x);
this.setAmountRange()
};
l.prototype.getRulesByPromoCode=function m(y){var x=this.rulesData.filter(function(z){return z.promoCodeList.includes(y)
});
return(x.length?x:this.rulesWithoutPromoCode)[0].rateTable
};
l.prototype.formatData=function k(){this.rulesData.forEach(function(x){x.rateTable.forEach(function(z){var y=z.amount.split("-");
z.amount={min:y[0],max:y[1]};
z.flatRate.forEach(function(B){var A=B.months.split("-");
B.months={min:A[0],max:A[1]}
})
})
})
};
l.prototype.setMonthsRange=function o(y){var x=this.getMonthPointStages(y);
this.monthsRange={min:Math.min.apply(null,x),max:Math.max.apply(null,x)}
};
l.prototype.setAmountRange=function r(){this.amountRange={min:Math.min.apply(null,this.rules.map(function(x){return x.amount.min
})),max:Math.max.apply(null,this.rules.map(function(x){return x.amount.max
}))}
};
l.prototype.getApr=function u(z){var y=arguments.length>1&&arguments[1]!==undefined?arguments[1]:z.amount;
var A=this.getRuleByAmount(y),x=A.monthlyRepayment.find(function(B){return B.months==z.months
});
return x?x.APR:0
};
l.prototype.getRuleByAmount=function n(x){return this.rules.find(function(y){return y.amount.max>=x&&y.amount.min<=x
})
};
l.prototype.getAmountStages=function t(){return l.getStages(this.stages.amount)
};
l.prototype.getMonthPointStages=function p(x){var y=this.getRuleByAmount(x);
return y.monthlyRepayment.map(function(z){return +z.months
})
};
l.prototype.getMonthStages=function s(x){return l.getStages(this.getMonthPointStages(x))
};
l.getStages=function q(y){var z=[];
for(var x=1;
x<y.length;
x++){z.push({max:y[x],min:y[x-1]})
}return z
};
l.prototype.getFormattedResult=function j(y){var x=Number(this.getRuleByAmount(y.amount).flatRate[0].rate),z=y.amount*(1+x*y.months/100);
return{monthlyRepayment:this.formatUtils.formatNumber(z/y.months),totalAmount:this.formatUtils.formatNumber(z),apr:this.getApr(y),flatRate:x}
};
return l
}()
}),(function(d,b,g){b.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var a={hasError:"hasError",fieldUpdated:"fieldUpdated"},c=HSBC_utils.keyCodes,e=Bootstrap.jQuery;
var h=b.LoanRepaymentCalculatorAlly=function(){function n(o){f(this,n);
this.$el=o.$el;
this.context=o;
this.bindUIEvents()
}n.prototype.bindUIEvents=function k(){var o=this;
this.context.$inputFields.on("keydown",function(p){return o.removeAriaLive(p)
}).on("keyup",function(r){var p=r.keyCode,s=p===c.TAB,q=p===c.SHIFT;
if(!(q||s)){o.readResults()
}});
this.$el.on(a.fieldUpdated,function(){o.context.amountField.allySlider.setAriaOnSlider();
o.context.monthsField.allySlider.setAriaOnSlider()
});
this.context.$sliderHandle.on("keydown",function(p){return o.handleKeyboardNavigation(p)
}).one("mousedown",function(){return o.readResults()
});
this.$el.on(a.hasError,function(){return o.readErrorMessageOnce()
})
};
n.prototype.handleKeyboardNavigation=function i(s){var q=s.keyCode,t=q===c.TAB,p=q===c.ENTER,u=q===c.LEFT,o=q===c.RIGHT,r=s.shiftKey;
if(e(document.activeElement).is(this.context.$sliderHandle)){if(u||o){this.context.$results.attr("aria-live","polite");
this.context.$calculationInputs.attr("aria-live","polite")
}else{if(t||p||r){this.context.$results.removeAttr("aria-live");
this.context.$calculationInputs.removeAttr("aria-live")
}}}};
n.prototype.readResults=function m(){this.context.$results.attr("aria-live","polite");
this.context.$calculationInputs.attr("aria-live","polite");
o(this.context.amountField.$input);
o(this.context.monthsField.$input);
function o(p){if(e(document.activeElement).is(p)){p.attr({"aria-live":"polite","aria-atomic":"true"})
}}};
n.prototype.removeAriaLive=function l(p){var q=p.keyCode===c.TAB,o=p.shiftKey;
if(e(document.activeElement).is(this.context.$inputFields)){if(q||o){this.context.$results.removeAttr("aria-live");
this.context.$calculationInputs.removeAttr("aria-live");
this.context.amountField.$input.removeAttr("aria-live aria-atomic");
this.context.monthsField.$input.removeAttr("aria-live aria-atomic")
}}};
n.prototype.readErrorMessageOnce=function j(){this.context.$results.attr("aria-live","polite");
this.context.$calculationInputs.attr("aria-live","polite")
};
return n
}()
}),(function(d,b,g){b.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var h={resultTemplate:"resultTemplate"},a={resultTemplate:".result-template",result:".result"},e=Bootstrap.jQuery;
var c=b.ResultRenderer=function(){function i(k){f(this,i);
this.$scope=k;
this.$resultElement=e(a.result,k);
e.Mustache.add(h.resultTemplate,e(a.resultTemplate,k).html())
}i.prototype.render=function j(k){this.$resultElement.empty();
this.$resultElement.mustache(h.resultTemplate,k)
};
return i
}()
}),(function(c,a,f){a.__esModule=true;
function e(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var b={incomePrefix:".income-prefix"},d=Bootstrap.jQuery;
var g=a.CurrencyFormatter=function(){function i(j){e(this,i);
this.$el=d(j)
}i.prototype.addPrefixSpacing=function h(){var m=this.$el.find(b.incomePrefix),j=m.next("input[name=amount]"),k=!!j.hasClass("left-placeholder-1");
var l=m.width();
if(!k){l+=18
}else{if(k){l+=14
}}j.css("padding-left",l)
};
return i
}()
}),(function(d,g,c){g.__esModule=true;
g.LoansCalculatorBase=undefined;
var l=c(16);
var m=c(31);
var n=c(72);
var e=c(32);
function i(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}var f={configHolder:".config-holder",headingLeft:".heading-left",headingRight:".heading-right",results:".rightholder",calculationInputs:".placeholder-left",sliderHandle:".ui-slider-handle",inputFields:".input"},j={config:"config",amountPrefix:"amount-prefix",percentSufix:"percent-sufix",annually:"annually"},b={fieldUpdated:"fieldUpdated",beforeunload:"beforeunload"},a={endpointURL:"/bin/public/gpws/calculation",auto:"auto"},h=Bootstrap.jQuery;
var k=g.LoansCalculatorBase=function(){function v(A){i(this,v);
this.$el=h(A);
this.initConfig();
this.cacheDOMElements();
this.initCalculationService();
this.resultRenderer=new m.ResultRenderer(this.$el);
this.setInputsAreas();
this.calculate();
this.setEqualHeadingsHeight();
this.bindUiEvents();
this.currencyFormatter=new e.CurrencyFormatter(this.$el);
this.currencyFormatter.addPrefixSpacing();
new n.LoansCalculatorBaseAlly(this)
}v.prototype.initConfig=function o(){var A=this.$el.find(f.configHolder);
this.config=A.data(j.config);
this.amountPrefix=A.data(j.amountPrefix)||"";
this.percentSufix=A.data(j.percentSufix)||"";
this.annually=A.data(j.annually)||"";
this.dataKeeper=new l.DataKeeper();
this.state=this.dataKeeper.read();
Object.assign(this.config,{defaultAmount:this.state.amount||this.config.defaultAmount,defaultMonths:this.state.months||this.config.defaultMonths});
Object.assign(this.state,{amount:this.state.amount||this.config.defaultAmount,months:this.state.months||this.config.defaultMonths});
this.addMinAmountToRules()
};
v.prototype.setInputsAreas=function z(){this.amountField.setAreas(this.config.rules.map(function(A){return{max:A.maxAmount,min:A.minAmount}
}))
};
v.prototype.cacheDOMElements=function q(){this.$headingLeft=this.$el.find(f.headingLeft);
this.$headingRight=this.$el.find(f.headingRight);
this.$results=this.$el.find(f.results);
this.$calculationInputs=this.$el.find(f.calculationInputs);
this.$sliderHandle=this.$el.find(f.sliderHandle);
this.$inputFields=this.$el.find(f.inputFields)
};
v.prototype.bindUiEvents=function u(){var A=this;
h(window).on("load resize",function(){return A.setEqualHeadingsHeight()
}).on(b.beforeunload,function(){return A.save()
});
this.$el.on(b.fieldUpdated,function(C,B){return A.recalculate(B)
})
};
v.prototype.save=function w(){this.dataKeeper.save(this.state)
};
v.prototype.setEqualHeadingsHeight=function p(){this.$headingLeft.height(a.auto);
this.$headingRight.height(a.auto);
if(!HSBC_utils.matchMedia.mobile){var B=[this.$headingLeft,this.$headingRight],C=[this.$headingLeft.outerHeight(),this.$headingRight.outerHeight()],A=Math.max.apply(Math,C);
B.forEach(function(D){return D.outerHeight(A)
})
}};
v.prototype.addMinAmountToRules=function x(){var A=this;
this.config.rules.forEach(function(C,B){return C.minAmount=B?A.config.rules[B-1].maxAmount+1:A.config.minAmount
})
};
v.prototype.calculate=function s(){};
v.prototype.initCalculationService=function t(){};
v.prototype.recalculate=function y(A){};
v.prototype.displayResult=function r(A){};
return v
}()
}),(function(c,b,f){b.__esModule=true;
b.CalculationServiceChina=undefined;
var d=f(6);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var a=b.CalculationServiceChina=function(){function g(j){e(this,g);
this.settings=j||{};
this.formatUtils=new d.FormatUtils(this.settings.branch)
}g.prototype.getCalculationResults=function i(n){var m=n.rate/100,j=n.months,k=n.amount,l=g.getMonthlyRepayment(m,j,k),o=l*j;
return{monthlyRepayment:this.formatUtils.formatNumber(l),totalAmount:this.formatUtils.formatNumber(o),rate:n.rate}
};
g.getMonthlyRepayment=function h(l,j,k){return l*k*Math.pow(l+1,j)/(Math.pow(l+1,j)-1)
};
return g
}()
}),(function(d,c,g){c.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var h={resultBottomTemplate:"resultBottomTemplate",resultTopTemplate:"resultTopTemplate"},b={resultBottomTemplate:".result-bottom-template",resultTopTemplate:".result-top-template",resultBottom:".result-bottom",resultTop:".result-top",results:".results"},e=Bootstrap.jQuery;
var a=c.OfferDetailResultRenderer=function(){function i(m){f(this,i);
this.$scope=m;
this.$resultElements=e(b.results,m);
this.$resultBottom=e(b.resultBottom,m);
this.$resultTop=e(b.resultTop,m);
e.Mustache.add(this.getMustacheName(h.resultBottomTemplate),e(b.resultBottomTemplate,m).html());
e.Mustache.add(this.getMustacheName(h.resultTopTemplate),e(b.resultTopTemplate,m).html())
}i.prototype.render=function k(m){this.empty();
this.$resultBottom.mustache(this.getMustacheName(h.resultBottomTemplate),m);
this.$resultTop.mustache(this.getMustacheName(h.resultTopTemplate),m)
};
i.prototype.empty=function l(){this.$resultElements.empty()
};
i.prototype.getMustacheName=function j(m){return m+"_"+this.$scope.uniqueId().attr("id")
};
return i
}()
}),(function(b,a,e){a.__esModule=true;
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}var c=a.Actions=function(){function x(y){d(this,x);
this.$=Bootstrap.jQuery;
this.options={buttonSelector:'.M-MODWIN-RW-DEV [class*="A-BT"],.M-MODWIN-RW-DEV .A-FSCHKB-RW-ALL [type="checkbox"],.M-MODWIN-RW-DEV .close-trigger',checkboxSelector:'.A-FSCHKB-RW-ALL [type="checkbox"]',actionCssClass:"A-BTNP-RW-ALL",cancelCssClass:"A-BTNSO-RW-ALL",closeCssClass:"close-trigger",disabledCssClass:"disabled",exceptGmClass:"except-gm",showOnce:false,close:function B(){},fetchModal:function A(){return null
},save:function z(){},logoutOnAction:false,LOGOUT_EVENT_COMMAND:"dpws_logout_command"};
this.settings=this.$.extend({},this.options,y);
this.setUpModal();
this.updateButtonsSelectorWithID();
this.flagModalButtons();
this.observeButtons();
this.toggleActionButton(this.validateAsForm())
}x.prototype.action=function q(){var y=this.validateAsForm();
if(y){this.saveShowedOnce();
if(this.shouldLogoutOnAction()){if(this.shouldFollow()){this.followOnBlank()
}this.defer(this.logoutOnAction,5000)
}else{this.defer(this.follow,1000)
}this.defer(this.settings.close)
}this.toggleActionButton(y)
};
x.prototype.follow=function f(){document.location.href=this.currentPath
};
x.prototype.followOnBlank=function l(){this.$("<a>",{href:this.currentPath,id:"follow-on-blank","class":this.settings.exceptGmClass+" visuallyhidden",target:"_blank"}).appendTo(this.$(document.body)).html(this.currentPath).show().get(0).click()
};
x.prototype.cancel=function j(){this.resetAsForm();
this.toggleActionButton(this.validateAsForm());
this.defer(this.settings.close,500)
};
x.prototype.updateButtonsSelectorWithID=function w(){if(!this.$modal){return
}this.settings.buttonSelector=this.settings.buttonSelector.replace(/.M-MODWIN-RW-DEV/g,"#"+this.$modal.attr("id"))
};
x.prototype.observeButtons=function v(){var z=this;
this.$(document).on("click change",this.settings.buttonSelector,function(B){var A=z.$(B.target);
if(!y(B.target)){A=A.parents("a");
if(!A.length){A=A.parents("button")
}if(!A.length){A=A.parents("input")
}}z.dispatchAction(A)
});
function y(A){return A&&(A.tagName.toLowerCase()==="a"||A.tagName.toLowerCase()==="button"||A.tagName.toLowerCase()==="input")
}};
x.prototype.dispatchAction=function s(y){if(y.hasClass(this.settings.actionCssClass)){this.action()
}else{if(y.hasClass(this.settings.cancelCssClass)){this.cancel()
}else{if(y.hasClass(this.settings.closeCssClass)){this.callCancelButtonIfExists();
this.cancel()
}else{if(y.is(this.settings.checkboxSelector)){this.toggleActionButton(this.validateAsForm())
}}}}};
x.prototype.validateAsForm=function p(){var z=true;
if(this.$modal&&this.$modal.length){var y=this.$modal.find(this.settings.checkboxSelector);
y.each(function(B,A){z=A.checked&&z
})
}return z
};
x.prototype.resetAsForm=function n(){if(this.$modal&&this.$modal.length){this.$modal.find(this.settings.checkboxSelector).each(function(z,y){y.checked=false
})
}};
x.prototype.toggleActionButton=function i(z){var y=this.$modal.find("."+this.settings.actionCssClass);
if(z){y.removeClass(this.settings.disabledCssClass)
}else{y.addClass(this.settings.disabledCssClass)
}};
x.prototype.setUpModal=function k(){if(typeof this.settings.fetchModal!=="function"){return
}this.$modal=this.settings.fetchModal()
};
x.prototype.logoutOnAction=function o(){this.$(document).trigger(this.settings.LOGOUT_EVENT_COMMAND)
};
x.prototype.shouldLogoutOnAction=function u(){return !!this.settings.logoutOnAction
};
x.prototype.shouldFollow=function t(){var y=this.currentPath+"";
return y.length>1&&y.indexOf("#")!==0
};
x.prototype.saveShowedOnce=function g(){if(typeof this.settings.save!=="function"&&!this.settings.showOnce){return
}this.settings.save({showedOnce:true})
};
x.prototype.callCancelButtonIfExists=function r(){var y=this.$modal.find("."+this.settings.cancelCssClass);
document.location.href=y.attr("href")
};
x.prototype.flagModalButtons=function m(){this.$(this.settings.buttonSelector).addClass(this.settings.exceptGmClass)
};
x.prototype.defer=function h(z,y){z=z||function(){};
y=y||2000;
return setTimeout(z.bind(this),y)
};
return x
}()
}),(function(b,a,e){a.__esModule=true;
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}var c=a.Ally=function(){function m(q){d(this,m);
this.$=Bootstrap.jQuery;
this.options={focusableFrameCssClass:"M-MODWIN-RW-DEV",buttonSelector:'.M-MODWIN-RW-DEV [class*="A-BT"],.M-MODWIN-RW-DEV .A-FSCHKB-RW-ALL [type="checkbox"],.M-MODWIN-RW-DEV .close-trigger',checkboxSelector:'.A-FSCHKB-RW-ALL [type="checkbox"]',actionCssClass:"A-BTNP-RW-ALL",cancelCssClass:"A-BTNSO-RW-ALL",closeCssClass:"close-trigger",disabledCssClass:"disabled",validationMessageSelector:"[data-validation-message]",validationMessageKey:"validation-message",validationMessageCssClass:"validation-message",closeKeyboadKey:27,fetchModal:function r(){return null
}};
this.settings=this.$.extend({},this.options,q);
this.setUpLastActive();
this.setUpModal();
this.setUpCta()
}m.prototype.focusOnShow=function n(q){this.$("."+this.settings.focusableFrameCssClass).get(0).focus()
};
m.prototype.focusOnTitle=function h(){this.$modal.find("h3").focus()
};
m.prototype.setUpModal=function k(){if(typeof this.settings.fetchModal!=="function"){return
}this.$modal=this.settings.fetchModal()
};
m.prototype.focusCtaOrClose=function l(){var q=this.$cta;
if(!q.length){q=this.$modal.find("."+this.settings.closeTrigger)
}q.get(0).focus()
};
m.prototype.setUpCta=function f(){this.$cta=this.$modal.find("."+this.settings.actionCssClass)
};
m.prototype.closeOnEsc=function g(){var r=this;
var q=this.$modal.find("."+this.settings.closeCssClass);
this.$(document).on("keyup",function(s){if(r.$modal.is(":visible")&&s.which==r.settings.closeKeyboadKey&&q.length){q.get(0).click()
}})
};
m.prototype.setUpLastActive=function i(){this.lastActive=document.activeElement
};
m.prototype.backToLastActive=function j(){var q=this.$(this.lastActive);
if(!q.is("a")&&!q.is("button")&&!q.is("input")&&!q.is(document.body)){q=q.parents("a");
if(!q.length){q=q.parents("button")
}if(!q.length){q=q.parents("input")
}if(!q.length){q=q.parents(document.body)
}}q.get(0).focus()
};
m.prototype.fetchValidationText=function p(){return this.$modal.find(this.settings.validationMessageSelector).data(this.settings.validationMessageKey)||"is disabled"
};
m.prototype.addValidationTextToCta=function o(){var q=this.$cta.find("."+this.settings.validationMessageCssClass);
if(!q.length){q=this.$('<span class="visuallyhidden '+this.settings.validationMessageCssClass+'">'+this.fetchValidationText()+"</span>");
q.appendTo(this.$cta)
}};
return m
}()
}),(function(e,a,h){a.__esModule=true;
a.GenericModal=undefined;
var d=h(36);
var f=h(16);
var c=h(37);
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var b=a.GenericModal=function(){function o(D){g(this,o);
this.$=Bootstrap.jQuery;
this.options={openCssClass:"modal-show",modalSelector:".modal",proxyElement:document.body,IS_LOGGED_IN_EVENT:"dpws_authorized_true",IS_NOT_LOGGED_IN_EVENT:"dpws_authorized_false",logoutOnAction:false,authorizedOnly:false,anonymousOnly:false,showOnce:false,openImmediate:false};
this.settings=this.$.extend({},this.options,D);
this.id="no-modal";
this.$proxyElement=this.$(document.body);
this.dataKeeper=new f.DataKeeper({name:"HSBC_GENERICMODAL_DATA"+this.modalPathToKey(),session:true,forceCookie:true});
this.storedData=this.dataKeeper.read();
this.showedOnce=!!this.storedData.showedOnce;
this.observeAuth();
this.prepare()
}o.prototype.observeAuth=function n(){var D=this;
this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,function(){if(D.isAuthorizedOnly()){D.abort()
}D.loggedIn=false
});
this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,function(){if(D.isAnonymousOnly()){D.abort()
}D.loggedIn=true
})
};
o.prototype.onLoggedIn=function v(E){var D=this;
E=E||function(){};
if(this.isLoggedIn()){E()
}else{this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,function(){return E.bind(D)
})
}};
o.prototype.onNotLoggedIn=function p(E){var D=this;
E=E||function(){};
this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,function(){return E.bind(D)
})
};
o.prototype.isLoggedIn=function i(){return !!this.loggedIn
};
o.prototype.isAuthorizedOnly=function z(){return this.settings.authorizedOnly&&!this.settings.anonymousOnly
};
o.prototype.isAnonymousOnly=function y(){return this.settings.anonymousOnly&&!this.settings.authorizedOnly
};
o.prototype.modalPathToKey=function q(){var D=this.settings.modalUrl+"";
return D.replace(/\//g,"_")
};
o.prototype.setUpCurrentPath=function r(D){this.currentPath=D;
this.actions.currentPath=D
};
o.prototype.fetchModal=function w(){return this.$modal
};
o.prototype.open=function t(D){if(!this.$modal||this.shouldNotShowModal()){return
}this.ally.setUpLastActive();
this.setUpCurrentPath(D);
this.$proxyElement.append(this.$modal);
this.$modal.show();
this.markAsOpen();
this.ally.setUpLastActive();
this.ally.focusOnShow();
this.ally.focusCtaOrClose();
this.ally.closeOnEsc();
this.ally.focusOnTitle();
this.stateEvent("open")
};
o.prototype.close=function u(D){if(!this.$modal){return
}this.setUpCurrentPath(D);
this.$modal.hide();
this.markAsClosed();
this.ally.backToLastActive();
this.stateEvent("close")
};
o.prototype.prepare=function j(F){var E=this;
var D=this.settings.modalUrl+(document.location.port?"?wcmmode=disabled":"");
if(!~D.indexOf(this.settings.modalSelector)){D=D.replace(".html","");
D=""+D+this.settings.modalSelector+".html"
}this.$.get(D).done(function(G){E.$modal=E.$(G);
E.identify(E.$modal);
E.actions=new d.Actions({close:E.close.bind(E),fetchModal:E.fetchModal.bind(E),showOnce:E.settings.showOnce,save:E.dataKeeper.save.bind(E.dataKeeper),logoutOnAction:E.settings.logoutOnAction,authorizedOnly:E.settings.authorizedOnly,anonymousOnly:E.settings.anonymousOnly});
E.ally=new c.Ally({fetchModal:E.fetchModal.bind(E)});
E.ally.addValidationTextToCta();
if(E.shouldOpenImmediate()){if(E.isAuthorizedOnly()){E.onLoggedIn(function(){E.open(E.settings.originalPath)
})
}else{if(E.isAnonymousOnly()){E.onNotLoggedIn(function(){E.open(E.settings.originalPath)
})
}else{E.open(E.settings.originalPath)
}}}})
};
o.prototype.shouldOpenImmediate=function C(){return !!this.settings.openImmediate
};
o.prototype.markAsOpen=function A(){this.$proxyElement.addClass(this.settings.openCssClass)
};
o.prototype.markAsClosed=function k(){this.$proxyElement.removeClass(this.settings.openCssClass)
};
o.prototype.identify=function m(D){var E=D.attr("id");
if(!E){E="modal-id-"+Math.floor(Math.random(10000)*10000);
D.attr("id",E)
}this.id=E;
this.settings.openCssClass=this.settings.openCssClass+"-"+E
};
o.prototype.abort=function l(){this.close();
this.remove();
this.stateEvent("abort")
};
o.prototype.remove=function B(){if(this.$modal&&this.$modal.length){this.$modal.remove();
this.$modal=null
}};
o.prototype.shouldNotShowModal=function s(){return this.settings.showOnce&&this.showedOnce
};
o.prototype.stateEvent=function x(D){this.$(document).trigger({type:"generic_modal_"+D,id:this.id})
};
return o
}()
}),(function(d,b,f){b.__esModule=true;
b.Modals=undefined;
var a=f(40);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var c=b.Modals=function(){function g(j){e(this,g);
this.$=Bootstrap.jQuery;
this.setUpModalsConfiguration();
this.createModalsFromModalsConfiguration()
}g.prototype.setUpModalsConfiguration=function i(){this.modalsConfiguration=window.modalsConfiguration||{}
};
g.prototype.createModalsFromModalsConfiguration=function h(){this.modals={};
if(this.modalsConfiguration.modals){for(var j in this.modalsConfiguration.modals){this.modals[j]=new a.ModalTrigger(this.modalsConfiguration.modals[j])
}}};
return g
}()
}),(function(d,b,f){b.__esModule=true;
b.ModalTrigger=undefined;
var c=f(38);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var a=b.ModalTrigger=function(){function v(y){e(this,v);
this.$=Bootstrap.jQuery;
this.options={triggersSelector:'a[href]:not([href^="#"]):not(.login-link):not(.except-gm)',triggerOn:"click",logoutOnAction:false,authorizedOnly:false,anonymousOnly:false,enabled:false,wildcardSymbol:"*"};
this.settings=this.$.extend({},this.options,y);
if(!this.isEnabled()){return
}this.chooseTrigger()
}v.prototype.isEnabled=function w(){return !!this.settings.enabled
};
v.prototype.prepareModal=function s(){this.genericModal=new c.GenericModal({modalUrl:this.settings.modalUrl,showOnce:this.settings.showOnce,logoutOnAction:this.settings.logoutOnAction,authorizedOnly:this.settings.authorizedOnly,anonymousOnly:this.settings.anonymousOnly,openImmediate:this.isOnLoadTrigger(),originalPath:this.fetchPageUrl()})
};
v.prototype.hasWhitelist=function h(){return this.settings.whitelist&&!!this.settings.whitelist.length
};
v.prototype.hasBlacklist=function p(){return this.settings.blacklist&&!!this.settings.blacklist.length
};
v.prototype.onWhitelistMatch=function m(y,A,z){A=A||function(){};
if(!~this.isOnWhitelist(y)){if(z){z.preventDefault()
}A(y)
}};
v.prototype.isOnWhitelist=function k(A){var B=this;
if(!this.hasWhitelist()){return false
}var z=false,y=this.cleanUpPath(A);
if(this.hasWildcardOnWhitelist(y)){this.settings.whitelist.forEach(function(E){var D=B.buildWildcardRegexp(B.cleanUpPath(E)),C=y.match(D)||[];
if(C[0]===y&&!z){z=true
}});
return z
}else{return !!~this.settings.whitelist.indexOf(y)
}};
v.prototype.hasWildcardOnWhitelist=function q(){var y=false,z=this.settings.wildcardSymbol;
this.settings.whitelist.forEach(function(A){if(!!~A.indexOf(z)&&!y){y=true
}});
return y
};
v.prototype.buildWildcardRegexp=function n(z){z=z||"";
var y=new RegExp("\\"+this.settings.wildcardSymbol,"g");
return new RegExp(z.replace(y,".*"),"g")
};
v.prototype.onBlacklistMatch=function g(z,C,B){var A=this;
C=C||function(){};
var y=false;
this.settings.blacklist.forEach(function(D){if(!!~A.cleanUpPath(z).indexOf(D)&&!A.isOnWhitelist(z)&&!y){if(B){B.preventDefault()
}y=true;
C(z);
return
}})
};
v.prototype.observeTriggers=function t(){var y=this;
this.prepareModal();
this.$(document).on("click",this.settings.triggersSelector,function(B){var z=y.$(B.target),A=void 0;
if(y.genericModal.isAuthorizedOnly()&&!y.genericModal.isLoggedIn()||y.genericModal.isAnonymousOnly()&&y.genericModal.isLoggedIn()){return
}if(!z.attr("href")&&!z.data("href")){z=z.parents("[href]");
if(!z.length){z=z.parents("[data-href]")
}}A=z.attr("href")||z.data("href");
y.directTrigger(A,y.genericModal.open.bind(y.genericModal),B)
})
};
v.prototype.onLoad=function j(){var y=this;
this.$(document).ready(function(){y.directTrigger(y.fetchPageUrl(),y.prepareModal.bind(y))
})
};
v.prototype.fetchPageUrl=function u(){return this.$('link[rel="canonical"]').attr("href")||this.$('meta[property="og:url"]').attr("content")
};
v.prototype.directTrigger=function i(y,A,z){if(!y){return
}if(this.hasWhitelist()&&!this.hasBlacklist()){this.onWhitelistMatch(y,A,z)
}if(this.hasBlacklist()){this.onBlacklistMatch(y,A,z)
}};
v.prototype.chooseTrigger=function o(){if(!this.settings.triggerOn){return
}if(this.isClickTrigger()){this.observeTriggers()
}else{if(this.isOnLoadTrigger()){this.onLoad()
}}};
v.prototype.isOnLoadTrigger=function l(){return this.settings.triggerOn==="load"
};
v.prototype.isClickTrigger=function r(){return this.settings.triggerOn==="click"
};
v.prototype.cleanUpPath=function x(y){y=y||"";
return y.split("#")[0].split("?")[0]
};
return v
}()
}),(function(d,b,g){b.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var h={resultTemplate:"resultTemplate"},a={result:".result",template:".result-template"},e=Bootstrap.jQuery;
var c=b.ProductDynamicRatesRenderer=function(){function i(m){f(this,i);
this.$scope=m;
this.$result=e(a.result,m);
e.Mustache.add(this.getMustacheName(h.resultTemplate),e(a.template,m).html())
}i.prototype.render=function k(m){this.empty();
this.$result.mustache(this.getMustacheName(h.resultTemplate),m)
};
i.prototype.empty=function l(){this.$result.empty()
};
i.prototype.getMustacheName=function j(m){return m+"_"+this.$scope.uniqueId().attr("id")
};
return i
}()
}),(function(d,a,g){a.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var e=Bootstrap.jQuery,b=HSBC_utils.keyCodes,c={focusables:HSBC_utils.focusables.join(),tile:".tile",slidesNotCloned:".M-CAR3-RW-RBWM:not(.clone), .M-CARVID-RW-RBWM:not(.clone)"};
var h=a.CarouselAlly=function(){function n(o){f(this,n);
this.$el=o.$el;
this.context=o;
this.$prevButtonHiddenText=this.$el.find(".prev .visuallyhidden");
this.$nextButtonHiddenText=this.$el.find(".next .visuallyhidden");
this.initAccessibilityTexts();
this.setTabIndexes();
this.bindUIEvents()
}n.prototype.initAccessibilityTexts=function l(){this.accessibilityTexts={prevButton:this.$prevButtonHiddenText.text(),nextButton:this.$nextButtonHiddenText.text()}
};
n.prototype.bindUIEvents=function k(){var p=this;
var o=this.context;
e(window).on("resize",function(){p.setAccessibilityTexts();
p.setTabIndexes()
});
this.$el.on("keydown",function(r){var q=r.keyCode;
if(q===b.LEFT){o.swipe(1,null)
}else{if(q===b.RIGHT){o.swipe(-1,null)
}}})
};
n.prototype.setAccessibilityTexts=function m(){var p=this.context,r=p.getCurrentSlide()+1,q=this.accessibilityTexts.prevButton.replace("{current}",r).replace("{last}",p.meatballsNr),o=this.accessibilityTexts.nextButton.replace("{current}",r).replace("{last}",p.meatballsNr);
this.$prevButtonHiddenText.text(q);
this.$nextButtonHiddenText.text(o)
};
n.prototype.setTabIndexes=function j(){var o=this.context,z=c.focusables,v=o.$slidesContainer.find(z);
if(!o.tileData.length){return
}v.attr("tabindex",-1);
if(HSBC_utils.matchMedia.desktop){var w=o.$slidesContainer.find(c.slidesNotCloned),u=w.eq(o.getCurrentSlide()),p=u.find(z);
p.attr("tabindex",0)
}else{var y=o.$slidesContainer.find(c.tile),r=o.tileData[o.currentTile].tilesInSlide,s=o.currentTile+r;
for(var t=o.currentTile;
t<s;
t++){var q=y.eq(t+o.getAdditionalTranslation()),x=q.find(z);
x.attr("tabindex",0)
}}};
n.prototype.setFocus=function i(){var p=this.context;
var r=void 0;
if(HSBC_utils.matchMedia.desktop){var q=p.$slidesContainer.find(c.slidesNotCloned),t=p.getCurrentSlide();
r=q.eq(t)
}else{var s=p.$slidesContainer.find(c.tile),o=p.currentTile+p.getAdditionalTranslation();
r=s.eq(o)
}r.find(c.focusables).first().focus()
};
return n
}()
}),(function(d,b,f){b.__esModule=true;
function e(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var a={iconTickText:"data-accessibility-tick-icon-text",iconCrossText:"data-accessibility-cross-icon-text"},c={iconTick:".icon-agree",iconCross:".icon-delete",tableWrapper:".table-wrapper",visuallyhidden:".visuallyhidden"};
var g=b.TablesAlly=function(){function i(j){e(this,i);
this.$el=j.$el||($||jQuery).call();
this.$iconTick=this.$el.find(c.iconTick);
this.$iconCross=this.$el.find(c.iconCross);
this.$tableWrapper=this.$el.find(c.tableWrapper);
this.context=j;
this.setTablesIconCrossAndTickTexts()
}i.prototype.setTablesIconCrossAndTickTexts=function h(){this.iconsTexts={tick:this.$tableWrapper.attr(a.iconTickText),cross:this.$tableWrapper.attr(a.iconCrossText)};
this.$iconTick.find(c.visuallyhidden).html(this.iconsTexts.tick);
this.$iconCross.find(c.visuallyhidden).html(this.iconsTexts.cross)
};
return i
}()
}),(function(c,e,b){e.__esModule=true;
var h=b(5);
var a=j(h);
function j(k){return k&&k.__esModule?k:{"default":k}
}function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}var i={introSection:".intro-section"},d={hasHeroNoImage:"hero-no-image"};
var g=function(){function l(m){f(this,l);
this.$el=(0,a["default"])(m);
this.$introSection=this.$el.parents(i.introSection);
this.updateIntroSection()
}l.prototype.updateIntroSection=function k(){this.$introSection.addClass(d.hasHeroNoImage)
};
return l
}();
e["default"]=g
}),(function(b,a){b.exports=false
}),(function(b,a){b.exports=function(c){try{return !!c()
}catch(d){return true
}}
}),(function(d,c,f){var b=f(20);
var a=f(3).document;
var e=b(a)&&b(a.createElement);
d.exports=function(g){return e?a.createElement(g):{}
}
}),(function(e,f,d){var b=d(3);
var g=d(9);
var j=d(13);
var i=d(22)("src");
var k="toString";
var h=Function[k];
var a=(""+h).split(k);
d(4).inspectSource=function(l){return h.call(l)
};
(e.exports=function(n,l,p,m){var o=typeof p=="function";
if(o){j(p,"name")||g(p,"name",l)
}if(n[l]===p){return
}if(o){j(p,i)||g(p,i,n[l]?""+n[l]:a.join(String(l)))
}if(n===b){n[l]=p
}else{if(!m){delete n[l];
g(n,l,p)
}else{if(n[l]){n[l]=p
}else{g(n,l,p)
}}}})(Function.prototype,k,function c(){return typeof this=="function"&&this[i]||h.call(this)
})
}),(function(c,b,d){var a=d(96);
c.exports=function(e,g,f){a(e);
if(g===undefined){return e
}switch(f){case 1:return function(h){return e.call(g,h)
};
case 2:return function(i,h){return e.call(g,i,h)
};
case 3:return function(i,h,j){return e.call(g,i,h,j)
}
}return function(){return e.apply(g,arguments)
}
}
}),(function(c,b,f){var a=f(100);
var e=f(54);
c.exports=Object.keys||function d(g){return a(g,e)
}
}),(function(b,a){var c={}.toString;
b.exports=function(d){return c.call(d).slice(8,-1)
}
}),(function(d,b,e){var a=e(17);
var c=Math.min;
d.exports=function(f){return f>0?c(a(f),9007199254740991):0
}
}),(function(d,c,g){var a=g(4);
var e=g(3);
var f="__core-js_shared__";
var b=e[f]||(e[f]={});
(d.exports=function(h,i){return b[h]||(b[h]=i!==undefined?i:{})
})("versions",[]).push({version:a.version,mode:g(45)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})
}),(function(b,a){b.exports=("constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf").split(",")
}),(function(c,a,f){var d=f(10).f;
var b=f(13);
var e=f(0)("toStringTag");
c.exports=function(i,g,h){if(i&&!b(i=h?i:i.prototype,e)){d(i,e,{configurable:true,value:g})
}}
}),(function(b,a,c){var d=c(18);
b.exports=function(e){return Object(d(e))
}
}),(function(b,a,e){a.__esModule=true;
function d(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var c=jQuery;
var f=a.QueryStringState=function(){function j(n,m,l){var o=this;
d(this,j);
this.paramConfig=this.objectToKeyValuePairs(n);
this.pageNameBuilder=m||function(p,q){return p+": "+q
};
this.changePageStateHandler=l?[l]:[];
this.currentState=this.readAllParams();
c(window).on("popstate",function(p){o.currentState=o.readAllParams();
o.changePageStateHandler.forEach(function(q){return q(c.extend({},o.currentState))
})
})
}j.prototype.readAllParams=function k(){var l=this;
return this.paramConfig.map(function(m){return[m[0],l.parseParameter(m[1])]
}).reduce(function(n,m){n[m[0]]=m[1];
return n
},{})
};
j.prototype.parseParameter=function i(m){var l=HSBC_utils.getUrlParam(m,location.search);
if(l){return l.replace("+"," ")
}else{return null
}};
j.prototype.updateParameter=function g(l,m){if(history&&history.pushState){history.pushState("",this.pageNameBuilder(l,m),c.query.set(l,m));
this.currentState=this.readAllParams()
}};
j.prototype.objectToKeyValuePairs=function h(l){return Object.keys(l).map(function(m){return[m,l[m]]
})
};
return j
}()
}),(function(b,d,a){d.__esModule=true;
d.SearchField=undefined;
var i=a(59);
function g(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var c={queryParamName:"q",moduleName:"heroSearch",moduleSelector:".O-HEROBANWSRCH-RW-DEV",searchQuery:"SEARCH_QUERY",empty:""},k={form:"form",searchInput:'input[type="search"]',tagsInput:'input[type="hidden"]',dataConfig:".O-SRCHRES-RW-RBWM [data-config]"},h={config:"config"},j=168,f=Bootstrap.jQuery;
var e=d.SearchField=function(){function m(u,w,t){var v=this;
g(this,m);
this.$el=f(u);
this.config=f(k.dataConfig).data(h.config);
this.$searchInput=this.$el.find(k.searchInput);
this.$tagsInput=this.$el.find(k.tagsInput);
this.$form=this.$el.find(k.form);
this.onSubmit=w;
this.setInputMaxLength();
this.disableAutocomplete();
this.suggestions=new i.SearchFieldSuggestions(this.$el,this.config);
this.$el.find("form").on("submit",function(x){x.preventDefault();
v.handleSubmit()
});
this.setSearchField(t);
this.trigger="free text"
}m.prototype.setInputMaxLength=function q(){this.$searchInput.attr("maxlength",j)
};
m.prototype.disableAutocomplete=function r(){this.$searchInput.attr("autocomplete","off")
};
m.prototype.handleSubmit=function l(){var t=this.$searchInput.val(),u=this.validateEmpty(t);
if(!u){this.setSearchField(c.empty)
}else{this.onSubmit(t)
}};
m.prototype.setSearchField=function p(t){this.$searchInput.val(t);
this.$searchInput.attr("aria-controls","search-results-container")
};
m.prototype.setTrigger=function n(t){this.trigger=t
};
m.prototype.updateTags=function s(t){this.$tagsInput.val(t)
};
m.prototype.validateEmpty=function o(t){t=t||"";
return !!t.trim().length
};
return m
}()
}),(function(b,d,a){d.__esModule=true;
d.SearchFieldSuggestions=undefined;
var h=a(14);
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var k={searchContainer:".search-panel",suggestions:".search-suggestions",suggestionList:".suggestion-list",searchField:".search-form .input",suggestionItem:".suggestion-item",helper:".search-suggestions-helper",suggestionsTotal:".suggestions-total"},c={hidden:"hidden",suggestionItem:"suggestion-item"},g={globalSettings:"global-settings"},j="search-suggestion-template",e=Bootstrap.jQuery;
var i=d.SearchFieldSuggestions=function(){function v(y,x){f(this,v);
this.$el=y;
this.config=x;
this.setUpGlobalSettings();
this.$suggestions=this.$el.find(k.suggestions);
this.$suggestionList=this.$suggestions.find(k.suggestionList);
this.$searchField=this.$el.find(k.searchField);
this.$suggestionsTotal=this.$el.find(k.suggestionsTotal);
this.$helper=this.$el.find(k.helper);
this.searchService=new h.SearchService(this.config);
this.results=[];
this.setMustacheTemplates();
this.bindUIEvents()
}v.prototype.bindUIEvents=function l(){var x=this;
this.$searchField.on("input",function(){return x.resolveSuggestions()
});
e(window).on("click",function(z){var y=e(z.target);
if(!y.parents(k.searchContainer).length){x.removeSuggestions()
}})
};
v.prototype.resolveSuggestions=function s(){var x=this;
this.searchService.getSuggestions({query:this.$searchField.val()}).done(function(y){x.results=y||[];
if(x.results.length){x.showSuggestions()
}else{x.$helper.empty().html(0);
x.hideSuggestions()
}})
};
v.prototype.setUpGlobalSettings=function w(){this.globalSettings=e(document.body).data(g.globalSettings)
};
v.prototype.fetchTotalSuggestionsAllyText=function t(){return this.globalSettings&&this.globalSettings.totalSuggestions?this.globalSettings.totalSuggestions:""
};
v.prototype.showSuggestions=function u(){this.$suggestions.removeClass(c.hidden);
this.$helper.empty().html(this.results.length);
this.render()
};
v.prototype.render=function m(){var x=this;
this.$suggestionList.empty();
this.results.forEach(function(y){return x.$suggestionList.mustache(j,{text:y})
});
this.$suggestionsTotal.html(this.results.length+" "+this.fetchTotalSuggestionsAllyText());
this.$suggestionItems=this.$suggestionList.find(k.suggestionItem);
this.bindSuggestionsUIEvents()
};
v.prototype.bindSuggestionsUIEvents=function r(){var x=this;
this.$suggestionItems.on("click",function(y){return x.handleSuggestionChoice(e(y.target))
}).on("focusout",function(z){var y=e(z.relatedTarget);
if(!y.hasClass(c.suggestionItem)){x.hideSuggestions()
}})
};
v.prototype.handleSuggestionChoice=function o(x){var y=x.text();
this.hideSuggestions();
this.$searchField.val(y)
};
v.prototype.hideSuggestions=function q(){this.removeSuggestions();
this.$searchField.focus()
};
v.prototype.removeSuggestions=function n(){this.$suggestions.addClass(c.hidden)
};
v.prototype.setMustacheTemplates=function p(){e.Mustache.add(j,this.$el.find("."+j).html())
};
return v
}()
}),(function(c,a,g){a.__esModule=true;
function f(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var b=HSBC_utils.keyCodes,d=Bootstrap.jQuery;
var e=a.SmartTabsAlly=function(){function j(u){f(this,j);
this.$el=u.$el;
this.context=u;
this.ariaSelectedfirstchild()
}j.prototype.bindUIEvents=function i(){var v=this;
this.context.$tabsMenuItem.find("a").on({keydown:function u(w){v.catchDataTarget(w);
v.keyboardNavigationMenu(w)
}});
this.context.$tabsContainer.on({keydown:function u(w){v.keyboardNavigationContainer(w)
}});
this.context.$tabsContent.on({keydown:function u(w){v.keyboardNavigationContent(w)
}})
};
j.prototype.changeAriaSelectState=function s(w){var v=d(w.target),u=v.hasClass("is-active");
this.context.$tabsMenuLink.attr("aria-selected",false);
v.attr("aria-selected",!u)
};
j.prototype.changeAriaHiddenTabindexState=function t(w){var u=d(w.target),v=u.attr("data-target");
this.context.$tabsContent.attr({"aria-hidden":true});
d(v).attr({"aria-hidden":false})
};
j.prototype.ariaSelectedfirstchild=function k(){this.context.$tabsMenuItem.first().find("a").attr("aria-selected",true)
};
j.prototype.goBackToTabMenuFromLastChild=function h(x){var v=d(x.target),w=v.closest(this.context.$tabsContent).attr("id"),u=v.closest(this.context.$tabsContent).find(HSBC_utils.focusables.join()),y=u.first().is(":focus");
if(y){this.context.$tabsContainer.attr("tabindex",-1);
d('[data-target="#'+w+'"]').focus();
x.preventDefault()
}};
j.prototype.focusTabPanel=function r(){this.context.$tabsContainer.attr("tabindex",0);
this.context.$tabsContainer.focus()
};
j.prototype.goBackToSelectedTab=function m(w){var u=d(w.target),v=u.find(this.context.$tabsContent).not(".hidden").attr("id");
d('[data-target="#'+v+'"]').focus();
w.preventDefault()
};
j.prototype.goBackToSelectedTabFromFirstChild=function p(x){var u=d(x.target),v=u.find(this.context.$tabsContent).not(".hidden").attr("id"),w=u.closest(this.context.$tabsContent).find(HSBC_utils.focusables.join());
if(w.length<1){x.preventDefault()
}this.context.$tabsContainer.attr("tabindex",-1);
d('[data-target="#'+v+'"]').focus()
};
j.prototype.keyboardNavigationMenu=function n(w){var x=w.keyCode,v=x===b.ENTER,u=x===b.SPACE;
if(v||u){this.changeAriaSelectState(w);
this.changeAriaHiddenTabindexState(w);
this.focusTabPanel();
w.preventDefault()
}};
j.prototype.keyboardNavigationContent=function l(x){var z=x.keyCode,w=x.shiftKey,v=z===b.ESC,y=z===b.TAB,u=y&&w;
if(u){this.goBackToTabMenuFromLastChild(x)
}if(v){this.goBackToSelectedTab(x)
}};
j.prototype.keyboardNavigationContainer=function o(w){var y=w.keyCode,v=w.shiftKey,x=y===b.TAB,u=x&&v;
if(u){this.goBackToSelectedTabFromFirstChild(w)
}};
j.prototype.catchDataTarget=function q(y){var w=d(y.target),z=w.attr("data-target"),x=y.keyCode,v=x===b.SPACE,u=x===b.ENTER;
if(u||v){this.context.hashChange(z);
this.changeAriaSelectState(y);
y.preventDefault()
}};
return j
}()
}),(function(e,b,h){b.__esModule=true;
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var f=Bootstrap.jQuery,d={expanded:"expanded",wrapper:"A-WRAPPER-RW-ALL",notWrapper:"no-wrapper",brandBar:"O-BRBAR-RW-RBWM"},c={wrapperDropdown:".wrapper-dropdown",expanderHeading:".dropdown-text"};
var a=b.ExpanderAlly=function(){function k(q){g(this,k);
this.$el=q.$el;
this.$selectBar=q.$selectBar;
this.$collapsibleEl=q.$collapsibleEl;
this.$focusableNodes=q.$focusableNodes;
this.isExpandedByDefault=q.isExpandedByDefault;
this.isExpanded=q.isExpandedByDefault;
this.isWrapper=q.isWrapper;
this.context=q;
this.bindUiEvents()
}k.prototype.bindUiEvents=function n(){var q=this;
f(window).on("resize",function(){return q.updateModulesAccessibility()
})
};
k.prototype.setTabIndexes=function m(q){if(q){this.$focusableNodes.removeAttr("tabindex")
}};
k.prototype.setAccessibilityAttributes=function j(r){var q=r?0:-1;
this.$collapsibleEl.attr({tabindex:q,"aria-hidden":!r});
this.setTabIndexes(r);
this.updateModulesAccessibility(r)
};
k.prototype.removeScreenReaderText=function p(){if(!HSBC_utils.matchMedia.mobile){var q=f(c.wrapperDropdown),r=q.eq(0);
r.find(".visuallyhidden").text("")
}};
k.prototype.updateModulesAccessibility=function o(q){if(this.isWrapper){this.updateWrapperAccessibility()
}else{this.updateExpanderAccessibility(q)
}};
k.prototype.updateExpanderAccessibility=function i(q){if(!HSBC_utils.matchMedia.mobile){this.$selectBar.attr("tabindex",0);
this.setTabIndexes(true)
}else{this.setTabIndexes(this.isExpanded)
}this.$selectBar.attr("aria-expanded",q)
};
k.prototype.updateWrapperAccessibility=function l(){if(!HSBC_utils.matchMedia.mobile||this.$collapsibleEl.hasClass(d.notWrapper)){this.$selectBar.removeAttr("tabindex");
this.$collapsibleEl.removeAttr("tabindex");
if(this.$collapsibleEl.parents().eq(2).hasClass(d.brandBar)){this.$collapsibleEl.attr({"aria-hidden":false})
}}else{this.$selectBar.attr("tabindex",0);
this.$collapsibleEl.attr("tabindex",0);
if(this.$collapsibleEl.parents().eq(2).hasClass(d.brandBar)){this.$collapsibleEl.attr({"aria-hidden":!(this.$selectBar.attr("aria-expanded")==="true")})
}if(!this.isExpanded){this.setTabIndexes(!this.isExpanded)
}}};
return k
}()
}),(function(e,a,h){a.__esModule=true;
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var d={customSelectContainerClass:"custom-select-container",customSelectMenuItemClass:"custom-select-menu-item",customSelectButtonClass:"custom-select-button"},b=HSBC_utils.keyCodes,f=Bootstrap.jQuery;
var c=a.CustomSelectAlly=function(){function j(k){g(this,j);
this.$el=k.$el;
this.context=k;
this.keyboardEvents()
}j.prototype.keyboardEvents=function i(){var r=this;
var m=this.$el,p=this.$el.not(".disabled, .error").closest("."+d.customSelectContainerClass),l=p.find("."+d.customSelectButtonClass),n=p.find("."+d.customSelectMenuItemClass);
m.on({change:function q(){return r.context.updateSelectValue()
},keyup:function o(){r.context.updateSelectValue()
}});
l.on({keydown:function k(s){if(s.keyCode===b.SPACE||s.keyCode===b.ENTER){r.context.toggleCustomSelectMenu()
}else{if(s.keyCode===b.UP||s.keyCode===b.LEFT){s.preventDefault();
r.context.focusSelectMenuItem("prev")
}else{if(s.keyCode===b.DOWN||s.keyCode===b.RIGHT){s.preventDefault();
r.context.focusSelectMenuItem("next")
}else{if(s.keyCode===b.ESC){if(r.context.isOpen){r.context.toggleCustomSelectMenu()
}}else{if(l.is(":focus")&&s.keyCode===b.TAB&&s.shiftKey){if(r.context.isOpen){r.context.toggleCustomSelectMenu()
}}}}}}}});
n.on({keydown:function k(s){if(s.keyCode===b.SPACE||s.keyCode===b.ENTER){r.context.updateSelectValue(s.target);
if(r.context.isOpen){r.context.toggleCustomSelectMenu()
}}else{if(s.keyCode===b.UP||s.keyCode===b.LEFT){r.context.focusSelectMenuItem("prev")
}else{if(s.keyCode===b.DOWN||s.keyCode===b.RIGHT){r.context.focusSelectMenuItem("next")
}else{if(s.keyCode===b.ESC){if(r.context.isOpen){r.context.toggleCustomSelectMenu()
}}else{if(n.last().is(":focus")&&s.keyCode===b.TAB&&!s.shiftKey){if(r.context.isOpen){r.context.toggleCustomSelectMenu()
}}}}}}}})
};
return j
}()
}),(function(d,a,g){a.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var b=HSBC_utils.keyCodes,e=Bootstrap.jQuery,c={hide:"hidden",modalAnnouncement:"modal-announcement-sr-text"};
var h=a.ModalAlly=function(){function k(l){f(this,k);
this.$el=l.$el;
this.context=l
}k.prototype.bindUIEvents=function i(){var m=this;
var l=this.context;
this.$focusables=l.$modal.find(HSBC_utils.focusables.join());
l.$modal.on("keydown",function(q){var s=e(document.activeElement),p=q.keyCode,o=p===b.ESC&&l.$modal.hasClass(c.isVisible),n=p===b.ENTER&&s.hasClass(c.closeTrigger),r=p===b.TAB;
if(o||n){q.preventDefault();
l.close()
}else{if(r){m.handleKeyPress(q)
}}})
};
k.prototype.handleKeyPress=function j(o){var l=this.context,q=document.activeElement,p=this.$focusables.first()[0],n=this.$focusables.last()[0],m=l.$modal.find("."+c.modalAnnouncement);
m.addClass(c.hide);
if(q==n&&!o.shiftKey){p.focus();
o.preventDefault()
}else{if(q==p&&o.shiftKey){n.focus();
o.preventDefault()
}}};
return k
}()
}),(function(b,d,a){d.__esModule=true;
function e(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var i={headerMainMenu:".header-main-navigation",headerMainMenuTitle:".header-doormat-mobile-title",screenreaderText:".screenreader-text",doormatExpanded:".doormat-expanded",doormatCollapsed:".doormat-collapsed",navigationItem:".header-main-navigation-item"},c={active:"active",hidden:"hidden"},g=HSBC_utils.keyCodes,f=Bootstrap.jQuery;
var h=d.DoormatAlly=function(){function j(l){e(this,j);
this.$el=l.$el;
this.$navigationItem=l.$navigationItem;
this.context=l;
l.$allDoormatLinks.attr("tabindex",-1);
this.bindUIEvents()
}j.prototype.bindUIEvents=function k(){var r=this;
var n=this.context,m=this.$navigationItem.find("a"),l=m.first(),o=m.last(),p=this.$navigationItem.find(i.screenreaderText),q=this.$el.find("a");
this.$el.on("mouseout",function(){return p.removeClass(c.hidden)
});
this.$navigationItem.on("keydown",function(v){var s=f(v.target),u=v.keyCode,w=n.$doormatCollapsed.text(),t=s.prop("tagName");
if(u===g.ENTER||u===g.SPACE){if(!n.isEnterHandlerEnabled){n.isEnterHandlerEnabled=true;
n.isInMenu=true;
if(!s.hasClass(c.active)){r.$el.addClass(c.active);
r.$navigationItem.addClass(c.active)
}n.toggleMenuStatusText();
r.$el.attr("aria-hidden",false);
q.attr("tabindex",0);
q.first().focus();
v.preventDefault()
}else{n.removeActiveClassState(q);
p.addClass(c.hidden);
s.attr("aria-label",w).removeAttr("aria-label")
}}else{if(u===g.TAB&&t==="LI"){n.removeActiveClass();
n.toggleMenuStatusText();
p.removeClass(c.hidden);
n.isEnterHandlerEnabled=false
}}}).on("focus",function(u){var s=f(u.target),t=s.find(i.headerMainMenuTitle);
if(n.getFocusCondition()){t.attr("aria-hidden",false);
q.attr("tabindex",-1);
n.toggleMenuStatusText()
}}).on("focusout",function(u){var s=f(u.target),t=s.find(i.headerMainMenuTitle);
if(n.getFocusCondition()){t.attr("aria-hidden",true);
q.attr("tabindex",-1);
p.removeClass(c.hidden)
}});
q.on("keydown",function(t){var s=t.keyCode;
if(s===g.ESC){n.isInMenu=false;
p.addClass(c.hidden);
q.attr("tabindex",-1);
r.$navigationItem.focus();
t.preventDefault()
}});
l.on("keydown",function(u){var s=u.keyCode,t=u.shiftKey;
if(t&&s===g.TAB){n.isInMenu=false;
p.addClass(c.hidden);
q.attr("tabindex",-1);
r.$el.attr("aria-hidden",true);
r.$navigationItem.focus();
u.preventDefault()
}});
o.on("keydown",function(u){var s=u.keyCode,t=u.shiftKey;
if(!t&&s===g.TAB){n.removeActiveClassState(q);
p.removeClass(c.hidden)
}})
};
return j
}()
}),(function(c,a,e){a.__esModule=true;
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}var b=a.MessageIdManager=function(){function g(m,k){d(this,g);
this.storage=m;
this.key=k;
if(this.storage){var l=m.getItem(k);
this.ids=l?JSON.parse(l):[]
}else{this.ids=[]
}}g.prototype.has=function f(k){return this.ids.includes(k)
};
g.prototype.add=function i(k){this.ids.push(k);
this.save()
};
g.prototype.updateAll=function j(k){this.ids=k;
this.save()
};
g.prototype.save=function h(){if(this.storage){if(this.ids.length){this.storage.setItem(this.key,JSON.stringify(this.ids))
}else{this.storage.removeItem(this.key)
}}};
return g
}()
}),(function(d,a,h){a.__esModule=true;
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var b=HSBC_utils.keyCodes,f=Bootstrap.jQuery,c={hide:"hidden",modalAnnouncement:"modal-announcement-sr-text",isVisible:"is-visible",cancelTrigger:"mw-cancel-trigger"};
var e=a.ModalWindowAlly=function(){function j(l){g(this,j);
this.$el=l.$el;
this.context=l
}j.prototype.bindUIEvents=function i(){var n,o=this;
var m=this.context,l=m.$modal.find(c.cancelTrigger);
this.$focusables=(n=this.context.$modal).find.apply(n,HSBC_utils.focusables);
l.on("click",function(){o.$focusables.first()[0].focus()
});
m.$modal.on("keydown",function(s){var u=f(document.activeElement),r=s.keyCode,q=r===b.ESC&&m.$modal.hasClass(c.isVisible),p=r===b.ENTER&&u.hasClass(c.cancelTrigger),t=r===b.TAB;
if(q||p){s.preventDefault();
m.close()
}else{if(t){o.handleKeyPress(s)
}}})
};
j.prototype.handleKeyPress=function k(o){var l=this.context,q=document.activeElement,p=this.$focusables.first()[0],n=this.$focusables.last()[0],m=l.$modal.find("."+c.modalAnnouncement);
m.addClass(c.hide);
if(q==n&&!o.shiftKey){p.focus();
o.preventDefault()
}else{if(q==p&&o.shiftKey){n.focus();
o.preventDefault()
}}};
return j
}()
}),(function(b,a,c){c(29);
c(69);
c(30);
c(7);
c(8);
c(71);
c(34);
c(73);
c(74);
c(35);
c(36);
c(37);
c(38);
c(39);
c(40);
c(75);
c(76);
c(77);
c(41);
c(78);
c(79);
c(42);
c(80);
c(81);
c(82);
c(83);
c(44);
c(84);
c(85);
c(86);
c(87);
c(88);
c(89);
c(113);
c(114);
c(119);
c(120);
c(121);
c(57);
c(58);
c(59);
c(122);
c(14);
c(123);
c(124);
c(60);
c(1);
c(125);
c(126);
c(128);
c(129);
c(130);
c(131);
c(61);
c(132);
c(62);
c(133);
c(63);
c(26);
c(134);
c(136);
c(138);
c(139);
c(140);
c(141);
c(64);
c(142);
c(143);
c(144);
c(147);
c(148);
c(149);
c(28);
c(151);
c(153);
c(27);
c(65);
c(155);
c(156);
c(66);
c(157);
c(158);
c(159);
b.exports=c(160)
}),(function(b,a){b.exports={amount:[5000,210000,430000,640000,860000,1000000,1200000,1500000,1700000,1900000,2100000,2300000,2500000,2700000,3000000]}
}),(function(c,f,b){var d=b(30);
var h=b(29);
var e=b(15);
var i=b(16);
var j=b(31);
var a=b(32);
function g(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}(function(n){var r={configHolder:".config-holder",headingLeft:".heading-left",headingRight:".heading-right",results:".placeholder-right",calculationInputs:".placeholder-left",sliderHandle:".ui-slider-handle",inputFields:".input",promoCode:".promocode-wrapper",promoCodeMessageError:".promoCode-message-error"},o={config:"config",rules:"rules",defaultAmount:"default-amount",defaultMonths:"default-months",amountPrefix:"amount-prefix",percentSufix:"percent-sufix"},p={beforeunload:"beforeunload",fieldUpdated:"fieldUpdated"},k={endpointURL:"/bin/public/gpws/calculation",amount:"amount",months:"months",auto:"auto"},m={hide:"hide"};
var q=function(){function B(E){g(this,B);
this.$el=n(E);
this.cacheDOMElements();
this.cleanInputs();
this.initSettings();
this.initObjects();
this.calculate();
this.setEqualHeadingsHeight();
this.bindUIEvents();
this.currencyFormatter=new a.CurrencyFormatter(this.$el);
this.currencyFormatter.addPrefixSpacing()
}B.prototype.cacheDOMElements=function w(){this.$headingLeft=this.$el.find(r.headingLeft);
this.$headingRight=this.$el.find(r.headingRight);
this.$results=this.$el.find(r.results);
this.$calculationInputs=this.$el.find(r.calculationInputs);
this.$sliderHandle=this.$el.find(r.sliderHandle);
this.$inputFields=this.$el.find(r.inputFields);
this.$promoCodeWrapper=this.$el.find(r.promoCode);
this.$promoCode=this.$promoCodeWrapper.find(r.inputFields);
this.$promoCodeErrorMessage=this.$promoCodeWrapper.find(r.promoCodeMessageError)
};
B.prototype.cleanInputs=function u(){this.$inputFields.val("")
};
B.prototype.initSettings=function A(){var F=this.$el.find(r.configHolder),G=F.data(o.defaultMonths),E=F.data(o.defaultAmount);
this.rules=F.data(o.rules);
this.config={defaultMonths:G,defaultAmount:E};
this.amountPrefix=F.data(o.amountPrefix)||"";
this.percentSufix=F.data(o.percentSufix)||"";
this.dataKeeper=new i.DataKeeper();
this.state=this.dataKeeper.read();
n.extend(this.config,{defaultAmount:this.state.amount||E,defaultMonths:this.state.months||G});
n.extend(this.state,{amount:this.state.amount||E,months:this.state.months||G})
};
B.prototype.initObjects=function C(){this.calculationService=new h.LoanRepaymentCalculationService(this.rules);
this.calculationService.setMonthsRange(this.state.amount);
this.amountField=new e.InputWithSliderField(this.$el,{name:k.amount,value:this.config.defaultAmount,range:this.calculationService.amountRange},this.calculationService.stages.amount);
this.monthsField=new e.InputWithSliderField(this.$el,{name:k.months,value:this.config.defaultMonths,range:this.calculationService.monthsRange,step:1},this.calculationService.getMonthPointStages(this.state.amount));
this.amountField.setAreas(this.calculationService.getAmountStages());
this.monthsField.setAreas(this.calculationService.getMonthStages(this.state.amount));
this.resultRenderer=new j.ResultRenderer(this.$el);
new d.LoanRepaymentCalculatorAlly(this)
};
B.prototype.bindUIEvents=function t(){var E=this;
n(window).on("resize",function(){return E.setEqualHeadingsHeight()
}).on(p.beforeunload,function(){return E.dataKeeper.save(E.state)
});
this.$el.on(p.fieldUpdated,function(G,F){return E.recalculate(F)
});
this.$promoCode.on("input",function(F){return E.handlePromoCodeChange(F)
})
};
B.prototype.handlePromoCodeChange=function z(E){var F=n(E.target).val();
this.calculationService.updateRules(F);
this.$el.trigger("fieldUpdated",{name:"promoCode",value:F});
this.$promoCodeErrorMessage.addClass(m.hide);
if(!this.calculationService.promoCodes.includes(F)){this.$promoCodeErrorMessage.removeClass(m.hide)
}};
B.prototype.calculate=function y(){var E=this.calculationService.getFormattedResult(this.state);
n(document).trigger("LoansCalculator::recalculate",n.extend({},this.state));
n.extend(E,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.displayResult(E);
this.result=E
};
B.prototype.displayResult=function x(E){this.amountField.setIndicatorValue(this.calculationService.getApr(this.state)+this.percentSufix);
this.resultRenderer.render(E)
};
B.prototype.recalculate=function D(E){this.state[E.name]=E.value;
this.calculationService.setMonthsRange(this.state.amount);
this.monthsField.setRange(this.calculationService.monthsRange);
this.amountField.setAreas(this.calculationService.getAmountStages());
this.monthsField.setAreas(this.calculationService.getMonthStages(this.state.amount));
if(this.amountField.validateRange()&&this.monthsField.validateRange()){this.calculate()
}};
B.prototype.setEqualHeadingsHeight=function v(){var F=[this.$headingLeft,this.$headingRight];
F.map(function(H){return H.height(k.auto)
});
if(!HSBC_utils.matchMedia.mobile){if(!HSBC_utils.matchMedia.desktop&&HSBC_utils.matchMedia.tablet){F[0]=F[0].eq(0)
}var G=F.map(function(H){return H.outerHeight()
}),E=Math.max.apply(Math,G);
F.forEach(function(H){return H.outerHeight(E)
})
}};
return B
}();
var l={name:"loanRepaymentCalculator",selector:".O-LNREPCALC-RW-DEV",init:function s(t){return new q(t)
}};
n(window).on("load",function(){return HSBC_utils.registerComponent(l)
})
})(Bootstrap.jQuery)
}),(function(c,b,e){b.__esModule=true;
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}var a=b.InputWithSliderFieldAlly=function(){function g(i){d(this,g);
this.$el=i.$el;
this.$indicator=i.$indicator;
this.$handleInBothSliders=i.$handleInBothSliders;
this.$handleAmount=i.$handleAmount;
this.$handleMonths=i.$handleMonths;
this.labelAmountId=i.labelAmountId;
this.labelMonthsId=i.labelMonthsId;
this.fieldSettings=i.fieldSettings;
this.context=i;
this.setAriaOnPercentageIndicator();
this.setAriaOnSlider()
}g.prototype.setAriaOnPercentageIndicator=function f(){this.$indicator.attr("aria-live","off")
};
g.prototype.setAriaOnSlider=function h(){this.$handleInBothSliders.attr({role:"slider","aria-valuemin":this.fieldSettings.range.min,"aria-valuemax":this.fieldSettings.range.max,"aria-valuenow":this.fieldSettings.value});
this.$handleAmount.attr("aria-labelledby",this.labelAmountId);
this.$handleMonths.attr("aria-labelledby",this.labelMonthsId)
};
return g
}()
}),(function(c,e,b){var d=b(15);
var h=b(33);
var g=b(7);
var a=b(8);
function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function i(k,l){if(!k){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return l&&(typeof l==="object"||typeof l==="function")?l:k
}function j(l,k){if(typeof k!=="function"&&k!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof k)
}l.prototype=Object.create(k&&k.prototype,{constructor:{value:l,enumerable:false,writable:true,configurable:true}});
if(k){Object.setPrototypeOf?Object.setPrototypeOf(l,k):l.__proto__=k
}}(function(l){var n={amount:"amount",months:"months"};
var k=function(t){j(r,t);
function r(){f(this,r);
return i(this,t.apply(this,arguments))
}r.prototype.initCalculationService=function s(){var u=this;
this.calculationService=new a.CalculationService();
this.calculationRules=new g.CalculationRules(this.config.rules);
this.amountField=new d.InputWithSliderField(this.$el,{name:n.amount,value:this.config.defaultAmount,range:this.calculationRules.calculateAmountRange(this.state),step:this.config.amountSliderStep});
this.monthsField=new d.InputWithSliderField(this.$el,{name:n.months,value:this.config.defaultMonths,range:this.calculationRules.calculateMonthsRange(this.state),step:1});
l(document).on("LoansCalculator::reinit",function(){return u.calculate()
})
};
r.prototype.calculate=function p(){var v=Object.assign({apr:this.calculationRules.calculateApr(this.state)},this.state),u=this.calculationService.getCalculationResults(v);
if(!u){return
}Object.assign(u,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.displayResult(u);
this.result=u;
l(document).trigger("LoansCalculator::recalculate",l.extend({},this.state,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix,annually:this.annually}))
};
r.prototype.recalculate=function o(u){this.state[u.name]=u.value;
this.amountField.setRange(this.calculationRules.calculateAmountRange(this.state));
this.monthsField.setRange(this.calculationRules.calculateMonthsRange(this.state));
this.setInputsAreas();
if(this.amountField.validateRange()&&this.monthsField.validateRange()){this.calculate()
}this.amountField.allySlider.setAriaOnSlider();
this.monthsField.allySlider.setAriaOnSlider()
};
r.prototype.displayResult=function q(u){this.amountField.setIndicatorValue(this.calculationRules.calculateApr(this.state)+this.percentSufix);
this.resultRenderer.render(u)
};
return r
}(h.LoansCalculatorBase);
HSBC_utils.registerComponent({name:"loansCalculator",selector:".O-LNSCALC-RW-RBWM",init:function m(o){return new k(o)
}})
})(Bootstrap.jQuery)
}),(function(d,a,h){a.__esModule=true;
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var c={hasError:"hasError"},b=HSBC_utils.keyCodes,f=Bootstrap.jQuery;
var e=a.LoansCalculatorBaseAlly=function(){function l(o){g(this,l);
this.$el=o.$el;
this.context=o;
this.bindUIEvents()
}l.prototype.bindUIEvents=function k(){var o=this;
this.context.$inputFields.on("keydown",function(p){return o.removeAriaLive(p)
}).on("keyup",function(r){var p=r.keyCode,s=p===b.TAB,q=p===b.SHIFT;
if(!(q||s)){o.readResults()
}});
this.context.$sliderHandle.on("keydown",function(p){return o.handleKeyboardNavigation(p)
});
this.$el.on(c.hasError,function(){return o.readErrorMessageOnce()
})
};
l.prototype.removeAriaLive=function m(p){var q=p.keyCode===b.TAB,o=p.shiftKey;
if(f(document.activeElement).is(this.context.$inputFields)){if(q||o){this.context.$calculationInputs.removeAttr("aria-live");
this.context.amountField.$input.removeAttr("aria-live aria-atomic");
if(o){this.context.$results.removeAttr("aria-live")
}if(this.context.monthsField.$input!==undefined){this.context.monthsField.$input.removeAttr("aria-live aria-atomic")
}else{this.context.monthsField.removeAttr("aria-live aria-atomic")
}}}};
l.prototype.handleKeyboardNavigation=function i(r){var p=r.keyCode,s=p===b.TAB,t=p===b.LEFT,o=p===b.RIGHT,q=r.shiftKey;
if(f(document.activeElement).is(this.context.$sliderHandle)){if(t||o){this.context.$results.attr("aria-live","assertive");
this.context.$calculationInputs.attr("aria-live","polite")
}else{if(s||q){this.context.$results.removeAttr("aria-live");
this.context.$calculationInputs.removeAttr("aria-live")
}}}};
l.prototype.readResults=function n(){this.context.$results.attr("aria-live","assertive");
this.context.$calculationInputs.attr("aria-live","polite");
if(this.context.amountField){o(this.context.amountField.$input)
}if(this.context.monthsField){o(this.context.monthsField.$input)
}function o(p){if(f(document.activeElement).is(p)){p.attr({"aria-live":"polite","aria-atomic":"true"})
}}};
l.prototype.readErrorMessageOnce=function j(){this.context.$results.attr("aria-live","assertive");
this.context.$calculationInputs.attr("aria-live","polite")
};
return l
}()
}),(function(b,d,a){var c=a(15);
var g=a(34);
var f=a(33);
function e(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function h(j,k){if(!j){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return k&&(typeof k==="object"||typeof k==="function")?k:j
}function i(k,j){if(typeof j!=="function"&&j!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof j)
}k.prototype=Object.create(j&&j.prototype,{constructor:{value:k,enumerable:false,writable:true,configurable:true}});
if(j){Object.setPrototypeOf?Object.setPrototypeOf(k,j):k.__proto__=j
}}(function(k){var m={amount:"amount",months:"months"};
var j=function(u){i(n,u);
function n(){e(this,n);
return h(this,u.apply(this,arguments))
}n.prototype.initCalculationService=function t(){var v=this;
this.calculationService=new g.CalculationServiceChina();
this.amountField=new c.InputWithSliderField(this.$el,{name:m.amount,value:this.config.defaultAmount,range:this.calculateAmountRange(),step:this.config.amountSliderStep});
this.monthsField=this.$el.find("select[name='"+m.months+"']");
this.monthsField.val(this.config.defaultMonths);
this.monthsField.on("change",function(w){v.$el.trigger("fieldUpdated",{name:m.months,value:k(w.target).val()})
})
};
n.prototype.calculate=function q(){var w=Object.assign({rate:this.calculateRate(this.state)},this.state),v=this.calculationService.getCalculationResults(w);
if(!v){return
}Object.assign(v,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.displayResult(v);
this.result=v
};
n.prototype.recalculate=function o(v){this.state[v.name]=v.value;
this.calculate();
this.amountField.allySlider.setAriaOnSlider()
};
n.prototype.displayResult=function r(v){this.amountField.setIndicatorValue(this.calculateRate(this.state)+this.percentSufix);
this.resultRenderer.render(v)
};
n.prototype.calculateRate=function s(w){var v=this.config.rules.filter(function(x){return x.minAmount<=w.amount&&w.amount<=x.maxAmount
});
return v[0]?v[0].rate:this.config.rules[0].rate
};
n.prototype.calculateAmountRange=function p(){var v=this.config.rules;
return{min:v[0].minAmount,max:v[v.length-1].maxAmount}
};
return n
}(f.LoansCalculatorBase);
HSBC_utils.registerComponent({name:"loansCalculatorChina",selector:".O-LNSCALCC-RW-RBWM",init:function l(n){return new j(n)
}})
})(Bootstrap.jQuery)
}),(function(d,c,g){var a=g(35);
var e=g(8);
var b=g(7);
function f(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}(function(k){var h={configHolder:".config-holder",loansCalculator:".O-LNSCALC-RW-RBWM",productOffersContainer:".O-PRDOFFER-RW-RBWM"},m={config:"config",amountPrefix:"amount-prefix",percentSufix:"percent-sufix"},j={fieldUpdated:"fieldUpdated"};
var i=function(){function s(w){var x=this;
f(this,s);
this.$element=k(w);
this.$loansCalculator=this.$element.closest(h.productOffersContainer).find(h.loansCalculator);
this.readAndPrepareConfig();
if(this.config.calculate){this.state={amount:this.getAmountVal(),months:this.getMonthsVal()};
this.calculationService=new e.CalculationService();
this.calculationRules=new b.CalculationRules(this.config.rules);
this.resultRenderer=new a.OfferDetailResultRenderer(this.$element);
this.$loansCalculator.on(j.fieldUpdated,function(z,y){return x.recalculate(y)
});
this.calculate()
}}s.prototype.getAmountVal=function r(){return Number(this.$loansCalculator.find("[data-calc-input='amount'] input").val().replace(/\.|,/g,""))
};
s.prototype.getMonthsVal=function n(){return Number(this.$loansCalculator.find("[data-calc-input='months'] input").val())
};
s.prototype.readAndPrepareConfig=function q(){var w=this.$element.find(h.configHolder),x=this.$loansCalculator.find(h.configHolder);
this.config=w.data(m.config);
this.amountPrefix=x.data(m.amountPrefix)||"";
this.percentSufix=x.data(m.percentSufix)||"";
this.addMinAmountToRules()
};
s.prototype.calculate=function p(){if(this.validate()){var x=k.extend({apr:this.calculationRules.calculateApr(this.state)},this.state),w=this.calculationService.getCalculationResults(x);
if(!w){return
}this.displayResult(w)
}else{this.resultRenderer.empty()
}};
s.prototype.recalculate=function v(w){this.state[w.name]=w.value;
this.calculate()
};
s.prototype.validate=function t(){var w=this.calculationRules.calculateAmountRange(this.state),x=this.calculationRules.calculateMonthsRange(this.state);
return w.min<=this.state.amount&&this.state.amount<=w.max&&x.min<=this.state.months&&this.state.months<=x.max
};
s.prototype.displayResult=function o(w){k.extend(w,{amount:this.state.amount,months:this.state.months,amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.resultRenderer.render(w)
};
s.prototype.addMinAmountToRules=function u(){var x=this.config.rules.length;
for(var w=0;
w<x;
++w){k.extend(this.config.rules[w],{minAmount:w===0?this.config.minAmount:this.config.rules[w-1].maxAmount+1})
}};
return s
}();
HSBC_utils.registerComponent({name:"offerDetail",selector:".M-OFFERDETAIL-RW-RBWM",init:function l(n){return new i(n)
}})
})(Bootstrap.jQuery)
}),(function(b,a,d){var c=d(39);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"modal-trigger",selector:".generic-modal-setup",init:function e(f){return new c.Modals(f)
}})
}}),(function(c,b,e){var a=e(1);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(j){var i={expanded:"expanded"},h={accordion:".O-ACCRD-RW-RBWM",expander:".expander",dropdown:".dropdown",expandableElements:".dropdown-text, .exp-content",expandableDropdown:".exp-content"};
var f=function(){function l(p){d(this,l);
this.$el=j(p);
this.$dropdown=this.$el.find(h.dropdown);
this.dropdownBorder=this.$dropdown.css("border");
this.bindUiEvents();
this.tealiumObserver=new a.TealiumObserver(this.$dropdown,{event_type:"click",event_category:"content",event_action:"accordion",event_content:function q(r){return j(r).parents(".A-EXPCNT-RW-RBWM").siblings(".anchor").attr("id")
}})
}l.prototype.bindUiEvents=function o(){var p=this;
this.$dropdown.on("click",function(q){return p.collapseOtherExpanders(q)
}).on("keydown",function(q){if(q.keyCode===HSBC_utils.keyCodes.ENTER||q.keyCode===HSBC_utils.keyCodes.SPACE){p.collapseOtherExpanders(q)
}})
};
l.prototype.collapseOtherExpanders=function n(r){var q=j(r.target).closest(h.expander);
this.$dropdown.each(function(){var s=j(this).closest(h.expander);
if(!q.is(s)){l.collapseExpander(s)
}});
this.$dropdown.css("border-bottom",this.dropdownBorder);
var p=j(".header").height();
setTimeout(function(){var s=j(r.currentTarget).offset().top-p;
window.scroll(0,s)
},200)
};
l.collapseExpander=function m(p){p.find(h.expandableElements).removeClass(i.expanded);
p.find(h.dropdown).attr("aria-expanded","false");
if(HSBC_utils.isMobileAndroid){p.find(h.expandableDropdown).attr("aria-hidden","true")
}};
return l
}();
var g={name:"accordion",selector:h.accordion,init:function k(l){return new f(l)
}};
j(window).on("load",function(){return HSBC_utils.registerComponent(g)
})
})(Bootstrap.jQuery)
}),(function(c,b,g){var d=g(41);
var e=g(8);
var a=g(7);
function f(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}(function(k){var h={configHolder:".config-holder",loansCalculator:".O-LNSCALC-RW-RBWM",productOffersContainer:".M-PRDOFFER-RW-RBWM"},j={monthlyRepayment:"N/A",apr:"N/A",totalAmount:"N/A"},n={config:"config"},i={fieldUpdated:"fieldUpdated",calculator:{recalculate:"LoansCalculator::recalculate",reinit:"LoansCalculator::reinit"}};
var l=function(){function t(w){f(this,t);
this.$element=k(w);
this.readAndPrepareConfig();
this.calculationService=new e.CalculationService();
this.calculationRules=new a.CalculationRules(this.config.rules);
this.resultRenderer=new d.ProductDynamicRatesRenderer(this.$element);
this.hookUpOnCalculatorEvents()
}t.prototype.hookUpOnCalculatorEvents=function o(){var w=this;
k(document).on(i.calculator.recalculate,function(x,y){w.state=y;
w.calculate()
});
k(document).trigger(i.calculator.reinit);
if(!this.state){this.displayResult(j)
}};
t.prototype.readAndPrepareConfig=function v(){var w=this.$element.find(h.configHolder);
this.config=w.data(n.config);
this.addMinAmountToRules()
};
t.prototype.calculate=function q(){if(this.validate()){var x=Object.assign({apr:this.calculationRules.calculateApr(this.state)},this.state),w=this.calculationService.getCalculationResults(x);
if(!w){return
}this.displayResult(Object.assign(w,this.state,{amount:w.amount}))
}else{this.displayResult(Object.assign(j,{amount:(this.state.amountPrefix||"")+this.calculationService.format(this.state.amount),months:this.state.months}))
}};
t.prototype.recalculate=function p(w){this.state[w.name]=w.value;
this.calculate()
};
t.prototype.validate=function u(){var w=this.calculationRules.calculateAmountRange(this.state),x=this.calculationRules.calculateMonthsRange(this.state);
return w.min<=this.state.amount&&this.state.amount<=w.max&&x.min<=this.state.months&&this.state.months<=x.max
};
t.prototype.displayResult=function s(w){this.resultRenderer.render(w)
};
t.prototype.addMinAmountToRules=function r(){var x=this.config.rules.length;
for(var w=0;
w<x;
++w){k.extend(this.config.rules[w],{minAmount:w===0?this.config.minAmount:this.config.rules[w-1].maxAmount+1})
}};
return t
}();
HSBC_utils.registerComponent({name:"productDynamicRates",selector:".M-PRDDNRTS-RW-DEV",init:function m(o){return new l(o)
}})
})(Bootstrap.jQuery)
}),(function(b,a,d){var e=d(2);
function c(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(l){var m={backToTopLink:".A-LNKAU-RW-ALL"},h={active:"active",topOfContent:"top-of-content"},j=l("html"),k=l(document.body),i=l(document);
var g=function(){function p(s){c(this,p);
this.$el=l(s);
this.$backToTopLink=this.$el.find(m.backToTopLink);
this.$topOfContent=i.find("."+h.topOfContent);
this.bindUiEvents()
}p.prototype.bindUiEvents=function r(){var s=this;
this.$backToTopLink.on("click",function(u){var t=HSBC_utils.isChrome?k:j;
u.preventDefault();
t.animate({scrollTop:0},400,undefined,s.setFocusToTopOfContentElement.bind(s));
e.TealiumUtils.trackEvent({event_type:"click",event_category:"content",event_action:"onsite",event_content:"Back to top"})
});
i.bind("focusin click swipe",function(t){s.hideSpanWhenLosesFocus(t)
})
};
p.prototype.hideSpanWhenLosesFocus=function q(s){var t=s.target;
if(this.$topOfContent.hasClass(h.active)){if(!this.$topOfContent.is(t)){this.$topOfContent.removeClass(h.active).attr({tabindex:-1,"aria-hidden":"true"})
}}};
p.prototype.setFocusToTopOfContentElement=function o(){this.$topOfContent.addClass(h.active).attr({tabindex:0,"aria-hidden":"false"}).focus()
};
return p
}();
function n(o){new g(o)
}var f={name:"backToTop",selector:".M-BACKTOTOP-RW-RBWM",init:n};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,b,e){var a=e(42);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(k){if(HSBC_utils.isIE8orLower()){return
}var n={slideModule:".M-CAR3-RW-RBWM, .M-CARVID-RW-RBWM",pagination:".A-CARPAGD-RW-ALL, .A-CARPAGL-RW-ALL",threeTileSlide:"M-CAR3-RW-RBWM",videoSlide:"M-CARVID-RW-RBWM",tileMaster:".M-TILMAST-RW-RBWM",tilePanel:".A-PNL-RW-ALL",mCar:".M-CAR3-RW-RBWM",clone:".clone",row:".row"},j={carouselRow:"carousel-row",carouselHolder:"carousel-holder",initialized:"initialized",invisible:"invisible-on-mobile-tablet"},l=400,i=3;
var m=function(){function A(H){d(this,A);
this.$el=k(H);
this.$slidesContainer=this.$el.find(".carousel-inner");
this.addClassToParentRow();
this.updateTilesInRowNumber();
this.bindUiEvents();
this.createClones();
this.tileWidth=h(this.$el,"width")/this.tilesInRow;
this.setVisible();
this.updateInlineStyles();
this.initPagination();
this.toggleArrows();
this.animationComplete=true;
this.prevWindowWidth=k(window).width();
this.resize();
this.allyHelper=new a.CarouselAlly(this)
}A.prototype.addClassToParentRow=function p(){var I=this.$el.closest(n.row),H=this.$el.parent();
I.addClass(j.carouselRow);
H.addClass(j.carouselHolder)
};
A.prototype.getCurrentSlide=function v(){var H=this.currentTile-this.leftOffset;
if(H<0){H=this.meatballsNr+H
}else{if(H>=this.meatballsNr){H=0
}}return H
};
A.prototype.getAdditionalTranslation=function y(){var H=0;
for(var I=0;
I<this.currentTile;
I++){H+=this.tileData[I].translation
}return H
};
A.prototype.initPagination=function q(){var N=this;
var H=this.$el.find(n.pagination),I=k(document.createDocumentFragment()),K={button:"<button></button>",li:"<li></li>"};
H.empty();
for(var J=0;
J<this.meatballsNr;
J++){var M=void 0,L=void 0;
M=k(K.li);
L=k(K.button).attr("data-id",J+this.currentTile).attr("tabindex",-1).attr("title","pagination");
M.append(L);
I.append(M);
if(HSBC_utils.matchMedia.desktop){L.on("click",function(O){return N.meatballsClickHandler(O)
})
}}H.append(I);
this.updateMeatballs();
k(n.slideModule).css("display","block")
};
A.prototype.meatballsClickHandler=function E(I){var H=k(I.target),J=parseInt(H.attr("data-id"));
this.swipe(null,J)
};
A.prototype.bindUiEvents=function s(){var J=this;
var H=this.$el.find(".next"),I=this.$el.find(".prev");
I.on("click",function(){return J.swipe(1,null)
});
H.on("click",function(){return J.swipe(-1,null)
});
this.$el.on("carousel:reinitialize",function(){return J.resize(true)
});
k(window).on("resize",function(){return J.resize()
})
};
A.prototype.swipe=function w(H,J){var N=this;
var I=h(this.$slidesContainer,"padding-left"),K=this.$el.find(".prev"),M=this.$el.find(".next");
var O=void 0,L=void 0,P=void 0;
if(!this.animationComplete||this.arrowsHidden){return
}this.$slidesContainer.removeClass("no-transition");
this.animationComplete=false;
if(!H){P=this.calculateDistancePx(J,-I,true);
this.currentTile=J
}else{this.currentTile+=-H;
P=this.calculateDistancePx(this.currentTile,-I,true)
}this.$slidesContainer.css("margin-left",P);
O=this.currentTile===0;
L=this.currentTile===this.tileData.length-this.rightOffset;
if(O){this.currentTile=this.tileData.length-this.rightOffset-this.leftOffset
}else{if(L){this.currentTile=this.leftOffset
}}this.updateMeatballs();
K.attr("aria-hidden",true);
M.attr("aria-hidden",true);
setTimeout(function(){var Q=0;
if(O){Q=N.calculateDistancePx(N.tileData.length-N.rightOffset-N.leftOffset,-I,true)
}else{if(L){Q=N.calculateDistancePx(N.leftOffset,-I,true)
}}if(O||L){N.$slidesContainer.addClass("no-transition").css("margin-left",Q)
}N.animationComplete=true;
N.allyHelper.setFocus();
N.allyHelper.setTabIndexes();
N.allyHelper.setAccessibilityTexts();
K.removeAttr("aria-hidden");
M.removeAttr("aria-hidden")
},l)
};
A.prototype.createClones=function x(){this.$slidesContainer.find(n.clone).remove();
var J=this.$el.find(n.slideModule);
var H=void 0,I=void 0,K=void 0;
if(!J.length){return
}H=J.last().clone(true,true);
I=J.first().clone(true,true);
K=H.add(I);
K.addClass("clone").find("cq").remove();
K.find("[id]").removeAttr("id");
this.$slidesContainer.prepend(H,J.first());
this.$slidesContainer.append(I)
};
A.prototype.updateTilesInRowNumber=function r(){if(HSBC_utils.matchMedia.desktop){this.tilesInRow=3
}else{if(HSBC_utils.matchMedia.tablet){this.tilesInRow=2
}else{this.tilesInRow=1
}}};
A.prototype.resize=function C(J){var I=k(window).width(),H=this.prevWindowWidth!==I;
if(!H&&this.$el.hasClass(j.initialized)&&!J){return
}this.updateTilesInRowNumber();
if(J){this.createClones()
}this.tileWidth=h(this.$el,"width")/this.tilesInRow||this.tileWidth;
this.updateInlineStyles();
this.initPagination();
this.toggleArrows();
this.currentTile=this.leftOffset;
this.prevWindowWidth=I
};
A.prototype.resizeTile=function F(){var L=this.$el.find(n.tileMaster),J=this.$el.find(n.mCar),I=[],H=2;
var K=0;
if(L.length){L.height("auto");
L.each(function(M,N){return I.push(k(N).outerHeight(true))
});
K=Math.max.apply(null,I);
J.height(K+H);
L.height(K)
}};
A.prototype.updateInlineStyles=function t(){var J=h(this.$slidesContainer,"padding-left"),Q=this.$el.find(n.slideModule);
var H=void 0,R=void 0;
this.tileData=[];
this.meatballsNr=0;
for(var N=0,O=Q.length;
N<O;
N++){var M=Q.eq(N);
if(HSBC_utils.matchMedia.mobile){if(M.hasClass(n.threeTileSlide)){for(var L=0;
L<i;
L++){this.tileData.push({width:this.tileWidth,translation:0,tilesInSlide:1})
}M.width(i*this.tileWidth)
}else{if(M.hasClass(n.videoSlide)){this.tileData.push({width:this.tileWidth,translation:0,tilesInSlide:1});
M.width(this.tileWidth)
}}}else{if(HSBC_utils.matchMedia.tablet){if(M.hasClass(n.threeTileSlide)){var I=Q.eq(N+1),P=Q.eq(0);
for(var K=0;
K<i;
K++){this.tileData.push({width:this.tileWidth,translation:0,tilesInSlide:2});
if(K===0&&(I.length&&I.hasClass(n.videoSlide)||N===O-1&&P.hasClass(n.videoSlide))){this.tileData.push({width:this.tileWidth*2,translation:1,tilesInSlide:2});
break
}}M.width(i*this.tileWidth)
}else{if(M.hasClass(n.videoSlide)){this.tileData.push({width:this.tileWidth*2,translation:0,tilesInSlide:1});
M.width(this.tileWidth*2)
}}}else{if(M.hasClass(n.threeTileSlide)){this.tileData.push({width:this.tileWidth*i,translation:0,tilesInSlide:3})
}else{if(M.hasClass(n.videoSlide)){this.tileData.push({width:this.tileWidth*i,translation:0,tilesInSlide:1})
}}M.width(this.tileWidth*i)
}}if(N===0){this.leftOffset=this.tileData.length
}if(N===O-2){this.rightOffset=this.tileData.length
}}this.leftOffset=this.leftOffset||0;
this.rightOffset=this.tileData.length-this.rightOffset||0;
this.currentTile=this.leftOffset;
this.meatballsNr+=this.tileData.length-this.leftOffset-this.rightOffset;
H=this.calculateDistancePx(this.currentTile,-J,true);
R=this.calculateDistancePx(null,J*2);
this.$slidesContainer.addClass("no-transition").css({"margin-left":H,width:R});
this.resizeTile()
};
A.prototype.calculateOffset=function u(I){var J=0;
if(typeof I==="undefined"||I===null){I=this.tileData.length
}for(var H=0;
H<I;
H++){if(this.tileData[H]){J+=this.tileData[H].width
}}return J
};
A.prototype.calculateDistancePx=function D(K,I,H){var J=H?-1:1;
return J*this.calculateOffset(K)+I+"px"
};
A.prototype.toggleArrows=function B(){if(HSBC_utils.matchMedia.desktop&&this.tileData.length<=i){this.$el.addClass("arrows-hidden");
this.arrowsHidden=true
}else{this.$el.removeClass("arrows-hidden");
this.arrowsHidden=false
}};
A.prototype.updateMeatballs=function G(){var J=this.$el.find(n.pagination).find("button"),I=J.length;
var H=this.currentTile-this.leftOffset;
J.removeClass("active");
if(H<0){H=I+H
}else{if(H>=I){H=0
}}var K=J.eq(H);
if(K.length){K.addClass("active")
}};
A.prototype.setVisible=function z(){var H=!!window.location.hash;
this.$el.removeClass(j.invisible);
if(!HSBC_utils.matchMedia.desktop&&!H){k(window).scrollTop(0)
}};
return A
}();
function h(p,q){return parseInt(p.css(q))
}function f(p){k(p).trigger("carousel:reinitialize")
}var g={name:"carousel",reinitIfParent:true,selector:".O-CAR-RW-RBWM",init:function o(p){return new m(p)
},reinit:f};
k(window).on("load",function(){return HSBC_utils.registerComponent(g)
})
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var l={richText:".rich-text",quote:".quote"},g={quote:"quote"},j={quote:"<q></q>"},i={currentDate:/\{\{currentDate\}\}/g},e={"America/New_York":"M/D/YYYY","default":"DD/MM/YYYY"};
var k=function(){function p(r){c(this,p);
this.$el=h(r);
this.moment=moment;
if(!HSBC_utils.isEditMode()){this.setUpCurrenDate();
this.fillCurrentDate();
this.setQuotes()
}}p.prototype.setQuotes=function o(){var r=this.$el.find(l.quote);
r.each(function(){var u=h(this),t=u.html(),s=h(j.quote);
s.html(t).addClass(g.quote);
u.replaceWith(s)
})
};
p.prototype.setUpCurrenDate=function q(){var r=this.$el.find("[data-zone]").data("zone");
if(e[r]){this.currentDate=this.moment.tz(r).format(e[r])
}else{this.currentDate=this.moment().format(e["default"])
}};
p.prototype.fillCurrentDate=function n(){var r=this.$el.html();
this.$el.html(r.replace(i.currentDate,this.currentDate))
};
return p
}();
var f={name:"richText",selector:l.richText,init:function m(n){return new k(n)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,a,d){var e=d(43);
function c(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var n={smallWidth:100,mediumWidth:200,fixedSpacing:10},l={tableWrapper:".table-wrapper",adaptableTable:".adaptable-table",caption:"caption"},j={adaptableTable:"adaptable-table",adaptableTablePlaceholder:"adaptable-table-placeholder"},i={tableRendered:"table:rendered"},g=h(".tab-widget-tab-content").not(".hidden"),k=g.width();
var m=function(){function s(w){c(this,s);
if(!HSBC_utils.isEditMode()&&!HSBC_utils.isIE8orLower()){this.$el=h(w);
this.bindUIEvents();
this.bindElements();
this.parseMarkup();
this.adjustTableSize();
new e.TablesAlly(this)
}}s.prototype.bindUIEvents=function u(){var w=this;
h(window).on("resize",function(){w.adjustTableSize()
});
this.$el.on(i.tableRendered,function(){w.bindElements();
w.generateCaption();
w.adjustTableSize()
})
};
s.prototype.bindElements=function r(){this.$tableWrapper=this.$el.find(l.tableWrapper).last();
this.$table=this.$tableWrapper.find("table").last();
this.$cells=this.$table.find("th, td");
this.$stickyColumn=this.$table.find("tr > td:first-child, tr > th:first-child");
this.columnsCount=this.$table.find("tr:first-child > th, tr:first-child > td").length;
this.$caption=this.$table.find(l.caption);
this.$adaptableTable=this.$el.find(l.adaptableTable);
if(this.$adaptableTable.length==0){this.$adaptableTable=this.$el.find(l.adaptableTablePlaceholder)
}};
s.prototype.parseMarkup=function q(){this.$table.removeAttr("height width border cellpadding cellspacing");
this.$cells.removeAttr("height width border cellpadding cellspacing")
};
s.prototype.resetAdaptableTable=function p(){if(this.$adaptableTable.length>0){this.$adaptableTable.css({"padding-left":0})
}this.$tableWrapper.css({"overflow-x":"auto"});
this.$stickyColumn.css({width:"auto",height:"auto",left:"auto",position:"static"});
this.$table.css("min-width","100%");
this.$cells.css("width","auto");
if(this.$adaptableTable.length>0){this.$adaptableTable.removeClass(j.adaptableTable);
this.$adaptableTable.addClass(j.adaptableTablePlaceholder)
}};
s.prototype.applyAdaptableTable=function v(){var x=!HSBC_utils.matchMedia.mobile?n.mediumWidth:n.smallWidth,C=this.$stickyColumn.first(),y={x:C.innerWidth()-C.width(),y:C.innerHeight()-C.height()},z=this.$table.closest(".tab-widget-tab-content").length>0?k:this.$table.width(),A=z;
if(this.columnsCount>1){A=(z/(this.columnsCount-1)).toFixed(2)
}var D=HSBC_utils.getMatchMediaUnit();
if(this.$caption){var w=2*D;
this.$caption.css("top",w);
var F=this.$caption.height()+w*2;
this.$table.css("margin-top",F)
}else{var B=2*D;
this.$table.css("margin-top",B)
}if(this.$adaptableTable.length==0){this.$adaptableTable=h('<div class="'+j.adaptableTable+'"></div>');
this.$tableWrapper.wrap(this.$adaptableTable);
this.$adaptableTable=this.$el.find(l.adaptableTable)
}else{this.$adaptableTable.addClass(j.adaptableTable);
this.$adaptableTable.removeClass(j.adaptableTablePlaceholder)
}this.$stickyColumn.each(function(G,H){var I=h(H);
if(!HSBC_utils.matchMedia.mobile&&I.width()>x){x=I.width()
}else{x=n.smallWidth
}});
this.$cells.width(A);
var E=x-n.fixedSpacing+y.x;
this.$adaptableTable.css({paddingLeft:E});
this.$tableWrapper.css({"overflow-x":"scroll"});
this.$stickyColumn.css({width:x,left:0,position:"absolute"});
this.$stickyColumn.each(function(H,J){var K=h(J),I=K.parent("tr"),G=(I.height()>K.innerHeight()?I.height():K.innerHeight())-y.y;
I.find("td,th").css({height:G})
})
};
s.prototype.adjustTableSize=function t(){this.bindElements();
this.resetAdaptableTable();
if(this.$el.width()<this.$table.width()){this.applyAdaptableTable()
}if(this.$table.closest(".hidden").length>0&&!HSBC_utils.matchMedia.mobile){this.$table.css("width",k);
this.$el.css("width",k)
}this.$el.css("width","auto");
this.$table.css("width","auto")
};
return s
}();
var f={name:"smptbl",selector:".M-SMPTBL-RW-RBWM",init:function o(p){return new m(p)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,f,b){function h(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}var i=Bootstrap.jQuery,e={cookieBanner:"#cookie-banner",bannerDismissOpt:".cookie-banner-optout",submitButton:"#cmSubmitButton"},d={hidden:"hidden"},a={props:{path:"/",expires:{months:6}},dismissName:"cookie_banner_dismiss"};
var g=function(){function m(n){h(this,m);
this.$submitButton=i(n);
this.$cookieBanner=i(e.cookieBanner);
this.$bannerDismissOpt=i(e.bannerDismissOpt);
this.$form=this.$submitButton.closest("form");
this.$radios=i("input:radio",this.$form);
this.bindUIEvents()
}m.prototype.bindUIEvents=function l(){var n=this;
this.$form.on("submit",function(o){n.clicked();
o.preventDefault()
})
};
m.prototype.clicked=function k(){var n=void 0;
if(!this.$cookieBanner.hasClass(d.hidden)){this.$cookieBanner.addClass(d.hidden)
}if(!this.$bannerDismissOpt.hasClass(d.hidden)){this.$bannerDismissOpt.addClass(d.hidden)
}if(this.$radios&&(n=this.$radios.filter(":checked")).length){HSBC_utils.setCookie(n.attr("name"),n.val(),a.props)
}var o=new Date().getTime();
HSBC_utils.setCookie(a.dismissName,o,a.props)
};
return m
}();
HSBC_utils.registerComponent({name:"CookieManagementSubmitButton",selector:e.submitButton,init:function j(k){return new g(k)
}})
}),(function(c,e,b){function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}var g=Bootstrap.jQuery,d={introSection:".intro-section",bannerSection:".banner-section",heroBannerContainer:".hero-banner-container",heroBannerContent:".O-HEROBAN-RW-RBWM",heroBanner:".O-HEROBAN2-RW-DEV",noImage:".noImage"},j={hasNewHero:"has-hero-2"},a={units4:40};
var h=function(){function n(o){f(this,n);
this.$homePageHero=g(o);
this.$introSection=this.$homePageHero.parents(d.introSection);
if(!this.$introSection.length){this.$introSection=this.$homePageHero.parents(d.bannerSection)
}this.updateIntroSection();
this.updateEmptyHeight();
this.bindUIEvents()
}n.prototype.updateIntroSection=function m(){this.$introSection.addClass(j.hasNewHero)
};
n.prototype.updateEmptyHeight=function k(){var p=this.$introSection.find(d.noImage),o=this.$introSection.find(d.heroBannerContainer);
if(!p.length){return
}p.css("min-height",o.find(d.heroBannerContent).height()+a.units4+"px")
};
n.prototype.bindUIEvents=function l(){var o=this;
g(window).on("resize",function(){o.updateEmptyHeight()
})
};
return n
}();
HSBC_utils.registerComponent({name:"heroBanner_rev2",selector:d.heroBanner,init:function i(k){return new h(k)
}})
}),(function(c,a,f){var e=f(44);
var b=d(e);
function d(h){return h&&h.__esModule?h:{"default":h}
}HSBC_utils.registerComponent({name:"heronoimage",selector:".O-HEROBANNOIMG-RW-DEV",init:function g(h){return new b["default"](h)
}})
}),(function(d,b,h){b.__esModule=true;
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var c={heroImage:".O-HEROIMG-RW-RBWM",parentWrapper:".intro-section",updatedElement:".sm-12",heroBanner:".O-HEROBAN-RW-RBWM"},a={toRemoveInParent:"sm-12",toRemoveInWrapper:"row"},f=Bootstrap.jQuery;
var e=b.HeroImage=function(){function j(k){g(this,j);
this.$el=f(k);
this.$parentWrapper=this.$el.parents(c.parentWrapper);
this.$heroBanner=this.$parentWrapper.find(c.heroBanner);
this.updateStructure()
}j.prototype.updateStructure=function i(){this.$parentWrapper.removeClass(a.toRemoveInWrapper);
this.$el.unwrap();
this.$heroBanner.wrap(f('<div class="grid"></div>'))
};
return j
}();
(function(){HSBC_utils.registerComponent({name:"heroimage",selector:c.heroImage,init:function i(j){return new e(j)
}})
})()
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var e={introSection:".intro-section",heroBanner:".O-HPHERO-RW-DEV"},f={hasNewHero:"has-home-page-hero"};
var g=function(){function k(l){c(this,k);
this.$homePageHero=h(l);
this.$introSection=this.$homePageHero.parents(e.introSection);
this.updateIntroSection()
}k.prototype.updateIntroSection=function j(){this.$introSection.addClass(f.hasNewHero)
};
return k
}();
function i(j){new g(j)
}HSBC_utils.registerComponent({name:"heroBanner",selector:e.heroBanner,init:i})
})(Bootstrap.jQuery)
}),(function(b,a,c){(function(e){var d=function d(g){var f=e(g).find("fieldset:not(:has(input))");
f.replaceWith(function(){return e("<div />").append(e(this).contents())
})
};
d(".O-SMARTSPCGEN-DEV")
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(f){var e={radioWrapper:".A-FSRADB-RW-ALL",label:".radio-label",input:"input[type=radio]"};
var h=function(){function j(k){c(this,j);
this.$radioWrapper=f(k);
this.$label=this.$radioWrapper.find(e.label);
this.$input=this.$radioWrapper.find(e.input);
this.bindUI()
}j.prototype.bindUI=function i(){var k=this;
this.$label.on("keydown",function(l){if(l.keyCode===HSBC_utils.keyCodes.ENTER||l.keyCode===HSBC_utils.keyCodes.SPACE){k.$input.get(0).checked=true
}})
};
return j
}();
function g(i){new h(i)
}HSBC_utils.registerComponent({name:"radioButton",selector:e.radioWrapper,init:g})
})(Bootstrap.jQuery)
}),(function(b,a,d){var e=d(43);
d(90);
function c(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var g={basicTable:".M-BSCTBL-RW-RBWM",desktopHeadingCells:"table.desktop th:not([scope])"};
var f=function(){function k(m){c(this,k);
this.element=m;
if(!HSBC_utils.isEditMode()){new e.TablesAlly(this.element)
}this.removeAdditionalSpaces();
this.applyHeadingScopeAttribute()
}k.prototype.removeAdditionalSpaces=function j(){var m=this.element.getElementsByTagName("td");
Array.from(m).forEach(function(n){n.innerHTML=n.innerHTML.replace(/&nbsp;/g,"")
})
};
k.prototype.applyHeadingScopeAttribute=function l(){var m=h(this.element).find(g.desktopHeadingCells);
m.attr("scope","col")
};
return k
}();
HSBC_utils.registerComponent({name:"bsctbl",selector:g.basicTable,init:function i(j){return new f(j)
}})
})(Bootstrap.jQuery)
}),(function(b,a,c){c(91);
c(106);
b.exports=c(4).Array.from
}),(function(b,a,c){var d=c(92)(true);
c(93)(String,"String",function(e){this._t=String(e);
this._i=0
},function(){var g=this._t;
var f=this._i;
var e;
if(f>=g.length){return{value:undefined,done:true}
}e=d(g,f);
this._i+=e.length;
return{value:e,done:false}
})
}),(function(c,b,d){var a=d(17);
var e=d(18);
c.exports=function(f){return function(n,o){var m=String(e(n));
var k=a(o);
var j=m.length;
var h,g;
if(k<0||k>=j){return f?"":undefined
}h=m.charCodeAt(k);
return h<55296||h>56319||k+1===j||(g=m.charCodeAt(k+1))<56320||g>57343?f?m.charAt(k):h:f?m.slice(k,k+2):(h-55296<<10)+(g-56320)+65536
}
}
}),(function(d,g,c){var e=c(45);
var f=c(19);
var m=c(48);
var i=c(9);
var h=c(23);
var b=c(97);
var k=c(55);
var o=c(105);
var j=c(0)("iterator");
var q=!([].keys&&"next" in [].keys());
var a="@@iterator";
var p="keys";
var n="values";
var l=function(){return this
};
d.exports=function(z,w,x,C,F,E,K){b(x,w,C);
var s=function(N){if(!q&&N in B){return B[N]
}switch(N){case p:return function O(){return new x(this,N)
};
case n:return function M(){return new x(this,N)
}
}return function L(){return new x(this,N)
}
};
var t=w+" Iterator";
var y=F==n;
var I=false;
var B=z.prototype;
var H=B[j]||B[a]||F&&B[F];
var v=H||s(F);
var r=F?!y?v:s("entries"):undefined;
var D=w=="Array"?B.entries||H:H;
var G,J,A;
if(D){A=o(D.call(new z()));
if(A!==Object.prototype&&A.next){k(A,t,true);
if(!e&&typeof A[j]!="function"){i(A,j,l)
}}}if(y&&H&&H.name!==n){I=true;
v=function u(){return H.call(this)
}
}if((!e||K)&&(q||I||!B[j])){i(B,j,v)
}h[w]=v;
h[t]=l;
if(F){G={values:y?v:s(n),keys:E?v:s(p),entries:r};
if(K){for(J in G){if(!(J in B)){m(B,J,G[J])
}}}else{f(f.P+f.F*(q||I),w,G)
}}return G
}
}),(function(b,a,c){b.exports=!c(12)&&!c(46)(function(){return Object.defineProperty(c(47)("div"),"a",{get:function(){return 7
}}).a!=7
})
}),(function(c,b,d){var a=d(20);
c.exports=function(g,e){if(!a(g)){return g
}var f,h;
if(e&&typeof(f=g.toString)=="function"&&!a(h=f.call(g))){return h
}if(typeof(f=g.valueOf)=="function"&&!a(h=f.call(g))){return h
}if(!e&&typeof(f=g.toString)=="function"&&!a(h=f.call(g))){return h
}throw TypeError("Can't convert object to primitive value")
}
}),(function(b,a){b.exports=function(c){if(typeof c!="function"){throw TypeError(c+" is not a function!")
}return c
}
}),(function(e,b,g){var d=g(98);
var f=g(21);
var c=g(55);
var a={};
g(9)(a,g(0)("iterator"),function(){return this
});
e.exports=function(j,i,h){j.prototype=d(a,{next:f(1,h)});
c(j,i+" Iterator")
}
}),(function(b,e,a){var h=a(11);
var k=a(99);
var j=a(54);
var g=a(25)("IE_PROTO");
var c=function(){};
var d="prototype";
var i=function(){var o=a(47)("iframe");
var n=j.length;
var l="<";
var m=">";
var p;
o.style.display="none";
a(104).appendChild(o);
o.src="javascript:";
p=o.contentWindow.document;
p.open();
p.write(l+"script"+m+"document.F=Object"+l+"/script"+m);
p.close();
i=p.F;
while(n--){delete i[d][j[n]]
}return i()
};
b.exports=Object.create||function f(n,m){var l;
if(n!==null){c[d]=h(n);
l=new c();
c[d]=null;
l[g]=n
}else{l=i()
}return m===undefined?l:k(l,m)
}
}),(function(d,c,e){var f=e(10);
var a=e(11);
var g=e(50);
d.exports=e(12)?Object.defineProperties:function b(n,h){a(n);
var l=g(h);
var k=l.length;
var j=0;
var m;
while(k>j){f.f(n,m=l[j++],h[m])
}return n
}
}),(function(d,a,f){var b=f(13);
var g=f(24);
var e=f(102)(false);
var c=f(25)("IE_PROTO");
d.exports=function(j,n){var m=g(j);
var l=0;
var h=[];
var k;
for(k in m){if(k!=c){b(m,k)&&h.push(k)
}}while(n.length>l){if(b(m,k=n[l++])){~e(h,k)||h.push(k)
}}return h
}
}),(function(b,a,c){var d=c(51);
b.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return d(e)=="String"?e.split(""):Object(e)
}
}),(function(c,b,e){var f=e(24);
var a=e(52);
var d=e(103);
c.exports=function(g){return function(n,j,i){var m=f(n);
var k=a(m.length);
var h=d(i,k);
var l;
if(g&&j!=j){while(k>h){l=m[h++];
if(l!=l){return true
}}}else{for(;
k>h;
h++){if(g||h in m){if(m[h]===j){return g||h||0
}}}}return !g&&-1
}
}
}),(function(e,c,f){var b=f(17);
var a=Math.max;
var d=Math.min;
e.exports=function(g,h){g=b(g);
return g<0?a(g+h,0):d(g,h)
}
}),(function(c,b,d){var a=d(3).document;
c.exports=a&&a.documentElement
}),(function(e,a,g){var b=g(13);
var f=g(56);
var d=g(25)("IE_PROTO");
var c=Object.prototype;
e.exports=Object.getPrototypeOf||function(h){h=f(h);
if(b(h,d)){return h[d]
}if(typeof h.constructor=="function"&&h instanceof h.constructor){return h.constructor.prototype
}return h instanceof Object?c:null
}
}),(function(b,d,a){var i=a(49);
var c=a(19);
var k=a(56);
var l=a(107);
var e=a(108);
var h=a(52);
var f=a(109);
var j=a(110);
c(c.S+c.F*!a(112)(function(m){Array.from(m)
}),"Array",{from:function g(x){var u=k(x);
var n=typeof this=="function"?this:Array;
var r=arguments.length;
var q=r>1?arguments[1]:undefined;
var m=q!==undefined;
var v=0;
var s=j(u);
var o,w,p,t;
if(m){q=i(q,r>2?arguments[2]:undefined,2)
}if(s!=undefined&&!(n==Array&&e(s))){for(t=s.call(u),w=new n();
!(p=t.next()).done;
v++){f(w,v,m?l(t,q,[p.value,v],true):p.value)
}}else{o=h(u.length);
for(w=new n(o);
o>v;
v++){f(w,v,m?q(u[v],v):u[v])
}}w.length=v;
return w
}})
}),(function(c,b,d){var a=d(11);
c.exports=function(i,h,j,f){try{return f?h(a(j)[0],j[1]):h(j)
}catch(k){var g=i["return"];
if(g!==undefined){a(g.call(i))
}throw k
}}
}),(function(d,c,f){var e=f(23);
var b=f(0)("iterator");
var a=Array.prototype;
d.exports=function(g){return g!==undefined&&(e.Array===g||a[b]===g)
}
}),(function(d,b,e){var c=e(10);
var a=e(21);
d.exports=function(g,f,h){if(f in g){c.f(g,f,a(0,h))
}else{g[f]=h
}}
}),(function(d,b,f){var c=f(111);
var a=f(0)("iterator");
var e=f(23);
d.exports=f(4).getIteratorMethod=function(g){if(g!=undefined){return g[a]||g["@@iterator"]||e[c(g)]
}}
}),(function(b,a,f){var g=f(51);
var e=f(0)("toStringTag");
var d=g(function(){return arguments
}())=="Arguments";
var c=function(i,h){try{return i[h]
}catch(j){}};
b.exports=function(i){var j,h,k;
return i===undefined?"Undefined":i===null?"Null":typeof(h=c(j=Object(i),e))=="string"?h:d?g(j):(k=g(j))=="Object"&&typeof j.callee=="function"?"Arguments":k
}
}),(function(f,b,h){var a=h(0)("iterator");
var d=false;
try{var c=[7][a]();
c["return"]=function(){d=true
};
Array.from(c,function(){throw 2
})
}catch(g){}f.exports=function(k,l){if(!l&&!d){return false
}var m=false;
try{var i=[7];
var j=i[a]();
j.next=function(){return{done:m=true}
};
i[a]=function(){return j
};
k(i)
}catch(n){}return m
}
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(i){var e={template:".dynamic-table-template",targetContainer:".nomustache-content",targetContent:".M-SMPTBL-RW-RBWM"},h={source:"source"},f={tableRendered:"table:rendered"};
var j=function(){function m(p){c(this,m);
this.$el=i(p);
this.$targetContainer=this.$el.find(e.targetContainer);
this.$targetContent=this.$targetContainer.find(e.targetContent);
this.dataSourceUrl=this.$targetContainer.data(h.source);
this.tableTemplate=this.$el.find(e.template).html();
this.readDataFromUrl();
this.initializeMustacheFormatter()
}m.prototype.readDataFromUrl=function o(){var p=this;
i.ajax(this.dataSourceUrl,{dataType:"json",cache:false}).done(function(q){p.replaceWithData(false,q)
}).fail(function(q,s,r){p.replaceWithData(true,{textStatus:s,errorThrown:r})
})
};
m.prototype.initializeMustacheFormatter=function n(){if(Mustache){if(Mustache.Formatters&&!Mustache.Formatters.threeDecimal){Mustache.Formatters.threeDecimal=function(p){return(Math.round(Number(p)*1000)/1000).toFixed(3)
}
}}};
m.prototype.replaceWithData=function l(q,r){var p=this;
if(q){console.log("Error: "+JSON.stringify(r))
}else{this.$targetContent.html(Mustache.render(this.tableTemplate,r)).promise().done(function(){p.$targetContent.trigger(f.tableRendered);
i(window).trigger("resize")
})
}};
return m
}();
var g={name:"dynamictable",selector:".M-DYNTBL-RW-RBWM",init:function k(l){return new j(l)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(b,a,d){d(115);
function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var g={description:".text-container",oneClickButtons:".oneClickButton",modal:"oneClickModal",close:".close-trigger",oneStepButton:"a.continue",multipleStepsButton:"button.options"};
var f={formName:"nb",cookieName:"FromWebSite",cookieSettings:{path:"/",secure:true},dataLinks:{oneClickLinkPath:"data-oneClickLinkPath",fewStepsLinkPath:"data-fewStepsLinkPath",languageTag:"data-languageTag",countryTag:"data-countryTag",fromWebSite:"data-fromWebSite",modalPath:"data-modalPath"},cookies:{languageTag:"LANGTAG=",countryTag:"COUNTRYTAG="},onEnter:{13:1,Enter:1},onEscape:{27:1,Escape:1},onTab:{9:1,Tab:1}};
var i=function(){function N(O){c(this,N);
this.button=O
}N.prototype.subscribeOnClicks=function z(O){var P=this;
O.addEventListener("click",function(Q){P.onClick(Q)
});
return this
};
N.prototype.subscribeOnKeyPress=function k(O){var P=this;
this.onKeyDown(O,f.onEnter,function(Q){P.onClick(Q)
});
return this
};
N.prototype.onKeyDown=function m(Q,O,P){Q.addEventListener("keydown",function(R){if(O[R.which]||O[R.keyCode]||O[R.key]){R.preventDefault();
P(R)
}});
return Q
};
N.prototype.popUpConfiguration=function K(){return["status=yes","location=no","scrollbars=yes","menubar=no","toolbar=no","resizable=yes","height="+screen.height,"width="+screen.width,"left=0","top=0"].join(",")
};
N.prototype.onClick=function o(){var Q=this;
var P=this.extractAttributes(this.button,f.dataLinks);
var O=this.buildUrlWithParameters(P);
if(!this.needToShowPopUp(P.fewStepsLinkPath)){this.focusOnEl(this.windowOpen(window)).submitForm(O,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(P.fromWebSite);
return
}this.requestPopUp(P.modalPath,function(R){var S=Q.whenLoadedPopUp(O,P,Q.parseModal(R));
Q.showModalToUser(S,document);
Q.modalAccessibilityHandler(S)
},Bootstrap.jQuery)
};
N.prototype.focusOnEl=function p(O){O.focus();
return this
};
N.prototype.modalAccessibilityHandler=function n(O){var P=O.querySelector(g.description);
this.focusOnEl(P)
};
N.prototype.requestPopUp=function C(R,Q,O){O.ajax({type:"GET",url:R+".html",data:{wcmmode:"disabled"},success:Q,error:function P(S){return console.error("Please configure one click button modal window",S)
}})
};
N.prototype.whenLoadedPopUp=function L(O,R,Q){var P=this;
try{var T=this.cyclicIterator(Q.querySelectorAll("button,a"));
this.modalCloseButton(Q).addEventListener("click",function(){P.closeModal(Q)
});
this.onKeyDown(this.modalCloseButton(Q),f.onEnter,function(){P.closeModal(Q)
});
this.onKeyDown(document,f.onEscape,function(){P.closeModal(Q)
});
this.modalOneStepButton(Q).addEventListener("click",function(){P.oneStepAction(O,R)
});
this.onKeyDown(this.modalOneStepButton(Q),f.onEnter,function(){P.oneStepAction(O,R)
});
this.modalMultipleStepsButton(Q).addEventListener("click",function(){P.multipleStepsAction(R)
});
this.onKeyDown(this.modalMultipleStepsButton(Q),f.onEnter,function(){P.multipleStepsAction(R)
});
this.onKeyDown(Q,f.onTab,function(){T.next().focus()
})
}catch(S){console.error("Not expected pop-up",S)
}return Q
};
N.prototype.closeModal=function q(O){O.parentNode.removeChild(O)
};
N.prototype.cyclicIterator=function A(Q){var O=0;
return{next:function P(){return O<Q.length?Q[O++]:(O=0)||Q[O++]
}}
};
N.prototype.multipleStepsAction=function y(O){this.focusOnEl(this.windowOpen(window)).submitForm(O.fewStepsLinkPath,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(O.fromWebSite)
};
N.prototype.oneStepAction=function D(O,P){this.focusOnEl(this.windowOpen(window)).submitForm(O,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(P.fromWebSite)
};
N.prototype.buildUrlWithParameters=function H(O){return this.appendGetParameters(O.oneClickLinkPath,Object.keys(O).filter(function(P){return f.cookies[P]&&O[P]
}).reduce(function(Q,P){Q.push((f.cookies[P]||"").concat(O[P]));
return Q
},[]))
};
N.prototype.submitForm=function t(O,P){P.action=O;
P.submit();
P.parentNode.removeChild(P);
return this
};
N.prototype.setAttributes=function G(P,O){Object.entries(O).forEach(function(Q){P.setAttribute(Q[0],Q[1])
});
return P
};
N.prototype.extractAttributes=function F(P,O){var Q={};
Object.entries(O).reduce(function(R,S){R[S[0]]=P.getAttribute(S[1]);
return R
},Q);
return Q
};
N.prototype.setCookiesIfValueExists=function w(O){if(!O){console.info("Can't set one click button cookie, because value is empty");
return
}HSBC_utils.setCookie(f.cookieName,O,f.cookieSettings)
};
N.prototype.createInput=function I(O){return this.setAttributes(O.createElement("input"),{WithCookie:"true"})
};
N.prototype.createForm=function r(O){return this.setAttributes(O.createElement("form"),{method:"post",name:f.formName,target:f.formName})
};
N.prototype.windowOpen=function v(O){return O.open("",f.formName,this.popUpConfiguration())
};
N.prototype.showModalToUser=function s(P,O){O.body.appendChild(P);
return P
};
N.prototype.parseModal=function J(O){return new DOMParser().parseFromString(O,"text/html").getElementById(g.modal)
};
N.prototype.prepareForm=function u(O,P,Q){P.appendChild(Q);
O.body.appendChild(P);
return P
};
N.prototype.appendGetParameters=function x(O,P){if(O.indexOf("?")){return O+"&"+P.join("&")
}return O+"?"+P.join("&")
};
N.prototype.needToShowPopUp=function E(O){return !!O
};
N.prototype.modalMultipleStepsButton=function B(O){return O.querySelector(g.multipleStepsButton)
};
N.prototype.modalOneStepButton=function l(O){return O.querySelector(g.oneStepButton)
};
N.prototype.modalCloseButton=function M(O){return O.querySelector(g.close)
};
return N
}();
var e={name:"one-click-button",selector:g.oneClickButtons,init:function j(k){return new i(k).subscribeOnClicks(k).subscribeOnKeyPress(k)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
}),(function(b,a,c){c(116);
b.exports=c(4).Object.entries
}),(function(c,b,e){var f=e(19);
var d=e(117)(true);
f(f.S,"Object",{entries:function a(g){return d(g)
}})
}),(function(b,a,c){var f=c(50);
var e=c(24);
var d=c(118).f;
b.exports=function(g){return function(l){var o=e(l);
var n=f(o);
var m=n.length;
var k=0;
var h=[];
var j;
while(m>k){if(d.call(o,j=n[k++])){h.push(g?[j,o[j]]:o[j])
}}return h
}
}
}),(function(b,a){a.f={}.propertyIsEnumerable
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var g={quickLinksWithIcon:".M-QCKLKSWICN-RW-RBWM",quickLinkWithIcon:".M-QCKLKWICN-RW-RBWM",gridClasses:".grid-classes",linkContainer:".link-container"},f={withoutBorder:"without-bottom-border"};
var j=function(){function s(t){c(this,s);
this.$el=h(t);
this.$gridClasses=this.$el.find(g.gridClasses);
this.$allLinks=this.$el.find(g.quickLinkWithIcon);
this.$linkContainers=this.$el.find(g.linkContainer);
this.$quickLinkWithIconColumn=this.$el.find(g.quickLinkWithIcon);
this.initClasses();
this.setHeights();
this.removeLastRowDivider();
this.bindUIEvents()
}s.prototype.initClasses=function m(){var t=this.$gridClasses.data("grid-classes");
if(t){this.$allLinks.addClass(t)
}};
s.prototype.bindUIEvents=function k(){var t=this;
h(window).on("resize",function(){t.setHeights();
t.removeLastRowDivider()
})
};
s.prototype.setHeights=function n(){this.$linkContainers.height("auto");
if(HSBC_utils.matchMedia.desktop||HSBC_utils.matchMedia.tablet){this.equalizeElementsInitialHeight();
this.equalizeElementsHeight()
}};
s.prototype.equalizeElementsInitialHeight=function r(){var t=s.getHighestElement(this.$linkContainers);
this.$linkContainers.outerHeight(t.outerHeight());
t.height("auto");
this.$linkContainers.outerHeight(t.outerHeight())
};
s.getHighestElement=function o(t){return t.toArray().reduce(function(w,v){var u=h(v);
return w.height()<u.height()?u:w
},t.first())
};
s.prototype.equalizeElementsHeight=function p(){var t=this.getVerticallyGroupedColumns();
this.$linkContainers.height("auto");
t.forEach(function(u){var v=Math.max.apply(null,u.map(function(w){return w.height()
}));
u.forEach(function(w){return w.height(v)
})
})
};
s.prototype.getVerticallyGroupedColumns=function q(){var t={};
this.$linkContainers.each(function(){var v=h(this),u=v.offset().top;
if(!t[u]){t[u]=[]
}t[u].push(v)
});
return h.map(t,function(u){return[u]
})
};
s.prototype.removeLastRowDivider=function l(){if(this.$linkContainers.length){var t=f.withoutBorder,u=this.$linkContainers.last().offset().top;
this.$linkContainers.removeClass(t);
this.$linkContainers.each(function(v,w){var x=h(w);
if(x.offset().top===u){x.addClass(t)
}})
}};
return s
}();
var e={name:"quickLinksWithIcon",selector:g.quickLinksWithIcon,init:function i(k){return new j(k)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
}),(function(b,a,e){var c=e(26);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(l){var p={recentArticles:".O-RCNART-RW-RBWM",articlesDataSource:".articles-data-source",wrapper:".recent-articles-wrapper",pagination:".generic-pagination",pageSwitchers:".number a, .arrow a",customSelect:"select.A-FSSINGSEL-RW-ALL",selectedOption:"option:selected",pageHeader:".header"},o={articles:"recent-articles"},h={common:{tiles:"O-MASTERTILE-DEV",grid:"sm-12 md-6 lg-3"},featured:{tiles:"O-MASTERTILE-DEV",grid:"sm-12 md-6"}},k={emptyResults:"empty-results",selected:"selected"},m={source:"source",tagNames:"tag-names",displayMode:"display-mode",page:"page"},s={topFour:"topFour"},f="lll",j="all",q=6;
var n=function(){function K(M){d(this,K);
this.$el=l(M);
this.$articlesDataSource=this.$el.find(p.articlesDataSource);
this.$wrapper=this.$el.find(p.wrapper);
this.$pagination=this.$el.find(p.pagination);
this.$customSelect=this.$el.find(p.customSelect);
this.prepare();
this.init();
this.bindUiEvents()
}K.prototype.prepare=function v(){this.setData();
this.setMustacheTemplates();
if(this.articles.length>0){this.$el.removeClass(k.emptyResults);
this.prepareSettings()
}else{this.$el.addClass(k.emptyResults)
}};
K.prototype.prepareSettings=function z(){var M=this;
if(this.displayMode===s.topFour){this.articlesPerPage={first:4,any:4};
this.articleRowsMap={first:[4,0,0]};
this.selectedCategory=j;
this.$pagination.hide()
}else{this.articlesPerPage={first:10,any:12};
this.articleRowsMap={first:[2,4,4],any:[4,4,4]};
this.selectedCategory=this.$customSelect.length>0?this.$customSelect.find(p.selectedOption).val():j;
this.$customSelect.on("change",function(){return M.setSelectedCategory()
})
}};
K.prototype.setData=function A(){this.articles=this.$articlesDataSource.data(m.source)||[];
this.categories=this.$articlesDataSource.data(m.tagNames);
this.displayMode=this.$articlesDataSource.data(m.displayMode);
this.$articlesDataSource.remove();
this.filterOutdatedArticles();
this.setArticlesDate()
};
K.prototype.setArticlesDate=function t(){this.articles.forEach(function(M){if(M.publishDate){M.date=moment(M.publishDate,f).fromNow()
}})
};
K.prototype.filterOutdatedArticles=function G(){var M=this;
this.articles.filter(function(N){return !N.publishDate||N.publishDate&&M.isArticleDateValid(N.publishDate,q)
})
};
K.prototype.isArticleDateValid=function E(P,M){var O=new Date(),N=O.setMonth(O.getMonth()-M);
return new Date(P).getTime()>N
};
K.prototype.init=function H(){this.currentPage=1;
this.setFilteredArticles();
this.initPagination();
this.render()
};
K.prototype.setFilteredArticles=function F(){var M=this;
this.filteredArticles=this.articles.filter(function(N){return M.isInSelectedCategory(N)
})
};
K.prototype.setSelectedCategory=function C(){var M=this.$customSelect.find(p.selectedOption).val();
if(this.selectedCategory!=M){this.selectedCategory=M;
this.init()
}};
K.prototype.initPagination=function w(){var M=this.getPageNumber();
if(this.paginationObject){this.paginationObject.elNum=M;
this.paginationObject.currentEl=this.currentPage
}else{this.paginationObject=new c.Pagination(this.$pagination,M,this.currentPage)
}if(M>0){this.paginationObject.initElements();
this.bindPaginationUIEvents()
}else{this.paginationObject.destroy()
}};
K.prototype.getPageNumber=function x(){var M=this.filteredArticles.length,N=M<this.articlesPerPage.first?"first":"any";
return Math.ceil((M-this.articlesPerPage.first)/this.articlesPerPage[N])+1
};
K.prototype.bindUiEvents=function B(){var M=this;
l(window).on("resize",function(){if(M.paginationObject.getPaginationControls()){M.bindPaginationUIEvents()
}})
};
K.prototype.bindPaginationUIEvents=function D(){var M=this;
this.paginationObject.getPaginationControls().on("click",function(N){M.currentPage=l(N.target).data(m.page);
M.render();
M.scrollToTop();
M.bindPaginationUIEvents()
})
};
K.prototype.scrollToTop=function J(){window.scrollTo(0,this.$el.offset().top-g())
};
K.prototype.render=function L(){var N=this;
var M=this.currentPage===1;
this.$wrapper.empty();
this.getArticleRows().forEach(function(Q,O){var P=M&&N.articleRowsMap.first[O]===2?h.featured:h.common;
N.$wrapper.mustache(o.articles,{articles:Q,classes:P})
})
};
K.prototype.getArticleRows=function u(){var O=this.currentPage===1?"first":"any",Q=this.articlesPerPage.first+this.articlesPerPage[O]*(this.currentPage-2),N=Q+this.articlesPerPage[O],M=this.filteredArticles.filter(function(S,R){return R>=Q&&R<N
}),P=[];
this.articleRowsMap[O].map(function(R){P.push(M.filter(function(T,S){return S<R
}));
M.splice(0,R)
});
return P
};
K.prototype.setMustacheTemplates=function I(){l.Mustache.add(o.articles,this.$el.find("."+o.articles).html())
};
K.prototype.isInSelectedCategory=function y(M){return M.categories.indexOf(this.selectedCategory)!=-1&&M.categories.length||this.selectedCategory===j
};
return K
}();
function g(){return l(p.pageHeader).height()
}var i={name:"recent-articles",selector:p.recentArticles,init:function r(t){return new n(t)
}};
l(window).on("load",function(){return HSBC_utils.registerComponent(i)
})
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(i){var h={introSection:".intro-section",heroBannerWithSearch:".O-HEROBANWSRCH-RW-DEV",heroSearchBox:'input[type="search"]',clearCircle:".A-BTNCLR-RW-DEV"},g={hasHeroWithSearch:"hero-with-search"};
var e=function(){function l(q){c(this,l);
this.$el=i(q);
this.$introSection=this.$el.parents(h.introSection);
this.$heroSearchBox=this.$el.find(h.heroSearchBox);
this.$clearCircle=this.$el.find(h.clearCircle);
this.bindUIEvents();
this.manageClearCircleVisibility();
this.updateIntroSection()
}l.prototype.bindUIEvents=function o(){var q=this;
this.$clearCircle.on("click",function(){q.clearHeroSearchBox();
q.manageClearCircleVisibility()
});
this.$heroSearchBox.on("input",function(){return q.manageClearCircleVisibility()
});
i(window).on("load",function(){return q.manageClearCircleVisibility()
})
};
l.prototype.clearHeroSearchBox=function p(){this.$heroSearchBox.val("").focus()
};
l.prototype.isSearchBoxEmpty=function k(){return !this.$heroSearchBox.val().length
};
l.prototype.manageClearCircleVisibility=function n(){var q=this.isSearchBoxEmpty()?"none":"inline-block";
this.$clearCircle.css("display",q)
};
l.prototype.updateIntroSection=function m(){this.$introSection.addClass(g.hasHeroWithSearch)
};
return l
}();
var f={name:"herowithseach",selector:h.heroBannerWithSearch,init:function j(k){return new e(k)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(d,e,c){var g=c(14);
var h=c(58);
var a=c(26);
var b=c(2);
var i=c(57);
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}(function(o){var r={results:".search-results",pagination:".generic-pagination",dataConfig:"[data-config]",dataServerErrorPageUrl:"[data-server-error-page-url]",noResults:".no-results",spellingSuggestionLink:".search-spelling-suggestion-link",spellingSuggestionContainer:".search-spelling-suggestion-container"},n={hidden:"hidden"},p={page:"page",config:"config",serverErrorPageUrl:"server-error-page-url"},m={resultsPageSize:8,moduleName:"searchRender",moduleSelector:".O-SRCHRES-RW-RBWM",moduleSearchField:".O-HEROBANWSRCH-RW-DEV"},q={spinner:"search-spinner",resultsNumber:"search-results-number",result:"search-result",noResults:"search-no-results",spellingSuggestion:"search-spelling-suggestion"},j={query:"q",tags:"tags"};
var l=function(){function O(Q,S){var R=this;
f(this,O);
this.$el=o(Q);
this.queryStringState=new i.QueryStringState(j,this.buildSearchName.bind(this),this.updateSearchState.bind(this));
this.searchField=new h.SearchField(o(m.moduleSearchField),this.onSubmit.bind(this),this.queryStringState.currentState.query);
this.config=this.$el.find(r.dataConfig).data(p.config);
this.serverErrorPageUrl=this.$el.find(r.dataServerErrorPageUrl).data(p.serverErrorPageUrl);
this.$pagination=this.$el.find(r.pagination);
this.$results=this.$el.find(r.results);
this.resultsPageSize=S||m.resultsPageSize;
this.$spellingSuggestionContainer=this.$el.find(r.spellingSuggestionContainer);
this.searchService=new g.SearchService(this.config,this.resultsPageSize);
o(window).on("load",function(){R.setMustacheTemplates();
R.displayPageResult(R.queryStringState.currentState.query,1)
})
}O.prototype.buildSearchName=function P(R,Q){return"Search: "+Q
};
O.prototype.updateSearchState=function M(Q){this.displayPageResult(Q.query,Q.page||0);
this.searchField.setSearchField(Q.query)
};
O.prototype.setMustacheTemplates=function I(){var Q=this;
o.Mustache.options.warnOnMissingTemplates=true;
Object.keys(q).forEach(function(R){var S=q[R],T=Q.$el.find("."+S);
o.Mustache.add(S,T.html())
})
};
O.prototype.displaySpinner=function v(){this.$results.empty().mustache(q.spinner,{})
};
O.prototype.displayPageResult=function A(S,Q){var R=this;
var T={page:Q||1,query:S,requiredfields:this.getRequiredFields()};
this.searchField.updateTags(T.requiredfields);
if(T.query){this.displaySpinner(T.query);
this.searchService.getSearchResults(T).done(function(V){var U=V.results.numberOfResults;
R.renderSpellingSuggestion(V.results);
if(U==0){R.renderNoResults({query:V.results.queryString})
}else{R.renderSearchResults(V);
if(U>R.resultsPageSize){R.renderSearchPagination(V).done(function(X){return R.displayPageResult(S,X.page)
})
}var W=R.$results.find("a").attr("tabindex",1).first();
W.focus()
}R.trackSearchEvent(V);
R.rememberSuggestionOrEmpty(window.sessionStorage,R.suggestionWordOrEmpty(V));
R.searchField.setTrigger("free text")
}).fail(function(){return R.redirectToServerErrorPage()
})
}};
O.prototype.trackSearchEvent=function x(S){var R=S.results.numberOfResults;
var Q=this.countOfSearchesPerformed(window.sessionStorage);
this.setCountOfSearchesPerformed(window.sessionStorage,++Q);
b.TealiumUtils.trackEvent({internal_search_term:S.results.queryString,internal_search_results:R>0?R:"0",previous_page:this.previousPageOrRollBackToCurrent(window.document),internal_search_null:this.emptyResultSetAndNoSuggestions(S)?1:0,internal_search:1,internal_searches_pagination:{perPage:m.resultsPageSize,pages:this.countOfPages(S.results.numberOfResults,m.resultsPageSize)},internal_searches:Q,internal_search_output:this.rememberedSuggestionOrEmpty(window.sessionStorage)})
};
O.prototype.rememberSuggestionOrEmpty=function J(R,Q){return R.setItem(m.spellingSuggestion,Q)
};
O.prototype.rememberedSuggestionOrEmpty=function C(Q){return Q.getItem(m.spellingSuggestion)||""
};
O.prototype.suggestionWordOrEmpty=function L(Q){return Q&&Q.results&&Q.results.suggestion?Q.results.suggestion:""
};
O.prototype.previousPageOrRollBackToCurrent=function F(Q){return Q.referrer||Q.URL
};
O.prototype.emptyResultSetAndNoSuggestions=function B(Q){return !(Q&&Q.results&&(Q.results.numberOfResults||Q.results.suggestion))
};
O.prototype.setCountOfSearchesPerformed=function E(R,Q){R.setItem(m.moduleName,Q)
};
O.prototype.countOfSearchesPerformed=function y(R){var Q=R.getItem(m.moduleName);
return Q>0?Q:0
};
O.prototype.redirectToServerErrorPage=function G(){document.location=this.serverErrorPageUrl
};
O.prototype.renderNoResults=function z(Q){this.$results.empty().mustache(q.noResults,Q);
this.$results.find(r.noResults).removeClass(n.hidden);
if(this.pagination){this.pagination.destroy()
}};
O.prototype.renderSpellingSuggestion=function N(R){var Q=this;
this.$spellingSuggestionContainer.empty();
if(R.suggestion){this.$spellingSuggestionContainer.mustache(q.spellingSuggestion,R);
this.$el.find(r.spellingSuggestionLink).on("click",function(S){Q.searchField.setSearchField(R.suggestion);
Q.searchField.setTrigger("auto");
Q.searchField.$form.trigger("submit");
S.preventDefault();
Q.$spellingSuggestionContainer.empty()
})
}};
O.prototype.renderSearchResults=function w(R){var Q=this;
this.$results.empty().mustache(q.resultsNumber,{count:R.results.numberOfResults});
o(R.results.rows).each(function(S,T){Q.$results.mustache(q.result,{url:T.url,title:T.title,screenReaderText:T.screenReaderText||"",summary:T.summary})
})
};
O.prototype.renderSearchPagination=function D(S){var Q=this.countOfPages(S.results.numberOfResults,m.resultsPageSize),R=S.params.page||1,T=o.Deferred();
this.pagination=new a.Pagination(this.$pagination,Q,R);
this.pagination.getPaginationControls().on("click",function(U){T.resolve(o(U.target).data(S.page));
U.preventDefault()
});
return T.promise()
};
O.prototype.countOfPages=function u(Q,R){return Math.ceil(Q/R)
};
O.prototype.onSubmit=function H(Q){this.queryStringState.updateParameter("q",Q);
this.displayPageResult(Q,1)
};
O.prototype.getTags=function t(){return this.queryStringState.currentState.tags
};
O.prototype.getRequiredFields=function K(){var Q=this.getTags();
if(Q){return"tag:"+Q
}return undefined
};
return O
}();
var k={name:"search-render",selector:".O-SRCHRES-RW-RBWM",init:function s(t){return new l(t)
}};
HSBC_utils.registerComponent(k)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(g){var f={simpCon3ColKey:".O-SIMPCNT3COLKEY-RW-RBWM"};
var i=function(){function n(o){c(this,n);
this.$el=g(o);
this.$columnWrapper=this.$el.find(".module-wrapper");
if(HSBC_utils.matchMedia.desktop){this.equalizeColumnHeight()
}this.bindUIEvents()
}n.prototype.equalizeColumnHeight=function m(){var o=this.$columnWrapper,p=Math.max.apply(null,o.map(function(q,r){return g(r).height()
}).get());
o.each(function(q,r){var s=g(r);
s.height(p)
})
};
n.prototype.resetInlineHeights=function j(o){o.each(function(p,r){var q=g(r);
q.height("")
})
};
n.prototype.resize=function k(){var o=this.$columnWrapper;
if(!HSBC_utils.matchMedia.desktop){this.resetInlineHeights(o)
}else{this.equalizeColumnHeight()
}};
n.prototype.bindUIEvents=function l(){var p=this;
g(window).on({resize:function o(){p.resize()
}})
};
return n
}();
var e={name:"simpleContent3ColumnKeyLine",selector:f.simpCon3ColKey,init:function h(j){return new i(j)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
}),(function(d,c,f){var b=f(60);
var a=f(1);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}(function(l){var h={activeClass:"is-active",hidden:"hidden"},k={pageHeader:".header",tabTitleItemLink:".tab-widget-link",tabTitleItemClass:".tab-widget-item",tabContent:".tab-widget-tab-content",tabsContainer:".tab-widget-tabs",tabListContainer:".tab-widget-list"},m=10;
var g=false;
var i=function(){function r(w){e(this,r);
this.$el=l(w);
this.$tabsMenuItem=this.$el.find(k.tabTitleItemClass);
this.$tabsMenuLink=this.$el.find(k.tabTitleItemLink);
this.$tabsContent=this.$el.find(k.tabContent);
this.$tabsContainer=this.$el.find(k.tabsContainer);
this.$elementsWithInlineStyleHeight=this.$tabsContent.find("[style*='height']");
this.$tabListContainer=this.$el.find(k.tabListContainer);
this.smartTabsAlly=new b.SmartTabsAlly(this);
this.bindUIEvents();
this.setUpAnchors();
this.setHeight(this.$elementsWithInlineStyleHeight);
this.tealiumObserver=new a.TealiumObserver(this.$tabsMenuLink,{event_type:"click",event_category:"content",event_action:"tab",event_content:function x(y){return decodeURI(l(y).attr("href")||l(y).parents(".A-EXPCNT-RW-RBWM").siblings(".anchor").attr("id")).replace("#","")
}})
}r.prototype.setUpAnchors=function t(){var A=this.$tabsMenuItem.find('a[data-target="'+window.location.hash+'"]');
if(A.length){var z=this.$el,w=l(k.pageHeader).first(),y=l.inArray(w.css("position"),["fixed","absolute"]),x=Math.round((z?z.offset().top:0)-(w&&y!==-1?w.outerHeight():0)-m);
this.togglePanel(A);
if(g){g=false
}else{if(document.readyState==="complete"){window.scrollTo(0,x)
}else{l(document).ready(function(){return window.scrollTo(0,x)
})
}}}};
r.prototype.bindUIEvents=function s(){var w=this;
this.smartTabsAlly.bindUIEvents();
this.$tabsMenuItem.find("a").on("click",function(y){var x=l(y.target),z=x.attr("data-target");
w.hashChange(z);
x.focus();
y.preventDefault()
});
l(window).on("hashchange",function(x){w.setUpAnchors();
x.preventDefault()
}).on("resize",function(){return w.setHeight(w.$elementsWithInlineStyleHeight)
})
};
r.prototype.hashChange=function q(x){var w=l(x);
x=x.replace("#","");
w.attr("id","");
document.location.hash=x.length?x:"";
w.attr("id",x);
g=true
};
r.prototype.togglePanel=function u(w){var y=w.attr("data-target"),x=this.$el.find(y);
if(!w.hasClass(h.activeClass)){this.cleanElements();
this.setSelectedElement(w,x)
}};
r.prototype.cleanElements=function v(){this.$tabsMenuLink.removeClass(h.activeClass);
this.$tabsContent.addClass(h.hidden)
};
r.prototype.setSelectedElement=function p(x,w){x.addClass(h.activeClass);
w.removeClass(h.hidden)
};
r.prototype.setHeight=function o(w){w.height("auto")
};
return r
}();
var j={name:"Smart Horizontal Tabs",selector:".O-HRZTAB-RW-RBWM",init:function n(o){return new i(o)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(){var i=Bootstrap.jQuery,h={masterTile:".O-MASTERTILE-DEV",img:"img"},g={edge11:"edge-11",ie10:"ie-10"},j=i(window),e=i("html");
var f=function(){function k(p){c(this,k);
if(this.isEdge11OrIE10()){this.$el=i(p);
this.updateAllImagesHeight();
this.updateAllImagesHeightOnResize()
}}k.prototype.isEdge11OrIE10=function n(){return e.hasClass(g.edge11)||e.hasClass(g.ie10)
};
k.prototype.updateAllImagesHeight=function m(){var p=this;
this.$el.find(h.img).each(function(r,q){p.updateImageHeight(q)
})
};
k.prototype.updateAllImagesHeightOnResize=function l(){j.on("resize",this.updateAllImagesHeight.bind(this))
};
k.prototype.updateImageHeight=function o(p){var q=i(p);
q.height("").height(q.height())
};
return k
}();
i(window).on("load",function(){return HSBC_utils.registerComponent({name:"mastertile-iefix",selector:h.masterTile,init:function k(l){return new f(l)
}})
})
})()
}),(function(b,a,c){(function(d){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(i){var h={guideContainerForm:".radio-form #guideContainerForm",amountErr:{yes:'.amountError > .XfaCheckBox[data-id="1"] input',no:'.amountError > .XfaCheckBox[data-id="2"] input',inf:"#guideContainer-rootPanel-informationBanner___guide-item"},stolen:{yes:'.stolen > .XfaCheckBox[data-id="1"] input',no:'.stolen > .XfaCheckBox[data-id="2"] input',inf:"#guideContainer-rootPanel-columncontrol___guide-item, #guideContainer-rootPanel-richtext_cardstolen___guide-item"},hsbcAtm:{yes:'.hsbcATM > .XfaCheckBox[data-id="1"] input',no:'.hsbcATM > .XfaCheckBox[data-id="2"] input',atmIdField:"#guideContainer-rootPanel-guidetextbox_atmId___guide-item",financialInstField:"#guideContainer-rootPanel-guidetextbox_financialInstitution___guide-item",atmIdExpander:"#guideContainer-rootPanel-expander___guide-item",atmLocationHeading:"#guideContainer-rootPanel-heading___guide-item",streetAddressField:"#guideContainer-rootPanel-guidetextbox_streetAddress___guide-item",cityField:"#guideContainer-rootPanel-guidetextbox_city___guide-item",stateField:"#guideContainer-rootPanel-guidedropdownlist_state___guide-item",countryField:"#guideContainer-rootPanel-guidedropdownlist_country___guide-item",sequenceNumberField:"#guideContainer-rootPanel-guidenumericbox_sequence___guide-item",sequenceNumberExpander:"#guideContainer-rootPanel-expander_sequence___guide-item"},depositOrWithdrawal:{deposit:'.operation > .XfaCheckBox[data-id="1"] input',withdrawal:'.operation > .XfaCheckBox[data-id="2"] input',section:"#guideContainer-rootPanel-radiobutton_operation___guide-item",withdrawalAmountField:"#guideContainer-rootPanel-guidenumericbox_withdrawalAmount___guide-item",dispensedAmountField:"#guideContainer-rootPanel-guidenumericbox_dispensedAmount___guide-item",cashOrCheckSection:"#guideContainer-rootPanel-radiobutton_deposit___guide-item",depositAmountField:"#guideContainer-rootPanel-guidenumericbox_depositAmount___guide-item",creditAmountField:"#guideContainer-rootPanel-guidenumericbox_creditAmoount___guide-item"},time:{container:".time-select",hour:".hour",minute:".minute",period:".period",inputName:"time"}};
var j=void 0,m=void 0,g=void 0,f=void 0;
var l=function(){function p(B){e(this,p);
this.$el=i(B);
this.$amountErrorYesButton=this.$el.find(h.amountErr.yes);
this.$amountErrorNoButton=this.$el.find(h.amountErr.no);
this.$amountErrorInf=this.$el.find(h.amountErr.inf);
this.$stolenYesButton=this.$el.find(h.stolen.yes);
this.$stolenNoButton=this.$el.find(h.stolen.no);
this.$stolenInf=this.$el.find(h.stolen.inf);
this.$hsbcAtmYesButton=this.$el.find(h.hsbcAtm.yes);
this.$hsbcAtmNoButton=this.$el.find(h.hsbcAtm.no);
this.$atmIdField=this.$el.find(h.hsbcAtm.atmIdField);
this.$financialInstField=this.$el.find(h.hsbcAtm.financialInstField);
this.$atmIdExpander=this.$el.find(h.hsbcAtm.atmIdExpander);
this.$atmLocationHeading=this.$el.find(h.hsbcAtm.atmLocationHeading);
this.$streetAddressField=this.$el.find(h.hsbcAtm.streetAddressField);
this.$cityField=this.$el.find(h.hsbcAtm.cityField);
this.$stateField=this.$el.find(h.hsbcAtm.stateField);
this.$countryField=this.$el.find(h.hsbcAtm.countryField);
this.$sequenceNumberField=this.$el.find(h.hsbcAtm.sequenceNumberField);
this.$sequenceNumberExpander=this.$el.find(h.hsbcAtm.sequenceNumberExpander);
this.$cashOrCheckSection=this.$el.find(h.depositOrWithdrawal.cashOrCheckSection);
this.$depositAmountField=this.$el.find(h.depositOrWithdrawal.depositAmountField);
this.$creditAmountField=this.$el.find(h.depositOrWithdrawal.creditAmountField);
this.$depositButton=this.$el.find(h.depositOrWithdrawal.deposit);
this.$withdrawalButton=this.$el.find(h.depositOrWithdrawal.withdrawal);
this.$depositOrWithdrawalSection=this.$el.find(h.depositOrWithdrawal.section);
this.$withdrawalAmountField=this.$el.find(h.depositOrWithdrawal.withdrawalAmountField);
this.$dispensedAmountField=this.$el.find(h.depositOrWithdrawal.dispensedAmountField);
var A=this.$el.find(h.time.container);
this.$hourSelect=A.find(h.time.hour);
this.$minuteSelect=A.find(h.time.minute);
this.$periodSelect=A.find(h.time.period);
this.timeSomExpression=guidelib.runtime[h.time.inputName].somExpression;
this.bindUIEvents()
}p.prototype.showEl=function u(A){A.css("display","block")
};
p.prototype.hideEl=function z(A){A.css("display","none")
};
p.prototype.isRadioButtonChecked=function o(A){return A.attr("checked")==="checked"
};
p.prototype.isStolen=function s(){if(this.isRadioButtonChecked(this.$stolenYesButton)){j=true
}else{if(this.isRadioButtonChecked(this.$stolenNoButton)){j=false
}}};
p.prototype.isAmountError=function x(){if(this.isRadioButtonChecked(this.$amountErrorYesButton)){m=true
}else{if(this.isRadioButtonChecked(this.$amountErrorNoButton)){m=false
}}};
p.prototype.isHsbcAtm=function y(){if(this.isRadioButtonChecked(this.$hsbcAtmYesButton)){g=true
}else{if(this.isRadioButtonChecked(this.$hsbcAtmNoButton)){g=false
}}};
p.prototype.isDeposit=function t(){if(this.isRadioButtonChecked(this.$depositButton)){f=true
}else{if(this.isRadioButtonChecked(this.$withdrawalButton)){f=false
}}};
p.prototype.displayInformationWhenStolen=function w(){if(j){this.showEl(this.$stolenInf)
}else{if(!j){this.hideEl(this.$stolenInf)
}}};
p.prototype.displayInformationWhenAmountError=function q(){if(j===false&&m===false){this.showEl(this.$amountErrorInf)
}else{this.hideEl(this.$amountErrorInf)
}};
p.prototype.displayInformationWhenHsbcAtm=function v(){if(g){this.hideEl(this.$financialInstField);
this.showEl(this.$atmIdField);
this.showEl(this.$atmIdExpander);
this.showEl(this.$atmLocationHeading);
this.showEl(this.$streetAddressField);
this.showEl(this.$cityField);
this.showEl(this.$stateField);
this.showEl(this.$countryField);
this.showEl(this.$sequenceNumberField);
this.showEl(this.$sequenceNumberExpander)
}else{this.hideEl(this.$atmIdField);
this.hideEl(this.$atmIdExpander);
this.hideEl(this.$sequenceNumberField);
this.hideEl(this.$sequenceNumberExpander);
this.showEl(this.$financialInstField);
this.showEl(this.$atmLocationHeading);
this.showEl(this.$streetAddressField);
this.showEl(this.$cityField);
this.showEl(this.$stateField);
this.showEl(this.$countryField)
}this.displayInformationWhenDepositOrWithdrawal()
};
p.prototype.displayInformationWhenDepositOrWithdrawal=function r(){this.hideEl(this.$depositOrWithdrawalSection);
this.hideEl(this.$cashOrCheckSection);
this.hideEl(this.$depositAmountField);
this.hideEl(this.$creditAmountField);
this.hideEl(this.$withdrawalAmountField);
this.hideEl(this.$dispensedAmountField);
if(g){this.showEl(this.$depositOrWithdrawalSection);
if(f){this.showEl(this.$cashOrCheckSection);
this.showEl(this.$depositAmountField);
this.showEl(this.$creditAmountField)
}else{if(f!==undefined){this.showEl(this.$withdrawalAmountField);
this.showEl(this.$dispensedAmountField)
}}}else{if(g!==undefined){this.showEl(this.$withdrawalAmountField);
this.showEl(this.$dispensedAmountField)
}}};
p.prototype.bindUIEvents=function n(){var B=this;
this.$stolenYesButton.change(function(){B.isStolen();
B.displayInformationWhenStolen();
B.displayInformationWhenAmountError()
});
this.$stolenNoButton.change(function(){B.isStolen();
B.displayInformationWhenStolen();
B.displayInformationWhenAmountError()
});
this.$amountErrorYesButton.change(function(){B.isAmountError();
B.displayInformationWhenAmountError()
});
this.$amountErrorNoButton.change(function(){B.isAmountError();
B.displayInformationWhenAmountError()
});
this.$hsbcAtmYesButton.change(function(){B.isHsbcAtm();
B.displayInformationWhenHsbcAtm()
});
this.$hsbcAtmNoButton.change(function(){B.isHsbcAtm();
B.displayInformationWhenHsbcAtm()
});
this.$depositButton.change(function(){B.isDeposit();
B.displayInformationWhenDepositOrWithdrawal()
});
this.$withdrawalButton.change(function(){B.isDeposit();
B.displayInformationWhenDepositOrWithdrawal()
});
var A=function A(){var C=B.$hourSelect.val(),F=B.$minuteSelect.val(),E=B.$periodSelect.val();
if(C&&F&&E){var D=C+":"+F+E;
guideBridge.setProperty([B.timeSomExpression],"value",[D])
}};
this.$hourSelect.change(A);
this.$minuteSelect.change(A);
this.$periodSelect.change(A)
};
return p
}();
d={name:"guideContainerForm",selector:h.guideContainerForm,init:function k(n){return new l(n)
}};
HSBC_utils.registerComponent(d)
})(Bootstrap.jQuery)
}.call(a,c(127)(b)))
}),(function(b,a){b.exports=function(c){if(!c.webpackPolyfill){c.deprecate=function(){};
c.paths=[];
if(!c.children){c.children=[]
}Object.defineProperty(c,"loaded",{enumerable:true,get:function(){return c.l
}});
Object.defineProperty(c,"id",{enumerable:true,get:function(){return c.i
}});
c.webpackPolyfill=1
}return c
}
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(g){var f={header:".header",exclude:".O-HRZTAB-RW-RBWM,.O-VRTTAB-RW-RBWM,.O-HRTAB-RW-RBWM",tabListClasses:".tab-widget-list",tabPanelClasses:".tab-widget-tabs",tabPanelContentClasses:".tab-widget-tab-content"},h=10;
var e=function(){function j(n){c(this,j);
this.$element=g(n);
this.bindUIEvents();
window.anchorsFuncionalityLoadedOnce=false
}j.prototype.bindUIEvents=function l(){var n=this;
g(window).on("load",function(o){if(!window.anchorsFuncionalityLoadedOnce){window.anchorsFuncionalityLoadedOnce=true;
n.checkAnchorRoots(o,window.location.hash)
}});
this.$element.on("click",function(o){return n.checkAnchorRoots(o)
})
};
j.prototype.scrollFire=function m(p){var o=g(f.header).first(),s=g(p),n=s.next().length===0?s:s.next(),r=g.inArray(o.css("position"),["fixed","absolute"]),t=Math.round((s&&s.offset()?s.offset().top:0)-(o&&r!==-1?o.outerHeight():0)-h),q=Math.round(g(window).scrollTop());
if(n.length===1&&q!==t){if(window.location.hash!==p){window.location.hash=p
}setTimeout(function(){g(window).scrollTop(t)
},10);
n.attr("tabindex",-1).focus()
}};
j.prototype.checkAnchorRoots=function k(n){var s=this;
var q=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;
var t="",u=false;
if(q!==null){t=q
}else{var o=g(n.target);
t=o.attr("href")||o.parent().attr("href")||o.closest("a").attr("href");
u=o.parents(f.tabListClasses).length>0
}if(!t||t==="#"){return
}var v=g(t).parent(f.tabPanelClasses).length>0,r=g(t).parents(f.tabPanelContentClasses),p=r.length>0;
if(p){var w=r[0].id;
n.preventDefault();
window.location.hash=w
}setTimeout(function(){if(!u){window.location.hash=t
}if(!v){n.preventDefault();
setTimeout(s.scrollFire(t),100)
}},0)
};
return j
}();
HSBC_utils.registerComponent({name:"anchor",selector:'a[href^="#"]',init:function i(j){return new e(j)
}})
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var g={backgroundImage:".background-image",imageData:".image-data"};
var e=function(){function j(l){c(this,j);
this.$el=h(l);
this.$imageData=this.$el.find(g.imageData);
this.imageLazyLoad()
}j.prototype.imageLazyLoad=function k(){var m=this;
var l=this.$imageData.attr("data-src");
h(window).on("load",function(){return m.$imageData.css("background-image",l)
})
};
return j
}();
function i(j){new e(j)
}var f={name:"Background Image",selector:g.backgroundImage,init:i};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(i){var h={brandBarFont16:".A-BBST16R-RW-ALL"},g={firefoxFix:"firefoxFix"};
var f=function(){function k(m){c(this,k);
this.$el=i(m);
this.$brandBarFont16=this.$el.find(h.brandBarFont16);
this.setClass()
}k.prototype.setClass=function l(){this.$brandBarFont16.addClass(g.firefoxFix)
};
return k
}();
var e={name:"brandBar",selector:".O-BRBAR-RW-RBWM",init:function j(k){return new f(k)
}};
if(HSBC_utils.isFirefox){HSBC_utils.registerComponent(e)
}})(Bootstrap.jQuery)
}),(function(d,c,f){var b=f(61);
var a=f(1);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}(function(j){var h={expanded:"expanded",wrapper:"A-WRAPPER-RW-ALL",notWrapper:"no-wrapper",smallExpander:"A-SMLEXP-RW-ALL"},o={AEMLayerChanged:"expander:AEMLayerChanged"},m={expander:".expander",expanded:".expanded",selectBar:".dropdown",wrapperDropdown:".wrapper-dropdown",collapsibleElement:".exp-content",expanderHeading:".dropdown-text",advancedExpander:".O-ADVEXP-RW-RBWM",accordion:".O-ACCRD-RW-RBWM",header:".header"},k=HSBC_utils.keyCodes;
var l=function(){function r(x){e(this,r);
this.$el=j(x);
this.$selectBar=this.$el.children(m.selectBar);
this.$collapsibleEl=this.$el.children(m.collapsibleElement);
this.$expanderHeading=this.$selectBar.children(m.expanderHeading);
this.$smallExpander=this.$el.hasClass(h.smallExpander);
this.isWrapper=this.$el.hasClass(h.wrapper);
var y=this.$el.find(m.expander),A=y.find(HSBC_utils.focusables.join());
this.$focusableNodes=this.$collapsibleEl.find(HSBC_utils.focusables.join()).not(A);
this.expanderAlly=new b.ExpanderAlly(this);
this.bindUiEvents();
this.setInitialState();
this.expanderAlly.setAccessibilityAttributes(this.isExpanded());
this.expanderAlly.removeScreenReaderText();
if(this.$el.parents(m.advancedExpander).length&&!this.$el.parents(m.accordion).length){this.tealiumObserver=new a.TealiumObserver(this.$selectBar,{event_type:"click",event_category:"content",event_action:"advance expander",event_content:function z(B){return j(B).closest(m.advancedExpander).children("div").children("div.anchor").attr("id")
}})
}}r.prototype.bindUiEvents=function u(){var x=this;
this.$selectBar.on("click",function(){return x.toggle()
}).on("keydown",function(z){var y=z.keyCode,B=y===k.ENTER,A=y===k.SPACE;
if(B||A){x.toggle()
}});
this.$el.on(o.AEMLayerChanged,function(){return x.setInitialState()
});
j(window).on("resize",function(){return x.expanderAlly.updateModulesAccessibility(x.isExpanded())
})
};
r.prototype.setInitialState=function q(){if(HSBC_utils.isEditMode()||this.$expanderHeading.hasClass(h.expanded)){this.expand()
}else{this.collapse()
}};
r.prototype.expand=function t(){this.$expanderHeading.addClass(h.expanded);
this.$collapsibleEl.addClass(h.expanded)
};
r.prototype.collapse=function w(){this.$expanderHeading.removeClass(h.expanded);
this.$collapsibleEl.removeClass(h.expanded)
};
r.prototype.isExpanded=function v(){return this.$collapsibleEl.hasClass(h.expanded)
};
r.prototype.toggle=function p(){var x=this;
if(this.isExpanded()){this.collapse()
}else{setTimeout(function(){var y=x.$expanderHeading.offset().top-j(m.header).height()-j(m.selectBar).height();
window.scroll(0,y)
},100);
this.expand();
this.$collapsibleEl.focus()
}this.styleSmallExpander();
this.expanderAlly.setAccessibilityAttributes(this.isExpanded())
};
r.prototype.styleSmallExpander=function s(){if(this.$smallExpander){var x=this.isExpanded()?"none":this.$selectBar.css("border");
this.$selectBar.css("border-bottom",x)
}};
return r
}();
function i(){j(m.expander).trigger(o.AEMLayerChanged)
}var g={name:"exp",selector:m.expander,switchToEditHandler:i,switchToPreviewHandler:i,init:function n(p){return new l(p)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(c,a,e){var b=e(62);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var g={nativeSelectClass:"native-select",customSelectButtonClass:"custom-select-button",customSelectIconClass:"custom-select-icon icon",customSelectTextClass:"custom-select-text",customSelectContainerClass:"custom-select-container",customSelectMenuContainerClass:"custom-select-menu-container",customSelectMenuItemClass:"custom-select-menu-item",customSelectMenuClass:"custom-select-menu",activeClass:"is-active",selectedClass:"selected",focusedClass:"focused",replacedClass:"replaced"};
var j=function(){function r(s){d(this,r);
this.$el=h(s);
this.isOpen=false;
this.id=this.$el.attr("id").replace(/select-/,"");
this.customSelectAlly=new b.CustomSelectAlly(this);
this.createCustomSelectElements();
this.buildCustomSelect();
this.updateSelectValue();
this.customSelectAlly.keyboardEvents();
this.bindUIEvents()
}r.prototype.createCustomSelectElements=function n(){this.$customSelectButton=h("<div>",{tabindex:"0",role:"combobox","class":g.customSelectButtonClass,"aria-expanded":"false","aria-autocomplete":"list","aria-readonly":"true","aria-labelledby":this.$el.data("label"),"aria-describedby":"select-text-"+this.id,"aria-activedescendant":"select-text-"+this.id,"aria-owns":g.customSelectMenuClass});
this.$customSelectContainer=h("<div>",{"class":g.customSelectContainerClass,tabindex:"-1"});
this.$customSelectIcon=h("<span>",{"class":g.customSelectIconClass});
this.$customSelectText=h("<span>",{"class":g.customSelectTextClass,id:"select-text-"+this.id,"aria-hidden":"true","aria-disabled":"true"});
this.$customSelectMenu=h("<ul>",{"class":g.customSelectMenuClass,"aria-hidden":"true",role:"listbox","aria-disabled":"false"})
};
r.prototype.buildCustomSelect=function q(){var s=this.$el.attr("class"),t=null;
this.$el.wrap(this.$customSelectContainer);
t=this.$el.closest("."+g.customSelectContainerClass);
this.$customSelectButton.insertAfter(this.$el);
this.$customSelectIcon.appendTo(this.$customSelectButton);
this.$customSelectText.appendTo(this.$customSelectButton);
this.$customSelectMenuContainer=h("<div>").append(this.$customSelectMenu);
this.$customSelectMenuContainer.addClass(g.customSelectMenuContainerClass);
this.$customSelectMenuContainer.insertAfter(this.$customSelectButton);
t.addClass(s);
this.$el.addClass(g.replacedClass);
this.renderMenu()
};
r.prototype.renderMenu=function p(){var u=this;
var t=this.$el.find("option"),s=this.$el.prop("selectedIndex");
h.each(t,function(w,x){var y=h(x),v=h("<li>",{text:y.text(),tabindex:-1,role:"option","aria-selected":"false","aria-disabled":"false"});
v.addClass(g.customSelectMenuItemClass);
v.appendTo(u.$customSelectMenu);
if(w===s){v.addClass(g.selectedClass)
}})
};
r.prototype.updateSelectValue=function k(v){var s=this.$el.find("option"),w=this.$el.closest("."+g.customSelectContainerClass),t=null,u=h(v),x=w.find("."+g.customSelectMenuItemClass);
if(v!==undefined){h.each(x,function(z,A){var y=h(A);
y.removeClass(g.selectedClass);
y.removeClass(g.focusedClass);
u.attr("aria-selected",false)
});
u.addClass(g.selectedClass);
u.addClass(g.focusedClass);
u.attr("aria-selected",true);
h.each(s,function(y,z){var A=h(z);
if(A.text()===u.text()){A.prop("selected",true)
}else{A.prop("selected",false)
}})
}t=w.find("option:selected",this.$el).text();
w.find("."+g.customSelectTextClass).text(t)
};
r.prototype.toggleCustomSelectMenu=function m(){var x=this.$el.closest("."+g.customSelectContainerClass),u=x.find("."+g.customSelectMenuContainerClass),t=x.find("."+g.customSelectMenuClass),v=t.find("."+g.customSelectMenuItemClass),s=x.find("."+g.customSelectButtonClass),w=s.find("."+g.customSelectTextClass).text();
if(u.hasClass(g.activeClass)){s.attr("aria-expanded","false");
t.attr("aria-hidden","true");
this.isOpen=false;
v.attr("tabindex","-1");
this.$customSelectButton.focus()
}else{s.attr("aria-expanded","true");
t.attr("aria-hidden","false");
this.isOpen=true;
v.attr("tabindex","0");
h.each(v,function(z,A){var y=h(A);
if(y.text()===w){y.addClass(g.focusedClass);
y.focus()
}else{y.removeClass(g.focusedClass)
}})
}u.toggleClass(g.activeClass);
this.$el.change()
};
r.prototype.focusSelectMenuItem=function o(v){var t=null,u=this.$el.closest("."+g.customSelectContainerClass).find("."+g.customSelectMenuItemClass),s=u.filter("."+g.focusedClass);
if(v==="next"){t=s.next()
}else{if(v==="prev"){t=s.prev()
}}if(t.length){s.removeClass(g.focusedClass);
t.addClass(g.focusedClass);
t.focus();
if(!this.isOpen){this.updateSelectValue(t)
}}};
r.prototype.bindUIEvents=function l(){var u=this;
var t=this.$el,w=this.$el.not(".disabled, .error").closest("."+g.customSelectContainerClass),s=w.find("."+g.customSelectButtonClass),v=w.find("."+g.customSelectMenuItemClass);
t.on("change",function(){return u.updateSelectValue()
});
s.on("click",function(){return u.toggleCustomSelectMenu()
});
v.on("click",function(x){u.updateSelectValue(x.target);
u.toggleCustomSelectMenu()
});
h(document).on("click",function(x){if(!u.$customSelectButton.is(x.target)&&!u.$customSelectMenuContainer.is(x.target)&&u.$customSelectButton.has(x.target).length===0&&u.$customSelectMenuContainer.has(x.target).length===0&&u.isOpen){u.toggleCustomSelectMenu()
}})
};
return r
}();
var f={name:"fssingsel",selector:"select.A-FSSINGSEL-RW-ALL",init:function i(k){return new j(k)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,b,e){var a=e(63);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(j){var h={link:"A-MODLNK-RW-ALL",modal:"A-MOD-RW-ALL",modalOverlay:"modal-overlay",closeTrigger:"close-trigger",isVisible:"is-visible",hide:"hidden",modalAnnouncement:"modal-announcement-sr-text"},g={animation:200},i=j("body");
var k=function(){function u(x){d(this,u);
this.$link=j(x);
this.$modal=null;
this.bindUIEvents();
this.allyModule=new a.ModalAlly(this)
}u.prototype.bindUIEvents=function o(){var x=this;
this.$link.on("click",function(y){return x.linkClickHandler(y)
});
this.$link.on("modal:switchedToEdit",function(y){return x.close()
})
};
u.prototype.linkClickHandler=function w(x){x.preventDefault();
if(!HSBC_utils.isEditMode()){if(!this.$modal){this.getMarkup()
}else{this.open()
}}};
u.prototype.getMarkup=function t(){var z=this;
var y=this.$link.attr("href");
if(!y){return
}j.ajax({type:"GET",dataType:"HTML",url:y,success:function A(B){z.setUpModalWindow(B);
z.open()
},error:function x(B){return console.error(B)
}})
};
u.prototype.open=function s(){var x=this.$closeTriggers.first();
this.$modal.addClass(h.isVisible).siblings().attr("aria-hidden","true");
setTimeout(function(){return x.focus()
},g.animation)
};
u.prototype.close=function v(){if(this.$modal){var x=this.$modal.find("."+h.modalAnnouncement);
x.removeClass(h.hide);
this.$modal.removeClass(h.isVisible).siblings().removeAttr("aria-hidden")
}this.$link.focus()
};
u.prototype.setUpModalWindow=function p(y){var x=j(y).filter("."+h.modalOverlay);
x.removeClass(h.isVisible);
i.append(x);
this.$modal=i.children().last("."+h.modalOverlay);
this.cacheModalElements();
this.lateBindUIEvents()
};
u.prototype.cacheModalElements=function q(){this.$closeTriggers=this.$modal.find("."+h.closeTrigger)
};
u.prototype.lateBindUIEvents=function r(){var x=this;
this.$closeTriggers.on("click",function(y){return x.close()
});
this.$modal.on("click",function(z){var y=j(z.target);
if(!l(y)&&!y.hasClass(h.modal)){x.close()
}});
this.allyModule.bindUIEvents()
};
return u
}();
function l(o){return o.parents("."+h.modal).length
}function m(){j("."+h.link).trigger("modal:switchedToEdit")
}var f={name:"modal",selector:".A-MODLNK-RW-ALL[href*='/configuration/modals/']",init:function n(o){return new k(o)
},switchToEditHandler:m};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,a,e){var c=e(135);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var n={activeClass:"is-active",expandedClass:"is-expanded",selectedClass:"is-selected",onTop:"on-top"},k={tabTitleItemClass:".tab-title-item",tabPanelItemClass:".tab-panel",pageHeader:".header",tabsMenu:".tabs",tabsContent:".tabs-content",simpleTable:".M-SMPTBL-RW-RBWM",calculatorLabelLeft:".heading-left",calculatorLabelRight:".heading-right"},i={tabSwitched:"tabs:tabSwitched"};
var l=false;
var f=function(){function p(y){d(this,p);
this.$el=h(y);
this.$tabsMenu=this.$el.find(k.tabsMenu);
this.$tabsContent=this.$el.find(k.tabsContent);
this.$tabs=this.$tabsMenu.find(k.tabTitleItemClass);
this.$tabsLinks=this.$tabs.find("a");
this.$panels=this.$tabsContent.find(k.tabPanelItemClass);
this.$activePanel=this.$tabsContent.find("."+n.activeClass);
this.$simpleTables=this.$tabsContent.find(k.simpleTable);
this.bindUIEvents();
this.ally=new c.TabsAlly(this);
this.setUpAnchors()
}p.prototype.setUpAnchors=function s(){var A=this.$tabsMenu.find('a[data-target="'+window.location.hash+'"]');
if(A.length){var y=h(k.pageHeader).height(),z=this.$el.offset().top-y;
this.togglePanel(A);
if(l){l=false
}else{if(document.readyState==="complete"){window.scrollTo(0,z)
}else{h(document).ready(function(){return window.scrollTo(0,z)
})
}}}};
p.prototype.bindUIEvents=function o(){var y=this;
this.$tabsMenu.find("a").on("click",function(z){return y.tabsMenuClickHandler(z)
});
h(window).on("hashchange",function(z){y.setUpAnchors();
y.ally.setAriaSelectedTags();
z.preventDefault()
})
};
p.prototype.tabsMenuClickHandler=function q(z){var y=h(z.target);
this.togglePanel(y);
this.tabsMenuEvents(y);
this.setEqualHeightsOfLabelsInChinaCalculator();
this.$simpleTables.trigger(i.tabSwitched);
z.preventDefault()
};
p.prototype.tabsMenuEvents=function r(z){var A=this.$tabsContent.find("."+n.activeClass),y=A.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
y.attr("tabindex",0);
this.focusWithoutScrolling(y.first());
this.ally.setTabIndexesOnFocusLeave();
j(z.attr("data-target"))
};
p.prototype.togglePanel=function w(y){var z=y.attr("data-target").replace("#","#panel-"),B=this.$tabsContent.find(z),A=y.parent();
if(!A.hasClass(n.activeClass)){this.cleanElements();
p.setSelectedElement(A,B);
this.ally.setAriaSelectedTags()
}};
p.prototype.cleanElements=function t(){this.$panels.removeClass(n.activeClass);
this.$tabs.removeClass(n.activeClass+" "+n.selectedClass)
};
p.setSelectedElement=function u(y,z){z.addClass(n.activeClass);
y.addClass(n.activeClass)
};
p.prototype.focusWithoutScrolling=function x(A){var C=document.documentElement,z=window.pageXOffset!==undefined?window.pageXOffset:C.scrollLeft,B=window.pageYOffset!==undefined?window.pageYOffset:C.scrollTop;
A.focus();
window.scrollTo(z,B)
};
p.prototype.setEqualHeightsOfLabelsInChinaCalculator=function v(){var A=this.$tabsContent.find("."+n.activeClass),y=A.find(k.calculatorLabelLeft),z=A.find(k.calculatorLabelRight);
y.height("auto");
z.height("auto");
if(!HSBC_utils.matchMedia.mobile){var C=[y,z],D=[y.outerHeight(),z.outerHeight()],B=Math.max.apply(Math,D);
C.forEach(function(E){return E.outerHeight(B)
})
}};
return p
}();
function j(p){var o=h(p);
p=p.replace("#","");
o.attr("id","");
document.location.hash=p.length?p:"";
o.attr("id",p);
l=true
}var g={name:"tabs-tablet-desktop",selector:".generic-tabs.hide-on-mobile",init:function m(o){return new f(o)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(d,b,h){b.__esModule=true;
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var f=Bootstrap.jQuery,c=HSBC_utils.keyCodes,a={activeClass:"is-active"};
var e=b.TabsAlly=function(){function l(o){g(this,l);
this.$el=o.$el;
this.$tabsMenu=o.$tabsMenu;
this.$tabsContent=o.$tabsContent;
this.$tabsLinks=o.$tabsLinks;
this.$panelFocusables=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
this.context=o;
this.setAriaSelectedTags();
this.bindUIEvents()
}l.prototype.bindUIEvents=function j(){var p=this;
var o=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
o.on("keydown",function(q){return p.tabsContentKeyEvents(q)
});
this.$tabsMenu.find("a").on("keydown",function(q){return p.tabsMenuKeyHandler(q)
});
this.$tabsLinks.on("focus",function(){p.$tabsContent.attr("tabindex",0);
p.$tabsLinks.attr("tabindex",0)
})
};
l.prototype.tabsMenuKeyHandler=function k(t){var r=t.keyCode,q=f(t.target),p=r===c.SPACE,o=r===c.ENTER,u=r===c.TAB&&!t.shiftKey,s=q.is(this.$tabsLinks.last());
if(o||p){this.context.tabsMenuClickHandler(t)
}else{if(u&&s){this.setTabIndexesOnFocusLeave()
}}};
l.prototype.tabsContentKeyEvents=function n(q){var o=q.keyCode,p=this.$tabsMenu.find("."+a.activeClass+" a");
if(o===c.ESC){this.context.focusWithoutScrolling(p);
q.preventDefault()
}};
l.prototype.setTabIndexesOnFocusLeave=function i(){var o=this.$tabsMenu.find("."+a.activeClass+" a");
this.$tabsContent.attr("tabindex",-1);
this.$tabsLinks.attr("tabindex",-1);
o.attr("tabindex",0)
};
l.prototype.setAriaSelectedTags=function m(){this.$tabsLinks.attr("aria-selected",false);
this.$tabsMenu.find("."+a.activeClass+" a").attr("aria-selected",true)
};
return l
}()
}),(function(b,a,e){var c=e(137);
function d(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(g){var n={activeClass:"is-active",expandedClass:"is-expanded",selectedClass:"is-selected",onTop:"on-top"},k={tabTitleItemClass:".tab-title-item",tabPanelItemClass:".tab-panel",pageHeader:".header",tabsMenu:".tabs",tabsContent:".tabs-content",simpleTable:".M-SMPTBL-RW-RBWM"},i={tabSwitched:"tabs:tabSwitched"};
var l=false;
var h=function(){function t(B){d(this,t);
this.$el=g(B);
this.$tabsMenu=this.$el.find(k.tabsMenu);
this.$tabsContent=this.$el.find(k.tabsContent);
this.$tabs=this.$tabsMenu.find(k.tabTitleItemClass);
this.$tabsLinks=this.$tabs.find("a");
this.$panels=this.$tabsContent.find(k.tabPanelItemClass);
this.$simpleTables=this.$tabsContent.find(k.simpleTable);
this.bindUIEvents();
this.ally=new c.TabsMobileAlly(this);
this.setUpAnchors()
}t.prototype.setUpAnchors=function u(){var E=window.location.hash+"-mobile-anchor",D=this.$tabsMenu.find('a[data-target="'+E+'"]'),C=this.$tabsContent.find(E.replace("#","#panel-"));
if(D.length){var B=g(k.pageHeader).height();
this.cleanElements();
this.setSelectedElement(D.parent(),C);
if(l){l=false
}else{if(document.readyState==="complete"){window.scrollTo(0,this.$el.offset().top-B)
}}}this.ally.setAriaSelectedTags()
};
t.prototype.bindUIEvents=function o(){var C=this;
var B=g(k.pageHeader).height();
this.$tabsMenu.find("a").on("click",function(D){return C.tabsMenuClickHandler(D)
});
g(window).on("resize",function(){return t.resizeHandler()
}).on("hashchange",function(D){if(HSBC_utils.matchMedia.mobile){C.setUpAnchors();
C.ally.setUpAttributes();
D.preventDefault()
}});
g(document).ready(function(){return window.scrollTo(0,C.$el.offset().top-B)
})
};
t.prototype.tabsMenuClickHandler=function r(C){var B=g(C.target);
this.toggleDropdown(B);
this.tabsMenuEvents(B);
this.$simpleTables.trigger(i.tabSwitched);
C.preventDefault()
};
t.prototype.tabsMenuEvents=function s(C){var E=this.$tabsContent.find("."+n.activeClass),F=this.$tabsMenu.find("."+n.activeClass+" a"),B=E.find(HSBC_utils.focusables.join()).add(this.$tabsContent),D=this.$tabsMenu.hasClass(n.expandedClass);
B.attr("tabindex",D?-1:0);
if(D){t.focusWithoutScrolling(F)
}else{this.$tabsContent.attr("tabindex",0);
t.focusWithoutScrolling(B.first());
this.ally.setTabIndexesOnFocusLeave();
j(C.data("target"))
}t.focusWithoutScrolling(F)
};
t.prototype.toggleDropdown=function A(B){var D=B.attr("data-target").replace("#","#panel-"),F=this.$tabsContent.find(D),E=B.parent(),C=this.$tabsMenu.hasClass(n.expandedClass);
if(C){this.collapse(E,F)
}else{this.expand()
}};
t.prototype.expand=function y(){var B=this.$tabsMenu.find("."+n.activeClass);
this.$tabsMenu.addClass(n.expandedClass);
this.moveElementToTheTop(B);
this.$tabsMenu.addClass(n.onTop)
};
t.prototype.collapse=function x(C,D){var B=this.$tabsMenu.find("."+n.activeClass);
B.remove();
if(C.hasClass(n.activeClass)){this.$tabsMenu.find("."+n.selectedClass).addClass(n.activeClass)
}this.$tabs.removeClass(n.selectedClass);
this.$tabsMenu.removeClass(n.onTop).removeClass(n.expandedClass);
if(!C.hasClass(n.activeClass)){this.cleanElements();
this.setSelectedElement(C,D);
this.ally.setAriaSelectedTags()
}this.ally.setUpAttributes()
};
t.prototype.moveElementToTheTop=function p(B){var C=B.clone(true,true);
C.find("span.active-tab-hidden-text").text(this.ally.accessibility.expandedText);
c.TabsMobileAlly.cleanAccessibilityAttributes(B);
B.parent().prepend(C)
};
t.prototype.cleanElements=function w(){var B=this.$tabsMenu.find("."+n.activeClass);
c.TabsMobileAlly.cleanAccessibilityAttributes(B);
this.$panels.removeClass(n.activeClass);
this.$tabs.removeClass(n.activeClass+" "+n.selectedClass)
};
t.prototype.setSelectedElement=function v(B,C){C.addClass(n.activeClass);
if(B.length>1){B.each(function(D,F){var E=g(F);
if(!E.hasClass(n.selectedClass)){E.addClass(n.activeClass)
}})
}else{B.addClass(n.activeClass)
}};
t.resizeHandler=function q(){if(!HSBC_utils.matchMedia.mobile){return
}};
t.focusWithoutScrolling=function z(C){var B=window.pageXOffset!==undefined?window.pageXOffset:document.documentElement.scrollLeft,D=window.pageYOffset!==undefined?window.pageYOffset:document.documentElement.scrollTop;
C.focus();
window.scrollTo(B,D)
};
return t
}();
function j(p){var o=g(p);
p=p.replace("#","");
o.attr("id","");
document.location.hash=p.length?p.replace("-mobile-anchor",""):"";
o.attr("id",p);
l=true
}var f={name:"tabs-mobile",selector:".generic-tabs.hide-on-tablet-and-desktop",init:function m(o){return new h(o)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,e,b){e.__esModule=true;
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var i={activeClass:"is-active",expandedClass:"is-expanded",selectedClass:"is-selected",onTop:"on-top"},g=Bootstrap.jQuery,h=HSBC_utils.keyCodes,a={defaultPhrases:{collapsed:"Dropdown menu, collapsed",expanded:"Dropdown menu, expanded",selected:"Selected"},properties:{collapsed:"dropdown-collapsed-text",expanded:"dropdown-expanded-text",selected:"dropdown-selected-text"}};
var d=e.TabsMobileAlly=function(){function k(t){f(this,k);
this.$el=t.$el;
this.$tabsMenu=t.$tabsMenu;
this.$tabsContent=t.$tabsContent;
this.$tabsLinks=t.$tabsLinks;
this.context=t;
this.accessibility=this.readAccessibility();
this.setUpAttributes();
this.bindUIEvents()
}k.prototype.setUpAttributes=function l(){var u=this.$tabsMenu.find("."+i.activeClass),t=u.find("a");
if(t.find(".active-tab-hidden-text").length){return
}t.prepend('<span class="visuallyhidden active-tab-hidden-text"> '+this.accessibility.collapsedText+", "+this.accessibility.selectedText+"</span>").attr({"aria-haspopup":"true",role:"button"}).find("span.active-tab-selected-text").attr("aria-hidden","true")
};
k.prototype.bindUIEvents=function j(){var u=this;
var t=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
this.$tabsMenu.find("a").on("keydown",function(v){return u.tabsMenuKeyHandler(v)
});
this.$tabsLinks.on("focus",function(){return u.$tabsLinks.attr("tabindex",0)
});
t.on("keydown",function(v){return u.tabsContentKeyEvents(v)
})
};
k.prototype.tabsMenuKeyHandler=function q(u){var C=u.keyCode,x=g(u.target),y=x.parent(),v=C===h.SPACE,z=C===h.ENTER,w=C===h.DOWN,B=C===h.UP,t=C===h.TAB&&!u.shiftKey,A=x.is(this.$tabsLinks.last());
if(z||v){this.context.tabsMenuClickHandler(u)
}else{if(t&&A){this.setTabIndexesOnFocusLeave()
}else{if(w){this.handleArrowKeyEvent(y,u,true)
}else{if(B){this.handleArrowKeyEvent(y,u,false)
}}}}};
k.prototype.handleArrowKeyEvent=function p(v,x,w){var u=w?"next":"prev",y=v[u](),t=y.hasClass(i.selectedClass)?y[u]().find("a"):y.find("a");
t.focus();
x.preventDefault()
};
k.prototype.setTabIndexesOnFocusLeave=function s(){var t=this.$tabsMenu.find("."+i.activeClass+" a");
this.$tabsContent.attr("tabindex",-1);
this.$tabsLinks.attr("tabindex",-1);
t.attr("tabindex",0)
};
k.prototype.tabsContentKeyEvents=function r(v){var t=v.keyCode,u=this.$tabsMenu.find("."+i.activeClass+" a");
if(t===h.ESC){this.context.focusWithoutScrolling(u);
v.preventDefault()
}};
k.prototype.setAriaSelectedTags=function o(){this.$tabsMenu.find("."+i.activeClass+" a").attr("role","button").find("span.active-tab-selected-text").attr("aria-hidden","true")
};
k.cleanAccessibilityAttributes=function m(t){t.removeClass(i.activeClass).addClass(i.selectedClass).find("a").removeAttr("aria-haspopup").attr("role","menuitem").find("span.active-tab-hidden-text").remove();
t.find("span.active-tab-selected-text").attr("aria-hidden","false")
};
k.prototype.readAccessibility=function n(){return{expandedText:this.$el.data(a.properties.expanded)||a.defaultPhrases.expanded,collapsedText:this.$el.data(a.properties.collapsed)||a.defaultPhrases.collapsed,selectedText:this.$el.data(a.properties.selected)||a.defaultPhrases.selected}
};
return k
}()
}),(function(b,a,d){var e=d(2);
function c(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(l){var i={browserNotification:".browser-notification",closeButton:".close-browser-notification",oldIE:".ie7-9"},h={hidden:"hidden"},f={oldBrowserNotification:"oldBrowserNotification"},k={path:"/",expires:{days:1}};
var j=function(){function o(r){c(this,o);
this.$el=l(r);
this.$closeButton=this.$el.find(i.closeButton);
this.showBrowserNotification();
this.bindUiEvents()
}o.prototype.bindUiEvents=function p(){var r=this;
this.$closeButton.on("click",function(){return r.closeBanner()
})
};
o.prototype.showBrowserNotification=function n(){if(l("html").is(i.oldIE)){var r=HSBC_utils.getCookie(f.oldBrowserNotification);
if(!r){this.$el.removeClass(h.hidden);
e.TealiumUtils.trackEvent({event_category:"content",event_action:"popup",event_content:"Browser update banner"})
}}};
o.prototype.closeBanner=function q(){if(!this.$el.hasClass(h.hidden)){HSBC_utils.setCookie(f.oldBrowserNotification,true,k);
this.$el.addClass(h.hidden);
e.TealiumUtils.trackEvent({event_category:"content",event_action:"onsite",event_content:"Browser update banner close"})
}};
return o
}();
var g={name:"browserNotification",selector:i.browserNotification,init:function m(n){return new j(n)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(i){var e={bannerClosed:"banner_enabled_status_close",bannerClosedLegacy:"opt_in_status"},h={cookieBanner:".cookie-banner.hidden",closeButton:".close-cookie-banner",cookieBannerText:".cookie-banner-text"},g={hidden:"hidden"};
var f=function(){function o(u){c(this,o);
this.$cookieBanner=i(u);
this.$closeButton=this.$cookieBanner.find(h.closeButton);
this.cookieValue=HSBC_utils.getCookie(e.bannerClosed);
this.hasHash=document.location.hash.length>0;
this.showCookieNotification();
this.bindUiEvents();
this.setLinkAttributes()
}o.prototype.showCookieNotification=function q(){if(!this.cookieValue){this.$cookieBanner.removeClass(g.hidden)
}};
o.prototype.bindUiEvents=function s(){var u=this;
if(!this.cookieValue){i(window).on("scroll",function(){return u.bannerOnScroll()
});
this.$closeButton.on("click",function(){return u.accept()
})
}};
o.prototype.bindTriggeredEvents=function p(){i(window).trigger("headerMessageChange")
};
o.prototype.bannerOnScroll=function m(){if(!this.isCloseBlocked()){this.accept()
}};
o.prototype.isCloseBlocked=function k(){if(this.hasHash){this.hasHash=false;
return true
}return false
};
o.prototype.accept=function l(){this.setCookies();
this.closeBanner();
this.bindTriggeredEvents()
};
o.prototype.closeBanner=function n(){if(!this.$cookieBanner.hasClass(g.hidden)){this.$cookieBanner.addClass(g.hidden)
}};
o.prototype.setCookies=function r(){var u={path:"/",expires:{months:6}};
HSBC_utils.setCookie(e.bannerClosedLegacy,1,u);
HSBC_utils.setCookie(e.bannerClosed,Date.now(),u)
};
o.prototype.setLinkAttributes=function t(){var u=i(h.cookieBannerText).find("a");
if(u){u.attr("rel","nofollow")
}};
return o
}();
HSBC_utils.registerComponent({name:"cookieBanner",selector:h.cookieBanner,init:function j(k){return new f(k)
}})
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(g){var f={bannerDismiss:"cookie_banner_dismiss",legacyBanner:"banner_enabled_status_close",trackingFlag:"opt_in_status"};
var e=function(){function i(l){var m=this;
c(this,i);
if(HSBC_utils.getCookie(f.bannerDismiss)){return
}this.$cookieBanner=g(l);
this.$cookieBanner.find("button.accept").on("click",function(){return m.accept()
});
this.$cookieBanner.removeClass("hidden");
this.checkLegacyCookieBanner()
}i.prototype.checkLegacyCookieBanner=function k(){if(HSBC_utils.getCookie(f.legacyBanner)){HSBC_utils.deleteCookie(f.legacyBanner,"/");
HSBC_utils.deleteCookie(f.trackingFlag,"/")
}};
i.prototype.accept=function j(){var l={path:"/",expires:{months:6}};
HSBC_utils.setCookie(f.bannerDismiss,new Date().getTime(),l);
HSBC_utils.setCookie(f.trackingFlag,1,l);
this.$cookieBanner.addClass("hidden");
g(window).trigger("headerMessageChange")
};
return i
}();
HSBC_utils.registerComponent({name:"cookieBannerOptout",selector:".cookie-banner-optout.hidden",init:function h(i){return new e(i)
}})
})(Bootstrap.jQuery)
}),(function(b,a,d){var e=d(64);
function c(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}(function(k){var i={active:"active",hidden:"hidden"},h={doormatMenu:".doormat-menu",headerMainMenu:".header-main-navigation",doormatExpanded:".doormat-expanded",doormatCollapsed:".doormat-collapsed",doormatMainColumn:".doormat-main-column",navigationItem:".header-main-navigation-item",hideOnMobileAndTablet:".hide-on-mobile-and-tablet",columnContent:".doormat-column-content"},j=k("body");
var g=function(){function r(w){c(this,r);
this.$el=k(w);
this.$navigationItem=this.$el.closest(h.navigationItem);
this.$headerMainMenu=this.$el.parents(h.headerMainMenu);
this.$allDoormatLinks=this.$headerMainMenu.find("a");
this.$doormatExpanded=this.$navigationItem.find(h.doormatExpanded);
this.$doormatCollapsed=this.$navigationItem.find(h.doormatCollapsed);
this.isEnterHandlerEnabled=false;
this.isInMenu=false;
this.equalizeColumnHeight();
this.bindUiEvents();
this.updateMaxHeight();
new e.DoormatAlly(this)
}r.prototype.equalizeColumnHeight=function t(){var w=this.$el.find(h.doormatMainColumn),x=Math.max.apply(null,w.map(function(y,z){return k(z).find(h.columnContent).height()
}).get());
w.height(x)
};
r.prototype.updateMaxHeight=function v(){var w=k(window).height()-this.$el.offset().top;
this.$el.css("max-height",w)
};
r.prototype.removeActiveClass=function q(){this.$el.removeClass(i.active);
this.$navigationItem.removeClass(i.active)
};
r.prototype.removeActiveClassState=function n(w){w.attr("tabindex",-1);
this.toggleMenuStatusText(true);
this.removeActiveClass();
this.isEnterHandlerEnabled=false;
this.isInMenu=false
};
r.prototype.resize=function p(){this.equalizeColumnHeight();
this.updateMaxHeight()
};
r.prototype.bindUiEvents=function s(){var w=this;
k(window).on("resize",function(){return w.resize()
});
this.$navigationItem.on("focus",function(){if(w.getFocusCondition()){w.toggleMenuStatusText();
w.$el.addClass(i.active);
w.$navigationItem.addClass(i.active)
}}).on("focusout",function(){if(w.getFocusCondition()){w.removeActiveClass();
w.toggleMenuStatusText()
}});
this.$el.on("mouseout",function(){return w.removeActiveClassState(w.$allDoormatLinks)
});
j.on("click",function(y){var x=k(y.target);
if(!r.isInDoormat(x)&&!x.hasClass(i.headerMainMenu)){w.removeActiveClassState(w.$allDoormatLinks)
}})
};
r.prototype.toggleMenuStatusText=function u(){var w=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
if(w){this.$doormatCollapsed.removeClass(i.hidden);
this.$doormatExpanded.addClass(i.hidden)
}else{this.$doormatCollapsed.addClass(i.hidden);
this.$doormatExpanded.removeClass(i.hidden)
}};
r.prototype.getFocusCondition=function m(){return !(this.isInMenu||this.isEnterHandlerEnabled)
};
r.isInDoormat=function o(w){return !!w.parents("."+i.headerMainMenu).length
};
return r
}();
var f={name:"doormat",selector:h.hideOnMobileAndTablet+" "+h.doormatMenu,init:function l(m){return new g(m)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var f={placeholderLeft:".placeholder-left",placeholderRight:".lg-4",cta:".O-PRIMCTA-RW-RBWM"};
var g=function(){function k(m){c(this,k);
this.$el=h(m);
i(this.$el);
this.bindUiEvents()
}k.prototype.bindUiEvents=function l(){var m=this;
h(window).on("resize",function(){i(m.$el)
})
};
return k
}();
function i(k){var n=k.find(f.placeholderLeft),m=k.find(f.placeholderRight),l=m.find(f.cta),o=l.outerHeight(true)-l.outerHeight(false);
n.height("auto");
if(HSBC_utils.matchMedia.tablet||HSBC_utils.matchMedia.desktop){if(m.outerHeight()-o>=n.outerHeight()){n.height(m.outerHeight()-o)
}}}var e={name:"equalize",selector:".equalize",init:function j(k){return new g(k)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var f={footer:"footer",footerMobileSubmenuWrapper:"sidebar-submenu-wrapper",mobileSidebar:"header-mobile-sidebar",headerDoormatMobile:"header-mobile-doormat",headerMobileFooterItem:"header-mobile-footer-item",headerMobileFooterItemWrapper:"header-mobile-footer-item-wrapper",footerLarge:"footer-large",footerSupplementary:"footer-supplementary",headerMobileFooterMenu:"header-mobile-footer-menu",footerTrigger:"sidebar-submenu-trigger",headerMobileTitle:"header-doormat-mobile-title",opinionLabTrigger:"opinion-lab-trigger"};
var g=function(){function m(p){c(this,m);
this.$el=h(p);
this.bindUIElements();
this.createFooterMobileElements();
this.buildFooterMobile();
this.bindUIEvents()
}m.prototype.bindUIElements=function j(){this.$mobileSidebar=h("."+f.mobileSidebar);
this.$headerDoormatMobile=this.$mobileSidebar.find("."+f.headerDoormatMobile);
this.$headerMobileFooterItem=this.$el.find("."+f.headerMobileFooterItem);
this.$headerMobileFooterItemWrapper=this.$el.find("."+f.headerMobileFooterItemWrapper);
this.$footerLarge=this.$el.find("."+f.footerLarge).clone();
this.$footerSupplementary=this.$el.find("."+f.footerSupplementary).clone()
};
m.prototype.bindUIEvents=function k(){var p=this;
h(document).on("click","."+f.opinionLabTrigger,function(q){q.preventDefault();
p.opinionLabShow(q)
})
};
m.prototype.createFooterMobileElements=function o(){this.$footerMobileMenu=h("<div>",{"class":f.headerMobileFooterMenu+" "+f.footerMobileSubmenuWrapper,"data-source":"mobile-footer"})
};
m.prototype.buildFooterMobile=function n(){this.$headerMobileFooterItem.find("."+f.headerMobileTitle).data("target","mobile-footer").addClass(f.footerTrigger);
this.$headerDoormatMobile.append(this.$headerMobileFooterItem);
this.$headerMobileFooterItemWrapper.remove();
this.$footerMobileMenu.insertAfter(this.$headerDoormatMobile);
this.$footerMobileMenu.append(this.$footerLarge).append(this.$footerSupplementary)
};
m.prototype.opinionLabShow=function l(q){var p=window.oo_feedback||(window.OOo?window.OOo.oo_feedback:null);
if(p){p.show(q)
}};
return m
}();
var e={name:"footer",selector:"."+f.footer,init:function i(j){return new g(j)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
}),(function(d,b,f){var a=f(27);
var c=f(146);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}(function(m){var l={active:"is-active",hidden:"hidden",headerSearchBlack:"header-search-black"},k={desktopClearCircle:".header-clear-container",searchBox:".search-box",searchButton:".header-search-button",pageOverlay:".page-overlay",headerSearch:".header-search"},h=m(k.pageOverlay),i=HSBC_utils.keyCodes;
var g=function(){function u(y){e(this,u);
this.$el=m(y);
this.$desktopClearCircle=this.$el.find(k.desktopClearCircle);
this.$searchBox=this.$el.find(k.searchBox);
this.$searchButton=this.$el.find(k.searchButton);
if(!u.isVirtualAssistant()){this.suggestions=new a.SearchMobileSuggestions(this.$el)
}this.bindUIEvents();
this.manageClearCircleVisibility();
this.manageTypeOfSearchButton();
new c.DesktopSearchAlly(this)
}u.prototype.bindUIEvents=function p(){var y=this;
this.$searchButton.on("click",function(){return y.toggleSearchBox()
});
this.$desktopClearCircle.on("click",function(){y.clearSearchBox();
y.manageClearCircleVisibility()
});
this.$el.on("focusout",function(z){var A=m(z.relatedTarget).closest(k.headerSearch).length;
if(!A){h.addClass(l.hidden);
if(HSBC_utils.isInternetExplorer){y.$searchBox.removeAttr("required");
y.$searchBox.attr("value","Search")
}}}).on("focusin",function(A){var z=m(A.target).is(y.$searchButton),B=y.$searchBox.val()==="";
if(!(z&&B)){h.removeClass(l.hidden);
if(HSBC_utils.isInternetExplorer){y.$searchBox.removeAttr("value");
y.$searchBox.attr("required","")
}}else{h.addClass(l.hidden)
}});
if(u.isVirtualAssistant()){m(document).on("keyup",function(z){if(z.keyCode===i.ESC){y.fixVirtualAssistantSearchExit()
}}).on("mouseup",function(){return y.fixVirtualAssistantSearchExit()
})
}};
u.prototype.clearSearchBox=function s(){this.$searchBox.val("").focus();
this.manageTypeOfSearchButton()
};
u.prototype.isExpanded=function o(){return this.$searchBox.hasClass(l.active)
};
u.prototype.isSearchBoxEmpty=function q(){return !this.$searchBox.val().length
};
u.prototype.toggleSearchBox=function v(){if(this.isExpanded()&&this.isSearchBoxEmpty()){this.$searchBox.removeClass(l.active);
this.$el.addClass(l.headerSearchBlack);
if(HSBC_utils.isInternetExplorer){this.$searchBox.blur()
}}else{this.$searchBox.addClass(l.active);
this.$el.removeClass(l.headerSearchBlack);
this.$searchBox.focus();
if(HSBC_utils.isInternetExplorer){this.$searchBox.removeAttr("placeholder")
}}};
u.prototype.manageClearCircleVisibility=function w(){var y=this.isSearchBoxEmpty()?"none":"inline-block";
this.$desktopClearCircle.css("display",y)
};
u.prototype.manageTypeOfSearchButton=function r(){var y=this.isSearchBoxEmpty()?"button":"submit";
this.$searchButton.attr("type",y)
};
u.prototype.fixVirtualAssistantSearchExit=function x(){var y=this;
setTimeout(function(){if(y.$searchBox.val()=="Search"){y.$searchBox.val("").change();
y.manageClearCircleVisibility()
}},1)
};
u.isVirtualAssistant=function t(){return !!m("#virtual-assistant-search").length
};
return u
}();
var j={name:"Desktop Search",selector:k.headerSearch,init:function n(o){return new g(o)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(c,a,f){a.__esModule=true;
function e(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var d=Bootstrap.jQuery,b=HSBC_utils.keyCodes;
var g=a.SearchMobileSuggestionsAlly=function(){function l(m){e(this,l);
this.$el=m.$el;
this.$suggestionItems=m.$suggestionItems;
this.context=m;
this.bindUIEvents()
}l.prototype.bindUIEvents=function j(){var m=this;
this.context.$searchBox.on("keyup",function(o){if(m.context.results.length){var n;
var p=(n={},n[b.DOWN]=function(){return m.$suggestionItems.first().focus()
},n[b.ESC]=function(){return m.context.hideSuggestions()
},n);
m.handleKeyPress(o,p)
}})
};
l.prototype.bindSuggestionsUIEvents=function i(){var m=this;
this.context.$suggestionItems.on("keydown",function(n){var o;
var p=(o={},o[b.ENTER]=m.context.handleSuggestionChoice,o[b.ESC]=m.context.hideSuggestions,o[b.DOWN]=function(q){return q.next().focus()
},o[b.UP]=function(q){return q.prev().focus()
},o);
m.handleKeyPress(n,p)
});
this.context.$suggestionItems.first().on("keydown",function(n){return m.handleArrowKeys(n,true)
});
this.context.$suggestionItems.last().on("keydown",function(n){return m.handleArrowKeys(n,false)
})
};
l.prototype.handleArrowKeys=function h(n,m){var o=n.keyCode===(m?b.UP:b.DOWN);
if(o){this.hideSuggestions()
}};
l.prototype.handleKeyPress=function k(o,p){var n=o.keyCode,m=d(o.target);
if(p.hasOwnProperty(n)){o.preventDefault();
p[n].call(this,m)
}};
return l
}()
}),(function(d,b,f){b.__esModule=true;
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var a={openSearchBox:"data-aria-label-open-searchbox",closeSearchBox:"data-aria-label-close-searchbox",displaySearchResults:"data-aria-label-display-search-results"};
var c=b.DesktopSearchAlly=function(){function j(m){e(this,j);
this.$el=m.$el;
this.$searchButton=m.$searchButton;
this.$searchBox=m.$searchBox;
this.context=m;
this.setSearchButtonAriaLabelTexts();
this.bindUIEvents()
}j.prototype.setSearchButtonAriaLabelTexts=function i(){this.searchButtonAriaLabels={open:this.$searchButton.attr(a.openSearchBox),close:this.$searchButton.attr(a.closeSearchBox),displayResults:this.$searchButton.attr(a.displaySearchResults)}
};
j.prototype.bindUIEvents=function k(){var n=this;
var m=this.context;
this.$searchBox.on("keyup",function(){m.manageClearCircleVisibility();
m.manageTypeOfSearchButton();
n.setSearchButtonTabindex()
}).on("change",function(){return n.submitText()
});
this.$searchButton.on("click",function(){return n.toggleSearchButtonText()
});
m.$desktopClearCircle.on("click",function(){n.$searchButton.attr("aria-label",n.searchButtonAriaLabels.close);
n.setSearchButtonTabindex()
})
};
j.prototype.toggleSearchButtonText=function h(){var m=this.context.isExpanded()?this.searchButtonAriaLabels.close:this.searchButtonAriaLabels.open;
this.$searchButton.attr("aria-label",m);
this.setSearchButtonTabindex()
};
j.prototype.submitText=function l(){this.$searchButton.attr("aria-label",this.searchButtonAriaLabels.displayResults)
};
j.prototype.setSearchButtonTabindex=function g(){if(this.context.isExpanded()&&this.context.isSearchBoxEmpty()){this.$searchButton.attr("tabindex",-1);
this.$searchButton.attr("aria-hidden","true")
}else{this.$searchButton.attr("tabindex",0);
this.$searchButton.attr("aria-hidden","false")
}};
return j
}()
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var l={skipToContentLink:".skip-to-content-link",topOfContent:".top-of-content",configPage:".configPage",headerMain:".header-main",headerNav:".header-main-navigation",logoWrapper:".header-logo"},f={active:"active",patternLab:"header-patternlab",noPatternLab:"header-no-patternlab"},g=h(document).find("body"),i=HSBC_utils.keyCodes,j=500;
var k=function(){function t(u){c(this,t);
this.$header=h(u);
this.$headerNav=this.$header.find(l.headerNav);
this.$logoWrapper=this.$header.find(l.logoWrapper);
this.cacheDomElements();
this.bindUiEvents();
this.togglePositionFixed();
this.detectPatternLab();
this.zoomDetectionTimeout()
}t.prototype.detectPatternLab=function q(){if(HSBC_utils.isPatternLab()){this.$header.addClass(f.patternLab)
}else{this.$header.addClass(f.noPatternLab)
}};
t.prototype.cacheDomElements=function n(){this.$skipToContentLink=this.$header.find(l.skipToContentLink);
this.$topOfContent=h(document).find(l.topOfContent)
};
t.prototype.togglePositionFixed=function p(){if(!g.hasClass(f.configPage)&&!HSBC_utils.isEditMode()&&!HSBC_utils.isPatternLab()){this.$header.css("position","fixed");
this.$header.parent().css("padding-top",this.$header.innerHeight());
h(window).trigger("headerResize")
}};
t.prototype.bindUiEvents=function s(){var u=this;
this.$skipToContentLink.on("click",function(v){u.$topOfContent.addClass(f.active).focus();
v.preventDefault()
});
h(window).on("load resize headerMessageChange",function(){u.togglePositionFixed()
});
h(window).on("load resize",function(){u.adjustLogoWrapperHeight()
})
};
t.prototype.zoomDetectionTimeout=function r(){var w=this;
var v=h(l.headerMain),u=v.height();
setInterval(function(){var x=v.height();
if(x!=u){u=x;
w.togglePositionFixed()
}},j)
};
t.prototype.adjustLogoWrapperHeight=function o(){this.$logoWrapper.removeAttr("style");
this.$logoWrapper.height(Math.max(this.$logoWrapper.height(),this.$headerNav.height()))
};
return t
}();
var e={name:"header",selector:".header",init:function m(n){return new k(n)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(j){var h={HTML_SEP:"-",ISO_SEP:"_",HSBC_CLIENT_COOKIE:"HSBC_CLIENT_COOKIE",PREFERRED_LOCALE_PREFIX:"PreferredLocale="},g={localeManagement:".locale-management",selectedTriggerLink:".is-selected a[lang]",triggerLink:"a[lang]"};
var i={path:"/",expires:{days:365}};
var f=function(){function n(s){c(this,n);
this.$el=j(s);
this.$selectedTriggerLink=this.$el.find(g.selectedTriggerLink);
this.fetchGlobalSettings();
this.observeTriggers();
this.initLocale()
}n.prototype.initLocale=function m(){this.updateLocale(this.$selectedTriggerLink.attr("lang"))
};
n.prototype.fetchGlobalSettings=function p(){var s=j("body").data("global-settings");
if(s&&s.cookieDomain){i.domain=s.cookieDomain
}};
n.prototype.observeTriggers=function o(){var s=this;
this.$el.find(g.triggerLink).on("click",function(t){s.updateLocale(t.target.lang)
})
};
n.prototype.updateLocale=function r(u){var t=this.getLocale(),s=e(u)||"";
if(s.length&&t!=s){this.setLocale(s)
}};
n.prototype.setLocale=function l(t){var v=HSBC_utils.getCookie(h.HSBC_CLIENT_COOKIE),s=void 0;
var u=new RegExp("^(.*,)?"+h.PREFERRED_LOCALE_PREFIX+"[^,]*(,.*)?$");
t=t||"";
s=h.PREFERRED_LOCALE_PREFIX+t;
if(!v){v=s
}else{if(v.indexOf(h.PREFERRED_LOCALE_PREFIX)!==-1){v=v.replace(u,"$1"+s+"$2")
}else{v=v+","+s
}}HSBC_utils.deleteCookie(h.HSBC_CLIENT_COOKIE,i.path);
HSBC_utils.setCookie(h.HSBC_CLIENT_COOKIE,v,i)
};
n.prototype.getLocale=function q(){var t=HSBC_utils.getCookie(h.HSBC_CLIENT_COOKIE),s=new RegExp("^(.*,)?"+h.PREFERRED_LOCALE_PREFIX+"([^,]*)(,.*)?$");
if(t&&t.indexOf(h.PREFERRED_LOCALE_PREFIX)!==-1){return t.replace(s,"$2")
}return null
};
return n
}();
function e(m){var l=m;
if(m&&m.indexOf(h.HTML_SEP)!==-1){l=m.split(h.HTML_SEP)[0];
l+=h.ISO_SEP;
l+=m.split(h.HTML_SEP)[1].toUpperCase()
}return l
}HSBC_utils.registerComponent({name:"localemanagement",selector:g.localeManagement,init:function k(l){return new f(l)
}})
})(Bootstrap.jQuery)
}),(function(b,a,e){var f=e(150);
var d=e(28);
function c(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}(function(k){var i={expanded:"is-expanded",hidden:"hidden"},h={selectedItem:".selected-item",itemList:".item-list",items:".item",loginButtonExpanded:".login-button-expanded",loginButtonCollapsed:".login-button-collapsed"},j={up:"icon-chevron-up-small",down:"icon-chevron-down-small"};
var m=function(){function r(s){c(this,r);
this.$el=k(s);
this.isExpanded=false;
this.$arrowIcon=this.$el.find(".icon").first();
this.$menuItems=this.$el.find(h.items+" a");
this.$selectedItem=this.$el.find(h.selectedItem);
this.$selectedItem.attr("aria-expanded","false");
this.$loginButtonExpanded=this.$selectedItem.find(h.loginButtonExpanded);
this.$loginButtonCollapsed=this.$selectedItem.find(h.loginButtonCollapsed);
this.bindUIEvents();
new f.HeaderDropdownAlly(this);
new d.HeaderLoggedUserState(this)
}r.prototype.bindUIEvents=function n(){var s=this;
this.$selectedItem.on("click",function(){s.toggleDropdown()
});
this.$menuItems.on("click",function(){return s.collapse()
});
k(document).on("click",function(t){var u=t.target;
if(!s.$el.is(u)&&!s.$el.has(u).length){s.collapse()
}})
};
r.prototype.toggleDropdown=function p(){if(this.isExpanded){this.collapse()
}else{this.expand()
}};
r.prototype.expand=function o(){this.$el.addClass(i.expanded);
this.$selectedItem.attr("aria-expanded","true");
this.$arrowIcon.addClass(j.up).removeClass(j.down);
this.$loginButtonExpanded.removeClass(i.hidden);
this.$loginButtonCollapsed.addClass(i.hidden);
this.isExpanded=true
};
r.prototype.collapse=function q(){this.$el.removeClass(i.expanded);
this.$selectedItem.attr("aria-expanded","false");
this.$arrowIcon.addClass(j.down).removeClass(j.up);
this.$loginButtonExpanded.addClass(i.hidden);
this.$loginButtonCollapsed.removeClass(i.hidden);
this.isExpanded=false
};
return r
}();
var g={name:"header-dropdown",selector:".header-dropdown",init:function l(n){return new m(n)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(d,a,g){a.__esModule=true;
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var c={itemList:".item-list",items:".item",onlyOneLink:"only-one-link"},b=HSBC_utils.keyCodes,e=Bootstrap.jQuery;
var h=a.HeaderDropdownAlly=function(){function l(m){f(this,l);
this.context=m;
this.$el=m.$el;
this.$menuItems=this.$el.find(c.items+" a");
this.bindUIEvents()
}l.prototype.bindUIEvents=function j(){var n=this;
var m=this.context;
this.$menuItems.on("keydown",function(o){return n.handleItemsKeyEvent(o)
});
m.$selectedItem.on("click",function(){if(m.isExpanded){n.$menuItems.first().focus()
}}).on("keydown",function(r){var q=r.keyCode,p=q===b.SPACE,o=q===b.ENTER;
if(p||o){m.$selectedItem.trigger("click");
if(n.isLogonWithOnlyOneLink(r)){return
}r.preventDefault()
}})
};
l.prototype.isLogonWithOnlyOneLink=function k(m){return m.target.classList.contains(c.onlyOneLink)
};
l.prototype.handleItemsKeyEvent=function i(n){var o=this.context,w=n.keyCode,r=n.shiftKey,u=w===b.ENTER,q=w===b.DOWN,v=w===b.UP,m=w===b.TAB,t=m&&r,p=e(n.target),s=p.parent();
if(q){s.next().find("a").focus()
}else{if(v||t){if(this.$menuItems.first().is(p)){o.toggleDropdown();
o.$selectedItem.focus()
}else{s.prev().find("a").focus()
}}}if(m&&!r){if(this.$menuItems.last().is(p)){o.toggleDropdown()
}}else{if(!u){n.preventDefault()
}}};
return l
}()
}),(function(b,a,f){var c=f(152);
var e=f(28);
function d(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}(function(k){if(HSBC_utils.isIE8orLower()){return
}var h={sidebar:"header-mobile-sidebar",sidebarTrigger:"header-sidebar-trigger",sidebarOpen:"sidebar-open",sidebarOverlay:"header-mobile-overlay",logoMobile:"header-mobile-logo",expanded:"expanded",active:"active",expandedAndActive:"expanded active",safariFixPadding:"safari-fix-padding",submenuTrigger:"sidebar-submenu-trigger",submenu:"sidebar-submenu-wrapper",doormatTrigger:"header-main-navigation-item",doormatSidebarTitle:"header-doormat-mobile-title",sidebarLinks:"header-mobile-sidebar-footer",sidebarHiddenCloseButton:"sidebar-hidden-close-button",closeSubmenuTrigger:"close-submenu-trigger",submenuExpanded:"submenu-expanded",doormatContainer:"doormat-container",doormatMenu:"doormat-menu",searchBox:"search-box",headerSearchButton:"header-search-button",contentOverlay:"header-mobile-overlay"},i=k("html"),j=k("body"),n={doormatSectionHeading:".sidebar-submenu-label, .footer-section-title",doormatSidebarItems:".header-doormat-mobile-title, .header-mobile-selected-item, .search-box, .header-mobile-search-container"};
var l=void 0;
var m=function(){function E(G){d(this,E);
E.initSelectorsObject();
this.cacheDomElements(G);
this.bindUIEvents();
this.ally=new c.MobileHeaderAlly(this);
new e.HeaderLoggedUserState(this)
}E.prototype.cacheDomElements=function t(G){this.$el=k(G);
this.$sidebarTrigger=this.$el.find(n.sidebarTrigger);
this.$sidebar=this.$el.find(n.sidebar);
this.$header=this.$el.parent();
this.$sidebarOverlay=this.$el.find(n.sidebarOverlay);
this.$logoMobile=this.$el.find(n.logoMobile);
this.$sidebarLinks=this.$el.find(n.sidebarLinks);
this.$sidebarHiddenCloseButton=this.$el.find(n.sidebarHiddenCloseButton);
this.$submenuWrapper=this.$el.find(n.submenu);
this.$doormatContainer=this.$el.find(n.doormatContainer);
this.$doormatMenu=this.$el.find(n.doormatMenu);
this.$doormatSidebarTitle=this.$el.find(n.doormatSidebarTitle);
this.$doormatSidebarItems=this.$el.find(n.doormatSidebarItems);
this.$submenuTrigger=this.$el.find(n.submenuTrigger);
this.$closeSubmenuTrigger=this.$el.find(n.closeSubmenuTrigger);
this.$searchBox=this.$el.find(n.searchBox);
this.$doormatSectionHeading=this.$el.find(n.doormatSectionHeading);
this.$headerSearchButton=this.$el.find(n.headerSearchButton);
this.$contentOverlay=this.$el.find(n.contentOverlay)
};
E.prototype.bindUIEvents=function q(){var G=this;
this.$el.on("click",n.submenuTrigger,function(H){return G.toggleSubmenu(H)
}).on("click",n.closeSubmenuTrigger,function(){return G.collapseSubmenu()
});
this.$sidebarTrigger.on("click",function(H){H.preventDefault();
G.toggleSidebar()
});
this.$sidebarHiddenCloseButton.on("click",function(H){H.preventDefault();
G.closeSidebar();
G.$sidebarTrigger.focus()
});
this.$sidebarOverlay.on("click",function(){return G.closeSidebar()
});
k(window).on("resize",function(){return G.resizeEventHandler()
}).on("load",function(){return G.applyFixes()
}).on("resize resize_when_banner_closed",function(){G.calculateOverlayPosition();
G.ally.calculatePositionSidebarHiddenCloseButton()
})
};
E.prototype.toggleSidebar=function y(){if(this.isExpanded()){this.closeSidebar()
}else{this.openSidebar()
}};
E.prototype.isExpanded=function p(){return this.$sidebar.hasClass(h.expandedAndActive)
};
E.prototype.openSidebar=function D(){this.$sidebar.addClass(h.expandedAndActive);
l=j.scrollTop()||i.scrollTop();
j.addClass(h.sidebarOpen).css("marginTop",-l);
this.positionSidebarLinks();
this.ally.openSidebar();
this.calculateOverlayPosition();
this.ally.makePageContentInaccessible();
this.$sidebarHiddenCloseButton.addClass(h.sidebarOpen);
this.ally.calculatePositionSidebarHiddenCloseButton()
};
E.prototype.closeSidebar=function x(){j.css("marginTop",0);
this.$sidebar.removeClass(h.expandedAndActive+" "+h.submenuExpanded);
j.removeClass(h.sidebarOpen);
this.$sidebar.find(n.expandedOrActive).removeClass(h.expandedAndActive);
E.scrollTop();
this.ally.closeSidebar();
this.ally.makePageContentAccessible();
this.$sidebarHiddenCloseButton.removeClass(h.sidebarOpen)
};
E.prototype.toggleSubmenu=function v(L){var I=k(L.target),H=I.hasClass(h.submenuTrigger)?I:I.closest(n.submenuTrigger),G=H.data("target"),K=this.$el.find("[data-source="+G+"]"),J=K.hasClass(h.expandedAndActive);
this.collapseSubmenu();
if(!J){H.addClass(h.expandedAndActive).attr("aria-expanded","true");
this.ally.openSubmenu();
K.removeAttr("tabindex").addClass(h.expandedAndActive).attr("aria-hidden","false").find(HSBC_utils.focusables.join()).first().focus();
this.$sidebar.addClass(h.submenuExpanded);
L.preventDefault()
}this.ally.updateFocusables()
};
E.prototype.collapseSubmenu=function A(){var G=this.$submenuTrigger.filter(".expanded");
this.$sidebar.removeClass(h.submenuExpanded).find(n.expandedOrActive).removeClass(h.expandedAndActive);
this.ally.closeSubmenu();
if(k(document.activeElement).is(this.$closeSubmenuTrigger)){G.focus()
}this.ally.updateFocusables()
};
E.prototype.fixPaddingSafari=function F(){if(HSBC_utils.isSafari){this.$doormatContainer.addClass(h.safariFixPadding)
}};
E.prototype.fixSvgLogoIssue=function C(){this.$logoMobile.toggle().toggle()
};
E.prototype.applyFixes=function z(){this.fixPaddingSafari();
this.fixSvgLogoIssue()
};
E.prototype.positionSidebarLinks=function u(){var H=this.$sidebarLinks.siblings(":visible").eq(-2),J=H.outerHeight(),I=this.$sidebarLinks.outerHeight();
var G=0;
if(this.$sidebar.hasClass(h.expandedAndActive)){G=k(window).height()-H.offset().top-J-I
}if(G>0){this.$sidebarLinks.css("top",G)
}};
E.prototype.resizeEventHandler=function B(){if(HSBC_utils.matchMedia.desktop){this.closeSidebar()
}else{this.positionSidebarLinks()
}};
E.prototype.calculateOverlayPosition=function w(){this.$contentOverlay.css("top",this.$header.innerHeight())
};
E.initSelectorsObject=function r(){Object.keys(h).map(function(G){return n[G]="."+h[G]
});
n.expandedOrActive="."+h.expanded+",."+h.active
};
E.scrollTop=function s(){j.scrollTop(l);
i.scrollTop(l)
};
return E
}();
var g={name:"Mobile Header",selector:".header-mobile",init:function o(p){return new m(p)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(b,e,a){e.__esModule=true;
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var d={sidebarTrigger:"header-sidebar-trigger",submenuTrigger:"sidebar-submenu-trigger",closeSubmenuTrigger:"close-submenu-trigger",expanded:"expanded",hidden:"hidden",expandedAndActive:"expanded active",submenuExpanded:"submenu-expanded"},i={doormatTrigger:".header-main-navigation-item"},g=Bootstrap.jQuery,h=HSBC_utils.keyCodes;
var c=e.MobileHeaderAlly=function(){function o(A){f(this,o);
this.$el=A.$el;
this.$target=A.$target;
this.$sidebar=A.$sidebar;
this.$header=A.$header;
this.$sidebarTrigger=A.$sidebarTrigger;
this.$doormatMenu=A.$doormatMenu;
this.$doormatSidebarTitle=A.$doormatSidebarTitle;
this.$doormatSidebarItems=A.$doormatSidebarItems;
this.$submenuTrigger=A.$submenuTrigger;
this.$closeSubmenuTrigger=A.$closeSubmenuTrigger;
this.$submenuWrapper=A.$submenuWrapper;
this.$searchBox=A.$searchBox;
this.$doormatSectionHeading=A.$doormatSectionHeading;
this.$headerSearchButton=A.$headerSearchButton;
this.$sidebarHiddenCloseButton=A.$sidebarHiddenCloseButton;
this.context=A;
this.updateDoormatAccessibility();
this.setSidebarAriaLabelTexts();
this.updateFocusables();
this.bindUIEvents()
}o.prototype.bindUIEvents=function j(){var A=this;
this.$el.on("keydown",function(B){return A.keydownEventHandler(B)
});
this.$sidebarTrigger.on("click",function(){return A.updateDoormatAccessibility()
})
};
o.prototype.keydownEventHandler=function y(C){var B=C.keyCode,D=B===h.TAB,A=B===h.ENTER;
if(D){this.tabPressedEventHandler(C)
}else{if(A){this.enterPressedEventHandler(C)
}}};
o.prototype.tabPressedEventHandler=function x(E){var G=E.target,H=this.$sidebar.hasClass(d.expanded),D=G===this.$firstFocusable[0]&&E.shiftKey,B=G===this.$lastFocusable[0]&&!E.shiftKey,F=g(G).hasClass(d.sidebarTrigger),A=this.$sidebar.hasClass(d.submenuExpanded);
if(H&&F&&!A){var C=E.shiftKey?this.$lastFocusable:this.$firstFocusable;
C.focus();
E.preventDefault()
}else{if(H&&F&&A){this.$closeSubmenuTrigger.focus();
E.preventDefault()
}else{if(D||B){this.$sidebarTrigger.focus();
E.preventDefault()
}}}};
o.prototype.enterPressedEventHandler=function k(C){var B=this.context,A=g(C.target);
if(A.hasClass(d.submenuTrigger)){B.toggleSubmenu(C)
}else{if(A.hasClass(d.closeSubmenuTrigger)){B.collapseSubmenu()
}}};
o.prototype.updateDoormatAccessibility=function m(){this.$sidebar.find(i.doormatTrigger).removeAttr("tabindex aria-expanded").attr("role","presentation").children(this.$doormatSidebarTitle).attr("tabindex",0);
this.$submenuTrigger.attr({role:"menuitem","aria-haspopup":true})
};
o.prototype.setSidebarAriaLabelTexts=function s(){this.sideBarAriaLabels={open:this.$sidebarTrigger.attr("data-aria-label-open-menu"),close:this.$sidebarTrigger.attr("data-aria-label-close-menu")}
};
o.prototype.updateFocusables=function p(){var B=this.$sidebar.find(HSBC_utils.focusables.join()),A=B.filter(function(C,D){return g(D).css("display")!=="none"
});
this.$firstFocusable=A.first();
this.$lastFocusable=A.last()
};
o.prototype.closeSidebar=function q(){this.$sidebarTrigger.attr("aria-label",this.sideBarAriaLabels.open)
};
o.prototype.openSidebar=function v(){this.$sidebarTrigger.attr("aria-label",this.sideBarAriaLabels.close);
this.showSidebarForScreenReaders()
};
o.prototype.closeSubmenu=function n(){this.$submenuTrigger.attr("aria-expanded","false");
this.$closeSubmenuTrigger.addClass(d.hidden);
this.showSidebarForScreenReaders()
};
o.prototype.openSubmenu=function u(){this.$closeSubmenuTrigger.removeClass(d.hidden);
this.hideSidebarForScreenReaders()
};
o.prototype.hideSidebarForScreenReaders=function w(){this.$doormatSectionHeading.attr("tabindex",0);
this.$doormatSidebarItems.attr({tabindex:-1,"aria-hidden":"true"});
this.$submenuWrapper.attr("aria-hidden","false")
};
o.prototype.showSidebarForScreenReaders=function t(){this.$doormatMenu.attr("aria-hidden","true");
this.$doormatSectionHeading.attr("tabindex",-1);
this.$doormatSidebarItems.attr({tabindex:0,"aria-hidden":"false"});
this.$submenuWrapper.attr("aria-hidden","true")
};
o.prototype.makePageContentInaccessible=function z(){this.$header.siblings("div").wrapAll(g("<div>").addClass("page"));
this.$header.siblings(".page").attr("aria-hidden","true");
this.$sidebar.siblings("div").attr("aria-hidden","true")
};
o.prototype.makePageContentAccessible=function r(){this.$header.siblings(".page").children().unwrap();
this.$sidebar.siblings("div").removeAttr("aria-hidden")
};
o.prototype.calculatePositionSidebarHiddenCloseButton=function l(){this.$sidebarHiddenCloseButton.css("top",this.$header.innerHeight()-28)
};
return o
}()
}),(function(d,b,f){var a=f(27);
var c=f(154);
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}(function(l){var k={searchContainer:".header-mobile-search-container",clearCircle:".clear-container",searchBox:".search-box",searchOverlay:".search-overlay"},j={hidden:"hidden"};
var h=function(){function n(t){e(this,n);
this.$el=l(t);
this.$clearCircle=this.$el.find(k.clearCircle);
this.$searchBox=this.$el.find(k.searchBox);
this.$searchOverlay=this.$el.find(k.searchOverlay);
this.suggestions=new a.SearchMobileSuggestions(this.$el);
this.bindUIEvents();
this.manageClearCircleVisibility();
new c.SearchMobileAlly(this)
}n.prototype.bindUIEvents=function p(){var w=this;
this.$clearCircle.on("click",function(){w.clearSearchBox();
w.manageClearCircleVisibility()
});
this.$searchBox.on({blur:function v(){return w.setOverlayVisibility(false)
},focusin:function u(){return w.setOverlayVisibility(true)
},input:function t(){return w.handleInputChange()
}})
};
n.prototype.handleInputChange=function s(){this.manageClearCircleVisibility()
};
n.prototype.clearSearchBox=function q(){this.$searchBox.val("").focus()
};
n.prototype.manageClearCircleVisibility=function o(){g(this.$clearCircle,this.$searchBox.val().length)
};
n.prototype.setOverlayVisibility=function r(t){g(this.$searchOverlay,t)
};
return n
}();
function g(o,n){if(n){o.removeClass(j.hidden)
}else{o.addClass(j.hidden)
}}var i={name:"Mobile Search",selector:k.searchContainer,init:function m(n){return new h(n)
}};
HSBC_utils.registerComponent(i)
})(Bootstrap.jQuery)
}),(function(d,a,f){a.__esModule=true;
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var c={searchButton:".header-search-button"};
var b=a.SearchMobileAlly=function(){function h(j){e(this,h);
this.$el=j.$el;
this.context=j;
this.$searchButton=this.$el.find(c.searchButton);
this.changeSearchButtonBehavior();
this.bindUIEvents()
}h.prototype.bindUIEvents=function g(){var k=this;
var j=this.context;
j.$searchBox.on("input",function(){return k.changeSearchButtonBehavior()
});
j.$clearCircle.on("click",function(){return k.changeSearchButtonBehavior()
})
};
h.prototype.changeSearchButtonBehavior=function i(){var j=this.context,l=!j.$searchBox.val().length?-1:0,k=!j.$searchBox.val().length?"true":"false";
this.$searchButton.attr("tabindex",l);
this.$searchButton.attr("aria-hidden",k)
};
return h
}()
}),(function(e,c,h){var b=h(65);
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var d={messagingBanner:".messaging-banner.pub",critical:".A-PNLDRED-RW-ALL",warning:".A-PNLGLD-RW-ALL",general:".A-PNLDSPHR-RW-ALL",closeButton:".close-message-button"},f=Bootstrap.jQuery;
var a=function(){function i(m){g(this,i);
this.$el=f(m);
this.processGroup(d.critical,sessionStorage,"HSBC_msgs_critical");
this.processGroup(d.warning,sessionStorage,"HSBC_msgs_warning");
this.processGroup(d.general,localStorage,"HSBC_msgs_general");
this.showMessage()
}i.prototype.showMessage=function l(){this.$el.show();
f(window).trigger("headerMessageChange")
};
i.prototype.processGroup=function k(m,q,n){var p=this.$el.children(m);
var o=new b.MessageIdManager(q,n);
this.processMessages(p.children(),o)
};
i.prototype.processMessages=function j(o,n){var m=[];
o.each(function(q,s){var p=f(s),r=p.find(d.closeButton),t=r.data("messageId");
if(n.has(t)){p.hide();
m.push(t)
}else{r.click(function(){p.hide();
n.add(t);
f(window).trigger("headerMessageChange")
})
}});
f(window).trigger("headerMessageChange");
n.updateAll(m)
};
return i
}();
(function(){HSBC_utils.registerComponent({name:"messagingBanner",selector:d.messagingBanner,init:function i(j){return new a(j)
}})
})()
}),(function(c,v,d){var e=d(66);
function f(w,x){if(!(w instanceof x)){throw new TypeError("Cannot call a class as a function")
}}var h=Bootstrap.jQuery,t={description:"text-container",modalWindow:"M-MODWIN-DEV",modalWindowOverlay:"modal-window-overlay",externalLinkModal:"external-link-modal",cancelTrigger:"mw-cancel-trigger",allowTrigger:"mw-allow-trigger",isVisible:"is-visible",hide:"hidden",modalAnnouncement:"modal-announcement-sr-text",scrollbarHidden:"vertical-scrollbar-hidden"},r="data-content-id",m="default",g={link:"a",component:"[data-external-link-modal-url]",allContents:"[data-content-id]",allNonDefaultContents:"["+r+"]["+r+' != "'+m+'"]'},a="external-link-modal-url",j={animation:200},q=h("body"),u=h(document);
var k=function(){function F(M){f(this,F);
this.$moduleElement=h(M);
this.modalSource=this.$moduleElement.data(a);
this.$link=null;
this.$modal=null;
this.bindUIEvents();
this.allyModule=new e.ModalWindowAlly(this)
}F.prototype.bindUIEvents=function x(){var M=this;
if(this.modalSource){u.on("click",g.link,function(N){return M.linkClickHandler(N)
}).on("modalWindow:switchedToEdit",g.link,function(N){return M.close()
})
}};
F.prototype.linkClickHandler=function L(O){this.$link=h(O.target);
if(O.target.tagName.toLowerCase()!==g.link){this.$link=this.$link.parents(g.link)
}var M=this.$link.attr("href")||"";
if(!M.length){return
}this.$link.data("which",O.which);
if(O.which!=1){O.preventDefault()
}var N=this.analyzeUrl(M,window.dpwsExternalLinkConfiguration);
if(N.isModal){O.preventDefault();
if(!HSBC_utils.isEditMode()){if(!this.$modal){this.getMarkup();
n(q,t.scrollbarHidden)
}else{this.open();
n(q,t.scrollbarHidden)
}}}if(O.isDefaultPrevented()&&!N.isModal&&N.inWhiteList){this.leave()
}};
F.prototype.analyzeUrl=function I(O,T){var P=new RegExp("(^#)|(^/)|(^../)|(^mailto:)|(^tel:)|(^javascript*)((?!.location=).)*$"),S=new RegExp("(^http)|(^ftp)|(^//)|(^javascript.*.location=)");
if(S.test(O)){var N=O.split("//").slice(1)[0],Q=N.split("/")[0],R=N.split("/").slice(1).join("/");
this.contentId=b(Q,R,T.blacklist);
var M=p(Q,R,T.whitelist);
return this.linkCharacteristics(this.contentId||!M,M)
}else{if(P.test(O)){return this.linkCharacteristics(false,false)
}}return this.linkCharacteristics(true,false)
};
F.prototype.linkCharacteristics=function C(N,M){return{isModal:N,inWhiteList:M}
};
F.prototype.getMarkup=function E(){var N=this;
if(!this.modalSource){return
}h.ajax({type:"GET",dataType:"HTML",url:this.modalSource,success:function O(P){N.setUpModalWindow(h('<div class="'+t.modalWindowOverlay+" "+t.externalLinkModal+'"><div class="'+t.modalWindow+'">'+P+"</div></div>"));
N.open()
},error:function M(P){return console.error(P)
}})
};
F.prototype.open=function D(){var M=this;
this.setSpecificContent();
this.$modal.addClass(t.isVisible).removeAttr("aria-hidden").removeAttr("aria-disabled").siblings().attr("aria-hidden","true").css("display","none");
this.setTabIndexElementValue(-1,this.$descriptionEl);
this.defer(function(){return M.$descriptionEl.focus()
},j.animation);
this.focusedElBeforeOpen=document.activeElement
};
F.prototype.setSpecificContent=function A(){this.$modal.find(g.allContents).addClass(t.hide);
this.$modal.find("["+r+'="'+(this.contentId||m)+'"]').removeClass(t.hide)
};
F.prototype.close=function J(){if(this.$modal){var N=this.$modal.find("."+t.modalAnnouncement);
N.removeClass(t.hide);
this.$modal.removeClass(t.isVisible).attr("aria-hidden","true").attr("aria-disabled","true").siblings().removeAttr("aria-hidden").css("display","")
}if(this.$link){this.$link.removeAttr("data-which");
var M=this;
this.defer(function(){M.$link.get(0).focus()
})
}n(q,t.scrollbarHidden);
this.bringBackFocus()
};
F.prototype.bringBackFocus=function K(){if(!this.focusedElBeforeOpen){return
}this.focusedElBeforeOpen.focus();
var N=h(this.focusedElBeforeOpen);
if(N.is(":focusable")){N.get(0).focus()
}else{while(true){var M=N.siblings(":focusable");
if(M.length>0){M.get(0).focus();
break
}if(N.is("body")){N.get(0).focus();
break
}N=N.parent()
}}};
F.prototype.defer=function w(N,M){setTimeout(N||function(){},M||5)
};
F.prototype.leave=function H(){var M=this.$link.attr("href"),N=this.$link.data("which")==2?"_blank":this.$link.attr("target");
if(N){window.open(M,N)
}else{window.location.href=M
}this.close()
};
F.prototype.setUpModalWindow=function y(M){this.$modal=u.find(t.externalLinkModal);
if(!this.$modal.length){this.$modal=M;
this.$modal.appendTo(q)
}this.$modal.removeClass(t.isVisible);
this.cacheModalElements();
this.lateBindUIEvents();
this.$modal.find(g.allNonDefaultContents).each(function(){h(this).parent().replaceWith(this)
})
};
F.prototype.setTabIndexElementValue=function G(N,M){if(!M.attr("tabindex")){M.attr("tabindex",N)
}else{return
}};
F.prototype.cacheModalElements=function z(){this.$cancelTriggers=this.$modal.find("."+t.cancelTrigger);
this.$allowTriggers=this.$modal.find("."+t.allowTrigger);
this.$descriptionEl=this.$modal.find("."+t.description)
};
F.prototype.lateBindUIEvents=function B(){var M=this;
this.$cancelTriggers.on("click",function(N){return M.close()
});
this.$allowTriggers.on("click",function(N){return M.leave()
});
this.$modal.on("click",function(O){var N=h(O.target);
if(!i(N)&&!N.hasClass(t.modalWindowOverlay)){M.close()
}});
this.allyModule.bindUIEvents()
};
return F
}();
function n(x,w){x.hasClass(w)?x.removeClass(w):x.addClass(w)
}function i(w){return w.parents("."+t.modalWindow).length
}function o(){h(g.link).trigger("modalWindow:switchedToEdit")
}function b(A,B,z){for(var w in z){var x=z[w];
for(var y=0;
y<x.length;
y++){if(l(A,B,x[y])){return w
}}}return null
}function p(y,z,x){for(var w=0;
w<x.length;
w++){if(l(y,z,x[w])){return true
}}return false
}function l(A,B,x){var w=x,z="",y=false;
if(x.indexOf("://")>=0){x=w=x.split("://").slice(1)[0]
}if(x.indexOf("/")>=0){w=x.split("/")[0];
z=x.split("/").slice(1).join("/")
}if(A.length>=w.length){if(A==w){y=true
}else{if(A.indexOf(w)>=0){if(A.lastIndexOf("."+w)==A.length-w.length-1){y=true
}}}if(y){if(z.length==0||B.indexOf(z)==0){return true
}}}return false
}HSBC_utils.registerComponent({name:"externalLinkModalWindow",selector:g.component,init:function s(w){return new k(w)
},switchToEditHandler:o})
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(i){var g={notificationBanner:".notification-banner",closeButton:".close-notification-banner",row:".row"},f={hidden:"hidden"},h={sessionDismissal:"session-dismissal"},e={name:"notification_banner_dismissed",value:"hide"};
var k=function(){function m(o){c(this,m);
this.$el=i(o);
this.$closeButton=this.$el.find(g.closeButton);
this.$parentRow=this.$el.closest(g.row);
if(HSBC_utils.getCookie(e.name)===e.value&&!HSBC_utils.isEditMode()){this.closeBanner()
}else{this.$el.removeClass(f.hidden);
this.bindUIEvents()
}}m.prototype.bindUIEvents=function l(){var p=this;
var o=this.$el.data(h.sessionDismissal);
this.$closeButton.on("click",function(){p.closeBanner();
if(o){HSBC_utils.setCookie(e.name,e.value)
}})
};
m.prototype.closeBanner=function n(){HSBC_utils.collapseElement(this.$parentRow,true)
};
return m
}();
HSBC_utils.registerComponent({name:"notificationBanner",selector:g.notificationBanner,init:function j(l){return new k(l)
}})
})(Bootstrap.jQuery)
}),(function(b,c,a){var i=a(1);
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}var e=Bootstrap.jQuery,g=HSBC_utils,h={socialMediaFooter:".socialMediaFooter",link:"a"};
var f=function f(l){d(this,f);
this.$el=e(l);
this.$links=this.$el.find(h.link);
this.tealiumObserver=new i.TealiumObserver(this.$links,{event_type:"click",event_category:"follow",event_action:function k(m){return e(m).parent().find(".visuallyhidden").text()
}})
};
g.registerComponent({name:"socialMediaFooter",selector:h.socialMediaFooter,init:function j(k){return new f(k)
}})
}),(function(d,f,c){var j=c(1);
function g(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}var h=Bootstrap.jQuery,e={socialSharing:".social-media-sharing",dropTrigger:".drop-trigger",dropContent:".drop-content",links:"a[href]",visuallyHidden:".visuallyhidden"},l={open:"open"},a={triggerPrefix:".trigger-",logger:true},b={ariaExpanded:"aria-expanded",ariaLabel:"aria-label",ariaLive:"aria-live",dataScreenReaderExpandedText:"screen-reader-expanded-text",dataScreenReaderCollapsedText:"screen-reader-collapsed-text",androidDeviceSelector:'html[class*="android"]'};
var i=function(){function x(C){g(this,x);
this.$el=h(C);
this.$links=this.$el.find(e.links);
this.$dropTrigger=this.$el.find(e.dropTrigger);
this.$dropContent=this.$el.find(e.dropContent);
this.showHideDropdown().facebook().twitter().pinterest().linkedin();
new j.TealiumObserver(this.$links,{event_type:"click",event_category:"share",event_action:function B(D){return h(D).parent().find(e.visuallyHidden).text()
}});
this.ally()
}x.prototype.ally=function v(){var I=this;
this.$dropTrigger.open=this.$dropTrigger.hasClass(l.open);
this.expandedFlag=this.$dropTrigger.open;
var B=this.$dropTrigger.data(b.dataScreenReaderExpandedText),E=this.$dropTrigger.data(b.dataScreenReaderCollapsedText),D=this.$dropTrigger.attr(b.ariaLabel),F=!!h(b.androidDeviceSelector).length;
B=D+" "+B;
E=D+" "+E;
H(this,this.expandedFlag);
if(F){C(this)
}this.$dropTrigger.on("click",function(J){I.expandedFlag=I.$dropTrigger.open;
H(I,!I.expandedFlag);
if(!I.expandedFlag){G(I)
}});
function H(K,J){K.$dropTrigger.open=J;
K.$dropTrigger.attr(b.ariaLabel,J?B:E)
}function G(J){var K=J.$dropContent.find(e.links).get(0);
if(K){x.defer(function(){K.focus()
})
}}function C(J){J.$dropTrigger.attr(b.ariaLive,"assertive")
}};
x.defer=function n(B){B=B||function(){};
return setTimeout(function(){B()
},3)
};
x.prototype.showHideDropdown=function y(){var B=this;
this.$dropContent.hide();
this.$dropTrigger.on("click",function(C){C.preventDefault();
if(B.$dropTrigger.hasClass(l.open)){B.$dropContent.slideUp(function(){B.$dropTrigger.removeClass(l.open)
})
}else{B.$dropContent.slideDown();
B.$dropTrigger.addClass(l.open)
}});
return this
};
x.prototype.facebook=function t(){var B=this.$fetchSocialLink("facebook");
if(!B.length){return this
}B.attr("href",B.data("href-template").replace("{{url}}",this.fetchEncodedUrl()));
return this
};
x.prototype.twitter=function r(){var B=this.$fetchSocialLink("twitter");
if(!B.length){return this
}B.attr("href",B.data("href-template").replace("{{url}}",this.fetchEncodedUrl()));
return this
};
x.prototype.pinterest=function q(){var B=this.$fetchSocialLink("pinterest");
if(!B.length){return this
}B.attr("href",B.data("href-template").replace("{{imageurl}}",this.fetchContentImageEncodedUrl()).replace("{{imagename}}",this.fetchContentImageName()).replace("{{imagedescription}}",this.fetchContentImageDescription()));
return this
};
x.prototype.linkedin=function o(){var B=this.$fetchSocialLink("linkedin");
if(!B.length){return this
}B.attr("href",B.data("href-template").replace("{{url}}",this.fetchEncodedUrl()).replace("{{pagetitle}}",this.fetchPageTitle()).replace("{{pagesummary}}",this.fetchPageSummary()));
return this
};
x.prototype.fetchEncodedUrl=function u(){var B=h('[property="og:url"]').attr("content")||"";
return encodeURIComponent(B?B:document.location+"")
};
x.prototype.fetchContentImageEncodedUrl=function A(){var B=h('[property="og:image"]').attr("content")||"";
return encodeURIComponent(B)
};
x.prototype.fetchContentImageName=function m(){return this.fetchPageTitle()||""
};
x.prototype.fetchContentImageDescription=function z(){return this.fetchPageSummary()||""
};
x.prototype.fetchPageTitle=function w(){return h('[property="og:title"]').attr("content")||h("title").text()||""
};
x.prototype.fetchPageSummary=function p(){return h('[property="og:description"]').attr("content")||h('[name="description"]').attr("content")||""
};
x.prototype.$fetchSocialLink=function s(B){return this.$el.find(a.triggerPrefix+B)
};
return x
}();
function k(m){new i(m)
}HSBC_utils.registerComponent({name:"socialSharing",selector:e.socialSharing,init:k})
}),(function(b,a,d){function c(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}(function(h){var f={loanCalculator:".loan-calculator-tool",inputs:"input",deptToIncomeRatio:"input[name=lc-dept-to-income-ratio]",income:"input[name=lc-income]",rate:"input[name=lc-rate]",idPeriod:"label[for=lc-period]",period:"input[name=lc-period]",sliderPeriod:"div[data-name=lc-sliderPeriod]",sliderPeriodHandle:"div[data-name=lc-sliderPeriod] > .ui-slider-handle",tablesContainerMedium:"div[data-name=lc-tablesContainerMedium]",tablesContainerLarge:"div[data-name=lc-tablesContainerLarge]",tablesWrapper:"div[data-name=lc-tablesWrapper]",inputsDiv:".lc-inputs",resultsDiv:".lc-results",ratePostfix:".lc-rate-postfix",inputBox:".lc-input-box",rangeError:"div[data-name=lc-range-error]",lettersError:"div[data-name=lc-letters-error]",syntaxError:"div[data-name=lc-syntax-error]",maximumLoanAmount:"p[data-name=lc-maximumLoanAmount]",monthlyRepaymentAmount:"span[data-name=lc-monthlyRepaymentAmount]",monthlyLoanPeriod:"td[data-name=lc-monthlyLoanPeriod]",monthlyInterestPayable:"td[data-name=lc-monthlyInterestPayable]",monthlyTotalRepayment:"td[data-name=lc-monthlyTotalRepayment]",fortnightlyRepaymentAmount:"span[data-name=lc-fortnightlyRepaymentAmount]",fortnightlyLoanPeriod:"td[data-name=lc-fortnightlyLoanPeriod]",fortnightlyInterestPayable:"td[data-name=lc-fortnightlyInterestPayable]",fortnightlyTotalRepayment:"td[data-name=lc-fortnightlyTotalRepayment]",headLoanCalculator:".lc-head-info",errorTextContainer:".lc-error-text",errorMessage:".lc-error-message"};
var g=function(){function x(A){c(this,x);
this.$lc=h(A);
this.$idPeriod=this.$lc.find(f.idPeriod).text();
this.$sliderPeriod=h(this.getElement(f.sliderPeriod));
this.$period=h(this.getElement(f.period));
this.$rate=h(this.getElement(f.rate));
this.$income=h(this.getElement(f.income));
this.$deptToIncomeRatio=Number(this.getValue(f.deptToIncomeRatio));
this.$ratePostfix=h(this.getElement(f.ratePostfix));
this.tablesContainerMedium=this.getElement(f.tablesContainerMedium);
this.tablesContainerLarge=this.getElement(f.tablesContainerLarge);
this.tablesWrapper=this.getElement(f.tablesWrapper);
this.$headLoanCalculator=this.$lc.find(f.headLoanCalculator);
this.$errorTextContainer=this.$lc.find(f.errorTextContainer);
this.$inputs=this.$lc.find(f.inputs);
this.value=this.$sliderPeriod.data("lc-value");
this.min=this.$sliderPeriod.data("lc-min");
this.max=this.$sliderPeriod.data("lc-max");
this.mq=null;
this.hasErrors={"lc-income-range":false,"lc-income-syntax":false,"lc-income-letters":false,"lc-rate-range":false,"lc-rate-syntax":false,"lc-rate-letters":false,"lc-period-range":false,"lc-period-syntax":false,"lc-period-letters":false};
this.createAndSetSlider();
this.bindUIEvents();
this.changeWidth();
this.resizeColumns();
this.calculate()
}x.prototype.createAndSetSlider=function w(){var B=this;
this.$sliderPeriod.slider({range:"min",value:this.value,min:this.min,max:this.max,step:1});
this.$sliderHandle=this.$lc.find(f.sliderPeriodHandle);
this.$sliderPeriod.slider({slide:function A(C,D){B.$period.val(D.value);
B.$sliderHandle.attr("aria-valuenow",D.value);
B.calculate()
}});
this.$period.val(this.$sliderPeriod.slider("value"));
this.$sliderHandle.attr({role:"slider","aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-labelledby":this.$idPeriod})
};
x.prototype.bindUIEvents=function j(){var A=this;
this.$period.on("change keyup blur",function(){var C=A.$period.val(),B=A.$lc.find(f.sliderPeriodHandle);
A.$sliderPeriod.slider("option","value",C);
B.attr("aria-valuenow",C)
});
this.$rate.on("change keyup blur",function(){var F=A.$rate.val(),B=30,D=9,C=F.replace(".","").length,E=C*D+B;
A.$ratePostfix.css("left",E)
});
this.$inputs.on("focus",function(){return A.$headLoanCalculator.attr("aria-hidden","true")
}).on("focusout",function(){return A.$headLoanCalculator.attr("aria-hidden","false")
});
this.$income.on("change keyup",function(){if(A.validateNumbers(A.$income)){var B=Number(A.$income.val().replace(/\.|,/g,""));
A.parseNumericWithoutLosingCursorPosition(A.$income,B,"locale");
if(A.$income.data("lc-min")<=B&&B<=A.$income.data("lc-max")){A.toggleError(A.$income,"hide","range");
A.calculate()
}else{A.toggleError(A.$income,"show","range")
}}else{A.toggleError(A.$income,"hide","range")
}});
this.$rate.on("change keyup",function(){if(A.validateNumbers(A.$rate)){var F=A.$rate.val();
A.parseNumericWithoutLosingCursorPosition(A.$rate,null,"replace");
if(h.isNumeric(F)){var C=Number(F),G=C.toString().split("."),B=2,D=3;
var E=0;
if(G.length===B){E=G[1].length
}if(E>D){A.toggleError(A.$rate,"hide","range");
A.toggleError(A.$rate,"show","syntax")
}else{A.toggleError(A.$rate,"hide","syntax");
if(A.$rate.data("lc-min")<=C&&C<=A.$rate.data("lc-max")){A.toggleError(A.$rate,"hide","range");
A.calculate()
}else{A.toggleError(A.$rate,"show","range")
}}}else{A.toggleError(A.$rate,"show","syntax");
A.toggleError(A.$rate,"hide","range")
}}else{A.toggleError(A.$rate,"hide","range");
A.toggleError(A.$rate,"hide","syntax")
}});
this.$period.on("change keyup",function(){if(A.validateNumbers(A.$period)){var B=Number(A.$period.val().replace(/\.|,/g,""));
A.parseNumericWithoutLosingCursorPosition(A.$period,B,"numericValue");
if(A.$period.data("lc-min")<=B&&B<=A.$period.data("lc-max")){A.toggleError(A.$period,"hide","range");
A.calculate()
}else{A.toggleError(A.$period,"show","range")
}}else{A.toggleError(A.$period,"hide","range")
}});
h(window).on("resize",function(){A.changeWidth();
A.resizeColumns()
})
};
x.prototype.parseNumericWithoutLosingCursorPosition=function y(C,D){var E=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"locale";
var G=C[0].selectionStart,B=C[0].selectionEnd,A=0;
var F=C.val().length;
if(E==="locale"){C.val(D.toLocaleString("en"))
}else{if(E==="replace"){C.val(C.val().replace(",","."))
}else{if(E==="numericValue"){C.val(D)
}}}A=C.val().length-F;
G+=A;
B+=A;
C[0].setSelectionRange(G,B)
};
x.prototype.getElement=function m(A){return this.$lc.find(A)[0]
};
x.prototype.getValue=function t(A){return this.$lc.find(A).eq(0).val()
};
x.prototype.setText=function u(A,B){this.$lc.find(A).eq(0).find("span").text(B)
};
x.prototype.setError=function o(A,B){this.hasErrors[A.attr("name")+"-"+B]=true
};
x.prototype.removeError=function p(A,B){this.hasErrors[A.attr("name")+"-"+B]=false
};
x.prototype.checkIfHasErrors=function k(){var A=false;
h.each(this.hasErrors,function(B,C){if(C===true){A=true;
return false
}});
return A
};
x.prototype.calculateTotalAmount=function r(){var C=void 0,F=this.getValue(f.income).replace(/,/g,""),B=this.getValue(f.rate)/1200,E=this.getValue(f.period),G=12,A=E*G,D=this.$deptToIncomeRatio;
C=Math.round(F*D*(1-Math.pow(1+B,-A))/B);
return C
};
x.prototype.calculateRepaymentResult=function n(B,G){var C=12,J=this.getValue(f.rate),M=J/C/100,L=this.getValue(f.period),P=L*C,E=B*M/(1-Math.pow(1+M,-P)),H=void 0,K=void 0,F=0,A=0,O=0,N=0,I=0,D=0;
if(G==="fr"){E=E/2
}H=E;
if(G==="mr"){I=12
}else{I=26
}J=J/100/I;
while(B>0){O=B*J;
K=E-O;
B=B-K;
if(B<=0){E=E+B
}A=A+E;
N=N+O;
D++
}if(D%I===0){F=D/I
}else{F=Math.round(10*(D/I))/10
}if(G==="mr"){F=Math.round(F)
}return{repayment:Number(Math.round(H)),period:Number(Number(F).toFixed(1)),totalInterest:Number(Math.round(N)),totalRepayment:Number(Math.round(A))}
};
x.prototype.calculate=function s(){if(!this.checkIfHasErrors()){var C=this.calculateTotalAmount(),B=this.calculateRepaymentResult(C,"mr"),A=this.calculateRepaymentResult(C,"fr");
this.setText(f.maximumLoanAmount,C.toLocaleString("en"));
this.setText(f.monthlyRepaymentAmount,B.repayment.toLocaleString("en"));
this.setText(f.monthlyLoanPeriod,B.period.toLocaleString("en"));
this.setText(f.monthlyInterestPayable,B.totalInterest.toLocaleString("en"));
this.setText(f.monthlyTotalRepayment,B.totalRepayment.toLocaleString("en"));
this.setText(f.fortnightlyRepaymentAmount,A.repayment.toLocaleString("en"));
this.setText(f.fortnightlyLoanPeriod,A.period.toLocaleString("en"));
this.setText(f.fortnightlyInterestPayable,A.totalInterest.toLocaleString("en"));
this.setText(f.fortnightlyTotalRepayment,A.totalRepayment.toLocaleString("en"))
}};
x.prototype.changeWidth=function z(){if(!HSBC_utils.matchMedia.desktop){this.tablesContainerMedium.appendChild(this.tablesWrapper)
}else{this.tablesContainerLarge.appendChild(this.tablesWrapper)
}};
x.prototype.resizeColumns=function v(){var B=h(this.getElement(f.inputsDiv)),A=B.outerHeight(true),C=h(this.getElement(f.resultsDiv)).outerHeight(true);
if(A<=C){B.outerHeight(C)
}else{B.outerHeight("auto")
}};
x.prototype.validateNumbers=function l(A){if(!/^[,\.0-9]+$/.test(A.val())){this.toggleError(A,"show","letters");
return false
}else{this.toggleError(A,"hide","letters");
return true
}};
x.prototype.toggleError=function q(J,B,E){var G=void 0,D=J.closest(f.inputBox).find(f.errorMessage),C=D.find(this.$errorTextContainer),A=J.attr("name"),H=A+"-range",F=A+"-letters",I=A+"-syntax";
if(B==="show"){this.setError(J,E)
}else{this.removeError(J,E)
}if(this.hasErrors[H]||this.hasErrors[F]||this.hasErrors[I]){if(this.hasErrors[H]){G=D.data("temp_error_1")
}else{if(this.hasErrors[F]){G=D.data("temp_error_2")
}else{if(this.hasErrors[I]){G=D.data("temp_error_3")
}}}C.text(G);
D.show()
}else{C.text("");
D.hide()
}};
return x
}();
var e={name:"loanCalculator",selector:f.loanCalculator,init:function i(j){return new g(j)
}};
HSBC_utils.registerComponent(e)
})(Bootstrap.jQuery)
})]);
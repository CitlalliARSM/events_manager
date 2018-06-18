if (!window['google']) {
window['google'] = {};
}
if (!window['google']['loader']) {
window['google']['loader'] = {};
google.loader.ServiceBase = 'http://www.google.com/uds';
google.loader.GoogleApisBase = 'http://ajax.googleapis.com/ajax';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
google.loader.Secure = false;
google.loader.GoogleLocale = 'www.google.com';
google.loader.ClientLocation = {"latitude":0,"longitude":0,"address":{"city":"","":"","country":"","country_code":""}};
google.loader.AdditionalParams = '';
(function() {var d=true,e=null,g=false,h=encodeURIComponent,j=window,k=google,m=undefined,n=document;function p(a,b){return a.load=b}var q="push",s="replace",t="charAt",u="ServiceBase",v="name",w="getTime",x="length",y="prototype",z="setTimeout",A="loader",B="substring",C="join",D="toLowerCase";function E(a){if(a in F)return F[a];return F[a]=navigator.userAgent[D]().indexOf(a)!=-1}var F={};function G(a,b){var c=function(){};c.prototype=b[y];a.S=b[y];a.prototype=new c}
function H(a,b){var c=a.G||[];c=c.concat(Array[y].slice.call(arguments,2));if(typeof a.t!="undefined")b=a.t;if(typeof a.s!="undefined")a=a.s;var f=function(){var i=c.concat(Array[y].slice.call(arguments));return a.apply(b,i)};f.G=c;f.t=b;f.s=a;return f}function I(a){a=new Error(a);a.toString=function(){return this.message};return a}function J(a,b){a=a.split(/\./);for(var c=j,f=0;f<a[x]-1;f++){c[a[f]]||(c[a[f]]={});c=c[a[f]]}c[a[a[x]-1]]=b}function K(a,b,c){a[b]=c}if(!L)var L=J;if(!M)var M=K;k[A].u={};L("google.loader.callbacks",k[A].u);var N={},O={};k[A].eval={};L("google.loader.eval",k[A].eval);
p(k,function(a,b,c){function f(r){var o=r.split(".");if(o[x]>2)throw I("Module: '"+r+"' not found!");else if(typeof o[1]!="undefined"){i=o[0];c.packages=c.packages||[];c.packages[q](o[1])}}var i=a;c=c||{};if(a instanceof Array||a&&typeof a=="object"&&typeof a[C]=="function"&&typeof a.reverse=="function")for(var l=0;l<a[x];l++)f(a[l]);else f(a);if(a=N[":"+i]){if(c&&!c.language&&c.locale)c.language=c.locale;if(c&&typeof c.callback=="string"){l=c.callback;if(l.match(/^[[\]A-Za-z0-9._]+$/)){l=j.eval(l);
c.callback=l}}if((l=c&&c.callback!=e)&&!a.r(b))throw I("Module: '"+i+"' must be loaded before DOM onLoad!");else if(l)a.l(b,c)?j[z](c.callback,0):a.load(b,c);else a.l(b,c)||a.load(b,c)}else throw I("Module: '"+i+"' not found!");});L("google.load",k.load);k.R=function(a,b){b?aa(a):P(j,"load",a)};L("google.setOnLoadCallback",k.R);function P(a,b,c){if(a.addEventListener)a.addEventListener(b,c,g);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var f=a["on"+b];a["on"+b]=f!=e?ba([c,f]):c}}
function ba(a){return function(){for(var b=0;b<a[x];b++)a[b]()}}var Q=[];function aa(a){if(Q[x]==0){P(j,"load",R);if(!E("msie")&&!(E("safari")||E("konqueror"))&&E("mozilla")||j.opera)j.addEventListener("DOMContentLoaded",R,g);else if(E("msie"))n.write("<script defer onreadystatechange='google.loader.domReady()' src=//:><\/script>");else(E("safari")||E("konqueror"))&&j[z](ca,10)}Q[q](a)}
k[A].M=function(){var a=j.event.srcElement;if(a.readyState=="complete"){a.onreadystatechange=e;a.parentNode.removeChild(a);R()}};L("google.loader.domReady",k[A].M);var da={loaded:d,complete:d};function ca(){if(da[n.readyState])R();else Q[x]>0&&j[z](ca,10)}function R(){for(var a=0;a<Q[x];a++)Q[a]();Q.length=0}
k[A].e=function(a,b,c){if(c){var f;if(a=="script"){f=n.createElement("script");f.type="text/javascript";f.src=b}else if(a=="css"){f=n.createElement("link");f.type="text/css";f.href=b;f.rel="stylesheet"}(a=n.getElementsByTagName("head")[0])||(a=n.body.parentNode.appendChild(n.createElement("head")));a.appendChild(f)}else if(a=="script")n.write('<script src="'+b+'" type="text/javascript"><\/script>');else a=="css"&&n.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
L("google.loader.writeLoadTag",k[A].e);k[A].O=function(a){O=a};L("google.loader.rfm",k[A].O);k[A].Q=function(a){for(var b in a)if(typeof b=="string"&&b&&b[t](0)==":"&&!N[b])N[b]=new T(b[B](1),a[b])};L("google.loader.rpl",k[A].Q);k[A].P=function(a){if((a=a.specs)&&a[x])for(var b=0;b<a[x];++b){var c=a[b];if(typeof c=="string")N[":"+c]=new U(c);else{c=new V(c[v],c.baseSpec,c.customSpecs);N[":"+c[v]]=c}}};L("google.loader.rm",k[A].P);k[A].loaded=function(a){N[":"+a.module].j(a)};
L("google.loader.loaded",k[A].loaded);k[A].L=function(){var a=(new Date)[w](),b=Math.floor(Math.random()*1E7);return"qid="+(a.toString(16)+b.toString(16))};L("google.loader.createGuidArg_",k[A].L);J("google_exportSymbol",J);J("google_exportProperty",K);k[A].b={};L("google.loader.themes",k[A].b);k[A].b.A="http://www.google.com/cse/style/look/bubblegum.css";M(k[A].b,"BUBBLEGUM",k[A].b.A);k[A].b.C="http://www.google.com/cse/style/look/greensky.css";M(k[A].b,"GREENSKY",k[A].b.C);k[A].b.B="http://www.google.com/cse/style/look/espresso.css";
M(k[A].b,"ESPRESSO",k[A].b.B);k[A].b.F="http://www.google.com/cse/style/look/shiny.css";M(k[A].b,"SHINY",k[A].b.F);k[A].b.D="http://www.google.com/cse/style/look/minimalist.css";M(k[A].b,"MINIMALIST",k[A].b.D);function U(a){this.a=a;this.p=[];this.o={};this.c={};this.k=d;this.d=-1}
U[y].g=function(a,b){var c="";if(b!=m){if(b.language!=m)c+="&hl="+h(b.language);if(b.nocss!=m)c+="&output="+h("nocss="+b.nocss);if(b.nooldnames!=m)c+="&nooldnames="+h(b.nooldnames);if(b.packages!=m)c+="&packages="+h(b.packages);if(b.callback!=e)c+="&async=2";if(b.style!=m)c+="&style="+h(b.style);if(b.other_params!=m)c+="&"+b.other_params}if(!this.k){if(k[this.a]&&k[this.a].JSHash)c+="&sig="+h(k[this.a].JSHash);b=[];for(var f in this.o)f[t](0)==":"&&b[q](f[B](1));for(f in this.c)f[t](0)==":"&&b[q](f[B](1));
c+="&have="+h(b[C](","))}return k[A][u]+"/?file="+this.a+"&v="+a+k[A].AdditionalParams+c};U[y].w=function(a){var b=e;if(a)b=a.packages;var c=e;if(b)if(typeof b=="string")c=[a.packages];else if(b[x]){c=[];for(a=0;a<b[x];a++)typeof b[a]=="string"&&c[q](b[a][s](/^\s*|\s*$/,"")[D]())}c||(c=["default"]);b=[];for(a=0;a<c[x];a++)this.o[":"+c[a]]||b[q](c[a]);return b};
p(U[y],function(a,b){var c=this.w(b),f=b&&b.callback!=e;if(f)var i=new W(b.callback);for(var l=[],r=c[x]-1;r>=0;r--){var o=c[r];f&&i.H(o);if(this.c[":"+o]){c.splice(r,1);f&&this.c[":"+o][q](i)}else l[q](o)}if(c[x]){if(b&&b.packages)b.packages=c.sort()[C](",");if(!b&&O[":"+this.a]!=e&&O[":"+this.a].versions[":"+a]!=e&&!k[A].AdditionalParams&&this.k){a=O[":"+this.a];k[this.a]=k[this.a]||{};for(var S in a.properties)if(S&&S[t](0)==":")k[this.a][S[B](1)]=a.properties[S];k[A].e("script",k[A][u]+a.path+
a.js,f);a.css&&k[A].e("css",k[A][u]+a.path+a.css,f)}else if(!b||!b.autoloaded)k[A].e("script",this.g(a,b),f);if(this.k){this.k=g;this.d=(new Date)[w]();if(this.d%100!=1)this.d=-1}for(r=0;r<l[x];r++){o=l[r];this.c[":"+o]=[];f&&this.c[":"+o][q](i)}}});
U[y].j=function(a){if(this.d!=-1){X("al_"+this.a,"jl."+((new Date)[w]()-this.d),d);this.d=-1}this.p=this.p.concat(a.components);k[A][this.a]||(k[A][this.a]={});k[A][this.a].packages=this.p.slice(0);for(var b=0;b<a.components[x];b++){this.o[":"+a.components[b]]=d;var c=this.c[":"+a.components[b]];if(c){for(var f=0;f<c[x];f++)c[f].K(a.components[b]);delete this.c[":"+a.components[b]]}}X("hl",this.a)};U[y].l=function(a,b){return this.w(b)[x]==0};U[y].r=function(){return d};
function W(a){this.J=a;this.m={};this.q=0}W[y].H=function(a){this.q++;this.m[":"+a]=d};W[y].K=function(a){if(this.m[":"+a]){this.m[":"+a]=g;this.q--;this.q==0&&j[z](this.J,0)}};function V(a,b,c){this.name=a;this.I=b;this.n=c;this.v=this.h=g;this.i=[];k[A].u[this[v]]=H(this.j,this)}G(V,U);p(V[y],function(a,b){var c=b&&b.callback!=e;if(c){this.i[q](b.callback);b.callback="google.loader.callbacks."+this[v]}else this.h=d;if(!b||!b.autoloaded)k[A].e("script",this.g(a,b),c);X("el",this[v])});V[y].l=function(a,b){return b&&b.callback!=e?this.v:this.h};V[y].j=function(){this.v=d;for(var a=0;a<this.i[x];a++)j[z](this.i[a],0);this.i=[]};
var Y=function(a,b){return a.string?h(a.string)+"="+h(b):a.regex?b[s](/(^.*$)/,a.regex):""};V[y].g=function(a,b){return this.N(this.z(a),a,b)};
V[y].N=function(a,b,c){var f="";if(a.key)f+="&"+Y(a.key,k[A].ApiKey);if(a.version)f+="&"+Y(a.version,b);b=k[A].Secure&&a.ssl?a.ssl:a.uri;if(c!=e)for(var i in c)if(a.params[i])f+="&"+Y(a.params[i],c[i]);else if(i=="other_params")f+="&"+c[i];else if(i=="base_domain")b="http://"+c[i]+a.uri[B](a.uri.indexOf("/",7));k[this[v]]={};if(b.indexOf("?")==-1&&f)f="?"+f[B](1);return b+f};V[y].r=function(a){return this.z(a).deferred};V[y].z=function(a){if(this.n)for(var b=0;b<this.n[x];++b){var c=this.n[b];if((new RegExp(c.pattern)).test(a))return c}return this.I};function T(a,b){this.a=a;this.f=b;this.h=g}G(T,U);p(T[y],function(a,b){this.h=d;k[A].e("script",this.g(a,b),g)});T[y].l=function(){return this.h};T[y].j=function(){};T[y].g=function(a,b){if(!this.f.versions[":"+a]){if(this.f.aliases){var c=this.f.aliases[":"+a];if(c)a=c}if(!this.f.versions[":"+a])throw I("Module: '"+this.a+"' with version '"+a+"' not found!");}a=k[A].GoogleApisBase+"/libs/"+this.a+"/"+a+"/"+this.f.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"];X("el",this.a);return a};
T[y].r=function(){return g};var ea=g,Z=[],fa=(new Date)[w](),X=function(a,b,c){if(!ea){P(j,"unload",ga);ea=d}if(c){if(!k[A].Secure&&(!k[A].Options||k[A].Options.csi===g)){a=a[D]()[s](/[^a-z0-9_.]+/g,"_");b=b[D]()[s](/[^a-z0-9_.]+/g,"_");j[z](H($,e,"http://csi.gstatic.com/csi?s=uds&v=2&action="+h(a)+"&it="+h(b)),1E4)}}else{Z[q]("r"+Z[x]+"="+h(a+(b?"|"+b:"")));j[z](ga,Z[x]>5?0:15E3)}},ga=function(){if(Z[x]){$(k[A][u]+"/stats?"+Z[C]("&")+"&nc="+(new Date)[w]()+"_"+((new Date)[w]()-fa));Z.length=0}},$=function(a){var b=new Image,
c=ha++;ia[c]=b;b.onload=b.onerror=function(){delete ia[c]};b.src=a;b=e},ia={},ha=0;J("google.loader.recordStat",X);J("google.loader.createImageForLogging",$);

}) ();google.loader.rm({"specs":[{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},"feeds",{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},"spreadsheets","gdata","visualization",{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"search",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.google.com/maps/api/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},"annotations_v2","orkut","language","earth",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}},"ads","elements"]});
google.loader.rfm({":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/e291a634414cb5ef1c9f3b5424b8ac4b/","js":"default+en.I.js","css":"default.css","properties":{":JSHash":"e291a634414cb5ef1c9f3b5424b8ac4b",":Version":"1.0"}},":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/457a1b12dfe20ca00fd65f9ad5d52ccd/","js":"default+en.I.js","css":"default.css","properties":{":JSHash":"457a1b12dfe20ca00fd65f9ad5d52ccd",":NoOldNames":false,":Version":"1.0"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/cd6e6992328d3619ee31352c39a90b10/","js":"default+en.I.js","properties":{":JSHash":"cd6e6992328d3619ee31352c39a90b10",":Version":"1.0"}},":spreadsheets":{"versions":{":0":"1",":0.2":"1"},"path":"/api/spreadsheets/0.2/626554c678ff579189704ea83fe72774/","js":"default.I.js","properties":{":JSHash":"626554c678ff579189704ea83fe72774",":Version":"0.2"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/abef9437280171d37dd6be81a58115d2/","js":"default.I.js","properties":{":JSHash":"abef9437280171d37dd6be81a58115d2",":Version":"1.0"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/95e76f84c9532973f104478d1e810796/","js":"default+en.I.js","properties":{":JSHash":"95e76f84c9532973f104478d1e810796",":Version":"1.0"}}});
google.loader.rpl({":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1.8":"1.8.3",":1":"1.8.3"}},":yui":{"versions":{":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"}},"aliases":{":2":"2.8.0r4",":2.7":"2.7.0",":2.6":"2.6.0",":2.8":"2.8.0r4",":2.8.0":"2.8.0r4"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":mootools":{"versions":{":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.11":"1.1.1",":1.2":"1.2.4",":1.1":"1.1.2"}},":jqueryui":{"versions":{":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1.7":"1.7.2",":1":"1.7.2",":1.6":"1.6.0",":1.5":"1.5.3"}},":chrome-frame":{"versions":{":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":prototype":{"versions":{":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1.6.1":"1.6.1.0",":1":"1.6.1.0",":1.6":"1.6.1.0",":1.6.0":"1.6.0.3"}},":jquery":{"versions":{":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1":"1.4.1",":1.4":"1.4.1",":1.3":"1.3.2",":1.2":"1.2.6"}},":dojo":{"versions":{":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1":"1.4.0",":1.4":"1.4.0",":1.3":"1.3.2",":1.2":"1.2.3",":1.1":"1.1.1"}}});
}

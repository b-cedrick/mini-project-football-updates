"use strict";(self.webpackChunkmini_project_football_updates=self.webpackChunkmini_project_football_updates||[]).push([[466],{4306:(S,g,a)=>{a.d(g,{P:()=>v,V:()=>m});var m=function(f){return f[f.GET_STADINGS_MAX_AGE=36e5]="GET_STADINGS_MAX_AGE",f[f.GET_FIXTURES_BY_TEAM_MAX_AGE=6e4]="GET_FIXTURES_BY_TEAM_MAX_AGE",f}(m||{}),v=function(f){return f[f.MAX_CACHE_COUNT=60]="MAX_CACHE_COUNT",f}(v||{})},7613:(S,g,a)=>{a.d(g,{s:()=>r});var m=a(9862),v=a(9397),f=a(6306),A=a(8504),c=a(3281),i=a(4769);let r=(()=>{var h;class I{constructor(o){this.http=o,this.apiUrl=c.q.API_URL}setupQueryParams(o){let y=new m.LE;return Object.keys(o).forEach(D=>{null!==o[D]&&(y=y.append(D,o[D]))}),y}getList(o="",y){const D=`${this.apiUrl}/${o}`,L=y?{params:this.setupQueryParams(y)}:{};return this.http.get(D,L).pipe((0,v.b)(U=>{this.handleSpecificError(U?.errors)}),(0,f.K)(this.handleError))}getItem(o=""){return this.http.get(`${this.apiUrl} + ${o}`).pipe((0,v.b)(D=>{this.handleSpecificError(D?.errors)}),(0,f.K)(this.handleError))}handleError(o){return 0===o.status?console.error("An error occurred:",o.error):console.error(`Backend returned code ${o.status}, body was: `,o.error),(0,A._)(()=>new Error("Something bad happened; please try again later."))}handleSpecificError(o){this.isObjectNotEmpty(o)&&(o.token?alert(o.token):o.requests?o.requests.includes("You have reached the request limit for the day")?alert(o.requests):alert(o):alert("An error occurred"))}isObjectNotEmpty(o){return Array.isArray(o)?o.length>0:Object.keys(o).length>0}}return(h=I).\u0275fac=function(o){return new(o||h)(i.LFG(m.eN))},h.\u0275prov=i.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),I})()},8081:(S,g,a)=>{a.d(g,{$:()=>f});var m=a(8645),v=a(4769);let f=(()=>{var A;class c{constructor(){this.unsubscribe$=new m.x}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return(A=c).\u0275fac=function(r){return new(r||A)},A.\u0275prov=v.Yz7({token:A,factory:A.\u0275fac}),c})()},4141:(S,g,a)=>{a.d(g,{q:()=>lt});var m=a(8645),v=a(3019),f=a(6232),A=a(2096),c=a(7394);class i extends c.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const r={setInterval(n,t,...e){const{delegate:s}=r;return s?.setInterval?s.setInterval(n,t,...e):setInterval(n,t,...e)},clearInterval(n){const{delegate:t}=r;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var h=a(9039);const O={now:()=>(O.delegate||Date).now(),delegate:void 0};class o{constructor(t,e=o.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,s){return new this.schedulerActionCtor(this,t).schedule(s,e)}}o.now=O.now;const D=new class y extends o{constructor(t,e=o.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,s){for(;t=e.shift();)t.unsubscribe();throw s}}}(class I extends i{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var s;if(this.closed)return this;this.state=t;const l=this.id,u=this.scheduler;return null!=l&&(this.id=this.recycleAsyncId(u,l,e)),this.pending=!0,this.delay=e,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(u,this.id,e),this}requestAsyncId(t,e,s=0){return r.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,e,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return e;null!=e&&r.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,e);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let l,s=!1;try{this.work(t)}catch(u){s=!0,l=u||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),l}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:s}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,h.P)(s,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),L=D;var U=a(5211),_=a(8180),B=a(9360),j=a(8251),F=a(2420),X=a(975),z=a(1631),N=a(4829);function Y(n,t){return t?e=>(0,U.z)(t.pipe((0,_.q)(1),function H(){return(0,B.e)((n,t)=>{n.subscribe((0,j.x)(t,F.Z))})}()),e.pipe(Y(n))):(0,z.z)((e,s)=>(0,N.Xf)(n(e,s)).pipe((0,_.q)(1),(0,X.h)(e)))}var W=a(5592),K=a(671);var Z=a(4716),k=a(9397);class q extends m.x{constructor(t=1/0,e=1/0,s=O){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){const{isStopped:e,_buffer:s,_infiniteTimeWindow:l,_timestampProvider:u,_windowTime:d}=this;e||(s.push(t),!l&&s.push(u.now()+d)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(t),{_infiniteTimeWindow:s,_buffer:l}=this,u=l.slice();for(let d=0;d<u.length&&!t.closed;d+=s?1:2)t.next(u[d]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){const{_bufferSize:t,_timestampProvider:e,_buffer:s,_infiniteTimeWindow:l}=this,u=(l?1:2)*t;if(t<1/0&&u<s.length&&s.splice(0,s.length-u),!l){const d=e.now();let x=0;for(let w=1;w<s.length&&s[w]<=d;w+=2)x=w;x&&s.splice(0,x+1)}}}var tt=a(3168),T=a(4674);const st={connector:()=>new m.x};function at(n,t,e,s){e&&!(0,T.m)(e)&&(s=e);const l=(0,T.m)(e)?e:void 0;return u=>function rt(n,t){const e=(0,T.m)(n)?n:()=>n;return(0,T.m)(t)?function nt(n,t=st){const{connector:e}=t;return(0,B.e)((s,l)=>{const u=e();(0,N.Xf)(n(function et(n){return new W.y(t=>n.subscribe(t))}(u))).subscribe(l),l.add(s.subscribe(u))})}(t,{connector:e}):s=>new tt.c(s,e)}(new q(n,t,s),l)(u)}var it=a(6196),E=a(4662);const ot=new m.x;function lt(n={}){return function(t,e,s){const l=n.cacheKey||t.constructor.name+"#"+e,u=s.value;if(s&&s.value){let d=n.storageStrategy?new n.storageStrategy:new E.YL.storageStrategy;const x=[];n.cacheModifier&&n.cacheModifier.subscribe(b=>d.addMany(b(d.getAll(l,this)),l,this)),(0,v.T)(ot.asObservable(),n.cacheBusterObserver?n.cacheBusterObserver:(0,f.c)()).subscribe(b=>{d.removeAll(l,this),x.length=0}),n.cacheResolver=n.cacheResolver||E.YL.cacheResolver||E.d7,n.cacheHasher=n.cacheHasher||E.YL.cacheHasher||E.$_,s.value=function(...b){const R=d.getAll(l,this);let C=n.cacheHasher(b),p=R.find(P=>n.cacheResolver(P.parameters,C));const $=x.find(P=>n.cacheResolver(P.parameters,C));if((n.maxAge||E.YL.maxAge)&&p&&p.created&&((new Date).getTime()-new Date(p.created).getTime()>(n.maxAge||E.YL.maxAge)?(d.remove?d.remove(R.indexOf(p),p,l,this):d.removeAtIndex(R.indexOf(p),l,this),p=null):(n.slidingExpiration||E.YL.slidingExpiration)&&(p.created=new Date,d.update?d.update(R.indexOf(p),p,l,this):d.updateAtIndex(R.indexOf(p),p,l,this))),p){const P=(0,A.of)(p.response);return n.async?P.pipe(function Q(n,t=D){const e=function V(n=0,t,e=L){let s=-1;return null!=t&&((0,K.K)(t)?e=t:s=t),new W.y(l=>{let u=function J(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;u<0&&(u=0);let d=0;return e.schedule(function(){l.closed||(l.next(d++),0<=s?this.schedule(void 0,s):l.complete())},u)})}(n,t);return Y(()=>e)}(0)):P}if($)return $.response;{const P=u.call(this,...b).pipe((0,Z.x)(()=>{const M=x.find(ct=>n.cacheResolver(ct.parameters,C));x.splice(x.indexOf(M),1)}),(0,k.b)(M=>{(!n.shouldCacheDecider||n.shouldCacheDecider(M))&&((!(n.maxCacheCount||E.YL.maxCacheCount)||1===(n.maxCacheCount||E.YL.maxCacheCount)||(n.maxCacheCount||E.YL.maxCacheCount)&&(n.maxCacheCount||E.YL.maxCacheCount)<R.length+1)&&(d.remove?d.remove(0,R[0],l,this):d.removeAtIndex(0,l,this)),d.add({parameters:C,response:M,created:n.maxAge||E.YL.maxAge?new Date:null},l,this))}),at(1),(0,it.x)());return x.push({parameters:C,response:P,created:new Date}),P}}}return s}}},2070:(S,g,a)=>{a.d(g,{r:()=>m});class m{}},5723:(S,g,a)=>{a.d(g,{N:()=>f});var m=a(2070),v=a(4662);class f extends m.r{constructor(){if(super(),this.masterCacheKey=v.YL.globalCacheKey,typeof localStorage>"u")throw new Error("Platform not supported.")}add(c,i){const r=this.getRawData();r[i]||(r[i]=[]),r[i].push(c),this.storeRawData(r)}addMany(c,i){const r=this.getRawData();r[i]||(r[i]=[]),r[i]=c,this.storeRawData(r)}getAll(c){return this.getRawData()[c]||[]}removeAtIndex(c,i){const r=this.getRawData();r[i]&&r[i].length&&r[i].splice(c,1),this.storeRawData(r)}remove(c,i,r){const h=this.getRawData();h[r]&&h[r].length&&h[r].splice(c,1),this.storeRawData(h)}updateAtIndex(c,i,r){const h=this.getRawData();h[r]&&h[r][c]&&(h[r][c]=i),this.storeRawData(h)}update(c,i,r){const h=this.getRawData();h[r]&&h[r][c]&&(h[r][c]=i),this.storeRawData(h)}removeAll(c){const i=this.getRawData();i[c]&&i[c].length&&(i[c].length=0),this.storeRawData(i)}getRawData(){const c=localStorage.getItem(this.masterCacheKey);try{return JSON.parse(c)||{}}catch(i){throw new Error(i)}}storeRawData(c){localStorage.setItem(this.masterCacheKey,JSON.stringify(c))}}},4662:(S,g,a)=>{a.d(g,{d7:()=>f,$_:()=>A,YL:()=>c});var m=a(2070);const f=(i,r)=>JSON.stringify(i)===JSON.stringify(r),A=i=>i.map(r=>void 0!==r?JSON.parse(JSON.stringify(r)):r),c={storageStrategy:class v extends m.r{constructor(){super(...arguments),this.cachePairs=[]}add(r,h,I){this.cachePairs.push(r)}addMany(r){this.cachePairs=r}updateAtIndex(r,h){Object.assign(this.cachePairs[r],h)}update(r,h){Object.assign(this.cachePairs[r],h)}getAll(){return this.cachePairs}removeAtIndex(r){this.cachePairs.splice(r,1)}remove(r){this.cachePairs.splice(r,1)}removeAll(){this.cachePairs.length=0}},globalCacheKey:"CACHE_STORAGE",promiseImplementation:Promise}}}]);
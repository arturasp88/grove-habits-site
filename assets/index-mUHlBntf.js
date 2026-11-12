(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=3600,t=[{id:`campfire`,name:`Campfire`,a:`a campfire`,blurb:`Somewhere to gather. Foragers bring acorns to it.`,cost:40,dew:0,secs:60,at:0,kind:`maker`,rate:5,capH:3},{id:`garden`,name:`Garden`,a:`a garden`,blurb:`Plant a crop, come back, harvest it.`,cost:60,dew:0,secs:120,at:0,kind:`garden`,rate:0,capH:0},{id:`mushroom`,name:`Mushroom house`,a:`a mushroom house`,blurb:`A forager moves in.`,cost:120,dew:0,secs:600,at:1,kind:`maker`,rate:7,capH:4},{id:`well`,name:`Well`,a:`a well`,blurb:`Draws a drop of dew every few hours.`,cost:200,dew:0,secs:1200,at:2,kind:`dew`,rate:1/6,capH:12},{id:`cabin`,name:`Cabin`,a:`a cabin`,blurb:`A woodcutter’s cabin.`,cost:320,dew:0,secs:2700,at:3,kind:`maker`,rate:11,capH:4},{id:`cottage`,name:`Cottage`,a:`a cottage`,blurb:`A family settles on the island.`,cost:450,dew:0,secs:1*e,at:5,kind:`maker`,rate:13,capH:5},{id:`windmill`,name:`Windmill`,a:`a windmill`,blurb:`Turns all day, whatever the weather.`,cost:700,dew:0,secs:2*e,at:7,kind:`maker`,rate:19,capH:5},{id:`sawmill`,name:`Sawmill`,a:`a sawmill`,blurb:`Timber for everything that comes next.`,cost:900,dew:0,secs:3*e,at:9,kind:`maker`,rate:23,capH:6},{id:`watermill`,name:`Watermill`,a:`a watermill`,blurb:`The river does the work.`,cost:1100,dew:0,secs:4*e,at:11,kind:`maker`,rate:27,capH:6},{id:`market`,name:`Market`,a:`a market`,blurb:`Traders start to call.`,cost:1500,dew:0,secs:5*e,at:14,kind:`maker`,rate:35,capH:6},{id:`treehouse`,name:`Treehouse`,a:`a treehouse`,blurb:`A lookout in the canopy.`,cost:1200,dew:8,secs:6*e,at:16,kind:`maker`,rate:32,capH:8},{id:`forge`,name:`Forge`,a:`a forge`,blurb:`The fire never goes out.`,cost:1900,dew:0,secs:6*e,at:18,kind:`maker`,rate:42,capH:6},{id:`archery`,name:`Archery range`,a:`an archery range`,blurb:`Steady hands, steady breath.`,cost:1600,dew:0,secs:5*e,at:20,kind:`maker`,rate:34,capH:8},{id:`tavern`,name:`Tavern`,a:`a tavern`,blurb:`Stories, and nothing stronger than cider.`,cost:2400,dew:0,secs:8*e,at:22,kind:`maker`,rate:50,capH:8},{id:`lodge`,name:`Great hall`,a:`a great hall`,blurb:`One roof for the whole village.`,cost:2800,dew:0,secs:8*e,at:25,kind:`maker`,rate:55,capH:8},{id:`tower`,name:`Beacon tower`,a:`a beacon tower`,blurb:`Lifts the whole village: everything makes a quarter more.`,cost:3e3,dew:15,secs:12*e,at:28,kind:`boost`,rate:0,capH:0}],n=e=>t.find(t=>t.id===e),r=e=>String(e).padStart(2,`0`),i=e=>`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`;function a(e=Date.now()){return i(new Date(e-144e5))}function o(e){let[t,n,r]=e.split(`-`).map(Number);return[t,n-1,r]}function s(e,t){let[n,r,a]=o(e);return i(new Date(n,r,a+t))}function c(e,t){let[n,r,i]=o(e),[a,s,c]=o(t);return Math.round((Date.UTC(a,s,c)-Date.UTC(n,r,i))/864e5)}function l(e,t){let[n,r,i]=o(e);return new Date(n,r,i,0,t).getTime()}function u(e){let[t,n,r]=e.split(`-`).map(Number);return(new Date(t,n-1,r).getDay()+6)%7}var d=e=>s(e,-u(e)),f=(e,t)=>e.from<=t&&(!e.until||t<e.until);function p(e,t){if(e.sched.t!==`week`)return 0;let n=d(t),r=e.from>n?7-u(e.from):7;return Math.max(0,Math.min(e.sched.n,r))}function m(e,t,n=0){if(!f(e,t))return`off`;if(e.sched.t===`daily`)return`due`;if(e.sched.t===`days`)return e.sched.days.includes(u(t))?`due`:`off`;let r=p(e,t)-n;return r<=0?`met`:r>=7-u(t)?`due`:`open`}function h(e,t){return e.kind===`do`?+(t>=1):e.kind===`count`?e.target>0?Math.min(1,t/e.target):+(t>0):+(t<=e.target)}var g=e=>e.sched.t===`week`?e.effort*e.sched.n/7:e.effort,_=[{level:0,name:`Bare soil`,unlock:`A seed in the heart stone`,xp:0},{level:1,name:`Seedling`,unlock:`The heart tree sprouts`,xp:120},{level:2,name:`Sprout`,unlock:`Pollen by day, fireflies by night`,xp:350},{level:3,name:`Thicket`,unlock:`Birds come to nest`,xp:700},{level:4,name:`Grove`,unlock:`Stone lanterns`,xp:1200},{level:5,name:`Woodland`,unlock:`Drifting blossom`,xp:1900},{level:6,name:`Forest`,unlock:`Floating islets`,xp:2800},{level:7,name:`Old growth`,unlock:`Northern lights`,xp:4e3},{level:8,name:`Wildwood`,unlock:`The golden heart tree`,xp:5500}];function v(e){let t=_[0];for(let n of _)e>=n.xp&&(t=n);let n=_[t.level+1]??null,r=n?(e-t.xp)/(n.xp-t.xp):1;return{...t,next:n,progress:r,toNext:n?n.xp-e:0}}var y=[`tree1`,`tree2`,`tree3`,`tree4`,`tree5`,`tree6`];[...y];var b=[7,21,50],x=e=>e>=b[2]?3:e>=b[1]?2:+(e>=b[0]),S=[7,21,50,100],C=e=>{let t=S.indexOf(e);return t<0?null:t+1},w={full:25,breath:15,honest:5},T=e=>1+Math.min(e,10)*.1,E=e=>e.reduce((e,t)=>e+t,0);function D(e,t,n,r,i,a,o,s){let c=r===`today`,l=c||!!e.confirmed[t]||i.length>0,u=e.habits.filter(e=>f(e,t)),d=new Map(u.map(e=>[e.id,m(e,t,s.week.get(e.id)??0)])),p=u.filter(e=>d.get(e.id)!==`off`),_=E(p.map(g)),v=_>0?100/_:0,y=p.map(e=>{let t=d.get(e.id),n=i.filter(t=>t.h===e.id),r=E(n.map(e=>e.n)),a=e.effort*v,o=e.kind===`limit`&&r>e.target,s=h(e,r);e.kind===`limit`&&!l&&(s=0);let u=t!==`met`,f=0,p=0;return e.kind===`limit`?o?f=n.length?w.honest:0:c?p=u?a:0:f=u?a*s:0:f=u?a*s:0,{habit:e,state:t,n:r,frac:s,done:u&&s>=1,over:o,share:a,earned:f,pending:p,at:null}}),b=y.filter(e=>e.state===`due`),S=y.filter(e=>e.state===`open`&&e.done),D=E(b.map(e=>e.habit.effort)),O=E(b.map(e=>e.habit.effort*e.frac))+E(S.map(e=>e.habit.effort)),k=D===0&&S.length===0,A=!k&&O>=D/2,j=!k&&b.every(e=>e.frac>=1),ee=j?Math.round(w.full*T(o)):0,M=Math.min(a,3)*w.breath,N=Math.round(E(y.map(e=>e.earned))+M+(c?0:ee)),te=c?Math.round(E(y.map(e=>e.pending))+ee):0,ne=c?b.filter(e=>e.habit.kind!==`limit`||e.over):b,re=e=>{if(e.habit.kind===`limit`)return 1/0;let t=0;for(let n of i)if(n.h===e.habit.id&&(t+=n.n)>=(e.habit.kind===`do`?1:e.habit.target))return n.t;return 1/0},ie=[],ae=[],oe=[];for(let e of y){let t=re(e);e.at=Number.isFinite(t)?t:null}for(let e of[...y].sort((e,t)=>re(e)-re(t))){let t=e.habit,n=s.count.get(t.id)??0;if(e.done&&!(c&&t.kind===`limit`)){let e=n+1;ae.push(t.id),ie.push({h:t.id,sig:t.sig,tier:x(e),c:t.c});let r=C(e);r&&ie.push({h:t.id,sig:t.sig,tier:x(e),c:t.c,mon:r})}else c&&e.state!==`met`?t.kind===`limit`&&!e.over?ie.push({h:t.id,sig:t.sig,tier:x(n),c:t.c,p:.3}):t.kind===`count`&&e.n>0&&ie.push({h:t.id,sig:t.sig,tier:x(n),c:t.c,p:e.frac}):!c&&e.state===`due`&&oe.push(t.id)}return{key:t,index:n,status:r,frozen:!1,items:y,streakBefore:o,pendingXp:te,xp:N,kept:A,full:j,rest:k,marks:ie,breaths:a,done:ae,missed:oe,doneCount:ne.filter(e=>e.frac>=1).length+S.length,dueCount:ne.length+S.length}}function O(e,t=Date.now()){let n=e.settings;if(!n)return null;let r=a(t),i=new Map;for(let t of e.entries){let e=a(t.t);(i.get(e)??i.set(e,[]).get(e)).push(t)}for(let e of i.values())e.sort((e,t)=>e.t-t.t);let o=new Map;for(let t of e.breaths){let e=a(t.t);o.set(e,(o.get(e)??0)+1)}let l={count:new Map,streak:new Map,best:new Map,week:new Map},d=(e,t,n=1)=>e.set(t,(e.get(t)??0)+n).get(t),p=[],m=0,h=0,g=0,_=0,y=0,b=0,C=0,w=n.startKey<=r?n.startKey:r,T=c(w,r);for(let t=0;t<=T;t++){let n=s(w,t),a=n===r?`today`:`past`;u(n)===0&&l.week.clear();let f=e.ledger[n],v=f&&c(n,r)>=2?{...f,key:n,index:t,status:`past`,frozen:!0,items:[],streakBefore:m,pendingXp:0,doneCount:f.done.length,dueCount:f.done.length+f.missed.length}:D(e,n,t,a,i.get(n)??[],o.get(n)??0,m,l);p.push(v),g+=v.xp,b+=Math.min(v.breaths,3),C+=v.marks.filter(e=>e.mon).length;for(let e of v.done)d(l.count,e),d(l.week,e),l.best.set(e,Math.max(l.best.get(e)??0,d(l.streak,e)));for(let e of v.missed)l.streak.set(e,0);a===`past`&&!v.rest&&(v.kept&&_++,v.full&&y++,m=v.kept?m+1:0,h=Math.max(h,m))}let E=new Map;for(let t of e.habits){let e=l.count.get(t.id)??0,n=S.find(t=>t>e);E.set(t.id,{habit:t,count:e,streak:l.streak.get(t.id)??0,best:l.best.get(t.id)??0,tier:x(e),next:n?{at:n,left:n-e}:null,week:l.week.get(t.id)??0})}return{todayKey:r,today:p[p.length-1],days:p,xp:g,level:v(g),streak:m,bestStreak:h,goodDays:_,fullDays:y,breaths:b,breathsAll:e.breaths.length,milestones:C,habits:E,active:e.habits.filter(e=>!e.until&&f(e,r))}}var k={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},A={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j=1e3,ee=1001,M=1002,N=1003,te=1004,ne=1005,re=1006,ie=1007,ae=1008,oe=1009,se=1010,ce=1011,le=1012,ue=1013,de=1014,fe=1015,pe=1016,me=1017,he=1018,ge=1020,_e=35902,ve=35899,ye=1021,be=1022,xe=1023,Se=1026,Ce=1027,we=1028,Te=1029,Ee=1030,De=1031,Oe=1033,ke=33776,Ae=33777,je=33778,Me=33779,Ne=35840,Pe=35841,Fe=35842,P=35843,Ie=36196,Le=37492,Re=37496,F=37488,ze=37489,I=37490,Be=37491,Ve=37808,He=37809,Ue=37810,We=37811,Ge=37812,Ke=37813,qe=37814,Je=37815,Ye=37816,Xe=37817,Ze=37818,Qe=37819,$e=37820,et=37821,tt=36492,nt=36494,rt=36495,it=36283,at=36284,ot=36285,st=36286,ct=2300,lt=2301,ut=2302,dt=2303,ft=2400,pt=2401,mt=2402,ht=3200,gt=3201,_t=`srgb`,vt=`srgb-linear`,yt=`linear`,bt=`srgb`,xt=7680,St=35044,Ct=2e3;function wt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Tt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Et(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Dt(){let e=Et(`canvas`);return e.style.display=`block`,e}var Ot={};function kt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function At(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=At(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function jt(...e){e=At(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Mt(...e){let t=e.join(` `);t in Ot||(Ot[t]=!0,L(...e))}function Nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Pt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},It=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Lt=1234567,Rt=Math.PI/180,zt=180/Math.PI;function Bt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(It[e&255]+It[e>>8&255]+It[e>>16&255]+It[e>>24&255]+`-`+It[t&255]+It[t>>8&255]+`-`+It[t>>16&15|64]+It[t>>24&255]+`-`+It[n&63|128]+It[n>>8&255]+`-`+It[n>>16&255]+It[n>>24&255]+It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]).toLowerCase()}function Vt(e,t,n){return Math.max(t,Math.min(n,e))}function Ht(e,t){return(e%t+t)%t}function Ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Wt(e,t,n){return e===t?0:(n-e)/(t-e)}function Gt(e,t,n){return(1-n)*e+n*t}function Kt(e,t,n,r){return Gt(e,t,1-Math.exp(-n*r))}function qt(e,t=1){return t-Math.abs(Ht(e,t*2)-t)}function Jt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Zt(e,t){return e+Math.random()*(t-e)}function Qt(e){return e*(.5-Math.random())}function $t(e){e!==void 0&&(Lt=e);let t=Lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function en(e){return e*Rt}function tn(e){return e*zt}function nn(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function rn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function an(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function on(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function sn(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cn(e,t){if(t.constructor===Float32Array)return e;let n=sn(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function ln(e,t){if(t.constructor===Float32Array)return e;let n=sn(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var un={DEG2RAD:Rt,RAD2DEG:zt,generateUUID:Bt,clamp:Vt,euclideanModulo:Ht,mapLinear:Ut,inverseLerp:Wt,lerp:Gt,damp:Kt,pingpong:qt,smoothstep:Jt,smootherstep:Yt,randInt:Xt,randFloat:Zt,randFloatSpread:Qt,seededRandom:$t,degToRad:en,radToDeg:tn,isPowerOfTwo:nn,ceilPowerOfTwo:rn,floorPowerOfTwo:an,setQuaternionFromProperEuler:on,normalize:ln,denormalize:cn},R=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fn.copy(this).projectOnVector(e),this.sub(fn)}reflect(e){return this.sub(fn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fn=new z,pn=new dn,mn=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Mt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(hn.makeScale(e,t)),this}rotate(e){return Mt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(hn.makeRotation(-e)),this}translate(e,t){return Mt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(hn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hn=new mn,gn=new mn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_n=new mn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vn(){let e={enabled:!0,workingColorSpace:vt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=bn(e.r),e.g=bn(e.g),e.b=bn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xn(e.r),e.g=xn(e.g),e.b=xn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?yt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[vt]:{primaries:t,whitePoint:r,transfer:yt,toXYZ:gn,fromXYZ:_n,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:t,whitePoint:r,transfer:bt,toXYZ:gn,fromXYZ:_n,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),e}var yn=vn();function bn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Sn,Cn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sn===void 0&&(Sn=Et(`canvas`)),Sn.width=e.width,Sn.height=e.height;let t=Sn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Sn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Et(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bn(t[e]/255)*255):t[e]=bn(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wn=0,Tn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wn++}),this.uuid=Bt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(En(r[t].image)):e.push(En(r[t]))}else e=En(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function En(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Cn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Dn=0,On=new z,kn=class e extends Ft{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ee,i=ee,a=re,o=ae,s=xe,c=oe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=Bt(),this.name=``,this.source=new Tn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mn,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(On).x}get height(){return this.source.getSize(On).y}get depth(){return this.source.getSize(On).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case j:e.x-=Math.floor(e.x);break;case ee:e.x=e.x<0?0:1;break;case M:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case j:e.y-=Math.floor(e.y);break;case ee:e.y=e.y<0?0:1;break;case M:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null,kn.DEFAULT_MAPPING=300,kn.DEFAULT_ANISOTROPY=1;var An=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jn=class extends Ft{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new An(0,0,e,t),this.scissorTest=!1,this.viewport=new An(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new kn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:re,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Tn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mn=class extends jn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nn=class extends kn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=N,this.minFilter=N,this.wrapR=ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pn=class extends kn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=N,this.minFilter=N,this.wrapR=ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Fn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),i=1/In.setFromMatrixColumn(e,1).length(),a=1/In.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rn,e,zn)}lookAt(e,t,n){let r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Bn.crossVectors(n,Hn),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Bn.crossVectors(n,Hn)),Bn.normalize(),Vn.crossVectors(Hn,Bn),r[0]=Bn.x,r[4]=Vn.x,r[8]=Hn.x,r[1]=Bn.y,r[5]=Vn.y,r[9]=Hn.y,r[2]=Bn.z,r[6]=Vn.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=In.set(r[0],r[1],r[2]).length(),o=In.set(r[4],r[5],r[6]).length(),s=In.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ln.copy(this);let c=1/a,l=1/o,u=1/s;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=l,Ln.elements[5]*=l,Ln.elements[6]*=l,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ct,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ct,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},In=new z,Ln=new Fn,Rn=new z(0,0,0),zn=new z(1,1,1),Bn=new z,Vn=new z,Hn=new z,Un=new Fn,Wn=new dn,Gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wn.setFromEuler(this),this.setFromQuaternion(Wn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER=`XYZ`;var Kn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qn=0,Jn=new z,Yn=new dn,Xn=new Fn,Zn=new z,Qn=new z,$n=new z,er=new dn,tr=new z(1,0,0),nr=new z(0,1,0),rr=new z(0,0,1),ir={type:`added`},ar={type:`removed`},or={type:`childadded`,child:null},sr={type:`childremoved`,child:null},cr=class e extends Ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qn++}),this.uuid=Bt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new Gn,r=new dn,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fn},normalMatrix:{value:new mn}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(tr,e)}rotateY(e){return this.rotateOnAxis(nr,e)}rotateZ(e){return this.rotateOnAxis(rr,e)}translateOnAxis(e,t){return Jn.copy(e).applyQuaternion(this.quaternion),this.position.add(Jn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tr,e)}translateY(e){return this.translateOnAxis(nr,e)}translateZ(e){return this.translateOnAxis(rr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zn.copy(e):Zn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qn,Zn,this.up):Xn.lookAt(Zn,Qn,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Xn),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(jt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ir),or.child=e,this.dispatchEvent(or),or.child=null):jt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ar),sr.child=e,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ir),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,$n),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,er,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};cr.DEFAULT_UP=new z(0,1,0),cr.DEFAULT_MATRIX_AUTO_UPDATE=!0,cr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lr=class extends cr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ur={type:`move`},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ur)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},mr={h:0,s:0,l:0};function hr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yn.workingColorSpace){return this.r=e,this.g=t,this.b=n,yn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yn.workingColorSpace){if(e=Ht(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=hr(i,r,e+1/3),this.g=hr(i,r,e),this.b=hr(i,r,e-1/3)}return yn.colorSpaceToWorking(this,r),this}setStyle(e,t=_t){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=fr[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return yn.workingToColorSpace(gr.copy(this),e),Math.round(Vt(gr.r*255,0,255))*65536+Math.round(Vt(gr.g*255,0,255))*256+Math.round(Vt(gr.b*255,0,255))}getHexString(e=_t){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yn.workingColorSpace){yn.workingToColorSpace(gr.copy(this),t);let n=gr.r,r=gr.g,i=gr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=yn.workingColorSpace){return yn.workingToColorSpace(gr.copy(this),t),e.r=gr.r,e.g=gr.g,e.b=gr.b,e}getStyle(e=_t){yn.workingToColorSpace(gr.copy(this),e);let t=gr.r,n=gr.g,r=gr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(mr);let n=Gt(pr.h,mr.h,t),r=Gt(pr.s,mr.s,t),i=Gt(pr.l,mr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gr=new B;B.NAMES=fr;var _r=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends cr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yr=new z,br=new z,xr=new z,Sr=new z,Cr=new z,wr=new z,Tr=new z,Er=new z,Dr=new z,Or=new z,kr=new An,Ar=new An,jr=new An,Mr=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yr.subVectors(e,t),r.cross(yr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){yr.subVectors(r,t),br.subVectors(n,t),xr.subVectors(e,t);let a=yr.dot(yr),o=yr.dot(br),s=yr.dot(xr),c=br.dot(br),l=br.dot(xr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sr)!==null&&Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Sr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Sr.x),s.addScaledVector(a,Sr.y),s.addScaledVector(o,Sr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return kr.setScalar(0),Ar.setScalar(0),jr.setScalar(0),kr.fromBufferAttribute(e,t),Ar.fromBufferAttribute(e,n),jr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kr,i.x),a.addScaledVector(Ar,i.y),a.addScaledVector(jr,i.z),a}static isFrontFacing(e,t,n,r){return yr.subVectors(n,t),br.subVectors(e,t),yr.cross(br).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yr.subVectors(this.c,this.b),br.subVectors(this.a,this.b),yr.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Cr.subVectors(r,n),wr.subVectors(i,n),Er.subVectors(e,n);let s=Cr.dot(Er),c=wr.dot(Er);if(s<=0&&c<=0)return t.copy(n);Dr.subVectors(e,r);let l=Cr.dot(Dr),u=wr.dot(Dr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Cr,a);Or.subVectors(e,i);let f=Cr.dot(Or),p=wr.dot(Or);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Tr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Tr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Cr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Fr):Fr.fromBufferAttribute(r,t),Fr.applyMatrix4(e.matrixWorld),this.expandByPoint(Fr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Wr.subVectors(this.max,Ur),Lr.subVectors(e.a,Ur),Rr.subVectors(e.b,Ur),zr.subVectors(e.c,Ur),Br.subVectors(Rr,Lr),Vr.subVectors(zr,Rr),Hr.subVectors(Lr,zr);let t=[0,-Br.z,Br.y,0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,Br.z,0,-Br.x,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,-Br.y,Br.x,0,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0];return!qr(t,Lr,Rr,zr,Wr)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,Lr,Rr,zr,Wr))?!1:(Gr.crossVectors(Br,Vr),t=[Gr.x,Gr.y,Gr.z],qr(t,Lr,Rr,zr,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pr=[new z,new z,new z,new z,new z,new z,new z,new z],Fr=new z,Ir=new Nr,Lr=new z,Rr=new z,zr=new z,Br=new z,Vr=new z,Hr=new z,Ur=new z,Wr=new z,Gr=new z,Kr=new z;function qr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Kr.fromArray(e,a);let o=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),s=t.dot(Kr),c=n.dot(Kr),l=r.dot(Kr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Jr=new z,Yr=new R,Xr=0,Zr=class extends Ft{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=St,this.updateRanges=[],this.gpuType=fe,this.version=0,this._normalizationScale=e===void 0?void 0:sn(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix4(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyNormalMatrix(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.transformDirection(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?cn(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ln(e,this.array):Math.round(e*t)}},Qr=class extends Zr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},$r=class extends Zr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ei=class extends Zr{constructor(e,t,n){super(new Float32Array(e),t,n)}},ti=new Nr,ni=new z,ri=new z,ii=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ti.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ni.subVectors(e,this.center);let t=ni.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ni,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ri.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ni.copy(e.center).add(ri)),this.expandByPoint(ni.copy(e.center).sub(ri))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ai=0,oi=new Fn,si=new cr,ci=new z,li=new Nr,ui=new Nr,di=new z,fi=class e extends Ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ai++}),this.uuid=Bt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(wt(e)?$r:Qr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new mn().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return si.lookAt(e),si.updateMatrix(),this.applyMatrix4(si.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ei(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)jt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];li.setFromBufferAttribute(n),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)jt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ui.setFromBufferAttribute(n),this.morphTargetsRelative?(di.addVectors(li.min,ui.min),li.expandByPoint(di),di.addVectors(li.max,ui.max),li.expandByPoint(di)):(li.expandByPoint(ui.min),li.expandByPoint(ui.max))}li.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)di.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(di));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)di.fromBufferAttribute(a,t),o&&(ci.fromBufferAttribute(e,t),di.add(ci)),r=Math.max(r,n.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&jt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){jt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Zr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let l=new z,u=new z,d=new z,f=new R,p=new R,m=new R,h=new z,g=new z;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new z,b=new z,x=new z,S=new z;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Zr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)di.fromBufferAttribute(e,t),di.normalize(),e.setXYZ(t,di.x,di.y,di.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Zr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},pi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=St,this.updateRanges=[],this.version=0,this.uuid=Bt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mi(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mi(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mi(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Bt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var hi=new z,gi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:sn(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){kt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Zr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?cn(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ln(e,this.data.array):Math.round(e*t)}},_i=new z,vi=new z,yi=new mn,bi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_i.subVectors(n,t).cross(vi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(_i),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yi.getNormalMatrix(e),r=this.coplanarPoint(_i).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xi=0,Si=class extends Ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xi++}),this.uuid=Bt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xt,this.stencilZFail=xt,this.stencilZPass=xt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new bi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ci=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wi,Ti=new z,Ei=new z,Di=new z,Oi=new R,ki=new R,Ai=new Fn,ji=new z,Mi=new z,Ni=new z,Pi=new R,Fi=new R,Ii=new R,Li=class extends cr{constructor(e=new Ci){if(super(),this.isSprite=!0,this.type=`Sprite`,wi===void 0){wi=new fi;let e=new pi(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute(`position`,new gi(e,3,0,!1)),wi.setAttribute(`uv`,new gi(e,2,3,!1))}this.geometry=wi,this.material=e,this.center=new R(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&jt(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ei.setFromMatrixScale(this.matrixWorld),Ai.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Di.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ri(ji.set(-.5,-.5,0),Di,a,Ei,r,i),Ri(Mi.set(.5,-.5,0),Di,a,Ei,r,i),Ri(Ni.set(.5,.5,0),Di,a,Ei,r,i),Pi.set(0,0),Fi.set(1,0),Ii.set(1,1);let o=e.ray.intersectTriangle(ji,Mi,Ni,!1,Ti);if(o===null&&(Ri(Mi.set(-.5,.5,0),Di,a,Ei,r,i),Fi.set(0,1),o=e.ray.intersectTriangle(ji,Ni,Mi,!1,Ti),o===null))return;let s=e.ray.origin.distanceTo(Ti);s<e.near||s>e.far||t.push({distance:s,point:Ti.clone(),uv:Mr.getInterpolation(Ti,ji,Mi,Ni,Pi,Fi,Ii,new R),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ri(e,t,n,r,i,a){Oi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ki.copy(Oi):(ki.x=a*Oi.x-i*Oi.y,ki.y=i*Oi.x+a*Oi.y),e.copy(t),e.x+=ki.x,e.y+=ki.y,e.applyMatrix4(Ai)}var zi=new z,Bi=new z,Vi=new z,Hi=new z,Ui=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bi.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Bi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vi),o=Hi.dot(this.direction),s=-Hi.dot(Vi),c=Hi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bi).addScaledVector(Vi,d),f}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),r=zi.dot(zi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,ne=1/w,re=T-N*D,ie=E-te*D,ae=O-N*A,oe=k-te*A,se=j-N*M,ce=ee-te*M,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=ne*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wi=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gi=new Fn,Ki=new Ui,qi=new ii,Ji=new z,Yi=new z,Xi=new z,Zi=new z,Qi=new z,$i=new z,ea=new z,ta=new z,na=class extends cr{constructor(e=new fi,t=new Wi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qi.fromBufferAttribute(s,e),a?$i.addScaledVector(Qi,r):$i.addScaledVector(Qi.sub(t),r))}t.add($i)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),Ki.copy(e.ray).recast(e.near),qi.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(qi,Ji)===null||Ki.origin.distanceToSquared(Ji)>(e.far-e.near)**2)||(Gi.copy(i).invert(),Ki.copy(e.ray).applyMatrix4(Gi),(n.boundingBox===null||Ki.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ia(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ia(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ia(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ia(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ra(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ta.copy(s),ta.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ta);return l<n.near||l>n.far?null:{distance:l,point:ta.clone(),object:e}}function ia(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yi),e.getVertexPosition(c,Xi),e.getVertexPosition(l,Zi);let u=ra(e,t,n,r,Yi,Xi,Zi,ea);if(u){let e=new z;Mr.getBarycoord(ea,Yi,Xi,Zi,e),i&&(u.uv=Mr.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=Mr.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=Mr.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};Mr.getNormal(Yi,Xi,Zi,t.normal),u.face=t,u.barycoord=e}return u}var aa=class extends kn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=N,l=N,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oa=class extends Zr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sa=new Fn,ca=new Fn,la=[],ua=new Nr,da=new Fn,fa=new na,pa=new ii,ma=class extends na{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,da)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sa),ua.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(ua)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sa),pa.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(n),e.ray.intersectsSphere(pa)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,sa),ca.multiplyMatrices(n,sa),fa.matrixWorld=ca,fa.raycast(e,la);for(let e=0,n=la.length;e<n;e++){let n=la[e];n.instanceId=i,n.object=this,t.push(n)}la.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(r*this.count),r,this.count,we,fe));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ha=new ii,ga=new R(.5,.5),_a=new z,va=class{constructor(e=new bi,t=new bi,n=new bi,r=new bi,i=new bi,a=new bi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ct,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ha.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ha.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ha)}intersectsSprite(e){return ha.center.set(0,0,0),ha.radius=.7071067811865476+ga.distanceTo(e.center),ha.applyMatrix4(e.matrixWorld),this.intersectsSphere(ha)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ya=new Fn,ba=class e{constructor(){this.coordinateSystem=Ct,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ya.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new va),n[e].setFromProjectionMatrix(ya,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new va),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},xa=class extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new B(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new z,Ca=new z,wa=new Fn,Ta=new Ui,Ea=new ii,Da=new z,Oa=new z,ka=class extends cr{constructor(e=new fi,t=new xa){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Sa.fromBufferAttribute(t,e-1),Ca.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Sa.distanceTo(Ca);e.setAttribute(`lineDistance`,new ei(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=i,e.ray.intersectsSphere(Ea)===!1)return;wa.copy(r).invert(),Ta.copy(e.ray).applyMatrix4(wa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Aa(this,e,Ta,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Aa(this,e,Ta,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Aa(this,e,Ta,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Aa(this,e,Ta,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Aa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Sa.fromBufferAttribute(s,i),Ca.fromBufferAttribute(s,a),n.distanceSqToSegment(Sa,Ca,Da,Oa)>r)return;Da.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:Oa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ja=new z,Ma=new z,Na=class extends ka{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ja.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ja.distanceTo(Ma);e.setAttribute(`lineDistance`,new ei(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Pa=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fa=new Fn,Ia=new Ui,La=new ii,Ra=new z,za=class extends cr{constructor(e=new fi,t=new Pa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),La.radius+=i,e.ray.intersectsSphere(La)===!1)return;Fa.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(Fa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ra.fromBufferAttribute(l,n),Ba(Ra,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ra.fromBufferAttribute(l,a),Ba(Ra,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ba(e,t,n,r,i,a,o){let s=Ia.distanceSqToPoint(e);if(s<n){let n=new z;Ia.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Va=class extends kn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ha=class extends kn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ua=class extends kn{constructor(e,t,n=de,r,i,a,o=N,s=N,c,l=Se,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wa=class extends Ua{constructor(e,t=de,n=301,r,i,a=N,o=N,s,c=Se){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ga=class extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ka=class e extends fi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ei(c,3)),this.setAttribute(`normal`,new ei(l,3)),this.setAttribute(`uv`,new ei(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qa=class e extends fi{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new z,g=new z;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new ei(o,3)),this.setAttribute(`normal`,new ei(s,3)),this.setAttribute(`uv`,new ei(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},V=class e extends fi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new ei(u,3)),this.setAttribute(`normal`,new ei(d,3)),this.setAttribute(`uv`,new ei(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class e extends V{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ya=class e extends fi{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new ei(i,3)),this.setAttribute(`normal`,new ei(i.slice(),3)),this.setAttribute(`uv`,new ei(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Xa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],i=[],a=[],o=new z,s=new Fn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Vt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Vt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Za=class extends Xa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new R){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends Za{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function $a(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var eo=new z,to=new z,no=new $a,ro=new $a,io=new $a,ao=class extends Xa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(to.subVectors(r[0],r[1]).add(r[0]),c=to);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(eo.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=eo),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),no.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ro.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),io.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(no.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ro.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),io.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(no.calc(s),ro.calc(s),io.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oo(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function so(e,t){let n=1-e;return n*n*t}function co(e,t){return 2*(1-e)*e*t}function lo(e,t){return e*e*t}function uo(e,t,n,r){return so(e,t)+co(e,n)+lo(e,r)}function fo(e,t){let n=1-e;return n*n*n*t}function po(e,t){let n=1-e;return 3*n*n*e*t}function mo(e,t){return 3*(1-e)*e*e*t}function ho(e,t){return e*e*e*t}function go(e,t,n,r,i){return fo(e,t)+po(e,n)+mo(e,r)+ho(e,i)}var _o=class extends Xa{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(go(e,r.x,i.x,a.x,o.x),go(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends Xa{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(go(e,r.x,i.x,a.x,o.x),go(e,r.y,i.y,a.y,o.y),go(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yo=class extends Xa{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bo=class extends Xa{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Xa{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(uo(e,r.x,i.x,a.x),uo(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends Xa{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(uo(e,r.x,i.x,a.x),uo(e,r.y,i.y,a.y),uo(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Xa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(oo(o,s.x,c.x,l.x,u.x),oo(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:ao,CubicBezierCurve:_o,CubicBezierCurve3:vo,EllipseCurve:Za,LineCurve:yo,LineCurve3:bo,QuadraticBezierCurve:xo,QuadraticBezierCurve3:So,SplineCurve:Co}),To=class extends Xa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new wo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new wo[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Eo=class extends To{constructor(e){super(),this.type=`Path`,this.currentPoint=new R,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new yo(this.currentPoint.clone(),new R(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new xo(this.currentPoint.clone(),new R(e,t),new R(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new _o(this.currentPoint.clone(),new R(e,t),new R(n,r),new R(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Co([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Za(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Do=class extends Eo{constructor(e){super(e),this.uuid=Bt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Eo().fromJSON(n))}return this}};function Oo(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ko(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Io(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return jo(a,o,n,s,c,l,0),o}function ko(e,t,n,r,i){let a;if(i===os(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=rs(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=rs(i/r|0,e[i],e[i+1],a);return a&&Yo(a,a.next)&&(is(a),a=a.next),a}function Ao(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Yo(n,n.next)||Jo(n.prev,n,n.next)===0)){if(is(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function jo(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Vo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?No(e,r,i,a):Mo(e))t.push(c.i,e.i,l.i),is(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Po(Ao(e),t),jo(e,t,n,r,i,a,2)):o===2&&Fo(e,t,n,r,i,a):jo(Ao(e),t,n,r,i,a,1);break}}}function Mo(e){let t=e.prev,n=e,r=e.next;if(Jo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ko(i,s,a,c,o,l,m.x,m.y)&&Jo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function No(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Jo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Uo(p,m,t,n,r),v=Uo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ko(s,u,c,d,l,f,y.x,y.y)&&Jo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ko(s,u,c,d,l,f,b.x,b.y)&&Jo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ko(s,u,c,d,l,f,y.x,y.y)&&Jo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ko(s,u,c,d,l,f,b.x,b.y)&&Jo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Po(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Yo(r,i)&&Xo(r,n,n.next,i)&&es(r,i)&&es(i,r)&&(t.push(r.i,n.i,i.i),is(n),is(n.next),n=e=i),n=n.next}while(n!==e);return Ao(n)}function Fo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&qo(o,e)){let s=ns(o,e);o=Ao(o,o.next),s=Ao(s,s.next),jo(o,t,n,r,i,a,0),jo(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Io(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ko(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Wo(o))}i.sort(Lo);for(let e=0;e<i.length;e++)n=Ro(i[e],n);return n}function Lo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ro(e,t){let n=zo(e,t);if(!n)return t;let r=ns(n,e);return Ao(r,r.next),Ao(n,n.next)}function zo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Yo(e,n))return n;do{if(Yo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Go(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);es(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Bo(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Bo(e,t){return Jo(e.prev,e,t.prev)<0&&Jo(t.next,e,e.next)<0}function Vo(e,t,n,r){let i=e;do i.z===0&&(i.z=Uo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ho(i)}function Ho(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Uo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Wo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Go(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ko(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Go(e,t,n,r,i,a,o,s)}function qo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!$o(e,t)&&(es(e,t)&&es(t,e)&&ts(e,t)&&(Jo(e.prev,e,t.prev)||Jo(e,t.prev,t))||Yo(e,t)&&Jo(e.prev,e,e.next)>0&&Jo(t.prev,t,t.next)>0)}function Jo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Yo(e,t){return e.x===t.x&&e.y===t.y}function Xo(e,t,n,r){let i=Qo(Jo(e,t,n)),a=Qo(Jo(e,t,r)),o=Qo(Jo(n,r,e)),s=Qo(Jo(n,r,t));return!!(i!==a&&o!==s||i===0&&Zo(e,n,t)||a===0&&Zo(e,r,t)||o===0&&Zo(n,e,r)||s===0&&Zo(n,t,r))}function Zo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Qo(e){return e>0?1:e<0?-1:0}function $o(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Xo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function es(e,t){return Jo(e.prev,e,e.next)<0?Jo(e,t,e.next)>=0&&Jo(e,e.prev,t)>=0:Jo(e,t,e.prev)<0||Jo(e,e.next,t)<0}function ts(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ns(e,t){let n=as(e.i,e.x,e.y),r=as(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function rs(e,t,n,r){let i=as(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function is(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function as(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function os(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ss=class{static triangulate(e,t,n=2){return Oo(e,t,n)}},cs=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ls(e),us(n,e);let a=e.length;t.forEach(ls);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,us(n,t[e]);let o=ss.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ls(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function us(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ds=class e extends fi{constructor(e=new Do([new R(.5,.5),new R(-.5,.5),new R(-.5,-.5),new R(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new ei(r,3)),this.setAttribute(`uv`,new ei(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?fs:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new z,b=new z,x=new z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!cs.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];cs.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||jt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new R(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new R(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,N=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),N=N.concat(M)}let te;if(p===0)te=cs.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=cs.triangulateShape(e,t)}let ne=te.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ne;e++){let n=te[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ne;e++){let n=te[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ne;e++){let t=te[e];ce(t[2],t[1],t[0])}for(let e=0;e<ne;e++){let t=te[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){ue(e),ue(t),ue(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function le(e,t,i,a){ue(e),ue(t),ue(a),ue(t),ue(i),ue(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function ue(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ps(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wo[i.type]().fromJSON(i)),new e(r,t.options)}},fs={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new R(a,o),new R(s,c),new R(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new R(o,1-c),new R(l,1-d),new R(f,1-m),new R(h,1-_)]:[new R(s,1-c),new R(u,1-d),new R(p,1-m),new R(g,1-_)]}};function ps(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var ms=class e extends Ya{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},hs=class e extends fi{constructor(e=[new R(0,-.5),new R(.5,0),new R(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Vt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new z,d=new R,f=new z,p=new z,m=new z,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new ei(a,3)),this.setAttribute(`uv`,new ei(o,2)),this.setAttribute(`normal`,new ei(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},gs=class e extends Ya{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},_s=class e extends fi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ei(p,3)),this.setAttribute(`normal`,new ei(m,3)),this.setAttribute(`uv`,new ei(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},vs=class e extends fi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new R;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new ei(s,3)),this.setAttribute(`normal`,new ei(c,3)),this.setAttribute(`uv`,new ei(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ys=class e extends fi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new ei(p,3)),this.setAttribute(`normal`,new ei(m,3)),this.setAttribute(`uv`,new ei(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},bs=class e extends fi{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new z,f=new z,p=new z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new ei(c,3)),this.setAttribute(`normal`,new ei(l,3)),this.setAttribute(`uv`,new ei(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function xs(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Cs(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Cs(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ss(e){let t={};for(let n=0;n<e.length;n++){let r=xs(e[n]);for(let e in r)t[e]=r[e]}return t}function Cs(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ws(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ts(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yn.workingColorSpace}var Es={clone:xs,merge:Ss},Ds=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Os=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ks=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ds,this.fragmentShader=Os,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=ws(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new An().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new mn().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Fn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},As=class extends ks{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},js=class extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ms=class extends Si{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ns=class extends Si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ps=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ht,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fs=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Is(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ls(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Rs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},zs=class extends Rs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ft,endingEnd:ft}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case pt:i=e,o=2*t-n;break;case mt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case pt:a=e,s=2*n-t;break;case mt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Bs=class extends Rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Vs=class extends Rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hs=class extends Rs{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Gs(n,t,g,y,r);i[p]=Us(x,o,_,b,m)}return i}};function Us(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ws(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Gs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Us(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ws(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ks=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Is(t,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Is(e.times,Array),values:Is(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ls(e.settings)&&(n.settings={inTangents:Is(e.settings.inTangents,Array),outTangents:Is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ct:t=this.InterpolantFactoryMethodDiscrete;break;case lt:t=this.InterpolantFactoryMethodLinear;break;case ut:t=this.InterpolantFactoryMethodSmooth;break;case dt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ct;case this.InterpolantFactoryMethodLinear:return lt;case this.InterpolantFactoryMethodSmooth:return ut;case this.InterpolantFactoryMethodBezier:return dt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ls(this.settings)&&(qs(this.settings.inTangents,e),qs(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ls(this.settings)&&(Js(this.settings.inTangents,e),Js(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(jt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(jt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){jt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){jt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Tt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){jt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ut,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ls(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function qs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Js(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ks.prototype.ValueTypeName=``,Ks.prototype.TimeBufferType=Float32Array,Ks.prototype.ValueBufferType=Float32Array,Ks.prototype.DefaultInterpolation=lt;var Ys=class extends Ks{constructor(e,t,n){super(e,t,n)}};Ys.prototype.ValueTypeName=`bool`,Ys.prototype.ValueBufferType=Array,Ys.prototype.DefaultInterpolation=ct,Ys.prototype.InterpolantFactoryMethodLinear=void 0,Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends Ks{constructor(e,t,n,r){super(e,t,n,r)}};Xs.prototype.ValueTypeName=`color`;var Zs=class extends Ks{constructor(e,t,n,r){super(e,t,n,r)}};Zs.prototype.ValueTypeName=`number`;var Qs=class extends Rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)dn.slerpFlat(i,0,a,c-o,a,c,s);return i}},$s=class extends Ks{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Qs(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName=`quaternion`,$s.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends Ks{constructor(e,t,n){super(e,t,n)}};ec.prototype.ValueTypeName=`string`,ec.prototype.ValueBufferType=Array,ec.prototype.DefaultInterpolation=ct,ec.prototype.InterpolantFactoryMethodLinear=void 0,ec.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends Ks{constructor(e,t,n,r){super(e,t,n,r)}};tc.prototype.ValueTypeName=`vector`;var nc=class extends cr{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},rc=class extends nc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(cr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ic=new Fn,ac=new z,oc=new z,sc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=oe,this.map=null,this.mapPass=null,this.matrix=new Fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ic,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cc=new z,lc=new dn,uc=new z,dc=class extends cr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=Ct,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cc,lc,uc),uc.x===1&&uc.y===1&&uc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,lc,uc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cc,lc,uc),uc.x===1&&uc.y===1&&uc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,lc,uc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fc=new z,pc=new R,mc=new R,hc=class extends dc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zt*2*Math.atan(Math.tan(Rt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fc.x,fc.y).multiplyScalar(-e/fc.z),fc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fc.x,fc.y).multiplyScalar(-e/fc.z)}getViewSize(e,t){return this.getViewBounds(e,pc,mc),t.subVectors(mc,pc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gc=class extends sc{constructor(){super(new hc(90,1,.5,500)),this.isPointLightShadow=!0}},_c=class extends nc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vc=class extends dc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yc=class extends sc{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bc=class extends nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(cr.DEFAULT_UP),this.updateMatrix(),this.target=new cr,this.shadow=new yc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xc=-90,Sc=1,Cc=class extends cr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hc(xc,Sc,e,t);r.layers=this.layers,this.add(r);let i=new hc(xc,Sc,e,t);i.layers=this.layers,this.add(i);let a=new hc(xc,Sc,e,t);a.layers=this.layers,this.add(a);let o=new hc(xc,Sc,e,t);o.layers=this.layers,this.add(o);let s=new hc(xc,Sc,e,t);s.layers=this.layers,this.add(s);let c=new hc(xc,Sc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wc=class extends hc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Tc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ec.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ec(){this._document.hidden===!1&&this.reset()}var Dc=`\\[\\]\\.:\\/`,Oc=RegExp(`[\\[\\]\\.:\\/]`,`g`),kc=`[^\\[\\]\\.:\\/]`,Ac=`[^`+Dc.replace(`\\.`,``)+`]`,jc=`((?:WC+[\\/:])*)`.replace(`WC`,kc),Mc=`(WCOD+)?`.replace(`WCOD`,Ac),Nc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,kc),Pc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,kc),Fc=RegExp(`^`+jc+Mc+Nc+Pc+`$`),Ic=[`material`,`materials`,`bones`,`map`],Lc=class{constructor(e,t,n){let r=n||Rc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Oc,``)}static parseTrackName(e){let t=Fc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ic.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){jt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){jt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){jt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){jt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){jt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){jt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){jt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;jt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){jt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){jt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rc.Composite=Lc,Rc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Rc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Rc.prototype.GetterByBindingType=[Rc.prototype._getValue_direct,Rc.prototype._getValue_array,Rc.prototype._getValue_arrayElement,Rc.prototype._getValue_toArray],Rc.prototype.SetterByBindingTypeAndVersioning=[[Rc.prototype._setValue_direct,Rc.prototype._setValue_direct_setNeedsUpdate,Rc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rc.prototype._setValue_array,Rc.prototype._setValue_array_setNeedsUpdate,Rc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rc.prototype._setValue_arrayElement,Rc.prototype._setValue_arrayElement_setNeedsUpdate,Rc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rc.prototype._setValue_fromArray,Rc.prototype._setValue_fromArray_setNeedsUpdate,Rc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zc=new Fn,Bc=class{constructor(e,t,n=0,r=1/0){this.ray=new Ui(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Kn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):jt(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(e,t=!0,n=[]){return Hc(e,this,n,t),n.sort(Vc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Hc(e[r],this,n,t);return n.sort(Vc),n}};function Vc(e,t){return e.distance-t.distance}function Hc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Hc(r[e],t,n,!0)}}var Uc=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Vt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Wc=class extends Ft{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Gc(e,t,n,r){let i=Kc(r);switch(n){case ye:return e*t;case we:return e*t/i.components*i.byteLength;case Te:return e*t/i.components*i.byteLength;case Ee:return e*t*2/i.components*i.byteLength;case De:return e*t*2/i.components*i.byteLength;case be:return e*t*3/i.components*i.byteLength;case xe:return e*t*4/i.components*i.byteLength;case Oe:return e*t*4/i.components*i.byteLength;case ke:case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case je:case Me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pe:case P:return Math.max(e,16)*Math.max(t,8)/4;case Ne:case Fe:return Math.max(e,8)*Math.max(t,8)/2;case Ie:case Le:case F:case ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Re:case I:case Be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case He:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ue:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case We:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ke:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case qe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Je:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ze:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Qe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case $e:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case et:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case tt:case nt:case rt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case it:case at:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ot:case st:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Kc(e){switch(e){case oe:case se:return{byteLength:1,components:1};case le:case ce:case pe:return{byteLength:2,components:1};case me:case he:return{byteLength:2,components:4};case de:case ue:case fe:return{byteLength:4,components:1};case _e:case ve:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function qc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Jc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Yc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},H={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mn},alphaMap:{value:null},alphaMapTransform:{value:new mn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mn}},envmap:{envMap:{value:null},envMapRotation:{value:new mn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mn},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mn},alphaTest:{value:0},uvTransform:{value:new mn}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mn},alphaMap:{value:null},alphaMapTransform:{value:new mn},alphaTest:{value:0}}},Xc={basic:{uniforms:Ss([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:Yc.meshbasic_vert,fragmentShader:Yc.meshbasic_frag},lambert:{uniforms:Ss([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:Yc.meshlambert_vert,fragmentShader:Yc.meshlambert_frag},phong:{uniforms:Ss([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yc.meshphong_vert,fragmentShader:Yc.meshphong_frag},standard:{uniforms:Ss([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yc.meshphysical_vert,fragmentShader:Yc.meshphysical_frag},toon:{uniforms:Ss([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new B(0)}}]),vertexShader:Yc.meshtoon_vert,fragmentShader:Yc.meshtoon_frag},matcap:{uniforms:Ss([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:Yc.meshmatcap_vert,fragmentShader:Yc.meshmatcap_frag},points:{uniforms:Ss([H.points,H.fog]),vertexShader:Yc.points_vert,fragmentShader:Yc.points_frag},dashed:{uniforms:Ss([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yc.linedashed_vert,fragmentShader:Yc.linedashed_frag},depth:{uniforms:Ss([H.common,H.displacementmap]),vertexShader:Yc.depth_vert,fragmentShader:Yc.depth_frag},normal:{uniforms:Ss([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:Yc.meshnormal_vert,fragmentShader:Yc.meshnormal_frag},sprite:{uniforms:Ss([H.sprite,H.fog]),vertexShader:Yc.sprite_vert,fragmentShader:Yc.sprite_frag},background:{uniforms:{uvTransform:{value:new mn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yc.background_vert,fragmentShader:Yc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mn}},vertexShader:Yc.backgroundCube_vert,fragmentShader:Yc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yc.cube_vert,fragmentShader:Yc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yc.equirect_vert,fragmentShader:Yc.equirect_frag},distance:{uniforms:Ss([H.common,H.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yc.distance_vert,fragmentShader:Yc.distance_frag},shadow:{uniforms:Ss([H.lights,H.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:Yc.shadow_vert,fragmentShader:Yc.shadow_frag}};Xc.physical={uniforms:Ss([Xc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mn},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mn},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mn},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mn},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mn},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mn},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mn}}]),vertexShader:Yc.meshphysical_vert,fragmentShader:Yc.meshphysical_frag};var Zc={r:0,b:0,g:0},Qc=new Fn,$c=new mn;$c.set(-1,0,0,0,1,0,0,0,1);function el(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new na(new Ka(1,1,1),new ks({name:`BackgroundCubeMaterial`,uniforms:xs(Xc.backgroundCube.uniforms),vertexShader:Xc.backgroundCube.vertexShader,fragmentShader:Xc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($c),l.material.toneMapped=yn.getTransfer(i.colorSpace)!==bt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new na(new _s(2,2),new ks({name:`BackgroundMaterial`,uniforms:xs(Xc.background.uniforms),vertexShader:Xc.background.vertexShader,fragmentShader:Xc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=yn.getTransfer(i.colorSpace)!==bt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Zc,Ts(e)),n.buffers.color.setClear(Zc.r,Zc.g,Zc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function tl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function nl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function rl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&L(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function il(e){let t=this,n=null,r=0,i=!1,a=!1,o=new bi,s=new mn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var al=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Va(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ka(5,5,5),i=new ks({name:`CubemapFromEquirect`,uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new na(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=re),new Cc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ol=256,sl=3,cl=20,ll=256,ul=16,dl=3,fl=new z,pl=new B,ml=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cc(1,10,null),this._boxMesh=new na(new Ka(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fl}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(pl));let h=new Cc(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ol,an(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ol:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hl(e,!1,!1),n=Math.log2(e)-sl;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=_l(),this._integrationMaterial=vl());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/ul);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-dl)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ll*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yl());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function hl(e,t,n){return new al(e,{minFilter:ae,generateMipmaps:t,type:pe,colorSpace:vt,depthBuffer:n})}function gl(e,t,n){return new ks({name:e,uniforms:t,vertexShader:Yc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function _l(){return gl(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ll}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vl(){return gl(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ul}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yl(){return gl(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cl}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function bl(){return gl(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function xl(){return gl(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new al(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ml(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ml(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Cl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Mt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function wl(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?$r:Qr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Tl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function El(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:jt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Dl(e,t,n){let r=new WeakMap,i=new An;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Nn(h,p,m,u);g.type=fe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new R(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ol(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var kl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Al(e,t,n,r,i,a){let o=new Mn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new fi;u.setAttribute(`position`,new ei([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new ei([0,2,0,0,2,0],2));let d=new As({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new na(u,d),p=new vc(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Mn(t,n,{type:pe,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(t,n,{type:pe,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ua(t,n),a===!0&&(l.format=Ce,l.type=ge)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},yn.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=kl[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var jl=new kn,Ml=new Ua(1,1),Nl=new Wa(1),Pl=new Nn,Fl=new Pn,Il=new Va,Ll=[],Rl=[],zl=new Float32Array(16),Bl=new Float32Array(9),Vl=new Float32Array(4);function Hl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ll[i];if(a===void 0&&(a=new Float32Array(i),Ll[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ul(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Wl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Gl(e,t){let n=Rl[t];n===void 0&&(n=new Int32Array(t),Rl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Kl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ql(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ul(n,t))return;e.uniform2fv(this.addr,t),Wl(n,t)}}function Jl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ul(n,t))return;e.uniform3fv(this.addr,t),Wl(n,t)}}function Yl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ul(n,t))return;e.uniform4fv(this.addr,t),Wl(n,t)}}function Xl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ul(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wl(n,t)}else{if(Ul(n,r))return;Vl.set(r),e.uniformMatrix2fv(this.addr,!1,Vl),Wl(n,r)}}function Zl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ul(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wl(n,t)}else{if(Ul(n,r))return;Bl.set(r),e.uniformMatrix3fv(this.addr,!1,Bl),Wl(n,r)}}function Ql(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ul(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wl(n,t)}else{if(Ul(n,r))return;zl.set(r),e.uniformMatrix4fv(this.addr,!1,zl),Wl(n,r)}}function $l(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ul(n,t))return;e.uniform2iv(this.addr,t),Wl(n,t)}}function tu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ul(n,t))return;e.uniform3iv(this.addr,t),Wl(n,t)}}function nu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ul(n,t))return;e.uniform4iv(this.addr,t),Wl(n,t)}}function ru(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function iu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ul(n,t))return;e.uniform2uiv(this.addr,t),Wl(n,t)}}function au(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ul(n,t))return;e.uniform3uiv(this.addr,t),Wl(n,t)}}function ou(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ul(n,t))return;e.uniform4uiv(this.addr,t),Wl(n,t)}}function su(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function cu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?su(Ml):jl,n.setTexture2D(t||a,i)}function lu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fl,i)}function uu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?su(Nl):Il,n.setTextureCube(t||a,i)}function du(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Pl,i)}function fu(e){switch(e){case 5126:return Kl;case 35664:return ql;case 35665:return Jl;case 35666:return Yl;case 35674:return Xl;case 35675:return Zl;case 35676:return Ql;case 5124:case 35670:return $l;case 35667:case 35671:return eu;case 35668:case 35672:return tu;case 35669:case 35673:return nu;case 5125:return ru;case 36294:return iu;case 36295:return au;case 36296:return ou;case 35678:case 36198:case 36298:case 36306:case 35682:return cu;case 35679:case 36299:case 36307:return lu;case 35680:case 36300:case 36308:case 36293:return uu;case 36289:case 36303:case 36311:case 36292:return du}}function pu(e,t){e.uniform1fv(this.addr,t)}function mu(e,t){let n=Hl(t,this.size,2);e.uniform2fv(this.addr,n)}function hu(e,t){let n=Hl(t,this.size,3);e.uniform3fv(this.addr,n)}function gu(e,t){let n=Hl(t,this.size,4);e.uniform4fv(this.addr,n)}function _u(e,t){let n=Hl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vu(e,t){let n=Hl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yu(e,t){let n=Hl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function bu(e,t){e.uniform1iv(this.addr,t)}function xu(e,t){e.uniform2iv(this.addr,t)}function Su(e,t){e.uniform3iv(this.addr,t)}function Cu(e,t){e.uniform4iv(this.addr,t)}function wu(e,t){e.uniform1uiv(this.addr,t)}function Tu(e,t){e.uniform2uiv(this.addr,t)}function Eu(e,t){e.uniform3uiv(this.addr,t)}function Du(e,t){e.uniform4uiv(this.addr,t)}function Ou(e,t,n){let r=this.cache,i=t.length,a=Gl(n,i);Ul(r,a)||(e.uniform1iv(this.addr,a),Wl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?su(Ml):jl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ku(e,t,n){let r=this.cache,i=t.length,a=Gl(n,i);Ul(r,a)||(e.uniform1iv(this.addr,a),Wl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fl,a[e])}function Au(e,t,n){let r=this.cache,i=t.length,a=Gl(n,i);Ul(r,a)||(e.uniform1iv(this.addr,a),Wl(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?su(Nl):Il;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ju(e,t,n){let r=this.cache,i=t.length,a=Gl(n,i);Ul(r,a)||(e.uniform1iv(this.addr,a),Wl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Pl,a[e])}function Mu(e){switch(e){case 5126:return pu;case 35664:return mu;case 35665:return hu;case 35666:return gu;case 35674:return _u;case 35675:return vu;case 35676:return yu;case 5124:case 35670:return bu;case 35667:case 35671:return xu;case 35668:case 35672:return Su;case 35669:case 35673:return Cu;case 5125:return wu;case 36294:return Tu;case 36295:return Eu;case 36296:return Du;case 35678:case 36198:case 36298:case 36306:case 35682:return Ou;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Au;case 36289:case 36303:case 36311:case 36292:return ju}}var Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fu(t.type)}},Pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mu(t.type)}},Fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function Lu(e,t){e.seq.push(t),e.map[t.id]=t}function Ru(e,t,n){let r=e.name,i=r.length;for(Iu.lastIndex=0;;){let a=Iu.exec(r),o=Iu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Lu(n,l===void 0?new Nu(s,e,t):new Pu(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Fu(s),Lu(n,e)),n=e}}}var zu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ru(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Bu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Vu=37297,Hu=0;function Uu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Wu=new mn;function Gu(e){yn._getMatrix(Wu,yn.workingColorSpace,e);let t=`mat3( ${Wu.elements.map(e=>e.toFixed(4))} )`;switch(yn.getTransfer(e)){case yt:return[t,`LinearTransferOETF`];case bt:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ku(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Uu(e.getShaderSource(t),r)}return i}function qu(e,t){let n=Gu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Ju={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Yu(e,t){let n=Ju[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Xu=new z;function Zu(){return yn.getLuminanceCoefficients(Xu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Xu.x.toFixed(4)}, ${Xu.y.toFixed(4)}, ${Xu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Qu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(td).join(`
`)}function $u(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ed(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function td(e){return e!==``}function nd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function rd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var id=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(e){return e.replace(id,od)}function od(e,t){let n=Yc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ad(n)}var sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(e){return e.replace(sd,ld)}function ld(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ud(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fd(e){return dd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var pd={302:`ENVMAP_MODE_REFRACTION`};function md(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:pd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var hd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function gd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:hd[e.combine]||`ENVMAP_BLENDING_NONE`}function _d(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fd(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=md(n),d=gd(n),f=Qu(n),p=$u(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(td).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(td).join(`
`),g.length>0&&(g+=`
`)):(h=[ud(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(td).join(`
`),g=[ud(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Yc.tonemapping_pars_fragment,n.toneMapping===0?``:Yu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Yc.colorspace_pars_fragment,qu(`linearToOutputTexel`,n.outputColorSpace),Zu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(td).join(`
`)),o=ad(o),o=nd(o,n),o=rd(o,n),s=ad(s),s=nd(s,n),s=rd(s,n),o=cd(o),s=cd(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Bu(i,i.VERTEX_SHADER,v),x=Bu(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Ku(i,b,`vertex`),n=Ku(i,x,`fragment`);jt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new zu(i,m),w=ed(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Vu)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var vd=0,yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bd(e),t.set(e,n)),n}},bd=class{constructor(e){this.id=vd++,this.code=e,this.usedTimes=0}};function xd(e){return e===1030||e===37490||e===36285}function Sd(e,t,n,r,i,a){let o=new Kn,s=new yd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Xc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,te=!!i.matcap,ne=!!b,re=ne&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:te,envMap:ne,envMapMode:ne&&b.mapping,envMapPMREM:re,envMapMaxLod:re?F.length-1:null,envMapSize:re?F[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&xd(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&yn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&yn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Xc[t];n=Es.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new _d(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Cd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function wd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Td(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ed(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||wd),r.length>1&&r.sort(t||Td),i.length>1&&i.sort(t||Td)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Dd(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ed,e.set(t,[i])):n>=r.length?(i=new Ed,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Od(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new B};break;case`SpotLight`:n={position:new z,direction:new z,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function kd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ad=0;function jd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Md(e){let t=new Od,n=kd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new Fn,o=new Fn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(jd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=H.LTC_FLOAT_1,r.rectAreaLTC2=H.LTC_FLOAT_2):(r.rectAreaLTC1=H.LTC_HALF_1,r.rectAreaLTC2=H.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ad++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Nd(e){let t=new Md(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Pd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Nd(e),t.set(n,[a])):r>=i.length?(a=new Nd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Id=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ld=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Rd=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],zd=new Fn,Bd=new z,Vd=new z;function Hd(e,t,n){let r=new va,i=new R,a=new R,o=new An,s=new Ps,c=new Fs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ks({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:Fd,fragmentShader:Id}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new fi;m.setAttribute(`position`,new Zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new na(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Mn(i.x,i.y,{format:Ee,type:pe,minFilter:re,magFilter:re,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ua(i.x,i.y,fe),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Se,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N}else l.isPointLight?(d.map=new al(i.x),d.map.depthTexture=new Wa(i.x,de)):(d.map=new Mn(i.x,i.y),d.map.depthTexture=new Ua(i.x,i.y,de)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Se,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=re,d.map.depthTexture.magFilter=re):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Bd.setFromMatrixPosition(l.matrixWorld),e.position.copy(Bd),Vd.copy(e.position),Vd.add(Ld[t]),e.up.copy(Rd[t]),e.lookAt(Vd),e.updateMatrixWorld(),n.makeTranslation(-Bd.x,-Bd.y,-Bd.z),zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Mn(i.x,i.y,{format:Ee,type:pe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ud(e,t){function n(){let t=!1,n=new An,r=null,i=new An(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Pt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new An().fromArray(ie),se=new An().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:jt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:jt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:jt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:jt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function Te(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Ee(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){jt(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function F(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:Be}}function Wd(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new R,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Et(`canvas`)}function v(e,t,n){let r=1,i=Be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?yt:yn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),se(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),le(e)}function oe(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function se(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ce(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ce(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function le(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(t,i){let a=r.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ye(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ke(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let be={[j]:e.REPEAT,[ee]:e.CLAMP_TO_EDGE,[M]:e.MIRRORED_REPEAT},xe={[N]:e.NEAREST,[te]:e.NEAREST_MIPMAP_NEAREST,[ne]:e.NEAREST_MIPMAP_LINEAR,[re]:e.LINEAR,[ie]:e.LINEAR_MIPMAP_NEAREST,[ae]:e.LINEAR_MIPMAP_LINEAR},Se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,be[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,be[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,be[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,xe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,xe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=he(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=yn.getPrimaries(yn.workingColorSpace),r=o.colorSpace===``?null:yn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);we(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Ce,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&De(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Gc(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Gc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Be(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Be(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,o,s){if(o.image.length!==6)return;let c=Te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=yn.getPrimaries(yn.workingColorSpace),r=o.colorSpace===``?null:yn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);we(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Ce,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Be(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Re(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ye(i.depthTexture,0):ge(i.depthTexture,0);let u=c.__webglTexture,d=Re(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Me(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(i.__webglFramebuffer[0],t,0):Me(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),je(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),je(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,i){let a=r.get(t);n!==void 0&&Ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ne(t)}function Fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),je(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),we(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),we(c,a),Ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),we(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(yn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):jt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=oe}function Gd(e,t){function n(n,r=``){let i,a=yn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Kd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ks({vertexShader:Kd,fragmentShader:qd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new na(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yd=class extends Ft{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Jd,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new R,C=null,w=null,T=new hc;T.viewport=new An;let E=new hc;E.viewport=new An;let D=[T,E],O=new wc,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new dr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new dr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new dr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ce:Se,a=_.stencil?ge:de);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Mn(d.textureWidth,d.textureHeight,{format:xe,type:oe,depthTexture:new Ua(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Mn(f.framebufferWidth,f.framebufferHeight,{format:xe,type:oe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;N(O,i);for(let e=0;e<a.length;e++)N(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),te(e,O,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=zt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new hc,o.layers.enable(n),o.viewport=new An,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ga,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new qc;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},Xd=new Fn,Zd=new mn;Zd.set(-1,0,0,0,1,0,0,0,1);function Qd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ts(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Zd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function $d(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ef=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tf=null;function nf(){return tf===null&&(tf=new aa(ef,16,16,Ee,pe),tf.name=`DFG_LUT`,tf.minFilter=re,tf.magFilter=re,tf.wrapS=ee,tf.wrapT=ee,tf.generateMipmaps=!1,tf.needsUpdate=!0),tf}var rf=class{constructor(e={}){let{canvas:t=Dt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=oe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Oe,De,Te]),g=new Set([oe,de,le,ge,me,he]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=_t;let j=0,ee=0,M=null,N=-1,te=null,ne=new An,re=new An,ie=null,se=new B(0),ce=0,ue=t.width,fe=t.height,_e=1,ve=null,ye=null,be=new An(0,0,ue,fe),xe=new An(0,0,ue,fe),Se=!1,Ce=new va,we=new ba,Ee=!1,ke=!1,Ae=new Fn,je=new z,Me=new An,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?_e:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,ct,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),jt(`WebGLRenderer: `+e.message),e}function it(){Le=new Cl(P),Le.init(),tt=new Gd(P,Le),Re=new rl(P,Le,e,tt),F=new Ud(P,Le),Re.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),ze=new El(P),I=new Cd,Be=new Wd(P,Le,F,I,Re,tt,ze),Ve=new Sl(T),He=new Jc(P),nt=new tl(P,He),Ue=new wl(P,He,ze,nt),We=new Ol(P,Ue,He,nt,ze),Qe=new Dl(P,Re,Be),Ye=new il(I),Ge=new Sd(T,Ve,Le,Re,nt,Ye),Ke=new Qd(T,I),qe=new Dd,Je=new Pd(Le),Ze=new el(T,Ve,F,We,p,s),Xe=new Hd(T,We,Re),rt=new $d(P,ze,Re,F),$e=new nl(P,Le,ze),et=new Tl(P,Le,ze),ze.programs=Ge.programs,T.capabilities=Re,T.extensions=Le,T.properties=I,T.renderLists=qe,T.shadowMap=Xe,T.state=F,T.info=ze}m!==1009&&(w=new Al(m,t.width,t.height,o,r,i));let at=new Yd(T,P);this.xr=at,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(ue,fe,!1))},this.getSize=function(e){return e.set(ue,fe)},this.setSize=function(e,n,r=!0){at.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,fe=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*_e,fe*_e).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,fe=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)jt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),F.viewport(ne.copy(be).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),F.scissor(re.copy(xe).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){F.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),Ze.dispose(),qe.dispose(),Je.dispose(),Be.dispose(),I.dispose(),Ve.dispose(),We.dispose(),Ue.dispose(),nt.dispose(),rt.dispose(),Ge.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,ht),at.removeEventListener(`sessionend`,gt),vt.stop()};function ot(e){e.preventDefault(),kt(`WebGLRenderer: Context Lost.`),E=!0}function st(){kt(`WebGLRenderer: Context Restored.`),E=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;it(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ct(e){jt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){dt(e),I.remove(e)}function dt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ke=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,ke),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),D!==null&&Xe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){vt.stop()}function gt(){vt.start()}let vt=new qc;vt.setAnimationLoop(mt),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){pt=e,at.setAnimationLoop(e),e===null?vt.stop():vt.start()},at.addEventListener(`sessionstart`,ht),at.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){jt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Je.get(e,C.length),x.init(t),x.state.textureUnits=Be.getTextureUnits(),C.push(x),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?we.setFromArrayCamera(t):Ce.setFromProjectionMatrix(Ae,Ct,t.reversedDepth),ke=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,ke),b=qe.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,T.sortObjects)}yt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ve,ye),Pe=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Pe&&Ze.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=x.state.shadowsArray;if(Xe.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Pe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(b,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Pe&&Ze.render(e),bt(b,e,t)}M!==null&&ee===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),nt.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],Be.setTextureUnits(x.state.textureUnits),Ee===!0&&Ye.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=We.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Me.z,s,t)}}else a.visible&&b.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ee===!0&&Ye.setGlobalState(T.clippingPlanes,n),r&&F.viewport(ne.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Mn(1,1,{generateMipmaps:!0,type:e?pe:oe,minFilter:ae,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(se),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),Pe&&Ze.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ee===!0&&Ye.setGlobalState(T.clippingPlanes,r),St(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(se,ce),d!==void 0&&(r.viewport=d),T.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Tt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Et(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Ge.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Mt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Tt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Et(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=zu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:yn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),b=x.state.lights;if(Ee===!0&&(ke===!0||e!==te)){let t=e===te&&r.id===N;Ye.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Tt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Ot(r,t,i,s,h):Et(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(F.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==N&&(N=r.id,O=!0),E||te!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(P,`projectionMatrix`,e.projectionMatrix),A.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&A.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(P,`sunShadowMap`,b.state.sunShadowMap,Be),b.state.directionalShadowMap.length>0&&A.setValue(P,`directionalShadowMap`,b.state.directionalShadowMap,Be),b.state.spotShadowMap.length>0&&A.setValue(P,`spotShadowMap`,b.state.spotShadowMap,Be),b.state.pointShadowMap.length>0&&A.setValue(P,`pointShadowMap`,b.state.pointShadowMap,Be)),i.isSkinnedMesh){A.setOptional(P,i,`bindMatrix`),A.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(P,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(A.setOptional(P,i,`batchingTexture`),A.setValue(P,`batchingTexture`,i._matricesTexture,Be),A.setOptional(P,i,`batchingIdTexture`),A.setValue(P,`batchingIdTexture`,i._indirectTexture,Be),A.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(P,`batchingColorTexture`,i._colorsTexture,Be));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Qe.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=nf()),O){if(A.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Ft(j,k),a&&r.fog===!0&&Ke.refreshFogUniforms(j,a),Ke.refreshMaterialUniforms(j,r,_e,fe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}zu.upload(P,At(v),j,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(zu.upload(P,At(v),j,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(P,`center`,i.center),A.setValue(P,`modelViewMatrix`,i.modelViewMatrix),A.setValue(P,`normalMatrix`,i.normalMatrix),A.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,w),rt.bind(n,w)}}return w}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,F.viewport(ne),F.scissor(re),F.setScissorTest(ie),N=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(be).multiplyScalar(_e).floor(),re.copy(xe).multiplyScalar(_e).floor(),ie=Se;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(ne),F.scissor(re),F.setScissorTest(ie),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}N=-1};function Lt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){jt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Lt(o);if(u.__formatReadable===!1){jt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){jt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,F.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ct}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yn._getDrawingBufferColorSpace(e),t.unpackColorSpace=yn._getUnpackColorSpace()}},af={value:1},of={value:1},sf=new B;function cf(e,t=new B){sf.set(e);let n=Math.max(sf.r,sf.g,sf.b,1e-4),r=of.value,i=e=>1-r*(1-(.6+e/n*.4)*.8);return t.setRGB(i(sf.r),i(sf.g),i(sf.b))}function lf(e,t=`#ffffff`,n=1){return{uSkyTop:{value:e?.top??new B(`#8ccbe8`)},uSkyHor:{value:e?.hor??new B(`#eef6e4`)},uSkyBot:{value:e?.bot??new B(`#c6e4d6`)},uSheen:{value:n*of.value},uBounce:{value:cf(t)},uLeaf:{value:of.value}}}var uf=`
attribute float sway; attribute vec4 grow; attribute float glow; attribute float surf;
uniform float uTime; varying float vGlow; varying vec3 vClay; varying float vSurf; varying float vLift;`,df=`
float gY = grow.w < -500.0 ? 0.0 : grow.w; // the ground it stands on (not known: its own zero)
vLift = grow.w < -500.0 ? 99.0 : position.y - gY;
if (grow.z > -500.0) {
  float gp = clamp((uTime - grow.z) / 0.95, 0.0, 1.0);
  float gq = gp - 1.0;
  float gs = 1.0 + 2.70158 * gq * gq * gq + 1.70158 * gq * gq; // overshoots, then settles
  float gy = gs * (1.0 + 0.35 * sin(gp * 3.14159));           // stretch upward mid-growth
  transformed.xz = grow.xy + (transformed.xz - grow.xy) * gs;
  transformed.y = gY + (transformed.y - gY) * gy;
}
float hgt = abs(transformed.y - gY);
vec4 wp0 = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
float wv = sin(uTime * 1.5 + wp0.x * 0.8 + position.x * 2.0) * 0.6 + sin(uTime * 2.4 + wp0.z * 1.1 + position.z * 3.0) * 0.4;
transformed.x += wv * sway * hgt * 0.05;
transformed.z += wv * sway * hgt * 0.035;
vClay = position + wp0.xyz;
vSurf = surf;
vGlow = glow * (0.82 + 0.18 * sin(uTime * 1.7 + wp0.x * 1.3 + wp0.z * 0.9 + position.y * 2.0));`,ff=`
varying float vGlow; uniform float uGlow; uniform float uRim; uniform float uTex; varying vec3 vClay; varying float vSurf; varying float vLift;
uniform vec3 uSkyTop; uniform vec3 uSkyHor; uniform vec3 uSkyBot; uniform float uSheen; uniform vec3 uBounce; uniform float uLeaf;
float clayHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float clayNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(clayHash(i), clayHash(i + vec3(1, 0, 0)), f.x), mix(clayHash(i + vec3(0, 1, 0)), clayHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(clayHash(i + vec3(0, 0, 1)), clayHash(i + vec3(1, 0, 1)), f.x), mix(clayHash(i + vec3(0, 1, 1)), clayHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float sHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float sNoise(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(sHash(i), sHash(i + vec2(1, 0)), f.x), mix(sHash(i + vec2(0, 1)), sHash(i + vec2(1, 1)), f.x), f.y);
}
// how much of a detail this big (in world units) can still be drawn: 1 while it covers a few pixels, 0 before it would shimmer
#define SFADE(size) (1.0 - smoothstep(0.3, 0.9, sPx / (size)))`,pf=`
vec3 sP = vClay;
vec3 sDx = dFdx(sP), sDy = dFdy(sP);
float sPx = max(length(sDx), length(sDy));               // how big a pixel is here
vec3 sN = cross(sDx, sDy); sN /= max(length(sN), 1e-12);  // the face this pixel is on (either way round)
float sFlat = abs(sN.y), sHl = length(sN.xz);
// across the face and up it: so courses run level round a wall and tiles run in rows up a roof
vec2 sUV = sP.xz;
if (sFlat < 0.82) { vec2 sT = vec2(-sN.z, sN.x) / sHl; sUV = vec2(dot(sP.xz, sT), sP.y / sHl); }
float claySoft = clayNoise(sP * 6.0);
float clayPatch = clayNoise(sP * 1.7 + 11.0);
float sTint = 0.0, sWarm = 0.0, sH = 0.0, sRough = 0.0, sMetal = 0.0;
float sId = floor(vSurf + 0.5);
if (vSurf > 15.5) {
  /* ---- the land ---- */
  float gk = floor(vSurf * 0.5) * 2.0;
  float open = clamp((vSurf - gk) / 0.98, 0.0, 1.0);
  vec2 g = sP.xz;
  float big = sNoise(g * 1.1 + 4.0), mid = sNoise(g * 6.0 + 1.7);
  float gt = 0.0, gw = 0.0, gh = 0.0;
  if (gk < 17.0) {
    // turf: sunlit and shaded patches, clumps, and the nap of the blades
    float clump = sNoise(g * 21.0);
    float blade = sNoise(vec2(g.x * 115.0, g.y * 72.0) + clump * 3.0);
    float f1 = SFADE(0.03), f2 = SFADE(0.009);
    gt = (big - 0.5) * 0.15 + (mid - 0.5) * 0.13 + (clump - 0.5) * 0.15 * f1 + (blade - 0.5) * 0.17 * f2;
    gw = (big - 0.5) * 1.7 + (mid - 0.5) * 0.7;
    gh = (clump - 0.5) * 3.0 * f1 + (blade - 0.5) * 1.5 * f2;
  } else if (gk < 19.0) {
    // dust: wind ripples, and stones lying on it
    float rip = sin((g.x * 0.8 + g.y * 0.6) * 62.0 + sNoise(g * 2.6) * 7.0);
    vec2 c = g / 0.075; vec2 ci = floor(c); float cr = sHash(ci);
    vec2 cf = fract(c) - 0.5 - (vec2(sHash(ci + 7.3), sHash(ci + 3.1)) - 0.5) * 0.5;
    float rr = 0.09 + 0.13 * fract(cr * 7.0);
    float stone = step(0.7, cr) * (1.0 - smoothstep(rr - 0.03, rr + 0.03 + sPx / 0.075, length(cf)));
    float grit = sNoise(g * 120.0);
    float f1 = SFADE(0.05), f2 = SFADE(0.014);
    gt = (big - 0.5) * 0.15 + (mid - 0.5) * 0.09 + rip * 0.05 * f1 - stone * 0.24 * f2 + (grit - 0.5) * 0.1 * SFADE(0.008);
    gw = (big - 0.5) * 1.2;
    gh = rip * 1.5 * f1 + stone * 3.5 * f2 + (grit - 0.5) * SFADE(0.008);
    sRough = 0.08;
  } else if (gk < 21.0) {
    // regolith: fine grit, pocked with small craters
    float grit = sNoise(g * 130.0);
    vec2 c = g / 0.17; vec2 ci = floor(c); float cr = sHash(ci);
    vec2 cf = fract(c) - 0.5 - (vec2(sHash(ci + 7.3), sHash(ci + 3.1)) - 0.5) * 0.4;
    float d = length(cf) / (0.1 + 0.2 * fract(cr * 5.0));
    float has = step(0.5, cr);
    float bowl = has * (1.0 - smoothstep(0.55, 1.0, d));
    float rim = has * (1.0 - smoothstep(0.0, 0.32, abs(d - 1.0)));
    float f1 = SFADE(0.03), f2 = SFADE(0.008);
    gt = (big - 0.5) * 0.13 + (mid - 0.5) * 0.09 + (rim * 0.11 - bowl * 0.15) * f1 + (grit - 0.5) * 0.15 * f2;
    gh = (rim * 2.0 - bowl * 3.0) * f1 + (grit - 0.5) * 1.3 * f2;
    sRough = 0.1;
  } else {
    // moss: rounded cushions
    float cush = smoothstep(0.36, 0.64, sNoise(g * 30.0));
    float fine = sNoise(g * 120.0);
    float f1 = SFADE(0.03);
    gt = (big - 0.5) * 0.15 + (mid - 0.5) * 0.11 + (cush - 0.5) * 0.16 * f1 + (fine - 0.5) * 0.1 * SFADE(0.008);
    gw = (0.5 - big) * 1.5;
    gh = cush * 2.4 * f1 + (fine - 0.5) * SFADE(0.008);
    sRough = -0.2 - cush * 0.1 * f1; // wet, and wetter on the crowns of the cushions
  }
  // the shore and the river bed: rippled sand and grit
  float sr = sin((g.x * 0.5 - g.y * 0.85) * 80.0 + sNoise(g * 3.0) * 6.0);
  float sg = sNoise(g * 125.0);
  float f3 = SFADE(0.04), f4 = SFADE(0.008);
  sTint = mix(sr * 0.045 * f3 + (sg - 0.5) * 0.13 * f4 + (mid - 0.5) * 0.08, gt, open);
  sWarm = gw * open;
  sH = mix(sr * 1.2 * f3 + (sg - 0.5) * 1.1 * f4, gh, open);
  sRough *= open;
} else if (sId < 0.5) {
  // plain clay: a fine grain
  float grain = clayNoise(sP * 34.0) * 0.6 + clayNoise(sP * 90.0) * 0.4;
  float fd = 1.0 - smoothstep(0.2, 0.75, sPx * 48.0);
  sTint = (grain - 0.5) * 0.045 * fd;
  sH = grain * 6.0 * fd;
} else if (sId < 1.5) {
  // coursed stone: every block its own shade, set in darker joints
  vec2 bs = vec2(0.11, 0.055);
  vec2 q = sUV / bs; float row = floor(q.y);
  q.x += 0.5 * mod(row, 2.0) + sHash(vec2(row, 3.7)) * 0.3;
  vec2 id = floor(q), f = fract(q);
  vec2 e = min(f, 1.0 - f) * bs;
  float ed = min(e.x, e.y);
  float joint = 1.0 - smoothstep(0.002, 0.0055 + sPx * 0.8, ed);
  float bevel = 1.0 - smoothstep(0.0, 0.014, ed);
  float r = sHash(id);
  float wear = clayNoise(sP * 48.0);
  float fa = SFADE(0.03), fb = SFADE(0.012);
  sTint = ((r - 0.5) * 0.22 - joint * 0.3) * fa + (wear - 0.5) * 0.11 * fb;
  sWarm = (sHash(id + 17.0) - 0.5) * 1.7 * fa;
  sH = -bevel * 5.0 * fa + (wear - 0.5) * 2.0 * fb;
  sRough = 0.05 + (r - 0.5) * 0.1 * fa;
} else if (sId < 2.5) {
  // timber: boards with the grain running along them
  vec2 w = sFlat < 0.82 ? sUV : sUV.yx;
  float pw = 0.048;
  float pk = w.x / pw, pid = floor(pk), pf = fract(pk);
  float r = sHash(vec2(pid, 1.3));
  float gap = 1.0 - smoothstep(0.0012, 0.004 + sPx * 0.8, min(pf, 1.0 - pf) * pw);
  float grain = sNoise(vec2(w.x * 150.0, w.y * 9.0 + r * 37.0));
  float fig = sNoise(vec2(w.x * 40.0 + r * 9.0, w.y * 2.5));
  float fa = SFADE(0.024), fb = SFADE(0.007);
  sTint = ((r - 0.5) * 0.17 - gap * 0.26 + (fig - 0.5) * 0.13) * fa + (grain - 0.5) * 0.17 * fb;
  sWarm = (r - 0.5) * 1.1 * fa;
  sH = -gap * 4.0 * fa + (grain - 0.5) * 1.3 * fb;
  sRough = -0.03 + (r - 0.5) * 0.08 * fa; // no two boards alike
} else if (sId < 3.5) {
  // roof tiles: rows lapped one over the next, each tile rounded at its lower edge
  vec2 ts = vec2(0.056, 0.06);
  vec2 q = sUV / ts; float row = floor(q.y); q.x += 0.5 * mod(row, 2.0);
  vec2 id = floor(q), f = fract(q);
  float r = sHash(id);
  float low = 1.0 - smoothstep(0.0, 0.45, f.y);
  float side = 1.0 - smoothstep(0.0015, 0.005 + sPx * 0.8 + low * 0.01, min(f.x, 1.0 - f.x) * ts.x);
  float lap = smoothstep(0.58, 1.0, f.y);        // in the shadow of the row above
  float lip = 1.0 - smoothstep(0.0, 0.2, f.y);   // the lower edge catches the light
  float fa = SFADE(0.03);
  sTint = ((r - 0.5) * 0.24 - lap * 0.28 + lip * 0.1 - side * 0.22) * fa;
  sWarm = (sHash(id + 5.0) - 0.5) * 1.5 * fa;
  sH = ((1.0 - f.y) * smoothstep(0.0, 0.1, f.y) * 6.0 - side * 3.0) * fa;
  sRough = -0.16 + (r - 0.5) * 0.14 * fa; // fired and glazed
} else if (sId < 4.5) {
  // plaster: trowelled, a little uneven
  float n1 = clayNoise(sP * 11.0), n2 = clayNoise(sP * 75.0);
  float fb = SFADE(0.012);
  sTint = (n1 - 0.5) * 0.1 + (n2 - 0.5) * 0.09 * fb;
  sH = (n1 - 0.5) * 3.0 * SFADE(0.08) + (n2 - 0.5) * 1.7 * fb;
  sRough = 0.08;
} else if (sId < 5.5) {
  // thatch: straw combed downhill, laid in shaggy courses
  float s1 = sNoise(vec2(sUV.x * 160.0, sUV.y * 8.0)), s2 = sNoise(vec2(sUV.x * 55.0 + 7.0, sUV.y * 3.0));
  float course = fract(sUV.y / 0.085);
  float fa = SFADE(0.04), fb = SFADE(0.006);
  sTint = (s2 - 0.5) * 0.17 * SFADE(0.018) + (s1 - 0.5) * 0.2 * fb - smoothstep(0.6, 1.0, course) * 0.17 * fa;
  sH = (s1 - 0.5) * 1.5 * fb + (1.0 - course) * smoothstep(0.0, 0.12, course) * 4.0 * fa;
  sRough = 0.1;
} else if (sId < 6.5) {
  // foliage: dappled with leaves
  float l1 = clayNoise(sP * 44.0) * 0.7 + clayNoise(sP * 21.0 + 5.0) * 0.3, l2 = clayNoise(sP * 9.0 + 3.0);
  float dap = smoothstep(0.36, 0.64, l1);
  float fa = SFADE(0.018);
  sTint = (dap - 0.5) * 0.14 * fa + (l2 - 0.5) * 0.13;
  sWarm = (l2 - 0.5) * 1.6;
  sH = dap * 2.2 * fa;
  sRough = -0.03;
} else if (sId < 7.5) {
  // bark: ridges and furrows running up the trunk
  float b1 = sNoise(vec2(sUV.x * 75.0, sUV.y * 6.5)), b2 = clayNoise(sP * vec3(22.0, 2.4, 22.0));
  float ridge = abs(b1 - 0.5) * 2.0;
  float fb = SFADE(0.011);
  sTint = (ridge - 0.45) * 0.27 * fb + (b2 - 0.5) * 0.15;
  sH = ridge * 2.4 * fb;
  sRough = 0.08;
} else if (sId < 8.5) {
  // living rock: beds, cracks and grit
  float n = clayNoise(sP * 6.0 + 2.0);
  float strata = sin((sP.y + n * 0.1) * 54.0);
  float crack = 1.0 - smoothstep(0.0, 0.03 + sPx * 9.0, abs(clayNoise(sP * 7.5 + 9.0) - 0.5));
  float speck = clayNoise(sP * 70.0);
  float fa = SFADE(0.05), fb = SFADE(0.012), fc = SFADE(0.01);
  sTint = strata * 0.055 * fa - crack * 0.2 * fb + (speck - 0.5) * 0.11 * fc + (n - 0.5) * 0.1;
  sWarm = (n - 0.5) * 1.3;
  sH = strata * 1.6 * fa - crack * 4.0 * fb + (speck - 0.5) * 1.3 * fc;
  sRough = (n - 0.5) * 0.16;
} else if (sId < 9.5) {
  // plated hull: panels, seams, a rivet in each corner
  vec2 ps = vec2(0.17, 0.115);
  vec2 q = sUV / ps; float row = floor(q.y); q.x += 0.5 * mod(row, 2.0);
  vec2 id = floor(q), f = fract(q);
  vec2 e = min(f, 1.0 - f) * ps;
  float seam = 1.0 - smoothstep(0.001, 0.003 + sPx * 0.8, min(e.x, e.y));
  float rivet = 1.0 - smoothstep(0.003, 0.0045 + sPx * 0.8, length(e - 0.013));
  float streak = sNoise(vec2(sUV.x * 14.0, sUV.y * 190.0));
  float fa = SFADE(0.05), fr = SFADE(0.006);
  sTint = ((sHash(id) - 0.5) * 0.1 - seam * 0.28) * fa + rivet * 0.13 * fr + (streak - 0.5) * 0.07 * SFADE(0.005);
  sH = -seam * 3.5 * fa + rivet * 2.5 * fr;
  sRough = -0.3 + (sHash(id + 3.0) - 0.5) * 0.12 * fa;
  sMetal = 0.35;
} else if (sId < 10.5) {
  // bare metal: brushed, and it shines
  float streak = sNoise(vec2(sUV.x * 12.0, sUV.y * 210.0)), blot = clayNoise(sP * 9.0);
  float fs = SFADE(0.005);
  sTint = (streak - 0.5) * 0.13 * fs + (blot - 0.5) * 0.1;
  sH = (streak - 0.5) * 0.8 * fs;
  sRough = -0.36 + (blot - 0.5) * 0.14;
  sMetal = 0.7;
} else if (sId < 11.5) {
  // cloth: a weave, and soft folds
  float weave = sin(sUV.x * 700.0) * sin(sUV.y * 700.0);
  float fold = clayNoise(sP * vec3(15.0, 5.0, 15.0));
  float fw = SFADE(0.0045);
  sTint = weave * 0.08 * fw + (fold - 0.5) * 0.12;
  sH = weave * 0.6 * fw;
  sRough = 0.1;
} else if (sId < 12.5) {
  // turned earth: crumbs and clods
  float g1 = clayNoise(sP * 85.0), g2 = clayNoise(sP * 16.0);
  float f1 = SFADE(0.01);
  sTint = (g1 - 0.5) * 0.19 * f1 + (g2 - 0.5) * 0.17;
  sH = (g1 - 0.5) * 2.0 * f1 + smoothstep(0.5, 0.75, g2) * 3.0 * SFADE(0.04);
  sRough = 0.1;
} else if (sId < 13.5) {
  // glazed or wet
  sRough = -0.6;
} else if (sId < 14.5) {
  // solar cells: a fine pale grid under glass
  vec2 f = fract(sUV / 0.045);
  vec2 e = min(f, 1.0 - f) * 0.045;
  float line = 1.0 - smoothstep(0.0008, 0.0025 + sPx * 0.8, min(e.x, e.y));
  sTint = line * 0.4 * SFADE(0.02);
  sRough = -0.55;
  sMetal = 0.25;
}
diffuseColor.rgb *= max(0.0, 1.0 + (claySoft - 0.5) * 0.05 + (clayPatch - 0.5) * 0.1 + sTint * uTex);
float sW = clamp(sWarm * uTex, -1.0, 1.0) * 0.045;
diffuseColor.rgb *= vec3(1.0 + sW, 1.0 + sW * 0.2, 1.0 - sW * 1.3);
// whatever stands on the ground shades into it at its foot, and takes a little of its colour
diffuseColor.rgb *= mix(vec3(1.0), uBounce, (1.0 - smoothstep(0.0, 0.3, vLift)) * step(-0.05, vLift) * step(vSurf, 15.5));`,mf=`
roughnessFactor = clamp(roughnessFactor + sRough * uTex, 0.08, 1.0);`,hf=`
{
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
  vec2 dh = vec2(dFdx(sH), dFdy(sH)) * 0.001 * (sId < 0.5 && vSurf < 15.5 ? 1.0 : uTex);
  dh /= max(1.0, length(dh) / (sPx * 1.4)); // never steeper than a chisel cut, so edges do not sparkle
  vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1);
  normal = normalize(abs(det) * normal - sign(det) * (dh.x * r1 + dh.y * r2));
}`,gf=`
totalEmissiveRadiance += vColor.rgb * vGlow * uGlow;
vec3 sV = normalize(vViewPosition);
float sNV = clamp(dot(normal, sV), 0.0, 1.0);
float clayRim = pow(1.0 - sNV, 3.0);
totalEmissiveRadiance += diffuseColor.rgb * clayRim * uRim;
// the sky in what is meant to shine (glass, glaze, metal, wet moss): most at a glancing angle, some face on, more
// in metal (which colours it). Matt things (clay, turf, leaves, stone, timber) show none of it: a veil of pale sky
// over everything lifts the darks and greys the colours, and the picture goes flat.
{
  float gloss = 1.0 - roughnessFactor;
  float shine = gloss * smoothstep(0.24, 0.55, gloss);
  vec3 sR = inverseTransformDirection(reflect(-sV, normal), viewMatrix);
  vec3 skyC = sR.y > 0.0 ? mix(uSkyHor, uSkyTop, pow(sR.y, 0.55)) : mix(uSkyHor, uSkyBot, pow(-sR.y, 0.45));
  float f0 = 0.1 + sMetal * 0.36 * uTex;
  float fres = f0 + (1.0 - f0) * pow(1.0 - sNV, 3.0);
  totalEmissiveRadiance += skyC * mix(vec3(1.0), diffuseColor.rgb * 1.6, sMetal * uTex) * fres * shine * uSheen;
}
#if NUM_DIR_LIGHTS > 0
// leaves let the sun through: a crown glows at its edge when the camera looks toward the sun (and only then:
// lit from behind at every angle, the shaded side of a crown fills in and its facets are lost)
if (sId > 5.5 && sId < 6.5 && vSurf < 15.5) {
  vec3 sL = directionalLights[0].direction;
  float thru = pow(clamp(dot(sV, -sL), 0.0, 1.0), 4.0), back = clamp(-dot(normal, sL), 0.0, 1.0);
  totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.95, 0.5) * directionalLights[0].color * 0.09 * thru * back * uLeaf;
}
#endif`;function _f(e){let t=new js({vertexColors:!0,roughness:.86,metalness:0}),n=e.look??lf();t.onBeforeCompile=t=>{Object.assign(t.uniforms,n),t.uniforms.uTime=e.uTime,t.uniforms.uGlow=e.uGlow,t.uniforms.uRim=e.uRim,t.uniforms.uTex=af,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>`+uf).replace(`#include <begin_vertex>`,`#include <begin_vertex>`+df),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>`+ff).replace(`#include <color_fragment>`,`#include <color_fragment>`+pf).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>`+mf).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>`+hf).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>`+gf)};let r=new Ps({depthPacking:gt});return r.onBeforeCompile=t=>{t.uniforms.uTime=e.uTime,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>`+uf).replace(`#include <begin_vertex>`,`#include <begin_vertex>`+df)},{mat:t,depthMat:r}}function vf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new fi;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=yf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=yf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function yf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Zr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function bf(e,t=Math.PI/3){let n=e.index?e.toNonIndexed():e,r=n.attributes.position,i=r.count,a;if(r.isBufferAttribute===!0&&r.itemSize===3&&r.normalized===!1)a=r.array;else{a=new Float64Array(i*3);for(let e=0;e<i;e++)a[3*e+0]=r.getX(e),a[3*e+1]=r.getY(e),a[3*e+2]=r.getZ(e)}let o=Math.cos(t),s=(1+1e-10)*100,c=i/3,l=new Float64Array(c*3);for(let e=0;e<c;e++){let t=9*e,n=a[t+0],r=a[t+1],i=a[t+2],o=a[t+3],s=a[t+4],c=a[t+5],u=a[t+6],d=a[t+7],f=a[t+8],p=u-o,m=d-s,h=f-c,g=n-o,_=r-s,v=i-c,y=m*v-h*_,b=h*g-p*v,x=p*_-m*g,S=1/(Math.sqrt(y*y+b*b+x*x)||1);l[3*e+0]=y*S,l[3*e+1]=b*S,l[3*e+2]=x*S}let u=new Int32Array(i),d=new Float64Array(i*3),f=1;for(;f<i*2;)f<<=1;let p=f-1,m=new Int32Array(f),h=0;for(let e=0;e<i;e++){let t=3*e,n=Math.trunc(a[t+0]*s),r=Math.trunc(a[t+1]*s),i=Math.trunc(a[t+2]*s),o=(Math.imul(n,73856093)^Math.imul(r,19349663)^Math.imul(i,83492791))&p;for(;;){let t=m[o];if(t===0){let t=3*h;d[t+0]=n,d[t+1]=r,d[t+2]=i,m[o]=h+1,u[e]=h++;break}let a=3*(t-1);if(d[a+0]===n&&d[a+1]===r&&d[a+2]===i){u[e]=t-1;break}o=o+1&p}}let g=new Int32Array(h+1);for(let e=0;e<i;e++)g[u[e]+1]++;for(let e=0;e<h;e++)g[e+1]+=g[e];let _=new Int32Array(i),v=g.slice(0,h);for(let e=0;e<c;e++){let t=3*e;_[v[u[t+0]]++]=e,_[v[u[t+1]]++]=e,_[v[u[t+2]]++]=e}let y=new Float32Array(i*3);for(let e=0;e<c;e++){let t=3*e,n=l[t+0],r=l[t+1],i=l[t+2];for(let e=0;e<3;e++){let a=t+e,s=u[a],c=0,d=0,f=0;for(let e=g[s],t=g[s+1];e<t;e++){let t=3*_[e],a=l[t+0],s=l[t+1],u=l[t+2];n*a+r*s+i*u>o&&(c+=a,d+=s,f+=u)}let p=1/(Math.sqrt(c*c+d*d+f*f)||1);y[3*a+0]=c*p,y[3*a+1]=d*p,y[3*a+2]=f*p}}return n.setAttribute(`normal`,new Zr(y,3,!1)),n}var U={none:0,stone:1,wood:2,shingle:3,plaster:4,thatch:5,leaf:6,bark:7,rock:8,plate:9,metal:10,cloth:11,soil:12,glass:13,cells:14,turf:16,dust:18,regolith:20,moss:22},xf=(e,t)=>e+Math.min(1,Math.max(0,t))*.98,Sf=new Map;function Cf(e,...t){for(let n of t)Sf.set(n.toLowerCase(),e)}var wf=e=>typeof e==`string`?Sf.get(e.toLowerCase())??U.none:U.none,W=Math.PI*2,Tf=new B,Ef=new B,Df=new B,Of=.95;function kf(e,t,n,r,i=.06,a,o,s=wf(t)){let c=e.index?e.toNonIndexed():e;c!==e&&e.dispose(),c.getAttribute(`uv`)&&c.deleteAttribute(`uv`),bf(c,Of);let l=c.getAttribute(`position`),u=l.count,d=new Float32Array(u*3),f=new Float32Array(u).fill(n);Tf.set(t),Ef.set(a??t);let p=1/0,m=-1/0;if(o)[p,m]=o;else if(a!==void 0)for(let e=0;e<u;e++){let t=l.getY(e);t<p&&(p=t),t>m&&(m=t)}let h=m-p||1;for(let e=0;e<u;e+=3){let t=1+(r()-.5)*2*i;for(let n=0;n<3;n++)a===void 0?Df.copy(Tf):Df.copy(Tf).lerp(Ef,Math.min(1,Math.max(0,(l.getY(e+n)-p)/h))),d[(e+n)*3]=Df.r*t,d[(e+n)*3+1]=Df.g*t,d[(e+n)*3+2]=Df.b*t}return c.setAttribute(`color`,new Zr(d,3)),c.setAttribute(`sway`,new Zr(f,1)),c.setAttribute(`grow`,new Zr(jf(u),4)),c.setAttribute(`glow`,new Zr(new Float32Array(u),1)),c.setAttribute(`surf`,new Zr(new Float32Array(u).fill(s),1)),c}var Af=-1e3;function jf(e){let t=new Float32Array(e*4);for(let n=0;n<e;n++)t[n*4+2]=-1,t[n*4+3]=Af;return t}function Mf(e,t=0){for(let n of Array.isArray(e)?e:[e]){let e=n.getAttribute(`grow`);for(let n=0;n<e.count;n++)e.setW(n,t)}return e}function G(e,t,n,r,i=.05,a,o,s=wf(t)){let c=e.index?e.toNonIndexed():e;c!==e&&e.dispose(),c.getAttribute(`uv`)&&c.deleteAttribute(`uv`),c.computeVertexNormals();let l=c.getAttribute(`position`),u=c.getAttribute(`normal`),d=l.count,f=new Float32Array(d*3);Tf.set(t),Ef.set(a??t);let p=1/0,m=-1/0;if(o)[p,m]=o;else if(a!==void 0)for(let e=0;e<d;e++){let t=l.getY(e);t<p&&(p=t),t>m&&(m=t)}let h=m-p||1;for(let e=0;e<d;e+=3){let t=1+(r()-.5)*2*i;if(a!==void 0){let t=(l.getY(e)+l.getY(e+1)+l.getY(e+2))/3;Df.copy(Tf).lerp(Ef,Math.min(1,Math.max(0,(t-p)/h+u.getY(e)*.2)))}else Df.copy(Tf);for(let n=0;n<3;n++)f[(e+n)*3]=Df.r*t,f[(e+n)*3+1]=Df.g*t,f[(e+n)*3+2]=Df.b*t}return c.setAttribute(`color`,new Zr(f,3)),c.setAttribute(`sway`,new Zr(new Float32Array(d).fill(n),1)),c.setAttribute(`grow`,new Zr(jf(d),4)),c.setAttribute(`glow`,new Zr(new Float32Array(d),1)),c.setAttribute(`surf`,new Zr(new Float32Array(d).fill(s),1)),c}function Nf(e,t,n,r,i){for(let a=t;a<e.length;a++){let t=e[a].getAttribute(`grow`);for(let e=0;e<t.count;e++)t.setXYZ(e,n,r,i)}}function K(e,t){return e.getAttribute(`glow`).array.fill(t),e}var Pf=new Fn,Ff=new dn,If=new Gn,Lf=new z,Rf=new z;function q(e,t,n,r,i=1,a=i,o=i,s=0,c=0,l=0){return Pf.compose(Lf.set(t,n,r),Ff.setFromEuler(If.set(c,s,l)),Rf.set(i,a,o)),e.applyMatrix4(Pf)}function zf(e){let t=vf(e,!1);return e.forEach(e=>e.dispose()),t.computeBoundingSphere(),t}var Bf=(e,t,n,r)=>{let i=Math.sin(e*127.1+t*311.7+n*74.7+r*19.19)*43758.5453;return i-Math.floor(i)};function Vf(e,t,n=1,r=.17,i=.5){let a=new ms(e,n),o=a.getAttribute(`position`),s=Array.from({length:3},()=>{let n=t()*W,r=(t()-.5)*2;return{x:Math.cos(n)*Math.cos(r),y:Math.sin(r),z:Math.sin(n)*Math.cos(r),f:(1.6+t()*2.2)/e,ph:t()*W}});for(let t=0;t<o.count;t++){let n=o.getX(t),a=o.getY(t),c=o.getZ(t),l=0;for(let e of s)l+=Math.sin((n*e.x+a*e.y+c*e.z)*e.f+e.ph);let u=1+l/3*r*1.6;n*=u,a*=u,c*=u,a<-e*i&&(a=-e*i+(a+e*i)*.3),o.setXYZ(t,n,a,c)}return a}function Hf(e,t,n=1,r=.14,i=.6){let a=new ms(e,n),o=a.getAttribute(`position`),s=t()*100;for(let t=0;t<o.count;t++){let n=o.getX(t),a=o.getY(t),c=o.getZ(t),l=1+(Bf(Math.round(n/e*500),Math.round(a/e*500),Math.round(c/e*500),s)-.5)*2*r;n*=l,a*=l,c*=l,a<-e*i&&(a=-e*i+(a+e*i)*.25),o.setXYZ(t,n,a,c)}return a}function Uf(e,t,n,r=0){let i=e.map(([e,i],a)=>Array.from({length:t},(o,s)=>{let c=(s+a%2*.5)/t*W,l=e*(1+(n?(n()-.5)*2*r:0));return[Math.cos(c)*l,i+(n&&e>0?(n()-.5)*r*e*.5:0),Math.sin(c)*l]})),a=[],o=(e,t,n)=>a.push(...t,...e,...n);for(let n=0;n<e.length-1;n++){let r=i[n],a=i[n+1],s=e[n][0]>0,c=e[n+1][0]>0;for(let i=0;i<t;i++){let l=(i+1)%t;s&&c?n%2==0?(o(r[i],r[l],a[i]),o(r[l],a[l],a[i])):(o(r[i],r[l],a[l]),o(r[i],a[l],a[i])):s?o(r[i],r[l],[0,e[n+1][1],0]):c&&o([0,e[n][1],0],a[l],a[i])}}let s=new fi;return s.setAttribute(`position`,new ei(a,3)),s}function Wf(e,t,n,r=1/0){let i=e.getAttribute(`position`),a=n()*100;for(let e=0;e<i.count;e++){let n=i.getX(e),o=i.getY(e),s=i.getZ(e);if(o>r)continue;let c=Bf(Math.round(n*1e4),Math.round(o*1e4),Math.round(s*1e4),a)-.5;i.setXYZ(e,n*(1+c*t),o+c*t*.25,s*(1+c*t))}return e}var Gf=new z(0,1,0),Kf=new z;function qf(e,t,n,r,i=5){Kf.subVectors(t,e);let a=Kf.length(),o=new V(r,n,a,i,1);return o.translate(0,a/2,0),o.applyQuaternion(Ff.setFromUnitVectors(Gf,Kf.normalize())),o.translate(e.x,e.y,e.z),o}var Jf=[[[`#263236`,`#000000`],[`#fdfdfd`,`#adbac0`],[`#aab8be`,`#596064`],[`#596064`,`#3c4246`],[`#4d4d4d`,`#1a1a1a`],[`#c8855f`,`#9b5a45`],[`#b27052`,`#7d3d2c`],[`#f17c36`,`#803123`],[`#88d2ea`,`#3d6eb6`],[`#29abe2`,`#1c1c6b`],[`#b27052`,`#7d3d2c`],[`#fcd465`,`#a65c26`],[`#aacd62`,`#4e8930`],[`#e9c89b`,`#cb945f`],[`#a8a29d`,`#6d605c`],[`#837265`,`#534741`],[`#dde34d`,`#787c02`],[`#00ad5d`,`#005c4b`],[`#aab8be`,`#596064`],[`#e9c89b`,`#cb945f`],[`#e9c89b`,`#cb945f`],[`#fefcfb`,`#d19f6e`],[`#f15a24`,`#a3055a`],[`#f17866`,`#c84649`],[`#29abe2`,`#1c1c6b`],[`#f06769`,`#a61c36`],[`#fed566`,`#f48038`],[`#00ad5d`,`#005c4b`],[`#fed465`,`#f15e26`],[`#e2d3c0`,`#a88e6e`],[`#c0b09f`,`#6e5c4b`],[`#9e8c7e`,`#493c33`]],[[`#263236`,`#000000`],[`#fdfdfd`,`#adbac0`],[`#aab8be`,`#596064`],[`#596064`,`#3c4246`],[`#4d4d4d`,`#1a1a1a`],[`#c8855f`,`#9b5a45`],[`#b27052`,`#7d3d2c`],[`#f17c36`,`#803123`],[`#88d2ea`,`#3d6eb6`],[`#29abe2`,`#1c1c6b`],[`#6488a9`,`#37505d`],[`#fcd465`,`#a65c26`],[`#f06769`,`#a61c36`],[`#e9c89b`,`#cb945f`],[`#a8a29d`,`#6d605c`],[`#837265`,`#534741`],[`#e0e64f`,`#757a00`],[`#009582`,`#004f6c`],[`#00b05e`,`#005c4b`],[`#068d6c`,`#0b383c`],[`#f9f9f9`,`#242422`],[`#fefcfb`,`#d19f6e`],[`#f15a24`,`#a3055a`],[`#f17866`,`#c84649`],[`#908a79`,`#514d45`],[`#908a79`,`#45433c`],[`#fed566`,`#f48038`],[`#f9f9f9`,`#242422`],[`#1c5893`,`#16326e`],[`#1c5893`,`#16326e`],[`#279fd7`,`#1d5e99`],[`#279fd7`,`#1d5e99`]]],Yf={home_a:{o:0,v:1540,i:3033,min:[-.396,0,-.4687],size:[.792,.93,.8537]},home_b:{o:24546,v:2305,i:4179,min:[-.4388,0,-.5387],size:[.8749,1.28,1.0987]},well:{o:60564,v:1187,i:2178,min:[-.315,0,-.3754],size:[.6518,.826,.7507]},windmill:{o:79164,v:3235,i:6879,min:[-.5579,0,-.3789],size:[1.1258,1.3792,.7939]},windmill_fan:{o:131742,v:695,i:1080,min:[-.5008,-.5008,0],size:[1.0017,1.0017,.1054],hub:[0,.957,.3321]},tower_a:{o:142242,v:3126,i:6414,min:[-.4966,0,-.5735],size:[.9933,2.1917,1.1535]},tower_b:{o:192582,v:3639,i:7254,min:[-.5987,0,-.6913],size:[1.1974,2.4854,1.3826]},castle:{o:250758,v:8868,i:16977,min:[-.9877,0,-1.1281],size:[1.9754,3.9792,2.2563]},barracks:{o:391128,v:6426,i:12021,min:[-.72,0,-.72],size:[1.44,1.6401,1.5661]},tavern:{o:492282,v:4778,i:8976,min:[-.595,0,-.7023],size:[1.1717,1.3967,1.3323]},market:{o:567570,v:4169,i:9375,min:[-.9014,-.0056,-.715],size:[1.7994,.9816,1.3156]},blacksmith:{o:636348,v:3393,i:7230,min:[-.63,-.0051,-.56],size:[1.2876,.9851,1.2452]},lumbermill:{o:691524,v:4602,i:9510,min:[-.6861,-.0035,-.4593],size:[1.367,1.7078,1.1892]},watermill:{o:765768,v:3119,i:5763,min:[-.525,-.35,-.37],size:[1.05,1.568,1.236]},archery:{o:814722,v:5608,i:11457,min:[-.8,0,-.8735],size:[1.6706,1.7917,1.5508]},scaffolding:{o:904932,v:4672,i:8016,min:[-.9285,-.0026,-1.0869],size:[1.9005,1.2986,2.1093]},fence:{o:977028,v:430,i:636,min:[-1.05,-.05,-.5774],size:[.1,.55,1.1547]},fence_gate:{o:983460,v:548,i:924,min:[-1.07,-.05,-.5774],size:[.14,.65,1.1547]},fence_stone:{o:991884,v:378,i:852,min:[-1.1,-.05,-.5774],size:[.2,.269,1.1547]},stage:{o:998124,v:1159,i:2352,min:[-.4806,-.0059,-.3423],size:[1.0467,.2859,.875]},awning:{o:1016736,v:176,i:258,min:[-.258,0,-.258],size:[.516,.516,.516]},barrel:{o:1019364,v:441,i:720,min:[-.1007,0,-.1007],size:[.2015,.2117,.2015]},crate:{o:1026096,v:194,i:396,min:[-.105,0,-.105],size:[.21,.21,.21]},crate_small:{o:1029216,v:194,i:396,min:[-.07,0,-.07],size:[.14,.14,.14]},crate_b:{o:1032336,v:194,i:396,min:[-.07,0,-.07],size:[.14,.14,.14]},crate_open:{o:1035456,v:328,i:780,min:[-.1,-.0056,-.1],size:[.3316,.2056,.2]},sack:{o:1040952,v:84,i:276,min:[-.0533,-.0025,-.0857],size:[.1065,.0647,.1595]},wheelbarrow:{o:1042512,v:520,i:1188,min:[-.119,0,-.2128],size:[.238,.1884,.5057]},lumber:{o:1051128,v:330,i:660,min:[-.3445,0,-.1636],size:[.6859,.21,.3305]},stone:{o:1056408,v:320,i:660,min:[-.2106,0,-.1771],size:[.4211,.28,.3579]},bucket_water:{o:1061568,v:194,i:384,min:[-.07,0,-.07],size:[.14,.105,.14]},bucket:{o:1064664,v:194,i:384,min:[-.07,0,-.07],size:[.14,.125,.14]},ladder:{o:1067760,v:168,i:252,min:[-.1266,0,-.0175],size:[.2532,.77,.0507]},pallet:{o:1070280,v:144,i:216,min:[-.15,0,-.15],size:[.3,.08,.3]},flag:{o:1072440,v:68,i:144,min:[-.0271,0,-.2421],size:[.055,.2775,.264]},target:{o:1073544,v:193,i:468,min:[-.1196,0,-.1],size:[.2393,.3018,.1421]},church:{o:1076796,v:2504,i:4803,min:[-.5145,0,-.56],size:[1.029,1.645,1.155]},mine:{o:1116450,v:1852,i:3378,min:[-.8167,-1e-4,-1.0197],size:[1.6056,1.1366,1.92]},tower_catapult:{o:1145430,v:4e3,i:8592,min:[-.4649,0,-.7233],size:[.9298,1.9641,1.3033]},tower_base:{o:1210614,v:2265,i:4614,min:[-.4649,0,-.5311],size:[.9298,1.5,1.1111]},wall:{o:1247022,v:877,i:1512,min:[-1,0,-.4],size:[2,1.1,.8]},wall_gate:{o:1260570,v:1324,i:2460,min:[-1,-.05,-.4],size:[2,1.414,.8956]},wall_corner:{o:1281378,v:697,i:1242,min:[-1,0,-1.066],size:[1.7598,1.1,1.4317]},grain:{o:1292226,v:383,i:690,min:[-.937,0,-1.0468],size:[1.8737,.3938,2.0936]},dirt:{o:1298202,v:200,i:480,min:[-.8974,-.02,-1.0034],size:[1.7948,.0866,2.0068]},stage_b:{o:1301562,v:1372,i:2706,min:[-.4963,-.0059,-.5751],size:[1.0205,.6359,1.1306]},stage_c:{o:1323438,v:1925,i:3654,min:[-.5,-.0059,-.5736],size:[1.16,.9859,1.1271]},bridge:{o:1353846,v:686,i:1812,min:[-.6667,-1,-.9623],size:[1.3333,1.25,1.9245]},ruin:{o:1365702,v:1606,i:2646,min:[-.7189,-.0139,-.7134],size:[1.5393,.9939,1.3059]},weaponrack:{o:1390266,v:84,i:126,min:[-.1,0,-.07],size:[.2,.24,.13]},bucket_arrows:{o:1391526,v:458,i:780,min:[-.07,0,-.07],size:[.14,.2313,.1423]},crate_long:{o:1398582,v:346,i:1566,min:[-.2,0,-.1],size:[.4,.15,.2]},rock_a:{o:1405866,v:35,i:54,min:[-.1491,0,-.1568],size:[.2982,.0693,.2836]},rock_b:{o:1406394,v:46,i:78,min:[-.142,0,-.128],size:[.2866,.1346,.2497]},rock_c:{o:1407102,v:61,i:120,min:[-.1853,-1e-4,-.182],size:[.3439,.1948,.3442]},waterplant:{o:1408074,v:81,i:198,min:[-.122,-.0196,-.123],size:[.1983,.1323,.2157]},waterlily:{o:1409442,v:69,i:204,min:[-.0726,0,-.0726],size:[.1451,.0171,.1446]},mod_a:{o:1410678,v:1048,i:1758,min:[-1.176,0,-1],size:[2.2482,1,2.176],p:1},mod_b:{o:1426770,v:1126,i:1860,min:[-1.0397,0,-1.1111],size:[2.0794,1,2.3167],p:1},mod_c:{o:1444002,v:1170,i:1932,min:[-1,0,-1],size:[2,1,2.2056],p:1},mod_d:{o:1461906,v:1436,i:2340,min:[-1.2222,0,-1.0722],size:[2.4444,1,2.1444],p:1},mod_e:{o:1483818,v:1346,i:2196,min:[-1.1111,0,-1.0722],size:[2.2222,1.65,2.2778],p:1},garage:{o:1504362,v:1401,i:2310,min:[-1,0,-1.0962],size:[2,1,2.374],p:1},depot_a:{o:1525794,v:1521,i:2772,min:[-1.0722,0,-1.0722],size:[2.0722,1.12,2.0825],p:1},depot_b:{o:1549590,v:1602,i:2898,min:[-1.0723,0,-1.1057],size:[2.0826,1.02,2.1779],p:1},depot_c:{o:1574610,v:2035,i:3930,min:[-1.0634,0,-1],size:[2.0737,1.0209,2.0951],p:1},cont_a:{o:1606890,v:396,i:840,min:[-.25,-.002,-.25],size:[.5,.2,.5],p:1},cont_b:{o:1613322,v:396,i:840,min:[-.25,-.002,-.25],size:[.5,.2,.5],p:1},cont_c:{o:1619754,v:396,i:840,min:[-.25,-.002,-.25],size:[.5,.2,.5],p:1},cont_d:{o:1626186,v:396,i:840,min:[-.25,-.002,-.25],size:[.5,.2,.5],p:1},cargo_a:{o:1632618,v:192,i:384,min:[-.25,0,-.2603],size:[.5,.52,.5205],p:1},cargo_a_packed:{o:1635690,v:256,i:528,min:[-.2603,-.0103,-.2602],size:[.5205,.5303,.5205],p:1},cargo_a_stacked:{o:1639818,v:800,i:1464,min:[-.5102,-.0103,-.5102],size:[1.0205,1.0205,1.0205],p:1},cargo_b:{o:1652346,v:192,i:384,min:[-.25,0,-.2603],size:[.5,.52,.5205],p:1},cargo_b_packed:{o:1655418,v:256,i:528,min:[-.2603,-.0103,-.2602],size:[.5205,.5303,.5205],p:1},cargo_b_stacked:{o:1659546,v:800,i:1464,min:[-.5102,-.0103,-.5102],size:[1.0205,1.0205,1.0205],p:1},drill:{o:1672074,v:1907,i:3594,min:[-.8751,0,-.8751],size:[1.7501,2,1.7501],p:1},lander_a:{o:1702146,v:2265,i:4392,min:[-.6718,0,-.6718],size:[1.3718,1.1921,1.4218],p:1},lander_b:{o:1738110,v:2006,i:3624,min:[-.6718,0,-.6718],size:[1.3718,1.0951,1.4218],p:1},lander_base:{o:1769430,v:1027,i:1914,min:[-.6718,0,-.6718],size:[1.3435,.5,1.3435],p:1},pad_l:{o:1785582,v:769,i:1434,min:[-1.25,0,-1.25],size:[2.5,.5,2.5],p:1},pad_s:{o:1797678,v:742,i:1362,min:[-.95,0,-.95],size:[1.9,.5,1.9],p:1},lights:{o:1809306,v:504,i:1068,min:[-.34,0,-.34],size:[.68,.9984,.68],p:1},srock_a:{o:1817490,v:48,i:90,min:[-.2165,0,-.25],size:[.533,.25,.5],p:1},srock_b:{o:1818246,v:52,i:108,min:[-.3476,0,-.4014],size:[.6952,.4014,.8028],p:1},srocks_a:{o:1819086,v:146,i:264,min:[-.7902,0,-.8217],size:[1.3141,.354,1.6428],p:1},srocks_b:{o:1821366,v:243,i:480,min:[-.9496,0,-.8759],size:[1.881,1.067,1.7385],p:1},roof_base:{o:1825242,v:89,i:144,min:[-.6976,-.1,-.6976],size:[1.3952,.2,1.3952],p:1},roof_cargo_a:{o:1826598,v:1137,i:2352,min:[-.6976,-.1,-.6976],size:[1.3952,.72,1.3952],p:1},roof_cargo_b:{o:1844946,v:1125,i:2280,min:[-.6976,-.1,-.6976],size:[1.3952,1.22,1.3952],p:1},roof_cargo_c:{o:1863006,v:1707,i:3474,min:[-.6976,-.1,-.6976],size:[1.3952,1.22,1.3952],p:1},roof_solar:{o:1890438,v:461,i:852,min:[-.6976,-.1,-.6976],size:[1.3952,.5709,1.3952],p:1},solarpanel:{o:1897674,v:186,i:354,min:[-.45,0,-.225],size:[.9,.3709,.45],p:1},truck:{o:1900614,v:1392,i:3354,min:[-.2447,-.0779,-.4455],size:[.4895,.5662,.8933],p:1},truck_l:{o:1924026,v:1901,i:4302,min:[-.2523,-.1335,-.5718],size:[.5046,.6855,1.0277],p:1},trailer:{o:1955442,v:920,i:2472,min:[-.24,-.1431,-.5],size:[.48,.3382,1],p:1},frame_low:{o:1971426,v:736,i:1266,min:[-.8751,0,-.8751],size:[1.7501,1,1.7501],p:1},frame_tall:{o:1982790,v:1172,i:2010,min:[-.8751,0,-.8751],size:[1.7501,2,1.7501],p:1},crater:{o:2000874,v:124,i:228,min:[-1,-1,-1],size:[2,2.0725,2],p:1},tunnel_a:{o:2002818,v:1104,i:1824,min:[-1,.2,-.465],size:[2,.6,.93],p:1},tunnel_b:{o:2019714,v:512,i:852,min:[-1,.2,-.4],size:[2,.6,.8],p:1},turbine_low:{o:2027562,v:478,i:762,min:[-.5718,0,-.5718],size:[1.1435,.5,1.1435],p:1},turbine_low_fan:{o:2034822,v:746,i:1716,min:[-.498,-.575,-.6452],size:[.9961,1.15,1.2904],p:1,hub:[0,.89,0]},turbine_tall:{o:2047206,v:258,i:564,min:[-.34,0,-.34],size:[.68,1.7227,.68],p:1},turbine_tall_fan:{o:2051430,v:558,i:1332,min:[-.8326,-.4922,-.5546],size:[1.6652,1.4421,.9998],p:1,hub:[0,2.05,0]}},Xf=new URL(`kit-Dc32ikLQ.bin`,import.meta.url).href,Zf={cairn:{name:`Stone cairn`,a:`a stone cairn`},lamp:{name:`Lamp post`,a:`a lamp post`},bench:{name:`Bench`,a:`a bench`},hive:{name:`Beehive`,a:`a beehive`},birdhouse:{name:`Birdhouse`,a:`a birdhouse`},flowerbed:{name:`Flower bed`,a:`a flower bed`},signpost:{name:`Signpost`,a:`a signpost`},barrels:{name:`Barrels`,a:`a stack of barrels`}},Qf=new Map,$f=null;function ep(e){Qf.set(e.id,e),$f||sp(e.id)}var tp=()=>[...Qf.values()],np=e=>typeof e==`string`&&Qf.has(e);function rp(){if(!$f)throw Error(`no theme registered: import ./world/themes first`);return $f}var ip=new Map(t.map(e=>[e.id,{name:e.name,a:e.a,blurb:e.blurb}])),ap=new Map(Object.keys(Zf).map(e=>[e,{...Zf[e]}])),op=_.map(e=>e.unlock);function sp(e){let n=Qf.get(e);if(n){$f=n;for(let e of t)Object.assign(e,ip.get(e.id),n.items[e.id]);for(let e of Object.keys(Zf))Object.assign(Zf[e],ap.get(e),n.decor[e]);_.forEach((e,t)=>e.unlock=n.unlocks[e.level]??op[t])}}var J={black:0,plaster:1,stone:2,stoneDark:3,soot:4,woodPale:5,wood:6,copper:7,water:8,hay:11,leaf:12,cloth:13,pane:14,reed:17,rock:18,red:22,roof:24,ember:28,crate:29},cp={black:0,hull:1,metal:2,dark:3,darker:4,rock:7,light:8,blue:9,trim:11,red:12,strap:13,tyre:14,green:18,glass:24,lamp:25,panel:28,panel2:29},lp={[J.black]:[`#4a4038`,`#2a2420`],[J.plaster]:[`#fff8e8`,`#dccdae`],[J.stone]:[`#ebe5d8`,`#8f887b`],[J.stoneDark]:[`#a39c8f`,`#5f584f`],[J.soot]:[`#5a5048`,`#2e2823`],[J.woodPale]:[`#e2b47a`,`#a8733f`],[J.wood]:[`#bd8048`,`#6b4026`],[J.copper]:[`#f0a04a`,`#a85a28`],[J.water]:[`#8ee6e2`,`#3fb0c0`],[J.hay]:[`#f6d878`,`#c2913a`],[J.leaf]:[`#a9d86c`,`#4c9148`],[J.cloth]:[`#fbf3dc`,`#d2c09a`],[J.pane]:[`#ffe9b0`,`#f0b860`],[J.red]:[`#f0705a`,`#b83a3a`],[J.roof]:[`#e8744c`,`#a8402b`],[J.ember]:[`#ffe07a`,`#ff8a30`],[J.crate]:[`#e8d4b0`,`#b08e60`]},up={[J.stone]:[`#9aa0a8`,`#4c5058`]},dp={barrel:up,bucket:up,bucket_water:up,wheelbarrow:{...up,[J.stoneDark]:[`#5a5f66`,`#33363c`]},sack:{[J.cloth]:[`#ecdab2`,`#b89a68`]}},fp={[J.pane]:1.5,[J.ember]:2},pp=[{[J.plaster]:U.plaster,[J.stone]:U.stone,[J.stoneDark]:U.stone,[J.woodPale]:U.wood,[J.wood]:U.wood,[J.copper]:U.metal,[J.water]:U.glass,[J.hay]:U.thatch,[J.leaf]:U.leaf,[J.cloth]:U.cloth,[J.pane]:U.glass,[J.reed]:U.leaf,[J.rock]:U.rock,[J.roof]:U.shingle,[J.crate]:U.wood},{[cp.hull]:U.plate,[cp.metal]:U.metal,[cp.dark]:U.metal,[cp.blue]:U.plate,[cp.red]:U.plate,[cp.green]:U.plate,[cp.strap]:U.cloth,[cp.glass]:U.glass,[cp.panel]:U.cells,[cp.panel2]:U.cells}],mp={[J.stone]:U.metal,[J.stoneDark]:U.metal},hp={[cp.rock]:U.rock},gp={barrel:mp,bucket:mp,bucket_water:mp,wheelbarrow:mp,flag:{[J.roof]:U.cloth},bucket_arrows:{[J.roof]:U.none,...mp},stone:{[J.stone]:U.rock},srock_a:hp,srock_b:hp,srocks_a:hp,srocks_b:hp,crater:hp,tunnel_b:hp},_p=null;async function vp(){_p||=await(await fetch(Xf)).arrayBuffer()}var yp=new Map;function bp(e,t){let n=e+t,r=yp.get(n);if(r)return r;if(!_p)throw Error(`kit not loaded`);let i=Yf[e],a=new Uint16Array(_p,i.o,i.v*3),o=new Uint8Array(_p,i.o+i.v*6+i.i*2+i.v*3,i.v),s=(e,t)=>i.min[t]+a[e*3+t]/65535*i.size[t],c=-1/0;for(let e=0;e<i.v;e++)o[e]===t&&(c=Math.max(c,s(e,1)));let l=0,u=0,d=0;for(let e=0;e<i.v;e++)o[e]!==t||s(e,1)<c-.03||(l+=s(e,0),u+=s(e,2),d++);return yp.set(n,r=d?[l/d,c,u/d]:[0,i.min[1]+i.size[1],0]),r}var xp=new B,Sp=new B,Cp=new B,wp=new B,Tp=.42,Ep=new Map;function Dp(e){let t=typeof e==`string`?e:e[0]+e[1],n=Ep.get(t);return n||Ep.set(t,n=typeof e==`string`?[new B(e),new B(e)]:[new B(e[0]),new B(e[1])]),n}function Op(e,t={}){if(!_p)throw Error(`kit not loaded`);let n=Yf[e],r=new Uint16Array(_p,n.o,n.v*3),i=new Uint16Array(_p,n.o+n.v*6,n.i),a=n.o+n.v*6+n.i*2,o=new Int8Array(_p,a,n.v*3),s=new Uint8Array(_p,a+n.v*3,n.v),c=new Uint8Array(_p,a+n.v*4,n.v),l=new Uint8Array(_p,a+n.v*5,n.v),u=n.i,d=new Float32Array(u*3),f=new Float32Array(u*3),p=new Float32Array(u*3),m=new Float32Array(u),h=new Float32Array(u),g=n.p??0,_=rp(),v=t.style,y=dp[e],b=t.glow,x=_.kit[g],S=g?null:lp,C=_.kitGlow[g],w=t.surf,T=gp[e],E=_.kitSurf?.[g],D=pp[g];wp.set(_.look.shade);let O=Math.max(wp.r,wp.g,wp.b,1e-4),k=Tp*of.value,A=k*(1-.4*(wp.r/O)),j=k*(1-.4*(wp.g/O)),ee=k*(1-.4*(wp.b/O));for(let e=0;e<u;e++){let t=i[e],a=s[t];for(let i=0;i<3;i++)d[e*3+i]=n.min[i]+r[t*3+i]/65535*n.size[i],f[e*3+i]=o[t*3+i]/127;let[u,_]=Dp(v?.[a]??y?.[a]??x[a]??S?.[a]??Jf[g][a]);Cp.copy(xp.copy(u)).lerp(Sp.copy(_),c[t]/255),m[e]=b?.[a]??C[a]??0;let O=m[e]?0:Math.min(1,Math.max(0,(1-l[t]/255-.56)/.44)),k=O*O*(3-2*O);p[e*3]=Cp.r*(1-k*A),p[e*3+1]=Cp.g*(1-k*j),p[e*3+2]=Cp.b*(1-k*ee),h[e]=w?.[a]??T?.[a]??E?.[a]??D[a]??U.none}let M=new fi;return M.setAttribute(`position`,new Zr(d,3)),M.setAttribute(`normal`,new Zr(f,3)),M.setAttribute(`color`,new Zr(p,3)),M.setAttribute(`sway`,new Zr(new Float32Array(u).fill(t.sway??0),1)),M.setAttribute(`grow`,new Zr(jf(u),4)),M.setAttribute(`glow`,new Zr(m,1)),M.setAttribute(`surf`,new Zr(h,1)),M}var kp={oak:[{dark:`#4c9148`,light:`#a9d86c`},{dark:`#57994a`,light:`#bfe07a`},{dark:`#44874f`,light:`#97cf74`}],linden:[{dark:`#5a9f4c`,light:`#c4e27c`},{dark:`#4e9452`,light:`#a8d878`}],poplar:[{dark:`#4a8f50`,light:`#a2d472`},{dark:`#5c9c48`,light:`#c6e07a`}],spruce:[{dark:`#2f7558`,light:`#74bf8a`},{dark:`#3f8a52`,light:`#98d27a`},{dark:`#2f7a6c`,light:`#6fc0a6`}],scots:[{dark:`#357a54`,light:`#84c47a`}],cypress:[{dark:`#2f7256`,light:`#6fb880`},{dark:`#3a7f50`,light:`#8ac478`}],birch:[{dark:`#dc9a34`,light:`#ffe07a`},{dark:`#e2a640`,light:`#ffe890`}],maple:[{dark:`#c24a34`,light:`#f8a052`},{dark:`#cf5a36`,light:`#fdb860`},{dark:`#b8423c`,light:`#f28050`}],aspen:[{dark:`#cfa032`,light:`#f8e27c`},{dark:`#bfa83c`,light:`#eee688`}],cherry:[{dark:`#e58aac`,light:`#ffdcea`},{dark:`#df7aa2`,light:`#ffcee0`}],magnolia:[{dark:`#e6bcd2`,light:`#fff9fc`},{dark:`#dca8c6`,light:`#fff3f8`}]},Ap={dark:`#7a5236`,light:`#b98a5e`},jp={dark:`#94502e`,light:`#cf8a52`},Mp={dark:`#d6ccba`,light:`#f8f3ea`},Np={dark:`#8c9084`,light:`#ccd0c0`},Pp={dark:`#6e4638`,light:`#a06e58`},Fp={dark:`#d6941e`,light:`#ffe678`},Ip={pre:[[`oak`,.45],[`linden`,.3],[`poplar`,.25]],a:[[`oak`,.45],[`linden`,.3],[`poplar`,.25]],b:[[`spruce`,.55],[`scots`,.22],[`cypress`,.23]],c:[[`birch`,.4],[`maple`,.35],[`aspen`,.25]],free:[[`cherry`,.6],[`magnolia`,.4]]},Lp=(e,t)=>e[Math.floor(t()*e.length)],Rp=(e,t,n)=>new z(e,t,n),zp=new B,Bp=new B,Vp=(e,t,n)=>`#`+zp.set(e).lerp(Bp.set(t),n).getHexString();function Hp(e,t,n,r,i,a,o,s,c,l,u=.55){let d=new V(o,a,i,6,3),f=d.getAttribute(`position`),p=Math.cos(l)*c,m=Math.sin(l)*c,h=-Math.sin(l)*c*.4,g=Math.cos(l)*c*.4;for(let e=0;e<f.count;e++){let t=f.getY(e)+i/2,a=t/i,o=1+u*Math.max(0,1-a/.34)**2,s=Math.sin(a*Math.PI);f.setXYZ(e,f.getX(e)*o+n+p*a*a+h*s,t,f.getZ(e)*o+r+m*a*a+g*s)}let _=G(d,s.dark,.12,t,.06,s.light,void 0,U.bark),v=_.getAttribute(`sway`),y=_.getAttribute(`position`);for(let e=0;e<v.count;e++)v.setX(e,Math.min(1,Math.max(0,y.getY(e)/i))**2);return e.push(_),Rp(n+p,i,r+m)}function Up(e,t,n,r,i,a,o=Ap){e.push(G(qf(n,r,i,a,5),o.dark,.35,t,.06,o.light,void 0,U.bark))}function Wp(e,t,n,r,i,a,o,s,c=1,l=1,u=1){let d=Hf(a,t,u,.13,.7);q(d,n,r,i,1,l,1,t()*W,(t()-.5)*.3),e.push(G(d,o.dark,c,t,.055,o.light,s,U.leaf))}function Gp(e,t,n,r,i,a={}){let o=a.n??4,s=a.sy??.92,c=a.sway??1,l=[n.y-r*s*.8,n.y+r*s*1.05];Wp(e,t,n.x,n.y,n.z,r*.74,i,l,c,s);let u=t()*W;for(let a=0;a<o;a++){let d=u+a/o*W+(t()-.5)*.35,f=r*(.5+t()*.08);Wp(e,t,n.x+Math.cos(d)*f,n.y+(-.22+a%2*.2+t()*.08)*r*s,n.z+Math.sin(d)*f,r*(.5+t()*.1),i,l,c,s)}if(a.cap??!0){let a=t()*W;Wp(e,t,n.x+Math.cos(a)*r*.14,n.y+r*s*.52,n.z+Math.sin(a)*r*.14,r*.52,i,l,c,s)}}function Kp(e,t,n=0,r=0,i=0){let a=new hs(e.map(([e,t])=>new R(Math.max(5e-4,e),t)),t);if(n){let t=a.getAttribute(`position`),o=0,s=0;for(let[t,n]of e)o=Math.max(o,n),s=Math.max(s,t);for(let e=0;e<t.count;e++){let a=t.getX(e),c=t.getY(e),l=t.getZ(e),u=Math.min(1,Math.hypot(a,l)/s)**2*Math.max(0,1-c/(o*.6)),d=Math.cos(Math.atan2(l,a)*n+i),f=1+r*u*d;t.setXYZ(e,a*f,c-r*u*d*o*.35,l*f)}}return a}function qp(e,t,n,r,i,a,o=4,s=1,c=Ap){let l=t()*W,u=Hp(e,t,n,r,.72*i,.085*i*s,.05*i*s,c,.06*i,l),d=.4*i,f=.86*i;for(let a=0;a<2;a++){let o=l+a*Math.PI+.8+(t()-.5)*.5;Up(e,t,Rp(n+(u.x-n)*.3,.4*i,r+(u.z-r)*.3),Rp(u.x+Math.cos(o)*d*.5,f-d*.32,u.z+Math.sin(o)*d*.5),.032*i*s,.018*i*s,c)}Gp(e,t,Rp(u.x,f,u.z),d,a,{n:o})}function Jp(e,t,n,r,i,a,o=Ap){let s=Hp(e,t,n,r,.68*i,.065*i,.04*i,o,.03*i,t()*W),c=.33*i,l=.84*i,u=[l-c*.95,l+c*1.1];Wp(e,t,s.x,l,s.z,c,a,u,1,1.08);let d=t()*W;Wp(e,t,s.x+Math.cos(d)*c*.6,l-c*.42,s.z+Math.sin(d)*c*.6,c*.48,a,u)}function Yp(e,t,n,r,i,a,o=Ap){Hp(e,t,n,r,.46*i,.055*i,.036*i,o,0,0);let s=.2*i,c=1.02*i,l=Uf([[0,0],[s*.8,c*.1],[s,c*.32],[s*.82,c*.58],[s*.46,c*.82],[0,c]],6,t,.07);e.push(G(q(l,n,.24*i,r,1,1,1,t()*W),a.dark,1,t,.055,a.light,void 0,U.leaf))}function Xp(e,t,n,r,i,a,o=Ap){let s=t()*W,c=Hp(e,t,n,r,.68*i,.078*i,.045*i,o,.06*i,s),l=.42*i,u=.82*i;for(let a=0;a<2;a++){let d=s+a*Math.PI+(t()-.5)*.6;Up(e,t,Rp(n+(c.x-n)*.3,.38*i,r+(c.z-r)*.3),Rp(c.x+Math.cos(d)*l*.55,u-l*.26,c.z+Math.sin(d)*l*.55),.032*i,.018*i,o)}Gp(e,t,Rp(c.x,u,c.z),l,a,{n:5,sy:.74,cap:!1})}function Zp(e,t,n,r,i,a){let o=t()<.45,s=t()*W;for(let c=0;c<(o?2:1);c++){let l=s+c*Math.PI+(t()-.5)*.4,u=(.8-c*.14)*i,d=(.046-c*.008)*i,f=.03*i,p=(o?.15:.06)*i,m=o?Math.cos(l)*.035*i:0,h=o?Math.sin(l)*.035*i:0,g=Hp(e,t,n+m,r+h,u,d,f,Mp,p,l,.3);for(let a=0;a<4;a++){let o=.18+a*.19+t()*.05,s=d+(f-d)*o+.004*i,c=new V(s,s,.022*i,6),g=Math.sin(o*Math.PI)*p*.4;q(c,n+m+Math.cos(l)*p*o*o-Math.sin(l)*g,o*u,r+h+Math.sin(l)*p*o*o+Math.cos(l)*g),e.push(G(c,`#4a443e`,o*o,t,.04))}Gp(e,t,Rp(g.x,g.y+.05*i,g.z),(.25-c*.04)*i,a,{n:3,sy:1.08})}}function Qp(e,t,n,r,i,a){let o=Hp(e,t,n,r,.84*i,.042*i,.026*i,Np,.05*i,t()*W,.3),s=[.5*i,1.16*i];Wp(e,t,o.x,.72*i,o.z,.21*i,a,s),Wp(e,t,o.x,.99*i,o.z,.155*i,a,s)}function $p(e,t,n,r,i,a,o=Ap){let s=3+ +(t()<.6);Hp(e,t,n,r,.34*i,.055*i,.045*i,o,0,0,.3);let c=.36*i,l=.46*i,u=(1.02*i-l*.7)/(s-1);for(let o=0;o<s;o++){let d=o/(s-1),f=c*(1-d*.6),p=l*(1-d*.2),m=Uf([[f*.36,p*.13],[f,0],[f*.5,p*.48],[0,p]],7,t,.09);q(m,n,.2*i+o*u,r,1,1,1,t()*W),e.push(G(m,a.dark,.4+.6*d,t,.05,Vp(a.light,`#ffffff`,d*.12),void 0,U.leaf))}}function em(e,t,n,r,i,a,o=jp){let s=t()*W,c=Hp(e,t,n,r,.78*i,.065*i,.04*i,o,.1*i,s,.3),l=Rp(c.x+Math.cos(s+2)*.24*i,.66*i,c.z+Math.sin(s+2)*.24*i);Up(e,t,Rp(n+Math.cos(s)*.03*i,.46*i,r+Math.sin(s)*.03*i),l,.028*i,.016*i,o),Gp(e,t,Rp(c.x,c.y+.03*i,c.z),.33*i,a,{n:4,sy:.5,cap:!1});let u=[l.y-.06*i,l.y+.14*i];Wp(e,t,l.x,l.y+.04*i,l.z,.15*i,a,u,1,.55)}function tm(e,t,n,r,i,a,o=Ap){Hp(e,t,n,r,.28*i,.045*i,.034*i,o,0,0,.3);let s=.15*i,c=1.14*i,l=Uf([[0,0],[s*.85,c*.08],[s,c*.26],[s*.84,c*.52],[s*.5,c*.8],[0,c]],6,t,.06);e.push(G(q(l,n,.12*i,r,1,1,1,t()*W),a.dark,1,t,.055,a.light,void 0,U.leaf))}function nm(e,t,n,r,i,a,o=Pp){let s=t()*W,c=Hp(e,t,n,r,.62*i,.08*i,.046*i,o,.12*i,s),l=Rp(n+(c.x-n)*.3,.36*i,r+(c.z-r)*.3),u=.43*i,d=.76*i;for(let n of[-1.15,1.15,Math.PI]){let r=s+n+(t()-.5)*.4;Up(e,t,l,Rp(c.x+Math.cos(r)*u*.58,d-u*.16,c.z+Math.sin(r)*u*.58),.036*i,.02*i,o)}Gp(e,t,Rp(c.x,d,c.z),u,a,{n:5,sy:.7});for(let o=0;o<7;o++){let o=t()*W,s=(.14+t()*.32)*i,c=new V(.03,.03,.005,5);q(c,n+Math.cos(o)*s,.006,r+Math.sin(o)*s,1,1,1,t()*W),e.push(G(c,a.light,0,t,.04))}}function rm(e,t,n,r,i,a,o=Ap){let s=t()*W,c=Hp(e,t,n,r,.6*i,.07*i,.042*i,o,.06*i,s);Gp(e,t,Rp(c.x,.74*i,c.z),.34*i,a,{n:3,sy:.9})}var im={oak:qp,linden:Jp,poplar:Yp,maple:Xp,birch:Zp,aspen:Qp,spruce:$p,scots:em,cypress:tm,cherry:nm,magnolia:rm},am=1.08;function om(e,t,n,r,i,a){im[n](e,t,r,i,a*am,Lp(kp[n],t))}var sm={oak:.32,linden:.3,poplar:.2,maple:.34,birch:.26,aspen:.2,spruce:.3,scots:.3,cypress:.18,cherry:.38,magnolia:.3},cm={dark:`#2a9a84`,light:`#baf7d2`};function lm(e,t,n){for(let r=0;r<7;r++){let i=r/7*W+.3,a=Hf(.05,t,0,.25,.3);if(q(a,Math.cos(i)*n,.03,Math.sin(i)*n,.85,1.25+t()*.5,.85,t()*W),e.push(G(a,`#b9b2a6`,0,t,.05,`#f6f1e6`,void 0,U.rock)),r%2==0){let r=i+W/7/2,a=new gs(.03,0);q(a,Math.cos(r)*n,.045,Math.sin(r)*n,.6,1.9,.6,t()*W,(t()-.5)*.5),e.push(K(G(a,`#9eeeff`,0,t,.03,`#e6fcff`),1.3))}}}function um(e,t,n,r,i=1){qp(e,t,0,0,n,r?Fp:cm,6,1.3,Mp);let a=Math.min(i,8)*2;for(let i=0;i<a;i++){let i=t()*W,a=.1+t()*1.1,o=(.43+t()*.06)*n,s=new gs(.022+t()*.012,0);q(s,Math.cos(i)*Math.cos(a)*o,.86*n+Math.sin(a)*o*.9,Math.sin(i)*Math.cos(a)*o,1,1.5,1,t()*W),e.push(K(G(s,r?`#fff3c0`:`#ffe9a8`,1,t,.04),1.5))}}function dm(e,t,n,r,i,a=!1){let o=a?{dark:`#9a8444`,light:`#dcc880`}:Lp([{dark:`#4a9046`,light:`#a4d66a`},{dark:`#42864e`,light:`#90cc70`}],t),s=[0,.26*i];Wp(e,t,n,.105*i,r,.15*i,o,s,.4,.85);let c=t()*W;for(let a=0;a<2;a++){let l=c+a*(2.2+t()*.8);Wp(e,t,n+Math.cos(l)*.12*i,.07*i,r+Math.sin(l)*.12*i,(.095+t()*.02)*i,o,s,.4,.85,0)}if(!a&&t()<.55){let a=Lp([`#e2504c`,`#6a6fdc`,`#ffffff`,`#ffb94a`],t);for(let o=0;o<7;o++){let o=t()*W,s=new gs(.02*i,0);q(s,n+Math.cos(o)*.16*i,(.08+t()*.12)*i,r+Math.sin(o)*.16*i,1,1,1,t()*W),e.push(G(s,a,.4,t,.04))}}}function fm(e,t,n,r,i=1){for(let a=0;a<7;a++){let o=a/7*W+t()*.4,s=new Ja(.042*i,.3*i,3);s.scale(1,1,.3),s.translate(0,.15*i,0),s.rotateZ(-(.8+t()*.4)),s.rotateY(-o),s.translate(n,.01,r),e.push(G(s,`#4a9046`,1.4,t,.05,`#a4d66a`))}}function pm(e,t,n,r,i,a=1){let o=t(),s=(.13+t()*.09)*a;e.push(G(q(new V(.008,.011,s,3),n,s/2,r),`#4f9a48`,1.4,t,.04,`#86c466`)),o<.4?(e.push(G(q(new V(.056*a,.044*a,.016,6),n,s,r,1,1,1,t()*W),i===`#ffd25e`?`#ffffff`:i,1.4,t,.05)),e.push(G(q(new V(.022*a,.022*a,.026,5),n,s+.009,r),`#f7b82c`,1.4,t,.04))):o<.75?e.push(G(q(new Ja(.044*a,.085*a,5),n,s+.035*a,r,1,1,1,t()*W,Math.PI),i,1.4,t,.06)):e.push(G(q(new gs(.052*a,0),n,s+.014,r,1,.75,1,t()*3),i,1.4,t,.06));for(let i=0;i<2;i++){if(t()>.75)continue;let i=new Ja(.024,.1,3);i.scale(1,1,.3),i.translate(0,.05,0),i.rotateZ(-.9),i.rotateY(t()*W),i.translate(n,0,r),e.push(G(i,`#4f9a48`,1,t,.04,`#98d070`))}}function mm(e,t,n,r,i=1,a=`#de4a3c`){e.push(G(q(new V(.022*i,.032*i,.09*i,6),n,.045*i,r),`#e6d8c0`,0,t,.04,`#fff6e6`));let o=new ys(.07*i,7,3,0,W,0,Math.PI/2);e.push(G(q(o,n,.078*i,r,1,.85,1,t()*W),a,0,t,.05,`#f47a62`)),e.push(G(q(new V(.066*i,.05*i,.012*i,7),n,.076*i,r),`#f3e6cf`,0,t,.03));for(let a=0;a<4;a++){let a=t()*W,o=(.018+t()*.026)*i,s=.078*i+Math.sqrt(Math.max(0,.07*.07*i*i-o*o))*.85;e.push(K(G(q(new gs(.012*i,0),n+Math.cos(a)*o,s,r+Math.sin(a)*o,1,.5,1),`#ffffff`,0,t,.02),.7))}}function hm(e,t,n,r,i=1){let a=new V(.075*i,.11*i,.11*i,7,1);e.push(G(q(a,n,.055*i,r,1,1,1,t()*W),Ap.dark,0,t,.06,Ap.light,void 0,U.bark)),e.push(G(q(new V(.066*i,.066*i,.012,7),n,.112*i,r),`#e8c890`,0,t,.04)),e.push(G(q(new V(.03*i,.03*i,.014,6),n+.006,.113*i,r),`#c99a62`,0,t,.04))}function gm(e,t,n,r,i=1,a=t()*W){let o=new V(.055*i,.062*i,.36*i,7);o.rotateZ(Math.PI/2),e.push(G(q(o,n,.05*i,r,1,1,1,a),Ap.dark,0,t,.06,Ap.light,void 0,U.bark));for(let o of[-1,1]){let s=new V(.046*i,.046*i,.01,7);s.rotateZ(Math.PI/2),s.translate(o*.181*i,0,0),e.push(G(q(s,n,.05*i,r,1,1,1,a),`#e8c890`,0,t,.04))}let s=Hf(.06*i,t,0,.2,.2);e.push(G(q(s,n,.085*i,r,1.6,.5,.9,a),`#4f9a3c`,0,t,.06,`#9bd45c`))}function _m(e,t,n,r,i,a=t()<.4){let o=Hf(.1*i,t,0,.3,.2);q(o,n,.02*i,r,1.15,.7,1,t()*W),e.push(G(o,`#807a70`,0,t,.06,a?`#8fc058`:`#e6e0d3`,void 0,U.rock))}function vm(e,t,n,r,i=!1){let a=5+Math.floor(t()*4);for(let o=0;o<a;o++){let s=o/a*W+t(),c=.12+t()*.13,l=new Ja(.024,c,3);l.scale(1,1,.45),l.translate(0,c/2,0),l.rotateZ(-(.15+t()*.35)),l.rotateY(-s),l.translate(n+Math.cos(s)*.02,0,r+Math.sin(s)*.02),e.push(G(l,i?`#a4924e`:`#4f9a48`,1.6,t,.05,i?`#e0cf86`:`#b4e274`))}}function ym(e,t,n,r,i){e.push(G(q(Wf(new V(i*1.2,i*1.28,.05,9),.12,t),n,.022,r),`#ece2c4`,0,t,.03,`#fbf5e2`,void 0,U.rock)),e.push(K(G(q(new V(i,i,.012,9),n,.05,r),`#58cfd2`,0,t,.03,`#8ee6e2`),.22));for(let a=0;a<5;a++){let o=t()*W;_m(e,t,n+Math.cos(o)*i*1.15,r+Math.sin(o)*i*1.15,.4+t()*.3,a%2==0)}for(let a=0;a<2;a++){let o=t()*W,s=i*(.2+t()*.45);e.push(G(q(new V(.04,.04,.006,7),n+Math.cos(o)*s,.058,r+Math.sin(o)*s),`#3f9a3c`,0,t,.05)),a===0&&e.push(G(q(new gs(.02,0),n+Math.cos(o)*s,.07,r+Math.sin(o)*s,1,.7,1),`#ffb3d0`,0,t,.04))}let a=t()*W;for(let o=0;o<4;o++){let s=a+(o-1.5)*.3,c=.2+t()*.12,l=new Ja(.012,c,3);e.push(G(q(l,n+Math.cos(s)*i*1.02,.04+c/2,r+Math.sin(s)*i*1.02),`#3f8a35`,1.6,t,.05,`#9cd45c`)),o%2&&e.push(G(q(new V(.014,.014,.05,5),n+Math.cos(s)*i*1.02,.04+c*.86,r+Math.sin(s)*i*1.02),`#7a4a2a`,1.6,t,.05))}}function bm(e,t){e.push(G(q(new V(.014,.02,.2,4),0,.1,0),`#d6ccba`,1,t,.04,`#f8f3ea`));for(let[n,r]of[[.055,.6],[-.055,-.6]]){let i=new Ja(.045,.13,3);i.scale(1,1,.35),q(i,n,.215,0,1,1,1,0,0,-r*1.6),e.push(K(G(i,`#2a9a84`,1.2,t,.05,`#baf7d2`),.25))}}var xm={oak:qp,linden:Jp,poplar:Yp,maple:Xp,birch:Zp,aspen:Qp,spruce:$p,scots:em,cypress:tm,cherry:nm,magnolia:rm},Sm={brown:Ap,red:jp,pale:Mp,grey:Np,cherry:Pp},Cm={pools:Ip,wild:[`spruce`,`spruce`,`oak`,`linden`,`poplar`,`cypress`,`scots`],footprint:sm,tree:om,great:um,seedling:bm,ring:lm,bush:dm,fern:fm,flower:pm,mushroom:mm,stump:hm,log:gm,rock:_m,tuft:vm,pond:ym},wm=()=>rp().flora,Tm=e=>wm().footprint[e]??.3,Em=(e,t,n,r,i,a)=>wm().tree(e,t,n,r,i,a),Dm=(e,t,n,r,i=1)=>wm().great(e,t,n,r,i),Om=(e,t)=>wm().seedling(e,t),km=(e,t,n)=>wm().ring(e,t,n),Am=(e,t,n,r,i,a=!1)=>wm().bush(e,t,n,r,i,a),jm=(e,t,n,r,i=1)=>wm().fern(e,t,n,r,i),Mm=(e,t,n,r,i,a=1)=>wm().flower(e,t,n,r,i,a),Nm=(e,t,n,r,i=1,a)=>wm().mushroom(e,t,n,r,i,a),Pm=(e,t,n,r,i=1)=>wm().stump(e,t,n,r,i),Fm=(e,t,n,r,i=1,a)=>wm().log(e,t,n,r,i,a),Im=(e,t,n,r,i,a)=>wm().rock(e,t,n,r,i,a),Lm=(e,t,n,r,i=!1)=>wm().tuft(e,t,n,r,i),Rm=(e,t,n,r,i)=>wm().pond(e,t,n,r,i),zm=Cm.tree,Bm=Cm.mushroom,Vm={campfire:.42,mushroom:.4,well:.3,cabin:.42,windmill:.4,treehouse:.46,tower:.34,cottage:.44,market:.48,forge:.44,tavern:.42,sawmill:.46,site:.4,garden:.56,watermill:.44,archery:.5,lodge:.48},Y=(e,t,n)=>new z(e,t,n),Hm=`#a8713f`,Um=`#d09a5e`,Wm=`#6b4228`,Gm=`#9a9488`,Km=`#e4ded0`,qm=`#dccdae`,Jm=`#fff8e8`,Ym=`#d6c49c`,Xm=`#fdf6e2`,Zm=`#c94c34`,Qm=`#f08a62`,$m=`#f2c04a`;Cf(U.wood,Hm,Um,Wm),Cf(U.stone,Gm,Km),Cf(U.plaster,qm,Jm),Cf(U.cloth,Ym,Xm,`#cdb98e`,`#d2bf96`),Cf(U.rock,`#8a8378`),Cf(U.metal,`#4a4038`,`#5a5f66`,`#4a4f58`);var eh={terracotta:[`#ee7b52`,`#a8402b`],thatch:[`#f4d982`,`#b08a34`],teal:[`#66c4bc`,`#2a7a80`],slate:[`#a2aed0`,`#56608a`],plum:[`#cc90ca`,`#7e4680`],moss:[`#a6d476`,`#4c8a44`],gold:[`#ffe27a`,`#d08a14`]},th=e=>({style:{[J.roof]:e},surf:e===eh.thatch?{[J.roof]:U.thatch}:void 0}),nh=class{out;rng;jitter;fx=[];constructor(e,t,n){this.out=e,this.rng=t,this.jitter=n}add(e,t,n,r=0){let i=kf(e,t,r,this.rng,this.jitter,n);return this.out.push(i),i}put(e,t,n,r,i=0,a,o=0){let s=q(Op(e,a),t,o,n,r,r,r,i);return this.out.push(s),s}chimney(e,t,n,r,i,a=0,o=1,s=0){let[c,l,u]=bp(e,t),d=Math.cos(a),f=Math.sin(a);this.fx.push({kind:`smoke`,x:n+(c*d+u*f)*i,y:s+l*i+.01,z:r+(-c*f+u*d)*i,s:o})}smoke(e,t,n,r=1){this.fx.push({kind:`smoke`,x:e,y:t,z:n,s:r})}fire(e,t,n,r=1){this.fx.push({kind:`fire`,x:e,y:t,z:n,s:r})}};function rh(e,t,n,r,i,a){for(let o=t;o<e.out.length;o++)n!==1&&e.out[o].scale(n,n,n),e.out[o].rotateY(r),(i||a)&&e.out[o].translate(i,0,a);let o=Math.cos(r),s=Math.sin(r);return e.fx.map(e=>({...e,x:i+(e.x*o+e.z*s)*n,y:e.y*n,z:a+(-e.x*s+e.z*o)*n,s:e.s*n}))}function X(e,t,n,r,i,a,o=0){return q(new Ka(e,t,n),r,i,a,1,1,1,o)}function ih(e,t,n,r,i,a,o=10){let s=new V(e,e,t,o);return s.rotateZ(Math.PI/2),q(s,n,r,i,1,1,1,a)}function ah(e,t=!1){let n=e.length,r=e[0].length,i=new Float32Array(n*r*3);e.forEach((e,t)=>e.forEach((e,n)=>i.set([e.x,e.y,e.z],(t*r+n)*3)));let a=[];for(let e=0;e<n-1;e++)for(let n=0;n<r-1;n++){let i=e*r+n,o=i+1,s=i+r,c=s+1;t?a.push(i,s,o,o,s,c):a.push(i,o,s,o,c,s)}let o=new fi;return o.setAttribute(`position`,new Zr(i,3)),o.setIndex(a),o}function oh(e,t,n){let r=new Do;return r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(e/2,t-e/2),r.absarc(0,t-e/2,e/2,0,Math.PI,!1),r.lineTo(-e/2,0),new ds(r,{depth:n,bevelEnabled:!1,curveSegments:8})}function sh(e,t,n,r,i,a=.036){e.add(ih(a,r,t,a*.92,n,i),Wm,Hm);for(let o of[-1,1]){let s=ih(a*.8,.006,0,0,0,0);s.translate(o*(r/2+.001),0,0),e.add(q(s,t,a*.92,n,1,1,1,i),`#e8c890`);let c=ih(a*.36,.004,0,0,0,0);c.translate(o*(r/2+.005),0,0),e.add(q(c,t,a*.92,n,1,1,1,i),`#c99a62`)}}function ch(e,t,n,r=.27,i=0){let a=Math.sin(i)*.055,o=Math.cos(i)*.055;e.add(q(new V(.008,.013,r,7),t,r/2,n),Wm,Hm),e.add(qf(Y(t,r-.006,n),Y(t+a,r+.018,n+o),.007,.005,6),Wm,Hm),e.add(qf(Y(t+a,r+.02,n+o),Y(t+a,r-.012,n+o),.0028,.0028,4),`#4a4038`);let s=t+a,c=n+o,l=r-.05;e.add(q(new Ja(.026,.02,6),s,l+.048,c),`#4a4038`,`#6a5f55`),K(e.add(q(new V(.017,.014,.036,6),s,l+.02,c),`#ffc860`,`#fff0b0`),2.2),e.add(q(new V(.019,.019,.006,6),s,l,c),`#4a4038`)}function lh(e,t,n,r,i,a=1){let o=new Ja(.035*a,.11*a,3);o.scale(1,1,.12),o.rotateZ(-Math.PI/2),e.add(q(o,t+.058*a,n,r),i,void 0,1.3)}function uh(e,t,n,r,i,a,o=[Wm,Hm]){e.add(q(new V(.009,.013,r,7),t,r/2,n),o[0],o[1]),e.add(q(new ms(.016,1),t,r+.008,n),`#d99a2a`,$m);let s=Math.cos(i),c=Math.sin(i);e.add(ih(.006,.1,t+s*.04,r-.03,n-c*.04,i,6),o[0],o[1]);let l=.2,u=[];for(let e=0;e<=6;e++){let t=e/6,n=r-.036-t*l,i=[];for(let e=0;e<=4;e++){let r=e/4-.5,a=t>.8?(1-Math.abs(r)*2)*((t-.8)/.2)*.05:0;i.push(Y(r*.075,n+a,.006+Math.sin(t*4+r*3)*.006))}u.push(i)}for(let o of[!1,!0]){let d=ah(u,o),f=e.add(q(d,t+s*.045,0,n-c*.045,1,1,1,i),a[1],a[0],1),p=f.getAttribute(`sway`),m=f.getAttribute(`position`);for(let e=0;e<p.count;e++)p.setX(e,Math.max(0,(r-.03-m.getY(e))/l)*1.6*(r/Math.max(.05,m.getY(e)))*.5)}}function dh(e,t,n,r,i){let a=[Zm,$m,`#62c0ba`,Xm],o=e=>Y(t.x+(n.x-t.x)*e,t.y+(n.y-t.y)*e-Math.sin(e*Math.PI)*i,t.z+(n.z-t.z)*e),s=Math.atan2(-(n.z-t.z),n.x-t.x),c=r*2;for(let t=0;t<c;t++)e.add(qf(o(t/c),o((t+1)/c),.0026,.0026,3),`#efe6cc`);for(let t=0;t<r;t++){let n=o((t+.5)/r),i=new Ja(.021,.042,3);i.scale(1,1,.12),i.rotateX(Math.PI),e.add(q(i,n.x,n.y-.024,n.z,1,1,1,s),a[t%a.length],void 0,1.6)}}function fh(e,t,n,r,i,a,o=`fence`){let s=r-t,c=i-n,l=Math.hypot(s,c),u=Math.max(1,Math.round(l/(1.15*a))),d=Math.atan2(s,c);for(let r=0;r<u;r++){let i=Op(o);i.translate(1,0,0);let f=(r+.5)/u;e.out.push(q(i,t+s*f,0,n+c*f,a,o===`fence`?a*.72:a,l/u/1.15,d))}}function ph(e,t=.23,n=.42,r=.15){let i=Math.PI/2,a=Math.PI/8,o=i+a,s=e=>(1-Math.cos(8*(e-o)))/2,c=(e,i)=>{let a=s(e),o=t*i*(1-.05*a*i),c=r+(n-r)*(1-i)**1.32-.02*a*Math.sin(Math.PI*i);return Y(Math.cos(e)*o,c,Math.sin(e)*o)},l=t*.82,u=t*.86,d=[];for(let e=0;e<=10;e++){let t=[];for(let n=0;n<=64;n++)t.push(c(n/64*W,.05+e/10*.95));d.push(t)}K(e.add(ah(d),Ym,Xm),.17);for(let t=0;t<8;t++){let n=o+t*2*a;for(let t=0;t<4;t++){let r=c(n,.06+t/4*.94),i=c(n,.06+(t+1)/4*.94);r.y+=.002,i.y+=.002,e.add(qf(r,i,.0048,.0048,5),`#c2ae84`,`#e6d8b4`)}}let f=[[],[],[]];for(let e=0;e<=96;e++){let t=e/96*W,n=.026+.026*Math.abs(Math.sin(8*(t-o))),r=c(t,1),i=Math.hypot(r.x,r.z);f[0].push(Y(Math.cos(t)*(i+.002),r.y+.006,Math.sin(t)*(i+.002))),f[1].push(Y(Math.cos(t)*(i+.004),r.y-n*.5,Math.sin(t)*(i+.004))),f[2].push(Y(Math.cos(t)*(i+.001),r.y-n,Math.sin(t)*(i+.001)))}e.add(ah(f),Zm,Qm),e.add(ah(f,!0),`#8e3626`);let p=(e,t,n,r)=>{let o=[[],[]];for(let s=0;s<=56;s++){let c=i+a+s/56*(W-2*a);o[0].push(Y(Math.cos(c)*e,n,Math.sin(c)*e)),o[1].push(Y(Math.cos(c)*t,r,Math.sin(c)*t))}return o};K(e.add(ah(p(u,l,0,r+.006),!0),`#cdb98e`,Xm),.2),e.add(ah(p(u+.004,u+.003,0,.026),!0),Zm,Qm),K(e.add(ah(p(u-.006,l-.006,0,r+.006)),`#d98a48`,`#ffd28a`),.55);let m=[[],[]];for(let e=0;e<=32;e++){let t=e/32*W;m[0].push(Y(0,r+.1,0)),m[1].push(Y(Math.cos(t)*l,r+.004,Math.sin(t)*l))}K(e.add(ah(m),`#c87a3e`,`#f0b870`),.4),e.add(q(new V(u-.01,u-.01,.008,24),0,.004,0),`#a8553c`,`#c8745a`),K(e.add(q(new ms(.022,2),.03,.1,-.02),`#ffc860`,`#fff2c0`),2.4),e.add(ih(.026,.13,-.02,.03,.03,.5),`#3f8a86`,`#74c0ba`);for(let t of[-1,1]){let n=i+t*a,o=[];for(let e=0;e<=8;e++){let i=e/8,s=i-.42,c=.36+(s>0?.62*(s/.58)**1.5:.2*(-s/.42)**1.4),d=.022*Math.exp(-(s*s)/.05),f=[];for(let e=0;e<=4;e++){let o=e/4,s=n-t*a*c*o,p=u+(l-u)*i+.006+d*Math.sin(o*Math.PI)+.004*Math.sin(o*Math.PI*3);f.push(Y(Math.cos(s)*p,i*(r+.004),Math.sin(s)*p))}o.push(f)}e.add(ah(o,t<0),`#d2bf96`,Xm),e.add(ah(o,t>0),`#b8894e`,`#e2b070`);let s=n-t*a*.15;e.add(q(Vf(.014,e.rng,1,.1,.9),Math.cos(s)*(u+.022),.42*r,Math.sin(s)*(u+.022)),Zm,Qm)}e.add(q(new V(.01,.012,n+.1,8),0,(n+.1)/2,0),Wm,Hm),e.add(q(Kp([[.052,0],[.046,.02],[.022,.05],[0,.062]],14),0,n-.05,0),Zm,Qm),e.add(q(new ms(.017,2),0,n+.105,0),`#d99a2a`,$m),lh(e,0,n+.062,0,Qm);for(let n=0;n<8;n++){let i=o+n*2*a,s=Math.cos(i),c=Math.sin(i),l=t+.085;e.add(qf(Y(s*t,r-.004,c*t),Y(s*l,.012,c*l),.0028,.0028,4),`#efe6cc`),e.add(qf(Y(s*(l+.008),-.01,c*(l+.008)),Y(s*(l-.012),.034,c*(l-.012)),.0065,.005,5),Wm,Um)}return e.add(q(new V(.075,.075,.008,16),0,.004,u+.06,1,1,.62),`#3f8a86`,`#74c0ba`),{R:t,H:n,hw:r}}function mh(e,t){return Kp([[0,0],[e*.78,t*.1],[e,t*.28],[e*.84,t*.5],[e*.46,t*.76],[e*.14,t*.93],[0,t]],12)}function hh(e){let t=e.rng;e.add(q(new V(.125,.135,.014,18),0,.007,0),`#4a3d34`,`#6a5a4c`);for(let n=0;n<9;n++){let r=n/9*W+t()*.2,i=.04+t()*.014;e.add(q(Vf(i,t,1,.14,.4),Math.cos(r)*.145,i*.45,Math.sin(r)*.145,1.15,.78,1,t()*W),`#8a8378`,Km)}K(e.add(q(new V(.085,.085,.008,14),0,.016,0),`#ff6a22`,`#ffa640`),1.5);for(let t=0;t<5;t++){let n=t/5*W+.4;e.add(qf(Y(Math.cos(n)*.105,.014,Math.sin(n)*.105),Y(-Math.cos(n)*.022,.17,-Math.sin(n)*.022),.022,.015,7),Hm,`#3e2c22`)}[[.082,.19,`#f2481a`,`#ff9a2e`,1.5],[.054,.26,`#ff8a22`,`#ffd65a`,1.9],[.028,.315,`#ffd25a`,`#fffbe2`,2.3]].forEach(([n,r,i,a,o])=>K(e.add(q(mh(n,r),(t()-.5)*.01,.03,(t()-.5)*.01,1,1,1,t()*W),i,a,2.2),o));for(let[t,n,r]of[[.6,.062,.62],[2.9,.058,.52],[4.6,.064,.45]])K(e.add(q(mh(.05*r,.24*r),Math.cos(t)*n,.035,Math.sin(t)*n),`#ff6a1e`,`#ffc84a`,2.6),1.7);sh(e,.29,.14,.26,-1.1,.042),sh(e,-.27,.18,.24,.95,.04),e.add(q(new V(.052,.06,.085,10),-.02,.0425,-.32),Wm,Hm),e.add(q(new V(.045,.045,.006,10),-.02,.087,-.32),`#e8c890`),e.add(q(new V(.02,.02,.005,8),-.016,.089,-.32),`#c99a62`),e.put(`lumber`,.24,-.24,.34,.7),e.put(`bucket_water`,-.27,-.12,.7,.4),e.fire(0,.2,0,1),e.smoke(0,.3,0,.8)}function gh(e){let t=e.rng;e.add(Kp([[0,0],[.205,0],[.22,.03],[.195,.12],[.168,.22],[.172,.3],[.2,.345],[0,.345]],22),qm,Jm),e.add(Kp([[.17,.3],[.37,.348],[.385,.362],[0,.362]],22),`#e2d0ac`,`#f6ead0`);let n=[[.39,.345],[.405,.372],[.39,.43],[.335,.53],[.245,.615],[.125,.668],[0,.682]];e.add(Kp(n,26),`#c2382a`,`#f47a5c`);let r=Y(0,1,0),i=new dn,a=Y(0,0,0);for(let o=0;o<11;o++){let s=o/11*W+t()*.4,c=1.4+o*2%5*.85+t()*.3,l=Math.min(n.length-2,Math.floor(c)),u=c-l,d=n[l][0]+(n[l+1][0]-n[l][0])*u,f=n[l][1]+(n[l+1][1]-n[l][1])*u,p=n[l+1][0]-n[l][0],m=n[l+1][1]-n[l][1],h=Math.hypot(p,m);a.set(m/h*Math.cos(s),-p/h,m/h*Math.sin(s));let g=new ms(.03+t()*.022,2);g.scale(1,.32,1),g.applyQuaternion(i.setFromUnitVectors(r,a)),g.translate(Math.cos(s)*d,f,Math.sin(s)*d),K(e.add(g,`#f2e6cc`,`#ffffff`),.3)}e.add(q(oh(.132,.2,.03),0,0,.19),Wm,`#8a5a36`),e.add(q(oh(.1,.176,.02),0,.004,.208),Hm,Um),e.add(q(new ms(.01,1),.028,.085,.232),`#d99a2a`,$m),e.add(q(new V(.085,.095,.02,12),0,.01,.27,1,1,.6),Gm,Km);for(let t of[-.95,.95,Math.PI]){let n=.176,r=t===Math.PI?.2:.21,i=new bs(.043,.011,8,16);e.add(q(i,Math.sin(t)*n,r,Math.cos(t)*n,1,1,1,t),Wm,`#8a5a36`);let a=new V(.04,.04,.012,14);a.rotateX(Math.PI/2),K(e.add(q(a,Math.sin(t)*.172,r,Math.cos(t)*.172,1,1,1,t),`#ffc860`,`#fff0b0`),1.6),e.add(q(new Ka(.084,.008,.01),Math.sin(t)*.18,r,Math.cos(t)*.18,1,1,1,t),Wm),e.add(q(new Ka(.008,.084,.01),Math.sin(t)*.18,r,Math.cos(t)*.18,1,1,1,t),Wm)}e.add(qf(Y(-.17,.5,-.1),Y(-.19,.66,-.11),.036,.03,9),qm,Jm),e.add(q(new V(.042,.038,.026,9),-.191,.672,-.111),`#c2382a`,`#f47a5c`),e.smoke(-.191,.7,-.111,.8),ch(e,.2,.3,.24,-1.2),Bm(e.out,t,-.3,.2,1.5),Bm(e.out,t,-.35,.09,.95,`#e8a23a`),Bm(e.out,t,.33,-.06,1.15)}function _h(e){e.put(`well`,0,0,.54,0,th(eh.teal)),e.put(`bucket`,.24,.12,.62,.8);for(let t=0;t<4;t++){let n=2.2+t*.9,r=.036+e.rng()*.014;e.add(q(Vf(r,e.rng,1,.14,.4),Math.cos(n)*.27,r*.4,Math.sin(n)*.27,1.15,.7,1,e.rng()*W),`#8a8378`,Km)}}function vh(e){let t=.58;e.put(`home_a`,0,0,t,0,th(eh.terracotta)),e.chimney(`home_a`,J.stoneDark,0,0,t),e.put(`lumber`,.36,-.04,.4,Math.PI/2+.1),e.put(`barrel`,-.31,.14,.62,.3),e.put(`crate_small`,-.33,.02,.7,-.2),ch(e,.24,.3,.25,-.9)}var yh=[eh.teal,eh.slate,eh.plum,eh.moss,eh.thatch];function bh(e){let t=.52;e.put(`home_b`,0,0,t,0,th(yh[Math.floor(e.rng()*yh.length)])),e.chimney(`home_b`,J.stoneDark,0,0,t),fh(e,-.36,.36,-.36,-.1,.36),fh(e,-.36,.36,-.12,.36,.36),e.put(`wheelbarrow`,.36,.16,.62,2.4),e.put(`barrel`,.34,-.12,.6),e.put(`sack`,.33,-.01,.9,.7)}var xh=.56,Sh={y:.957*xh,z:.3321*xh};function Ch(e){e.put(`windmill`,0,0,xh,0,th(eh.terracotta))}function wh(){return[q(Op(`windmill_fan`),0,0,0,xh)]}function Th(e){let t=e.rng;zm(e.out,t,`oak`,0,0,1.12);let n=.05,r=.08;e.add(q(new V(.29,.27,.036,12),n,.47,r),Hm,Um),e.add(q(new V(.295,.295,.012,12),n,.49,r),Wm,Hm);for(let t of[.4,2.5,4.4])e.add(qf(Y(Math.cos(t)*.05,.24,Math.sin(t)*.05),Y(n+Math.cos(t)*.22,.45499999999999996,r+Math.sin(t)*.22),.016,.012,6),Wm,Hm);let i=[];for(let t=0;t<9;t++){let a=2.9+t/9*(W-.9),o=Y(n+Math.cos(a)*.265,.49,r+Math.sin(a)*.265);i.push(o),e.add(q(new V(.008,.009,.085,6),o.x,o.y+.04,o.z),Wm,Hm)}for(let t=0;t<i.length-1;t++){let n=i[t],r=i[t+1],a=Y((n.x+r.x)/2,n.y+.055,(n.z+r.z)/2);e.add(qf(Y(n.x,n.y+.075,n.z),a,.003,.003,4),`#efe6cc`),e.add(qf(a,Y(r.x,r.y+.075,r.z),.003,.003,4),`#efe6cc`)}let a=.3,o=.095,s=.11,c=.488,l=-.35;e.put(`home_a`,o,s,a,l,th(eh.teal),c),e.chimney(`home_a`,J.stoneDark,o,s,a,l,.5,c);for(let t of[-1,1])e.add(qf(Y(-.24+t*.036,0,.36),Y(-.13+t*.036,.5,.24),.0095,.0095,5),Wm,Hm);for(let t=1;t<7;t++){let n=t/7;e.add(X(.09,.013,.013,-.24+.11*n,.5*n,.36-.12*n),Hm,Um)}for(let[t,n]of[[-.14,-.08],[.24,.2]])e.add(X(.005,.09,.005,t,.41,n),`#4a4038`),K(e.add(q(new V(.017,.014,.034,6),t,.355,n),`#ffc860`,`#fff0b0`,.8),2),e.add(q(new Ja(.024,.018,6),t,.38,n),`#4a4038`,void 0,.8)}function Eh(e){e.put(`tower_a`,0,0,.44,0,th(eh.slate)),e.add(q(new V(.012,.016,.09,6),0,.9936,0),Wm,Hm),K(e.add(q(new gs(.06,0),0,1.1036000000000001,0,1,1.4,1,.4),`#ffc040`,`#fff2b0`,.5),2.2),e.put(`barrel`,.27,.14,.6),e.put(`crate`,.3,0,.5,.5)}function Dh(e){e.put(`market`,0,.03,.44,0,th(eh.teal))}function Oh(e){let t=.48;e.put(`blacksmith`,0,0,t,0,th(eh.slate)),e.chimney(`blacksmith`,J.stone,0,0,t,0,1.2),e.fire(.02*t,.14,.42*t,.6)}function kh(e){e.put(`tavern`,0,0,.46,0,th(eh.moss)),e.put(`barrel`,.36,.2,.62),e.put(`barrel`,.37,.07,.56,1),ch(e,-.33,.3,.26,.9)}function Ah(e){e.put(`lumbermill`,0,0,.44,0,th(eh.terracotta))}function jh(e){e.put(`watermill`,0,0,.5,0,th(eh.teal)),e.put(`sack`,.36,.2,.9,.4),e.put(`sack`,.4,.1,.9,1.3),e.put(`barrel`,-.36,.16,.6)}function Mh(e){e.put(`archery`,0,-.04,.38,0,th(eh.plum)),e.put(`target`,.34,.3,.7,-.5),e.put(`target`,-.36,.26,.6,.6)}function Nh(e){e.put(`barracks`,0,0,.42,0,th(eh.gold)),uh(e,.4,.3,.34,-.5,eh.terracotta),e.put(`crate`,-.38,.22,.5,.3)}var Ph=`#5e3f2a`,Fh=`#8a5e3e`,Ih=`#3f8f3a`,Lh=`#8fd06a`;Cf(U.soil,Ph);function Rh(e,t,n,r,i,a=.05){let o=e.out.length;if(Bh(e,t,n,r,i),a!==.05)for(let t=o;t<e.out.length;t++)e.out[t].translate(0,a-.05,0)}var zh={carrot:[`#e2601c`,`#ff9a3c`],wheat:[`#d9a52e`,`#ffe58a`],berry:[`#b02450`,`#e0527a`],pumpkin:[`#e8782a`,`#ffb354`]};function Bh(e,t,n,r,i){let a=e.rng,o=(t,n,a,o,s=Ih,c=Lh)=>{let l=new Ja(n,t,4);l.translate(0,t/2,0),l.rotateZ(a),l.rotateY(o),e.add(q(l,r,.05,i),s,c,1.4)};if(n<=0){o(.035,.012,.5,a()*W),o(.035,.012,-.5,a()*W);return}if(n===1){for(let e=0;e<3;e++)o(.06+a()*.015,.016,.45,e/3*W+a());return}let s=n>=3;if(t===`carrot`){if(s){K(e.add(q(new V(.032,.014,.085,7),r,.088,i),`#e2601c`,`#ff9a3c`),.25);for(let t=0;t<4;t++){let n=new Ja(.014,.075,4);n.translate(0,.0375,0),n.rotateZ(.5),n.rotateY(t/4*W+a()),e.add(q(n,r,.128,i),Ih,Lh,1.4)}}else for(let e=0;e<4;e++)o(.08+a()*.02,.016,.4,e/4*W+a())}else if(t===`wheat`){let t=s?.2:.12;for(let n=0;n<4;n++){let n=(a()-.5)*.05,o=(a()-.5)*.04,c=t*(.85+a()*.3);e.add(q(new V(.004,.005,c,4),r+n,.05+c/2,i+o),s?`#c9a03a`:`#5fa648`,s?`#f2d878`:Lh,1.6),s&&K(e.add(q(new Ja(.016,.06,5),r+n,.05+c+.024,i+o),`#e3b23c`,`#ffe890`,1.6),.2)}}else if(t===`berry`){let t=s?.06:.042;if(e.add(q(Vf(t,a,1,.16,.4),r,.05+t*.7,i,1,.85,1,a()*W),`#2f7a3a`,`#74c060`,1),s)for(let n=0;n<6;n++){let o=a()*W,s=.4+a()*.9;K(e.add(q(new ms(.018,1),r+Math.cos(o)*Math.sin(s)*t,.05+t*.7+Math.cos(s)*t*.8,i+Math.sin(o)*Math.sin(s)*t),n%2?`#c2264e`:`#7a3fb0`,void 0,1),.35)}}else{for(let e=0;e<3;e++)o(.05,.03,1.1,e/3*W+a(),`#3a8038`,`#7cc060`);let t=s?.06:.026;e.add(q(new ms(t,1),r+.02,.05+t*.72,i+.01,1,.76,1,a()*W),s?`#e8782a`:`#7aa83c`,s?`#ffb354`:`#b8d868`),s&&e.add(q(new V(.006,.009,.03,5),r+.02,.05+t*1.5,i+.01),`#5a7a30`)}}function Vh(e,t){e.add(X(.64,.04,.5,0,.02,0),Ph,`#74503a`);let n=[-.165,-.055,.055,.165];for(let t of n)e.add(X(.56,.02,.06,0,.046,t),Ph,Fh);let r=.3;fh(e,-.36,-.29,.36,-.29,r),fh(e,-.36,-.29,-.36,.29,r),fh(e,.36,-.29,.36,.29,r);for(let t of[-1,1])e.add(X(.03,.13,.03,t*.36,.065,.29),Wm,Hm);let i=-.25,a=-.21;if(e.add(q(new V(.008,.011,.3,6),i,.15,a),Wm,Hm),e.add(X(.2,.016,.016,i,.22,a),Wm,Hm),e.add(q(new V(.03,.045,.1,6),i,.2,a),Zm,Qm,.6),e.add(q(new ms(.03,1),i,.285,a),`#e2c88f`,`#fff0c8`),e.add(q(new V(.055,.058,.008,8),i,.31,a),`#a87a34`,`#d6a852`),e.add(q(new Ja(.034,.05,8),i,.338,a),`#a87a34`,`#d6a852`),!t){e.put(`wheelbarrow`,.2,.05,.6,2.2),e.put(`sack`,-.05,.1,.9,.5);return}if(t.stage>=3){let n=.25,r=.4;e.put(`crate_open`,n,r,.72,.35);let i=zh[t.id];for(let t=0;t<5;t++){let a=t/5*W,o=t===0?0:.03;K(e.add(q(new ms(.03,1),n+Math.cos(a)*o,.085+(t===0?.022:0),r+Math.sin(a)*o,1,.85,1,e.rng()*W),i[0],i[1]),.25)}}let o=t.id===`pumpkin`||t.id===`berry`?4:5;n.forEach((n,r)=>{for(let i=0;i<o;i++)(r!==0||i!==0)&&Rh(e,t.id,t.stage,-.24+i*.48/(o-1)+(e.rng()-.5)*.015,n+(e.rng()-.5)*.012)})}function Hh(e,t,n){n>=2&&uh(e,t*.86,t*.72,.36,-.6,eh.teal),n>=3&&(uh(e,-t*.9,t*.66,.36,.6,eh.gold),ch(e,t*.2,t*1.02,.27,0))}function Uh(e){e.put(`scaffolding`,0,0,.27,0);for(let[t,n]of[[-.3,-.32],[.31,-.32],[.31,.31],[-.3,.31]])e.add(X(.02,.15,.02,t,.075,n),Hm,Um),K(e.add(q(new gs(.024,0),t,.17,n),`#ffcf70`),1.3)}var Wh={campfire:hh,mushroom:gh,well:_h,cabin:vh,cottage:bh,windmill:Ch,treehouse:Th,tower:Eh,market:Dh,forge:Oh,tavern:kh,sawmill:Ah,site:Uh,watermill:jh,archery:Mh,lodge:Nh};function Gh(e,t,n,r,i={}){let a=new nh(e,t,.03),o=e.length,s=rp().build;return n===`garden`?s.garden(a,i.crop??null):s.landmarks[n](a),n!==`site`&&(i.lvl??1)>1&&s.honours(a,n===`garden`?.44:Vm[n],i.lvl),rh(a,o,n===`garden`?1.28:1,r,0,0)}var Kh=()=>rp().build.homeNames,qh=e=>e<=0?0:e<=2?1:e<=4?2:e<=6?3:e===7?4:5,Jh=[{r:.45,door:[0,.36]},{r:.42,door:[0,.27]},{r:.46,door:[.07,.4]},{r:.5,door:[.15,.42]},{r:.52,door:[.15,.42]},{r:.5,door:[0,.46]}];function Yh(e,t,n,r,i,a){let o=new nh(e,t,.025),s=e.length;return rh(o,s,rp().build.home(o,qh(n))||1,a,r,i)}function Xh(e,t){if(t===0){let{H:t}=ph(e);ch(e,-.3,.22,.3,1.4),dh(e,Y(0,t+.04,0),Y(-.3,.3,.22),5,.05),sh(e,.31,.2,.22,-.9,.038),e.put(`barrel`,-.33,-.05,.6,.4),e.put(`crate_small`,-.3,-.17,.72,.5),e.put(`sack`,-.23,-.27,.85,2.2),e.put(`lumber`,.3,-.16,.3,1.2)}else if(t===1){let t=.62;e.put(`home_a`,0,0,t,0,th(eh.thatch)),e.chimney(`home_a`,J.stoneDark,0,0,t),e.put(`barrel`,-.33,.13,.62,.3),e.put(`crate_small`,-.34,0,.72,-.2),e.put(`lumber`,.36,-.08,.38,Math.PI/2+.12),ch(e,-.22,.34,.27,.9)}else if(t===2){let t=.6;e.put(`home_b`,0,0,t,0,th(eh.terracotta)),e.chimney(`home_b`,J.stoneDark,0,0,t),fh(e,-.4,.4,-.4,-.02,.37),fh(e,-.4,.4,-.13,.4,.37),e.put(`barrel`,-.33,-.2,.62),e.put(`wheelbarrow`,.37,-.16,.6,2.7),e.put(`sack`,.36,0,.95,.6),ch(e,.3,.36,.28,-1.3)}else if(t===3||t===4){let n=t===4?eh.teal:eh.terracotta,r=.62,i=-.31,a=.5;e.put(`home_b`,.1,0,r,0,th(n)),e.chimney(`home_b`,J.stoneDark,.1,0,r),e.put(`home_a`,i,.04,a,0,th(n)),e.chimney(`home_a`,J.stoneDark,i,.04,a,0,.8),fh(e,-.5,.42,-.14,.42,.36,`fence_stone`),uh(e,-.1,.44,.46,0,n),e.put(`barrel`,.34,-.3,.62),ch(e,.36,.38,.28,-1.3),t===4&&(e.put(`tower_a`,-.3,-.34,.4,0,th(n)),uh(e,-.52,.44,.46,0,n),e.put(`crate`,.36,-.18,.55,.4))}else{let t={style:{[J.roof]:eh.gold}};e.put(`castle`,0,0,.37,0,t);for(let t of[-1,1])uh(e,t*.2-.045,.5,.5,0,eh.gold),ch(e,t*.36,.44,.28,-t*1.3);e.put(`barrel`,.4,.1,.62),e.put(`crate`,.41,-.03,.55,.3)}return t===0?1.18:1}function Zh(e,t,n,r,i,a,o=1){let s=new nh(e,t,.03),c=e.length;rp().build.decor(s,n),rh(s,c,1.5*o,a,r,i)}function Qh(e,t){let n=e.rng;if(t===`cairn`){let t=0;for(let r of[.075,.056,.04,.026])e.add(q(Vf(r,n,2,.12,.5),(n()-.5)*.015,t+r*.55,(n()-.5)*.015,1.1,.72,1,n()*W),Gm,Km),t+=r*1.02}else if(t===`lamp`)e.add(q(new V(.028,.036,.04,10),0,.02,0),`#5a5f66`,`#7a808a`),e.add(q(new V(.011,.014,.36,8),0,.2,0),`#4a4f58`,`#7a808a`),e.add(q(new V(.04,.04,.012,8),0,.385,0),`#4a4f58`),K(e.add(q(new V(.03,.024,.066,8),0,.425,0),`#ffc860`,`#fff0b0`),2),e.add(q(new Ja(.05,.045,8),0,.48,0),`#3c4048`,`#5a5f66`),e.add(q(new ms(.01,1),0,.508,0),`#5a5f66`);else if(t===`bench`){for(let t of[-.026,.004,.034])e.add(X(.27,.014,.026,0,.088,t),Hm,Um);for(let t of[.135,.172])e.add(X(.27,.028,.014,0,t,-.046),Hm,Um);for(let t of[-1,1])e.add(X(.02,.085,.085,t*.115,.042,-.004),Wm,Hm),e.add(X(.02,.11,.018,t*.115,.14,-.05),Wm,Hm),e.add(X(.022,.012,.09,t*.115,.108,-.006),Wm,Hm)}else if(t===`hive`){e.add(X(.15,.014,.15,0,.07,0),Wm,Hm);for(let t of[-1,1])e.add(X(.016,.07,.11,t*.055,.035,0),Wm);e.add(q(Kp([[0,0],[.07,0],[.078,.02],[.07,.045],[.076,.065],[.066,.09],[.07,.11],[.056,.135],[.058,.152],[.036,.18],[.014,.196],[0,.2]],16),0,.077,0),`#d99a2e`,`#fbdc74`);let t=new V(.015,.015,.02,10);t.rotateX(Math.PI/2),e.add(q(t,0,.112,.07),`#4a3018`)}else if(t===`birdhouse`){e.add(q(new V(.01,.013,.34,8),0,.17,0),Wm,Hm),e.add(X(.09,.09,.085,0,.385,0),qm,Jm);for(let t of[-1,1])e.add(q(new Ka(.085,.012,.11),t*.028,.452,0,1,1,1,0,0,-t*.72),`#3f8a9a`,`#74c0c8`);let t=new V(.017,.017,.02,10);t.rotateX(Math.PI/2),e.add(q(t,0,.392,.036),`#4a3018`),e.add(X(.008,.008,.04,0,.358,.058),Wm)}else if(t===`flowerbed`){e.add(X(.28,.045,.17,0,.022,0),Hm,Um),e.add(X(.25,.012,.14,0,.046,0),`#6a4630`);let t=[`#ff9db2`,`#ffd25e`,`#ffffff`,`#bba7ff`,`#ff8e60`,`#f2667a`];for(let r=0;r<8;r++){let i=-.1+r%4*.066+(n()-.5)*.02,a=(r<4?-.035:.035)+(n()-.5)*.02,o=.05+n()*.04;e.add(q(new V(.004,.004,o,4),i,.05+o/2,a),`#4f9a48`,void 0,1.2),e.add(q(new ms(.022,1),i,.055+o,a,1,.7,1),t[Math.floor(n()*t.length)],void 0,1.2)}}else t===`signpost`?(e.add(q(new V(.012,.016,.36,8),0,.18,0),Wm,Hm),e.add(X(.17,.045,.014,.05,.3,.012),Um,`#ecc890`),e.add(X(.15,.045,.014,-.04,.235,-.012,.5),Hm,Um),e.add(q(new ms(.016,1),0,.368,0),Wm,Hm)):(e.put(`barrel`,-.06,0,.62),e.put(`barrel`,.06,.03,.52,.8),e.put(`crate_small`,.005,-.1,.62,.3))}var $h=e=>rp().build.spinner(e),eg={landmarks:Wh,garden:Vh,honours:Hh,home:Xh,homeNames:[`Camp`,`Hut`,`Hut`,`Cottage`,`Cottage`,`House`,`House`,`Manor`,`Keep`],decor:Qh,spinner:e=>e===`windmill`?{parts:wh(),y:Sh.y,z:Sh.z,axis:`z`,speed:-.9}:null},tg=(e,t,n)=>new z(e,t,n),ng=(e,t)=>e[Math.floor(t()*e.length)],rg=e=>({dark:e[0],light:e[1]}),ig=(e,t,n=0)=>e.push(n?K(t,n):t);function ag(e,t,n,r,i,a,o){let s=Hf(.1*i,t,0,.3,.2);q(s,n,.02*i,r,1.15,.7,1,t()*W),e.push(G(s,a[0],0,t,.06,o??a[1],void 0,U.rock))}function og(e,t,n,r,i,a){let o=0;for(let[s,c]of[[.11,.05],[.085,.045],[.06,.035]]){let l=Hf(s*i,t,0,.22,.4);if(q(l,n+(t()-.5)*.03*i,o+c*i*.5,r+(t()-.5)*.03*i,1.15,c/s,1,t()*W),e.push(G(l,a[0],0,t,.06,a[1],void 0,U.rock)),o+=c*i*.8,t()<.3)break}}function sg(e,t,n,r,i,a,o,s=.34){let c=Hf(.06*i,t,1,.2,.5);q(c,n,.035*i,r,s/.12*1,.8,.95,a),e.push(G(c,o[0],0,t,.06,o[1],void 0,U.rock))}function cg(e,t,n,r,i,a={}){let o=(a.n??5)+Math.floor(t()*4),s=a.h??.12;for(let c=0;c<o;c++){let l=c/o*W+t(),u=s+t()*s*1.1,d=new Ja(a.w??.024,u,3);d.scale(1,1,.45),d.translate(0,u/2,0),d.rotateZ(-((a.lean??.15)+t()*.35)),d.rotateY(-l),d.translate(n+Math.cos(l)*.02,0,r+Math.sin(l)*.02),ig(e,G(d,i[0],a.sway??1.6,t,.05,i[1]),a.glow)}}function lg(e,t,n,r,i,a,o,s=0,c=.4){let l=rg(a),u=[0,.26*i];Wp(e,t,n,.105*i,r,.15*i,l,u,c,.85);let d=t()*W;for(let a=0;a<2;a++){let o=d+a*(2.2+t()*.8);Wp(e,t,n+Math.cos(o)*.12*i,.07*i,r+Math.sin(o)*.12*i,(.095+t()*.02)*i,l,u,c,.85,0)}if(o&&t()<.6){let a=ng(o,t);for(let o=0;o<7;o++){let o=t()*W,l=new gs(.02*i,0);q(l,n+Math.cos(o)*.16*i,(.08+t()*.12)*i,r+Math.sin(o)*.16*i,1,1,1,t()*W),ig(e,G(l,a,c,t,.04),s)}}}function ug(e,t,n,r,i,a,o={}){let s=o.n??7;for(let c=0;c<s;c++){let l=c/s*W+t()*.4,u=(o.len??.3)*i,d=new Ja((o.w??.042)*i,u,3);d.scale(1,1,o.flat??.3),d.translate(0,u/2,0),d.rotateZ(-((o.droop??.8)+t()*.4)),d.rotateY(-l),d.translate(n,.01,r),ig(e,G(d,a[0],o.sway??1.4,t,.05,a[1]),o.glow)}}function dg(e,t,n,r,i,a,o,s={}){let c=s.glow??0,l=s.centre??`#f7b82c`,u=s.sway??1.4,d=t(),f=(.13+t()*.09)*a;e.push(G(q(new V(.008,.011,f,3),n,f/2,r),o[0],u,t,.04,o[1])),d<.4?(ig(e,G(q(new V(.056*a,.044*a,.016,6),n,f,r,1,1,1,t()*W),i,u,t,.05),c),ig(e,G(q(new V(.022*a,.022*a,.026,5),n,f+.009,r),l,u,t,.04),c)):d<.75?ig(e,G(q(new Ja(.044*a,.085*a,5),n,f+.035*a,r,1,1,1,t()*W,Math.PI),i,u,t,.06),c):ig(e,G(q(new gs(.052*a,0),n,f+.014,r,1,.75,1,t()*3),i,u,t,.06),c);for(let i=0;i<2;i++){if(t()>.75)continue;let i=new Ja(.024,.1,3);i.scale(1,1,.3),i.translate(0,.05,0),i.rotateZ(-.9),i.rotateY(t()*W),i.translate(n,0,r),e.push(G(i,o[0],Math.min(1,u),t,.04,o[1]))}}function fg(e,t,n,r,i,a,o,s,c=0,l=0,u=0,d=6){let f=Uf([[a*.72,0],[a,o*.14],[a*.84,o*.7],[0,o]],d);f.rotateY(t()*W),f.rotateZ(-l),f.rotateY(-u),f.translate(n,r,i),ig(e,G(f,s[0],0,t,.05,s[1]),c)}function pg(e,t,n,r,i,a,o=0,s=4,c=0){fg(e,t,n,c,r,.045*i,(.26+t()*.08)*i,a,o,(t()-.5)*.2,t()*W);let l=t()*W;for(let u=0;u<s;u++){let d=l+u/s*W+(t()-.5)*.5,f=(.035+t()*.03)*i;fg(e,t,n+Math.cos(d)*f,c,r+Math.sin(d)*f,(.022+t()*.016)*i,(.1+t()*.1)*i,a,o,.35+t()*.4,d)}}function mg(e,t,n,r,i,a,o,s=0){let c=Wf(Kp([[i*1.3,0],[i*1.04,.045],[i*.86,.05],[i*.66,.014]],11),.1,t);e.push(G(q(c,n,0,r,1,1,1,t()*W),a[0],0,t,.05,a[1],void 0,U.rock)),ig(e,G(q(new V(i*.7,i*.7,.012,11),n,.012,r),o,0,t,.04),s)}function hg(e,t,n,r,i,a=1.3){for(let o=0;o<7;o++){let s=o/7*W+.3,c=Hf(.05,t,0,.25,.3);if(q(c,Math.cos(s)*n,.03,Math.sin(s)*n,.85,1.25+t()*.5,.85,t()*W),e.push(G(c,r[0],0,t,.05,r[1],void 0,U.rock)),o%2==0){let r=s+W/7/2,o=new gs(.03,0);q(o,Math.cos(r)*n,.045,Math.sin(r)*n,.6,1.9,.6,t()*W,(t()-.5)*.5),e.push(K(G(o,i[0],0,t,.03,i[1]),a))}}}function gg(e,t,n,r,i,a,o,s,c){e.push(G(q(Wf(new V(i*1.2,i*1.28,.05,9),.12,t),n,.022,r),a[0],0,t,.03,a[1],void 0,U.rock)),e.push(K(G(q(new V(i,i,.012,9),n,.05,r),o[0],0,t,.03,o[1]),s));for(let a=0;a<5;a++){let a=t()*W;ag(e,t,n+Math.cos(a)*i*1.15,r+Math.sin(a)*i*1.15,.4+t()*.3,c)}}function _g(e,t,n,r,i,a,o,s=.35,c=0){ig(e,G(qf(n,r,i,a,5),o[0],s,t,.06,o[1],void 0,U.bark),c)}function vg(e,t,n,r,i,a,o,s=1.4,c=0,l=1){let u=new gs(a,0);q(u,n,r,i,1,l,1,t()*W),e.push(K(G(u,o,c,t,.04),s))}var yg={grove:[`oak`,`spruce`,`birch`,`cherry`,`maple`,`cypress`],mars:[`saguaro`,`redpine`,`copper`,`bloom`,`joshua`,`bottle`],moon:[`selenite`,`frost`,`amber`,`opal`,`rose`,`prism`],empire:[`palm`,`stonepine`,`acacia`,`almond`,`olive`,`cypress`],frontier:[`glowcap`,`pod`,`lantern`,`bloom`,`coral`,`frond`]};function bg(e){let t=y.indexOf(e);return t<0?null:yg[rp().id][t]}var xg={grove:[`Oak`,`Spruce`,`Birch`,`Cherry`,`Maple`,`Cypress`],mars:[`Saguaro`,`Red pine`,`Copper tree`,`Bloom tree`,`Joshua tree`,`Bottle tree`],moon:[`Selenite`,`Frost crystal`,`Amber crystal`,`Opal`,`Rose crystal`,`Prism`],empire:[`Palm`,`Stone pine`,`Acacia`,`Almond`,`Olive`,`Cypress`],frontier:[`Glowcap`,`Pod tree`,`Lantern tree`,`Bloom`,`Coral`,`Frond`]},Sg={grove:{flower:`Flowers`,mushroom:`Toadstools`,bush:`Bush`,pond:`Pond`},mars:{flower:`Desert flowers`,mushroom:`Cactus`,bush:`Scrub`,pond:`Spring`},moon:{flower:`Lamp flowers`,mushroom:`Glow crystal`,bush:`Crystal cluster`,pond:`Pool`},empire:{flower:`Flowers`,mushroom:`Amphora`,bush:`Shrub`,pond:`Pool`},frontier:{flower:`Glow flowers`,mushroom:`Glow puff`,bush:`Coral bush`,pond:`Pool`}};function Cg(e){let t=y.indexOf(e);return t>=0?xg[rp().id][t]:e===`flower`||e===`mushroom`||e===`bush`||e===`pond`?Sg[rp().id][e]:Zf[e].name}var wg=e=>{let t=rp().pal.flowers;return t[(e%t.length+t.length)%t.length]},Tg=[`cairn`,`signpost`,`lamp`],Eg=[.45,.8,1.1,1.1],Dg=e=>wg(e.c),Og=(e,t)=>Math.min(Eg[e.tier],t);function kg(e,t=9){if(e.mon)return e.mon===4?.26:.2;let n=bg(e.sig);return n?Tm(n)*Og(e,t)*.8:e.sig===`flower`?.1+.015*e.tier:e.sig===`mushroom`?.1+.025*e.tier:e.sig===`bush`?.13+.03*e.tier:e.sig===`pond`?(.12+.025*e.tier)*1.35:.17+.025*e.tier}function Ag(e,t,n,r,i,a,o,s=1){let c=t()*W;for(let l=0;l<a;l++){let u=c+l/a*W+(t()-.5)*.5,d=i*(.9+t()*.25);Mm(e,t,n+Math.cos(u)*d,r+Math.sin(u)*d,o,s)}}function jg(e,t,n,r,i,a){let o=t()*W;for(let s=0;s<6;s++){let c=o+s/6*W;s%2?vg(e,t,n+Math.cos(c)*i,.07,r+Math.sin(c)*i,.04,a,1.8,0,1.6):Im(e,t,n+Math.cos(c)*i,r+Math.sin(c)*i,.55+t()*.2)}}function Mg(e,t,n,r,i,a=1,o=9){let s=Dg(n),c=kg(n,o);if(n.mon){if(n.mon===4){let n=e.length;Dm(e,t,.6*(.8+.2*a),!1,6);for(let t=n;t<e.length;t++)e[t].translate(r,0,i)}else Zh(e,t,Tg[n.mon-1],r,i,t()*W,1.25);Ag(e,t,r,i,c+.03,5,s,1.15),jg(e,t,r,i,c+.09,s);return}let l=n.p===void 0?1:.45+.55*Math.min(1,Math.max(0,n.p)),u=bg(n.sig);if(u)Em(e,t,u,r,i,Og(n,o)*a*l);else if(n.sig===`flower`){let a=Math.max(2,Math.round((3+n.tier*2)*l));Mm(e,t,r,i,s,1.6+n.tier*.15),Ag(e,t,r,i,.06+n.tier*.012,a-1,s,1.3+n.tier*.12)}else if(n.sig===`mushroom`){let a=(1.9+n.tier*.5)*l;Nm(e,t,r,i,a,s),n.tier>=1&&Nm(e,t,r+.07,i+.04,a*.6,s),n.tier>=2&&Nm(e,t,r-.05,i+.07,a*.45,s)}else n.sig===`bush`?Am(e,t,r,i,(.8+n.tier*.25)*(.7+.3*a)*l,!1):n.sig===`pond`?Rm(e,t,r,i,(.12+n.tier*.025)*(.6+.4*l)):Zh(e,t,n.sig,r,i,t()*W,(1.05+n.tier*.15)*(.75+.25*l));n.sig!==`flower`&&n.p===void 0&&Ag(e,t,r,i,c+.02,1+Math.min(n.tier,2),s),n.tier===3&&n.p===void 0&&jg(e,t,r,i,c+.07,s)}var Ng=e=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`,Pg=e=>`<svg class="gi" viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`,Fg={acorn:Pg(`<path d="M12 22.2c-4.4-2.3-6.8-5.8-6.8-9.9h13.6c0 4.1-2.4 7.6-6.8 9.9z" fill="#e9a93f"/><path d="M12 22.2c-1.1-.6-2.1-1.2-2.9-2 3.900.5 6.800-2.300 7.300-7.900h2.400c0 4.100-2.400 7.600-6.800 9.900z" fill="#c8802a"/><path d="M8.300 14.200c.2 1.700.9 3.200 2 4.400" stroke="#ffe3a0" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M3.900 11.300C3.900 7.600 7.500 4.900 12 4.900s8.100 2.700 8.100 6.400c0 .9-.7 1.500-1.500 1.500H5.400c-.8 0-1.500-.6-1.500-1.500z" fill="#8a5a34"/><path d="M6.300 9.800c1-1.700 3.100-2.800 5.700-2.800" stroke="#b88452" stroke-width="1.400" stroke-linecap="round" fill="none"/><path d="M12 4.900V3.400c0-.8.600-1.400 1.400-1.400" stroke="#6b4228" stroke-width="1.900" stroke-linecap="round" fill="none"/>`),dew:Pg(`<path d="M12 2.200s7.200 7.400 7.200 12.500a7.200 7.200 0 0 1-14.400 0C4.800 9.600 12 2.200 12 2.200z" fill="#55bdf0"/><path d="M12 2.200s7.200 7.400 7.200 12.500A7.200 7.200 0 0 1 12 21.900z" fill="#2f95d4"/><path d="M8.600 14.400c0-1.800 1-3.700 2.200-5.100" stroke="#fff" stroke-opacity=".8" stroke-width="1.700" stroke-linecap="round" fill="none"/>`),ore:Pg(`<path d="M4 14.500 7.500 6.500l6-3 6 4.500 1 7.500-5 5.500-8.500-.5z" fill="#c9643c"/><path d="M4 14.500 7.500 6.500l6-3-1 8z" fill="#ea9463"/><path d="M13.500 3.500l6 4.500 1 7.500-8-4z" fill="#ad4d2b"/><path d="M12.500 11.500l8 4-5 5.500z" fill="#8a3a20"/><path d="M7.700 10.300l1.700-2.900" stroke="#ffdcc0" stroke-width="1.500" stroke-linecap="round" fill="none"/><circle cx="9.800" cy="16.300" r="1.100" fill="#5fd8cf"/><circle cx="16.300" cy="10.200" r=".9" fill="#5fd8cf"/>`),ice:Pg(`<path d="M3.600 14.400 6.300 11.200l2.500 3v6.800H4.200z" fill="#86cdf5"/><path d="M15.400 14.600 18.200 12l2.400 3.100-.6 5.900h-4.600z" fill="#3f93d2"/><path d="M12 2.200l4.600 5.400-1 13.400H8.400l-1-13.400z" fill="#aee1fb"/><path d="M12 2.200l4.600 5.400-1 13.400H12z" fill="#4fa8e2"/><path d="M10 8.600v7" stroke="#fff" stroke-opacity=".9" stroke-width="1.500" stroke-linecap="round" fill="none"/>`),moonstone:Pg(`<path d="M6.500 4h11L22 9.500 12 21.500 2 9.500z" fill="#b9c9fb"/><path d="M6.500 4h11L22 9.500H2z" fill="#e3ebff"/><path d="M6.500 4l2 5.500H2z" fill="#a9bbf5"/><path d="M17.500 4 22 9.500h-6.500z" fill="#8094e0"/><path d="M2 9.500h6.500l3.500 12z" fill="#93a6ea"/><path d="M15.500 9.500H22l-10 12z" fill="#6176cc"/><path d="M10.200 6.200h3.200" stroke="#fff" stroke-width="1.400" stroke-linecap="round" fill="none"/>`),helium:Pg(`<rect x="9.500" y="2.200" width="5" height="4.600" rx="1.200" fill="#c8d0e6"/><rect x="6.500" y="5.600" width="11" height="16" rx="3.600" fill="#8ea2ff"/><path d="M12 5.600h1.900a3.600 3.600 0 0 1 3.600 3.600v8.800a3.600 3.600 0 0 1-3.600 3.600H12z" fill="#6478e0"/><rect x="9.300" y="10" width="5.400" height="7.600" rx="2.700" fill="#eaf6ff"/><path d="M8.600 9.400v4.200" stroke="#fff" stroke-opacity=".7" stroke-width="1.300" stroke-linecap="round" fill="none"/>`),gold:Pg(`<circle cx="12" cy="12" r="9.500" fill="#f0b23a"/><path d="M18.700 5.300A9.500 9.500 0 0 1 5.300 18.700z" fill="#d9952a"/><circle cx="12" cy="12" r="6.600" fill="#ffd869"/><path d="M12 7.900l3.900 6.700H8.100z" fill="#cf8c22"/><path d="M12 7.900l3.900 6.700H12z" fill="#b87618"/><path d="M5.900 9.300a6.600 6.600 0 0 1 3.300-3.400" stroke="#fff6cf" stroke-width="1.400" stroke-linecap="round" fill="none"/>`),jar:Pg(`<path d="M8.500 3h7v2.200c0 1 .8 1.600 1.900 2.700 1.500 1.500 2.300 3.300 2.300 5.300 0 4.300-3.200 7.800-7.700 7.800s-7.700-3.500-7.700-7.800c0-2 .8-3.800 2.300-5.300 1.100-1.100 1.900-1.700 1.900-2.700z" fill="#45a8e0"/><path d="M12 3h3.500v2.200c0 1 .8 1.600 1.900 2.700 1.500 1.500 2.300 3.300 2.300 5.300 0 4.300-3.200 7.800-7.700 7.800z" fill="#2c84c4"/><rect x="7.300" y="2" width="9.400" height="2.600" rx="1.300" fill="#f0c25a"/><path d="M4.700 12h14.600" stroke="#f0c25a" stroke-width="1.600" fill="none"/><path d="M7.600 15.200c.3 1.300 1 2.400 2 3.200" stroke="#fff" stroke-opacity=".8" stroke-width="1.400" stroke-linecap="round" fill="none"/>`),alloy:Pg(`<path d="M7 6.500h10l2.500 5h-15z" fill="#a5f5e6"/><path d="M4.500 11.500h15l2 7.500h-19z" fill="#45bcab"/><path d="M15 11.500h4.500l2 7.500h-5z" fill="#2c9486"/><path d="M17 6.500l2.500 5H15l-1-5z" fill="#7fe0d0"/><path d="M8.300 9h4.400" stroke="#fff" stroke-width="1.400" stroke-linecap="round" fill="none"/>`),plasma:Pg(`<circle cx="12" cy="12" r="9.300" fill="#ff7ad8"/><path d="M18.600 5.400A9.300 9.300 0 0 1 5.400 18.600z" fill="#d653b8"/><circle cx="12" cy="12" r="5.200" fill="#ffc4ef"/><circle cx="12" cy="12" r="2.600" fill="#fff"/><path d="M6 9.200a6.600 6.600 0 0 1 3.100-3.300" stroke="#fff" stroke-opacity=".85" stroke-width="1.400" stroke-linecap="round" fill="none"/>`),lock:Ng(`<rect x="5" y="11" width="14" height="9.500" rx="2.500"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>`),bolt:Ng(`<path d="M13 3 5 14h6l-1 7 8-11h-6l1-7z"/>`),up:Ng(`<path d="M12 19V6M6 11l6-6 6 6"/>`),leaf:Ng(`<path d="M5 19C5 10 10.5 5 20 5c0 9.5-5.5 15-14 15"/><path d="M5 19l7.5-7.5"/>`),wave:Ng(`<path d="M2 10c2.4-2.8 4.8-2.8 7.2 0s4.8 2.8 7.2 0 3.9-2.6 5.6-1.2"/><path d="M2 16c2.4-2.8 4.8-2.8 7.2 0s4.8 2.8 7.2 0 3.9-2.6 5.6-1.2"/>`),pouch:Ng(`<rect x="4" y="7.5" width="16" height="9" rx="4.5"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>`),map:Ng(`<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4z"/><path d="M9 4v14M15 6v14"/>`),close:Ng(`<path d="M6 6l12 12M18 6 6 18"/>`),clock:Ng(`<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`),check:Ng(`<path d="m5 12.5 4.5 4.5L19 7.5"/>`),coin:Ng(`<circle cx="12" cy="12" r="8.5"/><path d="M14.6 9.6c-.6-.9-1.6-1.4-2.7-1.4-1.5 0-2.6.8-2.6 2s1 1.6 2.7 1.9 2.8.9 2.8 2.1-1.2 2-2.8 2c-1.2 0-2.2-.5-2.8-1.4M12 6.5v1.7M12 15.9v1.6"/>`),flame:Ng(`<path d="M12 3c1 3 5.5 5 5.5 10.5a5.5 5.5 0 0 1-11 0c0-2.2 1-3.8 2.2-4.8 0 2 .9 3.2 2.1 3.2 0-3.1-.9-5.3 1.2-8.9z"/>`),drop:Ng(`<path d="M12 3.5s6 6.4 6 10.8a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/>`),gear:Ng(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`),trash:Ng(`<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>`),plus:Ng(`<path d="M12 5v14M5 12h14"/>`),hammer:Ng(`<path d="m14.5 5.5 4 4-2.2 2.2-4-4z"/><path d="M13 9 4.5 17.5l2 2L15 11"/><path d="m12.3 7.7-1.6-1.6a3 3 0 0 0-3.4-.6"/>`),chevron:Ng(`<path d="m9 6 6 6-6 6"/>`),spark:Ng(`<path d="M12 3.5l2 5.6 5.5 2-5.5 2-2 5.6-2-5.6-5.5-2 5.5-2z"/>`),chevronUp:Ng(`<path d="m6 15 6-6 6 6"/>`),chevronDown:Ng(`<path d="m6 9 6 6 6-6"/>`),sprout:Ng(`<path d="M12 21v-8"/><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6z"/><path d="M12 11c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6z"/>`)};Fg.leaf,Fg.drop,Ng(`<path d="M12 19c-3-1.500-5-4.200-5-8 2.200.6 4 2 5 4 1-2 2.800-3.400 5-4 0 3.800-2 6.500-5 8z"/><path d="M12 15c-1-2.500-1-5.500 0-9 1 3.500 1 6.500 0 9z"/><path d="M3.500 13c1.500 3.500 4.500 5.600 8.500 6 4-.4 7-2.500 8.500-6"/>`),Ng(`<circle cx="14.500" cy="5" r="2"/><path d="M6 20l3.500-5 3 2.500V21"/><path d="M9.500 15l1.500-6 4 2.500 3.500-.5"/><path d="M11 9l-4 1-1.500 3"/>`),Ng(`<path d="M4 5.500C6.500 4.500 9.500 4.500 12 6v13c-2.500-1.500-5.500-1.500-8-.5z"/><path d="M20 5.500c-2.500-1-5.500-1-8 .5v13c2.500-1.500 5.500-1.500 8-.5z"/>`),Ng(`<path d="M8 4c1.700 0 3 1.800 3 4.500S10 13 8.500 13 6 11.200 6 8.500 6.300 4 8 4z"/><path d="M6.500 15.500h4c0 2-.8 3.500-2 3.500s-2-1.500-2-3.500z"/><path d="M16 8c-1.700 0-3 1.800-3 4.500s1 4.500 2.500 4.500S18 15.200 18 12.500 17.700 8 16 8z"/>`),Ng(`<path d="M6.500 8v8M3.500 10v4M17.500 8v8M20.500 10v4M6.500 12h11"/>`),Ng(`<circle cx="12" cy="4.500" r="2"/><path d="M12 8v7M12 15l-3 6M12 15l3 6M5 5l3.500 4.500L12 9l3.500.5L19 5"/>`),Ng(`<path d="M20 14.500A8.500 8.500 0 1 1 9.500 4a7 7 0 0 0 10.500 10.500z"/>`),Ng(`<circle cx="12" cy="12" r="4"/><path d="M12 2.500v2.500M12 19v2.500M2.500 12H5M19 12h2.500M5.300 5.300l1.800 1.800M16.900 16.900l1.800 1.800M5.300 18.700l1.800-1.800M16.900 7.100l1.800-1.800"/>`),Ng(`<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.800"/>`),Ng(`<path d="M4 20l1-4.500L16.500 4l3.500 3.500L8.500 19z"/><path d="M14 6.500l3.500 3.500"/>`),Ng(`<path d="M4 11.500 12 4l8 7.500"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>`),Ng(`<path d="M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 9.500h1.500a2.500 2.500 0 0 1 0 5H16"/><path d="M8.500 3v2M12 3v2"/>`),Ng(`<path d="M7 3h10l-1 6a4 4 0 0 1-8 0z"/><path d="M12 13v7M8.500 20h7"/>`),Ng(`<path d="M12 8c-1.500-1.500-3.500-1.500-5-.5C5 9 5 12.500 6.500 15.500 7.500 18 9 20 10.500 20c.6 0 1-.4 1.500-.4s.9.4 1.500.4c1.500 0 3-2 4-4.500C19 12.500 19 9 17 7.500c-1.500-1-3.500-1-5 .5z"/><path d="M12 8c0-2 1-3.500 3-4"/>`),Ng(`<rect x="7" y="3" width="10" height="18" rx="2.500"/><path d="M11 17.500h2"/>`),Ng(`<path d="M12 20s-7.500-4.500-7.500-10A4.300 4.300 0 0 1 12 7.500 4.300 4.300 0 0 1 19.500 10c0 5.500-7.500 10-7.500 10z"/>`),Ng(`<path d="M9 18V6l10-2v12"/><circle cx="6.500" cy="18" r="2.500"/><circle cx="16.500" cy="16" r="2.500"/>`),Ng(`<path d="M14 4l6 6-8.500 8.500-6-6z"/><path d="M5.500 12.500 4 20l7.500-1.500"/>`),Ng(`<path d="M7.500 4c1.500 0 2.500 1 4.500 1s3-1 4.500-1C18.500 4 20 5.800 20 8.500c0 3-1.500 4.500-2 7.500-.3 2-.8 4-2 4s-1.500-2-2-4c-.3-1-1-1.500-2-1.500s-1.700.5-2 1.500c-.5 2-.8 4-2 4s-1.700-2-2-4c-.5-3-2-4.500-2-7.500C4 5.800 5.500 4 7.500 4z"/>`),Ng(`<rect x="3" y="8.500" width="18" height="7" rx="3.500" transform="rotate(-45 12 12)"/><path d="M9.500 9.500l5 5"/>`),Ng(`<circle cx="6" cy="16" r="3.500"/><circle cx="18" cy="16" r="3.500"/><path d="M6 16l4-8h5l3 8M10 8H8M12.500 16 10 8"/>`),Fg.coin,Fg.clock,Fg.flame,Ng(`<path d="M12 3.500l2.600 5.400 5.900.8-4.300 4.100 1 5.900L12 16.900l-5.200 2.800 1-5.900L3.500 9.700l5.900-.8z"/>`),Fg.spark;function Ig(e){let t=1779033703^e.length;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),3432918353),t=t<<13|t>>>19;let n=t>>>0;return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Lg=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],Rg=[[0,0]],zg=0;function Bg(e){for(;Rg.length<=e;){let e=++zg,t=Lg[4][0]*e,n=Lg[4][1]*e;for(let r=0;r<6;r++)for(let i=0;i<e;i++)Rg.push([t,n]),t+=Lg[r][0],n+=Lg[r][1]}return Rg[e]}function Vg(e,t){return{x:1*Math.sqrt(3)*(e+t/2),z:1.5*t}}var Hg=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,Ug=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),Wg=e=>e*e*(3-2*e),Gg=e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2,Kg=e=>1-(1-e)**3;function qg(e,t,n,r,i,a,o){return[{h:0,...e},{h:4.6,...e},{h:6.2,...t},{h:8,...n},{h:12.5,...r},{h:17,...i},{h:19.4,...a},{h:20.9,...o},{h:24,...e}]}var Jg={top:`#070b1f`,hor:`#26305e`,bot:`#0d1230`,fog:`#1a2150`,sun:`#a9b8ff`,sunI:.9,hemiSky:`#5566a8`,hemiGround:`#3a3462`,hemiI:.9,night:1},Yg=[{h:0,...Jg},{h:4.6,...Jg},{h:6.2,top:`#36468a`,hor:`#f3a68a`,bot:`#7d74b4`,fog:`#c19aa6`,sun:`#ffc6a0`,sunI:1.5,hemiSky:`#b6c0f0`,hemiGround:`#8f7a8e`,hemiI:1.1,night:.35},{h:8,top:`#9ccfe6`,hor:`#fdeed2`,bot:`#cfe6d8`,fog:`#e4ece2`,sun:`#fff0d6`,sunI:2.6,hemiSky:`#d2e6ff`,hemiGround:`#b0a088`,hemiI:1,night:0},{h:12.5,top:`#8ccbe8`,hor:`#eef6e4`,bot:`#c6e4d6`,fog:`#e0eee4`,sun:`#fff8ea`,sunI:3,hemiSky:`#dbeeff`,hemiGround:`#b4a68a`,hemiI:1.05,night:0},{h:17,top:`#8fc0e0`,hor:`#fbe8c8`,bot:`#c8dcd4`,fog:`#ecdfc8`,sun:`#ffeed2`,sunI:2.6,hemiSky:`#d8e2ff`,hemiGround:`#b29a80`,hemiI:.95,night:0},{h:19.4,top:`#3e4a8e`,hor:`#f59b74`,bot:`#9a78ac`,fog:`#c38c8c`,sun:`#ffd2b4`,sunI:1.5,hemiSky:`#c4cbf2`,hemiGround:`#8a6e86`,hemiI:1.15,night:.3},{h:20.9,top:`#141b46`,hor:`#4b4682`,bot:`#29265e`,fog:`#2b2c5c`,sun:`#aab6ff`,sunI:1,hemiSky:`#5562a0`,hemiGround:`#38325e`,hemiI:.85,night:.85},{h:24,...Jg}],Xg=()=>({top:new B,hor:new B,bot:new B,fog:new B,sun:new B,sunI:1,hemiSky:new B,hemiGround:new B,hemiI:1,night:0,sunDir:new z(0,1,0)}),Zg=new B,Qg=new B,$g=(e,t,n,r)=>e.copy(Zg.set(t)).lerp(Qg.set(n),r),e_=new z(-.45,.8,.4).normalize(),t_=new z;function n_(e,t){e=(e%24+24)%24;let n=rp().sky.kfs,r=0;for(;r<n.length-2&&n[r+1].h<=e;)r++;let i=n[r],a=n[r+1],o=Wg((e-i.h)/(a.h-i.h));$g(t.top,i.top,a.top,o),$g(t.hor,i.hor,a.hor,o),$g(t.bot,i.bot,a.bot,o),$g(t.fog,i.fog,a.fog,o),$g(t.sun,i.sun,a.sun,o),$g(t.hemiSky,i.hemiSky,a.hemiSky,o),$g(t.hemiGround,i.hemiGround,a.hemiGround,o),t.sunI=i.sunI+(a.sunI-i.sunI)*o,t.hemiI=i.hemiI+(a.hemiI-i.hemiI)*o,t.night=i.night+(a.night-i.night)*o;let s=Math.min(1,Math.max(0,(e-5.5)/15))*Math.PI;return t_.set(Math.cos(s)*.85,.28+Math.sin(s)*.7,.55).normalize(),t.sunDir.copy(t_).lerp(e_,t.night).normalize(),t}var r_=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,i_=`
uniform vec3 uTop;
uniform vec3 uHor;
uniform vec3 uBot;
uniform vec3 uSun;
uniform vec3 uSunDir;
uniform float uNight;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = y > 0.0
    ? mix(uHor, uTop, pow(clamp(y, 0.0, 1.0), 0.55))
    : mix(uHor, uBot, pow(clamp(-y, 0.0, 1.0), 0.45));
  float s = max(dot(d, normalize(uSunDir)), 0.0);
  float disc = smoothstep(0.9993, 0.9997, s);
  col += uSun * (pow(s, 10.0) * 0.22 + pow(s, 90.0) * 0.35) * (1.0 - uNight * 0.5);
  col = mix(col, uSun * 1.25, disc * (0.85 - uNight * 0.15));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,a_=[`#a08458`,`#ecdcb4`],o_=[`#b89866`,`#f2dfb8`],s_=[`#d2c6ac`,`#fffaf0`],c_=[`#7a4e26`,`#dca24e`],l_=[`#c8881a`,`#ffe07a`],u_=[`#a8502c`,`#ea9a62`],d_=[`#dcc49a`,`#fff4dc`],f_=[`#5e3820`,`#a86a3a`];Cf(U.rock,...a_),Cf(U.stone,...o_,...s_),Cf(U.plaster,...d_),Cf(U.wood,...f_),Cf(U.metal,...c_,...l_);var p_=[`#e47a4e`,`#a4402a`],m_=[`#5aa8dc`,`#27589a`],h_=[`#ffdc6e`,`#c8861a`],g_=[`#b4c880`,`#5c8048`],__=e=>({style:{[J.roof]:e}}),v_={[J.plaster]:[`#fff4dc`,`#dcc296`],[J.stone]:[`#f2dfb8`,`#b89866`],[J.stoneDark]:[`#c8a878`,`#8a6a44`],[J.woodPale]:[`#dcaa6e`,`#9a6a3a`],[J.wood]:[`#c0905c`,`#7e5632`],[J.roof]:p_,[J.cloth]:[`#fff4d8`,`#d8c090`],18:[`#e6d0a0`,`#9a7c4e`]},y_=[{dark:`#3f8a3a`,light:`#b4da6c`},{dark:`#4a9040`,light:`#c6e27a`}],b_=[{dark:`#6a8a62`,light:`#ccdaaa`},{dark:`#5f845a`,light:`#bace9a`}],x_=[{dark:`#2a6248`,light:`#6aa870`},{dark:`#356a44`,light:`#80b06a`}],S_=[{dark:`#3a7a4a`,light:`#9aca72`},{dark:`#42804a`,light:`#a8d07a`}],C_=[{dark:`#8a9a3a`,light:`#e2de7c`},{dark:`#9aa040`,light:`#ece68a`}],w_=[{dark:`#4f8a3a`,light:`#c2da6c`},{dark:`#5a9040`,light:`#cce078`}],T_=[{dark:`#f0b8c8`,light:`#fffafc`},{dark:`#f4c8b0`,light:`#fff8f0`}],E_=[{dark:`#e0508a`,light:`#ffc0d8`},{dark:`#e86a9a`,light:`#ffd0e0`}],D_={dark:`#8a6a48`,light:`#d2b28a`},O_={dark:`#6a5a48`,light:`#b4a48c`};function k_(e,t,n,r,i,a){let o=t()*W,s=Hp(e,t,n,r,(.78+t()*.2)*i,.05*i,.036*i,D_,.2*i,o,.25),c=(n,r,o,c)=>{let l=new Ja(o*i,r*i,4);l.scale(1.5,1,.3),l.rotateY(Math.PI/2),l.translate(0,r*i/2,0),l.rotateZ(-c),l.rotateY(-n),l.translate(s.x,s.y-.01*i,s.z),e.push(G(l,a.dark,1.2,t,.05,a.light))},l=t()*W;for(let e=0;e<8;e++)c(l+e/8*W+t()*.3,.42+t()*.06,.07,1+t()*.3);for(let e=0;e<5;e++)c(l+e/5*W+.4,.34,.06,1.75+t()*.2);for(let e=0;e<3;e++)c(l+e/3*W+.9,.3,.055,.35+t()*.2);for(let n=0;n<3;n++){let n=t()*W;e.push(G(q(new ms(.028*i,0),s.x+Math.cos(n)*.04*i,s.y-.06*i,s.z+Math.sin(n)*.04*i),`#c8642a`,1,t,.05,`#f0a04a`))}}function A_(e,t,n,r,i,a){let o=t()*W,s=Hp(e,t,n,r,.4*i,.085*i,.05*i,O_,.07*i,o,.7);for(let n=0;n<2;n++){let r=o+n*Math.PI+.6+(t()-.5)*.4;Up(e,t,Y(s.x,s.y-.05*i,s.z),Y(s.x+Math.cos(r)*.17*i,.56*i,s.z+Math.sin(r)*.17*i),.036*i,.02*i,O_)}Gp(e,t,Y(s.x,.66*i,s.z),.36*i,a,{n:5,sy:.62})}function j_(e,t,n,r,i,a){let o=t()*W,s=Hp(e,t,n,r,.84*i,.055*i,.036*i,Sm.red,.09*i,o,.3);for(let n=0;n<3;n++){let r=o+n/3*W+t()*.5;Up(e,t,Y(s.x,s.y-.12*i,s.z),Y(s.x+Math.cos(r)*.2*i,s.y+.02*i,s.z+Math.sin(r)*.2*i),.024*i,.014*i,Sm.red)}Gp(e,t,Y(s.x,s.y+.07*i,s.z),.4*i,a,{n:5,sy:.42,cap:!1})}function M_(e,t,n,r,i,a){let o=t()*W,s=Hp(e,t,n,r,.46*i,.065*i,.042*i,Sm.brown,.1*i,o,.4),c=.7*i;for(let n=0;n<3;n++){let r=o+n/3*W+t()*.4;Up(e,t,Y(s.x,s.y-.04*i,s.z),Y(s.x+Math.cos(r)*.24*i,c-.03*i,s.z+Math.sin(r)*.24*i),.03*i,.016*i,Sm.brown)}Gp(e,t,Y(s.x,c,s.z),.45*i,a,{n:6,sy:.3,cap:!1})}function N_(e,t,n,r,i,a){xm.linden(e,t,n,r,i,a);for(let a=0;a<6;a++){let a=t()*W,o=-.3+t()*1.2,s=.33*i;e.push(G(q(new ms(.034*i,0),n+Math.cos(a)*Math.cos(o)*s,.84*i+Math.sin(o)*s,r+Math.sin(a)*Math.cos(o)*s),`#c82a34`,1,t,.05,`#f2604a`))}}var P_={palm:(e,t,n,r,i)=>k_(e,t,n,r,i,ng(y_,t)),olive:(e,t,n,r,i)=>A_(e,t,n,r,i,ng(b_,t)),cypress:(e,t,n,r,i)=>xm.cypress(e,t,n,r,i,ng(x_,t)),cedar:(e,t,n,r,i)=>xm.scots(e,t,n,r,i,ng(x_,t)),stonepine:(e,t,n,r,i)=>j_(e,t,n,r,i,ng(S_,t)),acacia:(e,t,n,r,i)=>M_(e,t,n,r,i,ng(C_,t)),fig:(e,t,n,r,i)=>xm.maple(e,t,n,r,i,ng(w_,t)),pomegranate:(e,t,n,r,i)=>N_(e,t,n,r,i,ng(w_,t)),almond:(e,t,n,r,i)=>xm.cherry(e,t,n,r,i,ng(T_,t)),oleander:(e,t,n,r,i)=>xm.magnolia(e,t,n,r,i,ng(E_,t))};function F_(e,t,n,r,i,a,o=0){e.push(G(q(new V(i,i*1.04,a,9),n,o+a/2,r,1,1,1,t()*W),s_[0],0,t,.04,s_[1]))}var I_=[`#5a9a48`,`#98d070`],L_={pools:{pre:[[`palm`,.4],[`olive`,.35],[`cypress`,.25]],a:[[`palm`,.4],[`olive`,.35],[`cypress`,.25]],b:[[`stonepine`,.4],[`cedar`,.3],[`cypress`,.3]],c:[[`acacia`,.4],[`fig`,.3],[`pomegranate`,.3]],free:[[`almond`,.6],[`oleander`,.4]]},wild:[`palm`,`olive`,`cypress`,`palm`,`acacia`],footprint:{palm:.22,olive:.32,cypress:.18,cedar:.3,stonepine:.3,acacia:.34,fig:.34,pomegranate:.3,almond:.38,oleander:.3},tree:(e,t,n,r,i,a)=>(P_[n]??P_.palm)(e,t,r,i,a*am),great:Cm.great,seedling:Cm.seedling,ring:(e,t,n)=>{for(let r=0;r<7;r++){let i=r/7*W+.3;if(F_(e,t,Math.cos(i)*n,Math.sin(i)*n,.04,.05+t()*.07),r%2==0){let r=i+W/7/2,a=new gs(.03,0);q(a,Math.cos(r)*n,.045,Math.sin(r)*n,.6,1.9,.6,t()*W,(t()-.5)*.5),e.push(K(G(a,`#3f9ae8`,0,t,.03,`#c4ecff`),1.2))}}},bush:(e,t,n,r,i,a)=>lg(e,t,n,r,i,a?[`#a89858`,`#e0d090`]:ng([[`#4f7f3f`,`#a8c86a`],[`#5a8a4a`,`#b8d078`]],t),a?null:[`#ff7fa0`,`#ffffff`,`#e2504c`]),fern:(e,t,n,r,i)=>ug(e,t,n,r,i,[`#4a8a7a`,`#a8d8b8`],{n:8,len:.22,w:.05,droop:.55,sway:.4,flat:.5}),flower:(e,t,n,r,i,a)=>dg(e,t,n,r,i,a,I_),mushroom:(e,t,n,r,i)=>{let a=Kp([[.001,0],[.028*i,0],[.05*i,.045*i],[.056*i,.09*i],[.04*i,.135*i],[.022*i,.158*i],[.03*i,.178*i],[.026*i,.182*i]],9);e.push(G(q(a,n,0,r,1,1,1,t()*W,(t()-.5)*.16),u_[0],0,t,.04,u_[1]))},stump:(e,t,n,r,i)=>{F_(e,t,n,r,.07*i,.1*i),e.push(G(q(new V(.06*i,.06*i,.01,9),n,.1*i+.004,r),`#efe6d0`,0,t,.03))},log:(e,t,n,r,i,a=t()*W)=>{e.push(G(q(new V(.042*i,.048*i,.34*i,9).rotateZ(Math.PI/2),n,.048*i,r,1,1,1,a),s_[0],0,t,.04,s_[1])),e.push(G(q(new Ka(.03*i,.11*i,.11*i).translate(-.18*i,0,0),n,.055*i,r,1,1,1,a),s_[0],0,t,.04,s_[1]))},rock:(e,t,n,r,i,a=t()<.4)=>ag(e,t,n,r,i,a_,a?`#c8b868`:void 0),tuft:(e,t,n,r,i)=>cg(e,t,n,r,i?[`#b0904a`,`#f0d898`]:[`#8f9a4a`,`#dcd88a`]),pond:(e,t,n,r,i)=>{gg(e,t,n,r,i,[`#e2d2a8`,`#fbf2dc`],[`#3fc0c8`,`#9aeae4`],.22,a_);let a=t()*W;for(let o=0;o<4;o++){let s=a+(o-1.5)*.32,c=.22+t()*.1,l=n+Math.cos(s)*i*1.02,u=r+Math.sin(s)*i*1.02;e.push(G(q(new V(.006,.008,c,4),l,.04+c/2,u),`#4a8a3a`,1.5,t,.05,`#a0d060`)),e.push(G(q(new ms(.03,0),l,.05+c,u,1,.6,1),`#7ab048`,1.5,t,.05,`#d0e088`))}e.push(G(q(new V(.04,.04,.006,7),n+i*.3,.058,r-i*.2),`#3f9a3c`,0,t,.05)),e.push(G(q(new gs(.022,0),n+i*.3,.072,r-i*.2,1,.7,1),`#ffb3d0`,0,t,.04))}};function R_(e,t,n,r,i=.022,a=s_,o=0){e.add(X(i*2.7,.018,i*2.7,t,o+.009,n),a[0],a[1]),e.add(q(new V(i*.84,i,r-.04,9),t,o+r/2,n),a[0],a[1]),e.add(X(i*2.7,.022,i*2.7,t,o+r-.011,n),a[0],a[1])}function z_(e,t,n,r=e,i=t){let a=new V(Math.SQRT1_2,Math.SQRT1_2,n,4,1);a.rotateY(Math.PI/4);let o=a.getAttribute(`position`);for(let n=0;n<o.count;n++){let a=o.getY(n)>0;o.setXYZ(n,o.getX(n)*(a?t:e),o.getY(n),o.getZ(n)*(a?i:r))}return a}function B_(e,t,n,r=.16,i=1,a=!1,o=0){e.add(q(new V(.014*i,.03*i,r,6),t,o+r/2,n),c_[0],c_[1]),e.add(q(Kp([[.012*i,0],[.05*i,.022*i],[.058*i,.045*i],[.05*i,.045*i],[0,.03*i]],10),t,o+r,n),c_[0],c_[1]);for(let[a,s,c,l,u]of[[.04,.1,`#f2481a`,`#ff9a2e`,1.5],[.024,.14,`#ff9a2a`,`#ffe27a`,2]])K(e.add(q(mh(a*i,s*i),t,o+r+.03*i,n,1,1,1,e.rng()*W),c,l,2.2),u);a&&e.fire(t,o+r+.08*i,n,.8*i)}function V_(e,t,n,r,i=.07,a=0,o=1.6){e.add(q(z_(i,i*.62,r),t,a+r/2,n),o_[0],o_[1]);let s=new Ja(i*.62*Math.SQRT1_2,i*1.1,4);s.rotateY(Math.PI/4),K(e.add(q(s,t,a+r+i*.55,n),l_[0],l_[1]),o)}function H_(e,t,n,r=1,i=0){let a=Kp([[.001,0],[.028*r,0],[.05*r,.045*r],[.056*r,.09*r],[.04*r,.135*r],[.022*r,.158*r],[.03*r,.178*r],[.026*r,.182*r]],9);e.add(q(a,t,0,n,1,1,1,e.rng()*W,i),u_[0],u_[1])}function U_(e,t,n,r,i,a,o=m_){e.add(X(r,a,i,t,a/2,n),d_[0],d_[1]);for(let[o,s,c,l]of[[0,i/2-.012,r+.02,.024],[0,-i/2+.012,r+.02,.024],[r/2-.012,0,.024,i],[-r/2+.012,0,.024,i]])e.add(X(c,.045,l,t+o,a+.02,n+s),d_[0],d_[1]);for(let o=0;o<4;o++)e.add(ih(.012,.03,t-r/2+.06+o*(r-.12)/3,a-.045,n+i/2+.006,Math.PI/2,6),f_[0],f_[1]);e.add(q(oh(.09,.15,.02),t-r*.14,0,n+i/2-.008),f_[0],f_[1]),K(e.add(X(.05,.05,.012,t+r*.24,a*.56,n+i/2+.002),`#ffc860`,`#fff0b0`),1.4),K(e.add(X(.012,.05,.05,t+r/2+.002,a*.56,n),`#ffc860`,`#fff0b0`),1.4);let s=t-r*.14,c=n+i/2;for(let t of[-1,1])e.add(q(new V(.006,.007,.17,5),s+t*.085,.085,c+.12),f_[0],f_[1]);let l=[[Y(-.1,.21,0),Y(0,.2,0),Y(.1,.21,0)],[Y(-.1,.17,.125),Y(0,.155,.13),Y(.1,.17,.125)]];for(let t of[!1,!0])e.add(q(ah(l,t),s,0,c),o[1],o[0],.5);for(let o of[-1,1])e.add(X(.008,a+.08,.008,t+r/2+.03,(a+.08)/2,n-i*.25+o*.03),f_[0],f_[1]);for(let o=1;o<5;o++)e.add(X(.008,.007,.06,t+r/2+.03,o/5*(a+.06),n-i*.25),f_[0],f_[1])}function W_(e){let t=.5,n=.3;for(let t=0;t<3;t++)e.add(X(.74-t*.045,.026,.64-t*.045,0,.013+t*.026,0),o_[0],o_[1]);let r=.078;e.add(X(.39999999999999997,.27999999999999997,.33999999999999997,0,.21799999999999997,-.03),d_[0],d_[1]),K(e.add(q(oh(.1,.19,.02),0,r,t/2-.118),`#ffb850`,`#fff0b0`),1.2);for(let i of[-1,1]){for(let a=0;a<4;a++)R_(e,-.26+a*.52/3,i*(t/2-.035),n,.024,s_,r);for(let t=1;t<3;t++)R_(e,i*(.6/2-.04),-.215+t*.43/3,n,.024,s_,r)}e.add(X(.62,.04,.52,0,.398,0),s_[0],s_[1]);let i=new Do;i.moveTo(-.6/2-.03,0),i.lineTo(.32999999999999996,0),i.lineTo(0,.15),i.lineTo(-.6/2-.03,0);let a=new ds(i,{depth:.56,bevelEnabled:!1});e.add(q(a,0,.418,-.5/2-.03),p_[1],p_[0]),e.add(X(.45999999999999996,.02,.012,0,.43,.28200000000000003),s_[0],s_[1]);let o=new V(.036,.036,.012,12);o.rotateX(Math.PI/2),K(e.add(q(o,0,.378+.09,.28400000000000003),l_[0],l_[1]),1.4),K(e.add(q(new gs(.03,0),0,.593,.27,1,1.4,1),l_[0],l_[1]),1.4);for(let t of[-1,1])B_(e,t*.3,.37,.14,.9,t>0)}function G_(e){e.add(q(new V(.15,.17,.03,10),0,.015,0),o_[0],o_[1]),e.add(q(new V(.1,.12,.03,10),0,.045,0),o_[0],o_[1]),B_(e,0,0,.14,1.9,!1,.06);for(let[t,n,r]of[[.3,.14,-1.1],[-.28,.18,.95]]){e.add(X(.24,.022,.07,t,.07,n,r),s_[0],s_[1]);for(let i of[-1,1])e.add(X(.03,.06,.06,t+Math.cos(r)*i*.085,.03,n-Math.sin(r)*i*.085,r),o_[0],o_[1])}H_(e,-.04,-.32,1.1),H_(e,.07,-.3,.85,.2),e.put(`lumber`,.25,-.22,.32,.7),e.fire(0,.34,0,1.1),e.smoke(0,.5,0,.8)}function K_(e){U_(e,0,-.03,.44,.36,.24),H_(e,.28,.24,1),H_(e,.34,.14,.8),e.put(`sack`,-.3,.22,.85,.6)}function q_(e){e.put(`well`,0,0,.54,0,__(m_)),e.put(`bucket`,.24,.12,.62,.8),H_(e,-.24,.16,1),H_(e,-.2,.27,.8)}function J_(e){let t=.58;e.put(`home_a`,0,0,t,0,__(p_)),e.chimney(`home_a`,J.stoneDark,0,0,t),H_(e,-.31,.16,1.05),H_(e,-.34,.04,.85),e.put(`crate_small`,.34,-.02,.7,.3),ch(e,.24,.3,.25,-.9)}function Y_(e){let t=.52;e.put(`home_b`,0,0,t,0,__(m_)),e.chimney(`home_b`,J.stoneDark,0,0,t),fh(e,-.36,.36,-.36,-.1,.36,`fence_stone`),fh(e,-.36,.36,-.12,.36,.36,`fence_stone`),R_(e,.3,.34,.2,.018),H_(e,.36,.14,1),e.put(`sack`,.33,-.01,.9,.7)}function X_(e){e.put(`mine`,0,-.06,.34,0),e.put(`stone`,.33,.3,.9,.4),e.put(`stone`,-.34,.3,.8,1.2);for(let[t,n,r]of[[.36,.1,1],[.36,.1,.8]])e.add(X(.1*r,.06,.07*r,t,r===1?.03:.09,n,.3),o_[0],o_[1])}function Z_(e){e.put(`watermill`,0,0,.5,0,__(m_)),e.put(`sack`,.36,.2,.9,.4),e.put(`sack`,.4,.1,.9,1.3),H_(e,-.36,.16,1)}function Q_(e){e.put(`market`,0,.03,.44,0,__(m_)),H_(e,.38,.28,1),H_(e,.4,.16,.8),H_(e,-.4,.26,.9,.25)}function $_(e){e.put(`tower_b`,0,0,.44,0,__(h_)),uh(e,.3,.26,.34,-.5,m_),e.put(`weaponrack`,-.28,.2,.8,.6),e.put(`crate`,.3,0,.5,.5)}function ev(e){let t=.48;e.put(`blacksmith`,0,0,t,0,__(p_)),e.chimney(`blacksmith`,J.stone,0,0,t,0,1.2),e.fire(.02*t,.14,.42*t,.6)}function tv(e){e.put(`archery`,0,-.04,.38,0,__(p_)),e.put(`target`,.34,.3,.7,-.5),e.put(`target`,-.36,.26,.6,.6),e.put(`bucket_arrows`,-.2,.36,.8,.2)}function nv(e){e.put(`tavern`,0,0,.46,0,__(g_)),H_(e,.36,.2,1.1),H_(e,.38,.08,.9),H_(e,.3,.3,.8,.3),ch(e,-.33,.3,.26,.9)}function rv(e){for(let t=0;t<3;t++)e.add(X(.36-t*.07,.03,.36-t*.07,0,.015+t*.03,0),o_[0],o_[1]);e.add(q(z_(.14,.12,.09),0,.135,0),s_[0],s_[1]),V_(e,0,0,.82,.085,.18,2.2);for(let[t,n]of[[.24,.24],[-.24,.24]])B_(e,t,n,.12,.8,t>0)}var iv={...eg.landmarks,campfire:G_,mushroom:K_,well:q_,cabin:J_,cottage:Y_,sawmill:X_,watermill:Z_,market:Q_,treehouse:$_,forge:ev,archery:tv,tavern:nv,lodge:W_,tower:rv};function av(e){let t=[[.9,.13],[.7,.12],[.5,.11],[.32,.1]],n=0;for(let[r,i]of t)e.add(q(z_(r,r-.07,i),0,n+i/2,-.04),o_[0],o_[1]),e.add(X(r-.06,.012,r-.06,0,n+i+.004,-.04),s_[0],s_[1]),n+=i;let r=n,i=.54,a=.42;for(let t=0;t<12;t++){let n=(t+1)/12*r;e.add(X(.13,n,.037,0,n/2,i-(t+.5)/12*a),s_[0],s_[1])}for(let t of[-1,1]){let n=new Ka(.022,.03,Math.hypot(a,r));n.rotateX(Math.atan2(r,a)),e.add(q(n,t*.078,r/2+.02,i-a/2),o_[0],o_[1])}let o=r+.012;e.add(X(.15,.1,.13,0,o+.05,-.06),d_[0],d_[1]),K(e.add(q(oh(.05,.08,.01),0,o,.006),`#ffb850`,`#fff0b0`),1.4);for(let[t,n]of[[-.09,.03],[.09,.03],[-.09,-.14],[.09,-.14]])R_(e,t,n,.11,.013,s_,o);e.add(X(.23,.02,.22,0,o+.12,-.055),s_[0],s_[1]),K(e.add(q(z_(.2,.02,.09),0,o+.175,-.055),l_[0],l_[1]),1.1);for(let n of[-1,1])B_(e,n*.385,.3,.1,.9,n>0,t[0][1]+.012),V_(e,n*.24,.56,.3,.04),uh(e,n*.42-.045,.5,.42,0,n>0?m_:h_)}function ov(e,t){if(t===0)return eg.home(e,0);if(t===1)U_(e,0,-.02,.5,.4,.26,p_),H_(e,.34,.26,1.1),H_(e,.4,.14,.9),e.put(`sack`,-.34,.22,.9,.6),e.put(`lumber`,-.36,-.08,.34,Math.PI/2+.12),ch(e,-.22,.36,.27,.9);else if(t===2){let t=.6;e.put(`home_b`,0,0,t,0,__(p_)),e.chimney(`home_b`,J.stoneDark,0,0,t),fh(e,-.4,.4,-.4,-.02,.37,`fence_stone`),fh(e,-.4,.4,-.13,.4,.37,`fence_stone`),H_(e,.37,-.16,1.1),H_(e,.36,0,.9),ch(e,.3,.36,.28,-1.3)}else if(t===3||t===4){let n=t===4?m_:p_,r=.62,i=-.31,a=.5;e.put(`home_b`,.1,0,r,0,__(n)),e.chimney(`home_b`,J.stoneDark,.1,0,r),e.put(`home_a`,i,.04,a,0,__(n)),e.chimney(`home_a`,J.stoneDark,i,.04,a,0,.8);for(let t=0;t<4;t++)R_(e,-.5+t*.12,.43,.2,.017);if(e.add(X(.42,.022,.05,-.32,.211,.43),s_[0],s_[1]),uh(e,-.02,.45,.46,0,n),H_(e,.34,-.3,1.1),ch(e,.36,.38,.28,-1.3),t===4){e.put(`tower_b`,-.3,-.34,.38,0,__(h_));for(let t of[.14,.3])V_(e,t,.47,.26,.036)}}else return av(e),.72;return 1}function sv(e,t){if(t===`lamp`)B_(e,0,0,.26,1.2);else if(t===`bench`){e.add(X(.27,.026,.09,0,.09,0),s_[0],s_[1]);for(let t of[-1,1])e.add(X(.035,.078,.08,t*.095,.039,0),o_[0],o_[1])}else if(t===`birdhouse`){e.add(q(new V(.06,.07,.26,9),0,.13,0),d_[0],d_[1]),e.add(q(new Ja(.085,.09,9),0,.305,0),p_[1],p_[0]);for(let t=0;t<5;t++){let n=t/5*W;e.add(q(new ms(.014,0),Math.cos(n)*.062,.19,Math.sin(n)*.062),`#4a3018`)}}else if(t===`signpost`){e.add(X(.11,.02,.07,0,.01,0),o_[0],o_[1]),e.add(q(z_(.085,.07,.27,.045,.036),0,.155,0),s_[0],s_[1]);for(let t of[.13,.17,.21])e.add(X(.05,.008,.004,0,t,.022),`#8a7a5c`);K(e.add(q(new gs(.018,0),0,.31,0,1,1.3,1),`#3f9ae8`,`#c4ecff`),1.2)}else t===`barrels`?(H_(e,-.06,0,1.25),H_(e,.06,.03,1.05),H_(e,0,-.1,.9,.3)):eg.decor(e,t)}var cv={landmarks:iv,garden:eg.garden,honours:(e,t,n)=>{n>=2&&uh(e,t*.86,t*.72,.36,-.6,m_),n>=3&&(uh(e,-t*.9,t*.66,.36,.6,h_),B_(e,t*.2,t*1.02,.14,.8))},home:ov,homeNames:[`Camp`,`Hut`,`Hut`,`House`,`House`,`Villa`,`Villa`,`Palace`,`Wonder`],decor:sv,spinner:eg.spinner},lv={id:`empire`,name:`Empire`,blurb:`Sandstone and palms, from a camp to a wonder.`,coin:{name:`gold`,icon:Fg.gold,ink:`#ffdc7a`},gem:{name:`water`,one:`a jar of water`,icon:Fg.jar,ink:`#a8e2ff`},swatch:[`#62b4ec`,`#c2bc64`,`#e47a4e`],pal:{grassLush:`#a6b254`,grassMid:`#c2bc64`,grassDry:`#e6d298`,grassFree:`#92c474`,grassHeart:`#b0b658`,grassToday:`#bcc05e`,todayTint:`#f2e8a0`,sand:`#f0dcae`,soil:`#a0744a`,bed:`#eee0c0`,stoneHi:`#f0dcb4`,stoneLo:`#b89868`,stoneWarm:`#d8b47c`,flowers:[`#ffffff`,`#ffd25e`,`#f2564a`,`#b48cf0`,`#ff9a5e`,`#ff9db2`,`#e23a5a`],rock:a_,moss:`#c8b868`,boulder:[`#d8c49a`,`#fbf2dc`],pebble:[`#d8caa8`,`#faf2de`],path:[`#d8c8a4`,`#f6ecd4`],spire:[`#a88a5c`,`#d8be90`],rune:[`#7a6248`,`#c0a47a`],glyph:`#5ac8ff`,debris:[`#8a6a44`,`#d8b47c`],debrisCap:[`#8aa850`,`#c0d078`],isletSand:`#ecd8a8`,isletRock:[`#8a6a44`,`#c89e68`],lantern:[`#e6d6b0`,`#b89868`],sprout:`#eaf5a0`},flora:L_,build:cv,look:{shade:`#6a4aa8`,light:`#ffd488`,tone:.26,sat:1.08,contrast:1.07,sheen:1},ground:U.turf,kit:[v_,{}],kitGlow:[fp,{}],water:{river:!0,color:`#4cc8d0`,glow:0,pond:{color:`#4cc8d0`,emissive:`#1f98a8`,rough:.06}},sky:{kfs:qg({top:`#0a1030`,hor:`#2c3260`,bot:`#141838`,fog:`#1e2450`,sun:`#b4c0ff`,sunI:.9,hemiSky:`#5a68a8`,hemiGround:`#403860`,hemiI:.9,night:1},{top:`#3c4a90`,hor:`#ffb08a`,bot:`#8a78b0`,fog:`#d0a09a`,sun:`#ffc898`,sunI:1.5,hemiSky:`#bcc4f0`,hemiGround:`#98808a`,hemiI:1.1,night:.35},{top:`#62b4ec`,hor:`#ffeec4`,bot:`#c8dcd4`,fog:`#f2e8cc`,sun:`#fff0d0`,sunI:2.7,hemiSky:`#d8e8ff`,hemiGround:`#c4a878`,hemiI:1,night:0},{top:`#52aaf0`,hor:`#fff2d0`,bot:`#c4dcdc`,fog:`#f4ecd0`,sun:`#fff8e6`,sunI:3.1,hemiSky:`#e0f0ff`,hemiGround:`#ccb080`,hemiI:1.05,night:0},{top:`#5aa2e0`,hor:`#ffe0a0`,bot:`#d6d0b4`,fog:`#f6dca4`,sun:`#ffe0a8`,sunI:2.8,hemiSky:`#d8e2ff`,hemiGround:`#c8a06c`,hemiI:.95,night:0},{top:`#3c5694`,hor:`#ffac54`,bot:`#b88a6c`,fog:`#e2a06c`,sun:`#ffc27c`,sunI:1.7,hemiSky:`#c2c8f0`,hemiGround:`#a47c5c`,hemiI:1.15,night:.3},{top:`#161c48`,hor:`#50447e`,bot:`#2a265a`,fog:`#2e2c5a`,sun:`#aab6ff`,sunI:1,hemiSky:`#5562a0`,hemiGround:`#3a325c`,hemiI:.85,night:.85}),dark:!1,stars:0,clouds:{low:`#d6c8ba`,high:`#fffaf0`,glow:1},planet:null,ground:null,aurora:[`#ffd27a`,`#ff9ac0`]},heart:{crystal:`#c4e8ff`,crystalGlow:`#3fa8ff`,glow:`#62c0ff`,core:`#7fd0ff`,tree:`#a8ffd8`,treeGold:`#ffe08a`},life:{motes:[`#fff0c0`,`#ffe066`],petals:`#ffe6d8`,flyers:{kind:`bird`,color:`#3a3442`},fire:`#ff9a3c`,smoke:`#fbf4e8`,lamp:`#ffd27a`},words:{heartTree:`the pale-barked, jade-leaved one in the ring of column drums beside it`,ground:`green`},unlocks:{7:`Golden lights in the night sky`},items:{campfire:{name:`Brazier`,a:`a brazier`,blurb:`Somewhere to gather. Traders bring gold to it.`},well:{name:`Well`,a:`a well`,blurb:`Draws a jar of water every few hours.`},garden:{name:`Field`,a:`a field`,blurb:`Plant a crop, come back, harvest it.`},mushroom:{name:`Mud-brick house`,a:`a mud-brick house`,blurb:`A potter moves in.`},cabin:{name:`House`,a:`a house`,blurb:`A mason’s house.`},cottage:{name:`Villa`,a:`a villa`,blurb:`A family settles on the island.`},sawmill:{name:`Quarry`,a:`a quarry`,blurb:`Stone for everything that comes next.`},market:{name:`Bazaar`,a:`a bazaar`,blurb:`Caravans start to call.`},treehouse:{name:`Watchtower`,a:`a watchtower`,blurb:`A lookout over the valley.`},tavern:{name:`Wine house`,a:`a wine house`,blurb:`Stories, and nothing stronger than grape juice.`},lodge:{name:`Temple`,a:`a temple`,blurb:`One roof for the whole city.`},tower:{name:`Great obelisk`,a:`a great obelisk`,blurb:`Lifts the whole city: everything makes a quarter more.`}},decor:{lamp:{name:`Brazier`,a:`a brazier`},bench:{name:`Stone bench`,a:`a stone bench`},birdhouse:{name:`Dovecote`,a:`a dovecote`},signpost:{name:`Stone marker`,a:`a stone marker`},barrels:{name:`Amphorae`,a:`a row of amphorae`}}},uv=e=>[e[1],e[0]];function dv(e){Cf(U.plate,...e.hull),Cf(U.metal,...e.metal,...e.dark),Cf(U.glass,...e.glass),Cf(U.cells,...e.panel),Cf(U.cloth,...e.flag),Cf(U.rock,...e.rock),Cf(U.soil,...e.soil)}var fv=e=>({[cp.black]:[`#3a3d44`,`#15171b`],[cp.hull]:uv(e.hull),[cp.metal]:uv(e.metal),[cp.dark]:uv(e.dark),[cp.darker]:[e.dark[0],`#191b20`],[cp.rock]:uv(e.accent),[cp.light]:e.lamp,[cp.blue]:uv(e.blue),[cp.trim]:uv(e.trim),[cp.red]:uv(e.red),[cp.strap]:uv(e.trim),[cp.tyre]:uv(e.dark),[cp.green]:uv(e.green),[cp.glass]:uv(e.glass),[cp.lamp]:e.lamp,[cp.panel]:uv(e.panel),[cp.panel2]:uv(e.panel)}),pv={mod_c:1.3,garage:1.3,tunnel_a:1.3,depot_a:1.2,depot_b:1.2,depot_c:1.2,lights:2.2,lander_a:1.3},mv=[`mod_e`,`lander_b`];function hv(e,t,n,r,i,a,o=0,s=0,c={}){let l={...c.style},u={...c.glow};return mv.includes(n)?(l[cp.trim]??=uv(t.glass),u[cp.trim]??=t.glassGlow):pv[n]&&(l[cp.trim]??=t.lamp,u[cp.trim]??=pv[n]),e.put(n,r,i,a,o,{...c,style:l,glow:u},s)}function gv(e,t,n,r,i=0){let a=G(t,n,i,e.rng,.04,r);return e.out.push(a),a}function _v(e,t,n,r,i,a=0,o=1,s=t.glass,c=t.glassGlow){let l=new ms(i,1),u=l.getAttribute(`position`);for(let e=0;e<u.count;e++)u.getY(e)<0&&u.setY(e,0);K(gv(e,q(l,n,a+.02,r,1,o,1,e.rng()*W),s[0],s[1]),c),e.add(q(new V(i*1.04,i*1.08,.035,12),n,a+.0175,r),t.metal[0],t.metal[1])}function vv(e,t,n,r,i,a,o=t.hull,s=t.trim,c=0){e.add(q(new V(i*1.1,i*1.14,.03,10),n,c+.015,r),t.dark[0],t.dark[1]),e.add(q(new V(i,i,a,10),n,c+a/2+.02,r),o[0],o[1]),e.add(q(new ys(i,10,3,0,W,0,Math.PI/2),n,c+a+.02,r,1,.5,1),o[1]),e.add(q(new V(i*1.05,i*1.05,a*.16,10),n,c+a*.4,r),s[0],s[1])}function yv(e,t,n,r,i,a,o,s=t.hull,c=t.trim){let l=i*1.3,u=new qa(i,Math.max(.01,a-2*i),3,10);u.rotateZ(Math.PI/2),e.add(q(u,n,l,r,1,1,1,o),s[0],s[1]);let d=Math.cos(o),f=Math.sin(o);for(let s of[-1,1]){let u=s*a*.22;e.add(ih(i*1.05,.028,n+d*u,l,r-f*u,o),c[0],c[1]),e.add(X(.03,l*.7,i*1.7,n+d*u,l*.35,r-f*u,o),t.dark[0],t.dark[1])}}function bv(e,t,n,r,i,a=t.lamp,o=0,s=2.2){e.add(q(new V(.007,.016,i,6),n,o+i/2,r),t.metal[0],t.metal[1]),[.4,.62,.82].forEach((a,s)=>e.add(X(.085*(1.15-a),.007,.007,n,o+i*a,r,s*1.1),t.metal[0],t.metal[1])),K(gv(e,q(new gs(.02,0),n,o+i+.018,r,1,1.35,1),a),s)}function xv(e,t,n,r,i,a,o=0,s=.75,c=t.hull){let l=[[Kp([[0,-.1*a],[.55*a,-.03*a],[1.02*a,.26*a],[a,.3*a],[.5*a,.09*a],[0,.04*a]],12),c[0],c[1]],[q(new V(a/.1*.012,a/.1*.02,.5*a,5),0,.28*a,0),t.metal[0],t.metal[1]]];for(let[t,a,c]of l)t.rotateX(s),t.rotateY(o),t.translate(n,r,i),e.add(t,a,c);let u=new gs(.16*a,0);u.translate(0,.56*a,0),u.rotateX(s),u.rotateY(o),u.translate(n,r,i),K(gv(e,u,t.lamp),1.6)}function Sv(e,t,n,r,i,a,o=0,s=.55,c=.09,l=0){e.add(q(new V(.008,.011,c,5),n,l+c/2,r),t.metal[0],t.metal[1]);for(let[u,d,f]of[[new Ka(i+.014,.008,a+.014),t.metal[0],t.metal[1]],[q(new Ka(i,.008,a),0,.006,0),t.panel[0],t.panel[1]]])u.rotateX(s),u.rotateY(o),u.translate(n,l+c+.012,r),e.add(u,d,f)}function Cv(e,t,n,r,i=.26,a=t.lamp,o=0){e.add(q(new V(.02,.024,.02,6),n,o+.01,r),t.dark[0],t.dark[1]),e.add(q(new V(.006,.009,i,5),n,o+i/2,r),t.metal[0],t.metal[1]),e.add(X(.05,.012,.03,n,o+i+.012,r),t.dark[0],t.dark[1]),K(e.add(X(.042,.014,.024,n,o+i,r),a),2.2)}function wv(e,t,n,r,i,a,o=t.flag,s=0,c=0){e.add(q(new V(.006,.008,i,5),n,c+i/2,r),t.metal[0],t.metal[1]),e.add(q(new gs(.012,0),n,c+i+.008,r),t.trim[0],t.trim[1]);let l=[];for(let e=0;e<=2;e++){let t=[];for(let n=0;n<=5;n++)t.push(Y(n/5*.13+.006,i-.012-e/2*.085,Math.sin(n/5*5)*.008));l.push(t)}for(let t of[!1,!0]){let i=e.add(q(ah(l,t),n,c,r,1,1,1,a),o[0],o[1],s).getAttribute(`sway`);for(let e=0;e<i.count;e++)i.setX(e,s*.6)}}function Tv(e,t,n,r,i,a=t.lamp,o=0){e.add(q(new V(i,i*1.05,.03,8),n,o+.015,r,1,1,1,Math.PI/8),t.dark[0],t.dark[1]),e.add(q(new V(i*.56,i*.56,.006,8),n,o+.032,r,1,1,1,Math.PI/8),t.metal[0],t.metal[1]),e.add(q(new V(i*.44,i*.44,.008,8),n,o+.033,r,1,1,1,Math.PI/8),t.dark[0],t.dark[1]);for(let t=0;t<4;t++){let s=t/4*W+Math.PI/4;K(gv(e,q(new gs(.016,0),n+Math.cos(s)*i*.86,o+.042,r+Math.sin(s)*i*.86),a),1.8)}}function Ev(e,t,n,r=.012,i=t.metal){for(let t=0;t<n.length-1;t++){let a=Y(...n[t]),o=Y(...n[t+1]),s=a.distanceTo(o),c=new V(r,r,s,6);c.translate(0,s/2,0),c.applyQuaternion(new dn().setFromUnitVectors(Y(0,1,0),o.clone().sub(a).normalize())),c.translate(a.x,a.y,a.z),e.add(c,i[0],i[1]),e.add(q(new ms(r*1.25,0),o.x,o.y,o.z),i[0],i[1])}}function Dv(e,t,n,r,i,a=0){e.add(q(new V(.03*i,.046*i,.05*i,8),n,a+.045*i,r),t.dark[0],t.dark[1]),e.add(q(new V(.05*i,.058*i,.34*i,10),n,a+.24*i,r),t.hull[0],t.hull[1]),e.add(q(new V(.052*i,.054*i,.045*i,10),n,a+.34*i,r),t.red[0],t.red[1]),e.add(q(Kp([[.05*i,0],[.042*i,.07*i],[.02*i,.14*i],[0,.17*i]],10),n,a+.41*i,r),t.red[0],t.red[1]);for(let o=0;o<3;o++){let s=o/3*W+.5,c=new fi,l=.05*i,u=.13*i,d=.008*i,f=[[l,.2*i],[u,.02*i],[l,.06*i]],p=[];for(let e of[1,-1])for(let[t,n]of e>0?f:[...f].reverse())p.push(t,n,e*d);c.setAttribute(`position`,new ei(p,3)),c.rotateY(s),c.translate(n,a,r),e.add(c,t.red[0],t.red[1])}K(e.add(q(new ms(.018*i,1),n,a+.31*i,r+.05*i),t.lamp),1.6)}function Ov(e,t,n,r,i=0,a=!1){e.put(a?`cargo_a_stacked`:`cargo_a`,t,n,r,i)}function kv(e,t,n,r={}){let i=.62,a=r.hoop??t.hull,o=r.lamp??`#ff9ad8`;e.add(X(.69,.03,.53,0,.015,0),t.dark[0],t.dark[1]);let s=[-.145,0,.145];for(let n of s)e.add(X(.58,.05,.11,0,.055,n),t.metal[0],t.metal[1]),e.add(X(.55,.012,.085,0,.082,n),t.soil[0],t.soil[1]);for(let t=0;t<5;t++){let n=-.62/2+t/4*i,r=new bs(.26,.009,5,14,Math.PI);r.rotateY(Math.PI/2),e.add(q(r,n,.03,0,1,.82,1),a[0],a[1])}e.add(ih(.008,i,0,.2432,0,0,6),a[0],a[1]);for(let t of[-.2,0,.2])K(e.add(X(.09,.012,.03,t,.2252,0),o),1.5);if(vv(e,t,-.62/2-.02,.25,.045,.13,t.blue,t.metal),!n){e.put(`cont_a`,.2,.3,.3,.4);return}let c=n.id===`pumpkin`||n.id===`berry`?4:5;for(let t of s)for(let r=0;r<c;r++)Rh(e,n.id,n.stage,-.24+r*.48/(c-1)+(e.rng()-.5)*.012,t+(e.rng()-.5)*.01,.088);if(n.stage>=3){let r=.27,i=.36;e.add(X(.13,.07,.11,r,.035,i,.3),t.hull[0],t.hull[1]),e.add(X(.135,.014,.115,r,.03,i,.3),t.trim[0],t.trim[1]);let a=zh[n.id];for(let t=0;t<5;t++){let n=t/5*W,o=t===0?0:.03;K(e.add(q(new ms(.028,1),r+Math.cos(n)*o,.08+(t===0?.02:0),i+Math.sin(n)*o,1,.85,1,e.rng()*W),a[0],a[1]),.25)}}}function Av(e,t,n,r,i=.8,a=t.trim){r>=2&&wv(e,t,n*.86,n*.72,.34,-.6,t.flag,i),r>=3&&(wv(e,t,-n*.9,n*.66,.34,.6,a,i),Cv(e,t,n*.2,n*1.02,.25))}function jv(e,t){e.put(`frame_low`,0,0,.3,0),e.put(`cargo_b`,0,.02,.28,.4);for(let[n,r]of[[-.3,-.32],[.31,-.32],[.31,.31],[-.3,.31]])e.add(X(.014,.13,.014,n,.065,r),t.metal[0],t.metal[1]),K(gv(e,q(new gs(.022,0),n,.15,r),`#ffcf70`),1.3)}function Mv(e,t,n,r,i=.8){let a=e.rng;if(n===`cairn`){let n=0;for(let r of[.075,.056,.04,.026])gv(e,q(new ms(r,0),(a()-.5)*.015,n+r*.6,(a()-.5)*.015,1.1,.74,1,a()*W),t.rock[0],t.rock[1]),n+=r*1.05}else if(n===`lamp`){e.add(q(new V(.03,.036,.03,8),0,.015,0),t.dark[0],t.dark[1]),e.add(q(new V(.009,.012,.4,6),0,.2,0),t.metal[0],t.metal[1]);for(let n of[-1,1])e.add(X(.07,.01,.012,n*.035,.4,0),t.metal[0],t.metal[1]),K(e.add(X(.05,.022,.036,n*.07,.39,0),t.lamp),2.2)}else if(n===`bench`){e.add(X(.27,.016,.085,0,.09,0),t.hull[0],t.hull[1]),e.add(X(.27,.07,.014,0,.15,-.042),t.hull[0],t.hull[1]);for(let n of[-1,1])e.add(X(.016,.09,.08,n*.11,.045,0),t.metal[0],t.metal[1]),e.add(X(.016,.1,.014,n*.11,.135,-.042),t.metal[0],t.metal[1]);e.add(X(.275,.006,.02,0,.1,.034),t.trim[0],t.trim[1])}else if(n===`hive`){for(let n=0;n<3;n++){let r=n/3*W,i=new V(.006,.006,.27,4);i.translate(0,.135,0),i.rotateZ(.26),i.rotateY(r),e.add(i,t.metal[0],t.metal[1])}e.add(X(.07,.06,.05,0,.27,0),t.hull[0],t.hull[1]),K(e.add(X(.03,.014,.004,0,.275,.027),t.lamp),1.6),e.add(q(new V(.005,.005,.12,4),0,.36,0),t.metal[0],t.metal[1]);for(let n=0;n<3;n++){let r=n/3*W;e.add(X(.07,.005,.005,Math.cos(r)*.035,.42,Math.sin(r)*.035,-r),t.metal[0],t.metal[1]),e.add(q(new ms(.014,0),Math.cos(r)*.07,.42,Math.sin(r)*.07),t.trim[0],t.trim[1])}}else if(n===`birdhouse`)e.add(q(new V(.024,.03,.03,6),0,.015,0),t.dark[0],t.dark[1]),e.add(q(new V(.008,.011,.32,6),0,.16,0),t.metal[0],t.metal[1]),xv(e,t,0,.33,0,.085,.4,.9);else if(n===`flowerbed`){e.add(X(.28,.05,.17,0,.025,0),t.hull[0],t.hull[1]),e.add(X(.285,.012,.175,0,.02,0),t.trim[0],t.trim[1]),e.add(X(.25,.012,.14,0,.05,0),t.soil[0],t.soil[1]);for(let t=0;t<8;t++)r(e,-.1+t%4*.066+(a()-.5)*.02,(t<4?-.035:.035)+(a()-.5)*.02)}else n===`signpost`?(e.add(q(new V(.026,.032,.024,6),0,.012,0),t.dark[0],t.dark[1]),wv(e,t,0,0,.4,.3,t.flag,i)):(e.put(`cargo_a`,-.06,0,.2,.2),e.put(`cargo_b`,.065,.03,.17,.8),e.put(`cont_b`,0,-.1,.22,.3))}function Nv(e,t,n,r,i,a=0){for(let o of[-1,1])e.add(X(.008,i,.008,n+o*.03,a+i/2,r),t.metal[0],t.metal[1]);let o=Math.max(2,Math.round(i/.075));for(let s=1;s<o;s++)e.add(X(.06,.007,.007,n,a+s/o*i,r),t.metal[0],t.metal[1])}function Pv(e,t,n,r,i,a=0){e.add(q(new V(.05,.065,i,8),n,i/2,r),t.metal[0],t.metal[1]),e.add(q(new V(.058,.058,.04,8),n,i*.88,r),t.accent[0],t.accent[1]),e.add(q(new V(.062,.052,.03,8),n,i+.015,r),t.dark[0],t.dark[1]),a&&e.smoke(n,i+.04,r,a)}function Fv(e,t,n,r,i=[`#ff5a1e`,`#ffd060`]){e.add(X(.16,.13,.1,n,.065,r),t.dark[0],t.dark[1]),K(e.add(X(.1,.07,.02,n,.06,r+.052),i[0],i[1]),2),e.fire(n,.1,r+.1,.6)}function Iv(e,t,n=`#ffc040`,r=1){e.put(`lander_base`,0,0,.32,0),e.add(q(new V(.03,.06,.62,6),0,.46,0),t.metal[0],t.metal[1]);for(let n of[.34,.52,.68])e.add(q(new V(.058-n*.03,.058-n*.03,.014,6),0,n,0),t.accent[0],t.accent[1]);xv(e,t,.02,.6,.03,.13,.5,1.05),r>1&&xv(e,t,-.03,.42,-.04,.09,3.4,1.15),bv(e,t,0,0,.26,n,.77,0),K(gv(e,q(new gs(.05,0),0,1.07,0,1,1.4,1,.4),n,`#ffffff`),2.2)}var Lv=[`#3a3550`,`#8a84b0`],Rv=`#4fd0c0`,Z={hull:[`#56647a`,`#b8c8dc`],metal:[`#3c4654`,`#8e9aaa`],dark:[`#1c2028`,`#464e5c`],trim:[`#e0702a`,`#ffb84a`],accent:[`#c0481e`,`#ff8a3a`],glass:[`#1fb8d8`,`#a8f6ff`],glassGlow:.6,lamp:`#7ff0ff`,red:[`#b02a5a`,`#f0609a`],green:[`#1f9a7a`,`#6fe8c0`],blue:[`#2a5ad0`,`#7aa8ff`],panel:[`#2a1f70`,`#7a58e0`],flag:[`#d02a7a`,`#ff7ac0`],rock:Lv,soil:[`#2a2438`,`#4e4868`]};dv(Z);var zv={dark:`#7a6cb0`,light:`#e6dcff`},Bv=[`#2f5a78`,`#7fc0d0`],Vv=[[`#b0288a`,`#ff8ad8`],[`#8a2ab8`,`#e08aff`]],Hv=[[`#1f8ab0`,`#8ff0ff`],[`#2a9a9a`,`#a8fff0`]],Uv=[[`#d0622a`,`#ffd070`],[`#c8483a`,`#ffb080`]],Wv=[[`#d8a8e8`,`#ffffff`],[`#a8d8f0`,`#ffffff`]],Gv=[`#1fa8a0`,`#b0fff0`],Kv=[`#d8941e`,`#ffe678`];function qv(e,t,n,r,i,a,o,s,c,l=6){let u=Kp([[a*.9,-.03*a],[a,.05*a],[a*.9,.22*a],[a*.62,.44*a],[a*.3,.57*a],[0,.62*a]],9);e.push(G(q(u,n,r,i,1,1,1,t()*W),o[0],.6,t,.05,o[1]));let d=Kp([[a*.08,.05*a],[a*.9,-.03*a]],9);e.push(K(G(q(d,n,r,i),s,.6,t,.04),c));for(let o=0;o<l;o++){let o=t()*W,s=.3+t()*.55;vg(e,t,n+Math.cos(o)*a*s,r+a*(.62-.5*s**1.7),i+Math.sin(o)*a*s,a*.06,`#ffffff`,c*1.6,.6,.6)}}function Jv(e,t,n,r,i,a,o,s,c=.62,l=.3){let u=t()*W,d=Hp(e,t,n,r,c*i,.06*i,.04*i,zv,.08*i,u,.5);if(qv(e,t,d.x,d.y-.03*i,d.z,l*i,a,o,s),t()<.55){let d=u+Math.PI+(t()-.5),f=c*i*(.42+t()*.12);qv(e,t,n+Math.cos(d)*.09*i,f,r+Math.sin(d)*.09*i,l*i*.42,a,o,s,2)}}function Yv(e,t,n,r,i,a,o,s){let c=(n,r,i,l,u)=>{let d=n.clone().addScaledVector(r,i);if(_g(e,t,n,d,l,l*.72,a,.25+(3-u)*.25),u===0){vg(e,t,d.x,d.y+l,d.z,l*2.3,o,s,1,1.3);return}let f=t()*W;for(let e=0;e<2;e++){let n=f+e*Math.PI+(t()-.5)*.8,a=tg(r.x+Math.cos(n)*.62,r.y+.3,r.z+Math.sin(n)*.62).normalize();c(d,a,i*.72,l*.72,u-1)}};c(tg(n,0,r),tg((t()-.5)*.15,1,(t()-.5)*.15).normalize(),.3*i,.045*i,3)}function Xv(e,t,n,r,i,a,o,s){let c=t()*W,l=Math.cos(c),u=Math.sin(c),d=(.6+t()*.14)*i,f=.14*i,p=[];for(let e=0;e<=5;e++)p.push(tg(n-l*.03*i*Math.sin(e/5*Math.PI),d*e/5,r-u*.03*i*Math.sin(e/5*Math.PI)));let m=n+l*f,h=r+u*f;for(let e=1;e<=9;e++){let t=e/9,n=Math.PI-t*1.7*Math.PI,r=f*(1-.72*t);p.push(tg(m+l*Math.cos(n)*r,d+Math.sin(n)*r,h+u*Math.cos(n)*r))}for(let n=0;n<p.length-1;n++){let r=n/(p.length-1),c=.052*i*(1-.7*r);_g(e,t,p[n],p[n+1],c,c*.92,a,r*1.1),n>5&&n%2==0&&vg(e,t,p[n].x,p[n].y,p[n].z,.018*i,o,s,r,1)}let g=p[p.length-1];vg(e,t,g.x,g.y,g.z,.045*i,o,s,1,1)}function Zv(e,t,n,r,i,a,o,s){let c=t()*W,l=Hp(e,t,n,r,.72*i,.045*i,.028*i,rg(a),.07*i,c,.4),u=3+ +(t()<.5);for(let n=0;n<u;n++){let r=c+n/u*W+(t()-.5)*.5,d=(.15+t()*.06)*i,f=l.y-(.02+n*.07)*i,p=tg(l.x+Math.cos(r)*d,f+.03*i,l.z+Math.sin(r)*d);_g(e,t,tg(l.x,f,l.z),p,.016*i,.01*i,a,.8);let m=Uf([[0,0],[.034*i,.03*i],[.046*i,.085*i],[.02*i,.14*i],[0,.155*i]],6);e.push(K(G(q(m,p.x,p.y-.15*i,p.z,1,1,1,t()*W),o[0],1,t,.05,o[1]),s))}vg(e,t,l.x,l.y+.02*i,l.z,.03*i,o[1],s,1,1.4)}function Qv(e,t,n,r,i,a,o){let s=Hp(e,t,n,r,.6*i,.05*i,.032*i,rg(Bv),.05*i,t()*W,.4),c=(n,r,c,l)=>{let u=t()*W;for(let d=0;d<n;d++){let f=new Ja(c*i,r*i,4);f.scale(1,1,.4),f.translate(0,r*i/2,0),f.rotateZ(-(l+t()*.15)),f.rotateY(u+d/n*W),f.translate(s.x,s.y-.01*i,s.z),e.push(K(G(f,a[0],.9,t,.05,a[1]),o))}};c(7,.36,.085,.95),c(5,.26,.07,.4),vg(e,t,s.x,s.y+.07*i,s.z,.06*i,`#fff6c0`,o*2.2,.9,1)}var $v={glowcap:(e,t,n,r,i)=>Jv(e,t,n,r,i,ng(Vv,t),`#7ff0ff`,.4),coral:(e,t,n,r,i)=>Yv(e,t,n,r,i,Bv,ng([`#7ff0ff`,`#a8fff0`],t),.8),frond:(e,t,n,r,i)=>Xv(e,t,n,r,i,ng([[`#5a3a9a`,`#d09cf0`],[`#2f7a8a`,`#8fe8e0`]],t),`#ff9ae0`,.8),pod:(e,t,n,r,i)=>Zv(e,t,n,r,i,Bv,ng(Hv,t),.5),lantern:(e,t,n,r,i)=>Jv(e,t,n,r,i,ng(Uv,t),`#ffe08a`,.45,.56,.27),prism:(e,t,n,r,i)=>{ag(e,t,n,r,1.2*i,Lv),pg(e,t,n,r,2.5*i,ng([[`#1fa0a8`,`#b0fff4`],[`#7a4ad0`,`#e0c0ff`]],t),.35,5)},bloom:(e,t,n,r,i)=>Qv(e,t,n,r,i,ng(Wv,t),.35),pearlcap:(e,t,n,r,i)=>Jv(e,t,n,r,i,ng(Wv,t),`#ff9ae0`,.45)},ey=[`#3f8a8a`,`#8fe0d8`],ty={pools:{pre:[[`glowcap`,.45],[`coral`,.3],[`frond`,.25]],a:[[`glowcap`,.45],[`coral`,.3],[`frond`,.25]],b:[[`frond`,.4],[`pod`,.35],[`coral`,.25]],c:[[`lantern`,.55],[`prism`,.45]],free:[[`bloom`,.6],[`pearlcap`,.4]]},wild:[`glowcap`,`coral`,`frond`,`pod`,`glowcap`],footprint:{glowcap:.32,coral:.28,frond:.22,pod:.24,lantern:.3,prism:.26,bloom:.34,pearlcap:.32},tree:(e,t,n,r,i,a)=>($v[n]??$v.glowcap)(e,t,r,i,a*am),great:(e,t,n,r,i)=>{let a=r?Kv:Gv,o=Hp(e,t,0,0,.7*n,.1*n,.062*n,zv,.05*n,t()*W,.6);qv(e,t,o.x,o.y-.04*n,o.z,.4*n,a,r?`#fff0b0`:`#b0fff0`,.45,0),qv(e,t,o.x-.15*n,.34*n,o.z+.06*n,.15*n,a,r?`#fff0b0`:`#b0fff0`,.45,0);let s=Math.min(i,8)*2;for(let i=0;i<s;i++){let i=t()*W,a=.25+t()*.7,s=.4*n;vg(e,t,o.x+Math.cos(i)*s*a,o.y-.04*n+s*(.64-.5*a**1.7),o.z+Math.sin(i)*s*a,.022+t()*.012,r?`#fff3c0`:`#ffffff`,1.3,.6,1.2)}},seedling:(e,t)=>{e.push(G(q(new V(.012,.018,.12,5),0,.06,0),zv.dark,.6,t,.04,zv.light)),qv(e,t,0,.11,0,.075,Gv,`#b0fff0`,.5,0)},ring:(e,t,n)=>hg(e,t,n,[`#4a4468`,`#a8a0d0`],[`#ff7ad8`,`#ffd0f4`]),bush:(e,t,n,r,i,a)=>lg(e,t,n,r,i,a?[`#6a6480`,`#a8a0c0`]:ng([[`#5a3a8a`,`#b890e8`],[`#2f7a8a`,`#7fd8d8`]],t),a?null:[`#7ff0ff`,`#ff7ad8`,`#c8ff7a`],.8),fern:(e,t,n,r,i)=>ug(e,t,n,r,i,[`#2f8f8a`,`#8ff0e0`],{n:6,len:.26,w:.04,droop:1,sway:1.2,glow:.2}),flower:(e,t,n,r,i,a)=>dg(e,t,n,r,i,a,ey,{glow:.6,centre:`#ffffff`}),mushroom:(e,t,n,r,i,a=`#7ff0ff`)=>{e.push(G(q(new V(.02*i,.03*i,.09*i,6),n,.045*i,r),zv.dark,0,t,.04,zv.light)),e.push(K(G(q(new ys(.07*i,7,3,0,W,0,Math.PI/2),n,.078*i,r,1,.85,1,t()*W),a,0,t,.05,`#ffffff`),.5))},stump:(e,t,n,r,i)=>{ag(e,t,n,r,1.1*i,Lv),pg(e,t,n,r,.9*i,[`#b0288a`,`#ff9ae0`],.5,3,.03*i)},log:(e,t,n,r,i,a=t()*W)=>{sg(e,t,n,r,i,a,[`#2e2a4a`,`#6a60a0`]),e.push(K(G(q(Hf(.06*i,t,0,.2,.2),n,.07*i,r,1.6,.4,.9,a),`#2f9a94`,0,t,.06,`#8ff0e0`),.35))},rock:(e,t,n,r,i,a=t()<.4)=>ag(e,t,n,r,i,Lv,a?Rv:void 0),tuft:(e,t,n,r,i)=>cg(e,t,n,r,i?[`#6a6480`,`#b0a8c8`]:[`#2f9a94`,`#a8fff0`],{glow:i?0:.22}),pond:(e,t,n,r,i)=>{gg(e,t,n,r,i,[`#4a4468`,`#a8a0d0`],[`#2fd8f0`,`#a8faff`],.7,Lv);for(let a=0;a<2;a++){let a=t()*W;ty.mushroom(e,t,n+Math.cos(a)*i*1.3,r+Math.sin(a)*i*1.3,.9,`#ff9ae0`)}}};function ny(e,t,n,r,i,a,o=1.6,s=0,c=.012){let l=new bs(i,c,5,16);return l.rotateX(Math.PI/2+s),K(e.add(q(l,t,n,r),a),o)}function ry(e,t,n,r,i,a=0){let o=[[Uf([[0,-.2*r],[.05*r,-.12*r],[.06*r,.04*r],[.03*r,.17*r],[0,.2*r]],6),Z.hull[0],Z.hull[1],0]],s=o[0][0];s.rotateX(Math.PI/2),s.scale(1,.62,1),s.translate(0,.06*r,0);for(let e of[-1,1]){let t=new Ka(.15*r,.01*r,.1*r);t.translate(e*.1*r,.05*r,-.07*r),t.rotateZ(e*.14),o.push([t,Z.metal[0],Z.metal[1],0]),o.push([q(new V(.014*r,.014*r,.03*r,6),e*.035*r,.06*r,-.19*r,1,1,1,0,Math.PI/2),Z.lamp,Z.lamp,2]),o.push([new Ka(.008*r,.05*r,.008*r).translate(e*.07*r,.025*r,-.04*r),Z.dark[0],Z.dark[1],0])}o.push([q(new ms(.03*r,0),0,.085*r,.07*r,1,.6,1.4),Z.glass[0],Z.glass[1],.6]);for(let[r,s,c,l]of o){r.rotateY(i),r.translate(t,a,n);let o=e.add(r,s,c);l&&K(o,l)}}function iy(e){Tv(e,Z,0,0,.2);for(let t=0;t<3;t++){let n=t/3*W+.5,r=new V(.008,.01,.2,5);r.translate(0,.1,0),r.rotateZ(.42),r.rotateY(n),e.add(q(r,-Math.cos(n)*.08,.03,Math.sin(n)*.08),Z.metal[0],Z.metal[1])}e.add(q(new V(.05,.03,.05,8),0,.2,0),Z.dark[0],Z.dark[1]);for(let[t,n,r,i,a]of[[.05,.2,`#1fb8f0`,`#a8f6ff`,1.6],[.03,.26,`#8ff0ff`,`#ffffff`,2.2]])K(e.add(q(mh(t,n),0,.22,0,1,1,1,e.rng()*W),r,i,2.2),a);e.put(`cargo_b`,.3,.13,.2,.5),e.put(`cargo_b`,-.29,.16,.2,-.4),e.put(`cont_c`,-.04,-.31,.26,.2),e.fire(0,.3,0,1)}function ay(e){hv(e,Z,`lander_b`,0,0,.5),bv(e,Z,.32,.22,.34,`#ff7ac0`),e.put(`cargo_b`,-.34,.2,.19,.4),e.put(`cont_c`,-.3,.02,.24,1.1)}function oy(e){vv(e,Z,0,0,.085,.36,Z.hull,Z.accent);for(let t of[.16,.25,.34])ny(e,0,t,0,.115,Z.lamp,1.4);xv(e,Z,0,.44,0,.11,0,.1),vv(e,Z,.25,.2,.05,.12,Z.blue,Z.metal),Ev(e,Z,[[.09,.03,.06],[.2,.03,.18]],.01),e.put(`cont_c`,-.27,.2,.24,.5)}function sy(e){hv(e,Z,`mod_c`,0,0,.35),Sv(e,Z,.37,-.18,.15,.1,.9,.6,.07),e.put(`cargo_b`,-.37,.22,.19,.3),Cv(e,Z,.3,.32,.24)}function cy(e){let t=.33;hv(e,Z,`mod_a`,0,0,t),e.put(`roof_cargo_c`,0,0,t,.4,{},t),e.put(`cont_a`,.36,.22,.26,.4),wv(e,Z,-.34,.32,.28,.4,Z.flag,1)}var ly=.62;function uy(e){e.put(`lander_base`,0,0,.26,0),gv(e,q(Uf([[.07,0],[.05,.14],[.03,.38],[.036,.42],[0,.46]],6),0,.1,0),Z.metal[0],Z.metal[1]),K(gv(e,q(new gs(.05,0),0,ly,0,1,1.5,1),`#7ff0ff`,`#ffffff`),2),e.put(`cont_c`,.27,.19,.24,.6),Cv(e,Z,-.28,.22,.2)}function dy(e){hv(e,Z,`garage`,-.06,-.06,.31),e.put(`truck`,.34,.28,.3,2.5),e.put(`cargo_b`,-.36,.26,.19,.3),Ev(e,Z,[[-.36,0,.06],[-.36,.26,.06],[-.36,.3,.2]],.014,Z.accent),K(gv(e,q(new gs(.022,0),-.36,.27,.22),Z.lamp),1.8)}function fy(e){yv(e,Z,-.08,-.12,.1,.5,.2,Z.hull,Z.accent),vv(e,Z,.28,-.14,.07,.28,Z.hull,Z.blue);for(let t of[[[.18,.13,-.1],[.28,.13,-.14]],[[-.1,.03,.02],[-.02,.03,.2],[.1,.03,.34]],[[.28,.03,-.04],[.3,.03,.2]]]){let n=e.out.length;Ev(e,Z,t,.012,[`#1fb8d8`,`#a8f6ff`]);for(let t=n;t<e.out.length;t++)K(e.out[t],1)}Cv(e,Z,-.34,.3,.24)}function py(e){e.put(`pad_s`,0,0,.36,0),ry(e,0,0,1.5,.5,.17),e.put(`cont_a`,.36,.26,.26,.3),e.put(`cont_d`,.36,.1,.26,.9),e.put(`cargo_b`,-.38,.24,.19,.2)}function my(e){let t=.3;e.put(`frame_tall`,0,0,t,0),_v(e,Z,0,0,.15,2*t-.02),ny(e,0,.7,0,.21,`#ff7ac0`,1.4,.25),Nv(e,Z,0,.25,2*t),Cv(e,Z,.3,.26,.22),e.put(`cont_b`,-.3,.24,.24,.3)}function hy(e){hv(e,Z,`mod_d`,.05,0,.29),e.add(q(new V(.075,.085,.06,8),-.26,.03,.06),Z.dark[0],Z.dark[1]),K(e.add(q(new V(.045,.045,.34,8),-.26,.23,.06),`#1fb8f0`,`#c8fbff`),1.8);for(let t of[.12,.24,.36])e.add(q(new V(.06,.06,.018,8),-.26,t,.06),Z.metal[0],Z.metal[1]);e.add(q(new Ja(.07,.05,8),-.26,.43,.06),Z.accent[0],Z.accent[1]),Pv(e,Z,-.22,-.2,.42),e.fire(-.26,.24,.12,.8),e.put(`cargo_b`,.38,.26,.19,.3)}function gy(e){Tv(e,Z,0,.02,.26),ry(e,0,.02,1,-.4,.035),[[-.3,-.2,.3,.5],[.3,-.24,.42,-.5],[.34,.22,.26,.9]].forEach(([t,n,r,i],a)=>{e.add(q(new V(.006,.009,r,5),t,r/2,n),Z.metal[0],Z.metal[1]);let o=new bs(.07,.011,5,14);o.rotateY(i),K(e.add(q(o,t,r+.07,n),[`#ff7ac0`,`#7ff0ff`,`#ffd070`][a]),1.6)})}function _y(e){hv(e,Z,`mod_b`,0,0,.32),_v(e,Z,0,0,.13,.3),K(e.add(X(.2,.035,.012,0,.27,.37),`#ff4ab0`,`#ff9ad8`),1.8),K(e.add(X(.012,.012,.012,.13,.27,.372),`#7ff0ff`),2),Cv(e,Z,.34,.3,.26,`#ff9ad8`),e.put(`cont_a`,-.37,.08,.24,.5)}function vy(e){hv(e,Z,`mod_e`,0,0,.35),bv(e,Z,-.3,-.26,.6,`#ff7ac0`),xv(e,Z,-.3,.36,-.26,.09,.9,.8),wv(e,Z,.36,.3,.34,-.5,Z.flag,1),ny(e,0,.62,0,.16,Z.lamp,1.2,.2,.008)}function yy(e,t=0,n=0,r=1){gv(e,q(new V(.1*r,.12*r,.05*r,6),t,.025*r,n),Z.dark[0],Z.dark[1]),gv(e,q(Uf([[.085*r,0],[.06*r,.2*r],[.032*r,.6*r],[.02*r,.9*r],[0,1*r]],6),t,.05*r,n),Z.metal[0],Z.hull[1]),[[.4,.13,`#7ff0ff`],[.62,.1,`#7ff0ff`],[.82,.07,`#ff7ac0`]].forEach(([i,a,o])=>ny(e,t,i*r,n,a*r,o,1.7,0,.009*r)),K(gv(e,q(new gs(.045*r,0),t,1.12*r,n,1,1.4,1,.4),`#ff7ac0`,`#ffffff`),2.2)}var by={campfire:iy,mushroom:ay,well:oy,cabin:sy,cottage:cy,windmill:uy,sawmill:dy,watermill:fy,market:py,treehouse:my,forge:hy,archery:gy,tavern:_y,lodge:vy,tower:e=>{yy(e),e.put(`cargo_b`,.28,.16,.19,.3)},site:e=>jv(e,Z)};function xy(e,t){if(t===0)return hv(e,Z,`lander_b`,0,0,.5),bv(e,Z,.32,.26,.36,`#ff7ac0`),e.put(`cargo_b`,-.34,.14,.2,.3),e.put(`cargo_b`,-.3,-.12,.2,.9),e.put(`cont_c`,.33,-.1,.26,.4),Cv(e,Z,-.26,.32,.26),1.12;if(t===1)hv(e,Z,`mod_c`,0,0,.37),Sv(e,Z,.4,-.1,.16,.11,1.2,.6,.08),e.put(`cargo_b`,-.38,.14,.2,.3),wv(e,Z,.3,.36,.32,-.5,Z.flag,1),Cv(e,Z,-.24,.38,.26);else if(t===2)hv(e,Z,`mod_a`,.08,0,.35),hv(e,Z,`mod_c`,-.36,.08,.22,.4),Sv(e,Z,.44,-.2,.16,.11,1,.6,.08),e.put(`truck`,.42,.1,.28,.3),wv(e,Z,.2,.42,.34,-.5,Z.flag,1),Cv(e,Z,-.14,.42,.26);else if(t===3||t===4){let n=.32;hv(e,Z,`mod_d`,.1,0,n),e.put(`roof_cargo_c`,.1,0,n*.95,.3,{},n),hv(e,Z,`mod_c`,-.35,.06,.25),wv(e,Z,-.12,.44,.4,0,Z.flag,1),Cv(e,Z,.42,.38,.27),t===4&&(yy(e,-.32,-.34,.62),wv(e,Z,-.5,.44,.4,0,Z.trim,1),ry(e,.44,-.04,1,.3,.035))}else{hv(e,Z,`mod_e`,0,-.02,.42),hv(e,Z,`mod_c`,-.42,.22,.2,.5),hv(e,Z,`mod_c`,.42,.22,.2,-.5),yy(e,-.36,-.36,.86),ny(e,0,.74,-.02,.2,Z.lamp,1.3,.2,.009);for(let t of[-1,1])wv(e,Z,t*.17,.52,.44,t<0?Math.PI:0,t<0?Z.trim:Z.flag,1),Cv(e,Z,t*.34,.5,.27)}return 1}var Sy=[`#7ff0ff`,`#ff7ad8`,`#c8ff7a`,`#ffb060`,`#b89cff`],Cy={landmarks:by,garden:(e,t)=>kv(e,Z,t,{hoop:Z.trim,lamp:`#7ff0ff`}),honours:(e,t,n)=>Av(e,Z,t,n,1),home:xy,homeNames:[`Drop pod`,`Shelter`,`Shelter`,`Outpost`,`Outpost`,`Base`,`Base`,`Stronghold`,`Bastion`],decor:(e,t)=>Mv(e,Z,t,(e,t,n)=>{let r=e.out.length;dg(e.out,e.rng,t,n,ng(Sy,e.rng),.5,ey,{glow:.7,centre:`#ffffff`});for(let t=r;t<e.out.length;t++)e.out[t].translate(0,.05,0)}),spinner:e=>{if(e!==`windmill`)return null;let t=[],n=new nh(t,Ig(`resonator`),.03);ny(n,0,0,0,.17,`#7ff0ff`,1.6,.35,.011),ny(n,0,0,0,.12,`#ff7ac0`,1.6,-.6,.009);for(let e=0;e<3;e++)K(gv(n,q(new gs(.022,0),Math.cos(e/3*W)*.22,Math.sin(e*2.1)*.03,Math.sin(e/3*W)*.22),`#ffffff`),2);return{parts:t,y:ly,z:0,axis:`y`,speed:1.1}}},wy={id:`frontier`,name:`Frontier`,blurb:`A steel outpost on a world that glows in the dark.`,coin:{name:`alloy`,icon:Fg.alloy,ink:`#9ff3e4`},gem:{name:`plasma`,one:`a cell of plasma`,icon:Fg.plasma,ink:`#ffb0e8`},swatch:[`#8e8ad0`,`#3aa89c`,`#ff7ad8`],pal:{grassLush:`#3aa89c`,grassMid:`#4a94a8`,grassDry:`#8a84a0`,grassFree:`#58d8b4`,grassHeart:`#40a8a0`,grassToday:`#4cb4aa`,todayTint:`#a8fff0`,sand:`#8a7cc0`,soil:`#3a3058`,bed:`#3a4a7a`,stoneHi:`#7a70b0`,stoneLo:`#2e2a4a`,stoneWarm:`#5a4a90`,flowers:[`#7ff0ff`,`#ff7ad8`,`#c8ff7a`,`#ffb060`,`#b89cff`,`#ffffff`,`#ff6a8a`],rock:Lv,moss:Rv,boulder:[`#4a4468`,`#a8a0d0`],pebble:[`#5a5480`,`#b8b0e0`],path:[`#6a7a9a`,`#c0d0e8`],spire:[`#2e2a4a`,`#6a60a0`],rune:[`#2a2840`,`#6a6490`],glyph:`#ff7ad8`,debris:[`#2e2a4a`,`#7a70b0`],debrisCap:[`#2f9a94`,`#7fe8d8`],isletSand:`#7a6ab0`,isletRock:[`#2e2a4a`,`#6a60a0`],lantern:[`#8e9aaa`,`#4a5464`],sprout:`#a8fff0`},flora:ty,build:Cy,look:{shade:`#1c62a8`,light:`#ffd0e6`,tone:.24,sat:1.12,contrast:1.06,sheen:1.5},ground:U.moss,kit:[{},fv(Z)],kitGlow:[{},{}],water:{river:!0,color:`#3fe8ff`,glow:1,pond:{color:`#4ff0ff`,emissive:`#18c8e8`,rough:.1}},sky:{kfs:qg({top:`#0a0824`,hor:`#2a1f5a`,bot:`#120e34`,fog:`#1c1648`,sun:`#b0a8ff`,sunI:.95,hemiSky:`#5a58b0`,hemiGround:`#382e68`,hemiI:.95,night:1},{top:`#3a3488`,hor:`#ff8ab0`,bot:`#6a4a98`,fog:`#b07aa8`,sun:`#ffc0b0`,sunI:1.5,hemiSky:`#b8b0f0`,hemiGround:`#7a5a8e`,hemiI:1.1,night:.35},{top:`#5a66c0`,hor:`#ffc8dc`,bot:`#8e8ad0`,fog:`#d0bce0`,sun:`#fff0e8`,sunI:2.5,hemiSky:`#d8d4ff`,hemiGround:`#8a80b0`,hemiI:1,night:0},{top:`#5a6cc8`,hor:`#f8d0e4`,bot:`#9690d8`,fog:`#d4c4e8`,sun:`#fff8f4`,sunI:2.8,hemiSky:`#e0dcff`,hemiGround:`#9088b8`,hemiI:1.05,night:0},{top:`#5860b8`,hor:`#ffc0d0`,bot:`#8c84c8`,fog:`#d8b8d8`,sun:`#ffe8dc`,sunI:2.5,hemiSky:`#dcd0ff`,hemiGround:`#8a78a8`,hemiI:.95,night:0},{top:`#3a3080`,hor:`#ff7aa8`,bot:`#74489a`,fog:`#b06aa0`,sun:`#ffb8c0`,sunI:1.5,hemiSky:`#c0b0f0`,hemiGround:`#805a90`,hemiI:1.15,night:.3},{top:`#161048`,hor:`#4a3a88`,bot:`#221a58`,fog:`#2a2260`,sun:`#b0a8ff`,sunI:1,hemiSky:`#5a58a8`,hemiGround:`#3a3066`,hemiI:.88,night:.85}),dark:!1,stars:.22,clouds:{low:`#6a5a9a`,high:`#eccdf2`,glow:1.1},planet:{kind:`ringed`,yaw:.075,elev:-.4,size:120,follow:1},ground:null,aurora:[`#ff7ad8`,`#7a9cff`]},heart:{crystal:`#ffb8f0`,crystalGlow:`#ff4ac8`,glow:`#ff7ad8`,core:`#ff9ae8`,tree:`#7ffff0`,treeGold:`#ffe08a`},life:{motes:[`#a8fff0`,`#7ff0ff`],petals:`#c8fff4`,flyers:{kind:`craft`,color:`#8e9aaa`,light:`#ff8a3a`},fire:`#5ae8ff`,smoke:`#b8c0d8`,lamp:`#7ff0ff`},words:{heartTree:`the great jade cap-tree in the ring of stones beside it`,ground:`alive`},unlocks:{2:`Spores by day, glow-flies by night`,3:`Scout craft overhead`,4:`Lamps round the home`,5:`Drifting spores`,7:`A nebula in the night sky`},items:{campfire:{name:`Plasma torch`,a:`a plasma torch`,blurb:`Somewhere bright to gather. The crew brings alloy to it.`},garden:{name:`Biofarm`,a:`a biofarm`,blurb:`Plant a crop, come back, harvest it.`},mushroom:{name:`Scout pod`,a:`a scout pod`,blurb:`A scout sets down.`},well:{name:`Condenser`,a:`a condenser`,blurb:`Draws a cell of plasma out of the glowing air every few hours.`},cabin:{name:`Shelter`,a:`a shelter`,blurb:`Four walls between you and the weather.`},cottage:{name:`Crew block`,a:`a crew block`,blurb:`A crew settles on the island.`},windmill:{name:`Resonator`,a:`a resonator`,blurb:`Turns all day, humming.`},sawmill:{name:`Fabricator`,a:`a fabricator`,blurb:`Parts for everything that comes next.`},watermill:{name:`Coolant pump`,a:`a coolant pump`,blurb:`The river does the work.`},market:{name:`Trade pad`,a:`a trade pad`,blurb:`Traders start to call.`},treehouse:{name:`Scan tower`,a:`a scan tower`,blurb:`A lookout over the glowing woods.`},forge:{name:`Reactor`,a:`a reactor`,blurb:`The light never goes out.`},archery:{name:`Drone range`,a:`a drone range`,blurb:`Steady hands, steady breath.`},tavern:{name:`Cantina`,a:`a cantina`,blurb:`Stories, and nothing stronger than tea.`},lodge:{name:`Command hub`,a:`a command hub`,blurb:`One roof for the whole outpost.`},tower:{name:`Signal spire`,a:`a signal spire`,blurb:`Lifts the whole outpost: everything makes a quarter more.`}},decor:{cairn:{name:`Mineral cairn`,a:`a mineral cairn`},lamp:{name:`Glow lamp`,a:`a glow lamp`},hive:{name:`Sensor station`,a:`a sensor station`},birdhouse:{name:`Aerial`,a:`an aerial`},flowerbed:{name:`Glow garden`,a:`a glow garden`},signpost:{name:`Flag`,a:`a flag`},barrels:{name:`Fuel cells`,a:`a stack of fuel cells`}}},Ty={id:`grove`,name:`Grove`,blurb:`Woods, a river, and a village in the trees.`,coin:{name:`acorns`,icon:Fg.acorn,ink:`#ffdc7a`},gem:{name:`dew`,one:`a drop of dew`,icon:Fg.dew,ink:`#a8e2ff`},swatch:[`#9ccfe6`,`#8cc85a`,`#e8744c`],pal:{grassLush:`#8cc85a`,grassMid:`#a2d066`,grassDry:`#e0cc88`,grassFree:`#8ad490`,grassHeart:`#96ce60`,grassToday:`#98d05e`,todayTint:`#e6f2a0`,sand:`#ecdfba`,soil:`#8f6142`,bed:`#e9e0c8`,stoneHi:`#ece6d8`,stoneLo:`#a79f92`,stoneWarm:`#cdbfa6`,flowers:[`#ffffff`,`#ffd25e`,`#ff9db2`,`#bba7ff`,`#ff8e60`,`#9cdcff`,`#f2667a`],rock:[`#807a70`,`#e6e0d3`],moss:`#8fc058`,boulder:[`#cfc8ba`,`#f8f5ee`],pebble:[`#d6cfc0`,`#faf7f0`],path:[`#cfc6b4`,`#f2ecde`],spire:[`#8d857a`,`#b9b0a2`],rune:[`#6b6274`,`#a39689`],glyph:`#8fe9ff`,debris:[`#6c4a4c`,`#c48652`],debrisCap:[`#5fa648`,`#9bd265`],isletSand:`#e2cc98`,isletRock:[`#6c4a4c`,`#b9794a`],lantern:[`#bdb7ad`,`#9c968e`],sprout:`#d6ff9a`},flora:Cm,build:eg,look:{shade:`#4458c0`,light:`#ffe6b0`,tone:.18,sat:1.06,contrast:1.05,sheen:1},ground:U.turf,kit:[{},{}],kitGlow:[fp,{}],water:{river:!0,color:`#5fd0d2`,glow:0,pond:{color:`#5fd0d2`,emissive:`#2aa6ae`,rough:.06}},sky:{kfs:Yg,dark:!1,stars:0,clouds:{low:`#c2cde4`,high:`#ffffff`,glow:1},planet:null,ground:null,aurora:[`#89ffce`,`#cea6ff`]},heart:{crystal:`#c4f7ff`,crystalGlow:`#3fd0ff`,glow:`#62dcff`,core:`#7fe6ff`,tree:`#a8ffd8`,treeGold:`#ffe08a`},life:{motes:[`#fff3c4`,`#ffe066`],petals:`#ffc4d4`,flyers:{kind:`bird`,color:`#2d3142`},fire:`#ff9a3c`,smoke:`#fbf8f0`,lamp:`#ffd27a`},words:{heartTree:`the pale-barked, jade-leaved one in the ring of stones beside it`,ground:`green`},unlocks:{},items:{},decor:{}},Ey=[`#8a4530`,`#d98a5e`],Dy=`#ecc09a`,Q={hull:[`#cbbfb0`,`#fbf6ec`],metal:[`#7c8088`,`#c6cacd`],dark:[`#3c3e46`,`#6c7079`],trim:[`#d9822e`,`#ffc04a`],accent:[`#b8482a`,`#f07a40`],glass:[`#35a0a8`,`#bff2ea`],glassGlow:.45,lamp:`#ffd27a`,red:[`#b83a34`,`#f2705c`],green:[`#2f8a62`,`#7fd0a0`],blue:[`#2a6fb0`,`#74bcf2`],panel:[`#1f3f8a`,`#4f8fe0`],flag:[`#d9482e`,`#ff8a5c`],rock:Ey,soil:[`#5a3424`,`#8a5438`]};dv(Q);var Oy=[{dark:`#3f7f6a`,light:`#a4d4a8`},{dark:`#4a8a62`,light:`#b8dc92`}],ky=[{dark:`#1f6a66`,light:`#70c6b2`},{dark:`#2a7a5e`,light:`#8ad09a`}],Ay=[{dark:`#a8452e`,light:`#f29a58`},{dark:`#8e3a4a`,light:`#e67a8a`},{dark:`#b0622a`,light:`#f8c462`}],jy=[{dark:`#3f8f4a`,light:`#a8dc78`},{dark:`#4a9a52`,light:`#bfe486`}],My=[{dark:`#e58aac`,light:`#ffdcea`},{dark:`#f09aa0`,light:`#fff0ea`}],Ny={dark:`#6a3a2c`,light:`#b4745a`},Py=(e,t,n,r,i)=>e.push(G(n,r.dark,i,t,.05,r.light)),Fy=(e,t)=>Uf([[e*.8,0],[e,t*.12],[e,t*.8],[e*.72,t*.94],[0,t]],7);function Iy(e,t,n,r,i,a){let o=(.62+t()*.2)*i,s=.062*i;Py(e,t,q(Fy(s,o),n,0,r,1,1,1,t()*W),a,.2);let c=1+ +(t()<.55),l=t()*W;for(let u=0;u<c;u++){let c=l+u*(Math.PI+(t()-.5)*.8),d=o*(.3+t()*.18),f=(.13+t()*.04)*i,p=o*(.3+t()*.22),m=n+Math.cos(c)*f,h=r+Math.sin(c)*f;Py(e,t,qf(tg(n,d,r),tg(m,d+.03*i,h),s*.62,s*.62,6),a,.2),Py(e,t,q(Fy(s*.66,p),m,d-.012*i,h),a,.25)}t()<.5&&e.push(G(q(new gs(.03*i,0),n,o+.008*i,r,1,.7,1),`#ff9db2`,.2,t,.04))}function Ly(e,t,n,r,i,a){let o=Uf([[.1*i,0],[.135*i,.1*i],[.115*i,.3*i],[.06*i,.48*i],[.045*i,.6*i]],7,t,.05);e.push(G(q(o,n,0,r,1,1,1,t()*W),Ny.dark,.1,t,.06,Ny.light)),Gp(e,t,tg(n,.72*i,r),.25*i,a,{n:3,sy:.75})}function Ry(e,t,n,r,i){for(let a=0;a<9;a++){let a=new Ja(r*.2,r,4);a.translate(0,r/2,0),a.rotateZ(-(.15+t()*1.25)),a.rotateY(t()*W),a.translate(n.x,n.y,n.z),e.push(G(a,i.dark,.8,t,.05,i.light))}}function zy(e,t,n,r,i,a){let o=t()*W,s=Hp(e,t,n,r,.42*i,.055*i,.04*i,Ny,.05*i,o,.3),c=2+ +(t()<.5);for(let n=0;n<c;n++){let r=o+n/c*W+(t()-.5)*.6,l=tg(s.x+Math.cos(r)*.16*i,(.62+t()*.16)*i,s.z+Math.sin(r)*.16*i);Up(e,t,tg(s.x,s.y-.03*i,s.z),l,.03*i,.022*i,Ny),Ry(e,t,l,.14*i,a)}}var By={saguaro:(e,t,n,r,i)=>Iy(e,t,n,r,i,ng(Oy,t)),bottle:(e,t,n,r,i)=>Ly(e,t,n,r,i,ng(ky,t)),joshua:(e,t,n,r,i)=>zy(e,t,n,r,i,ng(Oy,t)),redpine:(e,t,n,r,i)=>xm.spruce(e,t,n,r,i,ng(ky,t),Ny),spire:(e,t,n,r,i)=>xm.cypress(e,t,n,r,i,ng(ky,t),Ny),copper:(e,t,n,r,i)=>xm.maple(e,t,n,r,i,ng(Ay,t),Ny),ember:(e,t,n,r,i)=>xm.aspen(e,t,n,r,i,ng(Ay,t)),green:(e,t,n,r,i)=>xm.oak(e,t,n,r,i,ng(jy,t)),bloom:(e,t,n,r,i)=>xm.cherry(e,t,n,r,i,ng(My,t))},Vy=[`#5a8a6a`,`#a8d0a0`],Hy={pools:{pre:[[`saguaro`,.4],[`bottle`,.35],[`joshua`,.25]],a:[[`saguaro`,.4],[`bottle`,.35],[`joshua`,.25]],b:[[`redpine`,.5],[`spire`,.25],[`bottle`,.25]],c:[[`copper`,.45],[`ember`,.3],[`joshua`,.25]],free:[[`green`,.5],[`bloom`,.5]]},wild:[`saguaro`,`bottle`,`joshua`,`saguaro`,`redpine`],footprint:{saguaro:.2,bottle:.27,joshua:.27,redpine:.3,spire:.18,copper:.34,ember:.2,green:.32,bloom:.38},tree:(e,t,n,r,i,a)=>(By[n]??By.saguaro)(e,t,r,i,a*am),great:Cm.great,seedling:Cm.seedling,ring:(e,t,n)=>hg(e,t,n,[`#a8644a`,`#eab696`],[`#bff4ff`,`#f0feff`]),bush:(e,t,n,r,i,a)=>lg(e,t,n,r,i,a?[`#a07a54`,`#e0c094`]:ng([[`#5c8a70`,`#b4d4a8`],[`#4f8a80`,`#a0d0c0`]],t),a?null:[`#ff9db2`,`#ffe08a`,`#ffffff`]),fern:(e,t,n,r,i)=>ug(e,t,n,r,i,[`#2f7f74`,`#8ed8c0`],{n:7,len:.24,w:.05,droop:.5,sway:.5,flat:.45}),flower:(e,t,n,r,i,a)=>dg(e,t,n,r,i,a,Vy),mushroom:(e,t,n,r,i,a=`#ff8fb0`)=>{let o=Hf(.06*i,t,1,.08,.5);e.push(G(q(o,n,.045*i,r,1,.95,1,t()*W),`#3f7f6a`,0,t,.05,`#a8d8a0`)),e.push(K(G(q(new gs(.024*i,0),n,.1*i,r,1,.6,1,t()*W),a,0,t,.04),.3))},stump:(e,t,n,r,i)=>og(e,t,n,r,i,Ey),log:(e,t,n,r,i,a=t()*W)=>sg(e,t,n,r,i,a,[`#6a3a2c`,`#b87a58`]),rock:(e,t,n,r,i,a=t()<.4)=>ag(e,t,n,r,i,Ey,a?Dy:void 0),tuft:(e,t,n,r,i)=>cg(e,t,n,r,i?[`#a8825a`,`#e6c498`]:[`#7f8f5e`,`#d0d894`]),pond:(e,t,n,r,i)=>{gg(e,t,n,r,i,[`#e2cfc0`,`#ffffff`],[`#5fc8d0`,`#a8f0ee`],.25,Ey);for(let a=0;a<4;a++){let a=t()*W;e.push(G(q(new gs(.022,0),n+Math.cos(a)*i*1.12,.05,r+Math.sin(a)*i*1.12,1,1.5,1,t()*W),`#f4ece4`,0,t,.03,`#ffffff`))}}},Uy=(e,t,n)=>e.add(q(new Ja(.02,.05,6),t,.025,n),Q.accent[0],Q.accent[1]);function Wy(e){Tv(e,Q,0,0,.2),e.add(q(new V(.055,.066,.05,8),0,.055,0),Q.dark[0],Q.dark[1]),K(e.add(q(new V(.036,.04,.17,8),0,.165,0),`#ff5a1e`,`#ffd060`),2);for(let t=0;t<6;t++){let n=t/6*W;e.add(X(.008,.19,.008,Math.cos(n)*.056,.17,Math.sin(n)*.056,-n),Q.metal[0],Q.metal[1])}e.add(q(new V(.07,.062,.022,8),0,.27,0),Q.dark[0],Q.dark[1]),e.add(q(new Ja(.05,.04,8),0,.3,0),Q.metal[0],Q.metal[1]),e.put(`cargo_b`,.3,.13,.2,.5),e.put(`cargo_a`,-.29,.16,.2,-.4),e.put(`cont_b`,-.04,-.31,.26,.2),Cv(e,Q,.25,-.22,.24),e.fire(0,.2,0,.9)}function Gy(e){hv(e,Q,`lander_b`,0,0,.5),wv(e,Q,.34,.24,.3,-.4,Q.flag,.8),Ov(e,-.34,.2,.19,.4),e.put(`cont_d`,-.3,.02,.24,1.1)}function Ky(e){e.put(`drill`,0,0,.34,0),vv(e,Q,.27,.2,.05,.13,Q.blue,Q.metal),Ev(e,Q,[[.08,.02,.1],[.2,.02,.2]],.01),e.put(`cont_c`,-.28,.2,.24,.5)}function qy(e){hv(e,Q,`mod_a`,0,0,.34),Sv(e,Q,.36,-.2,.15,.1,.9,.6,.07),Ov(e,-.36,.22,.18,.3),Cv(e,Q,.3,.32,.24)}function Jy(e){let t=.33;hv(e,Q,`mod_b`,0,0,t),e.put(`roof_solar`,0,0,t,0,{},t),e.put(`cont_a`,.36,.22,.26,.4),e.put(`cont_b`,-.37,.2,.26,1.2),wv(e,Q,-.32,.34,.28,.4,Q.flag,.8)}var Yy=.4;function Xy(e){e.put(`turbine_tall`,0,0,Yy,0),e.put(`cont_c`,.26,.18,.24,.6),Uy(e,-.22,.2),Uy(e,.1,.3)}function Zy(e){hv(e,Q,`garage`,-.06,-.06,.31),e.put(`truck`,.33,.26,.3,2.5),e.put(`cargo_b_stacked`,-.37,.27,.15,.3)}function Qy(e){hv(e,Q,`mod_c`,-.14,-.08,.25),vv(e,Q,.25,-.12,.09,.3,Q.hull,Q.blue),vv(e,Q,.29,.13,.065,.2,Q.hull,Q.blue),Ev(e,Q,[[.25,.2,-.03],[.25,.2,.08],[.29,.14,.13]],.011,Q.blue),Ev(e,Q,[[.1,.05,-.1],[.17,.05,-.12]],.012,Q.blue),Ev(e,Q,[[.22,.02,.2],[.08,.02,.34]],.012,Q.blue)}function $y(e){hv(e,Q,`depot_c`,0,0,.37),e.put(`trailer`,.36,.3,.28,2.2)}function eb(e){let t=.3;e.put(`frame_tall`,0,0,t,0),_v(e,Q,0,0,.15,2*t-.02),xv(e,Q,.15,.62,-.12,.07,2.4,.9),Nv(e,Q,0,.25,2*t),Cv(e,Q,.3,.26,.22),e.put(`cont_b`,-.3,.24,.24,.3)}function tb(e){hv(e,Q,`mod_c`,.04,0,.3),Pv(e,Q,-.24,-.16,.56,1.1),Fv(e,Q,-.26,.2),e.put(`cargo_b`,.36,.26,.2,.3)}function nb(e){Tv(e,Q,0,-.02,.3),e.put(`truck_l`,-.04,-.03,.34,.7),e.put(`trailer`,.3,.3,.26,2.3);for(let[t,n]of[[-.36,.2],[-.24,.34],[.38,-.14],[.3,-.3]])Uy(e,t,n);Cv(e,Q,-.38,-.2,.24)}function rb(e){hv(e,Q,`mod_d`,0,0,.3),_v(e,Q,0,-.02,.13,.27999999999999997),Cv(e,Q,.34,.3,.26);for(let t=1;t<5;t++){let n=t/5;K(gv(e,q(new gs(.014,0),.34*n+.1*(1-n),.27-Math.sin(n*Math.PI)*.03,.3*n+.2*(1-n)),[`#ffd27a`,`#ff9a7a`,`#9ae8e0`][t%3]),1.8)}e.put(`cont_a`,-.36,.24,.24,.5)}function ib(e){hv(e,Q,`mod_e`,0,0,.35),bv(e,Q,-.3,-.26,.6),xv(e,Q,-.3,.36,-.26,.09,.9,.8),wv(e,Q,.36,.3,.34,-.5,Q.flag,.8),Cv(e,Q,-.34,.3,.24)}function ab(e){Iv(e,Q),e.put(`cargo_a`,.3,.16,.19,.3)}var ob={campfire:Wy,mushroom:Gy,well:Ky,cabin:qy,cottage:Jy,windmill:Xy,sawmill:Zy,watermill:Qy,market:$y,treehouse:eb,forge:tb,archery:nb,tavern:rb,lodge:ib,tower:ab,site:e=>jv(e,Q)};function sb(e,t){if(t===0)return hv(e,Q,`lander_a`,0,0,.5),wv(e,Q,.32,.26,.34,-.5,Q.flag,.8),Ov(e,-.34,.14,.2,.3),e.put(`cargo_b`,-.3,-.12,.2,.9),e.put(`cont_a`,.33,-.1,.26,.4),Cv(e,Q,-.26,.32,.26),1.12;if(t===1)hv(e,Q,`lander_b`,0,0,.56),Sv(e,Q,.38,-.1,.16,.11,1.2,.6,.08),Ov(e,-.36,.1,.2,.3),e.put(`cont_c`,-.34,-.14,.26,.7),wv(e,Q,.3,.3,.32,-.5,Q.flag,.8),Cv(e,Q,-.24,.34,.26);else if(t===2)hv(e,Q,`mod_a`,0,0,.37),Sv(e,Q,.4,-.2,.16,.11,1,.6,.08),Sv(e,Q,.42,.02,.16,.11,1,.6,.08),Ov(e,-.4,.2,.19,.3),e.put(`truck`,-.38,-.2,.3,.4),wv(e,Q,.3,.38,.34,-.5,Q.flag,.8),Cv(e,Q,-.24,.4,.26);else if(t===3||t===4){let n=.34;hv(e,Q,`mod_b`,.1,0,n),e.put(`roof_solar`,.1,0,n,0,{},n),hv(e,Q,`mod_c`,-.34,.06,.25),wv(e,Q,-.12,.44,.4,0,Q.flag,.8),Cv(e,Q,.4,.38,.27),e.put(`cont_b`,.42,-.24,.26,.4),t===4&&(e.put(`frame_tall`,-.3,-.34,.22,0),_v(e,Q,-.3,-.34,.11,.43),xv(e,Q,-.2,.47,-.42,.06,2.4,.9),wv(e,Q,-.5,.44,.4,0,Q.trim,.8),e.put(`truck_l`,.42,-.02,.28,.2))}else{hv(e,Q,`mod_e`,0,-.04,.42),hv(e,Q,`mod_c`,-.42,.2,.2,.5),hv(e,Q,`mod_c`,.42,.2,.2,-.5),bv(e,Q,-.36,-.34,.74),xv(e,Q,-.36,.46,-.34,.1,.9,.8);for(let t of[-1,1])wv(e,Q,t*.17,.5,.44,t<0?Math.PI:0,t<0?Q.trim:Q.flag,.8),Cv(e,Q,t*.34,.48,.27);Sv(e,Q,.4,-.3,.17,.12,1,.6,.09)}return 1}var cb=[`#5a8a6a`,`#a8d0a0`],lb=[`#ff9db2`,`#ffe08a`,`#ffffff`,`#c9a7ff`,`#ffb070`,`#ff7a8a`],ub={landmarks:ob,garden:(e,t)=>kv(e,Q,t),honours:(e,t,n)=>Av(e,Q,t,n,.8),home:sb,homeNames:[`Landing site`,`Pod`,`Pod`,`Habitat`,`Habitat`,`Station`,`Station`,`Outpost`,`Colony`],decor:(e,t)=>Mv(e,Q,t,(e,t,n)=>{let r=e.out.length;dg(e.out,e.rng,t,n,ng(lb,e.rng),.5,cb);for(let t=r;t<e.out.length;t++)e.out[t].translate(0,.05,0)}),spinner:e=>e===`windmill`?{parts:[q(Op(`turbine_tall_fan`),0,0,0,Yy)],y:2.05*Yy,z:0,axis:`z`,speed:1.5}:null},db={id:`mars`,name:`Mars`,blurb:`A colony on red ground. Life arrives a tree at a time.`,coin:{name:`ore`,icon:Fg.ore,ink:`#ffb48c`},gem:{name:`ice`,one:`a core of ice`,icon:Fg.ice,ink:`#c4ecff`},swatch:[`#e8c49c`,`#c8643c`,`#35a0a8`],pal:{grassLush:`#c4603a`,grassMid:`#d27a4c`,grassDry:`#c9a488`,grassFree:`#9fb26a`,grassHeart:`#cc6c42`,grassToday:`#d9824e`,todayTint:`#ffc890`,sand:`#e2aa7c`,soil:`#7a3626`,bed:`#ecd2bc`,stoneHi:`#d08a62`,stoneLo:`#8e4a36`,stoneWarm:`#b8663e`,flowers:[`#ffffff`,`#ffe08a`,`#ff9db2`,`#c9a7ff`,`#ffb070`,`#9ce8e0`,`#ff7a8a`],rock:Ey,moss:Dy,boulder:[`#b06a48`,`#eab890`],pebble:[`#c08a6a`,`#f0d0b4`],path:[`#c9a688`,`#f0dcc4`],spire:[`#8a4a38`,`#c07a58`],rune:[`#5a3a3a`,`#a87a66`],glyph:`#8fe9ff`,debris:[`#6c3a30`,`#c4704a`],debrisCap:[`#d09a70`,`#f0c8a0`],isletSand:`#e0a070`,isletRock:[`#6c3a30`,`#b9643e`],lantern:[`#c8ccd0`,`#8a9098`],sprout:`#ffd9a8`},flora:Hy,build:ub,look:{shade:`#2e6c8c`,light:`#ffd8a4`,tone:.26,sat:1.05,contrast:1.08,sheen:1},ground:U.dust,kit:[{},fv(Q)],kitGlow:[{},{}],water:{river:!0,color:`#7fd8e8`,glow:0,pond:{color:`#8fe0ea`,emissive:`#3fb0c8`,rough:.08}},sky:{kfs:qg({top:`#120b14`,hor:`#3a2430`,bot:`#1c1016`,fog:`#2a1a22`,sun:`#c8b8e0`,sunI:.85,hemiSky:`#6a5a80`,hemiGround:`#4a3038`,hemiI:.9,night:1},{top:`#5a4660`,hor:`#9cc0e8`,bot:`#7a5a6a`,fog:`#a08a9a`,sun:`#d4e2ff`,sunI:1.4,hemiSky:`#b0b8e0`,hemiGround:`#8a6a6a`,hemiI:1.05,night:.35},{top:`#b49c90`,hor:`#f6e4cc`,bot:`#a8765e`,fog:`#ecd6bc`,sun:`#fff2e0`,sunI:2.5,hemiSky:`#f0e0d0`,hemiGround:`#a87860`,hemiI:1,night:0},{top:`#b8a294`,hor:`#faecd6`,bot:`#ac7a62`,fog:`#f0dec4`,sun:`#fff8ec`,sunI:2.9,hemiSky:`#f4e8d8`,hemiGround:`#b08064`,hemiI:1.05,night:0},{top:`#ac9088`,hor:`#f8dec0`,bot:`#a06c58`,fog:`#ecd2b6`,sun:`#ffecd2`,sunI:2.5,hemiSky:`#f0dccc`,hemiGround:`#a8745c`,hemiI:.95,night:0},{top:`#4a3c5e`,hor:`#8ab8ea`,bot:`#80607a`,fog:`#9a8aa8`,sun:`#cfe4ff`,sunI:1.45,hemiSky:`#b4bce6`,hemiGround:`#866474`,hemiI:1.1,night:.3},{top:`#1e1428`,hor:`#4a4470`,bot:`#2c1e30`,fog:`#33283e`,sun:`#b8b8f0`,sunI:1,hemiSky:`#5c5890`,hemiGround:`#40303e`,hemiI:.85,night:.85}),dark:!1,stars:0,clouds:{low:`#c9a088`,high:`#f8e6d0`,glow:.8},planet:null,ground:{low:`#93594c`,high:`#be8a72`,mark:`#70443c`,depth:30},aurora:[`#7fd0ff`,`#ff9ac0`]},heart:{crystal:`#d4f6ff`,crystalGlow:`#4fc8ff`,glow:`#7fe0ff`,core:`#9fecff`,tree:`#a8ffd8`,treeGold:`#ffe08a`},life:{motes:[`#ffe2c0`,`#ffd08a`],petals:`#ffd2b8`,flyers:{kind:`craft`,color:`#e8e4dc`,light:`#ffb060`},fire:`#ff8a3c`,smoke:`#f0e4d8`,lamp:`#ffd9a0`},words:{heartTree:`the pale-barked, jade-leaved one in the ring of stones beside it, the first tree on Mars`,ground:`warm`},unlocks:{2:`Dust glints by day, sparks by night`,3:`Survey drones overhead`,4:`Lamps round the home`,7:`Lights in the night sky`},items:{campfire:{name:`Heater`,a:`a heater`,blurb:`Somewhere warm to gather. The crew brings ore to it.`},garden:{name:`Greenhouse`,a:`a greenhouse`,blurb:`Plant a crop, come back, harvest it.`},mushroom:{name:`Lander`,a:`a lander`,blurb:`A new crew sets down.`},well:{name:`Ice drill`,a:`an ice drill`,blurb:`Brings up a core of ice every few hours.`},cabin:{name:`Habitat`,a:`a habitat`,blurb:`Four walls and air to breathe.`},cottage:{name:`Crew quarters`,a:`crew quarters`,blurb:`A family settles on the island.`},windmill:{name:`Wind turbine`,a:`a wind turbine`,blurb:`Turns all day in the thin wind.`},sawmill:{name:`Workshop`,a:`a workshop`,blurb:`Parts for everything that comes next.`},watermill:{name:`Water works`,a:`a water works`,blurb:`The meltwater does the work.`},market:{name:`Cargo depot`,a:`a cargo depot`,blurb:`Supply ships start to call.`},treehouse:{name:`Sky deck`,a:`a sky deck`,blurb:`A lookout over the red plain.`},forge:{name:`Smelter`,a:`a smelter`,blurb:`The furnace never goes out.`},archery:{name:`Rover yard`,a:`a rover yard`,blurb:`Steady hands, steady breath.`},tavern:{name:`Canteen`,a:`a canteen`,blurb:`Stories, and nothing stronger than tea.`},lodge:{name:`Command dome`,a:`a command dome`,blurb:`One roof for the whole colony.`},tower:{name:`Relay mast`,a:`a relay mast`,blurb:`Lifts the whole colony: everything makes a quarter more.`}},decor:{cairn:{name:`Rock cairn`,a:`a rock cairn`},lamp:{name:`Light mast`,a:`a light mast`},hive:{name:`Weather station`,a:`a weather station`},birdhouse:{name:`Aerial`,a:`an aerial`},flowerbed:{name:`Planter`,a:`a planter`},signpost:{name:`Flag`,a:`a flag`},barrels:{name:`Supply crates`,a:`a stack of supply crates`}}},fb=[`#6e727c`,`#c6c9d0`],pb=`#e6e9f0`,mb=[`#8a8d98`,`#dcdfe6`],$={hull:[`#b4b8c2`,`#f6f8fa`],metal:[`#70747c`,`#c0c4c8`],dark:[`#2e3038`,`#5c606a`],trim:[`#c8922a`,`#ffd75a`],accent:[`#b4842a`,`#f2cc62`],glass:[`#3a78c8`,`#b4dcff`],glassGlow:.5,lamp:`#cfe8ff`,red:[`#c0403a`,`#f2786a`],green:[`#2f8a72`,`#86d8b8`],blue:[`#2f5fc0`,`#86b8ff`],panel:[`#1a2f70`,`#4878d8`],flag:[`#2f5fc0`,`#9cc4ff`],rock:fb,soil:[`#3a3c44`,`#62656f`]};dv($);var hb=[[`#7fb4e8`,`#e8f6ff`],[`#8fc8f0`,`#f2fbff`]],gb=[[`#35b0a8`,`#c8fff2`],[`#4fa8d8`,`#d0f4ff`]],_b=[[`#e09a3a`,`#fff0b8`],[`#e8804a`,`#ffe0b0`]],vb=[[`#e07aa8`,`#ffe0ee`],[`#c08ae0`,`#f4e0ff`]],yb=[hb[0],vb[0],_b[0],gb[0],[`#e8e8f8`,`#ffffff`]],bb=[[`#35c0a0`,`#d8fff0`],[`#4fd0b8`,`#e8fff8`]],xb=[[`#e8a82a`,`#fff2b8`],[`#f0b840`,`#fff8d0`]],Sb=[`#7a7d88`,`#d0d3da`];function Cb(e,t,n,r,i,a){let o=Uf([[a*1.45,0],[a,i*.16],[a*.82,i*.6],[a*.7,i]],5,t,.06);return e.push(G(q(o,n,0,r,1,1,1,t()*W),Sb[0],0,t,.05,Sb[1])),i}function wb(e,t,n,r,i,a,o,s){let c=s.thick??1,l=Cb(e,t,n,r,s.h*i,.05*i*c),u=(s,c,l,u,d)=>{let f=t()*W;for(let p=0;p<c;p++){let m=f+p/c*W+(t()-.5)*.4;fg(e,t,n+Math.cos(m)*.02*i,s,r+Math.sin(m)*.02*i,u,l*(.6+t()*.3),ng(a,t),o,d+(t()-.5)*.3,m)}};fg(e,t,n,l*.9,r,.06*i*c,s.len*i,ng(a,t),o,(t()-.5)*.14,t()*W),u(l*.88,s.n,s.len*i,.042*i*c,s.spread),s.tier&&u(l*.56,4,s.len*i*.62,.032*i*c,s.spread+.25)}function Tb(e,t,n,r,i,a,o){for(let a=0;a<2;a++){let a=t()*W;ag(e,t,n+Math.cos(a)*.06*i,r+Math.sin(a)*.06*i,.9*i,fb)}fg(e,t,n,0,r,.075*i,(.8+t()*.16)*i,a,o,(t()-.5)*.12,t()*W);let s=t()*W;for(let c=0;c<3;c++){let l=s+c*2.1+t()*.5;fg(e,t,n+Math.cos(l)*.07*i,0,r+Math.sin(l)*.07*i,.035*i,(.2+t()*.18)*i,a,o,.3+t()*.3,l)}}var Eb={selenite:(e,t,n,r,i)=>wb(e,t,n,r,i,hb,.26,{h:.5,len:.42,n:6,spread:.7}),prism:(e,t,n,r,i)=>Tb(e,t,n,r,i,ng(hb,t),.28),frost:(e,t,n,r,i)=>wb(e,t,n,r,i,gb,.28,{h:.66,len:.34,n:7,spread:1,tier:!0}),amber:(e,t,n,r,i)=>wb(e,t,n,r,i,_b,.3,{h:.46,len:.4,n:6,spread:.85}),rose:(e,t,n,r,i)=>{ag(e,t,n,r,1.2*i,fb),pg(e,t,n,r,2.3*i,ng(vb,t),.28,5)},opal:(e,t,n,r,i)=>{wb(e,t,n,r,i,yb,.4,{h:.5,len:.42,n:8,spread:.8,tier:!0});for(let a=0;a<3;a++){let a=t()*W;vg(e,t,n+Math.cos(a)*.3*i,(.5+t()*.4)*i,r+Math.sin(a)*.3*i,.018*i,`#ffffff`,.9)}}},Db=[`#9aa0b0`,`#dfe4ee`],Ob={pools:{pre:[[`selenite`,.45],[`prism`,.3],[`frost`,.25]],a:[[`selenite`,.45],[`prism`,.3],[`frost`,.25]],b:[[`frost`,.55],[`prism`,.25],[`selenite`,.2]],c:[[`amber`,.55],[`rose`,.45]],free:[[`opal`,1]]},wild:[`selenite`,`prism`,`frost`,`rose`],footprint:{selenite:.3,prism:.2,frost:.3,amber:.3,rose:.26,opal:.32},tree:(e,t,n,r,i,a)=>(Eb[n]??Eb.selenite)(e,t,r,i,a*am),great:(e,t,n,r,i)=>{wb(e,t,0,0,n,r?xb:bb,.36,{h:.6,len:.52,n:9,spread:.85,tier:!0,thick:1.5});let a=Math.min(i,8)*2;for(let i=0;i<a;i++){let i=t()*W,a=.1+t()*1.1,o=(.42+t()*.08)*n;vg(e,t,Math.cos(i)*Math.cos(a)*o,.62*n+Math.sin(a)*o*.9,Math.sin(i)*Math.cos(a)*o,.022+t()*.012,r?`#fff3c0`:`#e8fff6`,.9,0,1.5)}},seedling:(e,t)=>{fg(e,t,0,0,0,.03,.17,bb[0],.45,.05,0),fg(e,t,.03,0,.01,.016,.08,bb[1],.45,.5,.2),fg(e,t,-.028,0,-.012,.014,.07,bb[1],.45,.5,3.2)},ring:(e,t,n)=>hg(e,t,n,mb,[`#bfe8ff`,`#f0fbff`]),bush:(e,t,n,r,i,a)=>{if(a)for(let a=0;a<3;a++)ag(e,t,n+(t()-.5)*.16*i,r+(t()-.5)*.16*i,(.6+t()*.5)*i,fb);else pg(e,t,n,r,i,ng([...hb,...gb],t),.26,4)},fern:(e,t,n,r,i)=>cg(e,t,n,r,[`#8fc0e8`,`#eaf8ff`],{n:5,h:.09*i,w:.02,sway:0,glow:.22,lean:.55}),flower:(e,t,n,r,i,a)=>dg(e,t,n,r,i,a,Db,{glow:.5,centre:`#ffffff`,sway:0}),mushroom:(e,t,n,r,i,a=`#bfe8ff`)=>{e.push(G(q(new V(.012*i,.02*i,.11*i,5),n,.055*i,r),Db[0],0,t,.04,Db[1])),e.push(K(G(q(new ms(.042*i,0),n,.13*i,r,1,1,1,t()*W),a,0,t,.03,`#ffffff`),.55))},stump:(e,t,n,r,i)=>mg(e,t,n,r,.11*i,mb,`#565a66`),log:(e,t,n,r,i,a=t()*W)=>sg(e,t,n,r,i,a,[`#2e3038`,`#70747e`],.26),rock:(e,t,n,r,i,a=t()<.4)=>{t()<.22?mg(e,t,n,r,.085*i,mb,`#5a5e6a`):ag(e,t,n,r,i,fb,a?pb:void 0)},tuft:(e,t,n,r,i)=>{if(i)for(let i=0;i<2;i++)ag(e,t,n+(t()-.5)*.06,r+(t()-.5)*.06,.3+t()*.2,fb);else cg(e,t,n,r,[`#9fc8ec`,`#f0faff`],{n:3,h:.06,w:.015,sway:0,glow:.22,lean:.25})},pond:(e,t,n,r,i)=>{mg(e,t,n,r,i*1.15,mb,`#bfe4ff`,.35);for(let a=0;a<3;a++){let a=t()*W;fg(e,t,n+Math.cos(a)*i*.95,.03,r+Math.sin(a)*i*.95,.02,.09+t()*.06,hb[0],.3,.3,a)}}};function kb(e){Tv(e,$,0,0,.2),hv(e,$,`lights`,0,0,.44),e.put(`cargo_b`,.3,.13,.2,.5),e.put(`cargo_a`,-.29,.16,.2,-.4),e.put(`cont_c`,-.04,-.31,.26,.2),e.fire(0,.36,0,1)}function Ab(e){hv(e,$,`lander_a`,0,0,.5),wv(e,$,.34,.24,.3,-.4,$.flag,0),Ov(e,-.34,.2,.19,.4);for(let t=0;t<4;t++)e.add(X(.018,.004,.034,.1+t*.045,.002,.3+t%2*.03,.5),`#8a8d98`)}function jb(e){e.put(`drill`,0,0,.34,0),vv(e,$,.27,.2,.05,.13,$.blue,$.metal),Ev(e,$,[[.08,.02,.1],[.2,.02,.2]],.01),Sv(e,$,-.3,.2,.13,.09,-.6,.6,.06)}function Mb(e){hv(e,$,`mod_c`,0,0,.35),Sv(e,$,.37,-.18,.15,.1,.9,.6,.07),e.put(`cargo_b`,-.37,.22,.19,.3),Cv(e,$,.3,.32,.24)}function Nb(e){let t=.33;hv(e,$,`mod_a`,0,0,t),e.put(`roof_cargo_a`,0,0,t,.4,{},t),e.put(`cont_c`,.36,.22,.26,.4),wv(e,$,-.34,.32,.28,.4,$.flag,0)}function Pb(e){e.put(`frame_low`,0,0,.27,0),e.add(q(new V(.03,.045,.1,8),0,Fb-.05,0),$.metal[0],$.metal[1]),e.put(`cont_b`,.3,.2,.24,.6),Cv(e,$,-.3,.24,.22)}var Fb=.36;function Ib(e){hv(e,$,`garage`,-.06,-.06,.31),e.put(`truck_l`,.33,.26,.28,2.5),e.put(`cargo_b_stacked`,-.37,.27,.15,.3)}function Lb(e){yv(e,$,-.08,-.14,.1,.52,.2,$.hull,$.trim),yv(e,$,-.02,.1,.085,.46,.2,$.hull,$.blue),vv(e,$,.3,-.16,.06,.24,$.hull,$.red),Ev(e,$,[[.2,.13,-.12],[.3,.13,-.16]],.011),Ev(e,$,[[.2,.05,.14],[.32,.05,.22],[.32,.02,.34]],.011),Cv(e,$,-.34,.3,.24)}function Rb(e){hv(e,$,`depot_a`,0,0,.37),e.put(`cargo_a_stacked`,.36,.3,.15,.4)}function zb(e){let t=.3;e.put(`frame_tall`,0,0,t,0),_v(e,$,0,0,.16,.58,1,$.hull,0),e.add(X(.05,.02,.3,0,.71,.02),$.dark[0],$.dark[1]);let n=new V(.03,.036,.26,8);n.translate(0,.13,0),n.rotateX(.7),e.add(q(n,0,.6399999999999999,.02),$.metal[0],$.metal[1]);let r=new V(.026,.026,.01,8);r.translate(0,.262,0),r.rotateX(.7),K(e.add(q(r,0,.6399999999999999,.02),$.glass[0],$.glass[1]),.8),Nv(e,$,0,.25,2*t),e.put(`cont_b`,-.3,.24,.24,.3)}function Bb(e){hv(e,$,`mod_d`,.05,0,.29),Pv(e,$,-.26,-.16,.5),Fv(e,$,-.28,.2,[`#ff6a2a`,`#ffe08a`]),K(gv(e,q(new gs(.03,0),-.26,.56,-.16),`#ff9a4a`),1.6),e.put(`cargo_b`,.38,.26,.19,.3)}function Vb(e){Tv(e,$,0,0,.32),Dv(e,$,0,0,1.7,.03),e.add(X(.05,.6,.05,-.2,.33,-.12),$.metal[0],$.metal[1]);for(let t of[.16,.3,.44,.58])e.add(X(.06,.012,.06,-.2,t,-.12),$.accent[0],$.accent[1]);e.add(X(.17,.014,.022,-.115,.5,-.075,.5),$.metal[0],$.metal[1]),K(gv(e,q(new gs(.02,0),-.2,.66,-.12),`#ff6a5a`),2),Cv(e,$,.3,.26,.2),e.put(`cont_d`,.32,-.2,.24,.5)}function Hb(e){hv(e,$,`mod_b`,0,0,.32),_v(e,$,0,0,.13,.3),Cv(e,$,.34,.3,.26),Cv(e,$,-.34,.3,.26,`#ffd9a0`),e.put(`cont_a`,-.37,.08,.24,.5)}function Ub(e){hv(e,$,`mod_e`,0,0,.35),bv(e,$,-.3,-.26,.6),xv(e,$,-.3,.36,-.26,.09,.9,.8),wv(e,$,.36,.3,.34,-.5,$.flag,0),Sv(e,$,.36,-.24,.16,.11,1,.6,.08)}function Wb(e){Iv(e,$,`#9fd8ff`,2),Sv(e,$,.3,.14,.14,.1,.6,.6,.07)}var Gb={campfire:kb,mushroom:Ab,well:jb,cabin:Mb,cottage:Nb,windmill:Pb,sawmill:Ib,watermill:Lb,market:Rb,treehouse:zb,forge:Bb,archery:Vb,tavern:Hb,lodge:Ub,tower:Wb,site:e=>jv(e,$)};function Kb(e,t){if(t===0){hv(e,$,`lander_a`,0,0,.5),wv(e,$,.32,.26,.34,-.5,$.flag,0),Ov(e,-.34,.14,.2,.3),e.put(`cargo_b`,-.3,-.12,.2,.9),Cv(e,$,-.26,.32,.26);for(let t=0;t<5;t++)e.add(X(.018,.004,.034,.08+t*.045,.002,.32+t%2*.03,.5),`#8a8d98`);return 1.12}if(t===1)hv(e,$,`mod_c`,0,0,.37),e.put(`lander_base`,-.4,-.2,.22,.3),Sv(e,$,.4,-.1,.16,.11,1.2,.6,.08),Ov(e,-.38,.14,.2,.3),wv(e,$,.3,.36,.32,-.5,$.flag,0),Cv(e,$,-.24,.38,.26);else if(t===2)hv(e,$,`mod_a`,.08,0,.35),hv(e,$,`lander_b`,-.36,.08,.34,.4),Sv(e,$,.44,-.2,.16,.11,1,.6,.08),e.put(`truck`,.42,.1,.28,.3),wv(e,$,.2,.42,.34,-.5,$.flag,0),Cv(e,$,-.14,.42,.26);else if(t===3||t===4){let n=.34;hv(e,$,`mod_d`,.1,0,n*.94),e.put(`roof_cargo_b`,.1,0,n*.9,.3,{},n*.94),hv(e,$,`mod_c`,-.35,.06,.25),wv(e,$,-.12,.44,.4,0,$.flag,0),Cv(e,$,.42,.38,.27),Sv(e,$,.44,-.26,.16,.11,1,.6,.08),t===4&&(Tv(e,$,-.34,-.34,.17),Dv(e,$,-.34,-.34,1.2,.03),wv(e,$,-.5,.44,.4,0,$.trim,0),e.put(`truck_l`,.44,0,.26,.2))}else{hv(e,$,`mod_e`,0,-.04,.42),hv(e,$,`mod_c`,-.42,.2,.2,.5),hv(e,$,`mod_a`,.42,.2,.19,-.5),bv(e,$,.38,-.32,.7),xv(e,$,.38,.44,-.32,.1,-.9,.8),Dv(e,$,-.4,-.3,1.3,.02);for(let t of[-1,1])wv(e,$,t*.17,.5,.44,t<0?Math.PI:0,t<0?$.trim:$.flag,0),Cv(e,$,t*.34,.48,.27)}return 1}var qb={landmarks:Gb,garden:(e,t)=>kv(e,$,t,{lamp:`#c8a0ff`}),honours:(e,t,n)=>Av(e,$,t,n,0),home:Kb,homeNames:[`Lander`,`Module`,`Module`,`Base`,`Base`,`Station`,`Station`,`Outpost`,`Lunar city`],decor:(e,t)=>Mv(e,$,t,(e,t,n)=>fg(e.out,e.rng,t,.05,n,.014,.05+e.rng()*.05,ng([...hb,...vb,..._b],e.rng),.45,(e.rng()-.5)*.4,e.rng()*W),0),spinner:e=>{if(e!==`windmill`)return null;let t=[];return xv(new nh(t,Ig(`radar`),.03),$,0,.06,0,.2,0,.95),{parts:t,y:Fb,z:0,axis:`y`,speed:.5}}},Jb={id:`moon`,name:`Moon`,blurb:`A base in the grey dust, with the Earth overhead.`,coin:{name:`moonstones`,icon:Fg.moonstone,ink:`#dfe8ff`},gem:{name:`helium`,one:`a flask of helium`,icon:Fg.helium,ink:`#b9c6ff`},swatch:[`#0a0e1c`,`#b9bcc6`,`#7fb4e8`],pal:{grassLush:`#b9bcc6`,grassMid:`#a4a7b2`,grassDry:`#84868f`,grassFree:`#c6d4ea`,grassHeart:`#b4b8c2`,grassToday:`#c2c5ce`,todayTint:`#e8f0ff`,sand:`#cfd2da`,soil:`#565a66`,bed:`#dfe6f0`,stoneHi:`#9a9da8`,stoneLo:`#50535e`,stoneWarm:`#7a7c88`,flowers:[`#bfe8ff`,`#fff2b0`,`#ffc0e0`,`#c8b8ff`,`#a8ffe0`,`#ffffff`,`#ffd0a0`],rock:fb,moss:pb,boulder:[`#8a8d98`,`#dcdfe6`],pebble:[`#9a9da8`,`#e2e5ec`],path:[`#8f929c`,`#d0d3da`],spire:[`#5c5f6a`,`#9a9da8`],rune:[`#4a4c58`,`#8a8d98`],glyph:`#a8e4ff`,debris:[`#4a4c56`,`#a0a3ae`],debrisCap:null,isletSand:`#c8ccd4`,isletRock:[`#4a4c56`,`#8e919c`],lantern:[`#c8ccd0`,`#8a9098`],sprout:`#cfe8ff`},flora:Ob,build:qb,look:{shade:`#3050d0`,light:`#fff0d4`,tone:.24,sat:1.1,contrast:1.1,sheen:1.3},ground:U.regolith,kit:[{},fv($)],kitGlow:[{},{}],water:{river:!1,color:`#a8dcff`,glow:.4,pond:{color:`#cfeaff`,emissive:`#6fb8f0`,rough:.2}},sky:{kfs:qg({top:`#020308`,hor:`#0a0e1c`,bot:`#04060e`,fog:`#060810`,sun:`#9fc0ff`,sunI:.95,hemiSky:`#4a5a88`,hemiGround:`#2a2e44`,hemiI:.9,night:1},{top:`#03040a`,hor:`#141a2e`,bot:`#070a14`,fog:`#0a0d18`,sun:`#ffe8d0`,sunI:1.7,hemiSky:`#7a88b0`,hemiGround:`#3a3e52`,hemiI:.85,night:.35},{top:`#04050c`,hor:`#1a2034`,bot:`#0a0c16`,fog:`#0c0f1a`,sun:`#fff6ea`,sunI:2.9,hemiSky:`#aab4d0`,hemiGround:`#565a6a`,hemiI:.8,night:0},{top:`#04050c`,hor:`#1c2236`,bot:`#0a0c16`,fog:`#0c0f1a`,sun:`#ffffff`,sunI:3.2,hemiSky:`#b8c0d8`,hemiGround:`#606472`,hemiI:.82,night:0},{top:`#04050c`,hor:`#1a2034`,bot:`#0a0c16`,fog:`#0c0f1a`,sun:`#fff4e4`,sunI:2.8,hemiSky:`#aab4d0`,hemiGround:`#565a6a`,hemiI:.8,night:0},{top:`#03040a`,hor:`#141a2e`,bot:`#070a14`,fog:`#0a0d18`,sun:`#ffe0c8`,sunI:1.6,hemiSky:`#7a88b0`,hemiGround:`#3a3e52`,hemiI:.85,night:.3},{top:`#020308`,hor:`#0c1020`,bot:`#05070f`,fog:`#070912`,sun:`#a8c4ff`,sunI:1,hemiSky:`#525f8c`,hemiGround:`#2c3046`,hemiI:.88,night:.85}),dark:!0,stars:1,clouds:null,planet:{kind:`earth`,yaw:.085,elev:-.44,size:64,follow:1},ground:{low:`#3c404c`,high:`#6e727e`,mark:`#282a33`,depth:34},aurora:[`#9fd8ff`,`#d8b8ff`]},heart:{crystal:`#d8f4ff`,crystalGlow:`#5fc0ff`,glow:`#8fd4ff`,core:`#a8e0ff`,tree:`#3f8a80`,treeGold:`#8a6c2c`},life:{motes:[`#dfeaff`,`#bfe0ff`],petals:`#dfeeff`,flyers:{kind:`craft`,color:`#d8dce4`,light:`#9fe0ff`},fire:`#cfe4ff`,smoke:`#e8ecf4`,lamp:`#cfe8ff`},words:{heartTree:`the tall crystal tree glowing jade in the ring of stones beside it`,ground:`bright`},unlocks:{2:`Stardust drifting over the island`,3:`Shuttles overhead`,4:`Lamps round the home`,5:`Drifting crystal dust`,7:`Lights in the black sky`},items:{campfire:{name:`Floodlight`,a:`a floodlight`,blurb:`Somewhere bright to gather. The crew brings moonstones to it.`},garden:{name:`Hydroponics`,a:`a hydroponics bay`,blurb:`Plant a crop, come back, harvest it.`},mushroom:{name:`Lander`,a:`a lander`,blurb:`A new crew sets down.`},well:{name:`Helium drill`,a:`a helium drill`,blurb:`Draws a flask of helium out of the dust every few hours.`},cabin:{name:`Module`,a:`a module`,blurb:`Four walls and air to breathe.`},cottage:{name:`Crew quarters`,a:`crew quarters`,blurb:`A family settles on the island.`},windmill:{name:`Radar`,a:`a radar`,blurb:`Turns all day, watching the sky.`},sawmill:{name:`Rover garage`,a:`a rover garage`,blurb:`Wheels for everything that comes next.`},watermill:{name:`Fuel plant`,a:`a fuel plant`,blurb:`The ice does the work.`},market:{name:`Cargo depot`,a:`a cargo depot`,blurb:`Supply ships start to call.`},treehouse:{name:`Observatory`,a:`an observatory`,blurb:`A clear look at everything.`},forge:{name:`Foundry`,a:`a foundry`,blurb:`The furnace never goes out.`},archery:{name:`Launch pad`,a:`a launch pad`,blurb:`Steady hands, steady breath.`},tavern:{name:`Galley`,a:`a galley`,blurb:`Stories, and nothing stronger than tea.`},lodge:{name:`Command dome`,a:`a command dome`,blurb:`One roof for the whole base.`},tower:{name:`Relay tower`,a:`a relay tower`,blurb:`Lifts the whole base: everything makes a quarter more.`}},decor:{cairn:{name:`Rock cairn`,a:`a rock cairn`},lamp:{name:`Floodlamp`,a:`a floodlamp`},hive:{name:`Sensor station`,a:`a sensor station`},birdhouse:{name:`Aerial`,a:`an aerial`},flowerbed:{name:`Crystal bed`,a:`a crystal bed`},signpost:{name:`Flag`,a:`a flag`},barrels:{name:`Supply crates`,a:`a stack of supply crates`}}};for(let e of[Ty,db,Jb,lv,wy])ep(e);var Yb={type:`change`},Xb={type:`start`},Zb={type:`end`},Qb=new Ui,$b=new bi,ex=Math.cos(70*un.DEG2RAD),tx=new z,nx=2*Math.PI,rx={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ix=1e-6,ax=class extends Wc{constructor(e,t=null){super(e,t),this.state=rx.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:k.ROTATE,MIDDLE:k.DOLLY,RIGHT:k.PAN},this.touches={ONE:A.ROTATE,TWO:A.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new dn,this._lastTargetPosition=new z,this._quat=new dn().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new z,this._rotateStart=new R,this._rotateEnd=new R,this._rotateDelta=new R,this._panStart=new R,this._panEnd=new R,this._panDelta=new R,this._dollyStart=new R,this._dollyEnd=new R,this._dollyDelta=new R,this._dollyDirection=new z,this._mouse=new R,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sx.bind(this),this._onPointerDown=ox.bind(this),this._onPointerUp=cx.bind(this),this._onContextMenu=hx.bind(this),this._onMouseWheel=dx.bind(this),this._onKeyDown=fx.bind(this),this._onTouchStart=px.bind(this),this._onTouchMove=mx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=ux.bind(this),this._interceptControlDown=gx.bind(this),this._interceptControlUp=_x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=rx.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yb),this.update(),this.state=rx.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;tx.copy(t).sub(this.target),tx.applyQuaternion(this._quat),this._spherical.setFromVector3(tx),this.autoRotate&&this.state===rx.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=nx:n>Math.PI&&(n-=nx),r<-Math.PI?r+=nx:r>Math.PI&&(r-=nx),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(tx.setFromSpherical(this._spherical),tx.applyQuaternion(this._quatInverse),t.copy(this.target).add(tx),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=tx.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new z(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new z(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=tx.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Qb.origin.copy(this.object.position),Qb.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qb.direction))<ex?this.object.lookAt(this.target):($b.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qb.intersectPlane($b,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>ix||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ix||this._lastTargetPosition.distanceToSquared(this.target)>ix?(this.dispatchEvent(Yb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?nx/60/60*this.autoRotateSpeed:nx/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tx.setFromMatrixColumn(t,0),tx.multiplyScalar(-e),this._panOffset.add(tx)}_panUp(e,t){this.screenSpacePanning===!0?tx.setFromMatrixColumn(t,1):(tx.setFromMatrixColumn(t,0),tx.crossVectors(this.object.up,tx)),tx.multiplyScalar(e),this._panOffset.add(tx)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;tx.copy(r).sub(this.target);let i=tx.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nx*this._rotateDelta.x/t.clientHeight),this._rotateUp(nx*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nx*this._rotateDelta.x/t.clientHeight),this._rotateUp(nx*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new R,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ox(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function sx(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function cx(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Zb),this.state=rx.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function lx(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case k.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=rx.DOLLY;break;case k.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=rx.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=rx.ROTATE}break;case k.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=rx.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=rx.PAN}break;default:this.state=rx.NONE}this.state!==rx.NONE&&this.dispatchEvent(Xb)}function ux(e){switch(this.state){case rx.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case rx.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case rx.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function dx(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===rx.NONE&&(e.preventDefault(),this.dispatchEvent(Xb),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Zb))}function fx(e){this.enabled!==!1&&this._handleKeyDown(e)}function px(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case A.ROTATE:if(this.enableRotate===!1){this.state=rx.NONE;break}this._handleTouchStartRotate(e),this.state=rx.TOUCH_ROTATE;break;case A.PAN:if(this.enablePan===!1){this.state=rx.NONE;break}this._handleTouchStartPan(e),this.state=rx.TOUCH_PAN;break;default:this.state=rx.NONE}break;case 2:switch(this.touches.TWO){case A.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=rx.TOUCH_DOLLY_PAN;break;case A.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=rx.TOUCH_DOLLY_ROTATE;break;default:this.state=rx.NONE}break;default:this.state=rx.NONE}this.state!==rx.NONE&&this.dispatchEvent(Xb)}function mx(e){switch(this._trackPointer(e),this.state){case rx.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case rx.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case rx.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case rx.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=rx.NONE}}function hx(e){this.enabled!==!1&&e.preventDefault()}function gx(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function _x(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var vx={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},yx=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},bx=new vc(-1,1,1,-1,0,1),xx=new class extends fi{constructor(){super(),this.setAttribute(`position`,new ei([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new ei([0,2,0,0,2,0],2))}},Sx=class{constructor(e){this._mesh=new na(xx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Cx=class extends yx{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ks?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Es.clone(e.uniforms),this.material=new ks({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sx(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},wx=class extends yx{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Tx=class extends yx{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ex=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new Mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pe}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cx(vx),this.copyPass.material.blending=0,this.timer=new Tc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}wx!==void 0&&(r instanceof wx?n=!0:r instanceof Tx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Dx={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Ox=class extends Cx{constructor(){super(Dx)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}},kx={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Fn},cameraProjectionMatrixInverse:{value:new Fn},cameraWorldMatrix:{value:new Fn},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new z(-1,-1,-1)},sceneBoxMax:{value:new z(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ax={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},jx={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Mx(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Nx(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new z(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new aa(i,t,t);return a.wrapS=j,a.wrapT=j,a.needsUpdate=!0,a}function Nx(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Px={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Fx(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraProjectionMatrixInverse:{value:new Fn},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Fx(e,t,n){let r=Ix(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ix(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new z(Math.cos(a),Math.sin(a),o))}return r}var Lx=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,ee=_-1+3*d,M=v-1+3*d,N=c&255,te=l&255,ne=u&255,re=this.perm[N+this.perm[te+this.perm[ne]]]%12,ie=this.perm[N+y+this.perm[te+b+this.perm[ne+x]]]%12,ae=this.perm[N+S+this.perm[te+C+this.perm[ne+w]]]%12,oe=this.perm[N+1+this.perm[te+1+this.perm[ne+1]]]%12,se=.6-g*g-_*_-v*v;se<0?r=0:(se*=se,r=se*se*this._dot3(this.grad3[re],g,_,v));let ce=.6-T*T-E*E-D*D;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[ie],T,E,D));let le=.6-O*O-k*k-A*A;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[ae],O,k,A));let ue=.6-j*j-ee*ee-M*M;return ue<0?o=0:(ue*=ue,o=ue*ue*this._dot3(this.grad3[oe],j,ee,M)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,ee=T>D?2:0,M=+(E>D),N=O+k+A+j+ee+M,te=+(a[N][0]>=3),ne=+(a[N][1]>=3),re=+(a[N][2]>=3),ie=+(a[N][3]>=3),ae=+(a[N][0]>=2),oe=+(a[N][1]>=2),se=+(a[N][2]>=2),ce=+(a[N][3]>=2),le=+(a[N][0]>=1),ue=+(a[N][1]>=1),de=+(a[N][2]>=1),fe=+(a[N][3]>=1),pe=w-te+c,me=T-ne+c,he=E-re+c,ge=D-ie+c,_e=w-ae+2*c,ve=T-oe+2*c,ye=E-se+2*c,be=D-ce+2*c,xe=w-le+3*c,Se=T-ue+3*c,Ce=E-de+3*c,we=D-fe+3*c,Te=w-1+4*c,Ee=T-1+4*c,De=E-1+4*c,Oe=D-1+4*c,ke=h&255,Ae=g&255,je=_&255,Me=v&255,Ne=o[ke+o[Ae+o[je+o[Me]]]]%32,Pe=o[ke+te+o[Ae+ne+o[je+re+o[Me+ie]]]]%32,Fe=o[ke+ae+o[Ae+oe+o[je+se+o[Me+ce]]]]%32,P=o[ke+le+o[Ae+ue+o[je+de+o[Me+fe]]]]%32,Ie=o[ke+1+o[Ae+1+o[je+1+o[Me+1]]]]%32,Le=.6-w*w-T*T-E*E-D*D;Le<0?l=0:(Le*=Le,l=Le*Le*this._dot4(i[Ne],w,T,E,D));let Re=.6-pe*pe-me*me-he*he-ge*ge;Re<0?u=0:(Re*=Re,u=Re*Re*this._dot4(i[Pe],pe,me,he,ge));let F=.6-_e*_e-ve*ve-ye*ye-be*be;F<0?d=0:(F*=F,d=F*F*this._dot4(i[Fe],_e,ve,ye,be));let ze=.6-xe*xe-Se*Se-Ce*Ce-we*we;ze<0?f=0:(ze*=ze,f=ze*ze*this._dot4(i[P],xe,Se,Ce,we));let I=.6-Te*Te-Ee*Ee-De*De-Oe*Oe;return I<0?p=0:(I*=I,p=I*I*this._dot4(i[Ie],Te,Ee,De,Oe)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Rx=class e extends yx{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Mx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Mn(this.width,this.height,{type:pe,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ks({defines:Object.assign({},kx.defines),uniforms:Es.clone(kx.uniforms),vertexShader:kx.vertexShader,fragmentShader:kx.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ms,this.normalMaterial.blending=0,this.pdMaterial=new ks({defines:Object.assign({},Px.defines),uniforms:Es.clone(Px.uniforms),vertexShader:Px.vertexShader,fragmentShader:Px.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ks({defines:Object.assign({},Ax.defines),uniforms:Es.clone(Ax.uniforms),vertexShader:Ax.vertexShader,fragmentShader:Ax.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ks({uniforms:Es.clone(vx.uniforms),vertexShader:vx.vertexShader,fragmentShader:vx.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new ks({uniforms:Es.clone(jx.uniforms),vertexShader:jx.vertexShader,fragmentShader:jx.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Sx(null),this._originalClearColor=new B,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new Ua;e.format=Ce,e.type=ge,this.normalRenderTarget=new Mn(this.width,this.height,{minFilter:N,magFilter:N,type:pe,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Fx(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Lx,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new aa(r,e,e,xe,oe);return i.wrapS=j,i.wrapT=j,i.needsUpdate=!0,i}};Rx.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var zx={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Bx=class extends yx{constructor(){super(),this.isOutputPass=!0,this.uniforms=Es.clone(zx.uniforms),this.material=new As({name:zx.name,uniforms:this.uniforms,vertexShader:zx.vertexShader,fragmentShader:zx.fragmentShader}),this._fsQuad=new Sx(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yn.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Vx=class extends yx{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new B}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Hx={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ux=class e extends yx{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new B(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Mn(i,a,{type:pe,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Mn(i,a,{type:pe,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Mn(i,a,{type:pe,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Hx;this.highPassUniforms=Es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ks({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(vx.uniforms),this.blendMaterial=new ks({uniforms:this.copyUniforms,vertexShader:vx.vertexShader,fragmentShader:vx.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B,this._oldClearAlpha=1,this._basic=new Wi,this._fsQuad=new Sx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ks({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ks({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ux.BlurDirectionX=new R(1,0),Ux.BlurDirectionY=new R(0,1);function Wx(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.22,`rgba(255,255,255,0.75)`),n.addColorStop(.5,`rgba(255,255,255,0.18)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Ha(e);return r.colorSpace=_t,r}function Gx(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.fillStyle=`#fff6dc`,t.shadowColor=`rgba(30,40,20,0.35)`,t.shadowBlur=10,t.fill(),t.shadowBlur=0,t.lineWidth=5,t.strokeStyle=`#2f6b33`,t.stroke(),t.translate(64-12*3.3,22.75),t.scale(3.3,3.3),t.lineWidth=2,t.lineCap=t.lineJoin=`round`,t.strokeStyle=`#24452a`;for(let e of[`M4 11.5 12 5l8 6.5`,`M6 10v9h12v-9`,`M10 19v-5h4v5`])t.stroke(new Path2D(e));let n=new Ha(e);return n.colorSpace=_t,n}function Kx(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`);t.translate(16,16),t.rotate(.6),t.fillStyle=`#ffffff`,t.beginPath(),t.ellipse(0,0,13,7,0,0,Math.PI*2),t.fill();let n=new Ha(e);return n.colorSpace=_t,n}function qx(e){let t=document.createElement(`canvas`);t.width=t.height=512;let n=t.getContext(`2d`),r=e===`earth`?150:118,i=Ig(`planet-`+e),a=n.createRadialGradient(256,256,r*.9,256,256,r*1.5);a.addColorStop(0,e===`earth`?`rgba(120,190,255,0.5)`:`rgba(255,170,220,0.32)`),a.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=a,n.fillRect(0,0,512,512);let o=e=>{n.save(),n.translate(256,256),n.rotate(-.38),n.scale(1,.26);for(let[t,i,a]of[[r*1.95,r*.2,`rgba(255,214,170,0.85)`],[r*1.66,r*.16,`rgba(214,170,255,0.7)`],[r*1.42,r*.07,`rgba(255,240,220,0.55)`]])n.beginPath(),n.arc(0,0,t,e?0:Math.PI,e?Math.PI:Math.PI*2),n.lineWidth=i,n.strokeStyle=a,n.stroke();n.restore()};if(e===`ringed`&&o(!1),n.save(),n.beginPath(),n.arc(256,256,r,0,Math.PI*2),n.clip(),e===`earth`){let e=n.createRadialGradient(256-r*.35,256-r*.35,r*.1,256,256,r*1.1);e.addColorStop(0,`#5fb8ff`),e.addColorStop(.6,`#2a6fd0`),e.addColorStop(1,`#173a86`),n.fillStyle=e,n.fillRect(0,0,512,512);for(let e=0;e<9;e++){let t=i()*Math.PI*2,a=Math.sqrt(i())*r*.8;n.fillStyle=e%3?`#4fae62`:`#c9b072`,n.beginPath();for(let e=0;e<4;e++)n.ellipse(256+Math.cos(t)*a+(i()-.5)*50,256+Math.sin(t)*a+(i()-.5)*40,12+i()*30,8+i()*20,i()*3,0,Math.PI*2);n.fill()}n.strokeStyle=`rgba(255,255,255,0.8)`,n.lineCap=`round`;for(let e=0;e<12;e++){let e=256-r+i()*r*2;n.lineWidth=5+i()*12,n.beginPath();let t=256-r+i()*r*1.4;n.moveTo(t,e),n.bezierCurveTo(t+30,e-16+i()*30,t+70,e+18-i()*34,t+60+i()*90,e-6+i()*12),n.stroke()}n.fillStyle=`rgba(255,255,255,0.85)`,n.beginPath(),n.ellipse(256,256-r*.93,r*.55,r*.14,0,0,Math.PI*2),n.ellipse(256,256+r*.95,r*.5,r*.12,0,0,Math.PI*2),n.fill()}else{let e=[`#ffd9a8`,`#f2a48c`,`#ffc7d6`,`#b88cdc`,`#e9a0c4`,`#8f7ad2`,`#f6c8a0`,`#c890d8`,`#6f62b4`];n.translate(256,256),n.rotate(-.38);let t=-r;for(let a=0;t<r;a++){let o=14+i()*26;n.fillStyle=e[a%e.length],n.fillRect(-r,t,r*2,o+1),t+=o}n.setTransform(1,0,0,1,0,0)}let s=n.createRadialGradient(256-r*.5,256-r*.5,r*.3,256-r*.2,256-r*.2,r*1.5);s.addColorStop(0,`rgba(0,0,10,0)`),s.addColorStop(.55,`rgba(0,0,10,0.18)`),s.addColorStop(1,`rgba(0,0,16,0.94)`),n.fillStyle=s,n.fillRect(0,0,512,512),n.restore(),e===`ringed`&&o(!0);let c=new Ha(t);return c.colorSpace=_t,c}var Jx=class{n;points;base;ph;mat;dayC;nightC;constructor(e,t=[`#fff3c4`,`#ffe066`],n=52){this.n=n,this.dayC=new B(t[0]),this.nightC=new B(t[1]);let r=Ig(`motes`);this.base=new Float32Array(n*3),this.ph=new Float32Array(n);for(let e=0;e<n;e++){let t=r()*Math.PI*2,n=Math.sqrt(r());this.base[e*3]=Math.cos(t)*n,this.base[e*3+1]=.25+r()*2.2,this.base[e*3+2]=Math.sin(t)*n,this.ph[e]=r()*100}let i=new fi;i.setAttribute(`position`,new Zr(new Float32Array(n*3),3)),this.mat=new Pa({map:e,size:.2,transparent:!0,depthWrite:!1,blending:2,color:this.dayC.clone(),fog:!1}),this.points=new za(i,this.mat),this.points.frustumCulled=!1}update(e,t,n){let r=this.points.geometry.getAttribute(`position`);for(let t=0;t<this.n;t++){let i=this.ph[t];r.setXYZ(t,this.base[t*3]*n+Math.sin(e*.31+i)*.6,this.base[t*3+1]+Math.sin(e*.53+i*1.7)*.35,this.base[t*3+2]*n+Math.cos(e*.27+i*.8)*.6)}r.needsUpdate=!0,this.mat.color.copy(this.dayC).lerp(this.nightC,t),this.mat.size=.14+t*.26,this.mat.opacity=(.35+t*.65)*(.75+Math.sin(e*2.1)*.25)}},Yx=class{n;points;vel;constructor(e,t=`#ffc4d4`,n=70){this.n=n;let r=Ig(`petals`),i=new Float32Array(n*3);this.vel=new Float32Array(n*2);for(let e=0;e<n;e++)i[e*3]=(r()-.5)*20,i[e*3+1]=r()*8-2,i[e*3+2]=(r()-.5)*20,this.vel[e*2]=.25+r()*.35,this.vel[e*2+1]=r()*10;let a=new fi;a.setAttribute(`position`,new Zr(i,3)),this.points=new za(a,new Pa({map:e,color:t,size:.13,transparent:!0,depthWrite:!1,opacity:.95,alphaTest:.1})),this.points.frustumCulled=!1}update(e,t,n){let r=this.points.geometry.getAttribute(`position`);for(let i=0;i<this.n;i++){let a=r.getY(i)-this.vel[i*2]*t,o=r.getX(i)+Math.sin(e*.8+this.vel[i*2+1])*t*.4+t*.15,s=r.getZ(i)+Math.cos(e*.6+this.vel[i*2+1])*t*.3;if(a<-3){a=6;let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*n*1.1;o=Math.cos(e)*t,s=Math.sin(e)*t}r.setXYZ(i,o,a,s)}r.needsUpdate=!0}},Xx=class{group=new lr;birds=[];tmp=new z;craft;constructor(e=4,t={kind:`bird`,color:`#2d3142`}){this.craft=t.kind===`craft`;let n=new Ns({color:t.color,side:2}),r=this.craft?new Wi({color:t.light??`#9fe8ff`}):null,i=new gs(.022,0),a=e=>{let t=new fi;return t.setAttribute(`position`,new ei([0,0,.05,0,0,-.05,.24*e,.01,-.03],3)),t.computeVertexNormals(),t},o=new gs(.05,0);o.scale(.8,.6,2.2);let s=Ig(`birds`);for(let t=0;t<e;t++){let e=new lr;e.add(new na(o,n));let t=new na(a(1),n),c=new na(a(-1),n);if(e.add(t,c),r){let t=new na(i,r);t.position.z=-.11,e.add(t)}e.scale.setScalar(1.4),this.group.add(e),this.birds.push({g:e,l:c,r:t,rad:.55+s()*.45,h:3.2+s()*2,sp:.18+s()*.12,ph:s()*Math.PI*2})}}update(e,t){for(let n of this.birds){let r=n.ph+e*n.sp,i=t*n.rad+1.5;n.g.position.set(Math.cos(r)*i,n.h+Math.sin(e*.7+n.ph)*.35,Math.sin(r)*i),this.tmp.set(Math.cos(r+.05)*i,n.g.position.y,Math.sin(r+.05)*i),n.g.lookAt(this.tmp);let a=Math.sin(e*.4+n.ph)>.55?.15:1,o=this.craft?.12:Math.sin(e*10+n.ph*3)*.7*a;n.r.rotation.z=o,n.l.rotation.z=-o}}},Zx=class{mesh;mat;constructor(e=[`#89ffce`,`#cea6ff`]){let t=new V(300,300,150,96,1,!0,Math.PI*.15,Math.PI*.9);this.mat=new ks({transparent:!0,depthWrite:!1,blending:2,side:2,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uLow:{value:new B(e[0])},uHigh:{value:new B(e[1])}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform float uTime; uniform float uAlpha; uniform vec3 uLow; uniform vec3 uHigh; varying vec2 vUv;
        void main(){
          float x = vUv.x * 14.0;
          float w = sin(x + uTime*0.12)*0.5 + sin(x*2.3 - uTime*0.21)*0.3 + sin(x*5.1 + uTime*0.37)*0.12;
          float y = vUv.y + w*0.12;
          float band = smoothstep(0.08, 0.38, y) * (1.0 - smoothstep(0.42, 0.95, y));
          float streak = 0.55 + 0.45*sin(x*6.0 + uTime*0.5 + sin(x*2.7)*2.0);
          vec3 col = mix(uLow, uHigh, smoothstep(0.35, 0.9, y));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          float a = band * streak * edge * uAlpha * 0.55;
          gl_FragColor = vec4(col * a, a);
        }`}),this.mesh=new na(t,this.mat),this.mesh.position.y=70,this.mesh.renderOrder=-1}update(e,t){this.mat.uniforms.uTime.value=e,this.mat.uniforms.uAlpha.value=Math.max(0,t-.35)/.65,this.mesh.visible=t>.36}},Qx=class{cap;points;mat;head=0;pos;vel;info;col;c=new B;constructor(e,t=1200){this.cap=t;let n=new fi;this.pos=new Zr(new Float32Array(t*3),3),this.vel=new Zr(new Float32Array(t*3),3),this.info=new Zr(new Float32Array(t*4).fill(-1e3),4),this.col=new Zr(new Float32Array(t*3),3),n.setAttribute(`position`,this.pos),n.setAttribute(`aVel`,this.vel),n.setAttribute(`aInfo`,this.info),n.setAttribute(`aColor`,this.col),this.mat=new ks({transparent:!0,depthWrite:!1,blending:2,fog:!1,uniforms:{uTime:{value:0},uPx:{value:400},uMap:{value:e}},vertexShader:`
        attribute vec3 aVel; attribute vec4 aInfo; attribute vec3 aColor;
        uniform float uTime; uniform float uPx;
        varying vec3 vCol; varying float vA;
        void main() {
          float age = uTime - aInfo.x;
          float f = age / aInfo.y;
          if (age < 0.0 || f >= 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; vA = 0.0; vCol = vec3(0.0); return; }
          float seed = aInfo.w;
          // a quick kick that drags to a stop, then a slow swirling rise
          vec3 p = position + aVel * (1.0 - exp(-2.2 * age)) / 2.2;
          p.y += 0.16 * age;
          p.x += sin(age * 3.1 + seed * 40.0) * 0.07 * age;
          p.z += cos(age * 2.6 + seed * 31.0) * 0.07 * age;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aInfo.z * (1.0 - 0.45 * f) * uPx * projectionMatrix[1][1] / -mv.z;
          vA = smoothstep(0.0, 0.06, f) * pow(1.0 - f, 1.4) * (0.62 + 0.38 * sin(age * 17.0 + seed * 50.0));
          vCol = aColor;
        }`,fragmentShader:`
        uniform sampler2D uMap; varying vec3 vCol; varying float vA;
        void main() {
          float a = texture2D(uMap, gl_PointCoord).a * vA;
          gl_FragColor = vec4(vCol * a * 1.7, a);
        }`}),this.points=new za(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5}emit(e,t,n,r,i={}){let a=i.spread??.5,o=i.speed??.9,s=i.up??1.6,c=i.life??1.7,l=i.size??.2;this.c.set(t);for(let t=0;t<n;t++){let t=this.head;this.head=(this.head+1)%this.cap;let n=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*a,d=o*(.35+Math.random()*.65);this.pos.setXYZ(t,e.x+Math.cos(n)*u,e.y+Math.random()*.15,e.z+Math.sin(n)*u),this.vel.setXYZ(t,Math.cos(n)*d,s*(.3+Math.random()*.7),Math.sin(n)*d),this.info.setXYZW(t,r+Math.random()*.12,c*(.6+Math.random()*.6),l*(.45+Math.random()*.9),Math.random());let f=Math.random()<(i.white??.3)?.7:Math.random()*.25;this.col.setXYZ(t,this.c.r+(1-this.c.r)*f,this.c.g+(1-this.c.g)*f,this.c.b+(1-this.c.b)*f)}this.pos.needsUpdate=this.vel.needsUpdate=this.info.needsUpdate=this.col.needsUpdate=!0}update(e,t){this.mat.uniforms.uTime.value=e,this.mat.uniforms.uPx.value=t}},$x=class{group=new lr;rings=[];beams=[];constructor(){let e=new vs(.82,1,6,1,Math.PI/2);e.rotateX(-Math.PI/2);for(let t=0;t<10;t++){let t=new Wi({transparent:!0,depthWrite:!1,blending:2,side:2,fog:!1,opacity:0}),n=new na(e,t);n.visible=!1,n.renderOrder=4,this.group.add(n),this.rings.push({mesh:n,mat:t,t0:-99,dur:1,max:1})}let t=new V(.5,.5,1,20,1,!0);t.translate(0,.5,0);for(let e=0;e<4;e++){let e=eS(),n=new na(t,e);n.visible=!1,n.renderOrder=4,this.group.add(n),this.beams.push({mesh:n,mat:e,t0:-99,dur:1})}}ring(e,t,n,r=1.7,i=1.1){let a=this.rings.reduce((e,t)=>e.t0<=t.t0?e:t);a.t0=n,a.dur=i,a.max=r,a.mat.color.set(t),a.mesh.position.copy(e)}beam(e,t,n,r=9,i=.9,a=2.4){let o=this.beams.reduce((e,t)=>e.t0<=t.t0?e:t);o.t0=n,o.dur=a,o.mat.uniforms.uColor.value.set(t),o.mesh.position.copy(e),o.mesh.scale.set(i,r,i)}update(e){for(let t of this.rings){let n=(e-t.t0)/t.dur;if(t.mesh.visible=n>0&&n<1,!t.mesh.visible)continue;let r=1-(1-n)**3;t.mesh.scale.setScalar(.35+r*(t.max-.35)),t.mat.opacity=(1-n)**1.6*.9}for(let t of this.beams){let n=(e-t.t0)/t.dur;t.mesh.visible=n>0&&n<1,t.mesh.visible&&(t.mat.uniforms.uAlpha.value=Math.min(1,n*7)*(1-n)**1.5,t.mat.uniforms.uTime.value=e)}}};function eS(){return new ks({transparent:!0,depthWrite:!1,blending:2,side:2,fog:!1,uniforms:{uColor:{value:new B(`#ffffff`)},uAlpha:{value:0},uTime:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform vec3 uColor; uniform float uAlpha; uniform float uTime; varying vec2 vUv;
      void main() {
        float rays = 0.72 + 0.28 * sin(vUv.x * 62.83 + sin(vUv.x * 25.13 + uTime * 0.7) * 2.0);
        float a = pow(1.0 - vUv.y, 2.2) * rays * uAlpha;
        gl_FragColor = vec4(uColor * a, a);
      }`})}var tS=class{group=new lr;sparks;pulses=new $x;now=0;constructor(e){this.sparks=new Qx(e),this.group.add(this.pulses.group,this.sparks.points)}burst(e,t,n=26,r=0){let i=this.now+r;this.sparks.emit(e,t,Math.round(n*1.6),i,{spread:.55,speed:.9+n*.012,up:1.5+n*.012}),this.pulses.ring(e,t,i,1.5+Math.min(n,70)*.012),n>=40&&(this.pulses.ring(e,`#ffffff`,i+.22,2.4+n*.012,1.5),this.pulses.beam(e,t,i,7+n*.06,.8+n*.006),this.sparks.emit(e,t,n,i+.25,{spread:.25,speed:.35,up:4.2,life:2.6,size:.24,white:.5}))}sproutAt(e,t,n){this.sparks.emit(e,t,5,n,{spread:.07,speed:.4,up:.9,life:1.1,size:.13,white:.45})}update(e,t){this.now=e,this.sparks.update(e,t),this.pulses.update(e)}},nS=class{points;mat;constructor(e,t,n,r,i){let a=Ig(n),o=new Float32Array(t*3),s=new Float32Array(t*3),c=new Float32Array(t*3);for(let e=0;e<t;e++){let t=r(a,e);o.set(t.a,e*3),s.set(t.b,e*3),c.set([a(),t.speed,t.size],e*3)}let l=new fi;l.setAttribute(`position`,new Zr(o,3)),l.setAttribute(`aEnd`,new Zr(s,3)),l.setAttribute(`aInfo`,new Zr(c,3)),this.mat=new ks({transparent:!0,depthWrite:!1,blending:i.additive===!1?1:2,fog:!1,uniforms:{uTime:{value:0},uPx:{value:400},uMap:{value:e},uColor:{value:new B(i.color)},uAlpha:{value:1},uWobble:{value:i.wobble??.1},uBoost:{value:i.boost??1}},vertexShader:`
        attribute vec3 aEnd; attribute vec3 aInfo;
        uniform float uTime; uniform float uPx; uniform float uWobble;
        varying float vA;
        void main() {
          float f = fract(aInfo.x + uTime * aInfo.y);
          vec3 p = mix(position, aEnd, f);
          float ph = aInfo.x * 60.0;
          p.x += sin(uTime * 1.3 + ph + f * 6.0) * uWobble;
          p.z += cos(uTime * 1.1 + ph * 1.7 + f * 5.0) * uWobble;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aInfo.z * (0.6 + 0.4 * f) * uPx * projectionMatrix[1][1] / -mv.z;
          vA = sin(f * 3.14159);
        }`,fragmentShader:`
        uniform sampler2D uMap; uniform vec3 uColor; uniform float uAlpha; uniform float uBoost; varying float vA;
        void main() {
          float a = texture2D(uMap, gl_PointCoord).a * vA * uAlpha;
          gl_FragColor = vec4(uColor * uBoost * ${i.additive===!1?`1.0`:`a`}, a);
        }`}),this.points=new za(l,this.mat),this.points.frustumCulled=!1}update(e,t){this.mat.uniforms.uTime.value=e,this.mat.uniforms.uPx.value=t}},rS=new B(`#5fd0d2`);function iS(){return new ks({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uTint:{value:rS.clone()},uBright:{value:1}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime; uniform vec3 uTint; uniform float uBright; varying vec2 vUv;
      void main() {
        float x = vUv.x;
        float flow = vUv.y * 5.5 - uTime * 0.85;
        float streak = 0.5 + 0.5 * sin(x * 11.0 + sin(vUv.y * 4.0 + x * 5.0) * 1.3);
        float foam = smoothstep(0.6, 1.0, sin(flow * 2.4 + sin(x * 8.0) * 1.8 + streak * 1.6) * 0.5 + 0.5);
        foam = max(foam, smoothstep(0.78, 1.0, sin(flow * 4.6 + x * 14.0) * 0.5 + 0.5) * 0.5);
        float side = min(x, 1.0 - x);
        float shallows = 1.0 - smoothstep(0.0, 0.3, side); // paler where it laps the banks
        vec3 col = mix(uTint * 0.92, vec3(1.0), foam * 0.36 + shallows * 0.24 + streak * 0.05);
        float a = smoothstep(0.0, 0.1, side) * 0.94;
        gl_FragColor = vec4(col * uBright, a);
      }`})}var aS=class{group=new lr;mat;mist;spray;constructor(e,t=7.5){let n=[],r=[],i=[];for(let e=0;e<=28;e++){let a=e/28,o=-t*a**1.5,s=.05+.5*Math.sqrt(a),c=.46*(1+a*1.2);for(let e=0;e<=6;e++){let t=e/6,i=(t-.5)*2.6;n.push(Math.sin(i)*c*.5,o,s+(Math.cos(i)-.3)*c*.4),r.push(t,a)}if(e<28)for(let t=0;t<6;t++){let n=e*7+t,r=n+6+1;i.push(n,r,n+1,n+1,r,r+1)}}let a=new fi;a.setAttribute(`position`,new ei(n,3)),a.setAttribute(`uv`,new ei(r,2)),a.setIndex(i),this.mat=new ks({transparent:!0,depthWrite:!1,side:2,fog:!1,uniforms:{uTime:{value:0},uTint:{value:new B(`#bfe6ff`)},uAlpha:{value:0},uBright:{value:1}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uTime; uniform vec3 uTint; uniform float uAlpha; uniform float uBright; varying vec2 vUv;
        void main() {
          float fall = pow(vUv.y, 0.75) * 9.0 - uTime * 2.3;
          float x = vUv.x;
          float streak = 0.5 + 0.5 * sin(x * 24.0 + sin(vUv.y * 5.0 + x * 9.0) * 1.4);
          float foam = smoothstep(0.35, 1.0, sin(fall * 2.6 + sin(x * 17.0) * 2.2 + streak * 2.0) * 0.5 + 0.5);
          foam = max(foam, smoothstep(0.55, 1.0, sin(fall * 5.3 + x * 31.0) * 0.5 + 0.5) * 0.6);
          vec3 col = mix(uTint * 0.88, vec3(1.0), foam * (0.5 + 0.3 * smoothstep(0.0, 0.35, vUv.y)) + streak * 0.1 + vUv.y * 0.45);
          float edge = smoothstep(0.0, 0.22, x) * smoothstep(1.0, 0.78, x);
          float body = mix(0.92, 0.35 + 0.65 * max(foam, streak * 0.6), smoothstep(0.1, 0.8, vUv.y)); // breaks into strands as it falls
          float a = edge * body * (1.0 - smoothstep(0.5, 1.0, vUv.y)) * smoothstep(0.0, 0.015, vUv.y) * uAlpha;
          gl_FragColor = vec4(col * uBright, a);
        }`});let o=new na(a,this.mat);o.frustumCulled=!1,o.renderOrder=2,this.mist=new nS(e,26,`mist`,e=>{let n=-t*(.5+e()*.42),r=(e()-.5)*.6;return{a:[r,n,.5+e()*.2],b:[r*2.4+(e()-.5)*.8,n-.5+e()*1.3,.6+e()*1.1],size:2.2+e()*2.2,speed:.05+e()*.06}},{color:`#ffffff`,additive:!1,wobble:.12}),this.spray=new nS(e,10,`spray`,e=>{let t=(e()-.5)*.3;return{a:[t,-.02,.06],b:[t*1.5,-.5-e()*.5,.3+e()*.25],size:.1+e()*.1,speed:.5+e()*.4}},{color:`#ffffff`,wobble:.02,boost:.8}),this.mist.points.renderOrder=3,this.group.add(o,this.mist.points,this.spray.points)}update(e,t,n,r,i=1){this.mat.uniforms.uBright.value=i,this.mat.uniforms.uTime.value=e,this.mat.uniforms.uTint.value.copy(n),this.mat.uniforms.uAlpha.value=r,this.mist.mat.uniforms.uAlpha.value=r*.085,this.mist.mat.uniforms.uColor.value.copy(n).lerp(oS,.25),this.spray.mat.uniforms.uAlpha.value=r*.7,this.mist.update(e,t),this.spray.update(e,t)}},oS=new B(`#ffffff`);function sS(e=1500){let t=Ig(`stars`),n=[],r=[];for(let i=0;i<e;i++){let e=(t()*2-1)*.98,i=t()*Math.PI*2,a=Math.sqrt(1-e*e);n.push(Math.cos(i)*a*500,e*500,Math.sin(i)*a*500);let o=t()<.06;r.push(o?5+t()*2:2+t()*1.6,t()*100,.6+t()*2.4)}let i=new fi;i.setAttribute(`position`,new ei(n,3)),i.setAttribute(`aInfo`,new ei(r,3));let a=new za(i,new ks({transparent:!0,depthWrite:!1,blending:2,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uDpr:{value:1}},vertexShader:`
      attribute vec3 aInfo; uniform float uTime; uniform float uDpr; varying float vA; varying float vTint;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aInfo.x * uDpr;
        vA = 0.55 + 0.45 * sin(uTime * aInfo.z + aInfo.y);
        vTint = fract(aInfo.y);
      }`,fragmentShader:`
      uniform float uAlpha; varying float vA; varying float vTint;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.1, d) * vA * uAlpha;
        vec3 col = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.92, 0.8), vTint);
        gl_FragColor = vec4(col * a * 2.4, a);
      }`}));return a.renderOrder=-1,a.frustumCulled=!1,a}var cS=()=>rp().pal;function lS(e){let t=cS();return e.kind===`heart`?t.grassHeart:e.kind===`wild`?t.grassMid:e.kind===`today`?t.grassToday:e.full?t.grassFree:e.marks?.length?t.grassLush:t.grassMid}var uS=0;function dS(e,t,n,r){let i=e.length;r(),Nf(e,i,t,n,uS++)}function fS(e,t){for(let n of e){let e=n.getAttribute(`grow`),r,i;if(e.getZ(0)>=0)r=e.getX(0),i=e.getY(0);else{n.computeBoundingBox();let e=n.boundingBox;r=(e.min.x+e.max.x)/2,i=(e.min.z+e.max.z)/2}let a=t.ground(r,i);n.translate(0,a,0);for(let t=0;t<e.count;t++)e.setW(t,a)}}function pS(e,t,n,r=.66,i=28){for(let a=0;a<i;a++){let i=e()*Math.PI*2,a=Math.sqrt(e())*r,o=Math.cos(i)*a,s=Math.sin(i)*a;if(t.every(e=>Math.hypot(e.x-o,e.z-s)>e.r+n))return t.push({x:o,z:s,r:n}),{x:o,z:s}}return null}function mS(e,t,n,r){for(let i of[1,.75,.55]){let a=pS(e,t,n*i,Math.max(.1,r-n*i*.5));if(a)return a}let i=e()*W,a={x:r,z:0},o=-1/0;for(let e=0;e<12;e++){let n=i+e/12*W,s=Math.cos(n)*r,c=Math.sin(n)*r,l=t.reduce((e,t)=>Math.min(e,Math.hypot(t.x-s,t.z-c)-t.r),1/0);l>o&&(o=l,a={x:s,z:c})}return t.push({x:a.x,z:a.z,r:n*.5}),a}function hS(e,t,n,r,i,a,o=!1,s=1){let c=Tm(r)*i*.8,l=o?(n.push({x:0,z:0,r:c}),{x:0,z:0}):pS(t,n,c,Math.max(.1,a-c*.5));return l&&dS(e,l.x,l.z,()=>Em(e,t,r,l.x,l.z,i*s)),l}var gS={top:-1.9,bottom:-5.3,rTop:.56,rBottom:.05},_S=e=>gS.rBottom+(gS.rTop-gS.rBottom)*Math.min(1,Math.max(0,(e-gS.bottom)/(gS.top-gS.bottom)))**1.4;function vS(e,t){let n=[new R(0,gS.bottom-.12)];for(let e=0;e<=8;e++){let t=gS.bottom+(gS.top-gS.bottom)*e/8;n.push(new R(_S(t),t))}let r=Wf(new hs(n,9),.2,t),[i,a]=cS().spire;e.push(G(r,i,0,t,.07,a,void 0,U.rock));for(let n=0;n<4;n++){let r=n/4*W+t(),o=.42+t()*.3,s=.9+t()*.8,c=Wf(new Ja(.1+t()*.07,s,6,2),.22,t);q(c,Math.cos(r)*o,-2.1-s/2,Math.sin(r)*o,1,1,1,t()*W,Math.PI),e.push(G(c,i,0,t,.08,a,void 0,U.rock))}}var yS={x:-.13,z:-.12,ry:-.35},bS={x:.4,z:-.36},xS=e=>e<=0?0:.72+Math.min(e,8)*.085,SS={x:.34,z:.32,r:.16};function CS(e,t,n){let r=Math.sin(yS.ry),i=Math.cos(yS.ry),[a,o]=Jh[n].door,s=yS.x+a*i,c=yS.z-a*r;for(let n=0;n<5;n++){let a=o+.09+n*.105;if(Math.hypot(s+r*a,c+i*a)>.8)break;let l=Hf(.05+t()*.012,t,1,.1,.3);e.push(G(q(l,s+r*a+(t()-.5)*.04,.004,c+i*a+(t()-.5)*.04,1,.3,.82,t()*W),cS().path[0],0,t,.03,cS().path[1],void 0,U.rock))}}function wS(e){let t=Ig(`heart-extras`),n=new V(SS.r,SS.r,.02,14);n.translate(SS.x,.05,SS.z);let r=[],i=9+Math.min(e,8)*2;for(let e=0;e<i;e++){let n=-3.25-t()*1.75,a=_S(n),o=e/i*W+t()*.8;for(let e=0;e<(t()<.5?2:1);e++){let i=new gs(.06+t()*.05,0);i.scale(.55,2.1,.55),i.translate(0,.08,0),i.rotateZ(-(1.25+t()*.7)),i.rotateY(-(o+e*.35)),i.translate(Math.cos(o)*a*.92,n-e*.1,Math.sin(o)*a*.92),r.push(i)}}let a=vf(r,!1);return r.forEach(e=>e.dispose()),{water:n,crystals:a,glowY:-3.7}}function TS(e){let t=Ig(`heart-core`),n=1+Math.min(e,8)*.07,r=[],i=new gs(.26*n,0);i.scale(.62,1.7,.62),r.push(i);for(let e=0;e<4;e++){let i=e/4*W+t(),a=new gs((.09+t()*.05)*n,0);a.scale(.55,1.9,.55),a.rotateZ(.35+t()*.3),a.rotateY(i),a.translate(Math.cos(i)*.2*n,(t()-.5)*.3,-Math.sin(i)*.2*n),r.push(a)}let a=vf(r,!1);return r.forEach(e=>e.dispose()),a}function ES(e=7,t=1.25){let n=Ig(`runes`),r=[];for(let i=0;i<e;i++){let a=i/e*W,o=Math.cos(a)*t,s=Math.sin(a)*t,c=(n()-.5)*.5,l=1.3+n()*.9,u=Hf(.1*l,n,0,.25,.9);q(u,o,c,s,.8,1.5,.6,-a,(n()-.5)*.4,(n()-.5)*.4),r.push(G(u,cS().rune[0],0,n,.07,cS().rune[1],void 0,U.rock));let d=new gs(.026*l,0);q(d,o*1.045,c,s*1.045,.6,2.2,.6,-a),r.push(K(G(d,cS().glyph,0,n,.04),1.4))}return zf(r)}function DS(){let e=Ig(`debris`),t=[],n=Hf(.22,e,1,.3,.9);t.push(G(q(n,0,0,0,1,1.25,.9),cS().debris[0],0,e,.08,cS().debris[1],void 0,U.rock));let r=Hf(.13,e,0,.2,.3),i=cS().debrisCap;return i&&t.push(G(q(r,.02,.2,0,1.2,.5,1.1),i[0],0,e,.06,i[1])),zf(t)}var OS=e=>`${e.h}:${e.sig}${e.tier}${e.c}${e.p===void 0?``:`p`+Math.round(e.p*4)}${e.mon?`m`+e.mon:``}`;function kS(e){return`${e.kind}|${e.kind===`heart`?e.level:``}|${Math.min(e.age??0,12)}|${e.landmark??``}|${e.lvl??1}|${e.crop?e.crop.id+e.crop.stage:``}|${e.marks?e.marks.map(OS).join(`.`):`-`}|${+!!e.full}|${e.flowers??0}|${rp().id}|v22`}function AS(e,t){let n=[],r=MS(t);Gh(n,Ig(t+`|lm`),e,r);let i=$h(e);if(i)for(let e of i.parts)e.translate(0,i.y,i.z),e.rotateY(r),n.push(e);let a=zf(n);return a.computeBoundingBox(),a}function jS(e){let t=e.landmark?$h(e.landmark):null;return t?{geo:zf(t.parts),y:t.y,z:t.z,ry:MS(e.key),axis:t.axis,speed:t.speed}:null}var MS=e=>(Ig(e+`|turn`)()-.5)*1.6+.5;function NS(e,t,n){for(let r=0;r<3+Math.floor(t()*3);r++){let r=pS(t,n,.04,.82);r&&dS(e,r.x,r.z,()=>Lm(e,t,r.x,r.z))}for(let r=0;r<1+Math.floor(t()*2);r++){let r=pS(t,n,.08,.76);r&&Im(e,t,r.x,r.z,.6+t()*.7)}if(t()<.4){let r=pS(t,n,.12,.7);r&&dS(e,r.x,r.z,()=>jm(e,t,r.x,r.z,.8+t()*.4))}}var PS=[2,3,5,7,9,12];function FS(e,t,n,r){PS.forEach((i,a)=>{if(r<i)return;let o=Ig(`${t.key}|x${i}`),s=pS(o,n,.1,.74);if(!s)return;let c=a;dS(e,s.x,s.z,()=>{if(c===0)Nm(e,o,s.x,s.z,1.5),Nm(e,o,s.x+.09,s.z+.05,.9,`#e8a23a`),Nm(e,o,s.x-.05,s.z+.09,.7);else if(c===1){let t=cS().flowers[Math.floor(o()*cS().flowers.length)];for(let n=0;n<4;n++)Mm(e,o,s.x+(o()-.5)*.16,s.z+(o()-.5)*.16,t)}else c===2?jm(e,o,s.x,s.z,1.1):c===3?o()<.5?Pm(e,o,s.x,s.z,1.1):Fm(e,o,s.x,s.z,1.1):c===4?Am(e,o,s.x,s.z,1):Em(e,o,rp().flora.wild[Math.floor(o()*rp().flora.wild.length)],s.x,s.z,.42)})})}function IS(e,t,n,r){let i=3+Math.floor(t()*3);for(let a=0;a<i;a++){let i=t()*W,o=a?.08+t()*.16:0,s=a?.07+t()*.08:.17+t()*.06,c=Hf(s,t,1,.16,.45);q(c,n+Math.cos(i)*o,s*.42,r+Math.sin(i)*o,1.1,.8,1,t()*W),e.push(G(c,cS().boulder[0],0,t,.02,cS().boulder[1],void 0,U.rock))}}function LS(e,t,n){n.river.forEach((n,r)=>{if(!(r%2||n.r<.12||Math.hypot(n.x,n.z)>.95))for(let r=0;r<2;r++){if(t()<.35)continue;let r=t()*W,i=n.r*(.85+t()*.5),a=.035+t()*.04,o=Hf(a,t,1,.12,.4);q(o,n.x+Math.cos(r)*i,a*.3,n.z+Math.sin(r)*i,1.2,.6,1,t()*W),e.push(G(o,cS().pebble[0],0,t,.02,cS().pebble[1],void 0,U.rock))}})}function RS(e,t){let n=Ig(e.key),r=cS(),i=rp().flora.wild;uS=0;let a=[],o=[...t.river],s=[],c=(e,n,r)=>{let i=t.ground(n,r);for(let t of e)s.push({...t,y:t.y+i})},l=()=>{fS(a,t);let e=zf(a);return e.userData.fx=s,e.userData.marks=u,e},u=[],d=()=>r.flowers[Math.floor(n()*r.flowers.length)];if(e.kind===`heart`){vS(a,n);let t=qh(e.level);dS(a,yS.x,yS.z,()=>c(Yh(a,Ig(`home`+t),e.level,yS.x,yS.z,yS.ry),yS.x,yS.z)),o.push({x:yS.x,z:yS.z,r:Jh[t].r}),CS(a,n,t);let i=a.length;e.level===0?Om(a,n):Dm(a,n,xS(e.level),e.level>=8,e.level),km(a,n,.2);for(let e=i;e<a.length;e++)a[e].translate(bS.x,0,bS.z);e.level>0&&Nf(a,i,bS.x,bS.z,uS++),o.push({x:bS.x,z:bS.z,r:.27});for(let e=0;e<9;e++){let t=e/9*W;Im(a,n,SS.x+Math.cos(t)*(SS.r+.03),SS.z+Math.sin(t)*(SS.r+.03),.42+n()*.2,e%3==0)}o.push({x:SS.x,z:SS.z,r:SS.r+.07});for(let t=0;t<Math.min(e.level+4,11);t++){let e=pS(n,o,.05,.7);e&&dS(a,e.x,e.z,()=>Mm(a,n,e.x,e.z,r.flowers[t%r.flowers.length]))}for(let e=0;e<4;e++){let e=pS(n,o,.05,.74);e&&dS(a,e.x,e.z,()=>Lm(a,n,e.x,e.z))}if(e.level>=2){let e=pS(n,o,.12,.66);e&&dS(a,e.x,e.z,()=>Am(a,n,e.x,e.z,.9))}return l()}if(e.kind===`wild`){if(o.push({x:0,z:0,r:.3}),n()<.3){let e=pS(n,o,.26,.5);e&&IS(a,n,e.x,e.z)}let e=1+Math.floor(n()*2.4);for(let t=0;t<e;t++)hS(a,n,o,i[Math.floor(n()*i.length)],.5+n()*.32,.7);if(n()<.6){let e=pS(n,o,.14);e&&dS(a,e.x,e.z,()=>Am(a,n,e.x,e.z,.85))}for(let e=0;e<2+Math.floor(n()*3);e++){let e=pS(n,o,.05,.76);e&&dS(a,e.x,e.z,()=>Mm(a,n,e.x,e.z,d()))}return LS(a,n,t),NS(a,n,o),l()}{let n=e.marks??[],i=e.kind===`today`,s=i?0:Math.max(1,e.age??1),d=i?.6:.7+.3*Math.min(s,7)/7,f=e.landmark?Vm[e.landmark]:0;if(e.landmark){let t=e.landmark;dS(a,0,0,()=>c(Gh(a,Ig(e.key+`|lm`),t,MS(e.key),{crop:e.crop,lvl:e.lvl}),0,0)),o.push({x:0,z:0,r:f})}let p=e.landmark?f<=.44?4:3:6,m=e.landmark?f<=.44?.62:.5:9,h=e.landmark?.78:.64,g=[...n.filter(e=>e.mon),...n.filter(e=>!e.mon)],_=[];for(let t of g.slice(0,p)){let n=Ig(`${e.key}|m|${t.h}${t.mon?`|mon`:``}`),r=kg(t,m),i=mS(n,o,r,h);dS(a,i.x,i.z,()=>Mg(a,n,t,i.x,i.z,d,m)),u.push({h:t.h,x:i.x,z:i.z,r,mon:!!t.mon}),_.push({m:t,x:i.x,z:i.z})}for(let{m:t,x:n,z:r}of _){let i=t.mon||t.p!==void 0?null:bg(t.sig);if(!i)continue;let c=Ig(`${e.key}|c|${t.h}`);for(let[e,t]of[[3,.42],[6,.34]]){let l=c()*W,u=.2+c()*.12,d=n+Math.cos(l)*u,f=r+Math.sin(l)*u;s<e||Math.hypot(d,f)>.76||o.some(e=>(e.x!==n||e.z!==r)&&Math.hypot(e.x-d,e.z-f)<e.r*.7)||(dS(a,d,f,()=>Em(a,c,i,d,f,Math.min(t+c()*.1,m))),o.push({x:d,z:f,r:.1}))}}g.slice(p,p+9).forEach(t=>{let n=Ig(`${e.key}|m|${t.h}`),r=mS(n,o,.06,.74);dS(a,r.x,r.z,()=>Mm(a,n,r.x,r.z,Dg(t),1.25)),u.push({h:t.h,x:r.x,z:r.z,r:.08,mon:!1})});let v=Ig(e.key+`|flowers`),y=Ig(e.key+`|under`);for(let t=0;t<Math.min(e.flowers??0,9);t++){let e=pS(v,o,.06,.74);if(!e)break;dS(a,e.x,e.z,()=>Mm(a,v,e.x,e.z,r.flowers[Math.floor(v()*r.flowers.length)],1.15))}return LS(a,y,t),NS(a,y,o),FS(a,e,o,s),l()}}var zS=new B,BS=new B,VS=new B;function HS(e,t){let n=Ig(e),r=rp().sky.clouds;zS.set(r?.low??`#c2cde4`),BS.set(r?.high??`#ffffff`);let i=[],a=t?5+Math.floor(n()*4):3+Math.floor(n()*2),o=t?1.6+n()*.7:.75+n()*.35;i.push({x:(n()-.5)*.3,y:.32,z:0,r:t?.95:.72});for(let e=0;e<a;e++){let r=e/(a-1)*2-1,s=(t?.82:.62)*(1-Math.abs(r)*.52)*(.82+n()*.3);i.push({x:r*o+(n()-.5)*.2,y:s*.32+n()*.06,z:(n()-.5)*(t?.8:.45),r:s})}for(let e=0;e<(t?2:1);e++)i.push({x:(n()-.5)*o*.7,y:(t?.72:.6)+n()*.15,z:(n()-.5)*.3,r:(t?.5:.4)+n()*.15});let s=i.map(e=>{let t=new ms(e.r,1);t.deleteAttribute(`uv`);let r=t.getAttribute(`position`),i=t.getAttribute(`normal`),a=n()*50;for(let t=0;t<r.count;t++){let n=r.getX(t),o=r.getY(t),s=r.getZ(t),c=1+(Math.sin(Math.round(n*1e4)*.0127+Math.round(o*1e4)*.0311+Math.round(s*1e4)*.0071+a)*.5+.5-.5)*.08,l=e.y+o*c,u=Math.hypot(n,o,s)||1,d=n/u,f=o/u,p=s/u;l<0&&(l*=.05,d*=.3,p*=.3,f=-1),r.setXYZ(t,e.x+n*c,l,e.z+s*c);let m=Math.hypot(d,f,p);i.setXYZ(t,d/m,f/m,p/m)}return t}),c=vf(s,!1);s.forEach(e=>e.dispose());let l=c.getAttribute(`position`),u=.01;for(let e=0;e<l.count;e++)u=Math.max(u,l.getY(e));let d=new Float32Array(l.count*3);for(let e=0;e<l.count;e++){let t=Math.min(1,Math.max(0,l.getY(e)/u))**.55;VS.copy(zS).lerp(BS,t),d[e*3]=VS.r,d[e*3+1]=VS.g,d[e*3+2]=VS.b}return c.setAttribute(`color`,new Zr(d,3)),c.setAttribute(`sway`,new Zr(new Float32Array(l.count),1)),c.computeBoundingSphere(),c}var US=new B,WS=new B,GS=new B;function KS(e,t=260){let n=new ys(t,132,44,0,W,0,.9);n.deleteAttribute(`uv`);let r=Ig(`far-ground`),i=Array.from({length:54},()=>{let e=r()*W,n=Math.sqrt(r())*t*.74;return{x:Math.cos(e)*n,z:Math.sin(e)*n,r:7+r()*r()*32}});US.set(e.low),WS.set(e.high),GS.set(e.mark);let a=n.getAttribute(`position`),o=new Float32Array(a.count*3);for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getZ(e),r=.5+.28*Math.sin(t*.031+1.3)*Math.cos(n*.027-.4)+.16*Math.sin(t*.071-n*.063)+.08*Math.sin(t*.17+n*.13);VS.copy(US).lerp(WS,Math.min(1,Math.max(0,r)));let s=Math.sin(t*.014+2.1)*Math.sin(n*.017-.7);s>.45&&VS.lerp(GS,Math.min(1,(s-.45)*3)*.6);for(let e of i){let r=Math.hypot(t-e.x,n-e.z)/e.r;r>1.3||(r<.82?VS.lerp(GS,.55*(1-r*.5)):VS.lerp(WS,.5*(1-Math.abs(r-1.02)/.28)))}o[e*3]=VS.r,o[e*3+1]=VS.g,o[e*3+2]=VS.b}return n.setAttribute(`color`,new Zr(o,3)),n}function qS(e){let t=Ig(e),n=cS(),r=[];return r.push(G(q(new V(.45,.42,.1,6),0,-.05,0),n.grassLush,0,t,.03,void 0,void 0,xf(rp().ground,1))),r.push(G(q(new V(.44,.43,.06,6),0,-.13,0),n.isletSand,0,t,.03,void 0,void 0,xf(rp().ground,0))),r.push(G(q(Wf(new V(.42,.06,1.1,6,2),.15,t),0,-.7,0),n.isletRock[0],0,t,.08,n.isletRock[1],void 0,U.rock)),Em(r,t,rp().flora.wild[Math.floor(t()*rp().flora.wild.length)],.05,0,.6),t()<.7&&Mm(r,t,-.22,.1,n.flowers[1]),Mf(r.slice(3)),zf(r)}function JS(){let e=Ig(`lantern`),t=[],[n,r]=cS().lantern;return t.push(kf(q(new V(.05,.07,.18,4),0,.09,0,1,1,1,Math.PI/4),n,0,e)),t.push(kf(q(new V(.1,.1,.03,4),0,.2,0,1,1,1,Math.PI/4),n,0,e)),t.push(kf(q(new Ja(.13,.09,4),0,.33,0,1,1,1,Math.PI/4),r,0,e)),zf(Mf(t))}var YS=1.07,XS=5,ZS=.15,QS=.3,$S=.34,eC={d:1.75,r:.95},tC=.15,nC=new B,rC=new B,iC=new B,aC=new B,oC=new B,sC=new B,cC=new B,lC=new B,uC=class{cells;river=[];maxIn=1;colors;pads=[];constructor(e,t){this.cells=e,this.colors=e.map(e=>new B(e.grass));for(let t of e)t.pad&&this.pads.push({x:t.x,z:t.z,r:t.pad,y:this.rolling(t.x,t.z)});let n=1/0,r=0;t.forEach((e,i)=>{i&&(r+=Math.hypot(e.x-t[i-1].x,e.z-t[i-1].z)),n=Math.min(n,this.rolling(e.x,e.z)-.05),this.river.push({x:e.x,z:e.z,y:n,w:Math.min(1,r/.45)})})}edge(e,t){let n=0;for(let r of this.cells)n+=Math.exp(-5*Math.hypot(e-r.x,t-r.z));return n>0?YS+Math.log(n)/XS:-99}rolling(e,t){let n=0,r=0;for(let i of this.cells){let a=(e-i.x)**2+(t-i.z)**2;if(a>10)continue;let o=Math.exp(-a*1.4);n+=o,r+=o*i.base}return(n>1e-9?r/n:0)+.05*Math.sin(e*2.3+1.3)*Math.cos(t*2.1+.4)+.025*Math.sin(e*4.7+t*3.9)}nearRiver(e,t){let n=this.river,r=1/0,i=0,a=0;for(let o=0;o<n.length-1;o++){let s=n[o],c=n[o+1],l=c.x-s.x,u=c.z-s.z,d=Ug(((e-s.x)*l+(t-s.z)*u)/(l*l+u*u||1)),f=Math.hypot(e-s.x-l*d,t-s.z-u*d);f<r&&(r=f,i=s.y+(c.y-s.y)*d,a=s.w+(c.w-s.w)*d)}return{d:r,y:i,w:a}}wet(e,t){if(this.river.length<2)return 0;let n=this.nearRiver(e,t);return(1-Wg(Ug((n.d-tC*.55)/(tC*1.5))))*n.w}inland(e,t){let n=this.rolling(e,t);for(let r of this.pads){let i=Math.hypot(e-r.x,t-r.z);i<r.r+.3&&(n+=(r.y-n)*(1-Wg(Ug((i-r.r)/.3))))}if(this.river.length>1){let r=this.nearRiver(e,t),i=(1-Wg(Ug((r.d-tC*.55)/(tC*1.5))))*r.w;i>0&&(n+=(Math.min(n,r.y-.08)-n)*i)}return n}ground(e,t){return this.surface(e,t,Math.max(0,this.edge(e,t)))}surface(e,t,n){let r=this.rolling(e,t)-$S,i=1-(1-Math.min(1,n/QS))**2;return r+(this.inland(e,t)-r)*i}grassAt(e,t,n){let r=0,i=0,a=0,o=0,s=0;return this.cells.forEach((n,c)=>{let l=(e-n.x)**2+(t-n.z)**2;if(l>8)return;let u=Math.exp(-l*3.2),d=this.colors[c];r+=u,i+=u*d.r,a+=u*d.g,o+=u*d.b,n.today&&(s+=u)}),r<1e-9?n.copy(lC):(n.setRGB(i/r,a/r,o/r),n.lerp(cC,s/r*.22))}build(){let e=rp().pal;nC.set(e.sand),rC.set(e.soil),iC.set(e.bed),aC.set(e.stoneHi),oC.set(e.stoneLo),sC.set(e.stoneWarm),cC.set(e.todayTint),lC.set(e.grassMid);let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let e of this.cells)t=Math.min(t,e.x),n=Math.max(n,e.x),r=Math.min(r,e.z),i=Math.max(i,e.z);t-=1.37,r-=1.37;let a=Math.ceil((n+YS+ZS*2-t)/ZS)+1,o=Math.ceil((i+YS+ZS*2-r)/ZS)+1,s=a*o,c=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s),d=new Uint8Array(s);this.maxIn=.5;for(let e=0;e<o;e++)for(let n=0;n<a;n++){let i=e*a+n,o=t+n*ZS,s=r+e*ZS,f=this.edge(o,s);if(f>=0)d[i]=1;else if(f>-.24){for(let e=0;e<3;e++){let e=(this.edge(o+.01,s)-this.edge(o-.01,s))/.02,t=(this.edge(o,s+.01)-this.edge(o,s-.01))/.02,n=e*e+t*t||1;o-=e*f/n,s-=t*f/n,f=this.edge(o,s)}d[i]=2,f=0}c[i]=o,l[i]=s,u[i]=Math.max(0,f),this.maxIn=Math.max(this.maxIn,f)}let f=new Float32Array(s*3),p=new Float32Array(s*3),m=new Float32Array(s*3),h=new Float32Array(s*3),g=new Float32Array(s),_=rp().ground,v=new B,y=new B;for(let e=0;e<s;e++){if(!d[e])continue;let t=c[e],n=l[e],r=u[e],i=this.surface(t,n,r);f.set([t,i,n],e*3);let a=1-(1-Math.min(1,r/QS))**2;this.grassAt(t,n,v);let o=Wg(Ug(this.wet(t,n)*1.5)),s=a<.86?Wg(Ug((.86-a)/.14)):0;v.lerp(iC,o),s&&v.lerp(nC,s),g[e]=xf(_,(1-o)*(1-s)),a<.6&&v.lerp(rC,Wg(Ug((.6-a)/.2))),p.set([v.r,v.g,v.b],e*3);let b=this.rolling(t,n)-$S,x=Math.min(1,r/this.maxIn),S=.82+.3*Math.sin(t*1.9+.5)*Math.cos(n*1.7+1.1)+.14*Math.sin(t*4.3-n*3.7),C=eC.d*Math.exp(-(t*t+n*n)/(eC.r*eC.r))*Math.min(1,r/.5),w=Math.min(r,.35)*1.5+(.5+this.maxIn*.55)*x**.8*S+C,T=b-w;m.set([t,T,n],e*3);let E=.5+.5*Math.sin(T*7+Math.sin(t*1.3)*1.5);v.copy(oC).lerp(aC,E*.55+.25).lerp(sC,.3*(.5+.5*Math.sin(t*.9+n*1.1))),v.lerp(y.copy(oC).multiplyScalar(.8),Ug(w/(1.2+this.maxIn))*.6),w<.3&&v.lerp(rC,1-w/.3),h.set([v.r,v.g,v.b],e*3)}let b=[],x=[];for(let e=0;e<o-1;e++)for(let t=0;t<a-1;t++){let n=e*a+t,r=n+a,i=n+1,o=r+1;for(let[e,t,a]of[[n,r,i],[r,o,i]])d[e]&&d[t]&&d[a]&&(d[e]===1||d[t]===1||d[a]===1)&&(b.push(e,t,a),x.push(e,a,t))}let S=(e,t,n,r,i)=>{let a=new fi;if(a.setAttribute(`position`,new Zr(e,3)),a.setAttribute(`color`,new Zr(t,3)),typeof i!=`number`&&a.setAttribute(`surf`,new Zr(i,1)),a.setIndex(n),r){let e=a.toNonIndexed();a.dispose(),a=e}a.computeVertexNormals();let o=a.getAttribute(`position`).count,s=new Float32Array(o*4);for(let e=0;e<o;e++)s[e*4+2]=s[e*4+3]=-1e3;return a.setAttribute(`sway`,new Zr(new Float32Array(o),1)),a.setAttribute(`grow`,new Zr(s,4)),a.setAttribute(`glow`,new Zr(new Float32Array(o),1)),typeof i==`number`&&a.setAttribute(`surf`,new Zr(new Float32Array(o).fill(i),1)),a.computeBoundingSphere(),a},C=null,w=this.river;if(w.length>1){let e=[],t=[],n=[],r=0;for(let i=0;i<w.length;i++){i&&(r+=Math.hypot(w[i].x-w[i-1].x,w[i].z-w[i-1].z)),n.push(0,r,1,r);let a=w[Math.max(0,i-1)],o=w[Math.min(w.length-1,i+1)],s=Math.hypot(o.x-a.x,o.z-a.z)||1,c=(o.x-a.x)/s,l=(o.z-a.z)/s,u=tC*1.25*(.25+.75*w[i].w);if(e.push(w[i].x-l*u,w[i].y,w[i].z+c*u,w[i].x+l*u,w[i].y,w[i].z-c*u),i){let e=i*2;t.push(e-2,e,e-1,e-1,e,e+1)}}C=new fi,C.setAttribute(`position`,new ei(e,3)),C.setAttribute(`uv`,new ei(n,2)),C.setIndex(t),C.computeVertexNormals()}return{top:S(f,p,b,!1,g),under:S(m,h,x,!0,U.rock),water:C}}cellAt(e,t){let n=null,r=1/0;for(let i of this.cells){let a=(e-i.x)**2+(t-i.z)**2;a<r&&(r=a,n=i)}return n}ringAt(e,t,n,r,i=48){let a=[],o=[];for(let s=0;s<=i;s++){let c=s/i*Math.PI*2;for(let i of[n,r]){let n=e+Math.cos(c)*i,r=t+Math.sin(c)*i;a.push(n,this.ground(n,r)+.02,r)}if(s){let e=s*2;o.push(e-2,e-1,e,e-1,e+1,e)}}let s=new fi;return s.setAttribute(`position`,new ei(a,3)),s.setIndex(o),s}},dC={uniforms:{tDiffuse:{value:null},uAmount:{value:.2},uShade:{value:new B(1,1,1)},uLight:{value:new B(1,1,1)},uTone:{value:0},uSat:{value:1.04},uCon:{value:1.05}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; uniform vec3 uShade; uniform vec3 uLight; uniform float uTone; uniform float uSat; uniform float uCon; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      // a touch more colour than the light alone gives: the look is storybook, not photographic
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 g = max(mix(vec3(l), c.rgb, uSat), 0.0);
      g = pow(g / 0.2, vec3(uCon)) * 0.2;
      // the dark of the picture leans one way and the light the other: what a painter does, and a lamp does not
      g *= mix(vec3(1.0), uShade, (1.0 - smoothstep(0.02, 0.34, l)) * uTone) * mix(vec3(1.0), uLight, smoothstep(0.3, 1.0, l) * uTone);
      gl_FragColor = vec4(g * (1.0 - uAmount * smoothstep(0.35, 0.85, d)), c.a);
    }`},fC=`
  uniform float intensity; uniform sampler2D tDiffuse; uniform vec3 uShade; varying vec2 vUv;
  void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    gl_FragColor = vec4(mix(vec3(1.0), mix(uShade, vec3(1.0), texel.rgb), intensity), texel.a);
  }`,pC=new B;function mC(e,t,n=!1){pC.set(e);let r=Math.max(pC.r,pC.g,pC.b,1e-4);return t.setRGB(pC.r/r,pC.g/r,pC.b/r).lerp(pC.setRGB(1,1,1),.35),n?t.multiplyScalar(1/(.2126*t.r+.7152*t.g+.0722*t.b)**.6):t}var hC=.6,gC=new z(0,1,0);function _C(e){if(e===0)return .62;let[t,n]=Bg(e),{x:r,z:i}=Vg(t,n),a=Hg(t,n),o=.46*Math.exp(-a*.55),s=.2*(.5+.5*Math.sin(r*.8+.7)*Math.cos(i*.72-.4));return Math.round((o+s+Ig(`h`+e)()*.1)/.11)*.11}function vC(e){let[t,n]=Bg(e),{x:r,z:i}=Vg(t,n);return{x:r,z:i,y:_C(e),ring:Hg(t,n)}}var yC=class{canvas;renderer;scene=new vr;camera=new hc(30,1,.5,1400);controls;onTileTap=()=>{};onNightChange=()=>{};onPreviewTap=()=>{};onFrame=()=>{};forcedHour=null;isNight=null;timer=new Tc;uTime={value:0};uGlow={value:1};uRim={value:.3};depthMat;composer;look=lf();grade;aoShade=new B(0,0,0);bloom;ao;pixelRatio=Math.min(window.devicePixelRatio,2);perf={t:0,n:0,sum:0};view={zoom:1,spin:!0,warp:0,snap:!1};mat;tiles=new Map;tileGroup=new lr;skyMat;skyMesh;stars;sun=new bc(`#ffffff`,2.5);hemi=new rc(`#ffffff`,`#887766`,1);sky=Xg();clouds=[];scenery=new lr;farGround=null;planet=null;planetDir=new z;cloudMat;crystalMat;waterMat;heartGlow;heartLevel=-1;treeGlow;glows=new Map;glowGroup=new lr;glowRingMat=new Wi({color:`#fff2a8`,transparent:!0,opacity:.8,depthWrite:!1,side:2,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3});glowFillMat=new Wi({color:`#ffd45a`,transparent:!0,opacity:.25,depthWrite:!1,side:2,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2});glowAuraMat=eS();glowAuraGeo=new V(1,1,1,28,1,!0).translate(0,.5,0);ghostFill=null;ghostLines=null;ghostKeys=[];ghostSig=``;todayRing;todayKey=null;level=-1;glowTex=Wx();motes=null;petals=null;birds=null;aurora=null;lanterns=null;lanternCores=[];islets=[];fx=new tS(this.glowTex);heartKeep=new lr;heartCore=null;heartUnder=new lr;heartWater=null;land=null;landGeoSig=``;landColSig=``;landVer=0;landGroup=new lr;landTop=null;landT0=-1;ringSig=``;riverMat=iS();coreGlow;runeRing;embers;waterfall=new aS(this.glowTex);smoke=null;smokeT0=0;fires=[];lifeSig=``;fall={key:``,t0:0};debris;debrisSeed=[];todayAura;preview=new lr;previewMesh=null;previewMat=new Wi({vertexColors:!0,color:`#e8f6ff`,transparent:!0,opacity:.4,depthWrite:!1});previewMark;previewSig=``;previewTop=1;m4=new Fn;q1=new dn;e1=new Gn;v2=new z;insetTop=0;insetBottom=0;islandR=3;fitDist=40;goal={target:new z(0,-.4,0),dist:40,active:!0};focusKey=null;lastInteract=-99;running=!1;raf=0;v1=new z;v2Color=new B;constructor(e){this.canvas=e,this.renderer=new rf({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1,{mat:this.mat,depthMat:this.depthMat}=_f({uTime:this.uTime,uGlow:this.uGlow,uRim:this.uRim,look:this.look}),this.composer=new Ex(this.renderer,new Mn(4,4,{type:pe})),this.composer.setPixelRatio(this.pixelRatio),this.composer.addPass(new Vx(this.scene,this.camera)),this.ao=new Rx(this.scene,this.camera,256,256),this.ao.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.4,scale:1.3,samples:10,screenSpaceRadius:!1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:8});let t=[],n=this.ao;n._overrideVisibility=()=>{this.scene.traverse(e=>{if(!e.visible)return;let n=e.material,r=e.isMesh&&n&&!Array.isArray(n)&&!n.transparent&&n.depthWrite&&!n.isShaderMaterial;(e.isMesh?!r:e.isPoints||e.isLine||e.isSprite)&&(e.visible=!1,t.push(e))})},n._restoreVisibility=()=>{for(let e of t)e.visible=!0;t.length=0},this.ao.blendMaterial.fragmentShader=fC,this.ao.blendMaterial.uniforms.uShade={value:this.aoShade},this.composer.addPass(this.ao),this.bloom=new Ux(new R(256,256),.4,.7,.92),this.composer.addPass(this.bloom),this.grade=new Cx(dC),this.composer.addPass(this.grade),this.composer.addPass(new Bx),this.composer.addPass(new Ox),this.skyMat=new ks({vertexShader:r_,fragmentShader:i_,side:1,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{uTop:{value:this.sky.top},uHor:{value:this.sky.hor},uBot:{value:this.sky.bot},uSun:{value:this.sky.sun},uSunDir:{value:this.sky.sunDir},uNight:{value:0}}}),this.skyMesh=new na(new ys(600,32,20),this.skyMat),this.skyMesh.renderOrder=-2,this.skyMesh.frustumCulled=!1,this.scene.add(this.skyMesh),this.stars=sS(),this.scene.add(this.stars),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.025,this.sun.shadow.radius=2.5,this.scene.add(this.sun,this.sun.target,this.hemi),this.scene.fog=new _r(`#dfe6ee`,60,160),this.glowAuraMat.uniforms.uColor.value.set(`#ffd060`),this.scene.add(this.landGroup,this.tileGroup,this.glowGroup,this.fx.group,this.scenery),this.cloudMat=new js({vertexColors:!0,flatShading:!0,roughness:1,metalness:0,emissive:`#ffffff`,emissiveIntensity:.2}),this.crystalMat=new js({color:`#c4f7ff`,emissive:`#3fd0ff`,emissiveIntensity:.6,flatShading:!0,roughness:.25,metalness:.1}),this.waterMat=new js({color:`#5fd0d2`,emissive:`#2aa6ae`,emissiveIntensity:.15,roughness:.06,metalness:.25}),this.heartGlow=new Li(new Ci({map:this.glowTex,color:`#62dcff`,transparent:!0,depthWrite:!1,blending:2,opacity:.2})),this.heartGlow.scale.setScalar(4.5),this.coreGlow=new Li(new Ci({map:this.glowTex,color:`#7fe6ff`,transparent:!0,depthWrite:!1,blending:2,opacity:.5})),this.coreGlow.scale.setScalar(2.6),this.runeRing=new na(new fi,this.mat),this.runeRing.position.y=-4.45,this.embers=new nS(this.glowTex,30,`embers`,e=>{let t=e()*Math.PI*2,n=t+1.5+e()*2;return{a:[Math.cos(t)*.35,-5.9+e()*.5,Math.sin(t)*.35],b:[Math.cos(n)*.95,-1.6-e()*1.2,Math.sin(n)*.95],size:.1+e()*.12,speed:.045+e()*.07}},{color:`#7fe6ff`,wobble:.14,boost:1.6}),this.treeGlow=new Li(new Ci({map:this.glowTex,color:`#a8ffd8`,transparent:!0,depthWrite:!1,blending:2,opacity:0,fog:!1})),this.heartKeep.add(this.heartGlow,this.coreGlow,this.runeRing,this.embers.points,this.treeGlow);for(let e=0;e<2;e++){let e=new _c(`#ff9a3c`,0,2.6,1.6),t=new Li(new Ci({map:this.glowTex,color:`#ff9a3c`,transparent:!0,depthWrite:!1,blending:2,opacity:0}));t.scale.setScalar(1.1),this.scene.add(e,t),this.fires.push({light:e,glow:t,s:1,on:!1})}this.waterfall.group.visible=!1,this.scene.add(this.waterfall.group);let r=Ig(`debris-field`);this.debris=new ma(new fi,this.mat,16),this.debris.frustumCulled=!1;for(let e=0;e<16;e++)this.debrisSeed.push({a:e/16*Math.PI*2+r()*.5,r:r(),y:-1.3-r()*3.4,s:.3+r()*r()*.8,sp:(r()-.5)*.05,ph:r()*20});this.scene.add(this.debris),this.todayRing=new na(new fi,new Wi({color:`#fff6d6`,transparent:!0,opacity:.6,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-2})),this.todayRing.visible=!1,this.scene.add(this.todayRing);let i=new V(.93,.93,1,6,1,!0);i.translate(0,.5,0),this.todayAura=new na(i,eS()),this.todayAura.material.uniforms.uColor.value.set(`#fff0c0`),this.todayAura.scale.set(.82,.95,.82),this.todayAura.visible=!1,this.todayAura.renderOrder=3,this.scene.add(this.todayAura),this.previewMark=new Li(new Ci({map:Gx(),transparent:!0,depthTest:!1})),this.previewMark.scale.setScalar(.46),this.previewMark.renderOrder=10,this.preview.add(this.previewMark),this.preview.visible=!1,this.scene.add(this.preview),this.camera.position.set(30,40,50),this.controls=new ax(this.camera,e),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,enablePan:!1,rotateSpeed:.55,zoomSpeed:.8,minPolarAngle:.42,maxPolarAngle:1.3,autoRotate:!0,autoRotateSpeed:.35,minDistance:4}),this.controls.touches={ONE:A.ROTATE,TWO:A.DOLLY_ROTATE},this.controls.addEventListener(`start`,()=>{this.goal.active=!1,this.controls.autoRotate=!1,this.lastInteract=this.timer.getElapsed()}),this.bindTap(),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),this.dress(),e.addEventListener(`webglcontextlost`,e=>e.preventDefault()),e.addEventListener(`webglcontextrestored`,()=>location.reload()),document.addEventListener(`visibilitychange`,()=>document.hidden?this.stop():this.start())}retheme(){for(let e of this.tiles.values())this.tileGroup.remove(e.mesh),e.mesh.geometry.dispose(),e.spinner?.geometry.dispose();this.tiles.clear(),this.heartUnder.removeFromParent(),this.heartLevel=-1,this.heartWater&&=(this.heartWater.removeFromParent(),this.heartWater.geometry.dispose(),null);for(let e of[...this.landGroup.children])this.landGroup.remove(e),e.geometry.dispose();this.land=null,this.landTop=null,this.landGeoSig=this.landColSig=this.ringSig=this.previewSig=this.lifeSig=``,this.todayRing.geometry.dispose(),this.todayRing.geometry=new fi,this.waterfall.group.visible=!1,this.fall.key=``;for(let e of this.glows.values())this.glowGroup.remove(e.ring,e.fill,e.aura),e.ring.geometry.dispose(),e.fill.geometry.dispose();this.glows.clear(),this.previewMesh&&=(this.preview.remove(this.previewMesh),this.previewMesh.geometry.dispose(),null),this.preview.visible=!1,this.smoke&&=(this.scene.remove(this.smoke.points),this.smoke.points.geometry.dispose(),this.smoke.mat.dispose(),null);for(let e of this.fires)e.on=!1;for(let e of[this.motes?.points,this.birds?.group,this.petals?.points,this.aurora?.mesh,this.lanterns])e&&this.scene.remove(e);for(let e of this.islets)this.scene.remove(e.mesh),e.mesh.geometry.dispose();this.motes=this.birds=this.petals=this.aurora=this.lanterns=null,this.lanternCores=[],this.islets=[],this.level=-1,this.isNight=null,this.dress()}dress(){let e=rp();for(let e of[...this.scenery.children])this.scenery.remove(e),e.geometry?.dispose();if(this.clouds=[],this.farGround=null,this.planet&&=(this.planet.material.map?.dispose(),this.planet.material.dispose(),null),e.sky.clouds)for(let e of[{kind:`sea`,n:15,wide:!0,s:[1.1,2.1],y:[-14,-5.5]},{kind:`waist`,n:8,wide:!1,s:[.55,.9],y:[-3.3,-1.4]},{kind:`far`,n:7,wide:!0,s:[2.8,4.4],y:[6,16]}])for(let t=0;t<e.n;t++){let n=Ig(`cloud-${e.kind}-${t}`),r=new na(HS(`${e.kind}${t}`,e.wide),this.cloudMat),i=e.s[0]+n()*(e.s[1]-e.s[0]);r.scale.set(i,i*(.8+n()*.25),i),r.rotation.y=n()*Math.PI,this.scenery.add(r),this.clouds.push({mesh:r,kind:e.kind,a:(t+n()*.8)/e.n*Math.PI*2,r:n(),y:e.y[0]+n()*(e.y[1]-e.y[0]),sp:(.004+n()*.006)*(e.kind===`waist`?1.8:1),ph:n()*10})}if(e.sky.ground&&(this.farGround=new na(KS(e.sky.ground),new Ns({vertexColors:!0,fog:!1})),this.farGround.position.y=-260-e.sky.ground.depth,this.scenery.add(this.farGround)),e.sky.planet){this.planet=new Li(new Ci({map:qx(e.sky.planet.kind),transparent:!0,depthWrite:!1,fog:!1})),this.planet.scale.setScalar(e.sky.planet.size),this.planet.renderOrder=-.5;let{yaw:t,elev:n}=e.sky.planet;this.planetDir.set(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)),this.scenery.add(this.planet)}let t=of.value,n=this.grade.uniforms;cf(e.pal.grassMid,this.look.uBounce.value),this.look.uLeaf.value=t,mC(e.look.shade,n.uShade.value),mC(e.look.light,n.uLight.value,!0),n.uSat.value=1.04+(e.look.sat-1.04)*t,n.uCon.value=1.05+(e.look.contrast-1.05)*t,this.aoShade.set(e.look.shade).multiplyScalar(.18*t),this.crystalMat.color.set(e.heart.crystal),this.crystalMat.emissive.set(e.heart.crystalGlow),this.waterMat.color.set(e.water.pond.color),this.waterMat.emissive.set(e.water.pond.emissive),this.waterMat.roughness=e.water.pond.rough,this.heartGlow.material.color.set(e.heart.glow),this.coreGlow.material.color.set(e.heart.core),this.embers.mat.uniforms.uColor.value.set(e.heart.core),this.runeRing.geometry.dispose(),this.runeRing.geometry=ES(7,1.05),this.debris.geometry.dispose(),this.debris.geometry=DS();for(let t of this.fires)t.light.color.set(e.life.fire),t.glow.material.color.set(e.life.fire);rS.set(e.water.color)}setInsets(e,t){this.insetTop=e,this.insetBottom=t,this.resize()}setWorld(e,t,n,r){let i=this.timer.getElapsed(),a=this.tiles.size===0,o=e.map(e=>{let t=vC(e.idx),r=e.kind===`heart`?.64:e.landmark?Vm[e.landmark]+.14:0;return{key:e.key,x:t.x,z:t.z,base:t.y,grass:lS(e),today:e.key===n,pad:r}}),s=rp().water.river?this.findFall(e):null,c=rp().pal.sprout,l=o.map((t,n)=>`${e[n].idx}:${t.pad}`).join(`,`)+`|`+(s?.key??``),u=o.map(e=>e.grass+(e.today?`t`:``)).join(`,`);(l!==this.landGeoSig||u!==this.landColSig)&&(l!==this.landGeoSig&&this.landVer++,this.landGeoSig=l,this.landColSig=u,this.land=new uC(o,s?this.riverPath(e,s):[]),this.rebuildLand(i,a,s));let d=this.land,f=new Set;e.forEach((t,r)=>{f.add(t.key);let o=kS(t)+`|`+this.landVer,s=this.tiles.get(t.key);if(s&&s.sig===o)return;let l=vC(t.idx),u=d.ground(l.x,l.z),p=RS(t,{ground:(e,t)=>d.ground(l.x+e,l.z+t),river:d.river.filter(e=>Math.hypot(e.x-l.x,e.z-l.z)<1.4).map(e=>({x:e.x-l.x,z:e.z-l.z,r:tC*1.35*e.w}))}),m={x:l.x,y:0,z:l.z};if(s){let e=kS(s.spec)===kS(t);s.plants=this.bakeGrowth(p,i+.15,s.plants,m,!e),s.mesh.geometry.dispose(),s.mesh.geometry=p,s.sig=o,s.spec=t,s.y=u,e||(s.anim={t0:i,kind:`pop`},this.fx.burst(this.v1.set(s.x,u+.05,s.z),t.kind===`heart`?`#ffd56a`:c,16))}else{let s=!a||t.key===n&&e.length>2,d=i+(a?(t.key===n?1.6:.25)+r*Math.min(.05,2.4/e.length):.1),f=this.bakeGrowth(p,d+.75,null,m,s);s&&(this.fx.pulses.ring(this.v1.set(l.x,u+.03,l.z),c,d+.8,1.6),this.fx.sparks.emit(this.v1,c,26,d+.75,{spread:.8,speed:.7,up:1.2}));let h=new na(p,this.mat);h.customDepthMaterial=this.depthMat,h.castShadow=h.receiveShadow=!0,h.position.set(l.x,0,l.z),h.userData.key=t.key,h.scale.setScalar(.001),this.tileGroup.add(h),this.tiles.set(t.key,{spec:t,sig:o,mesh:h,x:l.x,y:u,z:l.z,anim:{t0:d,kind:`rise`},plants:f,spinner:null,spin:{axis:`z`,speed:0,ry:0}})}this.dressSpinner(this.tiles.get(t.key)),t.kind===`heart`&&this.dressHeart(this.tiles.get(t.key),t.level)});for(let[e,t]of this.tiles)f.has(e)||(this.tileGroup.remove(t.mesh),t.mesh.geometry.dispose(),this.tiles.delete(e));this.bringToLife(i,a);let p=`${n}|${this.landVer}`;if(p!==this.ringSig){this.ringSig=p;let e=n?this.tiles.get(n):null;this.todayRing.geometry.dispose(),this.todayRing.geometry=e?d.ringAt(e.x,e.z,.74,.84):new fi}this.todayKey=n,this.setGhosts(t),this.setLevel(r),this.placeLanterns();let m=1;for(let t of e)m=Math.max(m,vC(t.idx).ring);this.islandR=(m+.72)*Math.sqrt(3),this.fit()}bringToLife(e,t){let n=[];for(let e of this.tiles.values())for(let t of e.mesh.geometry.userData.fx??[])n.push({...t,x:e.x+t.x,z:e.z+t.z});let r=n.map(e=>`${e.kind[0]}${e.x.toFixed(2)},${e.y.toFixed(2)},${e.z.toFixed(2)}`).join(`|`);if(r===this.lifeSig)return;let i=this.lifeSig===``;this.lifeSig=r,this.smoke&&=(this.scene.remove(this.smoke.points),this.smoke.points.geometry.dispose(),this.smoke.mat.dispose(),null);let a=n.filter(e=>e.kind===`smoke`);a.length&&(this.smoke=new nS(this.glowTex,a.length*7,`smoke`,(e,t)=>{let n=a[Math.floor(t/7)],r=(.5+e()*.25)*n.s;return{a:[n.x+(e()-.5)*.02*n.s,n.y,n.z+(e()-.5)*.02*n.s],b:[n.x+(.16+e()*.14)*n.s,n.y+r,n.z+(.05+e()*.1)*n.s],size:(.2+e()*.12)*n.s,speed:.1+e()*.06}},{color:rp().life.smoke,additive:!1,wobble:.018}),this.smoke.points.renderOrder=2,this.scene.add(this.smoke.points),this.smokeT0=e+(t||i?3:1.4));let o=n.filter(e=>e.kind===`fire`).sort((e,t)=>t.s-e.s);this.fires.forEach((e,t)=>{let n=o[t];e.on=!!n,n&&(e.s=n.s,e.light.position.set(n.x,n.y+.12,n.z),e.glow.position.set(n.x,n.y,n.z),e.glow.scale.setScalar(1.2*n.s))})}findFall(e){let t=new Set(e.map(e=>Bg(e.idx).join(`,`)));for(let n of e.filter(e=>e.kind!==`heart`).sort((e,t)=>e.idx-t.idx)){let[e,r]=Bg(n.idx),i=Vg(e,r),a=null,o=-1/0;for(let[n,s]of Lg){if(t.has(`${e+n},${r+s}`))continue;let c=Vg(n,s),l=c.x*i.x+c.z*i.z;l>o&&(o=l,a=c)}if(!a)continue;let s=Math.hypot(a.x,a.z);return{key:`${n.key}|${a.x.toFixed(2)},${a.z.toFixed(2)}`,idx:n.idx,x:i.x,z:i.z,dx:a.x/s,dz:a.z/s}}return null}riverPath(e,t){let n=new Set(e.map(e=>Bg(e.idx).join(`,`))),[r,i]=[0,0],a=[];for(let e=0;e<16;e++){let e=Vg(r,i);if(Math.hypot(e.x-t.x,e.z-t.z)<.01)break;let o=null,s=1/0;for(let[e,a]of Lg){if(!n.has(`${r+e},${i+a}`))continue;let c=Vg(r+e,i+a),l=Math.hypot(c.x-t.x,c.z-t.z);l<s&&(s=l,o=[r+e,i+a])}if(!o)break;[r,i]=o,a.push(Vg(r,i))}if(!a.length)return[];let o=Math.hypot(a[0].x,a[0].z)||1,s=[new z(a[0].x/o*.92,0,a[0].z/o*.92)];a.forEach((n,r)=>{let i=r?a[r-1]:{x:0,z:0},o=r<a.length-1?a[r+1]:{x:n.x+t.dx,z:n.z+t.dz},c=o.x-i.x,l=o.z-i.z,u=Math.hypot(c,l)||1,d=e.find(e=>e.kind!==`heart`&&e.landmark&&Math.hypot(vC(e.idx).x-n.x,vC(e.idx).z-n.z)<.01),f=d?Math.min(.86,Vm[d.landmark]+.32):0,p=(r%2?1:-1)*Math.max(r===a.length-1?.34:.62,f);s.push(new z(n.x-l/u*p,0,n.z+c/u*p))});let c=a[a.length-1];s.push(new z(c.x+t.dx*1.06,0,c.z+t.dz*1.06));let l=new ao(s,!1,`centripetal`),u=l.getSpacedPoints(Math.max(8,Math.ceil(l.getLength()/.12))).map(e=>({x:e.x,z:e.z})),d=e.filter(e=>e.kind!==`heart`&&e.landmark).map(e=>({...vC(e.idx),r:Vm[e.landmark]+tC*1.35+.1}));if(d.length){let e=()=>{for(let e of u)for(let t of d){let n=e.x-t.x,r=e.z-t.z,i=Math.hypot(n,r);if(i>=t.r)continue;let a=i>1e-4?n/i:1,o=i>1e-4?r/i:0;e.x=t.x+a*t.r,e.z=t.z+o*t.r}};for(let t=0;t<4;t++){e();for(let e=1;e<u.length-2;e++)u[e].x=(u[e-1].x+u[e].x*2+u[e+1].x)/4,u[e].z=(u[e-1].z+u[e].z*2+u[e+1].z)/4}e()}return u}rebuildLand(e,t,n){for(let e of[...this.landGroup.children])this.landGroup.remove(e),e.geometry.dispose();let r=this.land,i=r.build();this.landTop=new na(i.top,this.mat),this.landTop.customDepthMaterial=this.depthMat,this.landTop.castShadow=this.landTop.receiveShadow=!0;let a=new na(i.under,this.mat);if(a.receiveShadow=!0,this.landGroup.add(this.landTop,a),i.water){let e=new na(i.water,this.riverMat);e.receiveShadow=!0,e.renderOrder=1,this.landGroup.add(e)}t&&(this.landT0=e+.1);let o=r.river[r.river.length-1];n&&o?(n.key!==this.fall.key&&(this.fall={key:n.key,t0:e+(t?2.2:1.2)}),this.waterfall.group.position.set(o.x-n.dx*.24,o.y-.02,o.z-n.dz*.24),this.waterfall.group.rotation.y=Math.atan2(n.dx,n.dz),this.waterfall.group.visible=!0):(this.waterfall.group.visible=!1,this.fall.key=``)}placeLanterns(){let e=this.tiles.get(`heart`);if(this.lanterns&&e&&this.land)for(let t of this.lanterns.children)t.position.y=this.land.ground(e.x+t.position.x,e.z+t.position.z)}setPreview(e){this.previewMark.visible=e?.mark!==!1;let t=e?`${e.id}|${e.idx}|${e.onTile}|${this.landVer}`:``;if(t===this.previewSig||(this.previewSig=t,this.previewMesh&&=(this.preview.remove(this.previewMesh),this.previewMesh.geometry.dispose(),null),this.preview.visible=!!e,!e))return;let n=AS(e.id,e.key);this.previewMesh=new na(n,this.previewMat),this.previewMesh.renderOrder=4,this.preview.add(this.previewMesh);let r=vC(e.idx);this.preview.position.set(r.x,e.onTile&&this.land?this.land.ground(r.x,r.z)+.02:r.y-.14,r.z),this.previewTop=(n.boundingBox?.max.y??.6)+.36}setGlows(e){let t=this.land,n=new Set;for(let r of e){let e=this.tiles.get(r.key);if(!e||!t)continue;n.add(r.id);let i=e.x+r.dx,a=e.z+r.dz,o=`${i.toFixed(2)},${a.toFixed(2)},${r.r}|${this.landVer}`,s=this.glows.get(r.id);if(!(s&&s.sig===o)){if(!s){let e=new na(new fi,this.glowRingMat),t=new na(new fi,this.glowFillMat),n=new na(this.glowAuraGeo,this.glowAuraMat);t.renderOrder=2,e.renderOrder=3,n.renderOrder=3,this.glowGroup.add(t,e,n),s={sig:o,key:r.key,x:i,y:0,z:a,r:r.r,ring:e,fill:t,aura:n,next:0},this.glows.set(r.id,s)}s.sig=o,s.key=r.key,s.x=i,s.z=a,s.r=r.r,s.y=t.ground(i,a),s.ring.geometry.dispose(),s.ring.geometry=t.ringAt(i,a,r.r,r.r+.075),s.fill.geometry.dispose(),s.fill.geometry=t.ringAt(i,a,.01,r.r),s.aura.position.set(i,s.y-.06,a),s.aura.scale.set(r.r+.03,.9+r.r*1.1,r.r+.03)}}for(let[e,t]of this.glows)n.has(e)||(this.glowGroup.remove(t.ring,t.fill,t.aura),t.ring.geometry.dispose(),t.fill.geometry.dispose(),this.glows.delete(e))}focus(e){this.focusKey=e;let t=e?this.tiles.get(e):null;t?(this.goal.target.set(t.x,t.y+.35,t.z),this.goal.dist=7.5,this.controls.autoRotateSpeed=.6):(this.goal.target.set(0,-.4,0),this.goal.dist=this.fitDist*this.view.zoom,this.controls.autoRotateSpeed=.35),this.goal.active=!0,this.controls.autoRotate=!0}screenPos(e){let t=this.tiles.get(e);if(!t)return null;let n=this.v1.set(t.x,t.y,t.z).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(n.x+1)/2*r.width,y:r.top+(1-n.y)/2*r.height}}anchor(e,t,n,r=0,i=0){let a=this.tiles.get(e);if(!a)return n.ok=!1,n;let o=(r||i)&&this.land?this.land.ground(a.x+r,a.z+i):a.y,s=this.v1.set(a.x+r,o+t,a.z+i).project(this.camera);return n.x=(s.x+1)/2*this.canvas.clientWidth,n.y=(1-s.y)/2*this.canvas.clientHeight,n.ok=s.z<1&&a.mesh.scale.x>.6,n}burstAt(e,t,n=30,r=0,i=0){let a=this.tiles.get(e);a&&this.fx.burst(this.v1.set(a.x+r,a.y+.05,a.z+i),t,n)}start(){if(this.running)return;this.running=!0;let e=t=>{this.running&&(this.raf=requestAnimationFrame(e),this.tick(t))};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}bakeGrowth(e,t,n,r,i){let a=e.getAttribute(`grow`),o=new Map,s=e.getAttribute(`position`);for(let e=0;e<a.count;e++){let t=a.getZ(e);if(t<0)continue;let n=o.get(t);n?(n.n++,n.top=Math.max(n.top,s.getY(e))):o.set(t,{x:a.getX(e),z:a.getY(e),n:1,top:s.getY(e)})}let c=new Set,l=new Map,u=[...o.entries()].sort((e,t)=>e[0]-t[0]).filter(([,e])=>{let t=`${Math.round(e.x*500)},${Math.round(e.z*500)},${e.n}`;return c.add(t),!n?.has(t)}),d=Math.min(.11,1.5/Math.max(1,u.length));u.forEach(([e,n],a)=>{let o=t+a*d;l.set(e,o),i&&this.fx.sproutAt(this.v2.set(r.x+n.x,r.y+n.top*.85,r.z+n.z),rp().pal.sprout,o+.25)});for(let e=0;e<a.count;e++)a.setZ(e,l.get(a.getZ(e))??-1e3);return c}dressSpinner(e){e.spinner&&=(e.mesh.remove(e.spinner),e.spinner.geometry.dispose(),null);let t=jS(e.spec);if(!t)return;let n=new na(t.geo,this.mat);n.customDepthMaterial=this.depthMat,n.castShadow=!0,n.rotation.order=`YXZ`,n.rotation.y=t.ry,n.position.set(Math.sin(t.ry)*t.z,t.y,Math.cos(t.ry)*t.z),e.mesh.add(n),e.spinner=n,e.spin={axis:t.axis,speed:t.speed,ry:t.ry}}dressHeart(e,t){let n=e.mesh;if(this.heartLevel!==t||this.heartUnder.parent!==n){this.heartLevel=t;for(let e of[...this.heartUnder.children])this.heartUnder.remove(e),e instanceof na&&e.geometry.dispose();this.heartWater&&(this.heartWater.removeFromParent(),this.heartWater.geometry.dispose());let e=wS(t);this.heartWater=new na(e.water,this.waterMat),this.heartWater.receiveShadow=!0;let r=new na(e.crystals,this.crystalMat);this.heartCore=new na(TS(t),this.crystalMat),this.heartGlow.position.set(0,e.glowY,0);let i=xS(t);this.treeGlow.visible=i>0,this.treeGlow.position.set(bS.x,.9*i,bS.z),this.treeGlow.scale.setScalar(1.9*i),this.treeGlow.material.color.set(t>=8?rp().heart.treeGold:rp().heart.tree),this.heartUnder.add(r,this.heartCore,this.heartKeep),n.add(this.heartWater,this.heartUnder)}this.heartUnder.position.y=e.y,this.heartWater.position.y=this.land?this.land.ground(e.x+SS.x,e.z+SS.z):e.y}setGhosts(e){let t=e.map(e=>e.idx).join(`,`);if(t===this.ghostSig)return;this.ghostSig=t,this.ghostFill&&(this.scene.remove(this.ghostFill,this.ghostLines),this.ghostFill.geometry.dispose(),this.ghostLines.geometry.dispose()),this.ghostKeys=e.map(e=>e.key);let n=Math.max(1,e.length),r=new ma(new V(.9,.9,.05,6),new Wi({color:`#ffffff`,transparent:!0,opacity:.13,depthWrite:!1}),n);r.count=e.length;let i=[],a=new Fn;e.forEach((e,t)=>{let n=vC(e.idx),o=n.y-.18;a.makeTranslation(n.x,o,n.z),r.setMatrixAt(t,a);for(let e=0;e<6;e++){let t=e/6*Math.PI*2,r=(e+1)/6*Math.PI*2;i.push(n.x+Math.sin(t)*.9,o+.03,n.z+Math.cos(t)*.9,n.x+Math.sin(r)*.9,o+.03,n.z+Math.cos(r)*.9)}}),r.instanceMatrix.needsUpdate=!0;let o=new fi;o.setAttribute(`position`,new ei(i,3)),this.ghostLines=new Na(o,new xa({color:`#ffffff`,transparent:!0,opacity:.4,depthWrite:!1})),this.ghostFill=r,this.scene.add(r,this.ghostLines)}setLevel(e){if(e===this.level)return;this.level=e;let t=rp().life;if(e>=2&&!this.motes&&(this.motes=new Jx(this.glowTex,t.motes),this.scene.add(this.motes.points)),e>=3&&!this.birds&&t.flyers&&(this.birds=new Xx(4,t.flyers),this.scene.add(this.birds.group)),e>=4&&!this.lanterns){this.lanterns=new lr;let e=JS(),n=new Ka(.075,.06,.075);for(let r=0;r<3;r++){let i=2.3+r*1.65,a=new na(e,this.mat);a.castShadow=!0,a.position.set(Math.cos(i)*.48,0,Math.sin(i)*.48);let o=new na(n,new Wi({color:`#ffd27a`}));o.position.y=.245,a.add(o);let s=new Li(new Ci({map:this.glowTex,color:t.lamp,transparent:!0,depthWrite:!1,blending:2}));s.position.y=.25,s.scale.setScalar(.9),a.add(s),this.lanternCores.push({core:o,glow:s}),this.lanterns.add(a)}this.scene.add(this.lanterns)}if(e>=5&&!this.petals&&(this.petals=new Yx(Kx(),t.petals),this.scene.add(this.petals.points)),e>=6&&this.islets.length===0)for(let e=0;e<3;e++){let t=new na(qS(`islet`+e),this.mat);t.castShadow=!0,this.scene.add(t),this.islets.push({mesh:t,a:e/3*Math.PI*2+.4,r:1+e*.12,y:1.2+e*.7})}e>=7&&!this.aurora&&(this.aurora=new Zx(rp().sky.aurora),this.scene.add(this.aurora.mesh))}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(e,t),this.ao.setSize(Math.round(e*this.pixelRatio*hC),Math.round(t*this.pixelRatio*hC)),this.camera.aspect=e/t,this.fit()}fit(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.max(120,t-this.insetTop-this.insetBottom),r=un.degToRad(this.camera.fov/2),i=n/t*Math.tan(r),a=e/t*Math.tan(r),o=this.islandR,s=Math.max(o*.5+1.45,3.5),c=this.fitDist;this.fitDist=Math.max(o/a,s/i)*1.02,this.controls.maxDistance=this.fitDist*2.2,this.camera.setViewOffset(e,t,0,(this.insetBottom-this.insetTop)/2,e,t),this.camera.updateProjectionMatrix(),!this.focusKey&&Math.abs(c-this.fitDist)>.3&&(this.goal.dist=this.fitDist*this.view.zoom,this.goal.active=!0);let l=this.sun.shadow.camera,u=o+2.5;l.left=-u,l.right=u,l.top=u,l.bottom=-u,l.near=1,l.far=160,l.updateProjectionMatrix()}tunePerformance(e){if(this.perf.t<0||(this.perf.t+=e,this.perf.t<3||e>.09)||(this.perf.n++,this.perf.sum+=e,this.perf.n<90))return;let t=this.perf.sum/this.perf.n;this.perf.n=this.perf.sum=0,t<1/45?this.perf.t=-1:this.pixelRatio>1.51?(this.pixelRatio=Math.max(1.5,this.pixelRatio-.25),this.resize()):this.ao.enabled?this.ao.enabled=!1:this.pixelRatio>1.01?(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.resize()):(this.bloom.enabled=!1,this.perf.t=-1)}bindTap(){let e=0,t=0,n=0,r=!1,i=new Bc,a=new R;this.canvas.addEventListener(`pointerdown`,i=>{r=!i.isPrimary,e=i.clientX,t=i.clientY,n=performance.now()}),this.canvas.addEventListener(`click`,o=>{if(r||Math.hypot(o.clientX-e,o.clientY-t)>12||performance.now()-n>600)return;let s=this.canvas.getBoundingClientRect();if(a.set((o.clientX-s.left)/s.width*2-1,-((o.clientY-s.top)/s.height)*2+1),i.setFromCamera(a,this.camera),this.preview.visible&&this.previewMesh&&i.intersectObjects([this.previewMark,this.previewMesh],!1).length){this.onPreviewTap();return}let c=[...this.tileGroup.children];this.landTop&&c.push(this.landTop),this.ghostFill&&c.push(this.ghostFill);let l=i.intersectObjects(c,!1)[0];if(l){if(l.object===this.landTop){let e=this.land?.cellAt(l.point.x,l.point.z);e&&this.onTileTap(e.key)}else l.object===this.ghostFill&&l.instanceId!=null?this.onTileTap(this.ghostKeys[l.instanceId]):l.object.userData.key&&this.onTileTap(l.object.userData.key)}})}tick(e){this.timer.update(e);let t=Math.min(this.timer.getDelta(),.1),n=this.timer.getElapsed()+this.view.warp;this.uTime.value=n;let r=new Date,i=this.forcedHour??r.getHours()+r.getMinutes()/60,a=rp(),o=n_(i,this.sky);this.skyMat.uniforms.uNight.value=o.night;let s=this.stars.material,c=Math.max(a.sky.stars,Ug((o.night-.3)/.6));s.uniforms.uAlpha.value=c,s.uniforms.uTime.value=n,s.uniforms.uDpr.value=this.pixelRatio,this.stars.visible=c>.01,this.uGlow.value=.5+o.night*1.7,this.uRim.value=.34-o.night*.2,this.bloom.strength=.34+o.night*.5;let l=(this.canvas.clientHeight||window.innerHeight)*this.pixelRatio*.5;this.sun.color.copy(o.sun),this.sun.intensity=o.sunI*(1.06-o.night*.06),this.hemi.color.copy(o.hemiSky),this.hemi.groundColor.copy(o.hemiGround),this.hemi.intensity=o.hemiI*(.98+o.night*.02),this.scene.fog.color.copy(o.fog),this.look.uSkyTop.value.copy(o.top).lerp(o.hemiSky,.3),this.look.uSkyHor.value.copy(o.hor).lerp(o.hemiSky,.3),this.look.uSkyBot.value.copy(o.bot).lerp(o.hemiGround,.3),this.look.uSheen.value=a.look.sheen*of.value,this.grade.uniforms.uTone.value=a.look.tone*(1-.6*o.night)*of.value,this.sun.position.copy(o.sunDir).multiplyScalar(60),this.sun.target.position.set(0,0,0);let u=o.night>.5||a.sky.dark;if(u!==this.isNight&&(this.isNight=u,this.onNightChange(u)),this.goal.active){let e=this.view.snap?1:1-Math.exp(-t*2.6);this.controls.target.lerp(this.goal.target,e);let n=this.v1.copy(this.camera.position).sub(this.controls.target),r=n.length(),i=r+(this.goal.dist-r)*e;n.setLength(i),this.camera.position.copy(this.controls.target).add(n),Math.abs(i-this.goal.dist)<.02&&this.controls.target.distanceTo(this.goal.target)<.01&&(this.goal.active=!1)}if(!this.controls.autoRotate&&n-this.lastInteract>7&&this.view.spin&&(this.controls.autoRotate=!0),this.controls.update(t),this.skyMesh.position.copy(this.camera.position),this.stars.position.copy(this.camera.position),this.planet){let e=Math.atan2(this.camera.position.x-this.controls.target.x,this.camera.position.z-this.controls.target.z);this.v1.copy(this.planetDir).applyAxisAngle(gC,e*a.sky.planet.follow),this.planet.position.copy(this.camera.position).addScaledVector(this.v1,420)}let d=this.camera.position.distanceTo(this.controls.target),f=this.scene.fog;if(f.near=d*1.3,f.far=d*2.6+30,this.ghostFill&&this.ghostLines){let e=Ug((d/this.fitDist-.5)/.3),t=e*(1-o.night*.45);this.ghostFill.material.opacity=.13*t,this.ghostLines.material.opacity=.4*t,this.ghostFill.visible=this.ghostLines.visible=e>.01}if(this.landT0>=0){let e=Ug((n-this.landT0)/1.3),t=Kg(e);this.landGroup.position.y=-(1-t)*3,this.landGroup.scale.setScalar(.55+.45*t),e>=1&&(this.landT0=-1)}for(let e of this.tiles.values()){if(e.spinner&&(e.spin.axis===`z`?e.spinner.rotation.z=n*e.spin.speed:e.spinner.rotation.y=e.spin.ry+n*e.spin.speed),!e.anim)continue;let t=(n-e.anim.t0)/(e.anim.kind===`rise`?1.1:.7);if(!(t<0)){if(t>=1)e.anim=null,e.mesh.scale.setScalar(1),e.mesh.position.y=0;else if(e.anim.kind===`rise`)e.mesh.position.y=-(1-Kg(t))*2.4,e.mesh.scale.setScalar(Math.max(.001,.25+.75*Gg(t)));else{let n=1+Math.sin(t*Math.PI)*.12*(1-t*.5);e.mesh.scale.set(1/Math.sqrt(n),n,1/Math.sqrt(n))}}}let p=this.todayKey?this.tiles.get(this.todayKey):null;if(this.todayRing.visible=!!p,p){this.todayRing.material.opacity=.4+Math.sin(n*2.2)*.25,this.todayAura.position.set(p.x,p.y-.2,p.z);let e=this.todayAura.material.uniforms;e.uAlpha.value=(.2+Math.sin(n*2.2)*.08+o.night*.12)*p.mesh.scale.x,e.uTime.value=n}if(this.todayAura.visible=!!p,this.glows.size){let e=Math.sin(n*3.1);this.glowRingMat.opacity=.68+e*.3,this.glowFillMat.opacity=.26+e*.12-o.night*.08,this.glowAuraMat.uniforms.uAlpha.value=.75+e*.2,this.glowAuraMat.uniforms.uTime.value=n;for(let e of this.glows.values()){let t=this.tiles.get(e.key),r=!!t&&t.mesh.scale.x>.9;e.ring.visible=e.fill.visible=e.aura.visible=r,!r||n<e.next||(e.next=n+1.8,this.v1.set(e.x,e.y+.05,e.z),this.fx.pulses.ring(this.v1,`#ffe08a`,n,e.r*2.1+.25,1.4),this.fx.sparks.emit(this.v1,`#fff0b0`,6,n,{spread:e.r*.9,speed:.12,up:.8,life:1.9}))}}this.preview.visible&&(this.previewMat.opacity=.34+Math.sin(n*2.4)*.1,this.previewMark.position.y=this.previewTop+Math.sin(n*1.8)*.05),this.cloudMat.emissive.copy(o.hor),this.cloudMat.emissiveIntensity=(.26-o.night*.12)*(a.sky.clouds?.glow??1);let m=this.islandR;for(let e of this.clouds){e.a+=e.sp*t;let r=e.kind===`sea`?m*1.2+3+e.r*(m+16):e.kind===`waist`?m+1.8+e.r*5:m*2+30+e.r*40;e.mesh.position.set(Math.cos(e.a)*r,e.y+Math.sin(n*.2+e.ph)*.35,Math.sin(e.a)*r)}if(this.crystalMat.emissiveIntensity=.5+o.night*1.3+Math.sin(n*1.3)*.12,this.waterMat.emissiveIntensity=.14+o.night*.4+Math.sin(n*2.2)*.04,this.heartGlow.material.opacity=.12+o.night*.55+Math.sin(n*1.3)*.04,this.treeGlow.material.opacity=.16+o.night*.4+Math.sin(n*1.1)*.05,this.heartCore){let e=-5.95+Math.sin(n*.9)*.12;this.heartCore.position.y=e,this.heartCore.rotation.y=n*.35,this.coreGlow.position.y=e,this.coreGlow.material.opacity=.32+o.night*.45+Math.sin(n*1.3)*.08,this.runeRing.rotation.y=-n*.12,this.runeRing.position.y=-4.45+Math.sin(n*.6)*.08,this.embers.mat.uniforms.uAlpha.value=.55+o.night*.45,this.embers.update(n,l)}this.v2Color.copy(rS).lerp(o.hemiSky,.16),this.riverMat.uniforms.uTime.value=n,this.riverMat.uniforms.uTint.value.copy(this.v2Color);let h=1-o.night*.5+a.water.glow*(.15+o.night*.85);this.riverMat.uniforms.uBright.value=h,this.waterfall.group.visible&&this.waterfall.update(n,l,this.v2Color,Ug((n-this.fall.t0)/1.5),h);for(let e=0;e<this.debrisSeed.length;e++){let t=this.debrisSeed[e],r=t.a+n*t.sp,i=m*(.6+t.r*.55)+.9;this.v2.set(Math.cos(r)*i,t.y+Math.sin(n*.45+t.ph)*.22,Math.sin(r)*i),this.q1.setFromEuler(this.e1.set(Math.sin(n*.11+t.ph)*.3,n*.07+t.ph,Math.cos(n*.09+t.ph)*.3)),this.m4.compose(this.v2,this.q1,this.v1.setScalar(t.s)),this.debris.setMatrixAt(e,this.m4)}this.debris.instanceMatrix.needsUpdate=!0,this.smoke&&(this.smoke.mat.uniforms.uAlpha.value=Ug((n-this.smokeT0)/1.5)*(.5-o.night*.34),this.smoke.update(n,l));for(let e of this.fires){let t=e.on?.78+.14*Math.sin(n*9.1+e.s*7)+.08*Math.sin(n*23.7):0;e.light.intensity=t*e.s*(.12+o.night*.95),e.glow.material.opacity=t*(.1+o.night*.4)}if(this.motes?.update(n,o.night,m*.75),this.birds?.update(n,m),this.petals?.update(n,t,m),this.aurora?.update(n,o.night),this.lanterns){let e=this.tiles.get(`heart`);e&&this.lanterns.position.set(e.x,e.mesh.position.y,e.z),this.lanterns.visible=!e||e.mesh.scale.x>.5;for(let{core:e,glow:t}of this.lanternCores)e.material.color.set(o.night>.3?a.life.lamp:`#efe3c2`),t.material.opacity=Ug((o.night-.2)/.5)*(.8+Math.sin(n*3+e.id)*.15)}for(let e of this.islets){e.a+=t*.025;let r=m+2.5*e.r;e.mesh.position.set(Math.cos(e.a)*r,e.y+Math.sin(n*.5+e.a*3)*.25,Math.sin(e.a)*r)}this.fx.update(n,l),this.composer.render(t),this.tunePerformance(t),this.onFrame()}},bC=new URLSearchParams(location.search),xC=Math.max(6,Math.min(120,Number(bC.get(`days`))||13)),SC=bC.has(`still`),CC=bC.has(`rec`),wC={grove:18.8,mars:16.5,moon:13,empire:17.7,frontier:20},TC=[`tower`,`windmill`,`lodge`,`garden`,`archery`,`market`,`treehouse`];function EC(e){let t=s(a(e),-xC),n=(e,n,r,i,a,o,s={})=>({id:e,name:n,emblem:r,c:i,kind:`do`,target:1,sched:{t:`daily`},effort:o,sig:a,from:t,...s}),r=[n(`meditate`,`Meditate`,`lotus`,0,`tree4`,2),n(`water`,`Drink water`,`drop`,1,`pond`,1,{kind:`count`,target:8,unit:`glasses`}),n(`move`,`Move`,`run`,2,`tree2`,3,{sched:{t:`week`,n:3}}),n(`read`,`Read`,`book`,3,`bench`,2,{kind:`count`,target:10,unit:`pages`}),n(`walk`,`Walk`,`steps`,4,`tree1`,2),n(`garden`,`Tend the garden`,`leaf`,5,`flowerbed`,1)],i=[],o=[],c=11,u=()=>(c=c*16807%2147483647)/2147483647,d=0,f=(e,t,n,r=1)=>i.push({id:`e`+d++,t:l(e,n),h:t,n:r}),p=e=>Math.round(e*(xC-1)/(TC.length-1)),m=new Set(TC.map((e,t)=>p(t)));for(let e=0;e<=xC;e++){let n=s(t,e),r=u();if(r<.06&&e<xC&&!m.has(e))continue;let i=r<.2?.5:.93;u()<i&&f(n,`meditate`,450);let a=u()<i?8:3+Math.floor(u()*4);for(let e=0;e<a;e++)f(n,`water`,480+e*80);u()<.5&&f(n,`move`,1050),u()<i?f(n,`read`,1290,10):f(n,`read`,1290,4),u()<i&&f(n,`walk`,780),u()<i&&f(n,`garden`,1e3);for(let e=0;e<Math.floor(u()*2.4);e++)o.push({t:l(n,600+e*120),secs:180})}let h=TC.map((n,r)=>({k:s(t,p(r)),id:n,lvl:1+r%3,t0:0,t1:0,c:e}));return{tracked:{settings:{startKey:t},habits:r,entries:i,breaths:o,ledger:{},confirmed:{}},plots:h}}var DC=new Map,OC=new Map;function kC(e){let{tracked:t,plots:n}=EC(e),r=O(t,e);for(let e of t.habits)OC.set(e.id,e.name);let i=[{key:`heart`,idx:0,kind:`heart`,level:8}];for(let e of r.days){let t=n.find(t=>t.k===e.key);DC.set(e.key,{day:e.index+1,done:e.doneCount,due:e.dueCount,marks:e.marks,breaths:e.breaths,landmark:t?t.id:null}),i.push({key:e.key,idx:e.index+1,kind:`day`,level:0,age:12,marks:e.marks,full:e.full,flowers:e.breaths,landmark:t?t.id:null,lvl:t?.lvl,crop:t?.id===`garden`?{id:`pumpkin`,stage:3}:null})}return{specs:i,level:8}}var AC=document.getElementById(`world`),jC=document.getElementById(`poster`),MC=document.getElementById(`worlds`),NC=document.getElementById(`info`),PC=document.getElementById(`hint`),FC=e=>new URL(`../media/poster-${e}.webp`,location.href).href,IC=bC.get(`layout`)===`page`;document.documentElement.classList.toggle(`page`,IC);var LC=bC.get(`theme`),RC=np(LC)?LC:`grove`;jC.src=FC(RC),sp(RC),document.documentElement.dataset.theme=RC;function zC(){try{let e=document.createElement(`canvas`);return!!(e.getContext(`webgl2`)||e.getContext(`webgl`))}catch{return!1}}var BC=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function VC(e){if(e===`heart`)return`<h2>The heart tree</h2><p class="sub">The middle of every island</p><p>It starts as a seedling in the heart stone and grows with every level. At the last one it turns gold. The ${BC((Kh()[8]??`home`).toLowerCase())} beside it grows the same way.</p>`;let t=DC.get(e);if(!t)return null;let r=t.due?`Day ${t.day} \u00b7 ${t.done} of ${t.due} kept`:`Day ${t.day}`,i=t.landmark?n(t.landmark):null,a=t.marks.filter(e=>e.p===void 0),o=a.map(e=>`<li><i style="background:${wg(e.c)}"></i><b>${BC(OC.get(e.h)??`A habit`)}</b><span>${BC(e.mon?`Monument`:Cg(e.sig))}</span></li>`).join(``),s=a.length?`<ul>${o}</ul>`:i?``:`<p>Nothing was kept that day, so it is a quiet patch of meadow. Nothing was taken away.</p>`,c=i?`<p class="foot">${BC(i.blurb)} Bought with the coin these habits earned.</p>`:t.breaths?`<p class="foot">${t.breaths===1?`A wild flower for the breathing ride`:`Wild flowers for the breathing rides`} taken that day.</p>`:``;return`<h2>${BC(i?i.name:`Day ${t.day}`)}</h2><p class="sub">${i?r:t.due?`${t.done} of ${t.due} kept`:`A day of rest`}</p>${s}${c}`}async function HC(){if(!zC())return;await vp();let e=new yC(AC),{specs:t,level:n}=kC(Date.now()),r=matchMedia(`(pointer: fine)`).matches;if(e.controls.enableZoom=!1,AC.style.touchAction=`pan-y`,AC.classList.add(`grab`),!r){let t=Number(bC.get(`polar`))||1.02;e.controls.minPolarAngle=t,e.controls.maxPolarAngle=t}let i=matchMedia(`(prefers-reduced-motion: reduce)`).matches||SC;e.view={zoom:Number(bC.get(`zoom`))||(IC?1.1:1),spin:!i,warp:SC?40:0,snap:SC},e.controls.autoRotate=!i,e.controls.autoRotateSpeed=.5,e.camera.position.setFromSphericalCoords(40,Number(bC.get(`polar`))||1.02,Number(bC.get(`az`))||.6),e.forcedHour=wC[RC];let a=()=>innerWidth>=900,o=bC.has(`top`)?Number(bC.get(`top`)):.3,s=bC.get(`frame`)!==`0`,c=()=>IC&&a()?-.17*innerWidth:0,l=e.camera,u=l.setViewOffset.bind(l);l.setViewOffset=(e,t,n,r,i,a)=>u(e,t,n+c(),r,i,a);let d=()=>{s?IC?e.setInsets(a()?96:118,Math.round(innerHeight*(a()?.05:.47))):e.setInsets(Math.round(innerHeight*o),MC.hidden?12:70):e.setInsets(0,0)};d(),addEventListener(`resize`,d);let f=null,p=()=>{f&&(f=null,NC.hidden=!0,e.focus(null),e.controls.autoRotateSpeed=.5)},m=t=>{if(t===f)return p();let n=VC(t);n&&(f=t,NC.innerHTML=`<button type="button" aria-label="Back to the whole island">\u00d7</button>${n}`,NC.hidden=!1,NC.querySelector(`button`).addEventListener(`click`,p),e.focus(t),PC.hidden=!0)};e.onTileTap=m,addEventListener(`keydown`,e=>e.key===`Escape`&&p()),AC.addEventListener(`pointerdown`,()=>PC.hidden=!0,{once:!0});let h=r=>{if(r!==RC){p(),RC=r,sp(r),document.documentElement.dataset.theme=r,e.forcedHour=wC[r],e.retheme(),e.setWorld(t,[],null,n);for(let e of MC.querySelectorAll(`button`))e.setAttribute(`aria-pressed`,String(e.dataset.id===r))}};if(bC.get(`chips`)===`0`)MC.hidden=PC.hidden=!0;else for(let e of tp()){let t=document.createElement(`button`);t.type=`button`,t.dataset.id=e.id,t.textContent=e.name,t.setAttribute(`aria-pressed`,String(e.id===RC)),t.addEventListener(`click`,()=>h(e.id)),MC.append(t)}d(),e.setWorld(t,[],null,n),CC||e.start();let g=0;e.onFrame=()=>{++g===(SC?6:3)&&(document.body.classList.add(`live`),document.title=`READY`)},CC?(document.body.classList.add(`live`),document.title=`READY`):new IntersectionObserver(([t])=>t.isIntersecting?e.start():e.stop(),{threshold:.02}).observe(AC),window.__hero={world:e,show:h,select:m,close:p}}HC().catch(e=>{document.title=`ERR `+(e instanceof Error?e.message:String(e)),console.error(e)});
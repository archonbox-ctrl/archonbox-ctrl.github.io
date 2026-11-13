import{w as Tc,f as co,r as bi,h as Ac,i as bc,c as wc,j as Rc}from"./index-D-0IVuzq.js";const Aa="187",Cc=0,uo=1,Pc=2,Ui=1,Lc=2,Di=3,Kn=0,Ht=1,an=2,pi=0,Fi=1,ho=2,fo=3,po=4,xl=5,Zn=100,Dc=101,Nc=102,Ic=103,Uc=104,Fc=200,Cs=201,Oc=202,Bc=203,ba=204,wa=205,zc=206,Gc=207,Hc=208,Vc=209,kc=210,Wc=211,Xc=212,qc=213,Yc=214,Ps=0,Ls=1,Ds=2,zi=3,Ns=4,Is=5,Us=6,Fs=7,Ml=0,Zc=1,Jc=2,En=0,Sl=1,yl=2,El=3,Tl=4,Al=5,bl=6,Ra=7,wl=300,gi=301,Gi=302,Zr=303,Jr=304,Os=1e3,yn=1001,Bs=1002,wt=1003,Kc=1004,ji=1005,Gt=1006,Kr=1007,Un=1008,Wt=1009,Rl=1010,Cl=1011,Hi=1012,Ca=1013,hn=1014,on=1015,fn=1016,Pa=1017,La=1018,_i=1020,Pl=35902,Ll=35899,Dl=1021,Nl=1022,ln=1023,On=1026,Fn=1027,Il=1028,Da=1029,$n=1030,Na=1031,Ia=1033,br=33776,wr=33777,Rr=33778,Cr=33779,zs=35840,Gs=35841,Hs=35842,Vs=35843,ks=36196,Ws=37492,Xs=37496,qs=37488,Ys=37489,Nr=37490,Zs=37491,Js=37808,Ks=37809,$s=37810,Qs=37811,js=37812,ea=37813,ta=37814,na=37815,ia=37816,ra=37817,sa=37818,aa=37819,oa=37820,la=37821,ca=36492,ua=36494,ha=36495,fa=36283,da=36284,Ir=36285,pa=36286,$c=3200,ma=0,Qc=1,In="",Yt="srgb",Ur="srgb-linear",Fr="linear",ct="srgb",$r=7680,jc=519,eu=512,tu=513,nu=514,Ul=515,iu=516,ru=517,Fl=518,Ol=519,su=35044,mo="300 es",en=2e3,Vi=2001;function au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){const i=Or("canvas");return i.style.display="block",i}const go={};function _o(...i){const e="THREE."+i.shift();console.log(e,...i)}function Bl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=Bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pr(...i){const e=i.join(" ");e in go||(go[e]=!0,Be(...i))}function lu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const cu={[Ps]:Ps,[Ds]:Us,[Ns]:Ns,[zi]:Is,[Ls]:Ls,[Us]:Ds,[Fs]:Fs,[Is]:zi};class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,ga=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function hu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ua(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fu(i,e){if(e.constructor===Float32Array)return i;const t=Ua(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function du(i,e){if(e.constructor===Float32Array)return i;const t=Ua(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Za=class Za{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Za.prototype.isVector2=!0;let fe=Za;class Ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],m=n[r+3],f=s[a+0],h=s[a+1],_=s[a+2],E=s[a+3];if(m!==E||l!==f||c!==h||u!==_){let d=l*f+c*h+u*_+m*E;d<0&&(f=-f,h=-h,_=-_,E=-E,d=-d);let p=1-o;if(d<.9995){const M=Math.acos(d),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,m=m*p+E*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,m=m*p+E*o;const M=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=M,c*=M,u*=M,m*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],m=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*m+l*h-c*f,e[t+1]=l*_+u*f+c*m-o*h,e[t+2]=c*_+u*h+o*f-l*m,e[t+3]=u*_-o*m-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),m=o(s/2),f=l(n/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*m+c*h*_,this._y=c*h*m-f*u*_,this._z=c*u*_+f*h*m,this._w=c*u*m-f*h*_;break;case"YXZ":this._x=f*u*m+c*h*_,this._y=c*h*m-f*u*_,this._z=c*u*_-f*h*m,this._w=c*u*m+f*h*_;break;case"ZXY":this._x=f*u*m-c*h*_,this._y=c*h*m+f*u*_,this._z=c*u*_+f*h*m,this._w=c*u*m-f*h*_;break;case"ZYX":this._x=f*u*m-c*h*_,this._y=c*h*m+f*u*_,this._z=c*u*_-f*h*m,this._w=c*u*m+f*h*_;break;case"YZX":this._x=f*u*m+c*h*_,this._y=c*h*m+f*u*_,this._z=c*u*_-f*h*m,this._w=c*u*m-f*h*_;break;case"XZY":this._x=f*u*m-c*h*_,this._y=c*h*m-f*u*_,this._z=c*u*_+f*h*m,this._w=c*u*m+f*h*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],f=n+o+m;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>m){const h=2*Math.sqrt(1+n-o-m);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>m){const h=2*Math.sqrt(1+o-n-m);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+m-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ja=class Ja{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),m=2*(s*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-s*m,this.z=r+l*m+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ja.prototype.isVector3=!0;let O=Ja;const es=new O,vo=new Ei,Ka=class Ka{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],f=n[2],h=n[5],_=n[8],E=r[0],d=r[3],p=r[6],M=r[1],T=r[4],x=r[7],w=r[2],A=r[5],g=r[8];return s[0]=a*E+o*M+l*w,s[3]=a*d+o*T+l*A,s[6]=a*p+o*x+l*g,s[1]=c*E+u*M+m*w,s[4]=c*d+u*T+m*A,s[7]=c*p+u*x+m*g,s[2]=f*E+h*M+_*w,s[5]=f*d+h*T+_*A,s[8]=f*p+h*x+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*m+n*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=m*E,e[1]=(r*c-u*n)*E,e[2]=(o*n-r*a)*E,e[3]=f*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-o*t)*E,e[6]=h*E,e[7]=(n*l-c*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ts.makeScale(e,t)),this}rotate(e){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ka.prototype.isMatrix3=!0;let He=Ka;const ts=new He,xo=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mo=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){const i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?Fr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:xo,fromXYZ:Mo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:xo,fromXYZ:Mo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const tt=pu();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class mu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Or("canvas")),ei.width=e.width,ei.height=e.height;const r=ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gu=0;class Fa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ns(r[a].image)):s.push(ns(r[a]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let _u=0;const is=new O;class Ot extends jn{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=yn,r=yn,s=Gt,a=Un,o=ln,l=Wt,c=Ot.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=yi(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=wl;Ot.DEFAULT_ANISOTROPY=1;const $a=class $a{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],m=l[8],f=l[1],h=l[5],_=l[9],E=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(m-E)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(m+E)<.1&&Math.abs(_+d)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(h+1)/2,w=(p+1)/2,A=(u+f)/4,g=(m+E)/4,y=(_+d)/4;return T>x&&T>w?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=g/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=y/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=g/s,r=y/s),this.set(n,r,s,t),this}let M=Math.sqrt((d-_)*(d-_)+(m-E)*(m-E)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(d-_)/M,this.y=(m-E)/M,this.z=(f-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$a.prototype.isVector4=!0;let gt=$a;class vu extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Ot({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zl extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const kr=class kr{constructor(e,t,n,r,s,a,o,l,c,u,m,f,h,_,E,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,m,f,h,_,E,d)}set(e,t,n,r,s,a,o,l,c,u,m,f,h,_,E,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=m,p[14]=f,p[3]=h,p[7]=_,p[11]=E,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*m,_=o*u,E=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=h+_*c,t[5]=f-E*c,t[9]=-o*l,t[2]=E-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*m,_=c*u,E=c*m;t[0]=f+E*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=E+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*m,_=c*u,E=c*m;t[0]=f-E*o,t[4]=-a*m,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=E-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*m,_=o*u,E=o*m;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+E,t[1]=l*m,t[5]=E*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,E=o*c;t[0]=l*u,t[4]=E-f*m,t[8]=_*m+h,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*m+_,t[10]=f-E*m}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,E=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=f*m+E,t[5]=a*u,t[9]=h*m-_,t[2]=_*m-h,t[6]=o*u,t[10]=E*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mu,e,Su)}lookAt(e,t,n){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Rn.crossVectors(n,Vt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Rn.crossVectors(n,Vt)),Rn.normalize(),er.crossVectors(Vt,Rn),r[0]=Rn.x,r[4]=er.x,r[8]=Vt.x,r[1]=Rn.y,r[5]=er.y,r[9]=Vt.y,r[2]=Rn.z,r[6]=er.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],f=n[9],h=n[13],_=n[2],E=n[6],d=n[10],p=n[14],M=n[3],T=n[7],x=n[11],w=n[15],A=r[0],g=r[4],y=r[8],U=r[12],C=r[1],D=r[5],z=r[9],Z=r[13],L=r[2],X=r[6],B=r[10],F=r[14],Q=r[3],q=r[7],ee=r[11],ie=r[15];return s[0]=a*A+o*C+l*L+c*Q,s[4]=a*g+o*D+l*X+c*q,s[8]=a*y+o*z+l*B+c*ee,s[12]=a*U+o*Z+l*F+c*ie,s[1]=u*A+m*C+f*L+h*Q,s[5]=u*g+m*D+f*X+h*q,s[9]=u*y+m*z+f*B+h*ee,s[13]=u*U+m*Z+f*F+h*ie,s[2]=_*A+E*C+d*L+p*Q,s[6]=_*g+E*D+d*X+p*q,s[10]=_*y+E*z+d*B+p*ee,s[14]=_*U+E*Z+d*F+p*ie,s[3]=M*A+T*C+x*L+w*Q,s[7]=M*g+T*D+x*X+w*q,s[11]=M*y+T*z+x*B+w*ee,s[15]=M*U+T*Z+x*F+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],f=e[10],h=e[14],_=e[3],E=e[7],d=e[11],p=e[15],M=l*h-c*f,T=o*h-c*m,x=o*f-l*m,w=a*h-c*u,A=a*f-l*u,g=a*m-o*u;return t*(E*M-d*T+p*x)-n*(_*M-d*w+p*A)+r*(_*T-E*w+p*g)-s*(_*x-E*A+d*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],f=e[10],h=e[11],_=e[12],E=e[13],d=e[14],p=e[15],M=t*o-n*a,T=t*l-r*a,x=t*c-s*a,w=n*l-r*o,A=n*c-s*o,g=r*c-s*l,y=u*E-m*_,U=u*d-f*_,C=u*p-h*_,D=m*d-f*E,z=m*p-h*E,Z=f*p-h*d,L=M*Z-T*z+x*D+w*C-A*U+g*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/L;return e[0]=(o*Z-l*z+c*D)*X,e[1]=(r*z-n*Z-s*D)*X,e[2]=(E*g-d*A+p*w)*X,e[3]=(f*A-m*g-h*w)*X,e[4]=(l*C-a*Z-c*U)*X,e[5]=(t*Z-r*C+s*U)*X,e[6]=(d*x-_*g-p*T)*X,e[7]=(u*g-f*x+h*T)*X,e[8]=(a*z-o*C+c*y)*X,e[9]=(n*C-t*z-s*y)*X,e[10]=(_*A-E*x+p*M)*X,e[11]=(m*x-u*A-h*M)*X,e[12]=(o*U-a*D-l*y)*X,e[13]=(t*D-n*U+r*y)*X,e[14]=(E*T-_*w-d*M)*X,e[15]=(u*w-m*T+f*M)*X,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,m=o+o,f=s*c,h=s*u,_=s*m,E=a*u,d=a*m,p=o*m,M=l*c,T=l*u,x=l*m,w=n.x,A=n.y,g=n.z;return r[0]=(1-(E+p))*w,r[1]=(h+x)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(h-x)*A,r[5]=(1-(f+p))*A,r[6]=(d+M)*A,r[7]=0,r[8]=(_+T)*g,r[9]=(d-M)*g,r[10]=(1-(f+E))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),l=ti.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kt.copy(this);const c=1/a,u=1/o,m=1/l;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=m,Kt.elements[9]*=m,Kt.elements[10]*=m,t.setFromRotationMatrix(Kt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=en,l=!1){const c=this.elements,u=2*s/(t-e),m=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let _,E;if(l)_=s/(a-s),E=a*s/(a-s);else if(o===en)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Vi)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=en,l=!1){const c=this.elements,u=2/(t-e),m=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let _,E;if(l)_=1/(a-s),E=a/(a-s);else if(o===en)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===Vi)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};kr.prototype.isMatrix4=!0;let ut=kr;const ti=new O,Kt=new ut,Mu=new O(0,0,0),Su=new O(1,1,1),Rn=new O,er=new O,Vt=new O,So=new ut,yo=new Ei;class Bn{constructor(e=0,t=0,n=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],m=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return So.makeRotationFromQuaternion(e),this.setFromRotationMatrix(So,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yo.setFromEuler(this),this.setFromQuaternion(yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yu=0;const Eo=new O,ni=new Ei,mn=new ut,tr=new O,wi=new O,Eu=new O,Tu=new Ei,To=new O(1,0,0),Ao=new O(0,1,0),bo=new O(0,0,1),wo={type:"added"},Au={type:"removed"},ii={type:"childadded",child:null},rs={type:"childremoved",child:null};class Rt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new O,t=new Bn,n=new Ei,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new He}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(To,e)}rotateY(e){return this.rotateOnAxis(Ao,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return Eo.copy(e).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(To,e)}translateY(e){return this.translateOnAxis(Ao,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(wi,tr,this.up):mn.lookAt(tr,wi,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(mn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wo),ii.child=e,this.dispatchEvent(ii),ii.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Au),rs.child=e,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wo),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Eu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Tu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new O(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bu={type:"move"};class ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const d=t.getJointPose(E,n),p=this._getHandJoint(c,E);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=u.position.distanceTo(m.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function as(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=uu(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=as(a,s,e+1/3),this.g=as(a,s,e),this.b=as(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return tt.workingToColorSpace(Dt.copy(this),e),Math.round(Ke(Dt.r*255,0,255))*65536+Math.round(Ke(Dt.g*255,0,255))*256+Math.round(Ke(Dt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-n)/m+2;break;case s:l=(n-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Yt){tt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,r=Dt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(nr);const n=jr(Cn.h,nr.h,t),r=jr(Cn.s,nr.s,t),s=jr(Cn.l,nr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new $e;$e.NAMES=Hl;class wu extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new O,gn=new O,os=new O,_n=new O,ri=new O,si=new O,Ro=new O,ls=new O,cs=new O,us=new O,hs=new gt,fs=new gt,ds=new gt;class jt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),gn.subVectors(n,t),os.subVectors(e,t);const a=$t.dot($t),o=$t.dot(gn),l=$t.dot(os),c=gn.dot(gn),u=gn.dot(os),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const f=1/m,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return hs.setScalar(0),fs.setScalar(0),ds.setScalar(0),hs.fromBufferAttribute(e,t),fs.fromBufferAttribute(e,n),ds.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hs,s.x),a.addScaledVector(fs,s.y),a.addScaledVector(ds,s.z),a}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),gn.subVectors(e,t),$t.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),$t.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ri.subVectors(r,n),si.subVectors(s,n),ls.subVectors(e,n);const l=ri.dot(ls),c=si.dot(ls);if(l<=0&&c<=0)return t.copy(n);cs.subVectors(e,r);const u=ri.dot(cs),m=si.dot(cs);if(u>=0&&m<=u)return t.copy(r);const f=l*m-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(ri,a);us.subVectors(e,s);const h=ri.dot(us),_=si.dot(us);if(_>=0&&h<=_)return t.copy(s);const E=h*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(si,o);const d=u*_-h*m;if(d<=0&&m-u>=0&&h-_>=0)return Ro.subVectors(s,r),o=(m-u)/(m-u+(h-_)),t.copy(r).addScaledVector(Ro,o);const p=1/(d+E+f);return a=E*p,o=f*p,t.copy(n).addScaledVector(ri,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),rr.subVectors(this.max,Ri),ai.subVectors(e.a,Ri),oi.subVectors(e.b,Ri),li.subVectors(e.c,Ri),Pn.subVectors(oi,ai),Ln.subVectors(li,oi),kn.subVectors(ai,li);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-kn.z,kn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,kn.z,0,-kn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-kn.y,kn.x,0];return!ps(t,ai,oi,li,rr)||(t=[1,0,0,0,1,0,0,0,1],!ps(t,ai,oi,li,rr))?!1:(sr.crossVectors(Pn,Ln),t=[sr.x,sr.y,sr.z],ps(t,ai,oi,li,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new O,new O,new O,new O,new O,new O,new O,new O],Qt=new O,ir=new Yi,ai=new O,oi=new O,li=new O,Pn=new O,Ln=new O,kn=new O,Ri=new O,rr=new O,sr=new O,Wn=new O;function ps(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wn.fromArray(i,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Mt=new O,ar=new fe;let Ru=0;class Jn extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ru++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=e!==void 0?Ua(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):fu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):du(e,this.array)}}class Vl extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kl extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Cu=new Yi,Ci=new O,ms=new O;class Oa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(ms)),this.expandByPoint(Ci.copy(e.center).sub(ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Pu=0;const Xt=new ut,gs=new Rt,ci=new O,kt=new Yi,Pi=new Yi,At=new O;class It extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(au(e)?kl:Vl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return gs.lookAt(e),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(kt.min,Pi.min),kt.expandByPoint(At),At.addVectors(kt.max,Pi.max),kt.expandByPoint(At)):(kt.expandByPoint(Pi.min),kt.expandByPoint(Pi.max))}kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),At.add(ci)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;const u=new O,m=new O,f=new O,h=new fe,_=new fe,E=new fe,d=new O,p=new O;function M(U,C,D){c[U]=c[C]=c[D]=1,u.fromBufferAttribute(n,U),m.fromBufferAttribute(n,C),f.fromBufferAttribute(n,D),h.fromBufferAttribute(s,U),_.fromBufferAttribute(s,C),E.fromBufferAttribute(s,D),m.sub(u),f.sub(u),_.sub(h),E.sub(h);const z=1/(_.x*E.y-E.x*_.y);isFinite(z)&&(d.copy(m).multiplyScalar(E.y).addScaledVector(f,-_.y).multiplyScalar(z),p.copy(f).multiplyScalar(_.x).addScaledVector(m,-E.x).multiplyScalar(z),o[U].add(d),o[C].add(d),o[D].add(d),l[U].add(p),l[C].add(p),l[D].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,C=T.length;U<C;++U){const D=T[U],z=D.start,Z=D.count;for(let L=z,X=z+Z;L<X;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new O,w=new O,A=new O,g=new O;function y(U){A.fromBufferAttribute(r,U),g.copy(A);const C=o[U];x.copy(C),x.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(g,C);const z=w.dot(l[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,z)}for(let U=0,C=n.count;U<C;++U)c[U]&&y(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,m=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),E=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,d),u.subVectors(a,s),m.subVectors(r,s),u.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),m.subVectors(r,s),u.cross(m),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,m=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let E=0,d=l.length;E<d;E++){o.isInterleavedBufferAttribute?h=l[E]*o.data.stride+o.offset:h=l[E]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new Jn(f,u,m)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,m=c.length;u<m;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let m=0,f=c.length;m<f;m++){const h=c[m];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],m=s[c];for(let f=0,h=m.length;f<h;f++)u.push(m[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _s=new O,Lu=new O,Du=new He;class Nn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_s.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(_s),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Du.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Nu=0;class Zi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Fi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=wa,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xn=new O,vs=new O,or=new O,lr=new O;class Iu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vs.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(vs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=lr.dot(this.direction),l=-lr.dot(or),c=lr.lengthSq(),u=Math.abs(1-a*a);let m,f,h,_;if(u>0)if(m=a*l-o,f=a*o-l,_=s*u,m>=0)if(f>=-_)if(f<=_){const E=1/u;m*=E,f*=E,h=m*(m+a*f+2*o)+f*(a*m+f+2*l)+c}else f=s,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f=-s,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f<=-_?(m=Math.max(0,-(-a*s+o)),f=m>0?-s:Math.min(Math.max(-s,-l),s),h=-m*m+f*(f+2*l)+c):f<=_?(m=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(m=Math.max(0,-(a*s+o)),f=m>0?s:Math.min(Math.max(-s,-l),s),h=-m*m+f*(f+2*l)+c);else f=a>0?-s:s,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(vs).addScaledVector(or,f),h}intersectSphere(e,t){if(e.radius<0)return null;xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=e.x-a.x,f=e.y-a.y,h=e.z-a.z,_=t.x-a.x,E=t.y-a.y,d=t.z-a.z,p=n.x-a.x,M=n.y-a.y,T=n.z-a.z,x=Math.abs(l),w=Math.abs(c),A=Math.abs(u);let g,y,U,C,D,z,Z,L,X,B,F,Q;if(x>=w&&x>=A?(U=l,z=m,X=_,Q=p,l>=0?(g=c,y=u,C=f,D=h,Z=E,L=d,B=M,F=T):(g=u,y=c,C=h,D=f,Z=d,L=E,B=T,F=M)):w>=A?(U=c,z=f,X=E,Q=M,c>=0?(g=u,y=l,C=h,D=m,Z=d,L=_,B=T,F=p):(g=l,y=u,C=m,D=h,Z=_,L=d,B=p,F=T)):(U=u,z=h,X=d,Q=T,u>=0?(g=l,y=c,C=m,D=f,Z=_,L=E,B=p,F=M):(g=c,y=l,C=f,D=m,Z=E,L=_,B=M,F=p)),U===0)return null;const q=g/U,ee=y/U,ie=1/U,Te=C-q*z,Ie=D-ee*z,j=Z-q*X,ve=L-ee*X,Ee=B-q*Q,Ne=F-ee*Q,pe=Ee*ve-Ne*j,Pe=Te*Ne-Ie*Ee,st=j*Ie-ve*Te;if(r){if(pe<0||Pe<0||st<0)return null}else if((pe<0||Pe<0||st<0)&&(pe>0||Pe>0||st>0))return null;const Ue=pe+Pe+st;if(Ue===0)return null;const We=ie*(pe*z+Pe*X+st*Q);return(Ue>0?We<0:We>0)?null:this.at(We/Ue,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _a extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Co=new ut,Xn=new Iu,cr=new Oa,Po=new O,ur=new O,hr=new O,fr=new O,xs=new O,dr=new O,Lo=new O,pr=new O;class An extends Rt{constructor(e=new It,t=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){dr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],m=s[l];u!==0&&(xs.fromBufferAttribute(m,e),a?dr.addScaledVector(xs,u):dr.addScaledVector(xs.sub(t),u))}t.add(dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(cr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(cr,Po)===null||Xn.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Co.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Co),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,m=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const d=f[_],p=a[d.materialIndex],M=Math.max(d.start,h.start),T=Math.min(o.count,Math.min(d.start+d.count,h.start+h.count));for(let x=M,w=T;x<w;x+=3){const A=o.getX(x),g=o.getX(x+1),y=o.getX(x+2);r=mr(this,p,e,n,c,u,m,A,g,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let d=_,p=E;d<p;d+=3){const M=o.getX(d),T=o.getX(d+1),x=o.getX(d+2);r=mr(this,a,e,n,c,u,m,M,T,x),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const d=f[_],p=a[d.materialIndex],M=Math.max(d.start,h.start),T=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let x=M,w=T;x<w;x+=3){const A=x,g=x+1,y=x+2;r=mr(this,p,e,n,c,u,m,A,g,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let d=_,p=E;d<p;d+=3){const M=d,T=d+1,x=d+2;r=mr(this,a,e,n,c,u,m,M,T,x),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Uu(i,e,t,n,r,s,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Kn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ur),i.getVertexPosition(l,hr),i.getVertexPosition(c,fr);const u=Uu(i,e,t,n,ur,hr,fr,Lo);if(u){const m=new O;jt.getBarycoord(Lo,ur,hr,fr,m),r&&(u.uv=jt.getInterpolatedAttribute(r,o,l,c,m,new fe)),s&&(u.uv1=jt.getInterpolatedAttribute(s,o,l,c,m,new fe)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,l,c,m,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};jt.getNormal(ur,hr,fr,f.normal),u.face=f,u.barycoord=m}return u}class Fu extends Ot{constructor(e=null,t=1,n=1,r,s,a,o,l,c=wt,u=wt,m,f){super(null,a,o,l,c,u,r,s,m,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qn=new Oa,Ou=new fe(.5,.5),gr=new O;class ki{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],m=s[5],f=s[6],h=s[7],_=s[8],E=s[9],d=s[10],p=s[11],M=s[12],T=s[13],x=s[14],w=s[15];if(r[0].setComponents(c-a,h-u,p-_,w-M).normalize(),r[1].setComponents(c+a,h+u,p+_,w+M).normalize(),r[2].setComponents(c+o,h+m,p+E,w+T).normalize(),r[3].setComponents(c-o,h-m,p-E,w-T).normalize(),n)r[4].setComponents(l,f,d,x).normalize(),r[5].setComponents(c-l,h-f,p-d,w-x).normalize();else if(r[4].setComponents(c-l,h-f,p-d,w-x).normalize(),t===en)r[5].setComponents(c+l,h+f,p+d,w+x).normalize();else if(t===Vi)r[5].setComponents(l,f,d,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);const t=Ou.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(gr.x=r.normal.x>0?e.max.x:e.min.x,gr.y=r.normal.y>0?e.max.y:e.min.y,gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Do=new ut;class Ba{constructor(){this.coordinateSystem=en,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Do.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new ki),n[r].setFromProjectionMatrix(Do,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ki),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Ba().copy(this)}}class Wl extends Ot{constructor(e=[],t=gi,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vi extends Ot{constructor(e,t,n=hn,r,s,a,o=wt,l=wt,c,u=On,m=1){if(u!==On&&u!==Fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:m};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xl extends vi{constructor(e,t=hn,n=gi,r,s,a=wt,o=wt,l,c=On){const u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ql extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ji extends It{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],m=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(m,2));function _(E,d,p,M,T,x,w,A,g,y,U){const C=x/g,D=w/y,z=x/2,Z=w/2,L=A/2,X=g+1,B=y+1;let F=0,Q=0;const q=new O;for(let ee=0;ee<B;ee++){const ie=ee*D-Z;for(let Te=0;Te<X;Te++){const Ie=Te*C-z;q[E]=Ie*M,q[d]=ie*T,q[p]=L,c.push(q.x,q.y,q.z),q[E]=0,q[d]=0,q[p]=A>0?1:-1,u.push(q.x,q.y,q.z),m.push(Te/g),m.push(1-ee/y),F+=1}}for(let ee=0;ee<y;ee++)for(let ie=0;ie<g;ie++){const Te=f+ie+X*ee,Ie=f+ie+X*(ee+1),j=f+(ie+1)+X*(ee+1),ve=f+(ie+1)+X*ee;l.push(Te,Ie,ve),l.push(Ie,j,ve),Q+=6}o.addGroup(h,Q,U),h+=Q,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Br extends It{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new O,u=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,f=3;m<=t;m++,f+=3){const h=n+m/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let m=1;m<=t;m++)s.push(m,m+1,0);this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zt extends It{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],m=[],f=[],h=[];let _=0;const E=[],d=n/2;let p=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(h,2));function M(){const x=new O,w=new O;let A=0;const g=(t-e)/n;for(let y=0;y<=s;y++){const U=[],C=y/s,D=C*(t-e)+e;for(let z=0;z<=r;z++){const Z=z/r,L=Z*l+o,X=Math.sin(L),B=Math.cos(L);w.x=D*X,w.y=-C*n+d,w.z=D*B,m.push(w.x,w.y,w.z),x.set(X,g,B).normalize(),f.push(x.x,x.y,x.z),h.push(Z,1-C),U.push(_++)}E.push(U)}for(let y=0;y<r;y++)for(let U=0;U<s;U++){const C=E[U][y],D=E[U+1][y],z=E[U+1][y+1],Z=E[U][y+1];(e>0||U!==0)&&(u.push(C,D,Z),A+=3),(t>0||U!==s-1)&&(u.push(D,z,Z),A+=3)}c.addGroup(p,A,0),p+=A}function T(x){const w=_,A=new fe,g=new O;let y=0;const U=x===!0?e:t,C=x===!0?1:-1;for(let z=1;z<=r;z++)m.push(0,d*C,0),f.push(0,C,0),h.push(.5,.5),_++;const D=_;for(let z=0;z<=r;z++){const L=z/r*l+o,X=Math.cos(L),B=Math.sin(L);g.x=U*B,g.y=d*C,g.z=U*X,m.push(g.x,g.y,g.z),f.push(0,C,0),A.x=X*.5+.5,A.y=B*.5*C+.5,h.push(A.x,A.y),_++}for(let z=0;z<r;z++){const Z=w+z,L=D+z;x===!0?u.push(L,L+1,Z):u.push(L+1,L,Z),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends It{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new O,x=new O,w=new O;for(let A=0;A<t.length;A+=3)h(t[A+0],T),h(t[A+1],x),h(t[A+2],w),l(T,x,w,M)}function l(M,T,x,w){const A=w+1,g=[];for(let y=0;y<=A;y++){g[y]=[];const U=M.clone().lerp(x,y/A),C=T.clone().lerp(x,y/A),D=A-y;for(let z=0;z<=D;z++)z===0&&y===A?g[y][z]=U:g[y][z]=U.clone().lerp(C,z/D)}for(let y=0;y<A;y++)for(let U=0;U<2*(A-y)-1;U++){const C=Math.floor(U/2);U%2===0?(f(g[y][C+1]),f(g[y+1][C]),f(g[y][C])):(f(g[y][C+1]),f(g[y+1][C+1]),f(g[y+1][C]))}}function c(M){const T=new O;for(let x=0;x<s.length;x+=3)T.x=s[x+0],T.y=s[x+1],T.z=s[x+2],T.normalize().multiplyScalar(M),s[x+0]=T.x,s[x+1]=T.y,s[x+2]=T.z}function u(){const M=new O;for(let T=0;T<s.length;T+=3){M.x=s[T+0],M.y=s[T+1],M.z=s[T+2];const x=d(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(x,1-w)}_(),m()}function m(){for(let M=0;M<a.length;M+=6){const T=a[M+0],x=a[M+2],w=a[M+4],A=Math.max(T,x,w),g=Math.min(T,x,w);A>.9&&g<.1&&(T<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function h(M,T){const x=M*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function _(){const M=new O,T=new O,x=new O,w=new O,A=new fe,g=new fe,y=new fe;for(let U=0,C=0;U<s.length;U+=9,C+=6){M.set(s[U+0],s[U+1],s[U+2]),T.set(s[U+3],s[U+4],s[U+5]),x.set(s[U+6],s[U+7],s[U+8]),A.set(a[C+0],a[C+1]),g.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),w.copy(M).add(T).add(x).divideScalar(3);const D=d(w);E(A,C+0,M,D),E(g,C+2,T,D),E(y,C+4,x,D)}}function E(M,T,x,w){w<0&&M.x===1&&(a[T]=M.x-1),x.x===0&&x.z===0&&(a[T]=w/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.vertices,e.indices,e.radius,e.detail)}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,h=(a-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new fe:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,r=[],s=[],a=[],o=new O,l=new ut;for(let h=0;h<=e;h++){const _=h/e;r[h]=this.getTangentAt(_,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),m=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ke(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ke(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],h*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ga extends dn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*m+this.aX,c=f*m+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bu extends Ga{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ha(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,m){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+m)+(l-o)/m;f*=u,h*=u,r(a,o,f,h)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const No=new O,Io=new O,Ms=new Ha,Ss=new Ha,ys=new Ha;class zu extends dn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Io.subVectors(r[0],r[1]).add(r[0]),c=Io);const m=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(No.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=No),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(m),h),E=Math.pow(m.distanceToSquared(f),h),d=Math.pow(f.distanceToSquared(u),h);E<1e-4&&(E=1),_<1e-4&&(_=E),d<1e-4&&(d=E),Ms.initNonuniformCatmullRom(c.x,m.x,f.x,u.x,_,E,d),Ss.initNonuniformCatmullRom(c.y,m.y,f.y,u.y,_,E,d),ys.initNonuniformCatmullRom(c.z,m.z,f.z,u.z,_,E,d)}else this.curveType==="catmullrom"&&(Ms.initCatmullRom(c.x,m.x,f.x,u.x,this.tension),Ss.initCatmullRom(c.y,m.y,f.y,u.y,this.tension),ys.initCatmullRom(c.z,m.z,f.z,u.z,this.tension));return n.set(Ms.calc(l),Ss.calc(l),ys.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Gu(i,e){const t=1-i;return t*t*e}function Hu(i,e){return 2*(1-i)*i*e}function Vu(i,e){return i*i*e}function Oi(i,e,t,n){return Gu(i,e)+Hu(i,t)+Vu(i,n)}function ku(i,e){const t=1-i;return t*t*t*e}function Wu(i,e){const t=1-i;return 3*t*t*i*e}function Xu(i,e){return 3*(1-i)*i*i*e}function qu(i,e){return i*i*i*e}function Bi(i,e,t,n,r){return ku(i,e)+Wu(i,t)+Xu(i,n)+qu(i,r)}class Yl extends dn{constructor(e=new fe,t=new fe,n=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new fe){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Bi(e,r.x,s.x,a.x,o.x),Bi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yu extends dn{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Bi(e,r.x,s.x,a.x,o.x),Bi(e,r.y,s.y,a.y,o.y),Bi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zl extends dn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zu extends dn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jl extends dn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Oi(e,r.x,s.x,a.x),Oi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends dn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Oi(e,r.x,s.x,a.x),Oi(e,r.y,s.y,a.y),Oi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kl extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],m=r[a>r.length-3?r.length-1:a+2];return n.set(Uo(o,l.x,c.x,u.x,m.x),Uo(o,l.y,c.y,u.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var va=Object.freeze({__proto__:null,ArcCurve:Bu,CatmullRomCurve3:zu,CubicBezierCurve:Yl,CubicBezierCurve3:Yu,EllipseCurve:Ga,LineCurve:Zl,LineCurve3:Zu,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:Ju,SplineCurve:Kl});class Ku extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new va[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class xa extends Ku{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zl(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Jl(this.currentPoint.clone(),new fe(e,t),new fe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Yl(this.currentPoint.clone(),new fe(e,t),new fe(n,r),new fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Kl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Ga(e,t,n,r,s,a,o,l);if(this.curves.length>0){const m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Va extends xa{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new xa().fromJSON(r))}return this}}function $u(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=$l(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=nh(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let u=o,m=l;for(let f=t;f<r;f+=t){const h=i[f],_=i[f+1];h<o&&(o=h),_<l&&(l=_),h>u&&(u=h),_>m&&(m=_)}c=Math.max(u-o,m-l),c=c!==0?32767/c:0}return Wi(s,a,t,o,l,c,0),a}function $l(i,e,t,n,r){let s;if(r===dh(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Fo(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Fo(a/n|0,i[a],i[a+1],s);return s&&xi(s,s.next)&&(qi(s),s=s.next),s}function Qn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xi(t,t.next)||_t(t.prev,t,t.next)===0)){if(qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&oh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?ju(i,n,r,s):Qu(i)){e.push(l.i,i.i,c.i),qi(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=eh(Qn(i),e),Wi(i,e,t,n,r,s,2)):a===2&&th(i,e,t,n,r,s):Wi(Qn(i),e,t,n,r,s,1);break}}}function Qu(i){const e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),m=Math.min(o,l,c),f=Math.max(r,s,a),h=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=m&&_.y<=h&&Ni(r,o,s,l,a,c,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ju(i,e,t,n){const r=i.prev,s=i,a=i.next;if(_t(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,m=s.y,f=a.y,h=Math.min(o,l,c),_=Math.min(u,m,f),E=Math.max(o,l,c),d=Math.max(u,m,f),p=Ma(h,_,e,t,n),M=Ma(E,d,e,t,n);let T=i.prevZ,x=i.nextZ;for(;T&&T.z>=p&&x&&x.z<=M;){if(T.x>=h&&T.x<=E&&T.y>=_&&T.y<=d&&T!==r&&T!==a&&Ni(o,u,l,m,c,f,T.x,T.y)&&_t(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=h&&x.x<=E&&x.y>=_&&x.y<=d&&x!==r&&x!==a&&Ni(o,u,l,m,c,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=p;){if(T.x>=h&&T.x<=E&&T.y>=_&&T.y<=d&&T!==r&&T!==a&&Ni(o,u,l,m,c,f,T.x,T.y)&&_t(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=M;){if(x.x>=h&&x.x<=E&&x.y>=_&&x.y<=d&&x!==r&&x!==a&&Ni(o,u,l,m,c,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function eh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!xi(n,r)&&jl(n,t,t.next,r)&&Xi(n,r)&&Xi(r,n)&&(e.push(n.i,t.i,r.i),qi(t),qi(t.next),t=i=r),t=t.next}while(t!==i);return Qn(t)}function th(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&uh(a,o)){let l=ec(a,o);a=Qn(a,a.next),l=Qn(l,l.next),Wi(a,e,t,n,r,s,0),Wi(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function nh(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=$l(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(ch(c))}r.sort(ih);for(let s=0;s<r.length;s++)t=rh(r[s],t);return t}function ih(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function rh(i,e){const t=sh(i,e);if(!t)return e;const n=ec(t,i);return Qn(n,n.next),Qn(t,t.next)}function sh(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(xi(i,t))return t;do{if(xi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const m=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>s&&(s=m,a=t.x<t.next.x?t:t.next,m===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ql(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const m=Math.abs(r-t.y)/(n-t.x);Xi(t,i)&&(m<u||m===u&&(t.x>a.x||t.x===a.x&&ah(a,t)))&&(a=t,u=m)}t=t.next}while(t!==o);return a}function ah(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function oh(i,e,t,n){let r=i;do r.z===0&&(r.z=Ma(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,lh(r)}function lh(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Ma(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ch(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ql(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ni(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Ql(i,e,t,n,r,s,a,o)}function uh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hh(i,e)&&(Xi(i,e)&&Xi(e,i)&&fh(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||xi(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xi(i,e){return i.x===e.x&&i.y===e.y}function jl(i,e,t,n){const r=vr(_t(i,e,t)),s=vr(_t(i,e,n)),a=vr(_t(t,n,i)),o=vr(_t(t,n,e));return!!(r!==s&&a!==o||r===0&&_r(i,t,e)||s===0&&_r(i,n,e)||a===0&&_r(t,i,n)||o===0&&_r(t,e,n))}function _r(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vr(i){return i>0?1:i<0?-1:0}function hh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xi(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function fh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ec(i,e){const t=Sa(i.i,i.x,i.y),n=Sa(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Fo(i,e,t,n){const r=Sa(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dh(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class ph{static triangulate(e,t,n=2){return $u(e,t,n)}}class cn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return cn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Oo(e),Bo(n,e);let a=e.length;t.forEach(Oo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Bo(n,t[l]);const o=ph.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Oo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ka extends It{constructor(e=new Va([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new it(r,3)),this.setAttribute("uv",new it(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:h-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:mh;let T,x=!1,w,A,g,y;if(p){T=p.getSpacedPoints(u),x=!0,f=!1;const ne=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,ne),A=new O,g=new O,y=new O}f||(d=0,h=0,_=0,E=0);const U=o.extractPoints(c);let C=U.shape;const D=U.holes;if(!cn.isClockWise(C)){C=C.reverse();for(let ne=0,he=D.length;ne<he;ne++){const ue=D[ne];cn.isClockWise(ue)&&(D[ne]=ue.reverse())}}function Z(ne){const ue=10000000000000001e-36;let ye=ne[0];for(let me=1;me<=ne.length;me++){const Ge=me%ne.length,Re=ne[Ge],qe=Re.x-ye.x,Je=Re.y-ye.y,et=qe*qe+Je*Je,I=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(ye.x),Math.abs(ye.y)),pt=ue*I*I;if(et<=pt){ne.splice(Ge,1),me--;continue}ye=Re}}Z(C),D.forEach(Z);const L=D.length,X=C;for(let ne=0;ne<L;ne++){const he=D[ne];C=C.concat(he)}function B(ne,he,ue){return he||rt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(he,ue)}const F=C.length;function Q(ne,he,ue){let ye,me,Ge;const Re=ne.x-he.x,qe=ne.y-he.y,Je=ue.x-ne.x,et=ue.y-ne.y,I=Re*Re+qe*qe,pt=Re*et-qe*Je;if(Math.abs(pt)>Number.EPSILON){const Xe=Math.sqrt(I),ot=Math.sqrt(Je*Je+et*et),de=he.x-qe/Xe,dt=he.y+Re/Xe,Fe=ue.x-et/ot,Oe=ue.y+Je/ot,b=((Fe-de)*et-(Oe-dt)*Je)/(Re*et-qe*Je);ye=de+Re*b-ne.x,me=dt+qe*b-ne.y;const v=ye*ye+me*me;if(v<=2)return new fe(ye,me);Ge=Math.sqrt(v/2)}else{let Xe=!1;Re>Number.EPSILON?Je>Number.EPSILON&&(Xe=!0):Re<-Number.EPSILON?Je<-Number.EPSILON&&(Xe=!0):Math.sign(qe)===Math.sign(et)&&(Xe=!0),Xe?(ye=-qe,me=Re,Ge=Math.sqrt(I)):(ye=Re,me=qe,Ge=Math.sqrt(I/2))}return new fe(ye/Ge,me/Ge)}const q=[];for(let ne=0,he=X.length,ue=he-1,ye=ne+1;ne<he;ne++,ue++,ye++)ue===he&&(ue=0),ye===he&&(ye=0),q[ne]=Q(X[ne],X[ue],X[ye]);const ee=[];let ie,Te=q.concat();for(let ne=0,he=L;ne<he;ne++){const ue=D[ne];ie=[];for(let ye=0,me=ue.length,Ge=me-1,Re=ye+1;ye<me;ye++,Ge++,Re++)Ge===me&&(Ge=0),Re===me&&(Re=0),ie[ye]=Q(ue[ye],ue[Ge],ue[Re]);ee.push(ie),Te=Te.concat(ie)}let Ie;if(d===0)Ie=cn.triangulateShape(X,D);else{const ne=[],he=[];for(let ue=0;ue<d;ue++){const ye=ue/d,me=h*Math.cos(ye*Math.PI/2),Ge=_*Math.sin(ye*Math.PI/2)+E;for(let Re=0,qe=X.length;Re<qe;Re++){const Je=B(X[Re],q[Re],Ge);Pe(Je.x,Je.y,-me),ye===0&&ne.push(Je)}for(let Re=0,qe=L;Re<qe;Re++){const Je=D[Re];ie=ee[Re];const et=[];for(let I=0,pt=Je.length;I<pt;I++){const Xe=B(Je[I],ie[I],Ge);Pe(Xe.x,Xe.y,-me),ye===0&&et.push(Xe)}ye===0&&he.push(et)}}Ie=cn.triangulateShape(ne,he)}const j=Ie.length,ve=_+E;for(let ne=0;ne<F;ne++){const he=f?B(C[ne],Te[ne],ve):C[ne];x?(g.copy(w.normals[0]).multiplyScalar(he.x),A.copy(w.binormals[0]).multiplyScalar(he.y),y.copy(T[0]).add(g).add(A),Pe(y.x,y.y,y.z)):Pe(he.x,he.y,0)}for(let ne=1;ne<=u;ne++)for(let he=0;he<F;he++){const ue=f?B(C[he],Te[he],ve):C[he];x?(g.copy(w.normals[ne]).multiplyScalar(ue.x),A.copy(w.binormals[ne]).multiplyScalar(ue.y),y.copy(T[ne]).add(g).add(A),Pe(y.x,y.y,y.z)):Pe(ue.x,ue.y,m/u*ne)}for(let ne=d-1;ne>=0;ne--){const he=ne/d,ue=h*Math.cos(he*Math.PI/2),ye=_*Math.sin(he*Math.PI/2)+E;for(let me=0,Ge=X.length;me<Ge;me++){const Re=B(X[me],q[me],ye);Pe(Re.x,Re.y,m+ue)}for(let me=0,Ge=D.length;me<Ge;me++){const Re=D[me];ie=ee[me];for(let qe=0,Je=Re.length;qe<Je;qe++){const et=B(Re[qe],ie[qe],ye);x?Pe(et.x,et.y+T[u-1].y,T[u-1].x+ue):Pe(et.x,et.y,m+ue)}}}Ee(),Ne();function Ee(){const ne=r.length/3;if(f){let he=0,ue=F*he;for(let ye=0;ye<j;ye++){const me=Ie[ye];st(me[2]+ue,me[1]+ue,me[0]+ue)}he=u+d*2,ue=F*he;for(let ye=0;ye<j;ye++){const me=Ie[ye];st(me[0]+ue,me[1]+ue,me[2]+ue)}}else{for(let he=0;he<j;he++){const ue=Ie[he];st(ue[2],ue[1],ue[0])}for(let he=0;he<j;he++){const ue=Ie[he];st(ue[0]+F*u,ue[1]+F*u,ue[2]+F*u)}}n.addGroup(ne,r.length/3-ne,0)}function Ne(){const ne=r.length/3;let he=0;pe(X,he),he+=X.length;for(let ue=0,ye=D.length;ue<ye;ue++){const me=D[ue];pe(me,he),he+=me.length}n.addGroup(ne,r.length/3-ne,1)}function pe(ne,he){let ue=ne.length;for(;--ue>=0;){const ye=ue;let me=ue-1;me<0&&(me=ne.length-1);for(let Ge=0,Re=u+d*2;Ge<Re;Ge++){const qe=F*Ge,Je=F*(Ge+1),et=he+ye+qe,I=he+me+qe,pt=he+me+Je,Xe=he+ye+Je;Ue(et,I,pt,Xe)}}}function Pe(ne,he,ue){l.push(ne),l.push(he),l.push(ue)}function st(ne,he,ue){We(ne),We(he),We(ue);const ye=r.length/3,me=M.generateTopUV(n,r,ye-3,ye-2,ye-1);Ze(me[0]),Ze(me[1]),Ze(me[2])}function Ue(ne,he,ue,ye){We(ne),We(he),We(ye),We(he),We(ue),We(ye);const me=r.length/3,Ge=M.generateSideWallUV(n,r,me-6,me-3,me-2,me-1);Ze(Ge[0]),Ze(Ge[1]),Ze(Ge[3]),Ze(Ge[1]),Ze(Ge[2]),Ze(Ge[3])}function We(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Ze(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gh(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new va[r.type]().fromJSON(r)),new ka(n,e.options)}}const mh={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new fe(s,a),new fe(o,l),new fe(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],m=e[n*3+2],f=e[r*3],h=e[r*3+1],_=e[r*3+2],E=e[s*3],d=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-m),new fe(f,1-_),new fe(E,1-p)]:[new fe(o,1-l),new fe(u,1-m),new fe(h,1-_),new fe(d,1-p)]}};function gh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wa extends za{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wa(e.radius,e.detail)}}class Mi extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,m=e/o,f=t/l,h=[],_=[],E=[],d=[];for(let p=0;p<u;p++){const M=p*f-a;for(let T=0;T<c;T++){const x=T*m-s;_.push(x,-M,0),E.push(0,0,1),d.push(T/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,x=M+c*(p+1),w=M+1+c*(p+1),A=M+1+c*p;h.push(T,x,A),h.push(x,w,A)}this.setIndex(h),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(E,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xa extends It{constructor(e=new Va([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(s,3)),this.setAttribute("uv",new it(a,2));function c(u){const m=r.length/3,f=u.extractPoints(t);let h=f.shape;const _=f.holes;cn.isClockWise(h)===!1&&(h=h.reverse());for(let d=0,p=_.length;d<p;d++){const M=_[d];cn.isClockWise(M)===!0&&(_[d]=M.reverse())}const E=cn.triangulateShape(h,_);for(let d=0,p=_.length;d<p;d++){const M=_[d];h=h.concat(M)}for(let d=0,p=h.length;d<p;d++){const M=h[d];r.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let d=0,p=E.length;d<p;d++){const M=E[d],T=M[0]+m,x=M[1]+m,w=M[2]+m;n.push(T,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _h(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Xa(n,e.curveSegments)}}function _h(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class zr extends It{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],m=new O,f=new O,h=[],_=[],E=[],d=[];for(let p=0;p<=n;p++){const M=[],T=p/n,x=a+T*o,w=e*Math.cos(x),A=Math.sqrt(e*e-w*w);let g=0;p===0&&a===0?g=.5/t:p===n&&l===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){const U=y/t,C=r+U*s;m.x=-A*Math.cos(C),m.y=w,m.z=A*Math.sin(C),_.push(m.x,m.y,m.z),f.copy(m).normalize(),E.push(f.x,f.y,f.z),d.push(U+g,1-T),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const T=u[p][M+1],x=u[p][M],w=u[p+1][M],A=u[p+1][M+1];(p!==0||a>0)&&h.push(T,x,A),(p!==n-1||l<Math.PI)&&h.push(x,w,A)}this.setIndex(h),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(E,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gr extends It{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],m=[],f=new O,h=new O,_=new O;for(let E=0;E<=n;E++){const d=a+E/n*o;for(let p=0;p<=r;p++){const M=p/r*s;h.x=(e+t*Math.cos(d))*Math.cos(M),h.y=(e+t*Math.cos(d))*Math.sin(M),h.z=t*Math.sin(d),c.push(h.x,h.y,h.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),_.subVectors(h,f).normalize(),u.push(_.x,_.y,_.z),m.push(p/r),m.push(E/n)}}for(let E=1;E<=n;E++)for(let d=1;d<=r;d++){const p=(r+1)*E+d-1,M=(r+1)*(E-1)+d-1,T=(r+1)*(E-1)+d,x=(r+1)*E+d;l.push(p,M,x),l.push(M,T,x)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(zo(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(zo(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function zo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const xh={clone:Si,merge:Ft};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new He().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yh extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ui extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eh extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Th extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qa extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ah extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Es=new ut,Go=new O,Ho=new O;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Es,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Vi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xr=new O,Mr=new Ei,tn=new O;class ic extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xr,Mr,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xr,Mr,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new O,Vo=new fe,ko=new fe;class Zt extends ic{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,Vo,ko),t.subVectors(ko,Vo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bh extends nc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class Wo extends qa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rc extends ic{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wh extends nc{constructor(){super(new rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sr extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const hi=-90,fi=1;class ya extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(hi,fi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(hi,fi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(hi,fi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(hi,fi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(hi,fi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(hi,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=E,e.setRenderTarget(n,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Rh extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Xo(i,e,t,n){const r=Ch(n);switch(t){case Dl:return i*e;case Il:return i*e/r.components*r.byteLength;case Da:return i*e/r.components*r.byteLength;case $n:return i*e*2/r.components*r.byteLength;case Na:return i*e*2/r.components*r.byteLength;case Nl:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case Ia:return i*e*4/r.components*r.byteLength;case br:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:case Vs:return Math.max(i,16)*Math.max(e,8)/4;case zs:case Hs:return Math.max(i,8)*Math.max(e,8)/2;case ks:case Ws:case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:case Nr:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ca:case ua:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fa:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ir:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ch(i){switch(i){case Wt:case Rl:return{byteLength:1,components:1};case Hi:case Cl:case fn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case hn:case Ca:case on:return{byteLength:4,components:1};case Pl:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function sc(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ph(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,m=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){const u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<m.length;h++){const _=m[f],E=m[h];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++f,m[f]=E)}m.length=f+1;for(let h=0,_=m.length;h<_;h++){const E=m[h];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dh=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oh=`#ifdef USE_AOMAP
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
#endif`,Bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Xh=`#ifdef USE_BUMPMAP
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
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
#endif`,Cf=`uniform sampler2D dfgLUT;
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
}`,Pf=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
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
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gd=`float getShadowMask() {
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
}`,_d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,bd=`#ifdef USE_TRANSMISSION
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dd=`uniform sampler2D t2D;
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform float backgroundBlurriness;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`#include <common>
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
}`,Bd=`#if DEPTH_PACKING == 3200
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
}`,zd=`#define DISTANCE
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
}`,Gd=`#define DISTANCE
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#include <common>
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#define LAMBERT
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
}`,Zd=`#define LAMBERT
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
}`,Jd=`#define MATCAP
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
}`,Kd=`#define MATCAP
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
}`,$d=`#define NORMAL
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
}`,Qd=`#define NORMAL
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
}`,jd=`#define PHONG
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
}`,ep=`#define PHONG
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
}`,tp=`#define STANDARD
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
}`,np=`#define STANDARD
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
}`,ip=`#define TOON
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
}`,rp=`#define TOON
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
}`,sp=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,cp=`uniform float rotation;
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
}`,up=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Lh,alphahash_pars_fragment:Dh,alphamap_fragment:Nh,alphamap_pars_fragment:Ih,alphatest_fragment:Uh,alphatest_pars_fragment:Fh,aomap_fragment:Oh,aomap_pars_fragment:Bh,batching_pars_vertex:zh,batching_vertex:Gh,begin_vertex:Hh,beginnormal_vertex:Vh,bsdfs:kh,iridescence_fragment:Wh,bumpmap_pars_fragment:Xh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:Yh,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:Jh,color_fragment:Kh,color_pars_fragment:$h,color_pars_vertex:Qh,color_vertex:jh,common:ef,defaultnormal_vertex:tf,displacementmap_pars_vertex:nf,displacementmap_vertex:rf,emissivemap_fragment:sf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:uf,envmap_pars_fragment:hf,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:df,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:vf,lightmap_pars_fragment:xf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Sf,lights_pars_begin:yf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:bf,lights_phong_pars_fragment:wf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:Df,lightprobes_pars_fragment:Nf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:Gf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:Kf,normal_pars_fragment:$f,normal_pars_vertex:Qf,normal_vertex:jf,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:id,iridescence_pars_fragment:rd,opaque_fragment:sd,packing:ad,premultiplied_alpha_fragment:od,project_vertex:ld,dithering_fragment:cd,dithering_pars_fragment:ud,roughnessmap_fragment:hd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:dd,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:_d,skinning_pars_vertex:vd,skinning_vertex:xd,skinnormal_vertex:Md,specularmap_fragment:Sd,specularmap_pars_fragment:yd,tonemapping_fragment:Ed,tonemapping_pars_fragment:Td,transmission_fragment:Ad,transmission_pars_fragment:bd,uv_pars_fragment:wd,uv_pars_vertex:Rd,uv_vertex:Cd,worldpos_vertex:Pd,background_vert:Ld,background_frag:Dd,backgroundCube_vert:Nd,backgroundCube_frag:Id,cube_vert:Ud,cube_frag:Fd,depth_vert:Od,depth_frag:Bd,distance_vert:zd,distance_frag:Gd,equirect_vert:Hd,equirect_frag:Vd,linedashed_vert:kd,linedashed_frag:Wd,meshbasic_vert:Xd,meshbasic_frag:qd,meshlambert_vert:Yd,meshlambert_frag:Zd,meshmatcap_vert:Jd,meshmatcap_frag:Kd,meshnormal_vert:$d,meshnormal_frag:Qd,meshphong_vert:jd,meshphong_frag:ep,meshphysical_vert:tp,meshphysical_frag:np,meshtoon_vert:ip,meshtoon_frag:rp,points_vert:sp,points_frag:ap,shadow_vert:op,shadow_frag:lp,sprite_vert:cp,sprite_frag:up},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},sn={basic:{uniforms:Ft([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ft([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ft([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ft([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ft([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ft([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ft([Me.points,Me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ft([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ft([Me.common,Me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ft([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ft([Me.sprite,Me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ft([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ft([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};sn.physical={uniforms:Ft([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const yr={r:0,b:0,g:0},hp=new ut,ac=new He;ac.set(-1,0,0,0,1,0,0,0,1);function fp(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,u=null,m=0,f=null;function h(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const x=M.backgroundBlurriness>0;T=e.get(T,x)}return T}function _(M){let T=!1;const x=h(M);x===null?d(a,o):x&&x.isColor&&(d(x,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(M,T){const x=h(T);x&&x.isCubeTexture?(c===void 0&&(c=new An(new Ji(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Si(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ac),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(u!==x||m!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,m=x.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new An(new Mi(2,2),new zn({name:"BackgroundMaterial",uniforms:Si(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||m!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,m=x.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,T){M.getRGB(yr,tc(i)),t.buffers.color.setClear(yr.r,yr.g,yr.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,d(a,o)},render:_,addToRenderList:E,dispose:p}}function dp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(D,z,Z,L,X){let B=!1;const F=m(D,L,Z,z);s!==F&&(s=F,c(s.object)),B=h(D,L,Z,X),B&&_(D,L,Z,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,x(D,z,Z,L),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function m(D,z,Z,L){const X=L.wireframe===!0;let B=n[z.id];B===void 0&&(B={},n[z.id]=B);const F=D.isInstancedMesh===!0?D.id:0;let Q=B[F];Q===void 0&&(Q={},B[F]=Q);let q=Q[Z.id];q===void 0&&(q={},Q[Z.id]=q);let ee=q[X];return ee===void 0&&(ee=f(l()),q[X]=ee),ee}function f(D){const z=[],Z=[],L=[];for(let X=0;X<t;X++)z[X]=0,Z[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:L,object:D,attributes:{},index:null}}function h(D,z,Z,L){const X=s.attributes,B=z.attributes;let F=0;const Q=Z.getAttributes();for(const q in Q)if(Q[q].location>=0){const ie=X[q];let Te=B[q];if(Te===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor)),ie===void 0||ie.attribute!==Te||Te&&ie.data!==Te.data)return!0;F++}return s.attributesNum!==F||s.index!==L}function _(D,z,Z,L){const X={},B=z.attributes;let F=0;const Q=Z.getAttributes();for(const q in Q)if(Q[q].location>=0){let ie=B[q];ie===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const Te={};Te.attribute=ie,ie&&ie.data&&(Te.data=ie.data),X[q]=Te,F++}s.attributes=X,s.attributesNum=F,s.index=L}function E(){const D=s.newAttributes;for(let z=0,Z=D.length;z<Z;z++)D[z]=0}function d(D){p(D,0)}function p(D,z){const Z=s.newAttributes,L=s.enabledAttributes,X=s.attributeDivisors;Z[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),X[D]!==z&&(i.vertexAttribDivisor(D,z),X[D]=z)}function M(){const D=s.newAttributes,z=s.enabledAttributes;for(let Z=0,L=z.length;Z<L;Z++)z[Z]!==D[Z]&&(i.disableVertexAttribArray(Z),z[Z]=0)}function T(D,z,Z,L,X,B,F){F===!0?i.vertexAttribIPointer(D,z,Z,X,B):i.vertexAttribPointer(D,z,Z,L,X,B)}function x(D,z,Z,L){E();const X=L.attributes,B=Z.getAttributes(),F=z.defaultAttributeValues;for(const Q in B){const q=B[Q];if(q.location>=0){let ee=X[Q];if(ee===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ie=ee.normalized,Te=ee.itemSize,Ie=e.get(ee);if(Ie===void 0)continue;const j=Ie.buffer,ve=Ie.type,Ee=Ie.bytesPerElement,Ne=ve===i.INT||ve===i.UNSIGNED_INT||ee.gpuType===Ca;if(ee.isInterleavedBufferAttribute){const pe=ee.data,Pe=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,st=ee.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ue=0;Ue<q.locationSize;Ue++)p(q.location+Ue,pe.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)d(q.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Ue=0;Ue<q.locationSize;Ue++)T(q.location+Ue,Te/q.locationSize,ve,ie,Pe*Ee,(st+Te/q.locationSize*Ue)*Ee,Ne)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe,ee.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<q.locationSize;pe++)d(q.location+pe);i.bindBuffer(i.ARRAY_BUFFER,j);for(let pe=0;pe<q.locationSize;pe++)T(q.location+pe,Te/q.locationSize,ve,ie,Te*Ee,Te/q.locationSize*pe*Ee,Ne)}}else if(F!==void 0){const ie=F[Q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(q.location,ie);break;case 3:i.vertexAttrib3fv(q.location,ie);break;case 4:i.vertexAttrib4fv(q.location,ie);break;default:i.vertexAttrib1fv(q.location,ie)}}}}M()}function w(){U();for(const D in n){const z=n[D];for(const Z in z){const L=z[Z];for(const X in L){const B=L[X];for(const F in B)u(B[F].object),delete B[F];delete L[X]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;const z=n[D.id];for(const Z in z){const L=z[Z];for(const X in L){const B=L[X];for(const F in B)u(B[F].object),delete B[F];delete L[X]}}delete n[D.id]}function g(D){for(const z in n){const Z=n[z];for(const L in Z){const X=Z[L];if(X[D.id]===void 0)continue;const B=X[D.id];for(const F in B)u(B[F].object),delete B[F];delete X[D.id]}}}function y(D){for(const z in n){const Z=n[z],L=D.isInstancedMesh===!0?D.id:0,X=Z[L];if(X!==void 0){for(const B in X){const F=X[B];for(const Q in F)u(F[Q].object),delete F[Q];delete X[B]}delete Z[L],Object.keys(Z).length===0&&delete n[z]}}}function U(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:E,enableAttribute:d,disableUnusedAttributes:M}}function pp(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function mp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==ln&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Wt&&g!==on&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:h,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,maxSamples:w,samples:A}}function gp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Nn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const h=m.length!==0||f||n!==0||r;return r=f,n=m.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){t=u(m,f,0)},this.setState=function(m,f,h){const _=m.clippingPlanes,E=m.clipIntersection,d=m.clipShadows,p=i.get(m);if(!r||_===null||_.length===0||s&&!d)s?u(null):c();else{const M=s?0:n,T=M*4;let x=p.clippingState||null;l.value=x,x=u(_,f,T,h);for(let w=0;w!==T;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,f,h,_){const E=m!==null?m.length:0;let d=null;if(E!==0){if(d=l.value,_!==!0||d===null){const p=h+E*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let T=0,x=h;T!==E;++T,x+=4)a.copy(m[T]).applyMatrix4(M,o),a.normal.toArray(d,x),d[x+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,d}}class Ya extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Wl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:pi});s.uniforms.tEquirect.value=t;const a=new An(r,s),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Gt),new ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const qo=256,_p=3,vp=20,oc=256,lc=16,xp=3,Mp=new O,Sp=new $e;class Hr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ya(1,10,null),this._boxMesh=new An(new Ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Mp}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,E=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(e.background=l.getClearColor(Sp));const d=new ya(n,r,u);return d.position.copy(o),d.update(l,e),l.autoClear=m,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,e.background=E,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qo,hu(e))}_fromTexture(e,t){e.mapping===gi||e.mapping===Gi?this._setSize(e.image.length===0?qo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Yo(e,!1,!1),n=Math.log2(e)-_p;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gi||e.mapping===Gi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yp(),this._integrationMaterial=Ep());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/lc);for(let a=0;a<=n;a++){const o=Hr.lodToRoughness(a,n);if(a>n-xp)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(oc*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Tp());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Yo(i,e,t){return new Ya(i,{minFilter:Un,generateMipmaps:e,type:fn,colorSpace:Ur,depthBuffer:t})}function Ki(i,e,t){return new zn({name:i,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:t,side:Ht,blending:pi,depthTest:!1,depthWrite:!1})}function yp(){return Ki("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${oc}u

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
	`)}function Ep(){return Ki("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lc}},`

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
	`)}function Tp(){return Ki("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vp}
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
	`)}function Zo(){return Ki("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jo(){return Ki("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ap(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Zr||h===Jr)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const E=new Ya(_.height);return E.fromEquirectangularTexture(i,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,_=h===Zr||h===Jr,E=h===gi||h===Gi;if(_||E){let d=t.get(f);const p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Hr(i)),d=_?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{const M=f.image;return _&&M&&M.height>0||E&&M&&l(M)?(n===null&&(n=new Hr(i)),d=_?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",u),d.texture):null}}}return f}function o(f,h){return h===Zr?f.mapping=gi:h===Jr&&(f.mapping=Gi),f}function l(f){let h=0;const _=6;for(let E=0;E<_;E++)f[E]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function bp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Pr("WebGLRenderer: "+n+" extension not supported."),r}}}function wp(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const d in _.attributes)e.remove(_.attributes[d]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const E=s.get(_);E&&(e.remove(E),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,E){return r[E.id]!==void 0||(E.addEventListener("dispose",o),r[E.id]=new WeakRef(E),a.register(E,E.id,E),t.memory.geometries++),E}function u(_){const E=_.attributes;for(const d in E)e.update(E[d],i.ARRAY_BUFFER)}function m(_){const E=_.index,d=_.attributes.position;let p=0;if(d===void 0)return;const M=E!==null?E.array.length:d.array.length/3-1,T=d.count>=65535?kl:Vl,x=new T(Math.ceil(M/3)*6,1),w=x.array;if(E!==null){const g=E.array;p=E.version;for(let y=0,U=0;y<M;y+=3){const C=g[y+0],D=g[y+1],z=g[y+2];w[U++]=C,w[U++]=D,w[U++]=D,w[U++]=z,w[U++]=z,w[U++]=C}}else{p=d.version;for(let g=0,y=0;g<M;g+=3){const U=g+0,C=g+1,D=g+2;w[y++]=U,w[y++]=C,w[y++]=C,w[y++]=D,w[y++]=D,w[y++]=U}}x.version=p;const A=s.get(_);A&&e.remove(A),s.set(_,x)}function f(_){const E=s.get(_);if(E){const d=_.index;d!==null&&E.version<d.version&&m(_)}else m(_);return s.get(_)}function h(){for(const _ in r){const E=r[_].deref();E!==void 0&&l(E)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Rp(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,f){i.drawElements(n,f,s,m*a),t.update(f,n,1)}function c(m,f,h){h!==0&&(i.drawElementsInstanced(n,f,s,m*a,h),t.update(f,n,h))}function u(m,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,m,0,h);let E=0;for(let d=0;d<h;d++)E+=f[d];t.update(E,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Cp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Pp(i,e,t){const n=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==m){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),_===!0&&(T=2),E===!0&&(T=3);let x=o.attributes.position.count*T,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*w*4*m),g=new zl(A,x,w,m);g.type=on,g.needsUpdate=!0;const y=T*4;for(let C=0;C<m;C++){const D=d[C],z=p[C],Z=M[C],L=x*w*4*C;for(let X=0;X<D.count;X++){const B=X*y;h===!0&&(r.fromBufferAttribute(D,X),A[L+B+0]=r.x,A[L+B+1]=r.y,A[L+B+2]=r.z,A[L+B+3]=0),_===!0&&(r.fromBufferAttribute(z,X),A[L+B+4]=r.x,A[L+B+5]=r.y,A[L+B+6]=r.z,A[L+B+7]=0),E===!0&&(r.fromBufferAttribute(Z,X),A[L+B+8]=r.x,A[L+B+9]=r.y,A[L+B+10]=r.z,A[L+B+11]=Z.itemSize===4?r.w:1)}}f={count:m,texture:g,size:new fe(x,w)},n.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let E=0;E<c.length;E++)h+=c[E];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Lp(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,m=c.geometry,f=e.get(c,m);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Dp={[Sl]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Tl]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[Ra]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function Np(i,e,t,n,r,s){const a=new un(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new It;u.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new it([0,2,0,0,2,0],2));const m=new yh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new An(u,m),h=new rc(-1,1,1,-1,0,1);let _=null,E=null,d=!1,p,M=null,T=[],x=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let g=0;g<T.length;g++){const y=T[g];y.setSize&&y.setSize(w,A)}},this.setEffects=function(w){T=w,x=T.length>0&&T[0].isRenderPass===!0;const A=a.width,g=a.height;T.length>0&&o===null&&(o=new un(A,g,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new un(A,g,{type:fn,depthBuffer:!1,stencilBuffer:!1}));const y=r===!0&&T.some(U=>U.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new vi(A,g),s===!0&&(c.format=Fn,c.type=_i)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let U=0;U<T.length;U++){const C=T[U];C.setSize&&C.setSize(A,g),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,A){if(d||w.toneMapping===En&&T.length===0)return!1;if(M=A,A!==null){const g=A.width,y=A.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return x===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=En,!0},this.hasRenderPass=function(){return x},this.end=function(w,A){w.toneMapping=p,d=!0;let g=a,y=o;for(let U=0;U<T.length;U++){const C=T[U];C.enabled!==!1&&(C.render(w,y,g,A),C.needsSwap!==!1&&(g=y,y=y===o?l:o))}if(_!==w.outputColorSpace||E!==w.toneMapping){_=w.outputColorSpace,E=w.toneMapping,m.defines={},tt.getTransfer(_)===ct&&(m.defines.SRGB_TRANSFER="");const U=Dp[E];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(M),w.render(f,h),M=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),m.dispose()}}const cc=new Ot,uc=new vi(1,1),hc=new Xl(1),fc=new zl,dc=new xu,pc=new Wl,Ko=[],$o=[],Qo=new Float32Array(16),jo=new Float32Array(9),el=new Float32Array(4);function Ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ko[r];if(s===void 0&&(s=new Float32Array(r),Ko[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wr(i,e){let t=$o[e];t===void 0&&(t=new Int32Array(e),$o[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),yt(t,n)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),yt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;Qo.set(n),i.uniformMatrix4fv(this.addr,!1,Qo),yt(t,n)}}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Xr(i){return i.version===0&&(i.compareFunction=Ol,i.needsUpdate=!0),i}function Jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Xr(uc):s=cc,t.setTexture2D(e||s,r)}function Kp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||dc,r)}function $p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Xr(hc):s=pc,t.setTextureCube(e||s,r)}function Qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fc,r)}function jp(i){switch(i){case 5126:return Ip;case 35664:return Up;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return zp;case 35676:return Gp;case 5124:case 35670:return Hp;case 35667:case 35671:return Vp;case 35668:case 35672:return kp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(i,e){i.uniform1fv(this.addr,e)}function tm(i,e){const t=Ti(e,this.size,2);i.uniform2fv(this.addr,t)}function nm(i,e){const t=Ti(e,this.size,3);i.uniform3fv(this.addr,t)}function im(i,e){const t=Ti(e,this.size,4);i.uniform4fv(this.addr,t)}function rm(i,e){const t=Ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sm(i,e){const t=Ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function am(i,e){const t=Ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function om(i,e){i.uniform1iv(this.addr,e)}function lm(i,e){i.uniform2iv(this.addr,e)}function cm(i,e){i.uniform3iv(this.addr,e)}function um(i,e){i.uniform4iv(this.addr,e)}function hm(i,e){i.uniform1uiv(this.addr,e)}function fm(i,e){i.uniform2uiv(this.addr,e)}function dm(i,e){i.uniform3uiv(this.addr,e)}function pm(i,e){i.uniform4uiv(this.addr,e)}function mm(i,e,t){const n=this.cache,r=e.length,s=Wr(t,r);St(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xr(uc):a=cc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function gm(i,e,t){const n=this.cache,r=e.length,s=Wr(t,r);St(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dc,s[a])}function _m(i,e,t){const n=this.cache,r=e.length,s=Wr(t,r);St(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Xr(hc):a=pc;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function vm(i,e,t){const n=this.cache,r=e.length,s=Wr(t,r);St(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fc,s[a])}function xm(i){switch(i){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return rm;case 35675:return sm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return um;case 5125:return hm;case 36294:return fm;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jp(t.type)}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xm(t.type)}}class ym{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ts=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Em(i,e,t){const n=i.name,r=n.length;for(Ts.lastIndex=0;;){const s=Ts.exec(n),a=Ts.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tl(t,c===void 0?new Mm(o,i,e):new Sm(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new ym(o),tl(t,m)),t=m}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Em(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tm=37297;let Am=0;function bm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const il=new He;function wm(i){tt._getMatrix(il,tt.workingColorSpace,i);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+bm(i.getShaderSource(e),o)}else return s}function Rm(i,e){const t=wm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cm={[Sl]:"Linear",[yl]:"Reinhard",[El]:"Cineon",[Tl]:"ACESFilmic",[bl]:"AgX",[Ra]:"Neutral",[Al]:"Custom"};function Pm(i,e){const t=Cm[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new O;function Lm(){tt.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Nm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ii(i){return i!==""}function sl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(i){return i.replace(Um,Fm)}function Fm(i,e){const t=Ye[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ea(t)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(Om,Bm)}function Bm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zm={[Ui]:"SHADOWMAP_TYPE_PCF",[Di]:"SHADOWMAP_TYPE_VSM"};function Gm(i){return zm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hm={[Gi]:"ENVMAP_MODE_REFRACTION"};function Vm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const km={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[Zc]:"ENVMAP_BLENDING_MIX",[Jc]:"ENVMAP_BLENDING_ADD"};function Wm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":km[i.combine]||"ENVMAP_BLENDING_NONE"}function Xm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gm(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Vm(t),m=Wm(t),f=Dm(t),h=Nm(s),_=r.createProgram();let E,d,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Ii).join(`
`),E.length>0&&(E+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Ii).join(`
`),d.length>0&&(d+=`
`)):(E=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),d=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ye.tonemapping_pars_fragment:"",t.toneMapping!==En?Pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=Ea(a),a=sl(a,t),a=al(a,t),o=Ea(o),o=sl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,E=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,d=["#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=p+E+a,T=p+d+o,x=nl(r,r.VERTEX_SHADER,M),w=nl(r,r.FRAGMENT_SHADER,T);r.attachShader(_,x),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(x)||"",Z=r.getShaderInfoLog(w)||"",L=D.trim(),X=z.trim(),B=Z.trim();let F=!0,Q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,x,w);else{const q=rl(r,x,"vertex"),ee=rl(r,w,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+ee)}else L!==""?Be("WebGLProgram: Program Info Log:",L):(X===""||B==="")&&(Q=!1);Q&&(C.diagnostics={runnable:F,programLog:L,vertexShader:{log:X,prefix:E},fragmentShader:{log:B,prefix:d}})}r.deleteShader(x),r.deleteShader(w),g=new Lr(r,_),y=Im(r,_)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,Tm)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=w,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}}class Zm{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function Jm(i){return i===$n||i===Nr||i===Ir}function Km(i,e,t,n,r,s){const a=new Gl,o=new Ym,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,y,U,C,D,z){const Z=C.fog,L=D.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=e.get(g.envMap||X,B),Q=f[g.type];let q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&Be("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));const ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=ee!==void 0?ee.length:0;let Te=0;L.morphAttributes.position!==void 0&&(Te=1),L.morphAttributes.normal!==void 0&&(Te=2),L.morphAttributes.color!==void 0&&(Te=3);let Ie,j,ve,Ee;if(Q){const xe=sn[Q];Ie=xe.vertexShader,j=xe.fragmentShader}else{Ie=g.vertexShader,j=g.fragmentShader;const xe=o.getVertexShaderStage(g),lt=o.getFragmentShaderStage(g);o.update(g,xe,lt),ve=xe.id,Ee=lt.id}const Ne=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,Ue=!!g.map,We=!!g.matcap,Ze=!!F,ne=Ze&&F.isPMREMTexture===!0,he=!!g.aoMap,ue=!!g.lightMap,ye=!!g.bumpMap&&g.wireframe===!1,me=!!g.normalMap,Ge=!!g.displacementMap,Re=!!g.emissiveMap,qe=!!g.metalnessMap,Je=!!g.roughnessMap,et=g.anisotropy>0,I=g.clearcoat>0,pt=g.diffuseRoughness>0,Xe=g.dispersion>0,ot=g.retroreflectivity>0,de=g.iridescence>0,dt=g.sheen>0,Fe=g.transmission>0,Oe=et&&!!g.anisotropyMap,b=I&&!!g.clearcoatMap,v=I&&!!g.clearcoatNormalMap,k=I&&!!g.clearcoatRoughnessMap,ae=pt&&!!g.diffuseRoughnessMap,te=de&&!!g.iridescenceMap,P=de&&!!g.iridescenceThicknessMap,$=dt&&!!g.sheenColorMap,H=dt&&!!g.sheenRoughnessMap,G=!!g.specularMap,re=!!g.specularColorMap,R=!!g.specularIntensityMap,K=Fe&&!!g.transmissionMap,Y=Fe&&!!g.thicknessMap,se=!!g.gradientMap,oe=!!g.alphaMap,ce=g.alphaTest>0,Le=!!g.alphaHash,ze=!!g.extensions;let le=En;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(le=i.toneMapping);const De=ne?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Ve={shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:Ie,fragmentShader:j,defines:g.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ue,matcap:We,envMap:Ze,envMapMode:Ze&&F.mapping,envMapPMREM:ne,envMapMaxLod:ne?De.length-1:null,envMapSize:ne?De[0].width:null,aoMap:he,lightMap:ue,bumpMap:ye,normalMap:me,displacementMap:Ge,emissiveMap:Re,normalMapObjectSpace:me&&g.normalMapType===Qc,normalMapTangentSpace:me&&g.normalMapType===ma,packedNormalMap:me&&g.normalMapType===ma&&Jm(g.normalMap.format),metalnessMap:qe,roughnessMap:Je,anisotropy:et,anisotropyMap:Oe,clearcoat:I,clearcoatMap:b,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:pt,diffuseRoughnessMap:ae,dispersion:Xe,retroreflection:ot,iridescence:de,iridescenceMap:te,iridescenceThicknessMap:P,sheen:dt,sheenColorMap:$,sheenRoughnessMap:H,specularMap:G,specularColorMap:re,specularIntensityMap:R,transmission:Fe,transmissionMap:K,thicknessMap:Y,gradientMap:se,opaque:g.transparent===!1&&g.blending===Fi&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:Le,combine:g.combine,mapUv:Ue&&h(g.map.channel),aoMapUv:he&&h(g.aoMap.channel),lightMapUv:ue&&h(g.lightMap.channel),bumpMapUv:ye&&h(g.bumpMap.channel),normalMapUv:me&&h(g.normalMap.channel),displacementMapUv:Ge&&h(g.displacementMap.channel),emissiveMapUv:Re&&h(g.emissiveMap.channel),metalnessMapUv:qe&&h(g.metalnessMap.channel),roughnessMapUv:Je&&h(g.roughnessMap.channel),anisotropyMapUv:Oe&&h(g.anisotropyMap.channel),clearcoatMapUv:b&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&h(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&h(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:P&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:$&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:H&&h(g.sheenRoughnessMap.channel),specularMapUv:G&&h(g.specularMap.channel),specularColorMapUv:re&&h(g.specularColorMap.channel),specularIntensityMapUv:R&&h(g.specularIntensityMap.channel),transmissionMapUv:K&&h(g.transmissionMap.channel),thicknessMapUv:Y&&h(g.thicknessMap.channel),alphaMapUv:oe&&h(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||et),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Ue||oe),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&me===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Te,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:z.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ue&&g.map.isVideoTexture===!0&&tt.getTransfer(g.map.colorSpace)===ct,decodeVideoTextureEmissive:Re&&g.emissiveMap.isVideoTexture===!0&&tt.getTransfer(g.emissiveMap.colorSpace)===ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===an,flipSided:g.side===Ht,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&g.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function E(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)y.push(U),y.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(d(y,g),p(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function d(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function p(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const y=f[g.type];let U;if(y){const C=sn[y];U=xh.clone(C.uniforms)}else U=g.uniforms;return U}function T(g,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new Xm(i,y,g,r),c.push(U),u.set(y,U)),U}function x(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:M,acquireProgram:T,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:A}}function $m(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ul(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,E,d,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:d,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=_,M.materialVariant=a(f),M.groupOrder=E,M.renderOrder=f.renderOrder,M.z=d,M.group=p),e++,M}function l(f,h,_,E,d,p,M){M.reversedDepth===!0&&(d=-d);const T=o(f,h,_,E,d,p);_.transmission>0?n.push(T):_.transparent===!0?r.push(T):t.push(T)}function c(f,h,_,E,d,p){const M=o(f,h,_,E,d,p);_.transmission>0?n.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function u(f,h){t.length>1&&t.sort(f||Qm),n.length>1&&n.sort(h||cl),r.length>1&&r.sort(h||cl)}function m(){for(let f=e,h=i.length;f<h;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:m,sort:u}}function jm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ul,i.set(n,[a])):r>=s.length?(a=new ul,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ng=0;function ig(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rg(i){const e=new eg,t=tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new ut,a=new ut;function o(c){let u=0,m=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,_=0,E=0,d=0,p=0,M=0,T=0,x=0,w=0,A=0,g=0,y=0,U=0,C=0;c.sort(ig);for(let z=0,Z=c.length;z<Z;z++){const L=c[z],X=L.color,B=L.intensity,F=L.distance;let Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$n?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=X.r*B,m+=X.g*B,f+=X.b*B;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],B);C++}else if(L.isSunLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ie=t.get(L);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[_]=ie,n.sunShadowMap[_]=Q;const Te=ee.getViewportCount();for(let Ie=0;Ie<Te;Ie++)n.sunShadowMatrix[E+Ie]=ee.getMatrix(Ie),n.sunShadowCascade[E+Ie]=ee._cascadeData[Ie];E+=Te,_++}n.sun[h]=q,h++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ie=t.get(L);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.directionalShadow[d]=ie,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=L.shadow.matrix,w++}n.directional[d]=q,d++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(X).multiplyScalar(B),q.distance=F,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[M]=q;const ee=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,ee.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[M]=ee.matrix,L.castShadow){const ie=t.get(L);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=Q,g++}M++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(X).multiplyScalar(B),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=q,T++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const ee=L.shadow,ie=t.get(L);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=L.shadow.matrix,A++}n.point[p]=q,p++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(B),q.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[x]=q,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=f;const D=n.hash;(D.sunLength!==h||D.directionalLength!==d||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==x||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==y||D.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=d,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-U,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=C,D.sunLength=h,D.directionalLength=d,D.pointLength=p,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=x,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=y,D.numLightProbes=C,n.version=ng++)}function l(c,u){let m=0,f=0,h=0,_=0,E=0,d=0;const p=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const x=c[M];if(x.isSunLight){const w=n.sun[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),m++}else if(x.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),f++}else if(x.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),E++}else if(x.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const w=n.hemi[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),d++}}}return{setup:o,setupView:l,state:n}}function hl(i){const e=new rg(i),t=[],n=[],r=[];function s(m){u.camera=m,t.length=0,n.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):t.push(m)}function o(m){n.push(m)}function l(){e.setup(t),r.sort((m,f)=>m.priority-f.priority||m.id-f.id)}function c(m){e.setupView(t,m)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hl(i),e.set(r,[o])):s>=a.length?(o=new hl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`,lg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],cg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],fl=new ut,Li=new O,As=new O;function ug(i,e,t){let n=new ki;const r=new fe,s=new fe,a=new gt,o=new Eh,l=new Th,c={},u=t.maxTextureSize,m={[Kn]:Ht,[Ht]:Kn,[an]:an},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:ag,fragmentShader:og}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new It;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new An(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ui;let p=this.type;this.render=function(A,g,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;this.type===Lc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ui);const U=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=p!==this.type;Z&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=A.length;L<X;L++){const B=A[L],F=B.shadow;if(F===void 0){Be("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();r.multiply(Q),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y));const q=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=q,F.map===null||Z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Di){if(B.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new un(r.x,r.y,{format:$n,type:fn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new vi(r.x,r.y,on),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=On,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wt,F.map.depthTexture.magFilter=wt}else B.isPointLight?(F.map=new Ya(r.x),F.map.depthTexture=new Xl(r.x,hn)):(F.map=new un(r.x,r.y),F.map.depthTexture=new vi(r.x,r.y,hn)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=On,this.type===Ui?(F.map.depthTexture.compareFunction=q?Fl:Ul,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wt,F.map.depthTexture.magFilter=wt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);const ee=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();B.isPointLight!==!0&&F.updateMatrices(B,y);const ie=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:y.layers;for(let Te=0;Te<ee;Te++){const Ie=F.getCamera(Te);if(B.isPointLight){const j=F.camera,ve=F.matrix,Ee=B.distance||j.far;Ee!==j.far&&(j.far=Ee,j.updateProjectionMatrix()),Li.setFromMatrixPosition(B.matrixWorld),j.position.copy(Li),As.copy(j.position),As.add(lg[Te]),j.up.copy(cg[Te]),j.lookAt(As),j.updateMatrixWorld(),ve.makeTranslation(-Li.x,-Li.y,-Li.z),fl.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F._frustum.setFromProjectionMatrix(fl,j.coordinateSystem,j.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Te),i.clear();else{Te===0&&(i.setRenderTarget(F.map),i.clear());const j=F.getViewport(Te);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),z.viewport(a)}n=F.getFrustum(Te),x(g,y,Ie,B,ie,this.type)}F.isPointLightShadow!==!0&&this.type===Di&&M(F,y),F.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(U,C,D)};function M(A,g){const y=e.update(E);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new un(r.x,r.y,{format:$n,type:fn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,y,f,E,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,y,h,E,null)}function T(A,g,y,U){let C=null;const D=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const z=C.uuid,Z=g.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let X=L[Z];X===void 0&&(X=C.clone(),L[Z]=X,g.addEventListener("dispose",w)),C=X}if(C.visible=g.visible,C.wireframe=g.wireframe,U===Di?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:m[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const z=i.properties.get(C);z.light=y}return C}function x(A,g,y,U,C,D){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Di)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const L=e.update(A),X=A.material;if(Array.isArray(X)){const B=L.groups;for(let F=0,Q=B.length;F<Q;F++){const q=B[F],ee=X[q.materialIndex];if(ee&&ee.visible){const ie=T(A,ee,U,D);A.onBeforeShadow(i,A,g,y,L,ie,q),i.renderBufferDirect(y,null,L,ie,A,q),A.onAfterShadow(i,A,g,y,L,ie,q)}}}else if(X.visible){const B=T(A,X,U,D);A.onBeforeShadow(i,A,g,y,L,B,null),i.renderBufferDirect(y,null,L,B,A,null),A.onAfterShadow(i,A,g,y,L,B,null)}}const Z=A.children;for(let L=0,X=Z.length;L<X;L++)x(Z[L],g,y,U,C,D)}function w(A){A.target.removeEventListener("dispose",w);for(const y in c){const U=c[y],C=A.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function hg(i,e){function t(){let R=!1;const K=new gt;let Y=null;const se=new gt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!R&&(i.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){R=oe},setClear:function(oe,ce,Le,ze,le){le===!0&&(oe*=ze,ce*=ze,Le*=ze),K.set(oe,ce,Le,ze),se.equals(K)===!1&&(i.clearColor(oe,ce,Le,ze),se.copy(K))},reset:function(){R=!1,Y=null,se.set(-1,0,0,0)}}}function n(){let R=!1,K=!1,Y=null,se=null,oe=null;return{setReversed:function(ce){if(K!==ce){const Le=e.get("EXT_clip_control");ce?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),K=ce;const ze=oe;oe=null,this.setClear(ze)}},getReversed:function(){return K},setTest:function(ce){ce?pe(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!R&&(i.depthMask(ce),Y=ce)},setFunc:function(ce){if(K&&(ce=cu[ce]),se!==ce){switch(ce){case Ps:i.depthFunc(i.NEVER);break;case Ls:i.depthFunc(i.ALWAYS);break;case Ds:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case Ns:i.depthFunc(i.EQUAL);break;case Is:i.depthFunc(i.GEQUAL);break;case Us:i.depthFunc(i.GREATER);break;case Fs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ce}},setLocked:function(ce){R=ce},setClear:function(ce){oe!==ce&&(oe=ce,K&&(ce=1-ce),i.clearDepth(ce))},reset:function(){R=!1,Y=null,se=null,oe=null,K=!1}}}function r(){let R=!1,K=null,Y=null,se=null,oe=null,ce=null,Le=null,ze=null,le=null;return{setTest:function(De){R||(De?pe(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(De){K!==De&&!R&&(i.stencilMask(De),K=De)},setFunc:function(De,Ve,xe){(Y!==De||se!==Ve||oe!==xe)&&(i.stencilFunc(De,Ve,xe),Y=De,se=Ve,oe=xe)},setOp:function(De,Ve,xe){(ce!==De||Le!==Ve||ze!==xe)&&(i.stencilOp(De,Ve,xe),ce=De,Le=Ve,ze=xe)},setLocked:function(De){R=De},setClear:function(De){le!==De&&(i.clearStencil(De),le=De)},reset:function(){R=!1,K=null,Y=null,se=null,oe=null,ce=null,Le=null,ze=null,le=null}}}const s=new t,a=new n,o=new r;let l={};const c=new WeakMap;let u={},m={},f={},h=new WeakMap,_=[],E=null,d=!1,p=null,M=null,T=null,x=null,w=null,A=null,g=null,y=new $e(0,0,0),U=0,C=!1,D=null,z=null,Z=null,L=null,X=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=Q>=2);let ee=null,ie={};const Te=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),j=new gt().fromArray(Te),ve=new gt().fromArray(Ie);function Ee(R,K,Y,se){const oe=new Uint8Array(4),ce=i.createTexture();i.bindTexture(R,ce),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Y;Le++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(K+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ce}const Ne={};Ne[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(zi),ye(!1),me(uo),pe(i.CULL_FACE),he(pi);function pe(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Pe(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function st(R,K){return f[R]!==K?(i.bindFramebuffer(R,K),f[R]=K,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=K),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ue(R,K){let Y=_,se=!1;if(R){Y=h.get(K),Y===void 0&&(Y=[],h.set(K,Y));const oe=R.textures;if(Y.length!==oe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Le=oe.length;ce<Le;ce++)Y[ce]=i.COLOR_ATTACHMENT0+ce;Y.length=oe.length,se=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,se=!0);se&&i.drawBuffers(Y)}function We(R){return E!==R?(i.useProgram(R),E=R,!0):!1}const Ze={[Zn]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};Ze[Ic]=i.MIN,Ze[Uc]=i.MAX;const ne={[Fc]:i.ZERO,[Cs]:i.ONE,[Oc]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[kc]:i.SRC_ALPHA_SATURATE,[Hc]:i.DST_COLOR,[zc]:i.DST_ALPHA,[Bc]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[Vc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[Wc]:i.CONSTANT_COLOR,[Xc]:i.ONE_MINUS_CONSTANT_COLOR,[qc]:i.CONSTANT_ALPHA,[Yc]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,K,Y,se,oe,ce,Le,ze,le,De){if(R===pi){d===!0&&(Pe(i.BLEND),d=!1);return}if(d===!1&&(pe(i.BLEND),d=!0),R!==xl){if(R!==p||De!==C){if((M!==Zn||w!==Zn)&&(i.blendEquation(i.FUNC_ADD),M=Zn,w=Zn),De)switch(R){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.ONE,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",R);break}else switch(R){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fo:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case po:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",R);break}T=null,x=null,A=null,g=null,y.set(0,0,0),U=0,p=R,C=De}return}oe=oe||K,ce=ce||Y,Le=Le||se,(K!==M||oe!==w)&&(i.blendEquationSeparate(Ze[K],Ze[oe]),M=K,w=oe),(Y!==T||se!==x||ce!==A||Le!==g)&&(i.blendFuncSeparate(ne[Y],ne[se],ne[ce],ne[Le]),T=Y,x=se,A=ce,g=Le),(ze.equals(y)===!1||le!==U)&&(i.blendColor(ze.r,ze.g,ze.b,le),y.copy(ze),U=le),p=R,C=!1}function ue(R,K){R.side===an?Pe(i.CULL_FACE):pe(i.CULL_FACE);let Y=R.side===Ht;K&&(Y=!Y),ye(Y),R.blending===Fi&&R.transparent===!1?he(pi):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const se=R.stencilWrite;o.setTest(se),se&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Re(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function me(R){R!==Cc?(pe(i.CULL_FACE),R!==z&&(R===uo?i.cullFace(i.BACK):R===Pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),z=R}function Ge(R){R!==Z&&(F&&i.lineWidth(R),Z=R)}function Re(R,K,Y){R?(pe(i.POLYGON_OFFSET_FILL),(L!==K||X!==Y)&&(L=K,X=Y,a.getReversed()&&(K=-K,Y=-Y),i.polygonOffset(K,Y))):Pe(i.POLYGON_OFFSET_FILL)}function qe(R){R?pe(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Je(R){R===void 0&&(R=i.TEXTURE0+B-1),ee!==R&&(i.activeTexture(R),ee=R)}function et(R,K,Y){Y===void 0&&(ee===null?Y=i.TEXTURE0+B-1:Y=ee);let se=ie[Y];se===void 0&&(se={type:void 0,texture:void 0},ie[Y]=se),(se.type!==R||se.texture!==K)&&(ee!==Y&&(i.activeTexture(Y),ee=Y),i.bindTexture(R,K||Ne[R]),se.type=R,se.texture=K)}function I(){const R=ie[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(R){rt("WebGLState:",R)}}function Xe(){try{i.compressedTexImage3D(...arguments)}catch(R){rt("WebGLState:",R)}}function ot(){try{i.texSubImage2D(...arguments)}catch(R){rt("WebGLState:",R)}}function de(){try{i.texSubImage3D(...arguments)}catch(R){rt("WebGLState:",R)}}function dt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){rt("WebGLState:",R)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(R){rt("WebGLState:",R)}}function Oe(){try{i.texStorage2D(...arguments)}catch(R){rt("WebGLState:",R)}}function b(){try{i.texStorage3D(...arguments)}catch(R){rt("WebGLState:",R)}}function v(){try{i.texImage2D(...arguments)}catch(R){rt("WebGLState:",R)}}function k(){try{i.texImage3D(...arguments)}catch(R){rt("WebGLState:",R)}}function ae(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function te(R,K){m[R]!==K&&(i.pixelStorei(R,K),m[R]=K)}function P(R){j.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function $(R){ve.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function H(R,K){let Y=c.get(K);Y===void 0&&(Y=new WeakMap,c.set(K,Y));let se=Y.get(R);se===void 0&&(se=i.getUniformBlockIndex(K,R.name),i.uniformBlockBinding(K,se,se),Y.set(R,se))}function G(R,K,Y){const oe=c.get(K).get(R);l[oe]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,Y),l[oe]=Y)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},ee=null,ie={},f={},l={},h=new WeakMap,_=[],E=null,d=!1,p=null,M=null,T=null,x=null,w=null,A=null,g=null,y=new $e(0,0,0),U=0,C=!1,D=null,z=null,Z=null,L=null,X=null,j.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Pe,bindFramebuffer:st,drawBuffers:Ue,useProgram:We,setBlending:he,setMaterial:ue,setFlipSided:ye,setCullFace:me,setLineWidth:Ge,setPolygonOffset:Re,setScissorTest:qe,activeTexture:Je,bindTexture:et,unbindTexture:I,compressedTexImage2D:pt,compressedTexImage3D:Xe,texImage2D:v,texImage3D:k,pixelStorei:te,getParameter:ae,updateUBOMapping:H,uniformBlockBinding:G,texStorage2D:Oe,texStorage3D:b,texSubImage2D:ot,texSubImage3D:de,compressedTexSubImage2D:dt,compressedTexSubImage3D:Fe,scissor:P,viewport:$,reset:re}}function fg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,m=new Set;let f;const h=new WeakMap,_=new Set,E=new FinalizationRegistry(b=>_.delete(b));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(b,v){return d?new OffscreenCanvas(b,v):Or("canvas")}function M(b,v,k){let ae=1;const te=Oe(b);if((te.width>k||te.height>k)&&(ae=k/Math.max(te.width,te.height)),ae<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const P=Math.floor(ae*te.width),$=Math.floor(ae*te.height);f===void 0&&(f=p(P,$));const H=v?p(P,$):f;return H.width=P,H.height=$,H.getContext("2d").drawImage(b,0,0,P,$),Be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+P+"x"+$+")."),H}else return"data"in b&&Be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function T(b){return b.generateMipmaps}function x(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(b,v,k,ae,te,P=!1){if(b!==null){if(i[b]!==void 0)return i[b];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $;ae&&($=e.get("EXT_texture_norm16"),$||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=v;if(v===i.RED&&(k===i.FLOAT&&(H=i.R32F),k===i.HALF_FLOAT&&(H=i.R16F),k===i.UNSIGNED_BYTE&&(H=i.R8),k===i.UNSIGNED_SHORT&&$&&(H=$.R16_EXT),k===i.SHORT&&$&&(H=$.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.R8UI),k===i.UNSIGNED_SHORT&&(H=i.R16UI),k===i.UNSIGNED_INT&&(H=i.R32UI),k===i.BYTE&&(H=i.R8I),k===i.SHORT&&(H=i.R16I),k===i.INT&&(H=i.R32I)),v===i.RG&&(k===i.FLOAT&&(H=i.RG32F),k===i.HALF_FLOAT&&(H=i.RG16F),k===i.UNSIGNED_BYTE&&(H=i.RG8),k===i.UNSIGNED_SHORT&&$&&(H=$.RG16_EXT),k===i.SHORT&&$&&(H=$.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.RG8UI),k===i.UNSIGNED_SHORT&&(H=i.RG16UI),k===i.UNSIGNED_INT&&(H=i.RG32UI),k===i.BYTE&&(H=i.RG8I),k===i.SHORT&&(H=i.RG16I),k===i.INT&&(H=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.RGB8UI),k===i.UNSIGNED_SHORT&&(H=i.RGB16UI),k===i.UNSIGNED_INT&&(H=i.RGB32UI),k===i.BYTE&&(H=i.RGB8I),k===i.SHORT&&(H=i.RGB16I),k===i.INT&&(H=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),k===i.UNSIGNED_INT&&(H=i.RGBA32UI),k===i.BYTE&&(H=i.RGBA8I),k===i.SHORT&&(H=i.RGBA16I),k===i.INT&&(H=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&$&&(H=$.RGB16_EXT),k===i.SHORT&&$&&(H=$.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),v===i.RGBA){const G=P?Fr:tt.getTransfer(te);k===i.FLOAT&&(H=i.RGBA32F),k===i.HALF_FLOAT&&(H=i.RGBA16F),k===i.UNSIGNED_BYTE&&(H=G===ct?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&$&&(H=$.RGBA16_EXT),k===i.SHORT&&$&&(H=$.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function g(b,v){let k;return b?v===null||v===hn||v===_i?k=i.DEPTH24_STENCIL8:v===on?k=i.DEPTH32F_STENCIL8:v===Hi&&(k=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hn||v===_i?k=i.DEPTH_COMPONENT24:v===on?k=i.DEPTH_COMPONENT32F:v===Hi&&(k=i.DEPTH_COMPONENT16),k}function y(b,v){return T(b)===!0||b.isFramebufferTexture&&b.minFilter!==wt&&b.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function U(b){const v=new WeakRef(b);n.get(b).__ref=v,_.add(v),E.register(b,v,v)}function C(b){const v=n.get(b).__ref;v!==void 0&&(_.delete(v),E.unregister(v))}function D(b){Z(b.target)}function z(b){L(b.target)}function Z(b){b.removeEventListener("dispose",D),C(b),B(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&m.delete(b)}function L(b){b.removeEventListener("dispose",z),C(b),Q(b)}function X(){for(const b of _){const v=b.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):Z(v))}_.clear(),m.clear()}function B(b){const v=n.get(b);if(v.__webglInit===void 0)return;const k=b.source,ae=h.get(k);if(ae){const te=ae[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(b),Object.keys(ae).length===0&&h.delete(k)}n.remove(b)}function F(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const k=b.source,ae=h.get(k);delete ae[v.__cacheKey],a.memory.textures--}function Q(b){const v=n.get(b);v.__depthDisposeCallback&&v.__depthDisposeCallback();const k=b.depthTexture;if(k&&k.renderTarget===b&&Z(k),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(v.__webglFramebuffer[te]))for(let P=0;P<v.__webglFramebuffer[te].length;P++)i.deleteFramebuffer(v.__webglFramebuffer[te][P]);else i.deleteFramebuffer(v.__webglFramebuffer[te]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[te])}else{if(Array.isArray(v.__webglFramebuffer))for(let te=0;te<v.__webglFramebuffer.length;te++)i.deleteFramebuffer(v.__webglFramebuffer[te]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let te=0;te<v.__webglColorRenderbuffer.length;te++)v.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[te]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ae=b.textures;for(let te=0,P=ae.length;te<P;te++){const $=n.get(ae[te]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(ae[te])}n.remove(b)}let q=0;function ee(){q=0}function ie(){return q}function Te(b){q=b}function Ie(){const b=q;return b>=r.maxTextures&&Be("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),q+=1,b}function j(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.mipmapsAutoUpdate),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ve(b,v){const k=n.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const ae=b.image;if(ae===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,b,v);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Ee(b,v){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){ue(k,b,v);return}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Ne(b,v){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){ue(k,b,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function pe(b,v){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ye(k,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const Pe={[Os]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Bs]:i.MIRRORED_REPEAT},st={[wt]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},Ue={[eu]:i.NEVER,[Ol]:i.ALWAYS,[tu]:i.LESS,[Ul]:i.LEQUAL,[nu]:i.EQUAL,[Fl]:i.GEQUAL,[iu]:i.GREATER,[ru]:i.NOTEQUAL};function We(b,v){if(v.type===on&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===Kr||v.magFilter===ji||v.magFilter===Un||v.minFilter===Gt||v.minFilter===Kr||v.minFilter===ji||v.minFilter===Un)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Pe[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Pe[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Pe[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,st[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wt||v.minFilter!==ji&&v.minFilter!==Un||v.type===on&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(b,v){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",D),U(v));const ae=v.source;let te=h.get(ae);te===void 0&&(te={},h.set(ae,te));const P=j(v);if(P!==b.__cacheKey){te[P]===void 0&&(te[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[P].usedTimes++;const $=te[b.__cacheKey];$!==void 0&&(te[b.__cacheKey].usedTimes--,$.usedTimes===0&&F(v)),b.__cacheKey=P,b.__webglTexture=te[P].texture}return k}function ne(b,v,k){return Math.floor(Math.floor(b/k)/v)}function he(b,v,k,ae){const P=b.updateRanges;if(P.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,ae,v.data);else{P.sort((R,K)=>R.start-K.start);let $=0;for(let R=1;R<P.length;R++){const K=P[$],Y=P[R],se=K.start+K.count,oe=ne(Y.start,v.width,4),ce=ne(K.start,v.width,4);Y.start<=se+1&&oe===ce&&ne(Y.start+Y.count-1,v.width,4)===oe?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++$,P[$]=Y)}P.length=$+1;const H=t.getParameter(i.UNPACK_ROW_LENGTH),G=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let R=0,K=P.length;R<K;R++){const Y=P[R],se=Math.floor(Y.start/4),oe=Math.ceil(Y.count/4),ce=se%v.width,Le=Math.floor(se/v.width),ze=oe,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(i.TEXTURE_2D,0,ce,Le,ze,le,k,ae,v.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,H),t.pixelStorei(i.UNPACK_SKIP_PIXELS,G),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function ue(b,v,k){let ae=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=i.TEXTURE_3D);const te=Ze(b,v),P=v.source;t.bindTexture(ae,b.__webglTexture,i.TEXTURE0+k);const $=n.get(P);if(P.version!==$.__version||te===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const le=tt.getPrimaries(tt.workingColorSpace),De=v.colorSpace===In?null:tt.getPrimaries(v.colorSpace),Ve=v.colorSpace===In||le===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let G=M(v.image,!1,r.maxTextureSize);G=Fe(v,G);const re=s.convert(v.format,v.colorSpace),R=s.convert(v.type);let K=A(v.internalFormat,re,R,v.normalized,v.colorSpace,v.isVideoTexture);We(ae,v);let Y;const se=v.mipmaps,oe=v.isVideoTexture!==!0,ce=$.__version===void 0||te===!0,Le=P.dataReady,ze=y(v,G);if(v.isDepthTexture)K=g(v.format===Fn,v.type),ce&&(oe?t.texStorage2D(i.TEXTURE_2D,1,K,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,K,G.width,G.height,0,re,R,null));else if(v.isDataTexture)if(se.length>0){oe&&ce&&t.texStorage2D(i.TEXTURE_2D,ze,K,se[0].width,se[0].height);for(let le=0,De=se.length;le<De;le++)Y=se[le],oe?Le&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Y.width,Y.height,re,R,Y.data):t.texImage2D(i.TEXTURE_2D,le,K,Y.width,Y.height,0,re,R,Y.data);v.generateMipmaps=!1}else oe?(ce&&t.texStorage2D(i.TEXTURE_2D,ze,K,G.width,G.height),Le&&he(v,G,re,R)):t.texImage2D(i.TEXTURE_2D,0,K,G.width,G.height,0,re,R,G.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,K,se[0].width,se[0].height,G.depth);for(let le=0,De=se.length;le<De;le++)if(Y=se[le],v.format!==ln)if(re!==null)if(oe){if(Le)if(v.layerUpdates.size>0){const Ve=Xo(Y.width,Y.height,v.format,v.type);for(const xe of v.layerUpdates){const lt=Y.data.subarray(xe*Ve/Y.data.BYTES_PER_ELEMENT,(xe+1)*Ve/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,xe,Y.width,Y.height,1,re,lt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,G.depth,re,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,K,Y.width,Y.height,G.depth,0,Y.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,G.depth,re,R,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,K,Y.width,Y.height,G.depth,0,re,R,Y.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{oe&&ce&&t.texStorage2D(i.TEXTURE_2D,ze,K,se[0].width,se[0].height);for(let le=0,De=se.length;le<De;le++)Y=se[le],v.format!==ln?re!==null?oe?Le&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Y.width,Y.height,re,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,le,K,Y.width,Y.height,0,Y.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Le&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Y.width,Y.height,re,R,Y.data):t.texImage2D(i.TEXTURE_2D,le,K,Y.width,Y.height,0,re,R,Y.data)}else if(v.isDataArrayTexture)if(oe){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,K,G.width,G.height,G.depth),Le)if(v.layerUpdates.size>0){const le=Xo(G.width,G.height,v.format,v.type);for(const De of v.layerUpdates){const Ve=G.data.subarray(De*le/G.data.BYTES_PER_ELEMENT,(De+1)*le/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,G.width,G.height,1,re,R,Ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,re,R,G.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,G.width,G.height,G.depth,0,re,R,G.data);else if(v.isData3DTexture)oe?(ce&&t.texStorage3D(i.TEXTURE_3D,ze,K,G.width,G.height,G.depth),Le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,re,R,G.data)):t.texImage3D(i.TEXTURE_3D,0,K,G.width,G.height,G.depth,0,re,R,G.data);else if(v.isFramebufferTexture){if(ce)if(oe)t.texStorage2D(i.TEXTURE_2D,ze,K,G.width,G.height);else{let le=G.width,De=G.height;for(let Ve=0;Ve<ze;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,K,le,De,0,re,R,null),le>>=1,De>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),G.parentNode!==le){le.appendChild(G),m.add(v),le.onpaint=De=>{const Ve=De.changedElements;for(const xe of m)Ve.includes(xe.image)&&(xe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,G);else{const Ve=i.RGBA,xe=i.RGBA,lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,xe,lt,G)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(se.length>0){if(oe&&ce){const le=Oe(se[0]);t.texStorage2D(i.TEXTURE_2D,ze,K,le.width,le.height)}for(let le=0,De=se.length;le<De;le++)Y=se[le],oe?Le&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,re,R,Y):t.texImage2D(i.TEXTURE_2D,le,K,re,R,Y);v.generateMipmaps=!1}else if(oe){if(ce){const le=Oe(G);t.texStorage2D(i.TEXTURE_2D,ze,K,le.width,le.height)}Le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,R,G)}else t.texImage2D(i.TEXTURE_2D,0,K,re,R,G);T(v)&&v.mipmapsAutoUpdate===!0&&x(ae),$.__version=P.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ye(b,v,k){if(v.image.length!==6)return;const ae=Ze(b,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const P=n.get(te);if(te.version!==P.__version||ae===!0){t.activeTexture(i.TEXTURE0+k);const $=tt.getPrimaries(tt.workingColorSpace),H=v.colorSpace===In?null:tt.getPrimaries(v.colorSpace),G=v.colorSpace===In||$===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const re=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,K=[];for(let xe=0;xe<6;xe++)!re&&!R?K[xe]=M(v.image[xe],!0,r.maxCubemapSize):K[xe]=R?v.image[xe].image:v.image[xe],K[xe]=Fe(v,K[xe]);const Y=K[0],se=s.convert(v.format,v.colorSpace),oe=s.convert(v.type);let ce=A(v.internalFormat,se,oe,v.normalized,v.colorSpace);const Le=v.isVideoTexture!==!0,ze=P.__version===void 0||ae===!0,le=te.dataReady;let De=y(v,Y);We(i.TEXTURE_CUBE_MAP,v);let Ve;if(v.isDepthTexture){if(ce=g(v.format===Fn,v.type),ze)if(Le)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ce,Y.width,Y.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,Y.width,Y.height,0,se,oe,null)}else if(re){Le&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ce,Y.width,Y.height);for(let xe=0;xe<6;xe++){Ve=K[xe].mipmaps;for(let lt=0;lt<Ve.length;lt++){const Et=Ve[lt];v.format!==ln?se!==null?Le?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,0,0,Et.width,Et.height,se,Et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,ce,Et.width,Et.height,0,Et.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,0,0,Et.width,Et.height,se,oe,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,ce,Et.width,Et.height,0,se,oe,Et.data)}}}else{if(Ve=v.mipmaps,Le&&ze){Ve.length>0&&De++;const xe=Oe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ce,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(R){Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,K[xe].width,K[xe].height,se,oe,K[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,K[xe].width,K[xe].height,0,se,oe,K[xe].data);for(let lt=0;lt<Ve.length;lt++){const bn=Ve[lt].image[xe].image;Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,0,0,bn.width,bn.height,se,oe,bn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,ce,bn.width,bn.height,0,se,oe,bn.data)}}else{Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,se,oe,K[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,se,oe,K[xe]);for(let lt=0;lt<Ve.length;lt++){const Et=Ve[lt];Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,0,0,se,oe,Et.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,ce,se,oe,Et.image[xe])}}}T(v)&&v.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),P.__version=te.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function me(b,v,k,ae,te,P){const $=s.convert(k.format,k.colorSpace),H=s.convert(k.type),G=A(k.internalFormat,$,H,k.normalized,k.colorSpace),re=n.get(v),R=n.get(k);if(R.__renderTarget=v,!re.__hasExternalTextures){const K=Math.max(1,v.width>>P),Y=Math.max(1,v.height>>P);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,P,G,K,Y,v.depth,0,$,H,null):t.texImage2D(te,P,G,K,Y,0,$,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,te,R.__webglTexture,0,ot(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,te,R.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(b,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const ae=v.depthTexture,te=ae&&ae.isDepthTexture?ae.type:null,P=g(v.stencilBuffer,te),$=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(v),P,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(v),P,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,P,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,b)}else{const ae=v.textures;for(let te=0;te<ae.length;te++){const P=ae[te],$=s.convert(P.format,P.colorSpace),H=s.convert(P.type),G=A(P.internalFormat,$,H,P.normalized,P.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(v),G,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(v),G,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,G,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(b,v,k){const ae=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(v.depthTexture);te.__renderTarget=v;const P=ae?v.depthTexture.image[0]:v.depthTexture.image;(!te.__webglTexture||P.width!==v.width||P.height!==v.height)&&(P.width=v.width,P.height=v.height,v.depthTexture.needsUpdate=!0),ae?pe(v.depthTexture,0):ve(v.depthTexture,0);const $=te.__webglTexture,H=ot(v),G=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,re=v.depthTexture.format===Fn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===On)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,G,$,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,re,G,$,0);else if(v.depthTexture.format===Fn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,G,$,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,re,G,$,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(b){const v=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const ae=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ae){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ae.removeEventListener("dispose",te)};ae.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=ae}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let ae=0;ae<6;ae++)Re(v.__webglFramebuffer[ae],b,ae);else b.texture.mipmaps.length>0?Re(v.__webglFramebuffer[0],b,0):Re(v.__webglFramebuffer,b,0);else if(k){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]===void 0)v.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ge(v.__webglDepthbuffer[ae],b,!1);else{const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=v.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,P)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ge(v.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,P)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(b,v,k){const ae=n.get(b);v!==void 0&&me(ae.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&qe(b)}function et(b){const v=b.texture,k=n.get(b),ae=n.get(v);b.addEventListener("dispose",z),U(b);const te=b.textures,P=b.isWebGLCubeRenderTarget===!0,$=te.length>1;if($||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=v.version,a.memory.textures++),P){k.__webglFramebuffer=[];for(let H=0;H<6;H++)if(v.mipmaps.length>0){k.__webglFramebuffer[H]=[];for(let G=0;G<v.mipmaps.length;G++)k.__webglFramebuffer[H][G]=i.createFramebuffer()}else k.__webglFramebuffer[H]=i.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let H=0;H<v.mipmaps.length;H++)k.__webglFramebuffer[H]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if($)for(let H=0,G=te.length;H<G;H++){const re=n.get(te[H]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&de(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let H=0;H<te.length;H++){const G=te[H];k.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[H]);const re=s.convert(G.format,G.colorSpace),R=s.convert(G.type),K=A(G.internalFormat,re,R,G.normalized,G.colorSpace,b.isXRRenderTarget===!0),Y=ot(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,k.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),We(i.TEXTURE_CUBE_MAP,v);for(let H=0;H<6;H++)if(v.mipmaps.length>0)for(let G=0;G<v.mipmaps.length;G++)me(k.__webglFramebuffer[H][G],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,G);else me(k.__webglFramebuffer[H],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);T(v)?x(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if($){for(let H=0,G=te.length;H<G;H++){const re=te[H],R=n.get(re);let K=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,R.__webglTexture),We(K,re),me(k.__webglFramebuffer,b,re,i.COLOR_ATTACHMENT0+H,K,0),T(re)&&x(K)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(H=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,ae.__webglTexture),We(H,v),v.mipmaps.length>0)for(let G=0;G<v.mipmaps.length;G++)me(k.__webglFramebuffer[G],b,v,i.COLOR_ATTACHMENT0,H,G);else me(k.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,H,0);T(v)?x(H):v.mipmaps.length>0&&i.texParameteri(H,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&qe(b)}function I(b){const v=b.textures;for(let k=0,ae=v.length;k<ae;k++){const te=v[k];if(T(te)&&te.mipmapsAutoUpdate===!0){const P=w(b),$=n.get(te).__webglTexture;t.bindTexture(P,$),x(P),t.unbindTexture()}}}const pt=[];function Xe(b){if(b.samples>0){if(de(b)===!1){const v=b.textures,k=b.width,ae=b.height;let te=i.COLOR_BUFFER_BIT;const P=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(b),H=v.length>1;if(H)for(let re=0;re<v.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let re=0;re<v.length;re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[re]);const R=n.get(v[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,k,ae,0,0,k,ae,te,i.NEAREST),l===!0&&(pt.length=0,pt.push(i.COLOR_ATTACHMENT0+re),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&pt.push(P),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let re=0;re<v.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,$.__webglColorRenderbuffer[re]);const R=n.get(v[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ot(b){return Math.min(r.maxSamples,b.samples)}function de(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function dt(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Fe(b,v){const k=b.colorSpace,ae=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Ur&&k!==In&&(tt.getTransfer(k)===ct?(ae!==ln||te!==Wt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",k)),v}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=ee,this.getTextureUnits=ie,this.setTextureUnits=Te,this.setTexture2D=ve,this.setTexture2DArray=Ee,this.setTexture3D=Ne,this.setTextureCube=pe,this.rebindTextures=Je,this.setupRenderTarget=et,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de,this.dispose=X}function dg(i,e){function t(n,r=In){let s;const a=tt.getTransfer(r);if(n===Wt)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Dl)return i.ALPHA;if(n===Nl)return i.RGB;if(n===ln)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===Fn)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===Na)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===br||n===wr||n===Rr||n===Cr)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zs||n===Gs||n===Hs||n===Vs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ks||n===Ws||n===Xs||n===qs||n===Ys||n===Nr||n===Zs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ks||n===Ws)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xs)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qs)return s.COMPRESSED_R11_EAC;if(n===Ys)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return s.COMPRESSED_RG11_EAC;if(n===Zs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Js||n===Ks||n===$s||n===Qs||n===js||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Js)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$s)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qs)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===js)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===ua||n===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===da||n===Ir||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends jn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,f=null,h=null,_=null;const E=typeof XRWebGLBinding<"u",d=new gg,p={},M=t.getContextAttributes();let T=null,x=null;const w=[],A=[],g=new fe;let y=null,U=null;const C=new Zt;C.viewport=new gt;const D=new Zt;D.viewport=new gt;const z=[C,D],Z=new Rh;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ve=w[j];return ve===void 0&&(ve=new ss,w[j]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(j){let ve=w[j];return ve===void 0&&(ve=new ss,w[j]=ve),ve.getGripSpace()},this.getHand=function(j){let ve=w[j];return ve===void 0&&(ve=new ss,w[j]=ve),ve.getHandSpace()};function B(j){const ve=A.indexOf(j.inputSource);if(ve===-1)return;const Ee=w[ve];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,c||a),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",Q);for(let j=0;j<w.length;j++){const ve=A[j];ve!==null&&(A[j]=null,w[j].disconnect(ve))}L=null,X=null,d.reset();for(const j in p)delete p[j];if(e.setRenderTarget(T),h=null,f=null,m=null,r=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),U!==null){const j=U.camera;j.fov=U.fov,j.zoom=U.zoom,j.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",F),r.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ne=null,pe=null;M.depth&&(pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?Fn:On,Ne=M.stencil?_i:hn);const Pe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new un(f.textureWidth,f.textureHeight,{format:ln,type:Wt,depthTexture:new vi(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new un(h.framebufferWidth,h.framebufferHeight,{format:ln,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function Q(j){for(let ve=0;ve<j.removed.length;ve++){const Ee=j.removed[ve],Ne=A.indexOf(Ee);Ne>=0&&(A[Ne]=null,w[Ne].disconnect(Ee))}for(let ve=0;ve<j.added.length;ve++){const Ee=j.added[ve];let Ne=A.indexOf(Ee);if(Ne===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=A.length){A.push(Ee),Ne=Pe;break}else if(A[Pe]===null){A[Pe]=Ee,Ne=Pe;break}if(Ne===-1)break}const pe=w[Ne];pe&&pe.connect(Ee)}}function q(j,ve){ve===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ve.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ve=j.near,Ee=j.far;d.texture!==null&&(d.depthNear>0&&(ve=d.depthNear),d.depthFar>0&&(Ee=d.depthFar)),Z.near=D.near=C.near=ve,Z.far=D.far=C.far=Ee,(L!==Z.near||X!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),L=Z.near,X=Z.far),Z.layers.mask=j.layers.mask|6,C.layers.mask=Z.layers.mask&-5,D.layers.mask=Z.layers.mask&-3;const Ne=j.parent,pe=Z.cameras;q(Z,Ne);for(let Pe=0;Pe<pe.length;Pe++)q(pe[Pe],Ne);Z.projectionMatrix.copy(C.projectionMatrix),Z.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&j.isPerspectiveCamera&&(U={camera:j,fov:j.fov,zoom:j.zoom}),ee(j,Z,Ne)};function ee(j,ve,Ee){Ee===null?j.matrix.copy(ve.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ve.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ve.projectionMatrix),j.projectionMatrixInverse.copy(ve.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ga*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(Z)},this.getCameraTexture=function(j){return p[j]};let ie=null;function Te(j,ve){if(u=ve.getViewerPose(c||a),_=ve,u!==null){const Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ne=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,Ne=!0);for(let Ue=0;Ue<Ee.length;Ue++){const We=Ee[Ue];let Ze=null;if(h!==null)Ze=h.getViewport(We);else{const he=m.getViewSubImage(f,We);Ze=he.viewport,Ue===0&&(e.setRenderTargetTextures(x,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(x))}let ne=z[Ue];ne===void 0&&(ne=new Zt,ne.layers.enable(Ue),ne.viewport=new gt,z[Ue]=ne),ne.matrix.fromArray(We.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(We.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ue===0&&(Z.matrix.copy(ne.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ne===!0&&Z.cameras.push(ne)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=n.getBinding();const Ue=m.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&d.init(Ue,r.renderState)}if(pe&&pe.includes("camera-access")&&E){e.state.unbindTexture(),m=n.getBinding();for(let Ue=0;Ue<Ee.length;Ue++){const We=Ee[Ue].camera;if(We){let Ze=p[We];Ze||(Ze=new ql,p[We]=Ze);const ne=m.getCameraImage(We);Ze.sourceTexture=ne}}}}for(let Ee=0;Ee<w.length;Ee++){const Ne=A[Ee],pe=w[Ee];Ne!==null&&pe!==void 0&&pe.update(Ne,ve,c||a)}ie&&ie(j,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),_=null}const Ie=new sc;Ie.setAnimationLoop(Te),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}const vg=new ut,mc=new He;mc.set(-1,0,0,0,1,0,0,0,1);function xg(i,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,tc(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,M,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(d,p):p.isMeshLambertMaterial?(s(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(d,p),m(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,x)):p.isMeshMatcapMaterial?(s(d,p),_(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),E(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,M,T):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ht&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ht&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,x=M.envMapRotation;T&&(d.envMap.value=T,d.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(mc),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,M,T){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=T*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function m(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,M){d.ior.value=p.ior,p.diffuseRoughness>0&&(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function E(d,p){const M=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Mg(i,e,t,n){let r={},s={};function a(M,T){const x=T.program;n.uniformBlockBinding(M,x,r[M.id])}function o(M,T){let x=r[M.id];x===void 0&&(_(M),x=l(M),r[M.id]=x,M.addEventListener("dispose",d));const w=T.program;n.updateUBOMapping(M,w);const A=e.render.frame;s[M.id]!==A&&(c(M),s[M.id]=A)}function l(M){const T=i.createBuffer(),x=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,x,w),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){const T=r[M.id],x=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,g=x.length;A<g;A++){const y=x[A];if(Array.isArray(y))for(let U=0,C=y.length;U<C;U++)u(y[U],A,U,w);else u(y,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,T,x,w){if(f(M,T,x,w)===!0){const A=M.__offset,g=M.value;if(Array.isArray(g)){let y=0;for(let U=0;U<g.length;U++){const C=g[U],D=E(C,!0);m(C,M.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function m(M,T,x){typeof M=="number"||typeof M=="boolean"?T[x]=M:M.isMatrix3?(T[x]=M.elements[0],T[x+1]=M.elements[1],T[x+2]=M.elements[2],T[x+3]=0,T[x+4]=M.elements[3],T[x+5]=M.elements[4],T[x+6]=M.elements[5],T[x+7]=0,T[x+8]=M.elements[6],T[x+9]=M.elements[7],T[x+10]=M.elements[8],T[x+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-x),x):M.toArray(T,x)}function f(M,T,x,w){const A=M.value,g=T+"_"+x;if(Array.isArray(A)){w[g]===void 0&&(w[g]=[]);const y=w[g];let U=!1;for(let C=0;C<A.length;C++)h(A[C],y,C)===!0&&(U=!0);return U}return h(A,w,g)}function h(M,T,x){if(T[x]===void 0)return typeof M=="number"||typeof M=="boolean"?T[x]=M:ArrayBuffer.isView(M)?T[x]=M.slice():T[x]=M.clone(),!0;{const w=T[x];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return T[x]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function _(M){const T=M.uniforms;let x=0;const w=16;for(let g=0,y=T.length;g<y;g++){const U=Array.isArray(T[g])?T[g]:[T[g]];for(let C=0,D=U.length;C<D;C++){const z=U[C],Z=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(T[g])||Array.isArray(z.value);let X=x;for(let F=0,Q=Z.length;F<Q;F++){const q=Z[F],ee=E(q,L),ie=x%w,Te=ie%ee.boundary,Ie=ie+Te;x+=Te,Ie!==0&&w-Ie<ee.storage&&(x+=w-Ie),F===0&&(X=x),x+=ee.storage}const B=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new B((x-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}const A=x%w;return A>0&&(x+=w-A),M.__size=x,M.__cache={},this}function E(M,T){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=16,x.storage=48):M.isMatrix4?(x.boundary=16,x.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(x.boundary=16,x.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function d(M){const T=M.target;T.removeEventListener("dispose",d),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:o,dispose:p}}const Sg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function yg(){return nn===null&&(nn=new Fu(Sg,16,16,$n,fn),nn.name="DFG_LUT",nn.minFilter=Gt,nn.magFilter=Gt,nn.wrapS=yn,nn.wrapT=yn,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class Eg{constructor(e={}){const{canvas:t=ou(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Wt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const E=h,d=new Set([Ia,Na,Da]),p=new Set([Wt,hn,Hi,_i,Pa,La]),M=new Uint32Array(4),T=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]};let w=null,A=null;const g=[],y=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,z=null,Z=null,L=null,X=null;this._outputColorSpace=Yt;let B=0,F=0,Q=null,q=-1,ee=null;const ie=new gt,Te=new gt;let Ie=null;const j=new $e(0);let ve=0,Ee=t.width,Ne=t.height,pe=1,Pe=null,st=null;const Ue=new gt(0,0,Ee,Ne),We=new gt(0,0,Ee,Ne);let Ze=!1;const ne=new ki,he=new Ba;let ue=!1,ye=!1;const me=new ut,Ge=new O,Re=new gt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function et(){return Q===null?pe:1}let I=n;function pt(S,N){return t.getContext(S,N)}let Xe,ot,de,dt,Fe,Oe,b,v,k,ae,te,P,$,H,G,re,R,K,Y,se,oe,ce,Le;try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),I===null){const N="webgl2";if(I=pt(N,S),I===null)throw pt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(S){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),rt("WebGLRenderer: "+S.message),S}function ze(){Xe=new bp(I),Xe.init(),oe=new dg(I,Xe),ot=new mp(I,Xe,e,oe),de=new hg(I,Xe),ot.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),Z=I.createFramebuffer(),L=I.createFramebuffer(),X=I.createFramebuffer(),dt=new Cp(I),Fe=new $m,Oe=new fg(I,Xe,de,Fe,ot,oe,dt),b=new Ap(C),v=new Ph(I),ce=new dp(I,v),k=new wp(I,v,dt,ce),ae=new Lp(I,k,v,ce,dt),K=new Pp(I,ot,Oe),G=new gp(Fe),te=new Km(C,b,Xe,ot,ce,G),P=new xg(C,Fe),$=new jm,H=new sg(Xe),R=new fp(C,b,de,ae,_,l),re=new ug(C,ae,ot),Le=new Mg(I,dt,ot,de),Y=new pp(I,Xe,dt),se=new Rp(I,Xe,dt),dt.programs=te.programs,C.capabilities=ot,C.extensions=Xe,C.properties=Fe,C.renderLists=$,C.shadowMap=re,C.state=de,C.info=dt}E!==Wt&&(U=new Np(E,t.width,t.height,o,r,s));const le=new _g(C,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(S){S!==void 0&&(pe=S,this.setSize(Ee,Ne,!1))},this.getSize=function(S){return S.set(Ee,Ne)},this.setSize=function(S,N,J=!0){if(le.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=S,Ne=N,t.width=Math.floor(S*pe),t.height=Math.floor(N*pe),J===!0&&(t.style.width=S+"px",t.style.height=N+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Ee*pe,Ne*pe).floor()},this.setDrawingBufferSize=function(S,N,J){Ee=S,Ne=N,pe=J,t.width=Math.floor(S*J),t.height=Math.floor(N*J),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(E===Wt){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(Ue)},this.setViewport=function(S,N,J,V){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,N,J,V),de.viewport(ie.copy(Ue).multiplyScalar(et()).round())},this.getScissor=function(S){return S.copy(We)},this.setScissor=function(S,N,J,V){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,N,J,V),de.scissor(Te.copy(We).multiplyScalar(et()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){de.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){Pe=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,J=!0){let V=0;if(S){let W=!1;if(Q!==null){const _e=Q.texture.format;W=d.has(_e)}if(W){const _e=Q.texture.type,Ae=p.has(_e),ge=R.getClearColor(),Se=R.getClearAlpha(),Ce=ge.r,ke=ge.g,Qe=ge.b;Ae?(M[0]=Ce,M[1]=ke,M[2]=Qe,M[3]=Se,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=Ce,T[1]=ke,T[2]=Qe,T[3]=Se,I.clearBufferiv(I.COLOR,0,T))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),R.dispose(),$.dispose(),H.dispose(),Oe.dispose(),Fe.dispose(),b.dispose(),ae.dispose(),k.dispose(),ce.dispose(),Le.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",ja),le.removeEventListener("sessionend",eo),Gn.stop()};function De(S){S.preventDefault(),_o("WebGLRenderer: Context Lost."),D=!0}function Ve(){_o("WebGLRenderer: Context Restored."),D=!1;const S=dt.autoReset,N=re.enabled,J=re.autoUpdate,V=re.needsUpdate,W=re.type;ze(),dt.autoReset=S,re.enabled=N,re.autoUpdate=J,re.needsUpdate=V,re.type=W}function xe(S){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){const N=S.target;N.removeEventListener("dispose",lt),Et(N)}function Et(S){bn(S),Fe.remove(S)}function bn(S){const N=Fe.get(S).programs;N!==void 0&&(N.forEach(function(J){te.releaseProgram(J)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,J,V,W,_e){N===null&&(N=qe);const Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,ge=Sc(S,N,J,V,W);de.setMaterial(V,Ae);let Se=J.index,Ce=1;if(V.wireframe===!0){if(Se=k.getWireframeAttribute(J),Se===void 0)return;Ce=2}const ke=J.drawRange,Qe=J.attributes.position;let be=ke.start*Ce,je=(ke.start+ke.count)*Ce;_e!==null&&(be=Math.max(be,_e.start*Ce),je=Math.min(je,(_e.start+_e.count)*Ce)),Se!==null?(be=Math.max(be,0),je=Math.min(je,Se.count)):Qe!=null&&(be=Math.max(be,0),je=Math.min(je,Qe.count));const xt=je-be;if(xt<0||xt===1/0)return;ce.setup(W,V,ge,J,Se);let ft,ht=Y;if(Se!==null&&(ft=v.get(Se),ht=se,ht.setIndex(ft)),W.isMesh)V.wireframe===!0?(de.setLineWidth(V.wireframeLinewidth*et()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(W.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),de.setLineWidth(Ct*et()),W.isLineSegments?ht.setMode(I.LINES):W.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else W.isPoints?ht.setMode(I.POINTS):W.isSprite&&ht.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ct=W._multiDrawStarts,we=W._multiDrawCounts,Ut=W._multiDrawCount,at=Se?v.get(Se).bytesPerElement:1,Hn=Fe.get(V).currentProgram.getUniforms();for(let Pt=0;Pt<Ut;Pt++)Hn.setValue(I,"_gl_DrawID",Pt),ht.render(Ct[Pt]/at,we[Pt])}else if(W.isInstancedMesh)ht.renderInstances(be,xt,W.count);else if(J.isInstancedBufferGeometry){const Ct=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,we=Math.min(J.instanceCount,Ct);ht.renderInstances(be,xt,we)}else ht.render(be,xt)};function Qa(S,N,J,V){z!==null&&S.isNodeMaterial&&z.setObject(V,S),ue===!0&&G.setState(S,J,!1),S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Ai(S,N,V),S.side=Kn,S.needsUpdate=!0,Ai(S,N,V),S.side=an):Ai(S,N,V)}this.compile=function(S,N,J=null){J===null&&(J=S),z!==null&&z.renderStart(S,N,J),A=H.get(J),A.init(N),y.push(A),J.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),S!==J&&S.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),ye=this.localClippingEnabled,ue=G.init(this.clippingPlanes,ye),ue===!0&&G.setGlobalState(this.clippingPlanes,N),z!==null&&re.render(A.state.shadowsArray,J,N);const V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _e=W.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const ge=_e[Ae];Qa(ge,J,N,W),V.add(ge)}else Qa(_e,J,N,W),V.add(_e)}),A=y.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(S,N,J=null){const V=this.compile(S,N,J);return new Promise(W=>{function _e(){if(V.forEach(function(Ae){const Se=Fe.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&V.delete(Ae)}),V.size===0){W(S);return}setTimeout(_e,10)}Xe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let qr=null;function xc(S){qr&&qr(S)}function ja(){Gn.stop()}function eo(){Gn.start()}const Gn=new sc;Gn.setAnimationLoop(xc),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(S){qr=S,le.setAnimationLoop(S),S===null?Gn.stop():Gn.start()},le.addEventListener("sessionstart",ja),le.addEventListener("sessionend",eo),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(S,N);const J=le.enabled===!0&&le.isPresenting===!0,V=U!==null&&(Q===null||J)&&U.begin(C,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,Q),A=H.get(S,y.length),A.init(N),A.state.textureUnits=Oe.getTextureUnits(),y.push(A),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?he.setFromArrayCamera(N):ne.setFromProjectionMatrix(me,en,N.reversedDepth),ye=this.localClippingEnabled,ue=G.init(this.clippingPlanes,ye),w=$.get(S,g.length),w.init(),g.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Yr(Ae,N,-1/0,C.sortObjects)}Yr(S,N,0,C.sortObjects),w.finish(),z!==null&&z.updateLights(A.state.lightsArray),C.sortObjects===!0&&w.sort(Pe,st),Je=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Je&&R.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),ue===!0&&G.beginShadows();const W=A.state.shadowsArray;if(re.render(W,S,N),ue===!0&&G.endShadows(),(V&&U.hasRenderPass())===!1){const Ae=w.opaque,ge=w.transmissive;if(A.setupLights(),N.isArrayCamera){const Se=N.cameras;if(ge.length>0)for(let Ce=0,ke=Se.length;Ce<ke;Ce++){const Qe=Se[Ce];no(Ae,ge,S,Qe)}Je&&R.render(S);for(let Ce=0,ke=Se.length;Ce<ke;Ce++){const Qe=Se[Ce];to(w,S,Qe,Qe.viewport)}}else ge.length>0&&no(Ae,ge,S,N),Je&&R.render(S),to(w,S,N)}Q!==null&&F===0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q)),V&&U.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),ce.resetDefaultState(),q=-1,ee=null,y.pop(),y.length>0?(A=y[y.length-1],Oe.setTextureUnits(A.state.textureUnits),ue===!0&&G.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,z!==null&&z.renderEnd()};function Yr(S,N,J,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){const Ae=N.isArrayCamera?he:ne;if(!S.frustumCulled||S.intersectsFrustum(Ae)){V&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const ge=ae.update(S),Se=S.material;Se.visible&&w.push(S,ge,Se,J,Re.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){const Ae=N.isArrayCamera?he:ne;if(!S.frustumCulled||S.intersectsFrustum(Ae)){const ge=ae.update(S),Se=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Re.copy(ge.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const Ce=ge.groups;for(let ke=0,Qe=Ce.length;ke<Qe;ke++){const be=Ce[ke],je=Se[be.materialIndex];je&&je.visible&&w.push(S,ge,je,J,Re.z,be,N)}}else Se.visible&&w.push(S,ge,Se,J,Re.z,null,N)}}}const _e=S.children;for(let Ae=0,ge=_e.length;Ae<ge;Ae++)Yr(_e[Ae],N,J,V)}function to(S,N,J,V){const{opaque:W,transmissive:_e,transparent:Ae}=S;A.setupLightsView(J),ue===!0&&G.setGlobalState(C.clippingPlanes,J),V&&de.viewport(ie.copy(V)),W.length>0&&$i(W,N,J),_e.length>0&&$i(_e,N,J),Ae.length>0&&$i(Ae,N,J),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function no(S,N,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const be=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new un(1,1,{generateMipmaps:!0,type:be?fn:Wt,minFilter:Un,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const _e=A.state.transmissionRenderTarget[V.id],Ae=V.viewport||ie;_e.setSize(Ae.z*C.transmissionResolutionScale,Ae.w*C.transmissionResolutionScale);const ge=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(_e),C.getClearColor(j),ve=C.getClearAlpha(),ve<1&&C.setClearColor(16777215,.5),C.clear(),Je&&R.render(J);const ke=C.toneMapping;C.toneMapping=En;const Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),ue===!0&&G.setGlobalState(C.clippingPlanes,V),$i(S,J,V),Oe.updateMultisampleRenderTarget(_e),Oe.updateRenderTargetMipmap(_e),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let je=0,xt=N.length;je<xt;je++){const ft=N[je],{object:ht,geometry:Ct,material:we,group:Ut}=ft;if(we.side===an&&ht.layers.test(V.layers)){const at=we.side;we.side=Ht,we.needsUpdate=!0,io(ht,J,V,Ct,we,Ut),we.side=at,we.needsUpdate=!0,be=!0}}be===!0&&(Oe.updateMultisampleRenderTarget(_e),Oe.updateRenderTargetMipmap(_e))}C.setRenderTarget(ge,Se,Ce),C.setClearColor(j,ve),Qe!==void 0&&(V.viewport=Qe),C.toneMapping=ke}function $i(S,N,J){const V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,_e=S.length;W<_e;W++){const Ae=S[W],{object:ge,geometry:Se,group:Ce}=Ae;let ke=Ae.material;ke.allowOverride===!0&&V!==null&&(ke=V),ge.layers.test(J.layers)&&io(ge,N,J,Se,ke,Ce)}}function io(S,N,J,V,W,_e){z!==null&&W.isNodeMaterial&&z.setObject(S,W),S.onBeforeRender(C,N,J,V,W,_e),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(C,N,J,V,S,_e),W.transparent===!0&&W.side===an&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,C.renderBufferDirect(J,N,V,W,S,_e),W.side=Kn,W.needsUpdate=!0,C.renderBufferDirect(J,N,V,W,S,_e),W.side=an):C.renderBufferDirect(J,N,V,W,S,_e),S.onAfterRender(C,N,J,V,W,_e)}function ro(S){let N=0;for(const J of S)J.texture!==null&&N++;return N}function Ai(S,N,J){N.isScene!==!0&&(N=qe);const V=Fe.get(S),W=A.state.lights,_e=A.state.shadowsArray,Ae=W.state.version,ge=te.getParameters(S,W.state,_e,N,J,A.state.lightProbeGridArray),Se=te.getProgramCacheKey(ge);let Ce=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=b.get(S.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",lt),Ce=new Map,V.programs=Ce,V.programVariants=new Map);let Qe=Ce.get(Se);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Ae)return ao(S,ge),Qe}else ge.uniforms=te.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,J,ge),S.onBeforeCompile(ge,C),Qe=te.acquireProgram(ge,Se),Ce.set(Se,Qe),V.uniforms=ge.uniforms;const be=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=G.uniform),ao(S,ge),V.needsLights=Ec(S),V.lightsStateVersion=Ae,V.needsLights&&(be.ambientLightColor.value=W.state.ambient,be.lightProbe.value=W.state.probe,be.sunLights.value=W.state.sun,be.sunLightShadows.value=W.state.sunShadow,be.directionalLights.value=W.state.directional,be.directionalLightShadows.value=W.state.directionalShadow,be.spotLights.value=W.state.spot,be.spotLightShadows.value=W.state.spotShadow,be.rectAreaLights.value=W.state.rectArea,be.ltc_1.value=W.state.rectAreaLTC1,be.ltc_2.value=W.state.rectAreaLTC2,be.pointLights.value=W.state.point,be.pointLightShadows.value=W.state.pointShadow,be.hemisphereLights.value=W.state.hemi,be.sunShadowMatrix.value=W.state.sunShadowMatrix,be.sunShadowCascade.value=W.state.sunShadowCascade,be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,be.spotLightMatrix.value=W.state.spotLightMatrix,be.spotLightMap.value=W.state.spotLightMap,be.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=ro(A.state.lightProbeGridArray),V.currentProgram=Qe,V.uniformsList=null,Qe}function Mc(S,N,J,V,W){const _e=Fe.get(S),Ae=_e.currentProgram.id+","+V+","+W;let ge=_e.programVariants.get(Ae);return ge===void 0?(ge=Ai(S,N,J),_e.programVariants.set(Ae,ge)):(_e.currentProgram=ge,_e.uniformsList=null,_e.outputColorSpace=V,_e.toneMapping=W),ge}function so(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Lr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ao(S,N){const J=Fe.get(S);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function Sc(S,N,J,V,W){N.isScene!==!0&&(N=qe),Oe.resetTextureUnits();const _e=N.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,ge=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:tt.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=b.get(V.envMap||Ae,Se),ke=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!J.morphAttributes.position,je=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color;let ft=En;V.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ft=C.toneMapping);const ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ct=ht!==void 0?ht.length:0,we=Fe.get(V),Ut=A.state.lights;if(ue===!0&&(ye===!0||S!==ee)){const mt=S===ee&&V.id===q;G.setState(V,S,mt)}let at=!1,Hn=!1;V.version===we.__version?we.needsLights&&we.lightsStateVersion!==Ut.state.version||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ce||V.fog===!0&&we.fog!==_e||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==G.numPlanes||we.numIntersection!==G.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==Qe||we.morphTargets!==be||we.morphNormals!==je||we.morphColors!==xt||we.morphTargetsCount!==Ct||we.numLightProbeGrids!==ro(A.state.lightProbeGridArray)?at=!0:(we.outputColorSpace!==ge||we.toneMapping!==ft)&&(Hn=!0):(at=!0,we.__version=V.version);let Pt=we.currentProgram;(at===!0||Hn===!0)&&(Pt=Hn===!0?Mc(V,N,W,ge,ft):Ai(V,N,W),z&&V.isNodeMaterial&&z.onUpdateProgram(V,Pt,we));let Qi=!1,wn=!1,Vn=!1;const nt=Pt.getUniforms(),bt=we.uniforms;if(de.useProgram(Pt.program)&&(Qi=!0,wn=!0,Vn=!0),V.id!==q&&(q=V.id,wn=!0),Qi||ee!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),nt.setValue(I,"projectionMatrix",S.projectionMatrix),nt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Tt=nt.map.cameraPosition;Tt!==void 0&&Tt.setValue(I,Ge.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&nt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&nt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,wn=!0,Vn=!0)}if(we.needsLights&&(Ut.state.sunShadowMap.length>0&&nt.setValue(I,"sunShadowMap",Ut.state.sunShadowMap,Oe),Ut.state.directionalShadowMap.length>0&&nt.setValue(I,"directionalShadowMap",Ut.state.directionalShadowMap,Oe),Ut.state.spotShadowMap.length>0&&nt.setValue(I,"spotShadowMap",Ut.state.spotShadowMap,Oe),Ut.state.pointShadowMap.length>0&&nt.setValue(I,"pointShadowMap",Ut.state.pointShadowMap,Oe)),W.isSkinnedMesh){nt.setOptional(I,W,"bindMatrix"),nt.setOptional(I,W,"bindMatrixInverse");const mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),nt.setValue(I,"boneTexture",mt.boneTexture,Oe))}W.isBatchedMesh&&(nt.setOptional(I,W,"batchingTexture"),nt.setValue(I,"batchingTexture",W._matricesTexture,Oe),nt.setOptional(I,W,"batchingIdTexture"),nt.setValue(I,"batchingIdTexture",W._indirectTexture,Oe),nt.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&nt.setValue(I,"batchingColorTexture",W._colorsTexture,Oe));const Jt=J.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&K.update(W,J,Pt),(wn||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,nt.setValue(I,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(bt.envMapIntensity.value=N.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=yg()),wn){if(nt.setValue(I,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&yc(bt,Vn),_e&&V.fog===!0&&P.refreshFogUniforms(bt,_e),P.refreshMaterialUniforms(bt,V,pe,Ne,A.state.transmissionRenderTarget[S.id]),we.needsLights&&we.numLightProbeGrids>0){const mt=x;let Tt=0;for(const pn of A.state.lightProbeGridArray)pn.texture!==null&&(mt.textures[Tt]=pn.texture,mt.min[Tt]=pn.boundingBox.min,mt.max[Tt]=pn.boundingBox.max,mt.resolution[Tt]=pn.resolution,Tt++);for(const pn in mt)mt[pn].length=Tt;bt.probesSH.value=mt.textures,bt.probesMin.value=mt.min,bt.probesMax.value=mt.max,bt.probesResolution.value=mt.resolution}Lr.upload(I,so(we),bt,Oe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Lr.upload(I,so(we),bt,Oe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&nt.setValue(I,"center",W.center),nt.setValue(I,"modelViewMatrix",W.modelViewMatrix),nt.setValue(I,"normalMatrix",W.normalMatrix),nt.setValue(I,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const mt=V.uniformsGroups;for(let Tt=0,pn=mt.length;Tt<pn;Tt++){const lo=mt[Tt];Le.update(lo,Pt),Le.bind(lo,Pt)}}return Pt}function yc(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ec(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,N,J){const V=Fe.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Fe.get(S.texture).__webglTexture=N,Fe.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const J=Fe.get(S);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,J=0){Q=S,B=N,F=J;let V=null,W=!1,_e=!1;if(S){const ge=Fe.get(S);if(ge.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(S.viewport),Te.copy(S.scissor),Ie=S.scissorTest,de.viewport(ie),de.scissor(Te),de.setScissorTest(Ie),q=-1;return}else if(ge.__webglFramebuffer===void 0)Oe.setupRenderTarget(S);else if(ge.__hasExternalTextures)Oe.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&Fe.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(_e=!0);const Ce=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?V=Ce[N][J]:V=Ce[N],W=!0):S.samples>0&&Oe.useMultisampledRTT(S)===!1?V=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[J]:V=Ce,ie.copy(S.viewport),Te.copy(S.scissor),Ie=S.scissorTest}else ie.copy(Ue).multiplyScalar(pe).floor(),Te.copy(We).multiplyScalar(pe).floor(),Ie=Ze;if(J!==0&&(V=Z),de.bindFramebuffer(I.FRAMEBUFFER,V)&&de.drawBuffers(S,V),de.viewport(ie),de.scissor(Te),de.setScissorTest(Ie),W){const ge=Fe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,J)}else if(_e){const ge=N;for(let Se=0;Se<S.textures.length;Se++){const Ce=Fe.get(S.textures[Se]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Se,Ce.__webglTexture,J,ge)}}else if(S!==null&&J!==0){const ge=Fe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,J)}q=-1};function oo(S){const N=Fe.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ot.textureFormatReadable(S.format),N.__typeReadable=ot.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,J,V,W,_e,Ae,ge=0){if(!(S&&S.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){de.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Ce=S.textures[ge],ke=Ce.format,Qe=Ce.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);const be=oo(Ce);if(be.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&J>=0&&J<=S.height-W&&I.readPixels(N,J,V,W,oe.convert(ke),oe.convert(Qe),_e)}finally{const Ce=Q!==null?Fe.get(Q).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,N,J,V,W,_e,Ae,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(N>=0&&N<=S.width-V&&J>=0&&J<=S.height-W){de.bindFramebuffer(I.FRAMEBUFFER,Se);const Ce=S.textures[ge],ke=Ce.format,Qe=Ce.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);const be=oo(Ce);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(N,J,V,W,oe.convert(ke),oe.convert(Qe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const xt=Q!==null?Fe.get(Q).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,xt);const ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lu(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(je),I.deleteSync(ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,J=0){const V=Math.pow(2,-J),W=Math.floor(S.image.width*V),_e=Math.floor(S.image.height*V),Ae=N!==null?N.x:0,ge=N!==null?N.y:0;Oe.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Ae,ge,W,_e),de.unbindTexture()},this.copyTextureToTexture=function(S,N,J=null,V=null,W=0,_e=0){let Ae,ge,Se,Ce,ke,Qe,be,je,xt;const ft=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(J!==null)Ae=J.max.x-J.min.x,ge=J.max.y-J.min.y,Se=J.isBox3?J.max.z-J.min.z:1,Ce=J.min.x,ke=J.min.y,Qe=J.isBox3?J.min.z:0;else{const nt=Math.pow(2,-W);Ae=Math.floor(ft.width*nt),ge=Math.floor(ft.height*nt),S.isDataArrayTexture?Se=ft.depth:S.isData3DTexture?Se=Math.floor(ft.depth*nt):Se=1,Ce=0,ke=0,Qe=0}V!==null?(be=V.x,je=V.y,xt=V.z):(be=0,je=0,xt=0);const ht=oe.convert(N.format),Ct=oe.convert(N.type);let we;N.isData3DTexture?(Oe.setTexture3D(N,0),we=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Oe.setTexture2DArray(N,0),we=I.TEXTURE_2D_ARRAY):(Oe.setTexture2D(N,0),we=I.TEXTURE_2D),de.activeTexture(I.TEXTURE0),de.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),de.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),de.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ut=de.getParameter(I.UNPACK_ROW_LENGTH),at=de.getParameter(I.UNPACK_IMAGE_HEIGHT),Hn=de.getParameter(I.UNPACK_SKIP_PIXELS),Pt=de.getParameter(I.UNPACK_SKIP_ROWS),Qi=de.getParameter(I.UNPACK_SKIP_IMAGES);de.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),de.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),de.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),de.pixelStorei(I.UNPACK_SKIP_ROWS,ke),de.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe);const wn=S.isDataArrayTexture||S.isData3DTexture,Vn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const nt=Fe.get(S),bt=Fe.get(N),Jt=Fe.get(nt.__renderTarget),mt=Fe.get(bt.__renderTarget);de.bindFramebuffer(I.READ_FRAMEBUFFER,Jt.__webglFramebuffer),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Tt=0;Tt<Se;Tt++)wn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(S).__webglTexture,W,Qe+Tt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(N).__webglTexture,_e,xt+Tt)),I.blitFramebuffer(Ce,ke,Ce+Ae,ke+ge,be,je,be+Ae,je+ge,I.DEPTH_BUFFER_BIT,I.NEAREST);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||Fe.has(S)){const nt=Fe.get(S),bt=Fe.get(N);de.bindFramebuffer(I.READ_FRAMEBUFFER,L),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,X);for(let Jt=0;Jt<Se;Jt++)wn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nt.__webglTexture,W,Qe+Jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nt.__webglTexture,W),Vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,_e,xt+Jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,_e),W!==0?I.blitFramebuffer(Ce,ke,Ce+Ae,ke+ge,be,je,be+Ae,je+ge,I.COLOR_BUFFER_BIT,I.NEAREST):Vn?I.copyTexSubImage3D(we,_e,be,je,xt+Jt,Ce,ke,Ae,ge):I.copyTexSubImage2D(we,_e,be,je,Ce,ke,Ae,ge);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Vn?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(we,_e,be,je,xt,Ae,ge,Se,ht,Ct,ft.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(we,_e,be,je,xt,Ae,ge,Se,ht,ft.data):I.texSubImage3D(we,_e,be,je,xt,Ae,ge,Se,ht,Ct,ft):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,be,je,Ae,ge,ht,Ct,ft.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,be,je,ft.width,ft.height,ht,ft.data):I.texSubImage2D(I.TEXTURE_2D,_e,be,je,Ae,ge,ht,Ct,ft);de.pixelStorei(I.UNPACK_ROW_LENGTH,Ut),de.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),de.pixelStorei(I.UNPACK_SKIP_PIXELS,Hn),de.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),de.pixelStorei(I.UNPACK_SKIP_IMAGES,Qi),_e===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&I.generateMipmap(we),de.unbindTexture()},this.initRenderTarget=function(S){Fe.get(S).__webglFramebuffer===void 0&&Oe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){B=0,F=0,Q=null,de.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function gc(i,e){const t=e.start??0,n=e.length??Math.PI*2,r=e.segments??64,s=e.closed??!1,a=Math.cos(e.crease??.6),o=[],l=[],c=[],u=s?i.length:i.length-1,m=[];for(let h=0;h<u;h+=1){const[_,E]=i[h],[d,p]=i[(h+1)%i.length],M=Math.hypot(d-_,p-E);m.push(M<1e-9?null:[-(p-E)/M,(d-_)/M])}const f=(h,_)=>{if(!_||h[0]*_[0]+h[1]*_[1]<a)return h;const E=Math.hypot(h[0]+_[0],h[1]+_[1]);return[(h[0]+_[0])/E,(h[1]+_[1])/E]};for(let h=0;h<u;h+=1){const _=m[h];if(!_)continue;const E=s?m[(h-1+u)%u]:m[h-1],d=s?m[(h+1)%u]:m[h+1],p=[{point:i[h],normal:f(_,E)},{point:i[(h+1)%i.length],normal:f(_,d)}],M=o.length/3;for(let T=0;T<=r;T+=1){const x=t+n*T/r,w=Math.cos(x),A=Math.sin(x);for(const{point:g,normal:y}of p)o.push(g[0]*w,g[1],g[0]*A),l.push(y[0]*w,y[1],y[0]*A)}for(let T=0;T<r;T+=1){const x=M+T*2;c.push(x,x+2,x+1,x+1,x+2,x+3)}}if(e.caps&&s){const h=i.map(([E,d])=>new fe(E,d)),_=cn.triangulateShape(h,[]);for(const E of[0,1]){const d=t+n*E,p=Math.cos(d),M=Math.sin(d),T=E===0?-1:1,x=o.length/3;for(const[w,A]of i)o.push(w*p,A,w*M),l.push(-M*T,0,p*T);for(const[w,A,g]of _)(h[A].x-h[w].x)*(h[g].y-h[w].y)-(h[A].y-h[w].y)*(h[g].x-h[w].x)>0==T>0?c.push(x+w,x+A,x+g):c.push(x+w,x+g,x+A)}}return{positions:o,normals:l,indices:c}}function vt(i,e={}){const{positions:t,normals:n,indices:r}=gc(i,e),s=new It;return s.setAttribute("position",new it(t,3)),s.setAttribute("normal",new it(n,3)),s.setIndex(r),s}function dl(i,e,t={}){const{positions:n,normals:r}=gc(e,t),s=i.getAttribute("position"),a=i.getAttribute("normal");s.array.set(n),a.array.set(r),s.needsUpdate=!0,a.needsUpdate=!0}function Bt(i){const e=[],t=[],n=[];for(const s of i){const a=e.length/3,o=s.getAttribute("position"),l=s.getAttribute("normal");for(let u=0;u<o.count;u+=1)e.push(o.getX(u),o.getY(u),o.getZ(u)),t.push(l.getX(u),l.getY(u),l.getZ(u));const c=s.getIndex();if(c)for(let u=0;u<c.count;u+=1)n.push(a+c.getX(u));else for(let u=0;u<o.count;u+=1)n.push(a+u);s.dispose()}const r=new It;return r.setAttribute("position",new it(e,3)),r.setAttribute("normal",new it(t,3)),r.setIndex(n),r}const Mn=(i,e)=>i.applyMatrix4(e),Ta=Math.PI*2,pl=1.1,Sn=Ta/8,qt=i=>.34-.31*Math.pow(Math.max(0,(i-1.5)/1.06),1.55),rn=i=>qt(i)-.09,Dr=[[2.3,-.27],[2,-.36],[1.7,-.435],[1.4,-.505],[1.1,-.565],[.98,-.59]];function ml(i){const e=Math.max(1,Dr.findIndex(([a])=>a<=i)),[t,n]=Dr[e-1],[r,s]=Dr[e];return n+(s-n)*(i-t)/(r-t)}const di=(i,e,t)=>Array.from({length:t},(n,r)=>i+(e-i)*r/(t-1)),gl=(i,e,t)=>i+(e-i)*t;function bs(i,e){return i.rotation.y=-e,i}const Yn=(i,e,t)=>new ut().makeTranslation(i,e,t),Tg=i=>new ut().makeRotationX(i),_l=i=>new ut().makeRotationY(i),Tr=i=>new ut().makeRotationZ(i),Ar=(i,e=10)=>new zt(i,i,1,e).translate(0,.5,0);function _c(i,e){const t=i-e;return[{x:t,from:-Math.PI/2,to:Math.PI/2},{x:-t,from:Math.PI/2,to:Math.PI*1.5}]}function vl(i,e){const t=new Va;for(const n of _c(i,e))t.absarc(n.x,0,e,n.from,n.to,!1);return t.closePath(),t}function Ag(i,e){const t=new xa;for(const n of _c(i,e))t.absarc(n.x,0,e,n.from,n.to,!1);return t.closePath(),t}function ws(i,e,t){return new zn({uniforms:{colour:{value:new $e(i)},strength:{value:0},edge:{value:e},fall:{value:t}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vView;
      varying float vAlong;
      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-viewPosition.xyz);
        vAlong = 1.0 - uv.y;
        gl_Position = projectionMatrix * viewPosition;
      }`,fragmentShader:`
      uniform vec3 colour;
      uniform float strength;
      uniform float edge;
      uniform float fall;
      varying vec3 vNormal;
      varying vec3 vView;
      varying float vAlong;
      void main() {
        // At the edge of a triangle the interpolated values overshoot; pow() of a negative base is undefined.
        float facing = clamp(abs(dot(normalize(vNormal), normalize(vView))), 0.0, 1.0);
        float alpha = strength * pow(facing, edge) * pow(clamp(1.0 - vAlong, 0.0, 1.0), fall);
        gl_FragColor = vec4(colour, alpha);
      }`,transparent:!0,depthWrite:!1,side:an,blending:xl,blendEquation:Zn,blendSrc:ba,blendDst:Cs,blendSrcAlpha:Cs,blendDstAlpha:wa})}function bg(){const i=(e,t,n)=>new ui({color:e,roughness:t,metalness:n});return{plate:i(12830157,.52,.16),dome:i(15132395,.58,.04),silver:i(11711677,.4,.4),graphite:i(2500139,.68,.12),belly:i(8092806,.6,.18),shield:i(7105911,.58,.2),graphiteMid:i(3881795,.6,.18),graphiteLight:i(6052966,.55,.22),pink:i(15976149,.55,.04),pinkDeep:i(15313342,.55,.04),core:new ui({color:15976149,roughness:.42,emissive:15313342,emissiveIntensity:.2,flatShading:!0}),tip:new ui({color:15976149,roughness:.5,emissive:15976149,emissiveIntensity:.35}),rimLine:new ui({color:15313342,roughness:.5,emissive:15976149,emissiveIntensity:.25}),window:new ui({color:1513243,roughness:.5,emissive:16114666,emissiveIntensity:0}),emitter:new ui({color:1776416,roughness:.5,emissive:16243685,emissiveIntensity:0}),nozzle:new _a({color:1513243}),signal:[0,1,2].map(()=>new _a({color:15976149,transparent:!0,opacity:0,depthWrite:!1})),flame:ws(16176094,1.4,1.5),beam:ws(15976149,2.2,1.7),beamCore:ws(16246508,2.6,2.3)}}const wg=new $e(1513243),Rg=new $e(16773365);function Cg(){const i=bg(),e=new Nt;e.rotation.order="ZXY";const t=(P,$,H)=>{const G=new An($,H);return G.castShadow=!0,G.receiveShadow=!0,P.add(G),G},n=(P,$,H)=>{const G=new An($,H);return G.renderOrder=2,P.add(G),G},r=di(1.5,2.5,7),s=[[0,.3],[1.44,.3],...r.map(P=>[P,rn(P)]),[2.58,-.07],[2.6,-.09],[2.6,-.15],[2.57,-.175]],a=[[2.57,-.175],...Dr,[.96,-.61],[.96,-.655],[.94,-.67],[.62,-.67],[.6,-.655],[.6,-.63],[0,-.63]];t(e,vt(s,{segments:96,crease:.5}),i.graphite),t(e,vt(a,{segments:96,crease:.5}),i.belly),t(e,Bt([2.32,1.3].map(P=>vt([[P+.014,ml(P+.014)-.004],[P-.014,ml(P-.014)-.004]],{segments:96}))),i.graphite),t(e,vt([[.9,.335],[1.44,.335],[1.47,.32],[1.47,.29]],{segments:96}),i.graphiteMid),t(e,vt([[2.6,-.082],[2.607,-.088],[2.607,-.116],[2.6,-.122]],{segments:96}),i.rimLine);const o=[...di(1.5,2.52,6).map(P=>[P,rn(P)+.032]),[2.52,rn(2.52)-.01],[1.5,rn(1.5)-.01]],l=[];for(let P=0;P<8;P+=1)l.push(vt(o,{start:(P+.5)*Sn-.016,length:.032,segments:1,closed:!0,caps:!0}));for(const P of[1.85,2.25])l.push(vt([[P-.03,rn(P-.03)+.026],[P+.03,rn(P+.03)+.026],[P+.03,rn(P+.03)-.01],[P-.03,rn(P-.03)-.01]],{segments:96,closed:!0}));t(e,Bt(l),i.graphiteLight);const c=Sn/2-.011,u=[...di(1.5,2.555,12).map(P=>[P,qt(P)]),[2.575,qt(2.555)-.022],[2.575,qt(2.555)-.06],...di(2.555,1.5,5).map(P=>[P,qt(P)-.075]),[1.487,.28],[1.487,.325]],m=vt(u,{start:-c,length:c*2,segments:14,closed:!0,caps:!0,crease:.7}),f=(P,$,H,G,re=.005)=>vt([[P-.004,qt(P-.004)+5e-4],[P,qt(P)+re],[$,qt($)+re],[$+.004,qt($+.004)+5e-4]],{start:H,length:G,segments:10}),h=f(2.408,2.428,-c+.04,(c-.04)*2),_=Bt([f(1.6,1.612,-c+.03,(c-.03)*2,.003),f(1.96,2,-.17,.34),f(2.07,2.085,-.17,.34,.003)]),E=Math.atan2(qt(2.26)-qt(2.14),.12),d=Mn(new zt(.042,.048,.02,20),Yn(2.2,qt(2.2)+.008,0).multiply(Tr(E))),p=Ar(.018),M=Math.hypot(.5,.32),T=new zt(.045,.05,.05,14),x=Array.from({length:8},(P,$)=>{const H=bs(new Nt,$*Sn);e.add(H);const G=new Nt;H.add(G),t(G,m,i.plate),t(G,h,i.pinkDeep),t(G,_,i.graphite),t(G,d,i.silver);const re=[1.85,2.25].map(R=>{t(H,T,i.silver).position.set(R,rn(R)+.02,0);const Y=t(H,p,i.silver);return Y.position.set(R,rn(R)+.03,0),Y.rotation.z=-Math.atan2(.5,.32),Y});return{slide:G,pistons:re}});t(e,vt([[0,.2],[.5,.2],[.5,.6],[.74,.6],[.74,.655],[.76,.675],[.86,.675],[.885,.655],[.9,.62],[.9,.38],[.93,.335]],{segments:96,crease:.5}),i.graphiteMid);const w=.5,A=.9,g=[],y=[],U=[],C=[],D=vl(.185,.11);D.holes.push(Ag(.15,.075));for(let P=0;P<8;P+=1){const $=_l(Math.PI/2-P*Sn).premultiply(Yn(Math.cos(P*Sn)*A,w,Math.sin(P*Sn)*A)),H=G=>$.clone().multiply(Yn(0,0,G));g.push(Mn(new ka(D,{depth:.04,bevelEnabled:!1,curveSegments:10}),H(-.012))),y.push(Mn(new Xa(vl(.15,.075),10),H(.006))),U.push(Mn(new Mi(.3,.075).translate(0,.0375,0),H(.016))),C.push(Mn(new Mi(.3,.075).translate(0,-.0375,0),H(.016)))}t(e,Bt(g),i.silver),t(e,Bt(y),i.window);const z=t(e,Bt(U),i.graphiteLight),Z=t(e,Bt(C),i.graphiteLight),L=new Nt;e.add(L);const X=t(L,new Wa(.25,0).scale(1,1.25,1),i.core);X.castShadow=!1,t(L,Bt([new Gr(.36,.016,8,48).rotateX(Math.PI/2),...[0,1,2].map(P=>Mn(new zt(.012,.012,.13,8),_l(P*Ta/3+.4).multiply(Yn(.3,0,0)).multiply(Tr(Math.PI/2))))]),i.silver).castShadow=!1;const B=new Wo(15976149,0,4.5,2);L.add(B);const F=new Nt;e.add(F);const Q=[...di(Math.PI/2,0,16).map(P=>[.8*Math.cos(P),.7+.43*Math.sin(P)]),[.8,.677],[0,.677]];t(F,vt(Q,{segments:96,crease:.7}),i.dome),t(F,vt([[.8,.745],[.826,.738],[.826,.682],[.8,.677]],{segments:96}),i.silver);const q=di(.62,.66,2).map(P=>[.804*Math.cos(P),.7+.434*Math.sin(P)]);t(F,vt([[q[1][0]-.004,q[1][1]],q[1],q[0],[q[0][0]+.002,q[0][1]-.004]],{segments:96}),i.graphiteMid),t(F,vt([[0,1.155],[.13,1.155],[.15,1.14],[.15,1.1]],{segments:32}),i.graphiteMid);const ee=Ar(.014,8),ie=[.5,2.6,4.7].map(P=>{const $=t(e,ee,i.silver);return $.position.set(Math.cos(P)*.8,.67,Math.sin(P)*.8),$}),Te=[.036,.027,.019].map((P,$)=>{const H=[new zt(P,P,.4,16).translate(0,-.2,0),new zt(P+.009,P+.009,.026,16).translate(0,-.013,0)];if($===2)for(const[G,re]of[[.24,.05],[.16,.1]])H.push(Mn(new zt(.007,.007,G,8),Yn(0,-re,0).multiply(Tr(Math.PI/2))));return t(F,Bt(H),i.silver)}),Ie=t(F,new zr(.05,20,14),i.tip),ve=[.24,.44,.66].map((P,$)=>n(F,new Gr(P,.016-$*.003,8,72).rotateX(Math.PI/2),i.signal[$])),Ee=P=>vt([[P-.036,.016],[P-.03,.023],[P+.03,.023],[P+.036,.016],[P+.036,-.016],[P+.03,-.023],[P-.03,-.023],[P-.036,-.016]],{segments:96,closed:!0,crease:.9}),Ne=(P,$,H)=>{const G=new zt(.016,.016,$-P,10),re=H?Tg(Math.PI/2):Tr(Math.PI/2);return Bt([-1,1].map(R=>Mn(G.clone(),(H?Yn(0,0,R*(P+$)/2):Yn(R*(P+$)/2,0,0)).multiply(re))))},pe=new Nt;e.add(pe);const Pe=new Nt;pe.add(Pe),t(Pe,Ee(1.35),i.graphiteLight),t(Pe,Ne(1.246,1.314,!0),i.silver);const st=new Nt;Pe.add(st),t(st,Ee(1.21),i.silver),t(st,Ne(1.106,1.174,!1),i.silver);const Ue=new Nt;st.add(Ue),t(Ue,Ee(1.07),i.pinkDeep),t(pe,Bt([-1,1].map(P=>new zr(.034,12,10).translate(P*1.412,0,0))),i.silver);const We=Ar(.02),Ze=[-1,1].map(P=>{const $=t(e,We,i.silver);return $.position.set(P*1.412,.33,0),$}),ne=Bt([new zt(.2,.2,.4,28).translate(0,-.2,0)]),he=Bt([vt([[.2,-.4],[.17,-.43],[.235,-.52],[.215,-.52],[.15,-.44],[0,-.44]],{segments:28,crease:.4}),vt([[.2,-.3],[.212,-.305],[.212,-.335],[.2,-.34]],{segments:28})]),ue=new zt(.135,.02,1,24,1,!0).translate(0,-.5,0),ye=new Br(.15,24).rotateX(Math.PI/2),me=[],Ge=Array.from({length:4},(P,$)=>{const H=($+.5)*(Ta/4),G=bs(new Nt,H);G.position.set(Math.cos(H)*1.7,-.435,Math.sin(H)*1.7),G.rotation.z=.237,e.add(G),G.updateMatrix(),me.push(Mn(vt([[.215,-.012],[.29,-.012],[.3,.004],[.3,.03]],{segments:28}),G.matrix));const re=new Nt;G.add(re),t(re,ne,i.graphiteMid),t(re,he,i.silver);const R=n(re,ye,i.nozzle);R.position.y=-.442,R.renderOrder=0;const K=n(re,ue,i.flame);return K.position.y=-.46,{pod:re,flame:K,phase:$*1.7}});t(e,Bt(me),i.silver);const Re=[[2.604,0],[2.65,-.012],[2.668,-.08],[2.65,-.148],[2.604,-.16]],qe=[[2.604,-.003],[2.607,.005],[2.647,-.006],[2.652,-.016]],Je=P=>({start:-P,length:P*2,segments:12,closed:!0,caps:!0,crease:.5}),et=P=>({start:-P,length:P*2,segments:12}),I=Sn/2*.972,pt=vt(Re,Je(I)),Xe=vt(qe,et(I)),ot=Ar(.016,8),de=Array.from({length:8},(P,$)=>{const H=bs(new Nt,$*Sn);e.add(H),t(H,pt,i.shield).frustumCulled=!1,t(H,Xe,i.pink).frustumCulled=!1;const G=t(H,ot,i.silver);return G.position.set(2.59,-.1,0),{strut:G}});let dt="";const Fe=(P,$)=>{const H=`${P.toFixed(4)}:${$.toFixed(4)}`;if(H!==dt){dt=H;const G=.46*P,re=.13*P,R=.3*P,K=Math.cos(R),Y=Math.sin(R),se=1+1.3*P,oe=([ze,le])=>{const De=ze-2.636,Ve=(le+.08)*se;return[2.636+G+De*K-Ve*Y,-.08+re+De*Y+Ve*K]},ce=Sn/2*gl(gl(.972,.85,P),.994,$);dl(pt,Re.map(oe),Je(ce)),dl(Xe,qe.map(oe),et(ce));const Le=Math.hypot(G+.04,re+.02);for(const{strut:ze}of de)ze.visible=P>.02,ze.scale.y=Math.max(.001,Le),ze.rotation.z=Math.atan2(re+.02,G+.04)-Math.PI/2}};t(e,vt([[.9,-.668],[.9,-.692],[.66,-.692],[.66,-.668]],{segments:64}),i.silver),t(e,new Br(.6,48).rotateX(Math.PI/2).translate(0,-.632,0),i.emitter).castShadow=!1,t(e,vt([[.11,-.632],[.1,-.66],[.06,-.676],[0,-.68]],{segments:24}),i.silver);const Oe=n(e,new zt(.52,1.25,2.7,64,1,!0).translate(0,-1.35,0),i.beam),b=n(e,new zt(.3,.6,2.5,48,1,!0).translate(0,-1.25,0),i.beamCore);Oe.position.y=b.position.y=-.66;const v=new Wo(15976149,0,5,2);return v.position.y=-1.15,e.add(v),{root:e,apply:(P,$)=>{e.position.y=.035*Math.sin($*.7),e.rotation.set(.014*Math.sin($*.43),P.yaw+.03*Math.sin($*.27),P.roll+.01*Math.sin($*.51)),Te.forEach((R,K)=>{R.position.y=1.155+(K+1)*(.05+.3*P.antenna)}),Ie.position.y=Te[2].position.y+.04,i.tip.emissiveIntensity=.3+.9*P.signal,ve.forEach((R,K)=>{const Y=Math.min(1,Math.max(0,(P.signal-K*.2)/.35)),se=Math.sin($*1.5-K*.9);R.visible=Y>.01,R.position.y=Ie.position.y,R.scale.setScalar((.6+.4*Y)*(1+.04*se)),i.signal[K].opacity=Y*[.9,.6,.36][K]*(.9+.1*se)});const H=1-.94*P.portholeOpen;z.scale.y=Z.scale.y=H,z.position.y=(w+.075)*(1-H),Z.position.y=(w-.075)*(1-H),i.window.emissiveIntensity=.95*P.portholeLight,F.position.y=.85*P.domeLift;for(const R of ie)R.visible=P.domeLift>.01,R.scale.y=Math.max(.001,.86*P.domeLift);L.position.y=.42+.5*P.core,X.rotation.y=.5+2.2*P.core+.35*$,i.core.emissiveIntensity=.2+.45*P.core,B.intensity=5*P.core,pe.position.y=.36+pl*P.gyroLift;const G=.04*P.gyroLift;Pe.rotation.x=P.gyroTilt[0]+G*Math.sin($*.6),st.rotation.z=P.gyroTilt[1]+G*Math.sin($*.47+1),Ue.rotation.x=P.gyroTilt[2]+G*Math.sin($*.53+2);for(const R of Ze)R.scale.y=Math.max(.001,pe.position.y-.33);x.forEach(({slide:R,pistons:K},Y)=>{const se=P.plates[Y];R.position.set(.5*se,.32*se,0),R.rotation.z=-.05*se;for(const oe of K)oe.visible=se>.01,oe.scale.y=Math.max(.001,M*se)}),i.nozzle.color.lerpColors(wg,Rg,P.engineFire),i.flame.uniforms.strength.value=.85*P.engineFire;for(const{pod:R,flame:K,phase:Y}of Ge)R.position.y=.49-.37*P.engineDeploy,K.visible=P.engineFire>.01,K.scale.y=Math.max(.001,.7*P.engineFire*(1+.05*Math.sin($*9+Y)));Fe(P.shieldOut,P.shieldClose);const re=1+.04*Math.sin($*.9);Oe.visible=b.visible=P.beam>.004,Oe.scale.y=b.scale.y=.3+.7*P.beam,i.beam.uniforms.strength.value=.4*P.beam*re,i.beamCore.uniforms.strength.value=.3*P.beam*re,i.emitter.emissiveIntensity=1.5*P.emitter,v.intensity=3*P.beam+.8*P.emitter},outline:P=>{const $=Math.max(...P.plates),H=1.4+.9*P.antenna+.85*P.domeLift,G=[[2.67+.46*P.shieldOut,-.17-.07*P.shieldOut],[2.67+.5*P.shieldOut,.02+.36*P.shieldOut],[2.6+.5*$,.03+.32*$],[.08+.72*P.signal,H],[1,-.7],[1.98,-.5-.36*P.engineDeploy-.6*P.engineFire],[.6+.55*P.beam,-.7-2.3*P.beam*(.3+.7*P.beam)]];if(P.gyroLift>0){const re=.36+pl*P.gyroLift,[R,K,Y]=P.gyroTilt.map(Math.abs),se=oe=>Math.sin(Math.min(Math.PI/2,oe));G.push([1.45,re],[1,re+Math.max(1.39*se(R),1.25*se(R+K),1.11*se(R+K+Y))])}return G},dispose:()=>{const P=new Set;e.traverse($=>{$.geometry&&P.add($.geometry)}),P.forEach($=>$.dispose());for(const $ of Object.values(i).flat())$.dispose()}}}const vc=22,Pg=Math.tan(vc*Math.PI/360),Lg=.94,Dg=Array.from({length:16},(i,e)=>Math.cos(e*Math.PI/8)),Ng=Array.from({length:16},(i,e)=>Math.sin(e*Math.PI/8));function Ig(i,e,t=2048){const n=new Eg({canvas:i,context:e,alpha:!0,antialias:!0});n.setClearColor(0,0),n.toneMapping=Ra,n.shadowMap.enabled=!0,n.shadowMap.type=Ui;const r=new wu,s=new Zt(vc,1,1,80),a=Cg();r.add(a.root),r.add(new Ah(15132912,3814972,.6));const o=new Sr(16777215,2.5);o.position.set(-4.6,7.4,5.2),o.target.position.set(0,.5,0),o.castShadow=!0,o.shadow.mapSize.set(t,t),o.shadow.camera.left=o.shadow.camera.bottom=-3.9,o.shadow.camera.right=o.shadow.camera.top=3.9,o.shadow.camera.near=2,o.shadow.camera.far=20,o.shadow.bias=-4e-4,o.shadow.normalBias=.018;const l=new Sr(15329264,.45);l.position.set(6,1.2,4);const c=new Sr(16245995,1);c.position.set(3,3.6,-6.5);const u=new Sr(14474726,2.1);u.position.set(-2,-6,3.5),r.add(o,o.target,l,c,u);let m=1,f="";return{resize(h,_,E){const d=`${h}x${_}@${E}`;d!==f&&(f=d,m=h/_,n.setPixelRatio(E),n.setSize(h,_,!1))},render(h,_){a.apply(h,_);const E=Math.sin(h.elevation),d=Math.cos(h.elevation),p=Math.sin(h.roll),M=Math.cos(h.roll),T=Pg*Lg,x=T*m;let w=-1/0,A=1/0,g=0;for(const[C,D]of a.outline(h))for(let z=0;z<16;z+=1){const Z=C*Dg[z],L=C*Ng[z],X=Z*M-D*p,B=Z*p+D*M,F=B*d-L*E,Q=B*E+L*d;w=Math.max(w,F+Q*T),A=Math.min(A,F-Q*T),g=Math.max(g,Math.abs(X)+Q*x)}const y=Math.max((w-A)/(2*T),g/x),U=(w+A)/2;s.aspect=m,s.position.set(0,U*d+y*E,-U*E+y*d),s.rotation.set(-h.elevation,0,0),s.near=Math.max(1,y-9),s.far=y+9,s.updateProjectionMatrix(),n.render(r,s)},dispose(){a.dispose(),o.shadow.dispose(),n.dispose(),n.forceContextLoss()}}}const Ug=1500,Fg=()=>document.documentElement.dataset.shipClock==="frozen",Og=()=>Math.min(window.devicePixelRatio||1,window.innerWidth<720?1.5:2);function Bg(){const i=Tc();if(!i)throw new Error("WebGL2 is not available");const{canvas:e,context:t}=i;e.className="ship-canvas",e.setAttribute("aria-hidden","true");let n;try{n=Ig(e,t,window.innerWidth<720?1024:2048)}catch(B){throw co(),B}const r=[];let s=null,a=0,o=0,l=0,c=!1,u=!1,m=0,f=0;const h=B=>{const F=Math.max(1,Math.round(B.host.clientWidth)),Q=Math.max(1,Math.round(B.host.clientHeight));n.resize(F,Q,Og())},_=B=>{B.ready||(B.ready=!0,B.onReady())},E=()=>{s&&(h(s),n.render(s.pose,Fg()?0:o),s.onFrame(s.progress),_(s))},d=()=>{if(u)return;const B=r.map(F=>F.onFailure);L(),B.forEach(F=>F())},p=B=>{try{B()}catch(F){console.warn("Ship scene stopped:",F),d()}},M=()=>!u&&!c&&!document.hidden&&s!==null&&s.area>0,T=B=>{a=0,M()&&(o+=Math.min(.1,Math.max(0,(B-l)/1e3)),l=B,p(E),u||(a=requestAnimationFrame(T)))},x=()=>{a||!M()||(l=performance.now(),a=requestAnimationFrame(T))},w=(B,F)=>{if(u||!F||!r.includes(B))return;const Q=URL.createObjectURL(F),q=B.stillUrl;B.stillUrl=Q,B.still.onload=()=>{q&&URL.revokeObjectURL(q),B!==s&&_(B)},B.still.src=Q},A=()=>{f=0,!(u||c)&&p(()=>{for(const B of r)B.host.clientWidth!==0&&(h(B),n.render(B.stillPose,0),e.toBlob(F=>w(B,F)));E()})},g=B=>{window.clearTimeout(f),f=window.setTimeout(A,B)},y=()=>{if(u)return;const F=r.reduce((Q,q)=>q.area>(Q?.area??0)?q:Q,null)??s??r[0]??null;if(F&&F!==s){s=F;for(const Q of r)Q.still.hidden=Q===s;s.host.appendChild(e),c||p(E)}x()},U=new IntersectionObserver(B=>{for(const F of B){const Q=r.find(q=>q.host===F.target);Q&&(Q.area=F.isIntersecting?F.intersectionRect.width*F.intersectionRect.height:0)}y()},{threshold:Array.from({length:21},(B,F)=>F/20)}),C=new ResizeObserver(()=>{u||c||(p(E),g(200))}),D=B=>{B.preventDefault(),c=!0,m=window.setTimeout(d,Ug)},z=()=>{window.clearTimeout(m),c=!1,p(E),g(0),x()},Z=()=>x();e.addEventListener("webglcontextlost",D),e.addEventListener("webglcontextrestored",z),document.addEventListener("visibilitychange",Z);function L(){if(!u){u=!0,cancelAnimationFrame(a),window.clearTimeout(m),window.clearTimeout(f),U.disconnect(),C.disconnect(),e.removeEventListener("webglcontextlost",D),e.removeEventListener("webglcontextrestored",z),document.removeEventListener("visibilitychange",Z);for(const B of r)B.still.remove(),B.stillUrl&&URL.revokeObjectURL(B.stillUrl);r.length=0,s=null;try{n.dispose()}catch{}e.remove(),co(),Vr===X&&(Vr=null)}}const X={add(B){const F=document.createElement("img");F.className="ship-still",F.alt="",F.decoding="sync",F.setAttribute("aria-hidden","true"),F.hidden=!0;const Q={...B,still:F,stillUrl:"",area:0,ready:!1};return Q.host.appendChild(F),r.push(Q),U.observe(Q.host),C.observe(Q.host),y(),g(0),{update(q,ee){Q.pose=q,Q.progress=ee,Q===s&&!u&&!c&&p(E)},release(){if(u)return;const q=r.indexOf(Q);if(!(q<0)){if(r.splice(q,1),U.unobserve(Q.host),C.unobserve(Q.host),F.remove(),Q.stillUrl&&URL.revokeObjectURL(Q.stillUrl),!r.length){L();return}s===Q&&(s=null,y())}}}}};return X}let Vr=null;function zg(i){return Vr??=Bg(),Vr.add(i)}const Rs=(i,e)=>i==="hero"?Ac():bc(e);function Hg({progress:i=1,mode:e,onFailure:t}){const n=bi.useRef(null),r=bi.useRef(null),s=bi.useRef(t);s.current=t;const a=wc(i);return bi.useEffect(()=>{const o=n.current;if(o){try{r.current=zg({host:o,pose:Rs(e,a),progress:a,stillPose:Rs(e,1),onFrame:l=>{o.dataset.shipProgress=l.toFixed(3)},onReady:()=>{o.dataset.shipState="ready"},onFailure:()=>s.current()})}catch(l){console.warn("Ship scene did not start:",l),s.current()}return()=>{r.current?.release(),r.current=null}}},[e]),bi.useEffect(()=>{r.current?.update(Rs(e,a),a)},[e,a]),Rc.jsx("div",{className:"ship-scene",ref:n,"data-ship-progress":"0.000","data-ship-state":"loading"})}export{Hg as default};

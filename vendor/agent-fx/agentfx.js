/*! Preact (MIT) + border-beam 1.4.1 + voice-glow 0.2.1 (MIT © Jakub Antalik, libraries.dev) + Milescope wrapper */
(()=>{var hr,y,ga,Ao,Se,ba,ma,ha,Ar,fr,Ze,xa,qr,Lr,Dr,Lo,ur={},gr=[],Do=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,er=Array.isArray;function ke(r,e){for(var t in e)r[t]=e[t];return r}function Nr(r){r&&r.parentNode&&r.parentNode.removeChild(r)}function rr(r,e,t){var a,o,i,s={};for(i in e)i=="key"?a=e[i]:i=="ref"?o=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?hr.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(i in r.defaultProps)s[i]===void 0&&(s[i]=r.defaultProps[i]);return dr(r,s,a,o,null)}function dr(r,e,t,a,o){var i={type:r,props:e,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o==null?++ga:o,__i:-1,__u:0};return o==null&&y.vnode!=null&&y.vnode(i),i}function ae(r){return r.children}function $e(r,e){this.props=r,this.context=e}function Te(r,e){if(e==null)return r.__?Te(r.__,r.__i+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?Te(r):null}function qo(r){if(r.__P&&r.__d){var e=r.__v,t=e.__e,a=[],o=[],i=ke({},e);i.__v=e.__v+1,y.vnode&&y.vnode(i),Ir(r.__P,i,e,r.__n,r.__P.namespaceURI,32&e.__u?[t]:null,a,t==null?Te(e):t,!!(32&e.__u),o),i.__v=e.__v,i.__.__k[i.__i]=i,ya(a,i,o),e.__e=e.__=null,i.__e!=t&&va(i)}}function va(r){if((r=r.__)!=null&&r.__c!=null)return r.__e=r.__c.base=null,r.__k.some(function(e){if(e!=null&&e.__e!=null)return r.__e=r.__c.base=e.__e}),va(r)}function fa(r){(!r.__d&&(r.__d=!0)&&Se.push(r)&&!mr.__r++||ba!=y.debounceRendering)&&((ba=y.debounceRendering)||ma)(mr)}function mr(){try{for(var r,e=1;Se.length;)Se.length>e&&Se.sort(ha),r=Se.shift(),e=Se.length,qo(r)}finally{Se.length=mr.__r=0}}function _a(r,e,t,a,o,i,s,n,p,c,d){var b,l,f,u,v,m,h=a&&a.__k||gr,g=e.length;for(p=No(t,e,h,p,g),b=0;b<g;b++)(f=t.__k[b])!=null&&(l=f.__i!=-1&&h[f.__i]||ur,f.__i=b,m=Ir(r,f,l,o,i,s,n,p,c,d),u=f.__e,f.ref&&l.ref!=f.ref&&(l.ref&&Ur(l.ref,null,f),d.push(f.ref,f.__c||u,f)),v==null&&u!=null&&(v=u),4&f.__u?(p=$a(f,p,r),l.__e&&(l.__e=null)):typeof f.type=="function"&&m!==void 0?p=m:u&&(p=u.nextSibling),f.__u&=-7);return t.__e=v,p}function No(r,e,t,a,o){var i,s,n,p,c,d=t.length,b=d,l=0;for(r.__k=new Array(o),i=0;i<o;i++)(s=e[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=r.__k[i]=dr(null,s,null,null,null):er(s)?s=r.__k[i]=dr(ae,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=r.__k[i]=dr(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):r.__k[i]=s,p=i+l,s.__=r,s.__b=r.__b+1,n=null,(c=s.__i=Io(s,t,p,b))!=-1&&(b--,(n=t[c])&&(n.__u|=2)),n==null||n.__v==null?(c==-1&&(o>d?l--:o<d&&l++),typeof s.type!="function"&&(s.__u|=4)):c!=p&&(c==p-1?l--:c==p+1?l++:(c>p?l--:l++,s.__u|=4))):r.__k[i]=null;if(b)for(i=0;i<d;i++)(n=t[i])!=null&&!(2&n.__u)&&(n.__e==a&&(a=Te(n)),ka(n,n));return a}function $a(r,e,t){var a,o;if(typeof r.type=="function"){for(a=r.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=r,e=$a(a[o],e,t));return e}r.__e!=e&&(e&&r.type&&!e.parentNode&&(e=Te(r)),e=t.insertBefore(r.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function tr(r,e){return e=e||[],r==null||typeof r=="boolean"||(er(r)?r.some(function(t){tr(t,e)}):e.push(r)),e}function Io(r,e,t,a){var o,i,s,n=r.key,p=r.type,c=e[t],d=c!=null&&(2&c.__u)==0;if(c===null&&n==null||d&&n==c.key&&p==c.type)return t;if(a>(d?1:0)){for(o=t-1,i=t+1;o>=0||i<e.length;)if((c=e[s=o>=0?o--:i++])!=null&&!(2&c.__u)&&n==c.key&&p==c.type)return s}return-1}function da(r,e,t){e[0]=="-"?r.setProperty(e,t==null?"":t):r[e]=t==null?"":typeof t!="number"||Do.test(e)?t:t+"px"}function br(r,e,t,a,o){var i,s;e:if(e=="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof a=="string"&&(r.style.cssText=a=""),a)for(e in a)t&&e in t||da(r.style,e,"");if(t)for(e in t)a&&t[e]==a[e]||da(r.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(xa,"$1")),s=e.toLowerCase(),e=s in r||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),r.l||(r.l={}),r.l[e+i]=t,t?a?t[Ze]=a[Ze]:(t[Ze]=qr,r.addEventListener(e,i?Dr:Lr,i)):r.removeEventListener(e,i?Dr:Lr,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in r)try{r[e]=t==null?"":t;break e}catch(n){}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?r.removeAttribute(e):r.setAttribute(e,e=="popover"&&t==1?"":t))}}function ua(r){return function(e){if(this.l){var t=this.l[e.type+r];if(e[fr]==null)e[fr]=qr++;else if(e[fr]<t[Ze])return;return t(y.event?y.event(e):e)}}}function Ir(r,e,t,a,o,i,s,n,p,c){var d,b,l,f,u,v,m,h,g,w,W,_,H,k,x,O,$=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(p=!!(32&t.__u),i=[n=e.__e=t.__e]),(d=y.__b)&&d(e);e:if(typeof $=="function"){b=s.length;try{if(g=e.props,w=$.prototype&&$.prototype.render,W=(d=$.contextType)&&a[d.__c],_=d?W?W.props.value:d.__:a,t.__c?h=(l=e.__c=t.__c).__=l.__E:(w?e.__c=l=new $(g,_):(e.__c=l=new $e(g,_),l.constructor=$,l.render=jo),W&&W.sub(l),l.state||(l.state={}),l.__n=a,f=l.__d=!0,l.__h=[],l._sb=[]),w&&l.__s==null&&(l.__s=l.state),w&&$.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=ke({},l.__s)),ke(l.__s,$.getDerivedStateFromProps(g,l.__s))),u=l.props,v=l.state,l.__v=e,f)w&&$.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),w&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(w&&$.getDerivedStateFromProps==null&&g!==u&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(g,_),e.__v==t.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(g,l.__s,_)===!1){e.__v!=t.__v&&(l.props=g,l.state=l.__s,l.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(Y){Y&&(Y.__=e)}),gr.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&s.push(l),n=Te(t);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(g,l.__s,_),w&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(u,v,m)})}if(l.context=_,l.props=g,l.__P=r,l.__e=!1,H=y.__r,k=0,w)l.state=l.__s,l.__d=!1,H&&H(e),d=l.render(l.props,l.state,l.context),gr.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,H&&H(e),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++k<25);l.state=l.__s,l.getChildContext!=null&&(a=ke(ke({},a),l.getChildContext())),w&&!f&&l.getSnapshotBeforeUpdate!=null&&(m=l.getSnapshotBeforeUpdate(u,v)),x=d!=null&&d.type===ae&&d.key==null?wa(d.props.children):d,n=_a(r,er(x)?x:[x],e,t,a,o,i,s,n,p,c),l.base=e.__e,e.__u&=-161,l.__h.length&&s.push(l),h&&(l.__E=l.__=null)}catch(Y){if(s.length=b,e.__v=null,p||i!=null){if(Y.then){for(e.__u|=p?160:128;n&&n.nodeType==8&&n.nextSibling;)n=n.nextSibling;i!=null&&(i[i.indexOf(n)]=null),e.__e=n}else if(i!=null)for(O=i.length;O--;)Nr(i[O])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),Y.then||za(e),y.__e(Y,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):n=e.__e=Uo(t.__e,e,t,a,o,i,s,p,c);return(d=y.diffed)&&d(e),128&e.__u?void 0:n}function za(r){r&&(r.__c&&(r.__c.__e=!0),r.__k&&r.__k.some(za))}function ya(r,e,t){for(var a=0;a<t.length;a++)Ur(t[a],t[++a],t[++a]);y.__c&&y.__c(e,r),r.some(function(o){try{r=o.__h,o.__h=[],r.some(function(i){i.call(o)})}catch(i){y.__e(i,o.__v)}})}function wa(r){return typeof r!="object"||r==null||r.__b>0?r:er(r)?r.map(wa):r.constructor!==void 0?null:ke({},r)}function Uo(r,e,t,a,o,i,s,n,p){var c,d,b,l,f,u,v,m=t.props||ur,h=e.props,g=e.type;if(g=="svg"?o="http://www.w3.org/2000/svg":g=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((f=i[c])&&"setAttribute"in f==!!g&&(g?f.localName==g:f.nodeType==3)){r=f,i[c]=null;break}}if(r==null){if(g==null)return document.createTextNode(h);r=document.createElementNS(o,g,h.is&&h),n&&(y.__m&&y.__m(e,i),n=!1),i=null}if(g==null)m===h||n&&r.data==h||(r.data=h);else{if(i=g=="textarea"&&h.defaultValue!=null?null:i&&hr.call(r.childNodes),!n&&i!=null)for(m={},c=0;c<r.attributes.length;c++)m[(f=r.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?b=f:c=="children"||c in h||c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h||br(r,c,null,f,o);for(c in h)f=h[c],c=="children"?l=f:c=="dangerouslySetInnerHTML"?d=f:c=="value"?u=f:c=="checked"?v=f:n&&typeof f!="function"||m[c]===f||br(r,c,f,m[c],o);if(d)n||b&&(d.__html==b.__html||d.__html==r.innerHTML)||(r.innerHTML=d.__html),e.__k=[];else if(b&&(r.innerHTML=""),_a(e.type=="template"?r.content:r,er(l)?l:[l],e,t,a,g=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:t.__k&&Te(t,0),n,p),i!=null)for(c=i.length;c--;)Nr(i[c]);n&&g!="textarea"||(c="value",g=="progress"&&u==null?r.removeAttribute("value"):u!=null&&(u!==r[c]||g=="progress"&&!u||g=="option"&&u!=m[c])&&br(r,c,u,m[c],o),c="checked",v!=null&&v!=r[c]&&br(r,c,v,m[c],o))}return r}function Ur(r,e,t){try{if(typeof r=="function"){var a=typeof r.__u=="function";a&&r.__u(),a&&e==null||(r.__u=r(e))}else r.current=e}catch(o){y.__e(o,t)}}function ka(r,e,t){var a,o;if(y.unmount&&y.unmount(r),(a=r.ref)&&(a.current&&a.current!=r.__e||Ur(a,null,e)),(a=r.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){y.__e(i,e)}a.base=a.__P=a.__n=null}if(a=r.__k)for(o=0;o<a.length;o++)a[o]&&ka(a[o],e,t||typeof r.type!="function");t||Nr(r.__e),r.__c=r.__=r.__e=void 0}function jo(r,e,t){return this.constructor(r,t)}function jr(r,e,t){var a,o,i,s;e==document&&(e=document.documentElement),y.__&&y.__(r,e),o=(a=typeof t=="function")?null:t&&t.__k||e.__k,i=[],s=[],Ir(e,r=(!a&&t||e).__k=rr(ae,null,[r]),o||ur,ur,e.namespaceURI,!a&&t?[t]:o?null:e.firstChild?hr.call(e.childNodes):null,i,!a&&t?t:o?o.__e:e.firstChild,a,s),ya(i,r,s),r.props.children=null}hr=gr.slice,y={__e:function(r,e,t,a){for(var o,i,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(r)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(r,a||{}),s=o.__d),s)return o.__E=o}catch(n){r=n}throw r}},ga=0,Ao=function(r){return r!=null&&r.constructor===void 0},$e.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ke({},this.state),typeof r=="function"&&(r=r(ke({},t),this.props)),r&&ke(t,r),r!=null&&this.__v&&(e&&this._sb.push(e),fa(this))},$e.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),fa(this))},$e.prototype.render=ae,Se=[],ma=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ha=function(r,e){return r.__v.__b-e.__v.__b},mr.__r=0,Ar=Math.random().toString(8),fr="__d"+Ar,Ze="__a"+Ar,xa=/(PointerCapture)$|Capture$/i,qr=0,Lr=ua(!1),Dr=ua(!0),Lo=0;var qe,U,Vr,Wa,ar=0,Fa=[],B=y,Ha=B.__b,Xa=B.__r,Ya=B.diffed,Ma=B.__c,Sa=B.unmount,Ca=B.__;function vr(r,e){B.__h&&B.__h(U,r,ar||e),ar=0;var t=U.__H||(U.__H={__:[],__h:[]});return r>=t.__.length&&t.__.push({}),t.__[r]}function J(r){return ar=1,Ta(Ra,r)}function Ta(r,e,t){var a=vr(qe++,2);if(a.t=r,!a.__c&&(a.__=[t?t(e):Ra(void 0,e),function(n){var p=a.__N?a.__N[0]:a.__[0],c=a.t(p,n);p!==c&&(a.__N=[c,a.__[1]],a.__c.setState({}))}],a.__c=U,!U.__f)){var o=function(n,p,c){if(!a.__c.__H)return!0;var d=!1,b=a.__c.props!==n;if(a.__c.__H.__.some(function(f){if(f.__N){d=!0;var u=f.__[0];f.__=f.__N,f.__N=void 0,u!==f.__[0]&&(b=!0)}}),i){var l=i.call(this,n,p,c);return d?l||b:l}return!d||b};U.__f=!0;var i=U.shouldComponentUpdate,s=U.componentWillUpdate;U.componentWillUpdate=function(n,p,c){if(this.__e){var d=i;i=void 0,o(n,p,c),i=d}s&&s.call(this,n,p,c)},U.shouldComponentUpdate=o}return a.__N||a.__}function oe(r,e){var t=vr(qe++,3);!B.__s&&Ea(t.__H,e)&&(t.__=r,t.u=e,U.__H.__h.push(t))}function Ee(r){return ar=5,We(function(){return{current:r}},[])}function We(r,e){var t=vr(qe++,7);return Ea(t.__H,e)&&(t.__=r(),t.__H=e,t.__h=r),t.__}function Re(r,e){return ar=8,We(function(){return r},e)}function or(){var r=vr(qe++,11);if(!r.__){for(var e=U.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);r.__="P"+t[0]+"-"+t[1]++}return r.__}function Vo(){for(var r;r=Fa.shift();){var e=r.__H;if(r.__P&&e)try{e.__h.some(xr),e.__h.some(Br),e.__h=[]}catch(t){e.__h=[],B.__e(t,r.__v)}}}B.__b=function(r){U=null,Ha&&Ha(r)},B.__=function(r,e){r&&e.__k&&e.__k.__m&&(r.__m=e.__k.__m),Ca&&Ca(r,e)},B.__r=function(r){Xa&&Xa(r),qe=0;var e=(U=r.__c).__H;e&&(Vr===U?(e.__h=[],U.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(xr),e.__h.some(Br),e.__h=[],qe=0)),Vr=U},B.diffed=function(r){Ya&&Ya(r);var e=r.__c;e&&e.__H&&(e.__H.__h.length&&(Fa.push(e)!==1&&Wa===B.requestAnimationFrame||((Wa=B.requestAnimationFrame)||Bo)(Vo)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Vr=U=null},B.__c=function(r,e){e.some(function(t){try{t.__h.some(xr),t.__h=t.__h.filter(function(a){return!a.__||Br(a)})}catch(a){e.some(function(o){o.__h&&(o.__h=[])}),e=[],B.__e(a,t.__v)}}),Ma&&Ma(r,e)},B.unmount=function(r){Sa&&Sa(r);var e,t=r.__c;t&&t.__H&&(t.__H.__.some(function(a){try{xr(a)}catch(o){e=o}}),t.__H=void 0,e&&B.__e(e,t.__v))};var Oa=typeof requestAnimationFrame=="function";function Bo(r){var e,t=function(){clearTimeout(a),Oa&&cancelAnimationFrame(e),setTimeout(r)},a=setTimeout(t,35);Oa&&(e=requestAnimationFrame(t))}function xr(r){var e=U,t=r.__c;typeof t=="function"&&(r.__c=void 0,t()),U=e}function Br(r){var e=U;r.__c=r.__(),U=e}function Ea(r,e){return!r||r.length!==e.length||e.some(function(t,a){return t!==r[a]})}function Ra(r,e){return typeof e=="function"?e(r):e}function Va(r,e){for(var t in e)r[t]=e[t];return r}function Pa(r,e){for(var t in r)if(t!=="__source"&&!(t in e))return!0;for(var a in e)if(a!=="__source"&&r[a]!==e[a])return!0;return!1}function Aa(r,e){this.props=r,this.context=e}(Aa.prototype=new $e).isPureReactComponent=!0,Aa.prototype.shouldComponentUpdate=function(r,e){return Pa(this.props,r)||Pa(this.state,e)};var La=y.__b;y.__b=function(r){r.type&&r.type.__f&&r.ref&&(r.props.ref=r.ref,r.ref=null),La&&La(r)};var Jo=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function $r(r){function e(t){var a=Va({},t);return delete a.ref,r(a,t.ref||null)}return e.$$typeof=Jo,e.render=r,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(r.displayName||r.name)+")",e}var Qo=y.__e;y.__e=function(r,e,t,a){if(r.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k||[]),o.__c(r,e)}Qo(r,e,t,a)};var Da=y.unmount;function Ba(r,e,t){return r&&(r.__c&&r.__c.__H&&(r.__c.__H.__.forEach(function(a){typeof a.__c=="function"&&a.__c()}),r.__c.__H=null),(r=Va({},r)).__c!=null&&(r.__c.__P===t&&(r.__c.__P=e),r.__c.__e=!0,r.__c=null),r.__k=r.__k&&r.__k.map(function(a){return Ba(a,e,t)})),r}function Ga(r,e,t){return r&&t&&(r.__v=null,r.__k=r.__k&&r.__k.map(function(a){return Ga(a,e,t)}),r.__c&&r.__c.__P===e&&(r.__e&&t.appendChild(r.__e),r.__c.__e=!0,r.__c.__P=t)),r}function Gr(){this.__u=0,this.o=null,this.__b=null}function Ka(r){var e=r.__&&r.__.__c;return e&&e.__a&&e.__a(r)}function _r(){this.i=null,this.l=null}y.unmount=function(r){var e=r.__c;e&&(e.__z=!0),e&&e.__R&&e.__R(),e&&32&r.__u&&(r.type=null),Da&&Da(r)},(Gr.prototype=new $e).__c=function(r,e){var t=e.__c,a=this;a.o==null&&(a.o=[]),a.o.push(t);var o=Ka(a.__v),i=!1,s=function(){i||a.__z||(i=!0,t.__R=null,o?o(p):p())};t.__R=s;var n=t.__P;t.__P=null;var p=function(){if(!--a.__u){if(a.state.__a){var c=a.state.__a;a.__v.__k[0]=Ga(c,c.__c.__P,c.__c.__O)}var d;for(a.setState({__a:a.__b=null});d=a.o.pop();)d.__P=n,d.forceUpdate()}};a.__u++||32&e.__u||a.setState({__a:a.__b=a.__v.__k[0]}),r.then(s,s)},Gr.prototype.componentWillUnmount=function(){this.o=[]},Gr.prototype.render=function(r,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=Ba(this.__b,t,a.__O=a.__P)}this.__b=null}var o=e.__a&&rr(ae,null,r.fallback);return o&&(o.__u&=-33),[rr(ae,null,e.__a?null:r.children),o]};var qa=function(r,e,t){if(++t[1]===t[0]&&r.l.delete(e),r.props.revealOrder&&(r.props.revealOrder[0]!=="t"||!r.l.size))for(t=r.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;r.i=t=t[2]}};(_r.prototype=new $e).__a=function(r){var e=this,t=Ka(e.__v),a=e.l.get(r);return a[0]++,function(o){var i=function(){e.props.revealOrder?(a.push(o),qa(e,r,a)):o()};t?t(i):i()}},_r.prototype.render=function(r){this.i=null,this.l=new Map;var e=tr(r.children);r.revealOrder&&r.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return r.children},_r.prototype.componentDidUpdate=_r.prototype.componentDidMount=function(){var r=this;this.l.forEach(function(e,t){qa(r,t,e)})};var Zo=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,ei=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ri=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ti=/[A-Z0-9]/g,ai=typeof document!="undefined",oi=function(r){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(r)};function Ja(r,e,t){return e.__k==null&&(e.textContent=""),jr(r,e),typeof t=="function"&&t(),r?r.__c:null}$e.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(r){Object.defineProperty($e.prototype,r,{configurable:!0,get:function(){return this["UNSAFE_"+r]},set:function(e){Object.defineProperty(this,r,{configurable:!0,writable:!0,value:e})}})});var Na=y.event;y.event=function(r){return Na&&(r=Na(r)),r.persist=function(){},r.isPropagationStopped=function(){return this.cancelBubble},r.isDefaultPrevented=function(){return this.defaultPrevented},r.nativeEvent=r};var Qa,ii={configurable:!0,get:function(){return this.class}},Ia=y.vnode;y.vnode=function(r){typeof r.type=="string"&&function(e){var t=e.props,a=e.type,o={},i=a.indexOf("-")==-1;for(var s in t){var n=t[s];if(!(s==="value"&&"defaultValue"in t&&n==null||ai&&s==="children"&&a==="noscript"||s==="class"||s==="className")){var p=s.toLowerCase();s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&n===!0?n="":p==="translate"&&n==="no"?n=!1:p[0]==="o"&&p[1]==="n"?p==="ondoubleclick"?s="ondblclick":p!=="onchange"||a!=="input"&&a!=="textarea"||oi(t.type)?p==="onfocus"?s="onfocusin":p==="onblur"?s="onfocusout":ri.test(s)&&(s=p):p=s="oninput":i&&ei.test(s)?s=s.replace(ti,"-$&").toLowerCase():n===null&&(n=void 0),p==="oninput"&&o[s=p]&&(s="oninputCapture"),o[s]=n}}a=="select"&&(o.multiple&&Array.isArray(o.value)&&(o.value=tr(t.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),o.defaultValue!=null&&(o.value=tr(t.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value}))),t.class&&!t.className?(o.class=t.class,Object.defineProperty(o,"className",ii)):t.className&&(o.class=o.className=t.className),e.props=o}(r),r.$$typeof=Zo,Ia&&Ia(r)};var Ua=y.__r;y.__r=function(r){Ua&&Ua(r),Qa=r.__c};var ja=y.diffed;y.diffed=function(r){ja&&ja(r);var e=r.props,t=r.__e;t!=null&&r.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),Qa=null};function Za(r){return!!r.__k&&(jr(null,r),!0)}function Kr(r){return{render:function(e){Ja(e,r)},unmount:function(){Za(r)}}}var si=0,c0=Array.isArray;function C(r,e,t,a,o,i){e||(e={});var s,n,p=e;if("ref"in p)for(n in p={},e)n=="ref"?s=e[n]:p[n]=e[n];var c={type:r,props:p,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--si,__i:-1,__u:0,__source:o,__self:i};if(typeof r=="function"&&(s=r.defaultProps))for(n in s)p[n]===void 0&&(p[n]=s[n]);return y.vnode&&y.vnode(c),c}var ni={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},Jr={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},u0={dark:{...Jr.md.dark},light:{...Jr.md.light}},Ae={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}},ao={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function li(r){return ao[r].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `)}function ci(r){return ao[r].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `)}function pi(r){return Ae[r].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `)}function bi(r){let e=Ae[r],t=r==="mono"?.225:.45;return e.border.map(a=>{let o=a.color.replace("rgb(","rgba(").replace(")",`, ${t})`);return`radial-gradient(ellipse ${a.size.split(" ").map(i=>{let s=parseInt(i);return`${Math.round(s*.9)}px`}).join(" ")} at ${a.pos}, ${o}, transparent)`}).join(`,
    `)}function fi(r,e){let t=Ae[r];return e?t.spike:t.spikeLt}var di={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function ui(r,e,t){return di[r][e?"dark":"light"].map(a=>{let o=a.offsetX===0?"":a.offsetX>0?` + ${a.offsetX}px`:` - ${Math.abs(a.offsetX)}px`,i=a.offsetY===0?"":a.offsetY>0?` + ${a.offsetY}px`:` - ${Math.abs(a.offsetY)}px`;return`radial-gradient(ellipse calc(${a.sizeW}px * var(--beam-w-${t})) calc(${a.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${o}) calc(100%${i}), ${a.color}, transparent)`}).join(`,
       `)}var gi={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function mi(r,e){return gi[r].map(t=>{let a=t.offsetX===0?"":t.offsetX>0?` + ${t.offsetX}px`:` - ${Math.abs(t.offsetX)}px`,o=t.offsetY===0?"":` - ${Math.abs(t.offsetY)}px`;return`radial-gradient(ellipse calc(${t.sizeW}px * var(--beam-w-${e})) calc(${t.sizeH}px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%${a}) calc(100%${o}), ${t.color}, transparent)`}).join(`,
    `)}var hi={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function zr(r,e){let t=r.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(t)return`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${e})`;let a=r.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return a?`rgba(${a[1]}, ${a[2]}, ${a[3]}, ${e})`:r}function Pe(r,e){let t=r.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(t)return`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${(parseFloat(t[4])*e).toFixed(2)})`;let a=r.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return a?`rgba(${a[1]}, ${a[2]}, ${a[3]}, ${e.toFixed(2)})`:r}function xi(r,e,t){let a=fi(r,e),o=hi[r][e?"dark":"light"],i=r==="mono",s=i?.14:1,n=i?Pe(a.primary,.14):a.primary,p=i?Pe(a.primary,.09):a.primary,c=i?Pe(a.secondary,.12):a.secondary,d=i?zr(a.secondary,.06):zr(a.secondary,.49),b=o.spikes.map(Y=>i?{color1:Pe(Y.color1,s),color2:Pe(Y.color2,s*.7)}:Y),l=i?"12px":"0.8px",f=i?"14px":"2px",u=i?"12px":"1.2px",v=i?"10px":"0.6px",m=i?"42px":"92px",h=i?"38px":"72px",g=i?"40px":"85px",w=i?"32px":"60px",W=i?"12px":"1px",_=i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",H=i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",k=i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",x=i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",O=i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",$=i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(e)return`radial-gradient(ellipse calc(${l} * var(--beam-spike-${t}) * var(--beam-spike-mul, 1)) calc(${m} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${n}, ${p} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${t}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${c}, ${d} 50%, transparent 95%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike-${t})) * var(--beam-spike-mul, 1)) calc(${h} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${b[0].color1}, ${b[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${t}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${b[1].color1}, ${b[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${u} * (2 - var(--beam-spike2-${t})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${b[2].color1}, ${b[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${t}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${b[3].color1}, ${b[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${v} * (2 - var(--beam-spike-${t})) * var(--beam-spike-mul, 1)) calc(${w} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${b[4].color1}, ${b[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${t})) calc(15px * var(--beam-spike2-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 1px), ${_} 0%, ${H} 20%, ${k} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${t})) calc(40px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%, ${x} 0%, ${O} 25%, ${$} 55%, transparent 80%)`;{let Y=i?Pe(a.primary,.11):zr(a.primary,.85),A=i?Pe(a.secondary,.09):zr(a.secondary,.7);return`radial-gradient(ellipse calc(${l} * var(--beam-spike-${t}) * var(--beam-spike-mul, 1)) calc(${m} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${n}, ${Y} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${t}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${c}, ${A} 50%, transparent 95%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike-${t})) * var(--beam-spike-mul, 1)) calc(${h} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${b[0].color1}, ${b[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${t}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${b[1].color1}, ${b[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${u} * (2 - var(--beam-spike2-${t})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${b[2].color1}, ${b[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${t}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${b[3].color1}, ${b[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${W} * (2 - var(--beam-spike-${t})) * var(--beam-spike-mul, 1)) calc(${w} * var(--beam-h-${t}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${b[4].color1}, ${b[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${t})) calc(32px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}var oo=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],vi=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],_i=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],eo=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],$i=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function zi(r,e,t){let a=r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${a?`${a[1]}, ${a[2]}, ${a[3]}`:"255, 255, 255"}, var(--bop-${e}-${t}))`}function Zr(r,e,t,a,o,i,s,n){return`radial-gradient(ellipse calc(${e}px * var(--bw${a}-${n}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${t}px * var(--bh${a}-${n}) * var(--bgh-${n}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${i} + var(--bx${a}-${n})) calc(${s} + var(--by${a}-${n})), ${zi(r,o,n)}, transparent)`}function yi(r,e){return Ae[r].border.map((t,a)=>{let{region:o,quad:i}=oo[a],[s,n]=t.pos.split(" "),[p,c]=t.size.split(" ").map(parseFloat);return Zr(t.color,p,c,o,i,s,n,e)}).join(`,
    `)}function wi(r,e,t){let a=Ae[r].border.map((n,p)=>{let{region:c,quad:d}=oo[p],[b,l]=n.pos.split(" "),[f,u]=vi[p];return Zr(n.color,f,u,c,d,b,l,e)}),o=t?"255, 255, 255":"0, 0, 0",i=t?.18:.08,s=[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([n,p,c])=>`radial-gradient(ellipse 60px 60px at ${n} ${p}, rgba(${o}, calc(${i} * var(--bop-${c}-${e}))), transparent 70%)`);return[...a,...s].join(`,
    `)}function ro(r,e,t){let a=Ae[e].border;return r.map(o=>{var p,c;let i=a[o.ci],[s,n]=i.pos.split(" ");return Zr(i.color,o.w,o.h,o.region,o.quad,(p=o.x)!=null?p:s,(c=o.y)!=null?c:n,t)}).join(`,
    `)}function io(r,e,t){let a=Ae[e].border,o=+t.toFixed(3);return r.map(i=>{var f,u;let s=a[i.ci],[n,p]=s.pos.split(" "),c=(f=i.x)!=null?f:n,d=(u=i.y)!=null?u:p,b=s.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),l=b?`${b[1]}, ${b[2]}, ${b[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${i.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${i.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${c} ${d}, rgba(${l}, ${o}), transparent)`}).join(`,
    `)}function ir(r){return`
[data-beam="${r}"][data-paused],
[data-beam="${r}"][data-paused]::after,
[data-beam="${r}"][data-paused]::before,
[data-beam="${r}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function so(r){let e=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"],t=["bx1","by1","bx2","by2","bx3","by3"],a=e.map(i=>`@property --${i}-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),o=t.map(i=>`@property --${i}-${r} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${a}

${o}

@property --beam-opacity-${r} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${r} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function et(r,e,t){let a=e==="dark",o=t/2.3;return r==="pulse-inner"?{sp:.28,dr:a?33:40,op:a?.48:.45,gh:a?.34:.22,bs:(a?1.9:2.6)*o,ss:(a?2.6:4.6)*o,ghs:(a?2.4:5.5)*o,huePeriod:16}:{sp:a?.28:.36,dr:a?14:19,op:a?.46:0,gh:a?.16:.58,bs:(a?2.3:3.7)*o,ss:(a?6.4:4.6)*o,ghs:(a?2.4:3.8)*o,huePeriod:14}}function ki(r,e){let{sp:t,dr:a,op:o,gh:i,bs:s,ss:n,ghs:p}=e;return[{prop:`--bw1-${r}`,a:1-t,b:1+t*1.1,period:n*.9,delay:0,unit:""},{prop:`--bh1-${r}`,a:1+t*.9,b:1-t*.85,period:n*1.26,delay:0,unit:""},{prop:`--bx1-${r}`,a:-a,b:a*.9,period:s*1.6,delay:0,unit:"px"},{prop:`--by1-${r}`,a:a*.55,b:-a*.7,period:s*1.6,delay:0,unit:"px"},{prop:`--bw2-${r}`,a:1+t,b:1-t*.85,period:n*1.1,delay:0,unit:""},{prop:`--bh2-${r}`,a:1-t*.8,b:1+t*1.05,period:n*.81,delay:0,unit:""},{prop:`--bx2-${r}`,a:a*.8,b:-a*.9,period:s*1.88,delay:0,unit:"px"},{prop:`--by2-${r}`,a:-a,b:a*.65,period:s*1.88,delay:0,unit:"px"},{prop:`--bw3-${r}`,a:1-t*.6,b:1+t*1.15,period:n*.98,delay:0,unit:""},{prop:`--bh3-${r}`,a:1+t*.75,b:1-t,period:n*1.4,delay:0,unit:""},{prop:`--bx3-${r}`,a:-a*.6,b:a,period:s*1.45,delay:0,unit:"px"},{prop:`--by3-${r}`,a:-a*.85,b:a*.45,period:s*1.45,delay:0,unit:"px"},{prop:`--bgh-${r}`,a:1-i,b:1+i,period:p,delay:0,unit:""},{prop:`--bop-tl-${r}`,a:1-o,b:1,period:s,delay:0,unit:""},{prop:`--bop-tr-${r}`,a:1-o,b:1,period:s*1.32,delay:s*.28,unit:""},{prop:`--bop-bl-${r}`,a:1-o,b:1,period:s*.84,delay:s*.55,unit:""},{prop:`--bop-br-${r}`,a:1-o,b:1,period:s*1.58,delay:s*.83,unit:""}]}function Wi(r,e,t,a,o,i){if(r!=="pulse-inner"&&r!=="pulse-outside")return null;let s=et(r,e,t);return{oscillators:ki(i,s),hue:o?null:{prop:`--beam-hue-${i}`,range:360,period:s.huePeriod,continuous:!0}}}function yr(r,e,t){return`  animation: ${e}-${r} ${t}s ease forwards;`}function Ce(r,e=1){return Math.max(.5,Math.round(r*e*100)/100)}function Hi(r){let{size:e}=r;return e==="line"?Ci(r):e==="sm"?Xi(r):e==="pulse-inner"?Mi(r):e==="pulse-outside"?Si(r):Yi(r)}function Xi(r){let{id:e,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:p,colorVariant:c,staticColors:d,brightness:b,saturation:l,hueRange:f,theme:u,glowSize:v=1}=r,m=Math.max(0,t-a),h=c==="mono"?.5:1,g=i*h,w=s*h,W=n*h,_=d?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,H=d?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
}`,k=u==="dark",x=k?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,O=li(c),$=ci(c),Y=k?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,A=`conic-gradient(
    from var(--beam-angle-${e}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${o}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${o}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${x},${O};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * ${g.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${_}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  clip-path: inset(0 round ${t}px);
  background: ${$};
  box-shadow: inset 0 0 5px 1px ${p};
  -webkit-mask-image: ${A};
  -webkit-mask-composite: source-over;
  mask-image: ${A};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${w.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${_}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${t}px);
  background: ${Y};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${a}px;
  filter: blur(${Ce(8,v)}px) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${W.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${H}
${ir(e)}
`}function Yi(r){let{id:e,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:p,colorVariant:c,staticColors:d,brightness:b,saturation:l,hueRange:f,theme:u,glowSize:v=1}=r,m=Math.max(0,t-a),h=c==="mono"?.5:1,g=i*h,w=s*h,W=n*h,_=d?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,H=d?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
}`,k=u==="dark",x=k?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,O=pi(c),$=bi(c),Y=k?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${o}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${o}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${x},${O};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * ${g.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${_}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  background: ${$};
  box-shadow: inset 0 0 9px 1px ${p};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${w.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${t}px);
  ${_}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${t}px);
  background: ${Y};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${a}px;
  filter: blur(${Ce(8,v)}px) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${W.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${H}
${ir(e)}
`}function Mi(r){let{id:e,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,colorVariant:p,staticColors:c,brightness:d,saturation:b,hueRange:l,theme:f,glowSize:u=1}=r,v=f==="dark",m=p==="mono"?.5:1,h=(i*m).toFixed(2),g=(s*m).toFixed(2),w=(n*m).toFixed(2),{op:W}=et("pulse-inner",f,o),_=Ce(8,u),H=d.toFixed(2),k=b.toFixed(2),x=c?`filter: brightness(${H}) saturate(${k});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${H}) saturate(${k});`,O=c?`filter: blur(${_}px) brightness(${H}) saturate(${k});`:`filter: blur(${_}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${H}) saturate(${k});`,$=yi(p,e),Y=wi(p,e,v),A=io(_i,p,1-W*.5);return`
${so(e)}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${e}"][data-active] {
${yr(e,"beam-fade-in",.6)}
}

[data-beam="${e}"][data-fading] {
${yr(e,"beam-fade-out",.5)}
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${$};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${h} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${x}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  clip-path: inset(0 round ${t}px);
  background: ${Y};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${g} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${x}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  clip-path: inset(0 round ${t}px);
  background: ${A};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${a}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${w} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${O}
}

@keyframes beam-fade-in-${e} { to { --beam-opacity-${e}: 1; } }
@keyframes beam-fade-out-${e} { from { --beam-opacity-${e}: 1; } to { --beam-opacity-${e}: 0; } }
${ir(e)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${e}"][data-active],
  [data-beam="${e}"][data-fading],
  [data-beam="${e}"][data-active]::after,
  [data-beam="${e}"][data-fading]::after,
  [data-beam="${e}"][data-active]::before,
  [data-beam="${e}"][data-fading]::before,
  [data-beam="${e}"][data-active] [data-beam-bloom],
  [data-beam="${e}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function Si(r){let{id:e,borderRadius:t,duration:a,strokeOpacity:o,innerOpacity:i,bloomOpacity:s,colorVariant:n,staticColors:p,brightness:c,saturation:d,hueRange:b,theme:l,hairlineOpacity:f=0,glowSize:u=1}=r,v=l==="dark",m=n==="mono"?.5:1,h=(o*m).toFixed(2),g=(i*m).toFixed(2),w=(s*m).toFixed(2),W=v?"70, 70, 70":"0, 0, 0",_=f.toFixed(2),H=`linear-gradient(rgba(${W}, ${_}), rgba(${W}, ${_}))`,{op:k}=et("pulse-outside",l,a),x=.95,O=.9,$=Ce(v?3:6,u),Y=Ce(v?22.5:15,u),A=c.toFixed(2),j=d.toFixed(2),K=p?`filter: brightness(${A}) saturate(${j});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${A}) saturate(${j});`,D=`brightness(var(--beam-glow-brightness, ${A})) saturate(var(--beam-glow-saturate, ${j}))`,V=p?`filter: blur(var(--beam-core-blur, ${$}px)) ${D};`:`filter: blur(var(--beam-core-blur, ${$}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) ${D};`,I=p?`filter: blur(var(--beam-bloom-blur, ${Y}px)) ${D};`:`filter: blur(var(--beam-bloom-blur, ${Y}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) ${D};`,S=ro(eo,n,e),F=ro(eo,n,e),X=io($i,n,1-k*.5),E=f>0?`${S},
    ${H}`:S;return`
${so(e)}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${e}"][data-active] {
${yr(e,"beam-fade-in",.6)}
}

[data-beam="${e}"][data-fading] {
${yr(e,"beam-fade-out",.5)}
}
${f>0?`
/* Idle hairline \u2014 painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${e}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  padding: 1px;
  clip-path: inset(0 round ${t}px);
  background: ${H};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  padding: 1px;
  clip-path: inset(0 round ${t}px);
  background: ${E};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${h} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${K}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${t+10}px;
  background: ${F};
  transform: scale(${x}, ${O});
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${g} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${V}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${t+30}px;
  background: ${X};
  transform: scale(${x}, ${O});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${w} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${I}
}

@keyframes beam-fade-in-${e} { to { --beam-opacity-${e}: 1; } }
@keyframes beam-fade-out-${e} { from { --beam-opacity-${e}: 1; } to { --beam-opacity-${e}: 0; } }
${ir(e)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${e}"][data-active],
  [data-beam="${e}"][data-fading],
  [data-beam="${e}"][data-active]::after,
  [data-beam="${e}"][data-fading]::after,
  [data-beam="${e}"][data-active]::before,
  [data-beam="${e}"][data-fading]::before,
  [data-beam="${e}"][data-active] [data-beam-bloom],
  [data-beam="${e}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function Ci(r){let{id:e,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:p,colorVariant:c,staticColors:d,brightness:b,saturation:l,hueRange:f,theme:u,glowSize:v=1}=r,m=Math.max(0,t-a),h=u==="dark",g=i,w=s,W=n,_=d?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,H=d?"":`animation: beam-hue-shift-bloom-${e} 8s ease-in-out infinite;`,k=d?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${e} {
  0% { filter: blur(${Ce(8,v)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f+10}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  50% { filter: blur(${Ce(8,v)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f+10}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
  100% { filter: blur(${Ce(8,v)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f+10}deg)) brightness(${b.toFixed(2)}) saturate(${l.toFixed(2)}); }
}`,x=h?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,O=ui(c,h,e),$=mi(c,e),Y=xi(c,h,e),A=c==="mono"?"filter: blur(6px);":"";return`
@property --beam-x-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-travel-${e} ${o}s linear infinite,
    beam-edge-fade-${e} ${o}s linear infinite,
    beam-breathe-${e} ${(o*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(o*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(o*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-travel-${e} ${o}s linear infinite,
    beam-edge-fade-${e} ${o}s linear infinite,
    beam-breathe-${e} ${(o*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(o*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(o*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${x}, ${O};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${g.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${_}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  background: ${$};
  box-shadow: inset 0 0 9px 1px ${p};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${w.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${t}px);
  ${_}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${t}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${Y};
  ${A}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${W.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${H}
}

@keyframes beam-travel-${e} {
  0%   { --beam-x-${e}: 0.06;  --beam-w-${e}: 0.5; }
  10%  { --beam-x-${e}: 0.15;  --beam-w-${e}: 0.8; }
  20%  { --beam-x-${e}: 0.25;  --beam-w-${e}: 1.1; }
  30%  { --beam-x-${e}: 0.35;  --beam-w-${e}: 1.3; }
  40%  { --beam-x-${e}: 0.44;  --beam-w-${e}: 1.45; }
  50%  { --beam-x-${e}: 0.5;   --beam-w-${e}: 1.5; }
  60%  { --beam-x-${e}: 0.56;  --beam-w-${e}: 1.45; }
  70%  { --beam-x-${e}: 0.65;  --beam-w-${e}: 1.3; }
  80%  { --beam-x-${e}: 0.75;  --beam-w-${e}: 1.1; }
  90%  { --beam-x-${e}: 0.85;  --beam-w-${e}: 0.8; }
  100% { --beam-x-${e}: 0.94;  --beam-w-${e}: 0.5; }
}

@keyframes beam-edge-fade-${e} {
  0%    { --beam-edge-${e}: 0; }
  12.5% { --beam-edge-${e}: 0; }
  32.5% { --beam-edge-${e}: 1; }
  67.5% { --beam-edge-${e}: 1; }
  87.5% { --beam-edge-${e}: 0; }
  100%  { --beam-edge-${e}: 0; }
}

@keyframes beam-breathe-${e} {
  0%, 100% { --beam-h-${e}: 0.8; }
  25%      { --beam-h-${e}: 1.25; }
  55%      { --beam-h-${e}: 0.85; }
  80%      { --beam-h-${e}: 1.3; }
}

@keyframes beam-spike-${e} {
  0%   { --beam-spike-${e}: 0.8; }
  25%  { --beam-spike-${e}: 1.3; }
  50%  { --beam-spike-${e}: 0.9; }
  75%  { --beam-spike-${e}: 1.4; }
  100% { --beam-spike-${e}: 0.8; }
}

@keyframes beam-spike2-${e} {
  0%   { --beam-spike2-${e}: 1.2; }
  25%  { --beam-spike2-${e}: 0.7; }
  50%  { --beam-spike2-${e}: 1.4; }
  75%  { --beam-spike2-${e}: 0.8; }
  100% { --beam-spike2-${e}: 1.2; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${k}
${ir(e)}
`}var wr=new Set,Ne=null,Qr=0,Oi=1e3/30-2,Fi=Math.PI*2;function to(r){return(1-Math.cos(Fi*r))/2}function no(r){if(Ne=requestAnimationFrame(no),r-Qr<Oi)return;Qr=r;let e=r/1e3;wr.forEach(({el:t,config:a})=>{for(let o of a.oscillators){let i=(e-o.delay)/o.period,s=o.a+(o.b-o.a)*to(i);t.style.setProperty(o.prop,o.unit==="px"?`${s.toFixed(2)}px`:s.toFixed(4))}if(a.hue){let{prop:o,range:i,period:s,continuous:n}=a.hue,p=n?e/s%1*i:-i+2*i*to(e/s);t.style.setProperty(o,`${p.toFixed(2)}deg`)}})}function Ti(){Ne==null&&(Qr=0,Ne=requestAnimationFrame(no))}function Ei(){wr.size===0&&Ne!=null&&(cancelAnimationFrame(Ne),Ne=null)}function Ri(r,e){let t={el:r,config:e};return wr.add(t),Ti(),()=>{wr.delete(t),Ei()}}function Pi(){let[r,e]=J(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return oe(()=>{if(typeof window>"u")return;let t=window.matchMedia("(prefers-color-scheme: dark)"),a=o=>{e(o.matches?"dark":"light")};return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[]),r}function Ai(r,e){return r==="auto"?e:r}var lo=$r(function({children:r,size:e="md",colorVariant:t="colorful",theme:a="dark",staticColors:o=!1,duration:i,active:s=!0,borderRadius:n,brightness:p,saturation:c,hueRange:d=30,glowSize:b=1,strength:l=1,className:f,style:u,css:v,onActivate:m,onDeactivate:h,onAnimationEnd:g,...w},W){var me,he;let _=or().replace(/:/g,"-"),H=Pi(),k=Ee(null),[x,O]=J(s),[$,Y]=J(!1),[A,j]=J(!0),[K,D]=J(null),[V,I]=J({x:1,y:1});oe(()=>{if(n!=null)return;let L=k.current;if(!L)return;let G=()=>{let se=L.firstElementChild;if(!se)return;let ze=getComputedStyle(se),ue=parseFloat(ze.borderTopLeftRadius);!isNaN(ue)&&ue>0&&D(ue)};G();let de=new MutationObserver(G);return de.observe(L,{childList:!0,subtree:!1}),()=>de.disconnect()},[n,r]),oe(()=>{s&&!x&&!$?O(!0):!s&&x&&!$&&Y(!0)},[s,x,$]),oe(()=>{let L=k.current;if(!L||typeof IntersectionObserver>"u")return;let G=new IntersectionObserver(de=>{for(let se of de)j(se.isIntersecting)},{rootMargin:"256px"});return G.observe(L),()=>G.disconnect()},[]),oe(()=>{if(e!=="pulse-outside"){I({x:1,y:1});return}let L=k.current;if(!L)return;let G=350,de=140,se=.35,ze=4,ue=ne=>Math.max(se,Math.min(ze,ne)),He=()=>{let ne=L.firstElementChild;if(!ne)return;let fe=ne.getBoundingClientRect();if(!fe.width||!fe.height)return;let we=+ue(fe.width/G).toFixed(3),T=+ue(fe.height/de).toFixed(3);I(q=>q.x===we&&q.y===T?q:{x:we,y:T})};if(He(),typeof ResizeObserver>"u")return;let Xe=L.firstElementChild;if(!Xe)return;let Ye=new ResizeObserver(He);return Ye.observe(Xe),()=>Ye.disconnect()},[e,r]);let S=Re(L=>{let G=L.animationName;G.includes("fade-out")?(O(!1),Y(!1),h==null||h()):G.includes("fade-in")&&(m==null||m()),g==null||g(L)},[m,h,g]),F=Ai(a,H),X=Jr[e][F],E=ni[e],R=e==="pulse-inner"||e==="pulse-outside",P=(me=n!=null?n:K)!=null?me:E.borderRadius,ie=i!=null?i:e==="line"?3.1:R?2.3:1.96,ce=c!=null?c:X.saturation,pe=(he=p!=null?p:X.brightness)!=null?he:1.3,be=e==="line"?Math.min(d,13):d,Q=t==="mono"?!0:o,ge=We(()=>Hi({id:_,borderRadius:P,borderWidth:E.borderWidth,duration:ie,strokeOpacity:X.strokeOpacity,innerOpacity:X.innerOpacity,bloomOpacity:X.bloomOpacity,innerShadow:X.innerShadow,size:e,colorVariant:t,staticColors:Q,brightness:pe,saturation:ce,hueRange:be,theme:F,hairlineOpacity:X.hairlineOpacity,glowSize:b}),[_,P,E.borderWidth,ie,X.strokeOpacity,X.innerOpacity,X.bloomOpacity,X.innerShadow,X.hairlineOpacity,e,t,Q,pe,ce,be,b,F]),M=We(()=>R?Wi(e,F,ie,be,Q,_):null,[R,e,F,ie,be,Q,_]);oe(()=>{var L;if(!M||!(x||$)||!A)return;let G=k.current;if(G&&!(typeof window<"u"&&(L=window.matchMedia)!=null&&L.call(window,"(prefers-reduced-motion: reduce)").matches))return Ri(G,M)},[M,x,$,A]);let Z=Re(L=>{k.current=L,typeof W=="function"?W(L):W&&(W.current=L)},[W]),te={...u!=null?u:{},"--beam-strength":Math.max(0,Math.min(1,l)),...e==="pulse-outside"?{"--pulse-glow-sx":V.x,"--pulse-glow-sy":V.y}:{}};return C(ae,{children:[C("style",{children:v?`${ge}
${v.split("{id}").join(_)}`:ge}),C("div",{...w,ref:Z,"data-beam":_,"data-active":x&&!$?"":void 0,"data-fading":$?"":void 0,"data-paused":x&&!$&&!A?"":void 0,className:f,style:te,onAnimationEnd:S,children:[r,C("div",{"data-beam-bloom":!0})]})]})});function ho(r){let e=r.trim(),t=e.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(t){let o=t[1].length===3?t[1].split("").map(i=>i+i).join(""):t[1];return[parseInt(o.slice(0,2),16),parseInt(o.slice(2,4),16),parseInt(o.slice(4,6),16)]}let a=e.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);return a?[Math.round(+a[1]),Math.round(+a[2]),Math.round(+a[3])]:null}function Li(r){let e=ho(r);return e?`rgb(${e[0]}, ${e[1]}, ${e[2]})`:null}function kr(r){let e=ho(r);return e?`${e[0]}, ${e[1]}, ${e[2]}`:null}var Di={dark:{strokeOpacity:1.16,innerOpacity:.47,bloomOpacity:.89,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2,brightness:1.1},light:{strokeOpacity:1.2,innerOpacity:.85,bloomOpacity:.5,innerShadow:"rgba(0, 0, 0, 0.08)",saturation:1.6,brightness:.95,hueRange:40,hueDuration:8.5,hueBase:5,strength:.8,bandStrength:1.7}},je=[{x:0,w:74,h:46,band:0},{x:-36,w:54,h:40,band:1},{x:36,w:54,h:40,band:1},{x:-72,w:48,h:32,band:2},{x:72,w:48,h:32,band:2},{x:-108,w:42,h:26,band:1},{x:108,w:42,h:26,band:1}],qi=36,Ni=qi*je.length,Ii={colorful:{dark:["rgb(255, 70, 120)","rgb(60, 190, 255)","rgb(175, 70, 255)","rgb(60, 220, 130)","rgb(255, 150, 40)","rgb(90, 100, 255)","rgb(40, 200, 190)"],light:["rgb(255, 201, 21)","rgb(126, 196, 255)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(255, 176, 122)","rgb(154, 160, 255)","rgb(127, 217, 238)"]},mono:{dark:["rgb(215, 215, 215)","rgb(180, 180, 180)","rgb(190, 190, 190)","rgb(160, 160, 160)","rgb(170, 170, 170)","rgb(150, 150, 150)","rgb(155, 155, 155)"],light:["rgb(60, 60, 60)","rgb(90, 90, 90)","rgb(85, 85, 85)","rgb(110, 110, 110)","rgb(105, 105, 105)","rgb(125, 125, 125)","rgb(120, 120, 120)"]},ocean:{dark:["rgb(80, 140, 255)","rgb(40, 200, 230)","rgb(120, 90, 255)","rgb(30, 170, 210)","rgb(160, 80, 240)","rgb(60, 110, 255)","rgb(40, 190, 180)"],light:["rgb(40, 100, 240)","rgb(20, 160, 200)","rgb(90, 60, 230)","rgb(20, 130, 180)","rgb(130, 50, 220)","rgb(40, 80, 230)","rgb(20, 150, 150)"]},sunset:{dark:["rgb(255, 110, 60)","rgb(255, 180, 40)","rgb(255, 60, 90)","rgb(255, 210, 80)","rgb(240, 70, 140)","rgb(255, 140, 50)","rgb(230, 50, 110)"],light:["rgb(235, 80, 30)","rgb(230, 150, 10)","rgb(230, 30, 70)","rgb(225, 175, 30)","rgb(215, 40, 110)","rgb(235, 110, 20)","rgb(205, 30, 90)"]},forest:{dark:["rgb(70, 220, 120)","rgb(40, 200, 180)","rgb(140, 230, 80)","rgb(30, 170, 140)","rgb(190, 235, 70)","rgb(50, 190, 110)","rgb(30, 150, 120)"],light:["rgb(30, 170, 80)","rgb(20, 150, 130)","rgb(90, 180, 30)","rgb(20, 130, 100)","rgb(130, 180, 20)","rgb(30, 150, 80)","rgb(20, 120, 90)"]},candy:{dark:["rgb(255, 90, 170)","rgb(255, 120, 220)","rgb(210, 80, 255)","rgb(255, 150, 190)","rgb(180, 110, 255)","rgb(255, 70, 140)","rgb(230, 100, 240)"],light:["rgb(235, 40, 140)","rgb(230, 70, 190)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(150, 70, 230)","rgb(230, 30, 110)","rgb(200, 60, 210)"]},ice:{dark:["rgb(150, 230, 255)","rgb(90, 200, 255)","rgb(190, 240, 255)","rgb(120, 190, 255)","rgb(160, 220, 250)","rgb(80, 170, 255)","rgb(200, 235, 255)"],light:["rgb(30, 160, 220)","rgb(20, 130, 210)","rgb(60, 180, 230)","rgb(40, 120, 220)","rgb(50, 160, 220)","rgb(20, 110, 220)","rgb(70, 170, 230)"]},gold:{dark:["rgb(255, 200, 70)","rgb(255, 170, 40)","rgb(255, 220, 110)","rgb(240, 150, 30)","rgb(255, 235, 140)","rgb(230, 160, 40)","rgb(250, 210, 90)"],light:["rgb(200, 140, 10)","rgb(190, 120, 0)","rgb(210, 160, 30)","rgb(180, 110, 0)","rgb(205, 170, 40)","rgb(175, 115, 5)","rgb(195, 150, 20)"]}};function Ui(r,e){let t=r.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return t?`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${e.toFixed(2)})`:r}function rt(r,e=1){return Math.max(.5,Math.round(r*e*100)/100)}function ji(r,e){return`calc(50% + (var(--vb-cx-${e}) + var(--vb-x${r}-${e})) * var(--vb-w-${e}) * var(--vb-z-${e}, 1))`}function tt({id:r,colors:e,alpha:t,sw:a,sh:o,y:i,fade:s,count:n}){return(n?je.slice(0,n):je).map((p,c)=>{let d=t>=1?e[c%e.length]:Ui(e[c%e.length],t),b=`calc(${Math.round(p.w*a)}px * var(--vb-w-${r}) * var(--vb-z-${r}, 1))`,l=`calc(${Math.round(p.h*o)}px * var(--vb-h-${r}) * var(--vb-l${c}-${r}) * var(--vb-z-${r}, 1))`,f=`calc(100% + (${i}px + var(--vb-y${c}-${r})) * var(--vb-z-${r}, 1))`;return`radial-gradient(ellipse ${b} ${l} at ${ji(c,r)} ${f}, ${d} 0%, transparent ${s}%)`}).join(`,
    `)}function Vi(r){let{id:e,borderRadius:t,borderWidth:a,strokeOpacity:o,innerOpacity:i,bloomOpacity:s,innerShadow:n,colorVariant:p,colors:c,brightness:d,saturation:b,theme:l,hueBase:f=0,glowSize:u=1,glowWidth:v=1,glowHeight:m=1,strokeScale:h=1,innerScale:g=1,innerHeight:w=1,bloomScale:W=1,bloomHeight:_=1,coreSize:H=1,coreLight:k=0,coreLightWidth:x=1,coreLightHeight:O=1,rangeWidth:$=1,rangeHeight:Y=1,softness:A=1,distortion:j=!1,scale:K=1}=r,D=Math.round(28*K*10)/10,V=Math.round(9*K*10)/10,I=Math.max(0,t-a),S=Math.round(Math.max(40,Math.min(95,70*A))),F=T=>v*T,X=T=>m*T,E=T=>Math.round(T*10)/10,R=`var(--vb-z-${e}, 1)`,P=T=>`calc(${E(T)}px * ${R})`,ie=l==="dark",ce=Ii[p][ie?"dark":"light"].map((T,q)=>{let le=c==null?void 0:c[q];return le&&Li(le)||T}),pe=p==="mono"?.6:1,be=(o*pe).toFixed(2),Q=(i*pe).toFixed(2),ge=(s*pe).toFixed(2),M=d.toFixed(2),Z=b.toFixed(2),te=`hue-rotate(calc(var(--voice-hue-base, ${f}deg) + var(--vb-hue-${e})))`,me=j?` url(#vb-distort-${e})`:"",he=`filter: ${te} brightness(${M}) saturate(${Z});`,L=`filter: ${te} brightness(${M}) saturate(${Z})${me};`,G=`filter: blur(${P(rt(10,u))}) ${te} brightness(${M}) saturate(${Z});`,de=`filter: blur(${P(rt(10,u))}) ${te} brightness(${M}) saturate(${Z})${me};`,se=`calc(50% + var(--vb-cx-${e}) * var(--vb-w-${e}) * ${R})`,ze=`calc(100% + (2px + var(--vb-cy-${e})) * ${R})`,ue=ie?`radial-gradient(ellipse calc(${E(30*H)}px * var(--vb-w-${e}) * ${R}) calc(${E(30*H)}px * var(--vb-h-${e}) * ${R}) at ${se} ${ze}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 30%, transparent 65%)`:`radial-gradient(ellipse calc(${E(40*H)}px * var(--vb-w-${e}) * ${R}) calc(${E(30*H)}px * var(--vb-h-${e}) * ${R}) at ${se} ${ze}, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.22) 35%, transparent 70%)`,He=tt({id:e,colors:ce,alpha:1,sw:F(h),sh:X(h),y:2,fade:S}),Xe=tt({id:e,colors:ce,alpha:.46,sw:F(.9*g),sh:X(.9*g*w),y:0,fade:S}),Ye=tt({id:e,colors:ce,alpha:ie?.9:.7,sw:F(1.15*W),sh:X(1.5*W*_),y:0,fade:Math.min(95,S+2)}),ne=(T,q,le,xe=0)=>`radial-gradient(ellipse calc(${E(T*$)}px * var(--vb-w-${e}) * var(--vb-mw-${e}) * ${R}) calc((${E(q*Y)}px * var(--vb-h-${e}) + var(--vb-bh-${e})) * ${R}) at ${se} calc(100% + var(--vb-cy-${e}) * ${R}), white 0%, rgba(255, 255, 255, 0.5) ${le}%${xe>0?`, rgba(255, 255, 255, ${xe}) 85%`:""}, transparent 100%)`,fe=(T,q)=>`opacity: calc(var(--vb-opacity-${e}, 1) * var(--vb-glow-${e}) * ${q} * var(--voice-${T}-opacity, 1) * var(--voice-strength, 1));`,we=(T,q,le,xe)=>`${T} {
  ${q}
  position: absolute;
  inset: 0;
  border-radius: ${P(t)};
  background: ${Xe};
  box-shadow: inset 0 0 ${P(V)} 1px ${n};
  -webkit-mask-image:
    ${ne(170,64,45,.3)},
    linear-gradient(white, transparent ${P(D)}, transparent calc(100% - ${D}px * ${R}), white),
    linear-gradient(to right, white, transparent ${P(D)}, transparent calc(100% - ${D}px * ${R}), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    ${ne(170,64,45,.3)},
    linear-gradient(white, transparent ${P(D)}, transparent calc(100% - ${D}px * ${R}), white),
    linear-gradient(to right, white, transparent ${P(D)}, transparent calc(100% - ${D}px * ${R}), white);
  mask-composite: intersect, add;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 1;
  ${le}
  ${fe("inner",Q)}
  ${xe}
}`;return`
@property --vb-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-voice-beam="${e}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
  --vb-h-${e}: 0.8;
  --vb-w-${e}: 1;
${je.map((T,q)=>`  --vb-x${q}-${e}: ${T.x}px;
  --vb-l${q}-${e}: 1;
  --vb-y${q}-${e}: 0px;`).join(`
`)}
  --vb-glow-${e}: 0.4;
  --vb-z-${e}: 1;
  --vb-cx-${e}: 0px;
  --vb-cy-${e}: 0px;
  --vb-bh-${e}: 0px;
  --vb-bendA-${e}: 0;
  --vb-mw-${e}: 1;
  --vb-hue-${e}: 0deg;
  --vb-level-${e}: 0;
}

[data-voice-beam="${e}"][data-active] {
  animation: vb-fade-in-${e} 0.6s ease forwards;
}

[data-voice-beam="${e}"][data-fading] {
  animation: vb-fade-out-${e} 0.5s ease forwards;
}

/* Stroke \u2014 the colours painted into the 1px edge ring, masked to the centred ellipse. */
[data-voice-beam="${e}"][data-active]::after,
[data-voice-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${P(I)};
  padding: ${P(a)};
  clip-path: inset(0 round ${P(t)});
  background:
    ${ue},
    ${He};
  -webkit-mask:
    ${ne(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    ${ne(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 2;
  ${fe("stroke",be)}
  ${he}
}

/* Inner glow \u2014 soft light inside the element, faded off at the corners.
   With distortion on, this copy is clipped to ABOVE the band line (the
   polygon the driver writes each frame) and a mirror layer below carries
   the displacement filter, so only the glow under the line warps. */
${we(`[data-voice-beam="${e}"][data-active]::before,
[data-voice-beam="${e}"][data-fading]::before`,'content: "";',j?`clip-path: var(--vb-clip-above-${e}, inset(0 round ${t}px));`:`clip-path: inset(0 round ${t}px);`,he)}
${j?we(`[data-voice-beam="${e}"][data-active] [data-voice-beam-warp="inner"],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-warp="inner"]`,"display: block;",`clip-path: var(--vb-clip-below-${e}, inset(0 round ${t}px));`,L):""}

/* Bloom \u2014 the blurred halo, tallest of the three, above the content. */
[data-voice-beam="${e}"] [data-voice-beam-bloom],
[data-voice-beam="${e}"] [data-voice-beam-warp] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${P(I)};
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  opacity: 0;
}

[data-voice-beam="${e}"] [data-voice-beam-bloom],
[data-voice-beam="${e}"] [data-voice-beam-warp="bloom"] {
  -webkit-mask: ${ne(200,130,35)};
  mask: ${ne(200,130,35)};
  background: ${Ye};
  z-index: 3;
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-bloom] {
  display: block;
  clip-path: ${j?`var(--vb-clip-above-${e}, inset(0 round ${t}px))`:`inset(0 round ${t}px)`};
  ${fe("bloom",ge)}
  ${G}
}
${j?`
[data-voice-beam="${e}"][data-active] [data-voice-beam-warp="bloom"],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-warp="bloom"] {
  display: block;
  clip-path: var(--vb-clip-below-${e}, inset(0 round ${t}px));
  ${fe("bloom",ge)}
  ${de}
}

/* Processing drops the distortion: the driver marks the wrapper once the
   warp has faded out, the warp layers leave the paint and the base layers
   give up their split at the band line. */
[data-voice-beam="${e}"][data-voice-warp="off"]::before,
[data-voice-beam="${e}"][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${t}px);
}

[data-voice-beam="${e}"][data-voice-warp="off"] [data-voice-beam-warp] {
  display: none;
}`:""}

/* Epicentre \u2014 a soft white wash at the source, under the band line (the
   driver's clip; unclipped when no line is drawn), sitting above every
   glow layer and the band's halo so the centre reads lighter than the
   band (same z as the band canvases, painted after them). Sized by the voice like the
   other layers; off unless \`coreLight\` is set (the light theme sets it).
   Up to 1 it is the wash's opacity; past 1 the solid white core widens
   too, for a centre that stays lighter than a strong band. It follows the
   glow's presence but not \`strength\`, which would only dim it. */
${k>0?(()=>{let T=Math.max(0,Math.min(2,k-1)),q=Math.min(1,T),le=Math.max(0,T-1),xe=1+.3*T,Ve=E(45*q+27*le),Be=E(40+25*q+15*le),Sr=Math.min(1,.55+.35*q+.1*le).toFixed(2),Ge=E(72+14*q+8*le);return`[data-voice-beam="${e}"] [data-voice-beam-core] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${P(I)};
  overflow: hidden;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  /* The blur sits on this wrapper and the band-line clip on the child,
     so the cut edge is blurred too rather than left hard. */
  filter: blur(${P(rt(8,u))});
  z-index: 4;
}

[data-voice-beam="${e}"] [data-voice-beam-core] > div {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse calc(${E(120*x*xe*K)}px * var(--vb-w-${e}) * ${R}) calc((${E(70*O*xe*K)}px * var(--vb-h-${e}) + var(--vb-bh-${e})) * ${R}) at ${se} calc(100% + var(--vb-cy-${e}) * ${R}), white 0%, white ${Ve}%, rgba(255, 255, 255, ${Sr}) ${Be}%, transparent ${Ge}%);
  clip-path: var(--vb-clip-below-${e}, none);
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-core],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-core] {
  display: block;
  opacity: calc(var(--vb-opacity-${e}, 1) * min(1, var(--vb-glow-${e}) * ${Math.min(1,k).toFixed(2)} * ${(1.6+1.4*T).toFixed(2)}) * var(--voice-core-light-opacity, 1));
}
`})():""}
/* Band \u2014 the canvas the driver draws the bend's contour on: an organic
   bell with chromatic fringes. Fades with the root, follows the strength
   and turns with the hue drift like the other layers. */
[data-voice-beam="${e}"] [data-voice-beam-band],
[data-voice-beam="${e}"] [data-voice-beam-band-halo] {
  display: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 4;
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-band],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-band],
[data-voice-beam="${e}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-band-halo] {
  display: block;
  opacity: calc(var(--vb-opacity-${e}, 1) * var(--voice-band-opacity, 1) * var(--voice-strength, 1));
  /* The blur vars are 0 where the canvas blurs its own strokes; where the
     2D context has no filter (WebKit) the driver sets them and the layers
     are blurred here instead \u2014 the ridge on the band canvas, its wider
     halo on the canvas beneath. */
  filter: blur(var(--vb-band-blur-${e}, 0px)) ${te} brightness(${M}) saturate(${Z});
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-band-halo] {
  filter: blur(var(--vb-band-halo-blur-${e}, 0px)) ${te} brightness(${M}) saturate(${Z});
}

/* Resolution. The soft layers \u2014 inner light and its warp mirror, bloom and
   its mirror, the epicentre \u2014 are rastered at half size and scaled back
   up by the compositor: the box is halved, every length inside rides the
   layer's factor \`--vb-z\` at 0.5 (the driver also writes the band-line
   clips at half scale), and the will-change transform is rastered
   pre-scale where the engine does that (Chromium, Safari 18). For blurred
   gradients that is the same picture at a quarter of the raster and
   filter work, which is what a phone at 3x runs out of. The 1px stroke
   stays full-res on every screen: at half size it is half a CSS pixel,
   which a 3x phone rasters into a faint smear instead of the hairline,
   and the layer is cheap (no blur). The component sets
   \`data-voice-halfres\`. */
[data-voice-beam="${e}"][data-voice-halfres]::before,
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-warp],
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-core] {
  --vb-z-${e}: 0.5;
  inset: auto;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  transform: translateZ(0) scale(2);
  transform-origin: 0 0;
}
${j?`[data-voice-beam="${e}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: var(--vb-clip-above-z-${e}, inset(0 round ${P(t)}));
}
[data-voice-beam="${e}"][data-voice-halfres][data-active] [data-voice-beam-warp],
[data-voice-beam="${e}"][data-voice-halfres][data-fading] [data-voice-beam-warp] {
  clip-path: var(--vb-clip-below-z-${e}, inset(0 round ${P(t)}));
}
/* Processing (warp off): the mirrors are gone, so the base layers paint
   the whole box again \u2014 this must outweigh the split above. */
[data-voice-beam="${e}"][data-voice-halfres][data-voice-warp="off"]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${P(t)});
}`:`[data-voice-beam="${e}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${P(t)});
}`}
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-core] > div {
  clip-path: var(--vb-clip-below-z-${e}, none);
}
@keyframes vb-fade-in-${e} {
  to { --vb-opacity-${e}: 1; }
}

@keyframes vb-fade-out-${e} {
  from { --vb-opacity-${e}: 1; }
  to { --vb-opacity-${e}: 0; }
}

[data-voice-beam="${e}"][data-paused],
[data-voice-beam="${e}"][data-paused]::after,
[data-voice-beam="${e}"][data-paused]::before,
[data-voice-beam="${e}"][data-paused] [data-voice-beam-bloom] {
  animation-play-state: paused !important;
}
`}var sr=null;function Bi(){var e,t;if(typeof window>"u")return null;let r=window;return(t=(e=r.AudioContext)!=null?e:r.webkitAudioContext)!=null?t:null}function Gi(){let r=Bi();return r?(sr||(sr=new r),sr.state==="suspended"&&sr.resume().catch(()=>{}),sr):null}var at=new WeakMap;function Ki(r){let e=Gi();if(!e||r.getAudioTracks().length===0)return null;let t=at.get(r);t||(t={node:e.createMediaStreamSource(r),refs:0},at.set(r,t)),t.refs+=1;let a=e.createAnalyser();a.fftSize=1024,a.smoothingTimeConstant=.5,t.node.connect(a);let o=!1;return{analyser:a,release:()=>{if(!o){o=!0;try{t.node.disconnect(a)}catch(i){}if(t.refs-=1,t.refs<=0){try{t.node.disconnect()}catch(i){}at.delete(r)}}}}}var co=new WeakMap;function Ji(r){let e=co.get(r);return e||(e={level:0,bands:[0,0,0],phase:0,scanA:0,scanT:0,t:0,lastTs:0,warp:1},co.set(r,e)),e}var Mr=new Set,Ue=null,it=0,Qi=1e3/60-2,Zi=22,es=500,rs=4e3,Yr=0,ot=!1,Wr=!1,Ie=0,po=0,xo=Math.PI*2,ts=5,as=1.7,os=[[80,300],[300,2e3],[2e3,6e3]];function vo(r){return r<0?0:r>1?1:r}function is(r,e){let t=e/2;return((r+t)%e+e)%e-t}function ss(r,e){let t=r/(e/2+4);return Math.max(0,1-t*t)}function bo(r,e){if(r<=e)return 0;let t=(r-e)/Math.max(.001,1-e);return vo((1-Math.exp(-3*t))/(1-Math.exp(-3)))}function Hr(r,e,t,a,o){let i=e>r?a:o,s=1-Math.exp(-t/Math.max(.001,i));return r+(e-r)*s}var ns=2,ls=.06,cs=.35,ps=.03,bs=!(typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent)),fo=.05,fs=6,ds=12,us=.1,uo=.1,gs=170,ms=64,go=56;function hs(r,e,t,a){let o=r<0?1-a:1+a,i=Math.max(.05,t*o),s=Math.exp(-Math.pow(Math.abs(r)/i,e)),n=Math.exp(-Math.pow(1/i,e));return Math.max(0,(s-n)/(1-n))}function xs(r,e,t,a,o){if(t<=0||e<=0)return 0;let i=e*Math.max(0,Math.min(.98,a));if(r<=i)return 0;let s=Math.min(1,(r-i)/Math.max(1,e-i));return t*Math.pow(s,Math.max(.5,o))}function _o(r,e,t){return Math.max(0,Math.min(r,e/2,t/2))}function st(r,e,t,a=0){if(t<=0)return 0;let o=Math.min(r,e-r)-a;if(o>=t)return 0;if(o<=0)return t;let i=t-o;return t-Math.sqrt(Math.max(0,t*t-i*i))}function vs(r,e,t,a){let o=t/2+e.cx*e.w,i=gs*r.rangeWidth*e.w*e.mw,s=a*.82*Math.min(1,r.scale),n=Math.min(s,(ms*r.rangeHeight*e.h+e.lift)*r.bandPosition),p=a-r.bandOffset,c=Math.min(1,e.corner*4),d=r.bandTail*(1-c*c*(3-2*c)),b=d>.001,l=b?r.bandTailOverflow:0,f=b?-l:o-i,u=b?t+l:o+i,v=[];for(let m=0;m<=go;m++){let h=f+(u-f)*m/go,g=Math.max(-1,Math.min(1,(h-o)/Math.max(1,i))),w=(h<o?o:t-o)+l,W=hs(g,r.bandCurve,r.bandSpread,r.bandSkew)+xs(Math.abs(h-o),w,d,r.bandTailPosition,r.bandTailCurve),_=e.corner>0?st(h,t,_o(r.radius,t,a))*e.corner:0;v.push([h,p-n*W-_])}return v}function _s(r,e,t,a,o){for(let[i,s]of[["",1],["-z",.5]]){let n=b=>(b*s).toFixed(1)+"px",p=t.map(([b,l])=>`${n(b)} ${n(l)}`),c=`polygon(0 ${n(o)}, ${p.join(", ")}, ${n(a)} ${n(o)})`,d=`polygon(0 0, ${n(a)} 0, ${n(a)} ${n(o)}, ${p.slice().reverse().join(", ")}, 0 ${n(o)})`;r.style.setProperty(`--vb-clip-below${i}-${e}`,c),r.style.setProperty(`--vb-clip-above${i}-${e}`,d)}}function $s(r,e,t){let a=t;for(let n=0;n<e.length;n++)e[n][1]<a&&(a=e[n][1]);let o=Math.max(0,Math.min(.9,Math.floor((a-fs)/t/fo)*fo));if(o===r.filterTop)return;r.filterTop=o;let i=1+Math.max(us,ds/t),s=r.filter;s.setAttribute("x",`${-uo*100}%`),s.setAttribute("width",`${(1+2*uo)*100}%`),s.setAttribute("y",`${(o*100).toFixed(0)}%`),s.setAttribute("height",`${((i-o)*100).toFixed(1)}%`)}function zs(r,e,t){let{canvas:a,ctx:o,el:i,config:s}=r;if(!a||!o)return;let n=i.clientWidth,p=i.clientHeight;if(!n||!p)return;let c=Math.min(ns,typeof window<"u"&&window.devicePixelRatio||1),d=Math.round(n*c),b=Math.round(p*c);(a.width!==d||a.height!==b)&&(a.width=d,a.height=b),o.setTransform(c,0,0,c,0,0),o.clearRect(0,0,n,p);let l=r.haloCanvas,f=r.haloCtx;l&&f&&((l.width!==d||l.height!==b)&&(l.width=d,l.height=b),f.setTransform(c,0,0,c,0,0),f.clearRect(0,0,n,p));let u=Math.min(1,.6*s.bandStrength*e.strength);if(u<.005||s.bandWidth<=0)return;let v=s.theme==="dark",m=s.bandWidth*(1+.35*e.level),h=s.bandAberration*(.35+.65*e.level),g=(4+12*h)*s.scale,w=4*h*s.scale,W=(S,F)=>{o.beginPath(),o.moveTo(t[0][0]+S,t[0][1]+F);for(let X=1;X<t.length;X++)o.lineTo(t[X][0]+S,t[X][1]+F)},_={r:s.bandColors.above,g:s.bandColors.mid,c:s.bandColors.core,b:s.bandColors.below},H=(v?.42:.4)*u,k=14*m,x=3.5*s.bandWidth/2,O=x*c,$=typeof o.filter=="string",Y=$?"0px":`${x.toFixed(2)}px`;r.cssBlur!==Y&&(i.style.setProperty(`--vb-band-blur-${s.id}`,Y),i.style.setProperty(`--vb-band-halo-blur-${s.id}`,$?"0px":`${(x*3).toFixed(2)}px`),r.cssBlur=Y);let A=[[1,.16],[.72,.2],[.46,.26],[.22,.34]],j=[{rgb:_.r,a:1,ox:w,oy:-g},{rgb:_.g,a:.55,ox:w*.35,oy:-g*.35},{rgb:_.b,a:1,ox:-w,oy:g},{rgb:_.c,a:.9,ox:0,oy:0}];o.lineCap="round",o.lineJoin="round",o.globalCompositeOperation="source-over";let K=t[0][0],D=t[t.length-1][0],V=(S,F)=>{let X=o.createLinearGradient(K,0,D,0),E=s.bandTail>0?.015:.18;return X.addColorStop(0,`rgba(${S}, 0)`),X.addColorStop(E,`rgba(${S}, ${F.toFixed(3)})`),X.addColorStop(1-E,`rgba(${S}, ${F.toFixed(3)})`),X.addColorStop(1,`rgba(${S}, 0)`),X},I=!$&&f?f:o;$&&(o.filter=`blur(${(O*3).toFixed(1)}px)`),I.lineCap="round",I.lineJoin="round",I.strokeStyle=V(_.c,H*.3),I.lineWidth=k*2.2,I.beginPath(),I.moveTo(t[0][0],t[0][1]);for(let S=1;S<t.length;S++)I.lineTo(t[S][0],t[S][1]);I.stroke(),$&&(o.filter=`blur(${O.toFixed(1)}px)`);for(let S of j)for(let[F,X]of A)o.strokeStyle=V(S.rgb,H*S.a*X),o.lineWidth=Math.max(.6,k*F),W(S.ox,S.oy),o.stroke();$&&(o.filter="none"),o.globalCompositeOperation="source-over"}function ys(r){return(1-Math.cos(xo*r))/2}function ws(r,e){let t=r.analyser,a=r.time,o=r.freq;t.getFloatTimeDomainData(a);let i=0;for(let n=0;n<a.length;n++)i+=a[n]*a[n];e.level=Math.sqrt(i/a.length)*ts*r.config.sensitivity,t.getByteFrequencyData(o);let s=t.context.sampleRate/t.fftSize;for(let n=0;n<3;n++){let[p,c]=os[n],d=Math.max(0,Math.floor(p/s)),b=Math.min(o.length-1,Math.ceil(c/s)),l=0;for(let u=d;u<=b;u++)l+=o[u];let f=b>=d?l/(b-d+1)/255:0;e.bands[n]=f*as*r.config.sensitivity}}var Le={level:0,bands:[0,0,0]};function $o(r){Ue=requestAnimationFrame($o);let e=Yr?r-Yr:0;if(Yr=r,ot){if(Wr=!Wr,Wr)return;r>=po&&(ot=!1,Ie=0)}else e>Zi?Ie?r-Ie>es&&(ot=!0,Wr=!1,po=r+rs):Ie=r:Ie=0;r-it<Qi||(it=r,Mr.forEach(t=>{var a;let{el:o,config:i,source:s,s:n}=t,p=i.paused;if(p&&t.paintedConfig===i)return;let c=p?0:n.lastTs?Math.min(.05,(r-n.lastTs)/1e3):1/60;n.lastTs=r,n.t+=c;let d=n.t;if(!p)if(t.analyser)ws(t,Le);else{let M=s.getLevel?vo(s.getLevel()):0;Le.level=M,Le.bands[0]=M,Le.bands[1]=M*(.72+.28*Math.sin(d*9.1)),Le.bands[2]=M*(.6+.4*Math.sin(d*13.7+2))}let b=bo(Le.level,i.threshold);n.level=Hr(n.level,b,c,i.attack,i.release);for(let M=0;M<3;M++){let Z=bo(Le.bands[M],i.threshold*.6);n.bands[M]=Hr(n.bands[M],Z,c,i.attack,i.release*1.15)}let l=Ni*i.lobeSpacing;i.processing&&n.scanA<.001&&n.scanT===0&&(n.scanT=Math.max(.05,i.processingDuration)/2);let f=Math.max(.05,i.processingEase);n.scanA=Hr(n.scanA,i.processing?1:0,c,f*.9,f*.8),i.processing?n.scanT+=c:n.scanA<.001&&(n.scanT=0);let u=n.scanA*n.scanA*(3-2*n.scanA),v=o.clientWidth,m=o.clientHeight,h=l/2*i.processingTravel,g=n.scanT/Math.max(.05,i.processingDuration),w=Math.floor(g),W=g-w,_=Math.max(1,i.processingCurve),H=W<.5?.5*Math.pow(2*W,_):1-.5*Math.pow(2-2*W,_),k=i.reducedMotion?0:w%2===0?2*H-1:1-2*H,x=u*h*k,O=1-u*.6,$=1-u*.45,Y=1+u*.3*(1-k*k),A=i.reducedMotion?.5:.5+.5*Math.sin(xo*d/i.breatheDuration),j=n.level+(1-n.level)*i.idle*A,K=Math.max(0,Math.min(1,(u-.25)/.75)),D=K*K*(3-2*K),V=Math.max(j,i.processingLevel*D),I=.15+.85*V,S=.5+i.reach*V,F=(.85+i.spread*V)*Y;i.flow!==0&&!i.reducedMotion&&(n.phase=((n.phase+i.flow*V*c)%l+l)%l),o.style.setProperty(`--vb-level-${i.id}`,n.level.toFixed(3)),o.style.setProperty(`--vb-cx-${i.id}`,`${x.toFixed(1)}px`),o.style.setProperty(`--vb-mw-${i.id}`,$.toFixed(3));let X=i.bend*V;o.style.setProperty(`--vb-bh-${i.id}`,`${Math.max(0,X).toFixed(1)}px`);let E=i.bend>0?Math.min(1,X/i.bend):0;o.style.setProperty(`--vb-bendA-${i.id}`,E.toFixed(3));let R={cx:x,w:F,h:S,mw:$,lift:X,strength:E,level:n.level,corner:u},P=v/2+x*F,ie=30*i.scale*F,ce=_o(i.radius,v,m),pe=u*i.cornerFollow;o.style.setProperty(`--vb-cy-${i.id}`,`${(-st(P,v,ce,ie*1.4)*pe).toFixed(1)}px`),n.warp=Hr(n.warp,i.processing?0:1,c,cs,ls);let be=n.warp,Q=t.displace!=null&&be<ps;if(Q!==t.warpOff&&(t.warpOff=Q,Q?o.setAttribute("data-voice-warp","off"):o.removeAttribute("data-voice-warp")),v&&m&&(t.ctx||t.displace)){let M=vs(i,R,v,m);(t.displace&&!Q||i.coreLight>0)&&_s(o,i.id,M,v,m),t.filter&&!Q&&bs&&$s(t,M,m),t.ctx&&zs(t,R,M)}if(t.displace&&!Q){let M=i.reducedMotion?0:i.distortion*120*i.scale*(.15+.85*V)*be;t.displace.scale.baseVal=M,t.noiseShift&&(t.noiseShift.dx.baseVal=8*i.scale*Math.sin(d*.9),t.noiseShift.dy.baseVal=4*i.scale*Math.sin(d*.6+1.3))}o.style.setProperty(`--vb-glow-${i.id}`,I.toFixed(3)),o.style.setProperty(`--vb-h-${i.id}`,S.toFixed(3)),o.style.setProperty(`--vb-w-${i.id}`,F.toFixed(3));for(let M=0;M<je.length;M++){let Z=je[M],te=is(Z.x*i.lobeSpacing+n.phase,l),me=i.bands?.6+.7*n.bands[Z.band]:1;o.style.setProperty(`--vb-x${M}-${i.id}`,`${(te*O).toFixed(1)}px`),o.style.setProperty(`--vb-l${M}-${i.id}`,(me*ss(te,l)).toFixed(3));let he=v/2+(x+te*O)*F;o.style.setProperty(`--vb-y${M}-${i.id}`,`${(-st(he,v,ce,ie)*pe).toFixed(1)}px`)}let ge=i.staticColors||i.reducedMotion||i.hueRange===0?0:-i.hueRange+2*i.hueRange*ys(d/i.hueDuration);o.style.setProperty(`--vb-hue-${i.id}`,`${ge.toFixed(2)}deg`),(a=t.onLevel)==null||a.call(t,n.level),t.paintedConfig=i}))}function ks(){Ue==null&&(it=0,Yr=0,Ie=0,Ue=requestAnimationFrame($o))}function Ws(){Mr.size===0&&Ue!=null&&(cancelAnimationFrame(Ue),Ue=null)}function Hs(r,e,t,a){let o={el:r,config:e,source:t,onLevel:a,analyser:null,releaseAnalyser:null,time:null,freq:null,canvas:null,ctx:null,haloCanvas:null,haloCtx:null,displace:null,noiseShift:null,filter:null,filterTop:-1,s:Ji(r),paintedConfig:null,cssBlur:null,warpOff:r.hasAttribute("data-voice-warp")};e.distortion>0&&(o.displace=r.querySelector(":scope > svg feDisplacementMap"),o.noiseShift=r.querySelector(":scope > svg feOffset"),o.filter=r.querySelector(":scope > svg filter"));let i=r.querySelector(":scope > [data-voice-beam-band]");if(i){o.canvas=i,o.ctx=i.getContext("2d");let s=r.querySelector(":scope > [data-voice-beam-band-halo]");s&&(o.haloCanvas=s,o.haloCtx=s.getContext("2d"))}if(o.s.lastTs=0,t.stream){let s=Ki(t.stream);s&&(o.analyser=s.analyser,o.releaseAnalyser=s.release,o.time=new Float32Array(s.analyser.fftSize),o.freq=new Uint8Array(s.analyser.frequencyBinCount))}return Mr.add(o),ks(),()=>{var s;Mr.delete(o),(s=o.releaseAnalyser)==null||s.call(o),Ws()}}var Xs={scale:1,glowSize:1,processingDuration:1.1,processingLevel:.55,processingTravel:1.55,processingCurve:2.1,cornerFollow:.45,strokeOpacity:1,innerOpacity:1,bloomOpacity:1,idle:.18,reach:1.2,spread:1.05,flow:48,bend:60,bandStrength:1.55,bandWidth:2.15,bandPosition:.35,bandCurve:1.75,bandSpread:.87,bandSkew:.12,bandOffset:-27,bandTail:.59,bandTailPosition:.67,bandTailCurve:2.4,bandTailOverflow:15,bandAberration:.89,distortion:.62,distortionDetail:2.3,glowWidth:.65,glowHeight:1.25,lobeSpacing:.85,rangeWidth:.75,rangeHeight:1,softness:1.07,coreSize:1,coreLight:0,coreLightWidth:1,coreLightHeight:1,strokeScale:1,innerScale:1,innerHeight:1,bloomScale:1,bloomHeight:1},Ys={default:{},pill:{scale:.45,glowSize:.95,strokeOpacity:1.2,innerOpacity:.85,reach:1.35,spread:1.1,flow:0,bend:23,bandStrength:1.55,bandWidth:1.85,bandCurve:1.95,bandSpread:.38,bandOffset:-16,bandTail:0,processingTravel:2,cornerFollow:0,distortion:.45,distortionDetail:3,glowWidth:.65,glowHeight:.95,lobeSpacing:.45,rangeWidth:.8,rangeHeight:.7,softness:.88,coreSize:.25,strokeScale:1.25,innerScale:.95,bloomScale:1.05,bloomHeight:2.25},mobile:{scale:1.25,spread:.45,reach:3,flow:60,bend:70,bandWidth:2.4,bandCurve:1.55,bandSpread:.9,bandOffset:-50,bandTail:.62,bandTailPosition:.42,bandTailCurve:2.7,bandTailOverflow:22,processingDuration:1.05,processingLevel:.35,processingTravel:1,cornerFollow:.4,bandStrength:1.8,distortionDetail:2,glowWidth:1.15,glowHeight:2.1,lobeSpacing:1.35,rangeWidth:1.25,rangeHeight:1.2,softness:1.1}},Ms={default:{brightness:1.15},pill:{brightness:1.35,saturation:1.5},mobile:{strength:1,brightness:1.2,saturation:1.5}},Ss={default:{},pill:{},mobile:{strength:1}};function Cs(r="default",e="dark"){var t;return(t=e==="light"?Ss[r]:void 0)!=null?t:Ms[r]}var Os={default:{bandStrength:1.7},pill:{bandStrength:2},mobile:{bandStrength:1.7}};function Fs(r="default",e="dark"){let t=Ys[r],a={};return e==="light"&&(t.reach===void 0&&(a.reach=1.8),t.spread===void 0&&(a.spread=.8),t.coreLight===void 0&&(a.coreLight=1.8)),{...Xs,...a,...t,...e==="light"?Os[r]:void 0}}var Xr={dark:{core:"255, 255, 255",above:"255, 70, 80",mid:"90, 255, 150",below:"80, 140, 255"},light:{core:"197, 139, 255",above:"255, 122, 182",mid:"126, 196, 255",below:"45, 255, 171"}},Ts=1,Es=16,Rs=6e4,mo=typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent),Ps=(()=>{if(typeof document>"u")return!0;let r=document.createElement("canvas").getContext("2d");return!!r&&typeof r.filter=="string"})();function As(){let[r,e]=J(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return oe(()=>{if(typeof window>"u")return;let t=window.matchMedia("(prefers-color-scheme: dark)"),a=o=>e(o.matches?"dark":"light");return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[]),r}function Ls(){let[r,e]=J(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return oe(()=>{if(typeof window>"u"||!window.matchMedia)return;let t=window.matchMedia("(prefers-reduced-motion: reduce)"),a=o=>e(o.matches);return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[]),r}function Ds(r,e){return r==="auto"?e:r}var zo=$r(function({children:r,type:e="default",scale:t,stream:a=null,level:o=0,sensitivity:i=3.1,threshold:s=.015,attack:n=.325,release:p=.86,idle:c,breatheDuration:d=5.2,reach:b,spread:l,bands:f=!0,flow:u,processing:v=!1,processingDuration:m,processingLevel:h,processingTravel:g,processingCurve:w,cornerFollow:W,processingEase:_=.6,colorVariant:H="colorful",colors:k,bandColors:x,theme:O="dark",staticColors:$=!1,hueRange:Y,hueDuration:A,active:j=!0,paused:K=!1,borderRadius:D,brightness:V,saturation:I,glowSize:S,strokeOpacity:F,innerOpacity:X,bloomOpacity:E,bend:R,bandStrength:P,bandWidth:ie,bandPosition:ce,bandCurve:pe,bandSpread:be,bandSkew:Q,bandOffset:ge,bandTail:M,bandTailPosition:Z,bandTailCurve:te,bandTailOverflow:me,bandAberration:he,distortion:L,distortionDetail:G,glowWidth:de,glowHeight:se,lobeSpacing:ze,rangeWidth:ue,rangeHeight:He,softness:Xe,coreSize:Ye,coreLight:ne,coreLightWidth:fe,coreLightHeight:we,strokeScale:T,innerScale:q,innerHeight:le,bloomScale:xe,bloomHeight:Ve,strength:Be,className:Sr,style:Ge,css:nt,onLevel:lt,onActivate:Cr,onDeactivate:Or,onAnimationEnd:Fr,...wo},Ke){var oa,ia,sa,na,la,ca,pa;let Oe=or().replace(/:/g,"-"),ko=As(),ve=Ds(O,ko),Wo=k?k.join("|"):"",Ho=x?[x.core,x.above,x.mid,x.below].join("|"):"",z=Fs(e,ve),ee=Math.max(.05,t!=null?t:z.scale),ct=S!=null?S:z.glowSize,pt=F!=null?F:z.strokeOpacity,bt=X!=null?X:z.innerOpacity,ft=E!=null?E:z.bloomOpacity,dt=m!=null?m:z.processingDuration,ut=h!=null?h:z.processingLevel,gt=g!=null?g:z.processingTravel,mt=w!=null?w:z.processingCurve,ht=W!=null?W:z.cornerFollow,xt=c!=null?c:z.idle,vt=b!=null?b:z.reach,_t=l!=null?l:z.spread,$t=(u!=null?u:z.flow)*ee,zt=(R!=null?R:z.bend)*ee,yt=P!=null?P:z.bandStrength,wt=(ie!=null?ie:z.bandWidth)*ee,kt=ce!=null?ce:z.bandPosition,Wt=pe!=null?pe:z.bandCurve,Ht=be!=null?be:z.bandSpread,Xt=Q!=null?Q:z.bandSkew,Yt=(ge!=null?ge:z.bandOffset)*ee,Mt=M!=null?M:z.bandTail,St=Z!=null?Z:z.bandTailPosition,Ct=te!=null?te:z.bandTailCurve,Ot=(me!=null?me:z.bandTailOverflow)*ee,Ft=he!=null?he:z.bandAberration,Xo=L!=null?L:z.distortion,Tt=(G!=null?G:z.distortionDetail)/ee,Et=(de!=null?de:z.glowWidth)*ee,Rt=(se!=null?se:z.glowHeight)*ee,Pt=(ze!=null?ze:z.lobeSpacing)*ee,nr=(ue!=null?ue:z.rangeWidth)*ee,lr=(He!=null?He:z.rangeHeight)*ee,At=Xe!=null?Xe:z.softness,Lt=(Ye!=null?Ye:z.coreSize)*ee,Je=Math.max(0,Math.min(3,ne!=null?ne:z.coreLight)),Dt=fe!=null?fe:z.coreLightWidth,qt=we!=null?we:z.coreLightHeight,Nt=T!=null?T:z.strokeScale,It=q!=null?q:z.innerScale,Ut=le!=null?le:z.innerHeight,jt=xe!=null?xe:z.bloomScale,Vt=Ve!=null?Ve:z.bloomHeight,Bt=Ls(),Qe=Ee(null),[Fe,Gt]=J(j),[Me,Kt]=J(!1),[Tr,Yo]=J(!0),[Mo,So]=J(null),[Co,Oo]=J(0);oe(()=>{if(!mo)return;let N=Qe.current;if(!N)return;let re=()=>Oo(N.clientWidth*N.clientHeight);if(re(),typeof ResizeObserver>"u")return;let ye=new ResizeObserver(re);return ye.observe(N),()=>ye.disconnect()},[]);let De=mo&&Co>Rs?0:Xo;oe(()=>{if(D!=null)return;let N=Qe.current;if(!N)return;let re=()=>{let pr=N.firstElementChild;if(!pr)return;let Po=getComputedStyle(pr),Pr=parseFloat(Po.borderTopLeftRadius);!isNaN(Pr)&&Pr>0&&So(Pr)};re();let ye=new MutationObserver(re);return ye.observe(N,{childList:!0,subtree:!1}),()=>ye.disconnect()},[D,r]),oe(()=>{j&&!Fe&&!Me?Gt(!0):!j&&Fe&&!Me&&Kt(!0)},[j,Fe,Me]),oe(()=>{let N=Qe.current;if(!N||typeof IntersectionObserver>"u")return;let re=new IntersectionObserver(ye=>{for(let pr of ye)Yo(pr.isIntersecting)},{rootMargin:"256px"});return re.observe(N),()=>re.disconnect()},[]);let Fo=Re(N=>{let re=N.animationName;re.includes("fade-out")?(Gt(!1),Kt(!1),Or==null||Or()):re.includes("fade-in")&&(Cr==null||Cr()),Fr==null||Fr(N)},[Cr,Or,Fr]),_e=Di[ve],cr=(oa=D!=null?D:Mo)!=null?oa:Es,Er=Cs(e,ve),To=(sa=(ia=Be!=null?Be:Er.strength)!=null?ia:_e.strength)!=null?sa:1,Jt=(na=Y!=null?Y:_e.hueRange)!=null?na:24,Qt=(la=A!=null?A:_e.hueDuration)!=null?la:12,Zt=(ca=V!=null?V:Er.brightness)!=null?ca:_e.brightness,ea=(pa=I!=null?I:Er.saturation)!=null?pa:_e.saturation,ra=We(()=>{var N;return Vi({id:Oe,borderRadius:cr,borderWidth:Ts,strokeOpacity:_e.strokeOpacity*pt,innerOpacity:_e.innerOpacity*bt,bloomOpacity:_e.bloomOpacity*ft,innerShadow:_e.innerShadow,colorVariant:H,colors:k,brightness:Zt,saturation:ea,theme:ve,hueBase:(N=_e.hueBase)!=null?N:0,glowSize:ct*ee,glowWidth:Et,glowHeight:Rt,strokeScale:Nt,innerScale:It,innerHeight:Ut,bloomScale:jt,bloomHeight:Vt,coreSize:Lt,coreLight:Je,coreLightWidth:Dt,coreLightHeight:qt,rangeWidth:nr,rangeHeight:lr,softness:At,distortion:De>0,scale:ee})},[Oe,cr,_e,H,Wo,Zt,ea,ve,z,ct,pt,bt,ft,ee,Et,Rt,Nt,It,Ut,jt,Vt,Lt,Je,Dt,qt,nr,lr,At,De>0]),ta=We(()=>({id:Oe,sensitivity:Math.max(0,i),threshold:Math.max(0,Math.min(.95,s)),attack:Math.max(0,n),release:Math.max(0,p),idle:Math.max(0,Math.min(1,xt)),breatheDuration:Math.max(.2,d),reach:Math.max(0,vt),spread:Math.max(0,_t),bands:f,flow:$t,lobeSpacing:Math.max(.1,Pt),bend:Math.max(0,zt),bandStrength:Math.max(0,yt),bandWidth:Math.max(0,wt),bandPosition:Math.max(0,kt),bandCurve:Math.max(.3,Wt),bandSpread:Math.max(.05,Ht),bandSkew:Math.max(-.9,Math.min(.9,Xt)),bandOffset:Yt,bandTail:Math.max(0,Math.min(1.5,Mt)),bandTailPosition:Math.max(0,Math.min(.98,St)),bandTailCurve:Math.max(.5,Ct),bandTailOverflow:Math.max(0,Ot),bandAberration:Math.max(0,Math.min(1,Ft)),rangeWidth:nr,rangeHeight:lr,theme:ve,bandColors:{core:(x==null?void 0:x.core)&&kr(x.core)||Xr[ve].core,above:(x==null?void 0:x.above)&&kr(x.above)||Xr[ve].above,mid:(x==null?void 0:x.mid)&&kr(x.mid)||Xr[ve].mid,below:(x==null?void 0:x.below)&&kr(x.below)||Xr[ve].below},distortion:Math.max(0,Math.min(1,De)),coreLight:Je,scale:ee,radius:cr,processing:v,processingDuration:Math.max(.05,dt),processingLevel:Math.max(0,Math.min(1,ut)),processingEase:Math.max(.05,_),processingTravel:Math.max(0,gt),processingCurve:Math.max(1,mt),cornerFollow:Math.max(0,Math.min(1,ht)),hueRange:Math.max(0,Jt),hueDuration:Math.max(.5,Qt),staticColors:H==="mono"?!0:$,reducedMotion:Bt,paused:K}),[Oe,i,s,n,p,xt,d,vt,_t,f,$t,Pt,zt,yt,wt,kt,Wt,Ht,Xt,Yt,Mt,St,Ct,Ot,Ft,nr,lr,ve,Ho,De,Je,ee,cr,v,dt,ut,_,gt,mt,ht,Jt,Qt,$,H,Bt,K]),aa=Ee(o);aa.current=o;let Rr=Ee(lt);Rr.current=lt,oe(()=>{if(!(Fe||Me)||!Tr)return;let N=Qe.current;return N?Hs(N,ta,{stream:a,getLevel:()=>{let re=aa.current;return typeof re=="function"?re():re}},re=>{var ye;return(ye=Rr.current)==null?void 0:ye.call(Rr,re)}):void 0},[ta,a,Fe,Me,Tr]);let Eo=Re(N=>{Qe.current=N,typeof Ke=="function"?Ke(N):Ke&&(Ke.current=N)},[Ke]),Ro={...Ge!=null?Ge:{},"--voice-strength":Math.max(0,Math.min(1,To))};return C(ae,{children:[C("style",{children:nt?`${ra}
${nt.split("{id}").join(Oe)}`:ra}),C("div",{...wo,ref:Eo,"data-voice-beam":Oe,"data-voice-type":e,"data-voice-halfres":"","data-active":Fe&&!Me?"":void 0,"data-fading":Me?"":void 0,"data-paused":Fe&&!Me&&(!Tr||K)?"":void 0,"data-listening":a?"":void 0,"data-processing":v?"":void 0,className:Sr,style:Ro,onAnimationEnd:Fo,children:[r,C("div",{"data-voice-beam-bloom":!0}),De>0&&C(ae,{children:[C("div",{"data-voice-beam-warp":"inner"}),C("div",{"data-voice-beam-warp":"bloom"})]}),!Ps&&C("canvas",{"data-voice-beam-band-halo":!0,"aria-hidden":"true"}),C("canvas",{"data-voice-beam-band":!0,"aria-hidden":"true"}),Je>0&&C("div",{"data-voice-beam-core":!0,children:C("div",{})}),De>0&&C("svg",{"aria-hidden":"true",width:"0",height:"0",style:{position:"absolute",pointerEvents:"none"},children:C("filter",{id:`vb-distort-${Oe}`,x:"-20%",y:"-20%",width:"140%",height:"140%",colorInterpolationFilters:"sRGB",children:[C("feTurbulence",{type:"fractalNoise",baseFrequency:`${(.012*Tt).toFixed(4)} ${(.05*Tt).toFixed(4)}`,numOctaves:2,seed:7,result:"noise"}),C("feOffset",{in:"noise",dx:"0",dy:"0",result:"moved"}),C("feColorMatrix",{in:"moved",type:"matrix",values:"1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0  0 0 0 0 1",result:"map"}),C("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:0,xChannelSelector:"R",yChannelSelector:"G"})]})})]})]})});var yo={position:"absolute",inset:0,pointerEvents:"none"};function qs({fx:r,radius:e,opts:t}){return C(lo,{size:"md",colorVariant:"ocean",theme:"dark",active:!!r.thinking,duration:2.4,style:yo,...t,children:C("div",{style:{width:"100%",height:"100%",borderRadius:e}})})}function Ns({fx:r,radius:e,opts:t}){return C(zo,{colorVariant:"ocean",theme:"dark",stream:r.stream||null,active:!!(r.listening||r.transcribing),processing:!!r.transcribing,style:yo,...t,children:C("div",{style:{width:"100%",height:"100%",borderRadius:e}})})}function Is(r,e,t){t=t||{};let a=[],o={};function i({Comp:n,radius:p,extra:c}){let[d,b]=J(o);return a.push(b),C(n,{fx:d,radius:p,opts:c})}let s=n=>parseFloat(getComputedStyle(n).borderRadius)||0;return Kr(r).render(C(i,{Comp:qs,radius:s(r.parentElement),extra:t.beam})),Kr(e).render(C(i,{Comp:Ns,radius:s(e.parentElement),extra:t.voice})),{set(n){o={...o,...n},a.forEach(p=>p(o))}}}window.AgentFX={mount:Is};})();

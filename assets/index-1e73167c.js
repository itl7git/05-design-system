import{R as g,r as h,a as De}from"./index-902e4630.js";import{$ as ke,a as G,_ as F,b as He,c as re,d as Ee,e as Ze,f as le,g as Ve,h as Ue}from"./index-883097aa.js";import{j as R}from"./jsx-runtime-0741ab7f.js";var x="colors",C="sizes",u="space",we={gap:u,gridGap:u,columnGap:u,gridColumnGap:u,rowGap:u,gridRowGap:u,inset:u,insetBlock:u,insetBlockEnd:u,insetBlockStart:u,insetInline:u,insetInlineEnd:u,insetInlineStart:u,margin:u,marginTop:u,marginRight:u,marginBottom:u,marginLeft:u,marginBlock:u,marginBlockEnd:u,marginBlockStart:u,marginInline:u,marginInlineEnd:u,marginInlineStart:u,padding:u,paddingTop:u,paddingRight:u,paddingBottom:u,paddingLeft:u,paddingBlock:u,paddingBlockEnd:u,paddingBlockStart:u,paddingInline:u,paddingInlineEnd:u,paddingInlineStart:u,top:u,right:u,bottom:u,left:u,scrollMargin:u,scrollMarginTop:u,scrollMarginRight:u,scrollMarginBottom:u,scrollMarginLeft:u,scrollMarginX:u,scrollMarginY:u,scrollMarginBlock:u,scrollMarginBlockEnd:u,scrollMarginBlockStart:u,scrollMarginInline:u,scrollMarginInlineEnd:u,scrollMarginInlineStart:u,scrollPadding:u,scrollPaddingTop:u,scrollPaddingRight:u,scrollPaddingBottom:u,scrollPaddingLeft:u,scrollPaddingX:u,scrollPaddingY:u,scrollPaddingBlock:u,scrollPaddingBlockEnd:u,scrollPaddingBlockStart:u,scrollPaddingInline:u,scrollPaddingInlineEnd:u,scrollPaddingInlineStart:u,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:C,minBlockSize:C,maxBlockSize:C,inlineSize:C,minInlineSize:C,maxInlineSize:C,width:C,minWidth:C,maxWidth:C,height:C,minHeight:C,maxHeight:C,flexBasis:C,gridTemplateColumns:C,gridTemplateRows:C,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ge=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const a=(o=>JSON.stringify(o,Ge))(t);return a in e?e[a]:e[a]=r(t,...n)}},O=Symbol.for("sxs.internal"),oe=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ce=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Ye}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),qe=/\s+(?![^()]*\))/,W=e=>t=>e(...typeof t=="string"?String(t).split(qe):[t]),de={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:W((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:W((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:W((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:W((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:W((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:W((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},te=/([\d.]+)([^]*)/,Je=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(a=>a.includes("&")?a.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(a)?`:is(${n})`:n):n+" "+a)),r),[]):t,Ke=(e,t)=>e in Xe&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,a,o)=>n+(a==="stretch"?`-moz-available${o};${ne(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${ne(e)}:${n}fit-content`)+o):String(t),Xe={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},A=e=>e?e+"-":"",Ce=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,a,o,c,s)=>c=="$"==!!o?n:(a||c=="--"?"calc(":"")+"var(--"+(c==="$"?A(t)+(s.includes("$")?"":A(r))+s.replace(/\$/g,"-"):s)+")"+(a||c=="--"?"*"+(a||"")+(o||"1")+")":"")),Qe=/\s*,\s*(?![^()]*\))/,et=Object.prototype.toString,L=(e,t,r,n,a)=>{let o,c,s;const i=(d,m,f)=>{let l,p;const b=S=>{for(l in S){const v=l.charCodeAt(0)===64,w=v&&Array.isArray(S[l])?S[l]:[S[l]];for(p of w){const E=/[A-Z]/.test($=l)?$:$.replace(/-[^]/g,I=>I[1].toUpperCase()),H=typeof p=="object"&&p&&p.toString===et&&(!n.utils[E]||!m.length);if(E in n.utils&&!H){const I=n.utils[E];if(I!==c){c=I,b(I(p)),c=null;continue}}else if(E in de){const I=de[E];if(I!==s){s=I,b(I(p)),s=null;continue}}if(v&&(y=l.slice(1)in n.media?"@media "+n.media[l.slice(1)]:l,l=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(I,z,M,P,B,j)=>{const _=te.test(z),Y=.0625*(_?-1:1),[q,se]=_?[P,z]:[z,P];return"("+(M[0]==="="?"":M[0]===">"===_?"max-":"min-")+q+":"+(M[0]!=="="&&M.length===1?se.replace(te,(Fe,Q,ee)=>Number(Q)+Y*(M===">"?1:-1)+ee):se)+(B?") and ("+(B[0]===">"?"min-":"max-")+q+":"+(B.length===1?j.replace(te,(Fe,Q,ee)=>Number(Q)+Y*(B===">"?-1:1)+ee):j):"")+")"})),H){const I=v?f.concat(l):[...f],z=v?[...m]:Je(m,l.split(Qe));o!==void 0&&a(ue(...o)),o=void 0,i(p,z,I)}else o===void 0&&(o=[[],m,f]),l=v||l.charCodeAt(0)!==36?l:`--${A(n.prefix)}${l.slice(1).replace(/\$/g,"-")}`,p=H?p:typeof p=="number"?p&&E in tt?String(p)+"px":String(p):Ce(Ke(E,p??""),n.prefix,n.themeMap[E]),o[0].push(`${v?`${l} `:`${ne(l)}:`}${p}`)}}var y,$};b(d),o!==void 0&&a(ue(...o)),o=void 0};i(e,t,r)},ue=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,tt={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},fe=e=>String.fromCharCode(e+(e>25?39:97)),N=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=fe(r%52)+n;return fe(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),V=["themed","global","styled","onevar","resonevar","allvar","inline"],rt=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},nt=e=>{let t;const r=()=>{const{cssRules:a}=t.sheet;return[].map.call(a,(o,c)=>{const{cssText:s}=o;let i="";if(s.startsWith("--sxs"))return"";if(a[c-1]&&(i=a[c-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===o)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${s}`;return o.cssRules.length?`${i}${s}`:""}return s}).join("")},n=()=>{if(t){const{rules:s,sheet:i}=t;if(!i.deleteRule){for(;Object(Object(i.cssRules)[0]).type===3;)i.cssRules.splice(0,1);i.cssRules=[]}for(const d in s)delete s[d]}const a=Object(e).styleSheets||[];for(const s of a)if(rt(s)){for(let i=0,d=s.cssRules;d[i];++i){const m=Object(d[i]);if(m.type!==1)continue;const f=Object(d[i+1]);if(f.type!==4)continue;++i;const{cssText:l}=m;if(!l.startsWith("--sxs"))continue;const p=l.slice(14,-3).trim().split(/\s+/),b=V[p[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:i,cache:new Set(p)})}if(t)break}if(!t){const s=(i,d)=>({type:d,cssRules:[],insertRule(m,f){this.cssRules.splice(f,0,s(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return i==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:i}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:o,rules:c}=t;for(let s=V.length-1;s>=0;--s){const i=V[s];if(!c[i]){const d=V[s+1],m=c[d]?c[d].index:o.cssRules.length;o.insertRule("@media{}",m),o.insertRule(`--sxs{--sxs:${s}}`,m),c[i]={group:o.cssRules[m+1],index:m,cache:new Set([s])}}ot(c[i])}};return n(),t},ot=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},Z=Symbol(),at=D(),pe=(e,t)=>at(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const a of r)if(a!=null)if(a[O]){n.type==null&&(n.type=a[O].type);for(const o of a[O].composers)n.composers.add(o)}else a.constructor!==Object||a.$$typeof?n.type==null&&(n.type=a):n.composers.add(it(a,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),st(e,n,t)}),it=({variants:e,compoundVariants:t,defaultVariants:r,...n},a)=>{const o=`${A(a.prefix)}c-${N(n)}`,c=[],s=[],i=Object.create(null),d=[];for(const l in r)i[l]=String(r[l]);if(typeof e=="object"&&e)for(const l in e){m=i,f=l,Ye.call(m,f)||(i[l]="undefined");const p=e[l];for(const b in p){const S={[l]:String(b)};String(b)==="undefined"&&d.push(l);const y=p[b],$=[S,y,!ce(y)];c.push($)}}var m,f;if(typeof t=="object"&&t)for(const l of t){let{css:p,...b}=l;p=typeof p=="object"&&p||{};for(const y in b)b[y]=String(b[y]);const S=[b,p,!ce(p)];s.push(S)}return[o,n,c,s,i,d]},st=(e,t,r)=>{const[n,a,o,c]=lt(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(f=>{function l(){for(let p=0;p<l[Z].length;p++){const[b,S]=l[Z][p];f.rules[b].apply(S)}return l[Z]=[],null}return l[Z]=[],l.rules={},V.forEach(p=>l.rules[p]={apply:b=>l[Z].push([p,b])}),l})(r):null,i=(s||r).rules,d=`.${n}${a.length>1?`:where(.${a.slice(1).join(".")})`:""}`,m=f=>{f=typeof f=="object"&&f||ct;const{css:l,...p}=f,b={};for(const $ in o)if(delete p[$],$ in f){let v=f[$];typeof v=="object"&&v?b[$]={"@initial":o[$],...v}:(v=String(v),b[$]=v!=="undefined"||c.has($)?v:o[$])}else b[$]=o[$];const S=new Set([...a]);for(const[$,v,w,E]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),L(v,[`.${$}`],[],e,z=>{i.styled.apply(z)}));const H=ge(w,b,e.media),I=ge(E,b,e.media,!0);for(const z of H)if(z!==void 0)for(const[M,P,B]of z){const j=`${$}-${N(P)}-${M}`;S.add(j);const _=(B?r.rules.resonevar:r.rules.onevar).cache,Y=B?i.resonevar:i.onevar;_.has(j)||(_.add(j),L(P,[`.${j}`],[],e,q=>{Y.apply(q)}))}for(const z of I)if(z!==void 0)for(const[M,P]of z){const B=`${$}-${N(P)}-${M}`;S.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),L(P,[`.${B}`],[],e,j=>{i.allvar.apply(j)}))}}if(typeof l=="object"&&l){const $=`${n}-i${N(l)}-css`;S.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),L(l,[`.${$}`],[],e,v=>{i.inline.apply(v)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&S.add($);const y=p.className=[...S].join(" ");return{type:t.type,className:y,selector:d,props:p,toString:()=>y,deferredInjector:s}};return oe(m,{className:n,selector:d,[O]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},lt=e=>{let t="";const r=[],n={},a=[];for(const[o,,,,c,s]of e){t===""&&(t=o),r.push(o),a.push(...s);for(const i in c){const d=c[i];(n[i]===void 0||d!=="undefined"||s.includes(d))&&(n[i]=d)}}return[t,r,n,new Set(a)]},ge=(e,t,r,n)=>{const a=[];e:for(let[o,c,s]of e){if(s)continue;let i,d=0,m=!1;for(i in o){const f=o[i];let l=t[i];if(l!==f){if(typeof l!="object"||!l)continue e;{let p,b,S=0;for(const y in l){if(f===String(l[y])){if(y!=="@initial"){const $=y.slice(1);(b=b||[]).push($ in r?r[$]:y.replace(/^@media ?/,"")),m=!0}d+=S,p=!0}++S}if(b&&b.length&&(c={["@media "+b.join(", ")]:c}),!p)continue e}}}(a[d]=a[d]||[]).push([n?"cv":`${i}-${o[i]}`,c,m])}return a},ct={},dt=D(),ut=(e,t)=>dt(e,()=>(...r)=>{const n=()=>{for(let a of r){a=typeof a=="object"&&a||{};let o=N(a);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in a){let c=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(a["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,c++);delete a["@import"]}L(a,[],[],e,c=>{t.rules.global.apply(c)})}}return""};return oe(n,{toString:n})}),ft=D(),pt=(e,t)=>ft(e,()=>r=>{const n=`${A(e.prefix)}k-${N(r)}`,a=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const o=[];L(r,[],[],e,s=>o.push(s));const c=`@keyframes ${n}{${o.join("")}}`;t.rules.global.apply(c)}return n};return oe(a,{get name(){return a()},toString:a})}),gt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+A(this.prefix)+A(this.scale)+this.token}toString(){return this.computedValue}},mt=D(),ht=(e,t)=>mt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const a=`.${r=(r=typeof r=="string"?r:"")||`${A(e.prefix)}t-${N(n)}`}`,o={},c=[];for(const i in n){o[i]={};for(const d in n[i]){const m=`--${A(e.prefix)}${i}-${d}`,f=Ce(String(n[i][d]),e.prefix,i);o[i][d]=new gt(d,f,i,e.prefix),c.push(`${m}:${f}`)}}const s=()=>{if(c.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${c.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return s()},selector:a,toString:s}}),bt=D(),$t=D(),xt=e=>{const t=(r=>{let n=!1;const a=bt(r,o=>{n=!0;const c="prefix"in(o=typeof o=="object"&&o||{})?String(o.prefix):"",s=typeof o.media=="object"&&o.media||{},i=typeof o.root=="object"?o.root||null:globalThis.document||null,d=typeof o.theme=="object"&&o.theme||{},m={prefix:c,media:s,theme:d,themeMap:typeof o.themeMap=="object"&&o.themeMap||{...we},utils:typeof o.utils=="object"&&o.utils||{}},f=nt(i),l={css:pe(m,f),globalCss:ut(m,f),keyframes:pt(m,f),createTheme:ht(m,f),reset(){f.reset(),l.theme.toString()},theme:{},sheet:f,config:m,prefix:c,getCssText:f.toString,toString:f.toString};return String(l.theme=l.createTheme(d)),l});return n||a.reset(),a})(e);return t.styled=(({config:r,sheet:n})=>$t(r,()=>{const a=pe(r,n);return(...o)=>{const c=a(...o),s=c[O].type,i=g.forwardRef((d,m)=>{const f=d&&d.as||s,{props:l,deferredInjector:p}=c(d);return delete l.as,l.ref=m,p?g.createElement(g.Fragment,null,g.createElement(f,l),g.createElement(p,null)):g.createElement(f,l)});return i.className=c.className,i.displayName=`Styled.${s.displayName||s.name||s}`,i.selector=c.selector,i.toString=()=>c.selector,i[O]=c[O],i}}))(t),t};const Ie="Avatar",[yt,Fr]=ke(Ie),[St,Re]=yt(Ie),vt=h.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[a,o]=h.useState("idle");return h.createElement(St,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:o},h.createElement(G.span,F({},n,{ref:t})))}),kt="AvatarImage",Et=h.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:a=()=>{},...o}=e,c=Re(kt,r),s=It(n),i=He(d=>{a(d),c.onImageLoadingStatusChange(d)});return re(()=>{s!=="idle"&&i(s)},[s,i]),s==="loaded"?h.createElement(G.img,F({},o,{ref:t,src:n})):null}),wt="AvatarFallback",Ct=h.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...a}=e,o=Re(wt,r),[c,s]=h.useState(n===void 0);return h.useEffect(()=>{if(n!==void 0){const i=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(i)}},[n]),c&&o.imageLoadingStatus!=="loaded"?h.createElement(G.span,F({},a,{ref:t})):null});function It(e){const[t,r]=h.useState("idle");return h.useEffect(()=>{if(!e){r("error");return}let n=!0;const a=new window.Image,o=c=>()=>{n&&r(c)};return r("loading"),a.onload=o("loaded"),a.onerror=o("error"),a.src=e,()=>{n=!1}},[e]),t}const Rt=vt,zt=Et,Bt=Ct,Mt=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var jt=Object.defineProperty,K=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,me=(e,t,r)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))ze.call(t,r)&&me(e,r,t[r]);if(K)for(var r of K(t))Be.call(t,r)&&me(e,r,t[r]);return e},be=(e,t)=>{var r={};for(var n in e)ze.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&K)for(var n of K(e))t.indexOf(n)<0&&Be.call(e,n)&&(r[n]=e[n]);return r};const ae=h.forwardRef((e,t)=>{const r=e,{alt:n,color:a,size:o,weight:c,mirrored:s,children:i,weights:d}=r,m=be(r,["alt","color","size","weight","mirrored","children","weights"]),f=h.useContext(Mt),{color:l="currentColor",size:p,weight:b="regular",mirrored:S=!1}=f,y=be(f,["color","size","weight","mirrored"]);return g.createElement("svg",he(he({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??p,height:o??p,fill:a??l,viewBox:"0 0 256 256",transform:s||S?"scale(-1, 1)":void 0},y),m),!!n&&g.createElement("title",null,n),i,d.get(c??b))});ae.displayName="IconBase";var At=Object.defineProperty,Pt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable,xe=(e,t,r)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_t=(e,t)=>{for(var r in t||(t={}))Nt.call(t,r)&&xe(e,r,t[r]);if($e)for(var r of $e(t))Tt.call(t,r)&&xe(e,r,t[r]);return e},Wt=(e,t)=>Pt(e,Ot(t));const Lt=new Map([["bold",g.createElement(g.Fragment,null,g.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",g.createElement(g.Fragment,null,g.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),g.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",g.createElement(g.Fragment,null,g.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",g.createElement(g.Fragment,null,g.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",g.createElement(g.Fragment,null,g.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",g.createElement(g.Fragment,null,g.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),Me=h.forwardRef((e,t)=>g.createElement(ae,Wt(_t({ref:t},e),{weights:Lt})));Me.displayName="Check";var Ft=Object.defineProperty,Dt=Object.defineProperties,Ht=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Vt=Object.prototype.propertyIsEnumerable,Se=(e,t,r)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ut=(e,t)=>{for(var r in t||(t={}))Zt.call(t,r)&&Se(e,r,t[r]);if(ye)for(var r of ye(t))Vt.call(t,r)&&Se(e,r,t[r]);return e},Gt=(e,t)=>Dt(e,Ht(t));const Yt=new Map([["bold",g.createElement(g.Fragment,null,g.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",g.createElement(g.Fragment,null,g.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),g.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",g.createElement(g.Fragment,null,g.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",g.createElement(g.Fragment,null,g.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",g.createElement(g.Fragment,null,g.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",g.createElement(g.Fragment,null,g.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),je=h.forwardRef((e,t)=>g.createElement(ae,Gt(Ut({ref:t},e),{weights:Yt})));je.displayName="User";function qt(e,t){return h.useReducer((r,n)=>{const a=t[r][n];return a??r},e)}const Ae=e=>{const{present:t,children:r}=e,n=Jt(t),a=typeof r=="function"?r({present:n.isPresent}):h.Children.only(r),o=Ee(n.ref,a.ref);return typeof r=="function"||n.isPresent?h.cloneElement(a,{ref:o}):null};Ae.displayName="Presence";function Jt(e){const[t,r]=h.useState(),n=h.useRef({}),a=h.useRef(e),o=h.useRef("none"),c=e?"mounted":"unmounted",[s,i]=qt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return h.useEffect(()=>{const d=J(n.current);o.current=s==="mounted"?d:"none"},[s]),re(()=>{const d=n.current,m=a.current;if(m!==e){const l=o.current,p=J(d);e?i("MOUNT"):p==="none"||(d==null?void 0:d.display)==="none"?i("UNMOUNT"):i(m&&l!==p?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,i]),re(()=>{if(t){const d=f=>{const p=J(n.current).includes(f.animationName);f.target===t&&p&&De.flushSync(()=>i("ANIMATION_END"))},m=f=>{f.target===t&&(o.current=J(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:h.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}function J(e){return(e==null?void 0:e.animationName)||"none"}const Pe="Checkbox",[Kt,Dr]=ke(Pe),[Xt,Qt]=Kt(Pe),er=h.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:a,defaultChecked:o,required:c,disabled:s,value:i="on",onCheckedChange:d,...m}=e,[f,l]=h.useState(null),p=Ee(t,w=>l(w)),b=h.useRef(!1),S=f?!!f.closest("form"):!0,[y=!1,$]=Ze({prop:a,defaultProp:o,onChange:d}),v=h.useRef(y);return h.useEffect(()=>{const w=f==null?void 0:f.form;if(w){const E=()=>$(v.current);return w.addEventListener("reset",E),()=>w.removeEventListener("reset",E)}},[f,$]),h.createElement(Xt,{scope:r,state:y,disabled:s},h.createElement(G.button,F({type:"button",role:"checkbox","aria-checked":T(y)?"mixed":y,"aria-required":c,"data-state":Oe(y),"data-disabled":s?"":void 0,disabled:s,value:i},m,{ref:p,onKeyDown:le(e.onKeyDown,w=>{w.key==="Enter"&&w.preventDefault()}),onClick:le(e.onClick,w=>{$(E=>T(E)?!0:!E),S&&(b.current=w.isPropagationStopped(),b.current||w.stopPropagation())})})),S&&h.createElement(nr,{control:f,bubbles:!b.current,name:n,value:i,checked:y,required:c,disabled:s,style:{transform:"translateX(-100%)"}}))}),tr="CheckboxIndicator",rr=h.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...a}=e,o=Qt(tr,r);return h.createElement(Ae,{present:n||T(o.state)||o.state===!0},h.createElement(G.span,F({"data-state":Oe(o.state),"data-disabled":o.disabled?"":void 0},a,{ref:t,style:{pointerEvents:"none",...e.style}})))}),nr=e=>{const{control:t,checked:r,bubbles:n=!0,...a}=e,o=h.useRef(null),c=Ve(r),s=Ue(t);return h.useEffect(()=>{const i=o.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(c!==r&&f){const l=new Event("click",{bubbles:n});i.indeterminate=T(r),f.call(i,T(r)?!1:r),i.dispatchEvent(l)}},[c,r,n]),h.createElement("input",F({type:"checkbox","aria-hidden":!0,defaultChecked:T(r)?!1:r},a,{tabIndex:-1,ref:o,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function T(e){return e==="indeterminate"}function Oe(e){return T(e)?"indeterminate":e?"checked":"unchecked"}const or=er,ar=rr;var ir=Object.defineProperty,sr=Object.defineProperties,lr=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&ve(e,r,t[r]);if(X)for(var r of X(t))Te.call(t,r)&&ve(e,r,t[r]);return e},ie=(e,t)=>sr(e,lr(t)),cr=(e,t)=>{var r={};for(var n in e)Ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&X)for(var n of X(e))t.indexOf(n)<0&&Te.call(e,n)&&(r[n]=e[n]);return r},dr={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",test:"#FFF"},ur={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},fr={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},pr={default:"Roboto, sans-serif",code:"monospace"},gr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},mr={regular:"400",medium:"500",bold:"700"},hr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:k,css:Hr,globalCss:Zr,keyframes:_e,getCssText:Vr,theme:Ur,createTheme:Gr,config:Yr}=xt({themeMap:ie(U({},we),{height:"space",width:"space"}),theme:{colors:dr,fontSizes:gr,fontWeights:mr,fonts:pr,lineHeights:hr,radii:fr,space:ur}}),br=k("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});br.displayName="Box";var We=k("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});We.displayName="Text";var $r=k("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});$r.displayName="Heading";var xr=k(Rt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),yr=k(zt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Sr=k(Bt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function vr(e){return R.jsxs(xr,{children:[R.jsx(yr,U({},e)),R.jsx(Sr,{delayMs:600,children:R.jsx(je,{})})]})}vr.displayName="Avatar";var kr=k("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",padding:"0 $4",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{backgroundColor:"$gray200",cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secundary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});kr.displayName="Button";var Er=k("div",{background:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),wr=k("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),Cr=k("input",{fontFamily:"$default",fontSize:"$sm",fontWeight:"regular",color:"$white",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Le=h.forwardRef((e,t)=>{var r=e,{prefix:n,containerProps:a}=r,o=cr(r,["prefix","containerProps"]);return R.jsxs(Er,ie(U({},a),{children:[!!n&&R.jsx(wr,{children:n}),R.jsx(Cr,U({ref:t},o))]}))});Le.displayName="TextInput";var Ir=k("textarea",{background:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Ir.displayName="TextArea";var Rr=k(or,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),zr=_e({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Br=_e({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Mr=k(ar,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${zr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Br} 200ms ease-out`}});function jr(e){return R.jsx(Rr,ie(U({},e),{children:R.jsx(Mr,{asChild:!0,children:R.jsx(Me,{weight:"bold"})})}))}jr.displayName="Checkbox";var Ar=k("div",{}),Pr=k(We,{color:"$gray200",defaultVariants:{size:"xs"}}),Or=k("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Nr=k("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Tr({size:e,currentStep:t=1}){return R.jsxs(Ar,{children:[R.jsxs(Pr,{children:["Passo ",t," de ",e]}),R.jsx(Or,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>R.jsx(Nr,{active:t>=r},r))})]})}Tr.displayName="MultiStep";Le.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{vr as A,br as B,jr as C,$r as H,Tr as M,ae as P,Le as T,We as a,Ir as b,kr as c};
//# sourceMappingURL=index-1e73167c.js.map

"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=c(function(N,d){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-clip-index/dist'),g=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),p=require('@stdlib/ndarray-base-data-buffer/dist'),v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/blas-ext-base-gfill-not-equal/dist').ndarray;function h(e){var r,t,s,l,i,u,n,a;return a=e[0],r=v(e[1]),l=v(e[2]),n=o(a,0),i=q(v(e[3]),n),u=q(v(e[4]),n),i>=u||(t=g(a,0),s=m(a)+t*i,x(u-i,r,l,p(a),t,s)),a}d.exports=h
});var D=f();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

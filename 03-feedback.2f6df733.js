var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return f.Date.now()};function g(e,t,n){var a,r,i,o,u,l,f=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,i=r;return a=r=void 0,f=t,o=e.apply(i,n)}function S(e){return f=e,u=setTimeout(j,t),c?y(e):o}function h(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-f>=i}function j(){var e=d();if(h(e))return T(e);u=setTimeout(j,function(e){var n=t-(e-l);return g?m(n,i-(e-f)):n}(e))}function T(e){return u=void 0,b&&a?y(e):(a=r=void 0,o)}function w(){var e=d(),n=h(e);if(a=arguments,r=this,l=e,n){if(void 0===u)return S(l);if(g)return u=setTimeout(j,t),y(l)}return void 0===u&&(u=setTimeout(j,t)),o}return t=p(t)||0,v(n)&&(c=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,a=l=r=u=void 0},w.flush=function(){return void 0===u?o:T(d())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?o(e.slice(2),u?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:a,maxWait:t,trailing:r})};const b=localStorage.getItem("feedback-form-state"),y=JSON.parse(localStorage.getItem("feedback-form-state")),S=document.querySelector(".feedback-form"),h=document.querySelector('input[name ="email"]'),j=document.querySelector('textarea[name ="message"]'),T={email:"",message:""};T.email,null!=b?(h.value=y.email,j.value=y.message,T.email=y.email,T.message=y.message):(h.value="",j.value="");S.addEventListener("input",t((e=>{"email"===e.target.name?T.email=e.target.value:"message"===e.target.name&&(T.message=e.target.value),console.log(T),localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),S.addEventListener("submit",(e=>{if(e.preventDefault(),""===h.value||""===j.value)return alert("Fill in all the fields !");console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.2f6df733.js.map

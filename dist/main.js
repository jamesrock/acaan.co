!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){var e,t,n,r,a,i,u,o,c,d,l,s,p,f,v,h,m=localStorage.getItem("acaan.jamesrock.me"),C=function(){var t={cards:e};return localStorage.setItem("acaan.jamesrock.me",JSON.stringify(t)),this},g=function(){e=b(),C(),window.location.reload()},b=function(){for(var e=[],t=0;t<4;t++)for(var n=0;n<13;n++)e.push(new O(T[t],j[n],H()));return e},E=function(e){var t=[];return e.cards.forEach(function(e){t.push(new O(e.suit,e.value,e.position))}),t},L=function(e){var t=document.createElement("div");return t.classList.add("wrapper"),e&&t.classList.add(e),t},H=function(){var e=ROCK.MATH.random(0,k.length-1);return k.splice(e,1)[0]},M=function(){y=!y,v.setAttribute("data-open",y)},y=!0,O=(window.test=function(){var t=ROCK.MATH.random(0,51),n=ROCK.MATH.random(0,51);return r.value=e[t].id,i.value=n,this},ROCK.Object.extend({constructor:function(e,t,n){this.suit=e,this.value=t,this.position=n,this.id=this.getId(),this.name=this.getName()},getName:function(){return`${this.value}${this.suit}`},getDisplayName:function(){var e=x[this.suit];return`<div class="card-value"><div class="card-value-value">${this.value}</div><div class="card-value-icon">${e}</div></div>`},getColour:function(){return N[this.suit]},getId:function(){return`${this.value}${this.suit}`},toHTML:function(){var e=document.createElement("div");return e.innerHTML=this.getDisplayName(),e.classList.add("card"),e.classList.add(this.getColour()),e}})),S={SHUFFLE:ROCK.SORT.NUMBER_ASCENDING(function(){return this.position})},T=["C","D","H","S"],x={C:"&#xe918;",D:"&#xe919;",H:"&#xe9da;",S:"&#xe917;"},N={C:"black",D:"red",H:"red",S:"black"},j=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],k=function(){for(var e=[],t=0;t<52;t++)e.push(t);return e}();m?e=E(JSON.parse(m)):g(),r=function(){for(var t=document.createElement("select"),n=e.length,r=0;r<n;r++){var a=document.createElement("option");a.innerHTML=e[r].getName(),a.value=e[r].getId(),t.appendChild(a)}return t}(),a=L(),i=function(){for(var t=document.createElement("select"),n=e.length,r=0;r<n;r++){var a=document.createElement("option");a.innerHTML=r+1,a.value=r,t.appendChild(a)}return t}(),u=L(),o=function(){var e=document.createElement("button");return e.innerHTML="calculate",e}(),c=L(),d=function(){var e=document.createElement("button");return e.innerHTML="new stack",e}(),l=L(),s=function(e,t){var n=document.createElement("a");return n.href=e,n.innerText=t,n}("/usage.html","usage"),p=L(),f=L("cards"),v=L("card-display"),t=function(e){return e.sort(S.SHUFFLE)}([].concat(e)),n=function(t,n){var r={};return e.forEach(function(e){r[e[n]]=e}),r}(0,"id"),h=function(){var e=document.createElement("div");return e.classList.add("cards-inner"),t.forEach(function(t){e.appendChild(t.toHTML())}),e}(),a.appendChild(r),u.appendChild(i),c.appendChild(o),l.appendChild(d),p.appendChild(s),f.appendChild(h),app.appendChild(a),app.appendChild(u),app.appendChild(c),app.appendChild(l),app.appendChild(s),app.appendChild(f),app.appendChild(v),o.addEventListener("click",function(){var a=function(){var a=n[r.value].position-1,u=Number(i.value),o=a-u;return a<u&&(o=e.length+o),t[o]}();(function(e){return e.innerHTML="",e})(v).appendChild(a.toHTML()),M()}),d.addEventListener("click",function(){confirm("make a new stack?")&&g()}),v.addEventListener("click",function(){M()}),C(),M()}()}]);
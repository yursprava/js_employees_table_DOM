var e=document.querySelector("tbody"),t=document.querySelector("thead"),r=document.querySelectorAll("th"),n=!0,a=!1,i=void 0;try{for(var c,l=r[Symbol.iterator]();!(n=(c=l.next()).done);n=!0)c.value.setAttribute("data-state","unsorted")}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}t.addEventListener("click",function(t){var r,n,a,i,c,l,o,s,d,u,p,m,v;switch(t.target.innerHTML){case"Name":r=0;break;case"Position":r=1;break;case"Office":r=2;break;case"Age":r=3;break;case"Salary":r=4}switch(r){case 3:switch(t.target.dataset.state){case"unsorted":case"descending":;t.target.setAttribute("data-state","ascending"),s=r,(d=Array.from(document.querySelectorAll("tbody tr"))).sort(function(e,t){return Number(e.cells[s].innerHTML)-Number(t.cells[s].innerHTML)}),d.forEach(function(t){return e.appendChild(t)});break;case"ascending":t.target.setAttribute("data-state","descending"),n=r,(a=Array.from(document.querySelectorAll("tbody tr"))).sort(function(e,t){var r=Number(e.cells[n].innerHTML);return Number(t.cells[n].innerHTML)-r}),a.forEach(function(t){return e.appendChild(t)})}break;case 4:switch(t.target.dataset.state){case"unsorted":case"descending":;t.target.setAttribute("data-state","ascending"),u=r,(p=Array.from(document.querySelectorAll("tbody tr"))).sort(function(e,t){return parseInt(e.cells[u].innerHTML.replace(/[$,]/g,""),10)-parseInt(t.cells[u].innerHTML.replace(/[$,]/g,""),10)}),p.forEach(function(t){return e.appendChild(t)});break;case"ascending":t.target.setAttribute("data-state","descending"),i=r,(c=Array.from(document.querySelectorAll("tbody tr"))).sort(function(e,t){var r=parseInt(e.cells[i].innerHTML.replace(/[$,]/g,""),10);return parseInt(t.cells[i].innerHTML.replace(/[$,]/g,""),10)-r}),c.forEach(function(t){return e.appendChild(t)})}break;default:switch(t.target.dataset.state){case"unsorted":case"descending":;t.target.setAttribute("data-state","ascending"),m=r,(v=Array.from(document.querySelectorAll("tbody tr"))).sort(function(e,t){var r=e.cells[m].innerHTML,n=t.cells[m].innerHTML;return r.localeCompare(n)}),v.forEach(function(t){return e.appendChild(t)});break;case"ascending":t.target.setAttribute("data-state","descending"),l=r,(o=Array.from(document.querySelectorAll("tbody tr"))).sort(function(e,t){var r=e.cells[l].innerHTML;return t.cells[l].innerHTML.localeCompare(r)}),o.forEach(function(t){return e.appendChild(t)})}}}),e.addEventListener("click",function(e){var t=e.target.closest("tr");if(t){var r=document.querySelectorAll("tbody tr"),n=!0,a=!1,i=void 0;try{for(var c,l=r[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var o=c.value;o.classList.contains("active")&&o.classList.remove("active")}}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}t.classList.add("active")}});var o=document.querySelector("body"),s=document.createElement("form");s.classList.add("new-employee-form"),o.append(s);var d=document.createElement("label");d.innerHTML="Name:",d.setAttribute("for","name"),s.append(d);var u=document.createElement("input");u.setAttribute("data-qa","name"),u.setAttribute("id","name"),u.setAttribute("required",""),d.append(u);var p=document.createElement("label");p.innerHTML="Position:",p.setAttribute("for","position"),s.append(p);var m=document.createElement("input");m.setAttribute("data-qa","position"),m.setAttribute("id","position"),m.setAttribute("required",""),p.append(m);var v=document.createElement("label");v.innerHTML="Office:",v.setAttribute("for","office"),s.append(v);var b=document.createElement("select");b.setAttribute("data-qa","office"),b.setAttribute("id","office"),b.setAttribute("required",""),v.append(b);var f=document.createElement("option");f.setAttribute("value",""),f.innerHTML="-- Choose a city --",b.append(f);var y=document.createElement("option");y.setAttribute("value","Tokyo"),y.innerHTML="Tokyo",b.append(y);var L=document.createElement("option");L.setAttribute("value","Singapore"),L.innerHTML="Singapore",b.append(L);var A=document.createElement("option");A.setAttribute("value","London"),A.innerHTML="London",b.append(A);var g=document.createElement("option");g.setAttribute("value","New York"),g.innerHTML="New York",b.append(g);var E=document.createElement("option");E.setAttribute("value","Edinburgh"),E.innerHTML="Edinburgh",b.append(E);var h=document.createElement("option");h.setAttribute("value","San Francisco"),h.innerHTML="San Francisco",b.append(h);var T=document.createElement("label");T.innerHTML="Age:",T.setAttribute("for","age"),s.append(T);var H=document.createElement("input");H.setAttribute("type","number"),H.setAttribute("data-qa","age"),H.setAttribute("id","age"),H.setAttribute("required",""),T.append(H);var M=document.createElement("label");M.innerHTML="Salary:",M.setAttribute("for","salary"),s.append(M);var q=document.createElement("input");q.setAttribute("type","number"),q.setAttribute("data-qa","salary"),q.setAttribute("id","salary"),q.setAttribute("required",""),M.append(q);var S=document.createElement("div");S.classList.add("notification"),S.setAttribute("data-qa","notification"),S.setAttribute("style","display: none;");var k=document.createElement("div");k.classList.add("title"),S.append(k);var w=document.createElement("div");S.append(w),o.append(S);var C=document.createElement("button");C.setAttribute("type","submit"),C.innerHTML="Save to table",C.classList.add("button"),s.append(C),C.addEventListener("click",function(t){t.preventDefault(),S.removeAttribute("style");var r=u.value.length<4,n=0===u.value.trim().length,a=m.value.length<1,i=0===m.value.trim().length,c=0===b.value.trim().length,l=H.value<18||H.value>90,o=0===H.value.trim().length,s=0===q.value.trim().length;if(r||n||a||i||c||l||o||s){S.classList.remove("success"),S.classList.add("error"),k.innerHTML="Error!",w.innerHTML="Too short value, only spaces or wrong age!";return}S.classList.remove("error"),S.classList.add("success"),k.innerHTML="Success!",w.innerHTML="You have successfully added an employee!";var d=document.createElement("tr"),p=document.createElement("td");p.innerHTML=u.value,d.append(p);var v=document.createElement("td");v.innerHTML=m.value,d.append(v);var f=document.createElement("td");f.innerHTML=b.value,d.append(f);var y=document.createElement("td");y.innerHTML=H.value,d.append(y);var L=document.createElement("td"),A=String(q.value.split("").reverse().join(""));if(A.length>=4&&A.length<=6){var g=(A.slice(0,3)+","+A.slice(3)+"$").split("").reverse().join("");L.innerHTML=g,d.append(L)}else if(A.length>=7){var E=(A.slice(0,3)+","+A.slice(3,6)+(","+A.slice(6))+"$").split("").reverse().join("");L.innerHTML=E,d.append(L)}e.append(d)}),e.addEventListener("dblclick",function(e){if("TD"===e.target.tagName){var t=e.target,r=t.innerHTML;t.innerHTML="",t.classList.add("changedTd");var n=document.createElement("form");n.setAttribute("style","position: absolute;");var a=document.createElement("input");a.classList.add("changesInput"),a.setAttribute("placeholder","Enter a new value"),n.append(a);var i=document.createElement("input");i.classList.add("changesButton"),i.setAttribute("type","button"),i.setAttribute("value","OK"),n.append(i);var c=e.pageX,l=e.pageY;n.style.left="".concat(c,"px"),n.style.top="".concat(l,"px"),document.body.append(n),i.addEventListener("click",function(){if(0===a.value.length){t.innerHTML=r,document.body.removeChild(n);return}t.innerHTML=a.value,document.body.removeChild(n)})}});
//# sourceMappingURL=index.1d54479b.js.map
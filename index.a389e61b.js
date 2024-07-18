document.querySelectorAll("input").forEach(function(e){var l=document.createElement("label"),t=e.name.split(/(?=[A-Z])/).join(" ");l.className="field-label",l.htmlFor=e.id,l.textContent=t,e.placeholder=t.charAt(0).toUpperCase()+t.slice(1),e.before(l)});
//# sourceMappingURL=index.a389e61b.js.map

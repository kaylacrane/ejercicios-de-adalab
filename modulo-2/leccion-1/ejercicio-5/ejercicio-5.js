"use strict";
document.body.innerHTML = document.body.innerHTML.replace("Ada2020", "**");

// To replace all instances of the target string, use a simple regular expression with the global flag:

document.body.innerHTML = document.body.innerHTML.replace(/Ada2020b/g, "****");

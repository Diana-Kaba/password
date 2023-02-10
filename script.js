let text = document.getElementById("text").innerHTML;
let password = document.getElementById("password");

let reg = /(password|пароль): <b>[0-9a-z]*<\/b>/g;
password.innerHTML = text.match(reg);

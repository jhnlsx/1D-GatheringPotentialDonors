function toggleMenu() {
const menu=
document.getElementById("MobileMenu");

if (menu) {
    manu,classList.toggle("open");
}
}

function toast(message){
    let t =
document.createElement("toast>");
if (!t) {
    t=
document.createElement("div");
t.id = "toast";
t.className = "toast";

document.body.appendChild(t);      
}
}
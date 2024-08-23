function showSearch(){
    let search = document.getElementById("search-input-mb");
        search.classList.toggle("active");
}
function closeSearch(){
    let search = document.getElementById("search-input-mb");
    search.classList.remove("active");
}

function showMenumb(){
    let downIcon = document.getElementById("menu-mb-li-1");
     downIcon.classList.toggle("show");
}
function showMenumb2(){
    let downIcon = document.getElementById("menu-mb-li-2");
     downIcon.classList.toggle("show2");
}
function showMenumb3(){
    let downIcon = document.getElementById("menu-mb-li-3");
     downIcon.classList.toggle("show3");
}

const search = document.querySelector("i");
function funk(){
    const val = document.querySelector("input").value;
    const img = document.querySelector("img");
    const name = document.querySelector("h2");
    const obuna = document.querySelector("#obuna");
    const loyixa = document.querySelector("#loyixa");
    const btn = document.querySelector(".btn");
    const obunalarim = document.querySelector("#obunalarim")
    const xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.github.com/users/${val}`,true);
    xhr.onload = function(){
        var date = this.response;
        var res = JSON.parse(date);
        img.setAttribute("src",`${res.avatar_url}`)
        name.textContent = `${res.name}`
        loyixa.textContent = `${res.public_repos}`
        obuna.textContent = `${res.followers}`
        obunalarim.textContent = `${res.following}`
        btn.setAttribute("href",`${res.html_url}`)

    }
    xhr.send()
}

search.addEventListener("click",()=>{
    funk()
})
window.addEventListener("keydown",(e)=>{
    if((e.key == "Enter")){
        funk()
    }
})

var options = {
    strings: ['GITHUBDAGI',"DO'STINGIZNI","TOPING"],
    typeSpeed: 100,
    loop:true,
    cursorChar: '',
    fadeOutDelay: 1000,
    backDelay: 700,
    startDelay: 500,
    backSpeed: 50,
  };
  
  var typed = new Typed('.info', options);

  AOS.init();



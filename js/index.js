function buy(){
    let name = prompt("What is your name?");
    let email = prompt("What is your email adresse?");
    let emoji = prompt("What is your favorite emoji?");
    if (name.length > 0){
      alert("Thank you " + name + "! We will be in touch by email, meanwhile have lot of yogurt! " + emoji);  
    }else{
        alert("Fill all  fields 🙄")
    }   
}
let buyButton = document.querySelector(".buy_button");
buyButton.addEventListener("click",buy);
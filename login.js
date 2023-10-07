const $submit = document.getElementById("submit"), 
        $password = document.getElementById("password"),
        $ussername = document.getElementById("ussername"),
        $visible = document.getElementById("visible")

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password"
        else $password.type = "text";
    }
})
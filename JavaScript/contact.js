

$("#submit-btn").click(()=>{
    let fname=$('#fname').val();
    let email=$("#email").val();
    let phone=$("#phone").val();
    const Regexfname=/[A-Za-z]/;
    const Regexlname=/(([a-z]|[A-Z]|[0-9])@{a-z}){9,}/;
    const RegexPhone=/[+]92[1-9]*/;

    alert(RegexPhone.test(phone));
})
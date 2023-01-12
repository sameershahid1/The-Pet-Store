

$("#submit-btn").click(() => {
    let fname = $('#fname').val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    const Regexfname = /[A-Za-z]/;
    const Regexemail = /(([a-z]|[A-Z]|[0-9])@{a-z}){9,}/;
    const RegexPhone = /([+]92[1-9]){11,}/;



    if (RegexPhone.test(phone) || Regexfname.test(fname) || Regexemail.test(email)) {
        alert("You have wrong information on the form, that is why the forom ");
    }
})
var weblink;
var webpass;
var output;

function addPassword() {
    webpass = document.getElementById("pword").value
    weblink = document.getElementById("wlink").value
    var ip;

    if (weblink != undefined && webpass != undefined) {
        console.log("Now time to create a bookmark using the website " + weblink + " with the password " + webpass)
        fetch('https://api.ipify.org/').then(
            r => r.text(ip)
        ).then();
        output = "javascript:(function() { var ask = prompt('Please enter your password'); if(ask == '" + webpass + "') { window.open('" + weblink + "') } else { alert('Wrong password! '" + ip + "' ) } } )();"
        document.getElementById("outp").value = output
        return true
    }
    else {
        return false
    }
}
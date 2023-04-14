var weblink;
var webpass;
var output;

function addPassword() {
    webpass = document.getElementById("pword").value
    weblink = document.getElementById("wlink").value
    var ip;

    if (weblink != undefined && webpass != undefined) {
        console.log("Now time to create a bookmark using the website " + weblink + " with the password " + webpass)
        output = "javascript:(function() { var ask = prompt('Please enter your password'); if(ask == '" + webpass + "') { window.open('" + weblink + "') } else { alert('Wrong password!'); window.open('https://www.youtube.com/watch?v=Iovc1kB0VCY'); } } )();"
        document.getElementById("outp").value = output
        return true
    }
    else {
        return false
    }
}
function uniqueArray4(a) {
    return [...new Set(a)];
}

var pills = document.getElementsByClassName("pill");
var vals = [];
[].forEach.call(pills, pill => {
    vals.push(pill.innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim());
});
vals = uniqueArray4(vals);
var toPrepend = document.getElementsByClassName("pt-5")[0];
vals.forEach(val => {
    var ele = document.createElement("a");
    ele.innerHTML = val;
    ele.style.margin = "0px 10px 0px 15px";
    ele.addEventListener("click", select);
    toPrepend.parentNode.insertBefore(ele, toPrepend);
});


function select(e) {
    var st = e.srcElement.innerHTML;
    var all = document.getElementsByClassName("check");
    [].forEach.call(all, check => {
        var status = check.querySelector(".pill").innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim();
        if (status.toUpperCase() == st.toUpperCase()) {
            check.querySelector(".checkbox-box").click();
        }
    });
}

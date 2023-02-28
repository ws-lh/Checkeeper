function uniqueArray4(a) {
  return [...new Set(a)];
}

/* var pills = document.getElementsByClassName("pill"); */
var vals = [];
var all = document.getElementsByClassName("check");
[].forEach.call(all, check => {
  var pill = (check.querySelector('.pill')?.innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim() || "Blank Status") + " - " + (check.querySelector('.memo').innerHTML.replace(/(\r\n|\n|\r)/gm, "").split("•")[1].trim() == "\x3C!----> \x3C!---->" ? "Blank Memo" : check.querySelector('.memo').innerHTML.replace(/(\r\n|\n|\r)/gm, "").split("•")[1].trim());
  vals.push(pill);
});
/* if (all.length > pills.length) {
  vals.push("Blank");
} */
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
  var st = e.srcElement.innerHTML.split(" - ");
  var all = document.getElementsByClassName("check");
  [].forEach.call(all, check => {
    var status = check.querySelector(".pill")?.innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim().toUpperCase();
    var memo = check.querySelector(".memo").innerHTML.replace(/(\r\n|\n|\r)/gm, "").split("•")[1].trim() == "\x3C!----> \x3C!---->" ? "Blank Memo" : check.querySelector(".memo").innerHTML.replace(/(\r\n|\n|\r)/gm, "").split("•")[1].trim();
    if ((status?.toUpperCase() == '' ? null : status?.toUpperCase()) == (st[0] == "Blank Status" ? null : st[0]?.toUpperCase()) &&
      (memo?.toUpperCase() == '' ? null : memo?.toUpperCase()) == (st[1] == "Blank Memo" ? null : st[1]?.toUpperCase())) {
      check.querySelector(".checkbox-box").click();
    }
  });
}

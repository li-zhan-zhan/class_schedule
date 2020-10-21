function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}
function getTime(){
    var date = new Date();
    var day = date.getDay();
    if(day<6){
        var tds = tag("td");
        for(var i=day; i<tds.length; i+=7){
            tds[i].style.color = "red"
        }
    }
    var year = date.getFullYear();
    var month2;
    if((year%4==0&&year%100!=0)||year%400==0){
        month2 = 29;
    } else {
        month2 = 28;
    }
    var months= [31,month2,31,30,31,30,31,31,30,31,30,31];
    var begin = 0;
    for(var i =0; i<9; i++){
        begin+=months[i];
    }
    begin+=7;
    var now = 0;
    for(var i=0; i<date.getMonth()+1; i++){
        now+=months[i];
    }
    now+=date.getDate();
    weeks = now-begin;
    if (weeks%7==0){
        weeks = weeeks/7;
    }else {
        weeks = weeks/7+1;
    }
    var h3s = tag("h3");
    h3s[0].innerHTML = "第"+Math.floor(weeks)+"周";
}
function changeOption(){
    var index = $("mySelect").selectedIndex;
    $("show").src=$("mySelect").options[index].value;
    
}
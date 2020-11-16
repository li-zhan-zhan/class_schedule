function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}
function getWeeks(){
    var now = new Date();
	var begin = new Date(2020,8,7);
	var weeksTemp = now.getTime()-begin.getTime();
	weeksTemp = weeksTemp/(1000*60*60*24*7);
	var weeks = Math.ceil(weeksTemp);
    $("week").innerHTML =weeks;
}
function changeOption(){
    var index = $("mySelect").selectedIndex;
    $("show").src=$("mySelect").options[index].value;
}
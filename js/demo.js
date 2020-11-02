function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}
function start(){
	getWeeks();
	getCountdwon();
}
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
function getCountdwon(){
	var message=$("message");
	var CET4Date = new Date(2020,11,12); //2020年12月考试时间为2020年12月12日
	var winterHolidayDate = new Date(2021,0,24); //第一学期(2020-09-07)至(2021-01-24)
	var summerHolidayDate = new Date(2021,6,11); // 第二学期(2021-03-01)至(2021-07-11)
	var cet4 = compteCountdown(CET4Date);
	var winterHoliday = compteCountdown(winterHolidayDate);
	var summerHoliday = compteCountdown(summerHolidayDate);
	$("cet4").innerHTML = cet4;
	$("winter").innerHTML = winterHoliday;
	$("summer").innerHTML = summerHoliday;
}
function compteCountdown(endDate){
	return Math.floor((endDate.getTime()-new Date().getTime())/(1000*60*60*24));
}
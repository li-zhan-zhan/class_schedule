function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}
function c(cname) {return document.getElementsByClassName(cname);}
function start(){
	getWeeks();
	getCountdwon();
	replaceStr();
}
function getWeeks(){
    var now = new Date();
    var day = now.getDay(); // 0：周日、1：周一
	// console.log(now.getDay());
    if(day<6 && day >0){
        var tds = tag("td");
        for(var i=day; i<tds.length; i+=7){
            tds[i].style.color = "red"
        }
    }
	
	var now = new Date();
	var begin = new Date(2020,8,7);
	var weeksTemp = now.getTime()-begin.getTime();
	weeksTemp = weeksTemp/(1000*60*60*24*7);
	var weeks = Math.ceil(weeksTemp);
	$("week").innerHTML =weeks;
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

function replaceStr(){
	var dels = c("del");
	for(var i=0; i<dels.length; i++)
		dels[i].innerHTML = "本课程已结课"
}
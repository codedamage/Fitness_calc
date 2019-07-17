$('.program-generator__button button').click(function(){
//GET VALUES FORM FORM
var sex = $("select[name=sex]").val();
var weight = $("input[name=weight]").val();
var height = $("input[name=height]").val();
var age = $("input[name=age]").val();
var goal = $("select[name=goal]").val();
var load = $("select[name=load]").val();

//SET RIGHT FORMULA, ACCORDING TO SEX
if (sex === 'male') {
	var result = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * goal * load;
}
else{
	var result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * goal * load;
}

console.log(result);
$(".cals").html(Math.floor(result));
})
function saturdayFun(parameter = "roller-skate")
{
//    console.log (parameter);
//return "This Saturday, I want to "+parameter+"!";
return `This Saturday, I want to ${parameter}!`; 
}
//saturdayFun ();
//saturdayFun ("music")

function mondayWork(parameter = "go to the office")
{

return `This Monday, I will ${parameter}.`;  
     
}

function wrapAdjective(flair = "*"){
    return function (adjective = "special") {
            return `You are ${flair}${adjective}${flair}!`
    }
}
/*
const inner = wrapAdjective("~");
console.log(inner)
const res = inner("Amazing") 
console.log(res)*/
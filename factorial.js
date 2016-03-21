/**
 * Created by shijin on 2016/3/19.
 */
function factorial(number){
    if(!/^[0-9]+$/.test(number))
    return "Please input natural number!";
    if(number<=1)
    return 1;
    return (number)*factorial(number-1);
}

console.log(factorial(5));//output:120

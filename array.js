/**
 * Created by shijin on 2016/3/19.
 */
/**
 * Created by shijin on 2016/3/19.
 */
function permute(input) {
    var result=[];
    var apermute=[];

    return (function(input){
        var temp;
        for(var i=0;i<input.length;i++){
            temp=input.splice(i,1)[0];
            apermute.push(temp);
            if(input.length==0) {
                result.push(apermute.slice());
            }
            arguments.callee(input);
            input.splice(i, 0,temp);
            apermute.pop();
        }
        return result;
    })(input);
}
console.log(permute([1, 2, 3]));

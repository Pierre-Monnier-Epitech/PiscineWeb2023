module.exports = {range : function(start,end,step){

if (step === undefined) {
    step=1
}

let table=[];

for ( let i = start ; i <= end ; i= i +(step) ){
    table.push(i);
}
for ( let i = start ; i >= end ; i= i +(step) ){
    table.push(i);
}
console.log(table)
}

}
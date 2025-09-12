let N = 5;
let f = 1
if (N === 0){
    console.log("N is equal 0");
} else {
    for(let i = 1; i <= N; i++){
        f *= i
        console.log(f);
    };
}

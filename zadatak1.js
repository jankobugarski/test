let k =10;
let d = 9;
let suma1 = 1;
let suma2 = k;
let s = suma1 / suma2;



for (i = 1; i <= d; i++) {







    if (i % 2 == 0) {

        suma1 += 1;
        suma2 += i;

        s += suma1 / suma2



    }
    else {
        suma1 += 1;
        suma2 += i;

        s =- suma1 / suma2
    }


}

console.log(s)
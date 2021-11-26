let arr = [60, 40, 55, 75, 64];
let team1 = [];
let team2 = [];
let newArr = [];
function alternatingSums(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i += 2) {
        team1.push(arr[i]);
    };

    for (let i = 0; i < team1.length; i++) {
        sum1 += team1[i];
    }
    team1 = sum1;
    for (let i = 1; i < arr.length; i += 2) {
        team2.push(arr[i]);
    };

    for (let i = 0; i < team2.length; i++) {
        sum2 += team2[i];
    }
    team2 = sum2;
    return newArr = [team1, team2];
}

console.log(alternatingSums(arr));
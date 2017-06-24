﻿var data: number[] = [2, 3, 6, 5, 1, 8, 9, 12, 16, 13, 14];
var range = { min: 1, max: 13 };
var clus1 = []; var clus2 = []; var clus3 = [];
var old_clus1 = []; var old_clus2 = []; var old_clus3 = [];
function init(k: number): number[] {
    let mean: number[] = [];
    do {
        let m = Math.floor((Math.random() * range.max) + 1);
        mean.push(m);
        k--;
    } while (k > 0);
    for (var i in mean) { console.log(mean[i]); }
    return mean;
}

function assign(dat: number[], arrs) {
    var mean = arrs;
    for (var i in dat) {
        var point = dat[i];
        var diff: number[] = [];
        for (var j in mean) {
            var temp = Math.abs(point - mean[j]);
            diff.push(temp);
        }
        /*for (var x in diff) { console.log(diff[x]); }
        console.log("--");*/
        var min = Math.min.apply(null, diff);
        //console.log(min);
        //console.log("-");
        var c: number = diff.indexOf(min) + 1;
        switch (c) {
            case 1:
                //if (clus1.length == 0) {
                    clus1.push(point);
                //} else { old_clus1.push(point);}
                break;
            case 2: //if (clus2.length == 0) {
                clus2.push(point);
            //} else { old_clus2.push(point); }
                break;
            case 3: //if (clus3.length == 0) {
                clus3.push(point);
            //} else { old_clus3.push(point); }
                break;
        }
    }
    console.log("cluster 1")
    for (var i in clus1) { console.log(clus1[i]); }
    console.log("cluster 2---");
    for (var i in clus2) { console.log(clus2[i]); }
    console.log("cluster 3---");
    for (var i in clus3) { console.log(clus3[i]); }
    console.log("new means---");
    var anna = new_means(clus1, clus2, clus3);
    for (var i in anna) { console.log(anna[i]); }
    
}
function new_means(c1: number[], c2: number[], c3: number[]) {
    var sum = 0;
    var sum1 = 0;
    var sum2 = 0;

    var avg: number[] = [];
    for (var i = 0; i < c1.length; i++) {
        sum += c1[i] //don't forget to add the base
    }
    avg.push(sum / c1.length);

    for (var i = 0; i < c2.length; i++) {
        sum1 += c2[i] //don't forget to add the base
    }
    avg.push(sum1 / c2.length);

    for (var i = 0; i < c3.length; i++) {
        sum2 += c3[i] //don't forget to add the base
    }

    avg.push(sum2 / c3.length);
    return avg;
}
function check_same(array1, array2) {
    if (array1.sort().join(',') === array2.sort().join(',')) {
        return true;
    }
    else return false;
}
assign(data, init(3));
var same: boolean = false;
//var x = 3;
for (var f = 0; f < 10; f++){
    old_clus1 = clus1.slice(0);
    old_clus2 = clus2.slice(0);
    old_clus3 = clus3.slice(0);
    clus1.length = 0;
    clus2.length = 0;
    clus3.length = 0;
    assign(data, new_means(old_clus1, old_clus2, old_clus3));
    if (check_same(clus1, old_clus1) && check_same(clus2, old_clus2) && check_same(clus3, old_clus3)) {
        same = true;
    }
    if (same == true) {
        break;
    }
}
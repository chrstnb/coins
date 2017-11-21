$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage']
    });
});

var denoms = [1, 5, 10, 25];
var count;
var results = [];

function main() {
    // count = 7;
    count = prompt("amount?");
    showChange();
}

// Shows all ways to make change for the given amount
function showChange() {
    // CoinCounter counts = new CoinCounter(DENOMINATIONS);
    // counts.printHeader();
    var c = [0, 0, 0, 0];
    explore(count, c, denoms.length - 1);
    // System.out.println();
}

// Uses the provided coin counter to show all ways to make change for the
// given amount.  Each recursive invocation explores all ways to set the
// count for the current denomination, assuming that counts have been set
// for previous denominations.

function explore(amount, counts, index) {
    if (amount == 0) {
        console.log(counts);
        results.push(JSON.parse(JSON.stringify(counts)));

        var linebreak = document.createElement("br");
        var s = document.getElementById("sec");
        var slide = document.createElement("div");
        slide.className = "slide";
        var wrapper = document.createElement("div");

        wrapper.className = "wrapper";


        var h = document.createElement("h1");


        var eight = document.createElement("div");
        var c = document.createTextNode(counts);
        h.appendChild(c);

        eight.className = "eight";
        eight.appendChild(h);
        var one = document.createElement("div");
        one.className = "one";
        one.appendChild(document.createTextNode("Goal: " + count));


        var two = document.createElement("div");
        two.className = "two";
        two.appendChild(document.createTextNode("Denominations: " + denoms));

        var three = document.createElement("div");
        three.className = "three";
        three.appendChild(document.createTextNode("SUCCESS!"));

        var four = document.createElement("div");
        four.className = "four";
        var sum = 0;
        for (var j = 0; j < counts.length; j++) {
            sum += counts[j];
        }
        four.appendChild(document.createTextNode("Sum so far: " + sum));

        var five = document.createElement("div");
        five.className = "five";
        five.appendChild(document.createTextNode("Results so far: "));
        five.appendChild(document.createElement("br"));

        for (var j = 0; j < results.length; j++) {
            five.appendChild(document.createTextNode(results[j]));
            five.appendChild(document.createElement("br"));

            five.appendChild(linebreak);
        }

        var six = document.createElement("div");
        six.className = "six";
        six.appendChild(document.createTextNode("public static void explore(int amount, CoinCounter counts) {"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));

        six.appendChild(document.createTextNode("  if (amount == 0) {"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));

        six.appendChild(document.createTextNode("    counts.printCounts();"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("} else if (counts.hasNextDenomination()) {"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("    int denomination = counts.nextDenomination();"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("    int max = amount / denomination;"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("    for (int i = 0; i <= max; i++) {"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("      counts.setCount(i);"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("      explore(amount - i * denomination, counts);"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("      counts.clearCount();"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));


        six.appendChild(document.createTextNode("    }"));
        six.appendChild(document.createElement("br"));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));
        six.appendChild(document.createTextNode('\u00A0\u00A0'));

        six.appendChild(document.createTextNode("}"));
        six.appendChild(document.createElement("br"));

        six.appendChild(document.createTextNode("}"));
        six.appendChild(document.createElement("br"));

        var seven = document.createElement("div");
        seven.className = "seven";

        for (var k = 0; k < denoms.length; k++) {
            for (var l = 0; l < counts[k] / denoms[k]; l++) {
                var coin = document.createElement("span");
                // coin.className="circle";
                coin.appendChild(document.createTextNode(denoms[k]));
                seven.appendChild(coin);

            }

        }
        // var coin = document.createElement("span");
        // // coin.className="circle";
        // coin.appendChild(document.createTextNode("1"));
        // seven.appendChild(coin);




        //                     counts.setCount(i);
        //                     explore(amount - i * denomination, counts);
        //                     counts.clearCount();
        //                 }
        //             } 
        //         }"



        //             ));

        // public static void explore(int amount, CoinCounter counts) {
        //     if (amount == 0) {
        //         counts.printCounts();
        //     } else if (counts.hasNextDenomination()) {
        //         int denomination = counts.nextDenomination();
        //         int max = amount / denomination;
        //         for (int i = 0; i <= max; i++) {
        //             counts.setCount(i);
        //             explore(amount - i * denomination, counts);
        //             counts.clearCount();
        //         }
        //     } 
        // }

        wrapper.appendChild(eight);

        wrapper.appendChild(one);
        wrapper.appendChild(two);
        wrapper.appendChild(three);
        wrapper.appendChild(four);
        wrapper.appendChild(five);
        wrapper.appendChild(six);
        wrapper.appendChild(seven);


        slide.appendChild(wrapper);


        s.appendChild(slide);
    } else if (index >= 0) {
        var denomination = denoms[index];
        console.log("denom: " + denomination);

        var max = amount / denomination;
        if (max < 1) {
            max = 0;
        }

        // var i = 0;                     //  set your counter to 1

        // function myLoop () {           //  create a loop function
        //    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        //     console.log("index: " + index);
        //     console.log("updated index val: " + i * denomination);
        //     counts[index] = i * denomination;
        //     linebreak = document.createElement("br");

        //           document.getElementById("h1").appendChild(document.createTextNode(counts));
        //           document.getElementById("h1").appendChild(linebreak);
        //     explore(amount - i * denomination, counts, index - 1);
        //     counts[index] = 0;
        //       i++;                     //  increment the counter
        //       if (i <= max) {            //  if the counter < 10, call the loop function
        //          myLoop();             //  ..  again which will trigger another 
        //       }                        //  ..  setTimeout()
        //    }, 3000)
        // }

        // myLoop();

        //             console.log("max: " + max);
        //                 setTimeout(function () {

        for (var i = 0; i <= max; i++) {

            console.log("index: " + index);
            console.log("updated index val: " + i * denomination);
            counts[index] = i * denomination;
            var linebreak = document.createElement("br");
            var s = document.getElementById("sec");
            var slide = document.createElement("div");
            slide.className = "slide";
            var wrapper = document.createElement("div");

            wrapper.className = "wrapper";


            var h = document.createElement("h1");


            var eight = document.createElement("div");
            var c = document.createTextNode(counts);
            h.appendChild(c);

            eight.className = "eight";
            eight.appendChild(h);
            var one = document.createElement("div");
            one.className = "one";
            one.appendChild(document.createTextNode("Goal: " + count));


            var two = document.createElement("div");
            two.className = "two";
            two.appendChild(document.createTextNode("Denominations: " + denoms));

            var three = document.createElement("div");
            three.className = "three";
            three.appendChild(document.createTextNode("Current denomination: " + denoms[index]));

            var four = document.createElement("div");
            four.className = "four";
            var sum = 0;
            for (var j = 0; j < counts.length; j++) {
                sum += counts[j];
            }
            four.appendChild(document.createTextNode("Sum so far: " + sum));

            var five = document.createElement("div");
            five.className = "five";
            five.appendChild(document.createTextNode("Results so far: "));
            five.appendChild(document.createElement("br"));

            for (var j = 0; j < results.length; j++) {
                five.appendChild(document.createTextNode(results[j]));
                five.appendChild(document.createElement("br"));

                five.appendChild(linebreak);
            }

            var six = document.createElement("div");
            six.className = "six";
            six.appendChild(document.createTextNode("public static void explore(int amount, CoinCounter counts) {"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));

            six.appendChild(document.createTextNode("  if (amount == 0) {"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));

            six.appendChild(document.createTextNode("    counts.printCounts();"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("} else if (counts.hasNextDenomination()) {"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("    int denomination = counts.nextDenomination();"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("    int max = amount / denomination;"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("    for (int i = 0; i <= max; i++) {"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("      counts.setCount(i);"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("      explore(amount - i * denomination, counts);"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("      counts.clearCount();"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));


            six.appendChild(document.createTextNode("    }"));
            six.appendChild(document.createElement("br"));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));
            six.appendChild(document.createTextNode('\u00A0\u00A0'));

            six.appendChild(document.createTextNode("}"));
            six.appendChild(document.createElement("br"));

            six.appendChild(document.createTextNode("}"));
            six.appendChild(document.createElement("br"));

            var seven = document.createElement("div");
            seven.className = "seven";

            for (var k = 0; k < denoms.length; k++) {
                for (var l = 0; l < counts[k] / denoms[k]; l++) {
                    var coin = document.createElement("span");
                    // coin.className="circle";
                    coin.appendChild(document.createTextNode(denoms[k]));
                    seven.appendChild(coin);

                }

            }
            // var coin = document.createElement("span");
            // // coin.className="circle";
            // coin.appendChild(document.createTextNode("1"));
            // seven.appendChild(coin);




            //                     counts.setCount(i);
            //                     explore(amount - i * denomination, counts);
            //                     counts.clearCount();
            //                 }
            //             } 
            //         }"



            //             ));

            // public static void explore(int amount, CoinCounter counts) {
            //     if (amount == 0) {
            //         counts.printCounts();
            //     } else if (counts.hasNextDenomination()) {
            //         int denomination = counts.nextDenomination();
            //         int max = amount / denomination;
            //         for (int i = 0; i <= max; i++) {
            //             counts.setCount(i);
            //             explore(amount - i * denomination, counts);
            //             counts.clearCount();
            //         }
            //     } 
            // }

            wrapper.appendChild(eight);

            wrapper.appendChild(one);
            wrapper.appendChild(two);
            wrapper.appendChild(three);
            wrapper.appendChild(four);
            wrapper.appendChild(five);
            wrapper.appendChild(six);
            wrapper.appendChild(seven);


            slide.appendChild(wrapper);


            s.appendChild(slide);


            // document.getElementById("h1").appendChild(document.createTextNode(counts));
            // document.getElementById("h1").appendChild(linebreak);
            explore(amount - i * denomination, counts, index - 1);
            counts[index] = 0;

        }

        // }, 1000);

    }

}

// function printWord (word) {           //  create a loop function
//    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
//                   document.getElementById("h1").innerHTML = word;
//                     //  ..  setTimeout()
//    }, 3000)
// }

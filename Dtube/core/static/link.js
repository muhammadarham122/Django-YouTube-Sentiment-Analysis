setTimeout(

    function myFun() {

        const months = ["Positive", "Negative"];
        const randomMonth = months[Math.floor(Math.random() * months.length)];


        var nn1 = document.getElementById("demo1")

        if (nn1.value.length > 0) {
            var nn = document.getElementById("demo").innerHTML = randomMonth
            //var nn2 = setInterval(nn, 3000)
        }
    }, 10000//myFun()
);

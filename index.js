console.log("woking");
//Promises/Async/Await

//Q-1.Write one example explaining how you can write a callback function ?
// function
function myName(name) {               //catching as an parameter.
    console.log('Hi my name is' + ' ' + name);
    callMe();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing callback function as an argument
myName('Sarovar');

//Hi my name is Sarovar
//I am callback function
// Qs2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after
// 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

function myNum(callBack) {               //catching as an parameter.
    console.log("Numbers");
    callBack();
}

function callBack() {
    setTimeout(() => {
        console.log("1");

        setTimeout(() => {
            console.log("2");

            setTimeout(() => {
                console.log("3");

                setTimeout(() => {
                    console.log("4");

                    setTimeout(() => {
                        console.log("5");

                        setTimeout(() => {
                            console.log("6");

                            setTimeout(() => {
                                console.log("7");
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
}

//myNum(callBack);

//Numbers -1 2 3 4 5 6 7
// CallBack Hell - Callback are just the name/convention for using javascript. It instead of immidiately returning
//results like other functions,takes time to produce the result. So, if we stuck in some perticular call which
//prevents us making further calls ends us into callback Hell.
// the structure of callback hell looks like pyramid/arrrow shape.
//this makes our code look haphazard and makes it hard to understand.
//we should always try to avoid using multiple callbacks to end up falling into callback hell.
//Q-3."Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
// 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

const getProm = new Promise((resolve, reject) => {//producer  //resolve and reject are executor functionhttps://ravip925.github.io/PrepByte-Projects/CSS%20Projects/ToDo%20Lists%20Mobile%20UI/index1.html
    console.log("Numbers");
    setTimeout(() => {
        let num1 = "1";
        resolve(num1);

        setTimeout(() => {
            console.log("2");
            resolve();

            setTimeout(() => {
                console.log("3");
                resolve();

                setTimeout(() => {
                    console.log("4");
                    resolve();

                    setTimeout(() => {
                        console.log("5");
                        resolve();

                        setTimeout(() => {
                            console.log("6");
                            resolve();

                            setTimeout(() => {
                                console.log("7");
                                resolve();
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
});

getProm                        //consumer
    .then((a) => {
        console.log(a);
    })
    .catch((error) => {
        console.log(error);
    });

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// Q-4. Create a promise function accepting a argument, if yes is passed to the function then it should
// go to resolved state and print Promise Resolved, and if nothing is passed then it should go to 
//reject state and catch the error and print Promise Rejected 

let myPromise = new Promise((resolve, reject) => {
    let a = "yes";
    if (a == "yes") {
        resolve("Resolved");
    } else {
        reject("Failed");
    }
})

myPromise.then((message) => {
    console.log("The Promise is", message);
}).catch((message) => {
    console.log("Promise does not executed:", message);
})

//The Promise is Resolved

//Q-5. Create examples to explain callback function.

function myfun() {
    console.log("Hi, I am printed first.");
    callLater();
}

function callLater() {
    setTimeout(() => {
        console.log('I am callback function printed later.');
    }, 2000);
}
myfun();

//Hi, I am printed first.
//I am callback function printed later.



//Qs 6.Create examples to explain callback hell function.

const getMyId = () => {
    setTimeout(() => {
        console.log("Fetching the ID's");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let myDetails = {
                fName: "Ravi",
                lName: "Patil",
                age: "25",
            }
            console.log(`The name of the Employee is ${myDetails.fName} ${myDetails.lName} and age is ${myDetails.age}`);

            setTimeout(() => {
                myDetails.gender = "Male",
                    console.log(`The name of the Employee is ${myDetails.fName} ${myDetails.lName} and age is ${myDetails.age} and the gender is ${myDetails.gender}`);
            }, 2000);

        }, 2000);
    }, 2000);
}
getMyId();


//Fetching the ID's 
//[1, 2, 3, 4, 5]
//The name of the Employee is Ravi Patil and age is 25
//The name of the Employee is Ravi Patil and age is 25 and the gender is Male
// Qs 7.Create examples to explain promises function

const promChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        let arr = [1, 2, 3, 4, 5];
        resolve(arr);
        reject("failed");

    }, 2000);
});

const getArrDetails = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout((data) => {
            let bikeDetails = {
                brand: "suzuki",
                bike: "Ninja H2",
                milage: "25KM",
            }
            resolve(`The Model No. of the bike is ${data} and the name of the company is ${bikeDetails.brand}, bike name is ${bikeDetails.bike} and milage of the bike is ${bikeDetails.milage}`);
        }, 2000, data);
    });
};
promChain
    .then((arr) => {
        console.log('Models are', arr);
        getArrDetails(arr[1]).then((data) => {
            console.log(data);
        })
    })
    .catch((err) => {
        console.log(err);
    })

// Models are (5) [1, 2, 3, 4, 5]
//The Model No. of the bike is 2 and the name of the company is KAWASAKI,
// bike name is Ninja H2 and milage of the bike is 25KM

// Qs.8 Create examples to explain async await function.

const functionOne = () => {
    return ("I am function one");
}

const functionTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am function two");
        }, 3000)
    })
}

const functionThree = () => {
    return ("I am Function three");
}

const callAllFunction = async () => {
    let responseOne = functionOne();
    console.log(responseOne);

    let responseTwo = await functionTwo();
    console.log(responseTwo);

    let responseThree = functionThree();
    console.log(responseThree);
}


callAllFunction();

//i am function one
//I am function two
//I am Function three
//Qs 9. Create examples to explain promise.all function.

const tOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completed in ${t}`)
        }, t)
    })
}

tOut(1000)
    .then(result => console.log(result));
// Completed in 1000

// Promise.all
Promise.all([tOut(1000), tOut(2000)])
    .then(result => console.log(result))

//Completed in 1000
//['Completed in 1000', 'Completed in 2000']
Footer
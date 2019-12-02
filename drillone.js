function createGreeting(name, age){ 
    let name = "Yoseph";
    let age = 22;
    
    
    return 'Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}';
}

function getYearOfBirth(age){
    const yob = 2019-age;
    return yob;
}

const greeting1 = createGreeting();
console.log(greeting1)


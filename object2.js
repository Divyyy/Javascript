// const tinderuser = new Object() singleton object
const tinderuser = {}
tinderuser.id ="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn= false
// console.log(tinderuser);
const regularuser = {
    email:"som@gmail.com",
    fullname: {
        userfullname: {
            firstname:"divyam",
            lastname:"srivastava"
        }
    }
}
// console.log(regularuser.fullname?.userfullname); // we use ? so that if this value exist then only show or else ignore

const obj1={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
// const obj3 = Object.assign({}, obj1,obj2)
// const obj3={obj1,obj2}
// we will use spread option because its much easier
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
    
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));




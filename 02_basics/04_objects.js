// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id="12ab";
tinderUser.name="Vaibhav";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vaibhav",
            lastname : "Suthar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}
const obj4 = {
    5 : "a",
    6 : "b"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "h@gmail.com"
    },
    {
        id : 3,
        email : "h@gmail.com"
    },
]

// users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    coursename : "JS in Hindi",
    price : 999,
    courseInstructer : "Hitesh"
}

course.courseInstructer

const {
    courseInstructer : instructer 
}   = course

// console.log(instructer);

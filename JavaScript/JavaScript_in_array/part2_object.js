// const tinderUser = new Object()
const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "Sammy"
instaUser.isLoggedIn = false

// console.log(instaUser);

const linkedInUser = {
    email: "anandsingh@gmail.com",
    fullname: {
        userfullname: {
            firstname:  "himanshu",
                lastname: "dubay"
            }

        }
                
    }
         //   console.log(linkedInUser.fullname.userfullname.firstname);
            
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


// users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js in basic",
    price: "999",
    courseInstructor: "himanshu"
}

// course.courseInstructor













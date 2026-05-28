//destructuring objects
// to not write obj.name (if needed) several times during projects
// we can use (any name)

const obj = {
    course : "js",
    courseinstructor : "yuvraj"
}
const {courseinstructor} = (obj)
console.log(courseinstructor)            // same name
const {course:a} = (obj)
console.log(a)                           // different name


/* json api basics
{
    "name" : "yuvraj",
    "age" : 20,
    "sex" : "male"
}
ANOTHWER TYPE
[
    {}
    {}
    {}
    {}
]     array consisting objects

for example , go search random user json api and study it by formatting on json formatter    vvvi
*/
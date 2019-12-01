// let name = 'Jerk';
// let age = 23;

// let func = function () {
//     return `姓名: ${name}, 年龄: ${age}`
// }

// let myClass = class MyClass {
//     static a = '中文';
// }


// export {
//     name,
//     age,
//     func,
//     myClass
// };

// export default name;

export default {
    name: 'Jerk',
    age: 18,
    getInfo() {
        return `姓名: ${this.name}, 年龄: ${this.age}`;
    }
}
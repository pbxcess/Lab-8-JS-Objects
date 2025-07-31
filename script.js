const student = {
    name: "Princess",
    age: 23,
    enrolled: true,
    courses: ["CPAN113", "CPAN134", "CPAN133"],

    displayInfo() {
        return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student info:", student.displayInfo)
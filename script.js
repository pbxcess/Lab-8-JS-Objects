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
console.log("Student info:", student.displayInfo());

//Part 2
const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const studentFromJSON = JSON.parse(jsonString);
console.log("Parsed Object:", studentFromJSON);
console.log("Is parsed equal to original?", JSON.stringify(studentFromJSON) === JSON.stringify(student));
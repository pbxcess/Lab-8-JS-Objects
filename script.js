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

//Part 3
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore,secondScore] = scores;
console.log("First score:", firstScore);
console.log("Second score:", secondScore);

//Part 4
const { displayInfo, ...dataOnly } = student;
const clonedDataOnly = { ...dataOnly, graduationYear: 2025 };
console.log("Cloned student with graduation year:", clonedDataOnly); //cloned so that displayInfo does not show up from the first student object

const newCourses = ["CPAN111", "WRIT120", "CPAN116"]
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged courses:", mergedCourses);
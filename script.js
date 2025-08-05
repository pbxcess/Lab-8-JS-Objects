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
let mergedCourses = [...student.courses, ...newCourses];
console.log("Initial merged courses:", mergedCourses);

//Part 5 but adding method so that the dynamically added course is added to merged course array
student.addToMergedCourses = function(courseName) {
    mergedCourses.push(courseName);
    console.log(`Added ${courseName} to merged courses.`);
};

student.totalMergedCourses = function() {
    return mergedCourses.length;
};

console.log("Before:", mergedCourses);
student.addToMergedCourses("WRIT220");
console.log("After adding WRIT220:", mergedCourses);
console.log("Total merged courses:", student.totalMergedCourses());

//adding method to student object to dynamically add course to courses array (but without merged courses from part 4)
student.addCourse = function(courseName) {
    this.courses.push(courseName);
};

student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse("WRIT220");
console.log("Courses (not including merged courses after adding WRIT220:", student.courses);
console.log("Total number of courses:", student.totalCourses());


//Bonus
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average score:", averageScore.toFixed(2));
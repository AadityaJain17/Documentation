import Topic from "../ui/Topic";

export const Javascript = () => {
  return (
    <div className="lang-container">
      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="Javascript"
        desc="bla bla bla bla bla bla"
        codesnippet="let var const"
      />
      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Variables"
        desc="A JavaScript variable is a container for storing data. In JavaScript, we use the var or let keywords to declare variables."
        codesnippet="var age;
                    let name;"
      />
      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="Datatypes"
        desc="bla bla bla bla bla bla"
        codesnippet="let var const"
      />
      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Functions"
        desc="A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when something invokes it (calls it)."
        codesnippet="function greet(name) {
                        return 'Hello ' + name;
                    }"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Arrays"
        desc="JavaScript arrays are used to store multiple values in a single variable. Arrays are a special type of objects, with numbered indexes."
        codesnippet="let fruits = ['Apple', 'Banana', 'Cherry'];
                    console.log(fruits[0]); // Output: Apple"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Objects"
        desc="JavaScript objects are containers for named values called properties or methods. Objects can be created using the object literal or the 'new' keyword."
        codesnippet="let person = {
                        firstName: 'John',
                        lastName: 'Doe',
                        age: 30,
                        greet: function() { return 'Hello ' + this.firstName; }
                    };
                    console.log(person.greet()); // Output: Hello John"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Loops"
        desc="Loops are used in JavaScript to perform repeated tasks based on a condition. They include for, while, and do...while loops."
        codesnippet="for (let i = 0; i < 5; i++) {
                        console.log('Number ' + i);
                    }
                    let j = 0;
                    while (j < 5) {
                        console.log('Number ' + j);
                        j++;
                    }"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Conditional Statements"
        desc="Conditional statements are used to perform different actions based on different conditions. These include if, else, and else if statements."
        codesnippet="let age = 18;
                    if (age < 18) {
                        console.log('Underage');
                    } else {
                        console.log('Adult');
                    }"
      />
      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Data Types"
        desc="JavaScript variables can hold different data types: numbers, strings, objects, and more. The type of a variable can be determined using the typeof operator."
        codesnippet="let number = 42;
                    let text = 'Hello, world!';
                    let isTrue = true;
                    let object = { name: 'John', age: 30 };

                    console.log(typeof number); // Output: number
                    console.log(typeof text); // Output: string
                    console.log(typeof isTrue); // Output: boolean
                    console.log(typeof object); // Output: object"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Variables"
        desc="A JavaScript variable is a container for storing data. In JavaScript, we use the var, let, or const keywords to declare variables."
        codesnippet="var age = 30;
                    let name = 'John';
                    const PI = 3.14;"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Operators"
        desc="JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more."
        codesnippet="let a = 5;
                    let b = 2;
                    let sum = a + b; // Addition
                    let difference = a - b; // Subtraction
                    let product = a * b; // Multiplication
                    let quotient = a / b; // Division
                    let isEqual = (a == b); // Comparison"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Numbers"
        desc="JavaScript has only one type of number. Numbers can be written with or without decimals."
        codesnippet="let integer = 42;
                    let float = 3.14;
                    let scientific = 1.23e5; // 123000

                    console.log(integer); // Output: 42
                    console.log(float); // Output: 3.14
                    console.log(scientific); // Output: 123000"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Booleans"
        desc="Booleans can have two values: true or false. They are often used in conditional testing."
        codesnippet="let isTrue = true;
                    let isFalse = false;

                    let a = 5;
                    let b = 10;
                    let isEqual = (a == b); // false
                    let isGreater = (a > b); // false

                    console.log(isTrue); // Output: true
                    console.log(isFalse); // Output: false
                    console.log(isEqual); // Output: false
                    console.log(isGreater); // Output: false"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Arrays"
        desc="Arrays are used to store multiple values in a single variable. Arrays are a special type of objects, with numbered indexes."
        codesnippet="let fruits = ['Apple', 'Banana', 'Cherry'];
                    console.log(fruits[0]); // Output: Apple

                    fruits.push('Orange'); // Add an item to the end
                    console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Orange']"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Objects"
        desc="Objects are variables too. But objects can contain many values. These values are written as name:value pairs (properties)."
        codesnippet="let person = {
                        firstName: 'John',
                        lastName: 'Doe',
                        age: 30
                    };
                    console.log(person.firstName); // Output: John

                    person.firstName = 'Jane'; // Modify a property
                    console.log(person.firstName); // Output: Jane"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Functions"
        desc="Functions are used to define blocks of code that can be executed whenever they are called. Functions can take parameters and return a value."
        codesnippet="function greet(name) {
                        return 'Hello, ' + name;
                    }

                    let greeting = greet('John');
                    console.log(greeting); // Output: Hello, John"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        title="JavaScript Scope"
        desc="JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible from outside the function."
        codesnippet="function myFunction() {
                        let carName = 'Volvo'; // Function scope
                    }
                    console.log(carName); // Error: carName is not defined

                    if (true) {
                        let blockScope = 'Hello';
                    }
                    console.log(blockScope); // Error: blockScope is not defined"
      />
    </div>
  );
};

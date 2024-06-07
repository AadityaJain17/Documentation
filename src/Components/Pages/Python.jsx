import Topic from "../ui/Topic";

export const Python = () => {
  return (
    <div className="lang-container">
      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python"
        desc="bla bla bla bla bla bla"
        codesnippet="print('Hello World!')"
      />
      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Variables"
        desc="In Python, variables are used to store data values. Variables are created the moment you first assign a value to them."
        codesnippet="x = 5
                    y = 'Hello, World!'
                    print(x)
                    print(y)"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Data Types"
        desc="Python has various data types including integers, floats, strings, lists, tuples, and dictionaries."
        codesnippet="x = 5                 # int
                    y = 3.14              # float
                    z = 'Hello'           # str
                    a = [1, 2, 3]         # list
                    b = (1, 2, 3)         # tuple
                    c = {'key': 'value'}  # dict"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Operators"
        desc="Python operators include arithmetic, comparison, logical, and assignment operators."
        codesnippet="x = 5
                    y = 2
                    print(x + y)  # Addition
                    print(x - y)  # Subtraction
                    print(x * y)  # Multiplication
                    print(x / y)  # Division
                    print(x == y) # Comparison"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Strings"
        desc="Strings in Python are used to store text data. Strings can be enclosed in single, double, or triple quotes."
        codesnippet="s = 'Hello, World!'
                    print(s)
                    print(s[0])         # First character
                    print(s[0:5])       # Substring
                    print(s.lower())    # Lowercase
                    print(s.upper())    # Uppercase"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Lists"
        desc="Lists are used to store multiple items in a single variable. Lists are ordered and changeable."
        codesnippet="fruits = ['apple', 'banana', 'cherry']
                    print(fruits[0])    # Output: apple
                    fruits.append('orange')  # Add an item
                    print(fruits)       # Output: ['apple', 'banana', 'cherry', 'orange']"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Tuples"
        desc="Tuples are similar to lists but are immutable, meaning they cannot be changed after creation."
        codesnippet="fruits = ('apple', 'banana', 'cherry')
                    print(fruits[0])    # Output: apple
                    # fruits[0] = 'orange' # This will cause an error"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Dictionaries"
        desc="Dictionaries are used to store data values in key:value pairs. They are unordered and changeable."
        codesnippet="person = {
                        'name': 'John',
                        'age': 30,
                        'city': 'New York'
                    }
                    print(person['name'])  # Output: John
                    person['age'] = 31    # Change a value
                    print(person)         # Output: {'name': 'John', 'age': 31, 'city': 'New York'}"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Functions"
        desc="Functions in Python are defined using the def keyword. They can take arguments and return values."
        codesnippet="def greet(name):
                        return 'Hello, ' + name

                    print(greet('Alice'))  # Output: Hello, Alice"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Conditionals"
        desc="Conditional statements in Python include if, elif, and else statements."
        codesnippet="x = 10
                    if x > 5:
                        print('x is greater than 5')
                    elif x == 5:
                        print('x is 5')
                    else:
                        print('x is less than 5')"
      />

      <Topic
        img_src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
        title="Python Loops"
        desc="Python supports various types of loops including for and while loops."
        codesnippet="fruits = ['apple', 'banana', 'cherry']
                    for fruit in fruits:
                        print(fruit)

                    i = 0
                    while i < 5:
                        print(i)
                        i += 1"
      />
    </div>
  );
};

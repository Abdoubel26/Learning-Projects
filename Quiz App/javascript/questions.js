// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

 {
  category: "history",
  questions: [
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      correctAnswer: 1,
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1918", "1950"],
      correctAnswer: 0,
    },
    {
      question: "Who discovered America in 1492?",
      options: ["Marco Polo", "Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan"],
      correctAnswer: 1,
    },
    {
      question: "Which empire was ruled by Julius Caesar?",
      options: ["Greek Empire", "Roman Empire", "Ottoman Empire", "Persian Empire"],
      correctAnswer: 1,
    },
    {
      question: "What was the name of the ship that brought the Pilgrims to America?",
      options: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"],
      correctAnswer: 1,
    },
    {
      question: "Who was the British Prime Minister during most of World War II?",
      options: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Tony Blair"],
      correctAnswer: 0,
    },
    {
      question: "Which wall divided East and West Berlin during the Cold War?",
      options: ["Great Wall", "Berlin Wall", "Iron Curtain", "Wall of Europe"],
      correctAnswer: 1,
    },
    {
      question: "Who was known as the Maid of Orléans?",
      options: ["Marie Antoinette", "Joan of Arc", "Catherine de Medici", "Queen Elizabeth I"],
      correctAnswer: 1,
    },
    {
      question: "Which ancient civilization built the pyramids?",
      options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
      correctAnswer: 2,
    },
    {
      question: "What triggered World War I?",
      options: ["Invasion of Poland", "Assassination of Archduke Franz Ferdinand", "Treaty of Versailles", "Pearl Harbor attack"],
      correctAnswer: 1,
    },
    {
      question: "Who was the leader of Nazi Germany?",
      options: ["Joseph Stalin", "Benito Mussolini", "Adolf Hitler", "Winston Churchill"],
      correctAnswer: 2,
    },
    {
      question: "Which country was formerly known as Persia?",
      options: ["Iran", "Iraq", "Turkey", "Afghanistan"],
      correctAnswer: 0,
    },
    {
      question: "Who was the famous civil rights leader in the U.S. during the 1960s?",
      options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Frederick Douglass"],
      correctAnswer: 1,
    },
    {
      question: "Which war was fought between the North and South regions of the U.S.?",
      options: ["Revolutionary War", "Civil War", "World War I", "Vietnam War"],
      correctAnswer: 1,
    },
    {
      question: "Who was the first man to walk on the moon?",
      options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
      correctAnswer: 2,
    },
    {
      question: "Which ancient city was buried by the eruption of Mount Vesuvius?",
      options: ["Athens", "Pompeii", "Rome", "Carthage"],
      correctAnswer: 1,
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
      correctAnswer: 2,
    },
    {
      question: "What was the name of the U.S. program to develop atomic bombs?",
      options: ["Apollo Program", "Manhattan Project", "Cold War Initiative", "Nuclear Pact"],
      correctAnswer: 1,
    },
    {
      question: "Which empire was known for its road system and aqueducts?",
      options: ["Greek Empire", "Roman Empire", "Mongol Empire", "Egyptian Empire"],
      correctAnswer: 1,
    },
    {
      question: "Who was the famous nurse during the Crimean War?",
      options: ["Florence Nightingale", "Clara Barton", "Marie Curie", "Elizabeth Blackwell"],
      correctAnswer: 0,
    },
    {
      question: "Which treaty ended World War I?",
      options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Ghent"],
      correctAnswer: 0,
    },
    {
      question: "Who was the first female Prime Minister of the UK?",
      options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
      correctAnswer: 1,
    },
    {
      question: "Which civilization invented democracy?",
      options: ["Romans", "Greeks", "Egyptians", "Chinese"],
      correctAnswer: 1,
    },
    {
      question: "Which explorer circumnavigated the globe first?",
      options: ["Christopher Columbus", "Ferdinand Magellan", "James Cook", "Marco Polo"],
      correctAnswer: 1,
    },
    {
      question: "Who was the U.S. President during the Great Depression and World War II?",
      options: ["Franklin D. Roosevelt", "Woodrow Wilson", "Harry Truman", "Dwight Eisenhower"],
      correctAnswer: 0,
    },
  ],
}, 

  {
    category: "mathematics",
    questions: [
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 × 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 8³?",
        options: ["512", "216", "256", "128"],
        correctAnswer: 0,
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3 + 5 × 4?",
        options: ["20", "22", "24", "23"],
        correctAnswer: 3,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is the perimeter of a square with a side length of 4 cm?",
        options: ["12 cm", "16 cm", "20 cm", "24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is 11²?",
        options: ["121", "131", "141", "111"],
        correctAnswer: 3,
      },
      {
        question: "What is 9 × 12?",
        options: ["105", "110", "108", "120"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 2,
      },
      {
        question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 ÷ 2 + 3?",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 3 × 7 + 2?",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2³ × 3?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 × (5 + 3)?",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 14 × 14?",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 × 15?",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
        options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of (8 + 2) × 3?",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of 50% of 80?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 25 ÷ 5 × 3?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
    ],
  },

 {
  category: "science_and_tech",
  questions: [
    {
      question: "Who is credited with inventing the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      correctAnswer: 0,
    },
    {
      question: "What is quantum mechanics?",
      options: [
        "The study of chemical reactions",
        "The science of extremely fast objects",
        "The physics of very small particles like atoms and electrons",
        "A theory about space travel",
      ],
      correctAnswer: 2,
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "Who developed the theory of general relativity?",
      options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
      correctAnswer: 2,
    },
    {
      question: "Which part of the cell contains the genetic material?",
      options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
      correctAnswer: 1,
    },
    {
      question: "What is the main gas found in the air we breathe?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      correctAnswer: 3,
    },
    {
      question: "What does DNA stand for?",
      options: [
        "Dynamic Nucleic Acid",
        "Deoxyribonucleic Acid",
        "Digital Nuclear Acid",
        "Double Helix Acid",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      correctAnswer: 0,
    },
    {
      question: "Who is known for inventing the light bulb?",
      options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
      correctAnswer: 2,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "Hyperlink Transfer Protocol",
        "Hypertext Transfer Protocol",
        "High Tech Transmission Protocol",
        "Hyper Terminal Test Program",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which company created the first iPhone?",
      options: ["Samsung", "Apple", "Nokia", "Microsoft"],
      correctAnswer: 1,
    },
    {
      question: "Which planet has the most moons?",
      options: ["Earth", "Saturn", "Mars", "Jupiter"],
      correctAnswer: 1,
    },
    {
      question: "What does CPU stand for in computing?",
      options: [
        "Central Processing Unit",
        "Computer Power Unit",
        "Central Programming Utility",
        "Core Processing Unit",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: 1,
    },
    {
      question: "Which scientist is famous for his laws of motion?",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
      correctAnswer: 0,
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Iron", "Diamond", "Granite", "Quartz"],
      correctAnswer: 1,
    },
    {
      question: "Who invented the World Wide Web?",
      options: [
        "Bill Gates",
        "Steve Jobs",
        "Tim Berners-Lee",
        "Mark Zuckerberg",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
      correctAnswer: 2,
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Skin", "Lungs"],
      correctAnswer: 2,
    },
    {
      question: "What is the main function of red blood cells?",
      options: [
        "Fighting infections",
        "Carrying oxygen",
        "Digesting food",
        "Producing hormones",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is an algorithm?",
      options: [
        "A type of musical rhythm",
        "A step-by-step procedure to solve a problem",
        "A part of the nervous system",
        "A biological molecule",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which space telescope was launched in 1990 and remains in use?",
      options: ["James Webb", "Chandra", "Spitzer", "Hubble"],
      correctAnswer: 3,
    },
    {
      question: "What type of energy is stored in food?",
      options: ["Chemical energy", "Thermal energy", "Nuclear energy", "Mechanical energy"],
      correctAnswer: 0,
    },
    {
      question: "Which company developed the Android operating system?",
      options: ["Microsoft", "Apple", "Google", "IBM"],
      correctAnswer: 2,
    },
    {
      question: "What is the study of fungi called?",
      options: ["Botany", "Zoology", "Mycology", "Ecology"],
      correctAnswer: 2,
    },
  ],
},
];

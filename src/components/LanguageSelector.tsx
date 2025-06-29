import React from 'react';
import { Code, FileText } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  extension: string;
  template: string;
  icon: string;
}

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string, template: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onLanguageChange }) => {
  const languages: Language[] = [
    {
      id: 'javascript',
      name: 'JavaScript',
      extension: 'js',
      icon: '🟨',
      template: `// JavaScript Example
console.log("Hello, World!");

// Function example
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 10:", fibonacci(10));

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);`
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      extension: 'ts',
      icon: '🔷',
      template: `// TypeScript Example
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return \`Hello, \${person.name}! You are \${person.age} years old.\`;
}

const user: Person = {
    name: "Alice",
    age: 30
};

console.log(greet(user));

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("TypeScript"));
console.log(identity<number>(42));`
    },
    {
      id: 'python',
      name: 'Python',
      extension: 'py',
      icon: '🐍',
      template: `# Python Example
print("Hello, World!")

# Function example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"Fibonacci of 10: {fibonacci(10)}")

# List comprehension
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(f"Doubled numbers: {doubled}")

# Class example
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name} and I'm {self.age} years old"

person = Person("Alice", 30)
print(person.greet())`
    },
    {
      id: 'cpp',
      name: 'C++',
      extension: 'cpp',
      icon: '⚡',
      template: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Function example
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Class example
class Person {
private:
    string name;
    int age;

public:
    Person(string n, int a) : name(n), age(a) {}
    
    void greet() {
        cout << "Hello, I'm " << name << " and I'm " << age << " years old" << endl;
    }
};

int main() {
    cout << "Hello, World!" << endl;
    
    cout << "Fibonacci of 10: " << fibonacci(10) << endl;
    
    vector<int> numbers = {1, 2, 3, 4, 5};
    cout << "Numbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    Person person("Alice", 30);
    person.greet();
    
    return 0;
}`
    },
    {
      id: 'c',
      name: 'C',
      extension: 'c',
      icon: '🔧',
      template: `#include <stdio.h>
#include <stdlib.h>

// Function example
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Structure example
struct Person {
    char name[50];
    int age;
};

void greet(struct Person p) {
    printf("Hello, I'm %s and I'm %d years old\\n", p.name, p.age);
}

int main() {
    printf("Hello, World!\\n");
    
    printf("Fibonacci of 10: %d\\n", fibonacci(10));
    
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("Numbers: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    struct Person person;
    strcpy(person.name, "Alice");
    person.age = 30;
    greet(person);
    
    return 0;
}`
    },
    {
      id: 'java',
      name: 'Java',
      extension: 'java',
      icon: '☕',
      template: `public class Main {
    // Function example
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Class example
    static class Person {
        private String name;
        private int age;
        
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
        
        public void greet() {
            System.out.println("Hello, I'm " + name + " and I'm " + age + " years old");
        }
    }
    
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        System.out.println("Fibonacci of 10: " + fibonacci(10));
        
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Numbers: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        Person person = new Person("Alice", 30);
        person.greet();
    }
}`
    },
    {
      id: 'go',
      name: 'Go',
      extension: 'go',
      icon: '🐹',
      template: `package main

import "fmt"

// Function example
func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

// Struct example
type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() {
    fmt.Printf("Hello, I'm %s and I'm %d years old\\n", p.Name, p.Age)
}

func main() {
    fmt.Println("Hello, World!")
    
    fmt.Printf("Fibonacci of 10: %d\\n", fibonacci(10))
    
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Print("Numbers: ")
    for _, num := range numbers {
        fmt.Printf("%d ", num)
    }
    fmt.Println()
    
    person := Person{Name: "Alice", Age: 30}
    person.Greet()
}`
    },
    {
      id: 'rust',
      name: 'Rust',
      extension: 'rs',
      icon: '🦀',
      template: `// Function example
fn fibonacci(n: u32) -> u32 {
    match n {
        0 | 1 => n,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

// Struct example
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }
    
    fn greet(&self) {
        println!("Hello, I'm {} and I'm {} years old", self.name, self.age);
    }
}

fn main() {
    println!("Hello, World!");
    
    println!("Fibonacci of 10: {}", fibonacci(10));
    
    let numbers = vec![1, 2, 3, 4, 5];
    print!("Numbers: ");
    for num in &numbers {
        print!("{} ", num);
    }
    println!();
    
    let person = Person::new("Alice".to_string(), 30);
    person.greet();
}`
    }
  ];

  return (
    <div className="p-4 bg-gray-950 border-b border-gray-900">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold flex items-center">
          <Code className="w-4 h-4 mr-2 text-cyan-400" />
          Programming Language
        </h3>
        <div className="text-xs text-gray-400">
          Select a language to get started
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => onLanguageChange(language.id, language.template)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
              selectedLanguage === language.id
                ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-500/25 border border-cyan-500/30 animate-pulse-glow'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800 hover:border-gray-700'
            }`}
          >
            <span className="text-base">{language.icon}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-xs text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        💡 Each language comes with example code to help you get started quickly
      </div>
    </div>
  );
};

export default LanguageSelector;
export { };

// Property is missing in type 'X' but required in type 'Y'

// EXAMPLE 1 - Provide a value for required properties

type Person = {
  name: string;
  country: string;
};

const person: Person = {
  name: 'Tom',
  country: 'Germany',
};
console.log(person);

// ---------------------------------------------------

// // EXAMPLE 2 - Mark the properties as optional

// type Person = {
//   name: string;
//   country?: string; // 👈️ mark optional
// };

// const person: Person = {
//   name: 'Tom',
// };
// console.log(person);

// ---------------------------------------------------

// // EXAMPLE 3 - Pass an object containing all of the required properties to functions

// type Person = {
//   name: string;
//   country: string;
// };

// function getPerson({ name, country = '' }: Person) {
//   return { name, country };
// }

// getPerson({ name: 'Tom', country: 'Germany' });

// ---------------------------------------------------

// // EXAMPLE 4 - Define all properties and methods a type or an interface requires

// interface Employee {
//   id: number;
//   name: string;
// }

// class Developer implements Employee {
//   constructor(public id: number, public name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {

  const datas = [
    {
      id: 1,
      ques: "What are the different ways to manage a state in a React application?",
      ans: "In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.The id of the current item, being viewed, Filter parameters,Pagination offset and limit,Sorting data",
    },
    {
      id: 2,
      ques: "How does prototypical inheritance work?",
      ans: "In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object",
    },
    {
      id: 3,
      ques: "What is a unit test? Why should we write unit tests?",
      ans: "Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development coding phase of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.",
    },
    {
      id: 3,
      ques: "React vs. Angular vs. Vue?",
      ans: "Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:The modern web developer’s platformIt is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.React is considered a UI library. They define themselves as:“A JavaScript library for building user interfaces”Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.Last but not least, Vue.js is, according to its site:“A progressive JavaScript framework”",
    },
  ];
  return (
    <section>
      <div className='grid lg:grid-cols-2 gap-5'>
        {datas.map((data) => (
          <BlogCard key={data.id} data={data}></BlogCard>
        ))}
      </div>
    </section>
  );
};

export default Blog;
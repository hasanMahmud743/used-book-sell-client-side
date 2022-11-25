import React from "react";
import useTitle from "../../Hooks/UseTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="max-w-5xl m-auto text-justify">
        <p className="text-center text-4xl font-bold  p-10">
          Lets have some study on JS React basics.
        </p>
        <p className="text-2xl font-bold pb-4 pl-4">
          <span>Que:01</span> What are the different ways to manage a state in a
          React application?{" "}
        </p>
        <p className="text-xl p-4 ">
          <span className="font-bold">Ans:</span> From analysts and engineers to
          IT decision makers, many are familiar with Relational Database
          Management Systems (RDBMS) and the Structured Query Language (SQL)
          used to interact with them. While these terms refer to a decades-old
          paradigm which remains a wide standard, today the sheer variety and
          depth of database systems can be dizzying. What’s more, rising volumes
          of unstructured data, availability of storage and processing power,
          and evolving analytic requirements have generated interest in
          fundamentally different technologies.{" "}
        </p>

        <p className="text-2xl font-bold p-4">
          <span>Que:02</span> How does prototypical inheritance work?
        </p>
        <p className="text-xl p-4 ">
          <span className="font-bold">Ans:</span> Every object with its methods
          and properties contains an internal and hidden property known as
          [[Prototype]]. The Prototypal Inheritance is a feature in javascript
          used to add methods and properties in objects. It is a method by which
          an object can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
          modern language, it is being set using __proto__. JWT is signed and
          encoded, not encrypted. JWT is a token based stateless authentication
          mechanism. Since it is a client-side based stateless session, server
          doesn't have to completely rely on a datastore(database) to save
          session information.{" "}
        </p>

        <p className="text-2xl font-bold p-4">
          <span>Que:03</span> What is a unit test? Why should we write unit
          tests?
        </p>
        <p className="text-xl p-4 ">
          <span className="font-bold">Ans:</span> <br />
          Unit testing is a component of test-driven development (TDD), a
          pragmatic methodology that takes a meticulous approach to building a
          product by means of continual testing and revision. This testing
          method is also the first level of software testing, which is performed
          before other testing methods such as integration testing. Unit tests
          are typically isolated to ensure a unit does not rely on any external
          code or functions. Testing can be done manually but is often
          automated. . <br />
        </p>

        <p className="text-2xl font-bold p-4">
          <span>Que:04</span> React vs. Angular vs. Vue?{" "}
        </p>
        <p className="text-xl p-4 ">
          <span className="font-bold">Ans:</span> <br />
          <span className="font-bold">Angular Vs React:</span> <br />
          If the choice you’re making is based on Angular vs React alone, then
          you’ll simply need to consider the pros and cons discussed for those
          libraries in this post. But overall, keep in mind that both libraries
          can be used for mobile and web apps, while Angular is generally better
          for more complex apps that are enterprise-ready. <br />
          <span className="font-bold">React vs Vue:</span> <br />
          The choice between React vs Vue is often debated and it’s not an easy
          one. Vue has a vibrant and ever-growing community and has taken over
          popularity vs. React in many respects. React developers are still
          churning out lots of new components and extras, so there’s no sign
          that React is on the decline either. <br />
          <span className="font-bold">Angular Vs Vue:</span> <br />
          In most cases, you probably wouldn’t be deciding between only Angular
          and Vue. They are vastly different libraries with very different
          feature sets and learning curves. Vue is the clear choice for less
          experienced developers, and Angular would be preferred for those
          working on larger apps. A large library like Angular would require
          more diligence in keeping up with what’s new, while Vue would be less
          demanding in this regard and the fact that the two most recent major
          releases of Vue are in separate repositories helps.
        </p>
      </div>
    </div>
  );
};

export default Blog;

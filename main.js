/**
 * Create a simple constructor function called `Foo` and create a new instance
 * from it called `foo`.
 */

// YOUR CODE HERE


console.assert(foo instanceof Foo);

/**
 * Create a constructor function called `Animal`.
 * 
 * Create a constructor function called `Dog` that sets a property on itself
 * within the constructor. The property should be called `says` and the value
 * should be `"woof"`. `Dog` should inherit from an instance of `Animal`.
 */

// YOUR CODE HERE


console.assert(new Dog().says === "woof");

/**
 * Create a constructor function called `Cat` that sets a property on itself
 * within the constructor. The property should be called `says` and the value
 * should be `"meow"`. Cat should also inherit from an instance of `Animal`.
 */

// YOUR CODE HERE


console.assert(cat instanceof Cat);
console.assert(cat.says === "meow");

/**
 * Add a method to the `Animal` prototype called `speak` that will log out the
 * value of an instance's `.says` property with an exclamation mark appended.
 */

// YOUR CODE HERE


console.assert(cat.speak() === "meow!");
console.assert(dog.speak() === "woof!");

/**
 * Create a constructor called `KeepSecret`. The constructor function itself
 * should accept a parameter called `secret` it should store this in a private
 * variable (use a closure). Add a method to the prototype that is called
 * `squeal` that returns the secret string.
 */

// YOUR CODE HERE


var mySecret = "My class rocks!";
var dontTellNobody = new KeepSecret(mySecret);
console.assert(dontTellNobody.squeal() === mySecret);

/**
 * Create a constructor called `Key`. Create another constructor called `Safe`.
 * Make the Safe constructor take 2 arguments. The first argument can be any
 * piece if data to keep safe. This must be stored using a private variable like
 * you did with KeepSecret. The 2nd param to the `Safe` constructor needs to be
 * an instance of `Key` you need to store it privately as well. Add a function
 * to the Safe prototype called `unlock` that accepts a key. If the key matches
 * the key that was used to create the Safe; then return the secret data.
 */

// YOUR CODE HERE


var sensitive = "shhhhh!";
var rightKey = new Key();
var wrongKey = new Key();
var safe = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);

/**
 * Create a constructor called `Validator`. Give it a method on it's prototype
 * called `email` that takes a string and returns true if the string is a valid
 * email address and false if it is not. Email validation is no simple feat, so
 * look up how to do it online.
 */

// YOUR CODE HERE


if (typeof Validator === "function") {
  var valid = new Validator();
  console.assert(valid.email("name@theironyard.com"));
  console.assert(!valid.email("name-at-theironyard.com"));
}
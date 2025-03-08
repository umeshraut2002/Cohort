1️⃣ [Amazon] Implement a Read-Only Object Using Proxy

📝 Problem: Create a proxy that makes an object read-only. Any attempt to modify a property should throw an error.

📥 Input:

const user = { name: "John", age: 25 };
const proxiedUser = createReadOnlyProxy(user);

proxiedUser.age = 30;  // ❌ Should throw an error

📤 Output:

// Error: Cannot modify read-only object

2️⃣ [Microsoft] Auto Convert Object Keys to Uppercase

📝 Problem: Create a proxy that automatically converts object keys to uppercase when accessed.

📥 Input:

const obj = { name: "Alice", city: "New York" };
const proxiedObj = createUppercaseKeyProxy(obj);

console.log(proxiedObj.name);  // ✅ "Alice"
console.log(proxiedObj.NAME);  // ✅ "Alice"
console.log(proxiedObj.city);  // ✅ "New York"
console.log(proxiedObj.CITY);  // ✅ "New York"

3️⃣ [Netflix] Auto Track Object Property Access (Logging Feature)

📝 Problem: Create a proxy that logs whenever a property is accessed in an object.

📥 Input:

const user = { name: "John", age: 30 };
const proxiedUser = createLoggingProxy(user);

console.log(proxiedUser.name);
console.log(proxiedUser.age);

📤 Output:

// Accessed property: name
// Accessed property: age

4️⃣ [Google] Prevent Addition of New Properties Using Proxy

📝 Problem: Create a proxy that allows modification of existing properties but prevents adding new properties.

📥 Input:

const user = { name: "Alice" };
const proxiedUser = createStrictObjectProxy(user);

proxiedUser.name = "Bob";   // ✅ Allowed
proxiedUser.age = 30;       // ❌ Should throw an error

📤 Output:

// Error: Cannot add new properties to this object

5️⃣ [Uber] Create a Proxy That Validates Object Values

📝 Problem: Create a proxy that ensures only valid values are set. For example, age should always be a positive number.

📥 Input:

const user = { name: "John", age: 30 };
const proxiedUser = createValidationProxy(user);

proxiedUser.age = -5;  // ❌ Should throw an error
proxiedUser.age = 25;  // ✅ Allowed

📤 Output:

// Error: Age must be a positive number

⚡ Intermediate-Level Proxy Questions
6️⃣ [Flipkart] Auto Remove Properties with null or undefined Values

📝 Problem: Create a proxy that automatically deletes properties if their value is null or undefined.

📥 Input:

const obj = { name: "John", age: 25 };
const proxiedObj = createCleanupProxy(obj);

proxiedObj.age = null;  // Should delete "age" from object
console.log(proxiedObj.age);  // ❌ Should be `undefined`

7️⃣ [Amazon] Lazy Load Properties on First Access (Used in API Calls)

📝 Problem: Create a proxy that fetches data from an API only when a property is accessed for the first time.

📥 Input:

const user = createLazyLoadingProxy({
  id: 1,
  fetchData: () => fetchUserData(1)  // Assume fetchUserData() makes an API call
});

console.log(user.data);  // ✅ Fetch API called only now
console.log(user.data);  // ✅ Uses cached result

🔥 Advanced-Level Proxy Questions
8️⃣ [Meta] Create a Proxy-Based Object That Behaves Like an Array

📝 Problem: Implement a proxy that converts an object into an array-like structure where keys act as indexes.

📥 Input:

const obj = { 0: "Apple", 1: "Banana", 2: "Cherry" };
const proxiedArray = createArrayLikeProxy(obj);

console.log(proxiedArray[0]);  // ✅ "Apple"
console.log(proxiedArray.length);  // ✅ 3

9️⃣ [Google] Secure API Object to Restrict Certain Methods

📝 Problem: Create a proxy that prevents users from calling certain sensitive API methods.

📥 Input:

const api = {
  getData: () => "User Data",
  deleteUser: () => "Deleted"
};
const secureAPI = createSecureProxy(api, ["deleteUser"]);

console.log(secureAPI.getData());  // ✅ Allowed
console.log(secureAPI.deleteUser());  // ❌ Should throw an error

📤 Output:

// Error: Access to deleteUser is restricted

🔟 [Netflix] Deep Nested Object Access using Proxies (Vue.js Style Reactivity)

📝 Problem: Create a proxy that allows nested object access without throwing errors when a property is missing.

📥 Input:

const obj = { user: { details: { name: "John" } } };
const proxiedObj = createSafeAccessProxy(obj);

console.log(proxiedObj.user.details.name);  // ✅ "John"
console.log(proxiedObj.user.address.city);  // ✅ Should return `undefined` instead of error

📌 Summary: What You’ll Learn by Solving These Problems

✅ Beginner Concepts → Basic Proxies (Read-Only, Logging, Validation)
✅ Intermediate Concepts → Lazy Loading, Cleanup, Array-Like Objects
✅ Advanced Concepts → API Security, Vue.js Style Reactivity, Deep Nested Object Access
💡 Why These Questions Are Important in Machine Coding Rounds?

    🔹 Amazon, Google, and Netflix use Proxies in their security layers for API handling.
    🔹 Meta & Microsoft use Proxies for lazy loading & performance optimization.
    🔹 Vue.js (used by Netflix & Flipkart) fully relies on Proxies for reactivity.
    🔹 Uber uses Proxies in their pricing system for auto data validation.
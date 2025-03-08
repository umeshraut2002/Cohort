1️⃣ [Amazon] Create a Read-Only Object Using a Proxy Polyfill

📝 Problem: Implement a polyfill for a Proxy that makes an object read-only (prevents modifications).

📥 Input:

const user = { name: "John", age: 25 };
const proxiedUser = createReadOnlyProxy(user);

proxiedUser.age = 30;  // ❌ Should throw an error
delete proxiedUser.name;  // ❌ Should throw an error

📤 Output:

// Error: Cannot modify read-only object

2️⃣ [Microsoft] Create a Polyfill for Auto-Converting Object Keys to Uppercase

📝 Problem: Implement a polyfill that automatically allows object keys to be accessed in both lowercase and uppercase.

📥 Input:

const obj = { name: "Alice", city: "New York" };
const proxiedObj = createUppercaseKeyProxy(obj);

console.log(proxiedObj.name);  // ✅ "Alice"
console.log(proxiedObj.NAME);  // ✅ "Alice"
console.log(proxiedObj.city);  // ✅ "New York"
console.log(proxiedObj.CITY);  // ✅ "New York"

3️⃣ [Netflix] Implement a Logging Proxy Polyfill

📝
You said:
3
ChatGPT said:
3️⃣ [Netflix] Implement a Logging Proxy Polyfill

📝 Problem: Implement a polyfill for a Proxy that logs every time a property is accessed or modified.

📥 Input:

const user = { name: "John", age: 30 };
const proxiedUser = createLoggingProxy(user);

console.log(proxiedUser.name);  // ✅ Should log "Accessed property: name"
proxiedUser.age = 35;  // ✅ Should log "Modified property: age to 35"

📤 Output:

// Accessed property: name
// Modified property: age to 35
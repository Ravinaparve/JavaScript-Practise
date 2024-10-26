// travelers interview Qs:
//Q1>,.......................
console.log(1)
fs.read(() => console.log('resolved')); // if asynchronous, it will depend on how much time it will take to read the file, but it will log after process.nextTick and setTimeout
process.nextTick(() => console.log(2))
setTimeout(() => console.log(3), 0)
console.log(4);


//output:
// 1
// 4
// 2
// 3
// resolved



//Q
process.nextTick(() => console.log(2));
setTimeout(() => console.log(3), 0);
// output : 2 3


//Q2...........................
function Test1Promise() {
  return 'Hello'
}
function Test2Promise() {
  return Promise.resolve('Hello');
}
console.log(Test1Promise());
console.log(Test2Promise())

// Q
setTimeout(() => console.log(1), 2000);
setImmediate(() => console.log("hii"));



//Q:
console.log(1); // Immediately logs 1

setTimeout(() => console.log(2), 2000); // Schedules logging 2 after 2000ms

setImmediate(() => console.log("hii")); // Schedules logging "hii" for the next iteration of the event loop

Promise.resolve(console.log(3)); // Immediately logs 3 and resolves the promise (but does not log the promise value)

process.nextTick(() => console.log("Welcome")); // Schedules logging "Welcome" to happen immediately after the current operation

console.log(4); // Immediately logs 4

// Q3.................
const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.reject("Three");
const results = Promise.allSettled([promise1, promise2, promise3])
console.log(results);



//output:
// since you are logging results directly after calling Promise.allSettled, you'll see a Promise object logged immediately
[
  { status: "fulfilled", value: "One" },
  { status: "fulfilled", value: "Two" },
  { status: "rejected", reason: "Three" }
]

// Q$: MongoDB interview QS
//restaurants with a grade of 2 or 6 that are located in Mumbai and whose cuisine isn't veg

//
// what is API gateway



//...........................................................................................................................
// how to mock api in unit testing:
// Steps to Mock with Jest
// 1. import the module or file that we want to mock
// 2. Use jest.mock('module-name') to tell Jest you want to mock a specific module.
// 3. Set up the mock using functions like mockReturnValue or mockResolvedValue to define what the mock should return.
// 4. Use the mock in your tests just like you would use the real function or module

const axios = require('axios'); // The module we want to mock

jest.mock('axios'); // Tell Jest to mock axios

axios.get.mockResolvedValue({ data: { success: true } }); // Set what the mock should return

test('should fetch data', async () => {
  const response = await axios.get('/some-url');
  expect(response.data.success).toBe(true); // Test the behavior
});






//..................................................................................................

// diff npm i and npm ci
// ci  = "clean install"

// use case :==> use npm install during development and npm ci in automated environments for consistency.

//...............................................................................................
// what is bundle
//a "bundle" typically refers to a single file that combines multiple assets (like JavaScript, CSS, and sometimes images) into one.
//This is often done to improve performance and reduce the number of HTTP requests made by a browser when loading a web page. Here's a more detailed explanation:

//...............................................................................................
// performance optimization techniques:
// 1. Use Asynchronous Programming
// Non-blocking I/O: Leverage Node.js's asynchronous nature to handle I/O operations without blocking the event loop. Use callbacks, promises, or async/await to keep the application responsive.

// 2. Cluster Module
// Utilize Multiple CPU Cores: Node.js runs on a single thread by default. Use the cluster module to create multiple instances of your application, allowing it to take advantage of multi-core systems.

// 3. Caching
// Cache Responses: Implement caching mechanisms (e.g., using Redis or in-memory caching) to store frequently accessed data, reducing database load and improving response times.
// HTTP Caching: Use caching headers to instruct browsers and proxies to cache responses.

// 4. Optimize Middleware
// Minimize Middleware Usage: Use only necessary middleware in your Express applications. Each middleware layer adds overhead, so streamline your stack.

// 5. Database Optimization
// Optimize Queries: Write efficient database queries and use indexes to speed up data retrieval. Consider using an ORM that optimizes queries under the hood.
// Connection Pooling: Use connection pooling to reuse database connections instead of opening a new one for every request.

// 6. Static File Serving
// Use a CDN: Serve static assets (like images, CSS, and JavaScript files) via a Content Delivery Network (CDN) to reduce load times and offload traffic from your server.
// Gzip Compression: Enable Gzip compression for your responses to reduce the size of data transferred over the network.

// 7. Avoid Memory Leaks
// Monitor Memory Usage: Use tools like Node.js’s built-in memory profiling or external tools to track memory usage. Identify and fix memory leaks to prevent performance degradation over time.

// 8. Optimize Event Loop Performance
// Reduce Blocking Code: Avoid synchronous operations that can block the event loop. Use asynchronous alternatives to keep the application responsive.
// Set Timeouts: Use setImmediate or process.nextTick to defer operations that can block the event loop.

// 9. Load Balancing
// Distribute Traffic: Use load balancers (like Nginx or AWS Elastic Load Balancing) to distribute incoming traffic across multiple instances of your application, improving availability and response times.

// 10. Use HTTP/2
// Upgrade Protocol: If possible, use HTTP/2 for improved performance features like multiplexing, header compression, and server push.

// 11. Minify and Bundle Assets
// Optimize Frontend Code: Use tools like Webpack or Gulp to minify and bundle JavaScript and CSS files, reducing load times and improving performance.

// 12. Monitoring and Profiling
// Use Performance Monitoring Tools: Implement tools like New Relic, Datadog, or APM tools to monitor application performance and identify bottlenecks.
// Profile Your Code: Use Node.js’s built-in profiling tools to find slow functions and optimize them.

// 13. Scale Horizontally
// Horizontal Scaling: Deploy multiple instances of your application across servers to handle increased traffic and improve availability.

// 14. Optimize Dependencies
// Review and Optimize Dependencies: Regularly review your project’s dependencies and remove any that are unnecessary. Use lightweight libraries where possible.

// 15. Use Worker Threads
// Offload Heavy Tasks: For CPU-intensive tasks, consider using worker threads to prevent blocking the main event loop. This allows you to run multiple threads for heavy computations.


//`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//Qs : security measures in node application:
// Ans:
// 1. Input Validation
//Always check that the data coming from users (like form submissions) is in the correct format.
//For example, if you expect a number, make sure the input is a number.

//2. Use HTTPS to Encrypt Data
//HTTPS encrypts the data exchanged between your application and users.
//This prevents attackers from intercepting sensitive information like passwords.

//3. Authentication and Authorization

//4. Environment Variables
// Keep sensitive information (like API keys, DB user name and passwords, PORT number, DB_host) out of your code. Use environment variables to store these secrets securely.

//5.  Rate Limiting
// Limit how many requests a user can make in a given timeframe. This helps protect your application from abuse or denial-of-service attacks

//6. Content Security Policy (CSP)
// Control Content Loading: CSP is a security feature that helps prevent XSS attacks by specifying which scripts and resources are allowed to load on your site.

//7. Cross-Origin Resource Sharing (CORS)
// Control Access: CORS is a security feature that prevents your API from being accessed by unauthorized domains. Configure it to allow only trusted domains.

//..................................................................................................................


// Node js File Structure: // structure of node js application

// my-node-app/
// ├── node_modules/          # Installed npm packages
// ├── public/                # Static files (images, CSS, JS)
// │   ├── css/               # Stylesheets
// │   ├── js/                # Client-side JavaScript
// │   └── images/            # Images
// ├── src/                   # Source files
// │   ├── config/            # Configuration files
// │   ├── controllers/       # Request handlers
// │   ├── models/            # Data models
// │   ├── routes/            # Route definitions
// │   ├── middlewares/       # Middleware functions
// │   ├── services/          # Business logic
// │   ├── utils/             # Utility functions
// │   └── app.js             # Main application file
// ├── tests/                 # Test files
// ├── .env                   # Environment variables
// ├── .gitignore             # Git ignore file
// ├── package.json           # Project metadata and dependencies
// └── README.md              # Documentation
🟢 1. Fetch and Display User Data

Problem: Ek public API se users ki list fetch karo aur usse ek table ya card format me UI par dikhayo.
API: https://jsonplaceholder.typicode.com/users
Challenges:

    Error handling implement karna agar API request fail ho.
    Loading state dikhana jab tak data fetch ho raha ho.
    User ke naam aur email ko list view me dikhana.

🟢 2. Search Functionality in API Data

Problem: Ek API se posts fetch karo aur ek search input do jisme user koi keyword likhe to sirf wahi posts dikhaye jo us keyword se match karti hain.
API: https://jsonplaceholder.typicode.com/posts
Challenges:

    Debouncing implement karna taaki har keypress pe API call na ho.
    Agar koi match na ho to "No results found" dikhana.
    UI me loading state handle karna.

🟢 3. Fetch Data with Error Simulation

Problem: Ek API se data fetch karo, lekin deliberately ek wrong API endpoint use karke error handling test karo.
Example:

fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

Challenges:

    Error message UI par dikhana.
    Retry button add karna jo dobara API request bheje.
    Agar 5 second tak response na aaye to timeout message dikhana.

🟢 4. Multiple API Requests in Parallel

Problem: Do alag-alag API se data ek sath fetch karo aur dono results ek saath UI par dikhana.
APIs:

    Users: https://jsonplaceholder.typicode.com/users
    Posts: https://jsonplaceholder.typicode.com/posts
    Challenges:

    Promise.all() ka use karke parallel requests bhejna.
    Agar ek API fail ho to doosri API ka data fir bhi dikhana.
    UI me dono ka data alag sections me dikhana.

🟢 5. Fetch Data with Pagination

Problem: API se paginated data fetch karna, jisme ek Next aur Previous button ho jo next ya previous page ka data load kare.
API: https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1
Challenges:

    Page number track karna aur dynamically change karna.
    Agar last page par ho to "Next" button disable karna.
    Agar first page par ho to "Previous" button disable karna.
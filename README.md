# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the useEffect hook in React where the cleanup function is not triggered as expected. The example showcases a component that logs the count to the console after every render and includes a cleanup function that should log a message before the next effect or component unmount.  The bug lies in understanding the conditions under which the cleanup function runs, especially when dealing with asynchronous operations.

## How to reproduce:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs. You'll see unexpected behavior in the timing of the cleanup function execution.

## Solution:
The solution addresses this issue by ensuring the cleanup function is called appropriately.  The fix involves a deeper understanding of the lifecycle of useEffect and how to handle asynchronous operations within the hook.
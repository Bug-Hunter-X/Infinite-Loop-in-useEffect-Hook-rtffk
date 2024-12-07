# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite loop because the state update within the `useEffect` callback triggers a re-render, which in turn re-executes the `useEffect` hook, leading to a continuous cycle.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected version.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install necessary packages.
4. Run `npm start` to start the development server.
5. Observe the continuously updating count in the browser.

## Solution

The solution involves correctly managing the dependencies in the `useEffect` hook's dependency array.  By adding the appropriate dependencies, we ensure that the effect only runs when necessary and avoid the infinite loop.
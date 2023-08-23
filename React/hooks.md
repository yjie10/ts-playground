## What are Hooks?

- Hooks are a new feature addition in React version 16.8 which allow you
  to use React features without having to write a class.
  (e.g. state of a component)
- Hooks don't work inside classes
- Hook is a special function that lets you hook into React features
  (e.g. useState is a hook that lets you add React state to functional components)

## Why Hooks?

Reason Set 1

- (more of a JS reason) Understand how _this_ keyword works in JS
- Remember to bind event handlers in class components
- Classes don't minify very well and make hot reloading very unreliable

Reason Set 2

- There is no particular way to reuse stateful component logic
- HOC and render props patterns do address this problem but makes the code harder to follow

Reason Set 3

- Create components for complex scenarios such as data fetching and subscribing to events
- Related code is not organized in one place

## Notes

- Hooks provide a more direct API to the basic React concepts

## Rules of Hooks

- "Only call hooks at the top level"
  e.g. Don't call hooks inside loops, conditions, or nested functions
- "Only call hooks from React functions"

## Summary - useState

- The useState hook lets you add state to functional components
- In classes, the state is _always_ an object; With the useState hook, the state _doesn't have_ to be an object (can be a number, boolean, string, array etc.)
- The useState hook returns an array with 2 elements:
  - first element is the current value of the state,
  - second element is a state setter function
- If new state value depends on the previous state value, you can pass a function to the setter function; the setter function will receive the previous state as its argument
- When dealing with objects or arrays, always make sure to spread the state variable and then call the setter function

## useEffect

- The **Effect** hook lets you perform _side effects_ in _functional_ components
- It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount

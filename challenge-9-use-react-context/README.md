# Challenge 9: Use React Context

In this challenge, I had to create user data containing name and location in context, pass this data to two individual components, and update the data from a separate component.

The requirements for this challenge were:

- Create a React context with name and location data
- Wrap parent component with context.
- Retrieve data in differ components.
- Update data in a different component.

### My Version

![Layout with Components page in my code](https://i.imgur.com/5mgTcIN.gif)

## Reflection

This was a really hard one. Unlike the other challenges, I had an idea of what to do, and in many cases, used them before. But I hadn't heard of `useContext` before this. I'd read some posts and documentation, but it still didn't quite make sense. I decided to read through the solution to really understand what the `Provider` and `Consumer` mean.

Turns out it's pretty simple. The `UserContext` file is where the information about the user is stored "globally". It's used to wrap around the `App` component so that any component in the `App` component has access to the user information. With `useState`, we can pass the state variables and their setter methods to be used and updated in any other component. All we'd have to do is `import` it in the component that needs it.

### Other Challenges

- Challenge 1: [Display Data](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-1-display-data)
- Challenge 2: [Loop Over Array Data](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-2-loop-over-array-data)
- Challenge 3: [Use React State to Update the DOM](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-3-use-react-state-to-update-dom)
- Challenge 4: [Listen for Events in React](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-4-listen-for-events-in-react)
- Challenge 5: [Calculator](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-5-calculator-adder)
- Challenge 6: [Move Box](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-6-move-box)
- Challenge 7: [Fetch a List](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-7-fetch-a-list)
- Challenge 8: [Using Components](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-8-using-components)
- Challenge 9: Use React Context (you are here)

## Other Projects

Check out other stuff I've worked on:

**Where's the Magic?:** https://github.com/geraldiner/magical-movies

**Habit Reset:** https://github.com/geraldiner/habit-reset

**ACNH Quotes:** https://github.com/geraldiner/acnh-quotes

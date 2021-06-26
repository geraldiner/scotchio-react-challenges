# Challenge 6: Move Box

In this challenge I had to move the position of a provided box upwards whenever a button is clicked.

The tasks in this challenge were:

- Create a state variable to hold the value of the transformation points.
- Handle an event which increments or decrements the transformation points.
- Bind the transformation using inline CSS to the created box.

### Preview

![Move Box page preview](https://scotch-res.cloudinary.com/image/upload/w_900,q_auto:good,f_auto/v1558377731/fzccrymnuqbkl748dwgm.mp4)

### My Version

![Move Box page in my code](https://i.imgur.com/gAKJ0gO.gif)

## Reflection

I can really tell these challenges are getting harder because I had to peek at the solution code.abs

I had ideas about how to approach it, but wasn't sure how to implement it. Maybe because I was thinking too much about `useState` and `useEffect` again.

When I saw the `style={{}}` property on the box, I thought we might be manipulating the `top/bottom` properties. But it turned out that we were using `transform: translate(<>, ^v)` instead. (Most of my bugs ended up being bugs in the CSS syntax 🙂)

I tried to be _extra_ and use keyboards, but couldn't quite figure out how to do event listeners with the keyboard in React.

### Other Challenges

- Challenge 1: [Display Data](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-1-display-data)
- Challenge 2: [Loop Over Array Data](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-2-loop-over-array-data)
- Challenge 3: [Use React State to Update the DOM](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-3-use-react-state-to-update-dom)
- Challenge 4: [Listen for Events in React](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-4-listen-for-events-in-react)
- Challenge 5: [Calculator](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-5-calculator-adder)
- Challenge 6: Move Box (you are here)
- Challenge 7: [Fetch a List](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-7-fetch-a-list)
- Challenge 8: [Using Components](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-8-using-components)
- Challenge 9: [Use React Context](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-9-use-react-context)

## Other Projects

Check out other stuff I've worked on:

**Where's the Magic?:** https://github.com/geraldiner/magical-movies

**Habit Reset:** https://github.com/geraldiner/habit-reset

**ACNH Quotes:** https://github.com/geraldiner/acnh-quotes

# Challenge 7: Fetch a List

In this challenge, I had to fetch data from an API, which was in JSON. Then, I had to display the data on the web page.

The main tasks of this challenge were:

- Fetch data from an API when the "Fetch Data" button is clicked.
- Render details from the data returned.

### Preview

![Fetch a List page preview](https://scotch-res.cloudinary.com/image/upload/w_900,q_auto:good,f_auto/v1558730349/rxlizqwmoczmafiyonum.mp4)

### My Version

![Fetch a List page in my code](https://i.imgur.com/XvkLgWC.gif)

## Reflection

This challenge was relatively easier than the last one. I even went as far as to load the data as soon as the component is mounted with `useEffect` (I finally found a time to use it!). This is very similar to what I was doing with my Magical Movies project (see below).

I decided to create a `BookCard` component that could be reused wherever needed.

The hardest part was formatting the data when it came back. I'd heard of MomentJS, but never used it. Turns out there's a React library for it and it was very easy to use. I just had to look up the format for what was in the example.

### Other Challenges

- Challenge 1: [Display Data](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-1-display-data)
- Challenge 2: [Loop Over Array Data](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-2-loop-over-array-data)
- Challenge 3: [Use React State to Update the DOM](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-3-use-react-state-to-update-dom)
- Challenge 4: [Listen for Events in React](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-4-listen-for-events-in-react)
- Challenge 5: [Calculator](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-5-calculator-adder)
- Challenge 6: [Move Box](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-6-move-box)
- Challenge 7: Fetch a List (you are here)
- Challenge 8: [Using Components](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-8-using-components)
- Challenge 9: [Use React Context](https://github.com/geraldiner/scotchio-react-challenges/tree/master/challenge-9-use-react-context)

## Other Projects

Check out other stuff I've worked on:

**Where's the Magic?:** https://github.com/geraldiner/magical-movies

**Habit Reset:** https://github.com/geraldiner/habit-reset

**ACNH Quotes:** https://github.com/geraldiner/acnh-quotes

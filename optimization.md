In order to have `sv-mosaic` or any `react` package perform optimally, you will want to follow some basic guidelines.

## Reduce bundle size

In order to keep your bundle size small you will want to ensure that you are statically importing all of your packages as well as only using the dependencies you need. If you are using Webpack make sure you are following their [Tree Shaking Guidelines](https://webpack.js.org/guides/tree-shaking/). For `@material-ui/icons` make sure you are following their [Bundle Size Guidelines](https://material-ui.com/guides/minimizing-bundle-size/).

## Minimize component re-renders

You want to ensure that your components only re-render if they are really changing. Even if the UI doesn't visibly change, your component functions may still be executing and their render functions called, which can be very expensive. In order to verify that you are not doing extraneous re-renders, utilize the chrome React dev tools under the profiler tab. Click the red button to record, and then make one action in the UI, stop recording, and then check to see what components re-rendered, if any elements show up that you did not expect, then start to explore why.

## Ensure callbacks do not regenerate every render

When working with React functional components, the function is called on every render. If your function props anything to a child that changes, the child will re-render even if it is wrapped in a `React.memo`. Callbacks are a common place where we can make this mistake. Unless cached with `useCallback`, `useMemo` or `useRef` the function passed each render will be a **different** function, requiring the child component to re-render as well.

Example: https://codepen.io/owenallenaz/pen/RwwYKxw . This codepen is a simple list app where you type an item into the text box, hit Add and it adds it to the list. What you'll notice is that even though List is wrapped in `React.memo()` it still re-renders on **every keystroke**. The reason for this is due to the `onRemove` function being a new function every render.

In general there are 2 common ways to prevent this. Both patterns are viable and encouraged, and they essentially boil down to whether you prefer to use reducers for their other benefits, or prefer to use callbacks.

**Reducer Pattern**

By calling a dispatcher we can wrap our `onRemove` function in `useCallback` since it no longer needs to know the current state. The downside of this pattern is that you are forced to use a reducer for your state management, and if you are not already using a reducer, this can be a larger refactor. If you are already using a reducer, this is easy.

Example: https://codepen.io/owenallenaz/pen/YzzOZbx
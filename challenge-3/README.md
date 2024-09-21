# Challenge 3: React

In this challenge, you will build a frontend component similar to one we use in the Fiber web app. You'll be using React, Next.js, TypeScript, and [Chakra UI](https://chakra-ui.com/) (a popular React component library).

## Task

Build out the contents of the `Challenge` component in `src/components/challenge.tsx`. You are encouraged to make as many sub-components as you need; you can put these in the `components/` folder. You won't need to edit the `src/pages/index.tsx` file.

When we run `npm run dev`, that will open up `http://localhost:3000` -- your ultimate goal is to make this page fit the below specification.

## Constraints

- You must use TypeScript, with explicit typing for every variable and function.
- You must follow a modern, "React"-y style, using functional components and hooks like `useState`, `useMemo`, and `useCallback`.
- You must ensure that `npm run build` finishes correctly, with no errors and no warnings.
- You must ensure that `npm run lint` raises no lint errors.
- Your page must be responsive: it should work on small (mobile), medium (tablet), and large (desktop) screens.
- You must use a functional, immutable code style. That means using only `const`s, and no `let`s or `var`s (unless `let` is absolutely necessary).
- You may `npm install` whatever new libraries you like, although most of the ones you'll need have already been added to `package.json` for you.

## Specification

Your task is to build a shopping cart for domain purchases. The user can input website domain names they want to buy, such as `example.com`; your component will call a mock API to "check" if those domains are available. The user should be able to view and delete the domain names in their cart. By the end, the user should have exactly `numDomainsRequired` domains in their cart (`numDomainsRequired` is a parameter passed into the component that you'll be building out; see `src/components/challenge.tsx`).

You should have the following core features. Note that you should add smaller polish and usability features that aren't on this list; this is just a set of core functionality. Try to make the UI and UX as smooth and intuitive as possible.

- Users should be able to type in a domain name they want to add; they should be able to hit "Enter" or click a button to add that domain to a growing set or list. In terms of validation, the domain name should be bare (e.g. `example.com` is OK, but `https://example.com` are `example.com/abc` are not), and it must end with `.com`, `.xyz`, or `.app`. It's OK if the user inputs the domain in mixed case, but when the user adds that domain to your set/list, you should convert it to lowercase (e.g. `Example.Com` => `example.com`).
- The user's cart of domains should not have duplicates; for instance, if the user has `[example.com, acme.com]` and adds `example.com`, that should be a no-op, since `example.com` is already in there.
- The user should be able to see all the domains in their cart. They should be able to delete domains. You may optionally let the user edit existing domains, but it's OK if you don't have the feature (users can always delete a domain and add a new one).
- When a domain is added to the cart, call the `isDomainAvailable` function in `src/lib/resources.ts` to check if the domain is available for purchase (according to our mock API -- this just makes up dummy data). Show the availability status of each domain.
- Count how many domains are in the user's cart (both available and unavailable). Compare this domain count to the `numDomainsRequired` parameter; e.g. you can show that 3 out of 5 domains have been added to the cart. Create some UI component(s) showing how "full" the cart is and whether the user has added too many domains. (It's OK if the user has too many domains in their cart -- just tell the user they need to remove some.)
- If the user's cart contains exactly `numDomainsRequired` domains, have a button that the user can click to "purchase" those domains. You don't actually need to take any action in this situation; just let the user click a button. If the user's cart is the wrong size, disable the button.
- Add several other buttons below the list of domains (see below).

### Buttons

Add these buttons below the list of domains:

- A button to clear the cart.
- A button to remove all unavailable domains from the cart.
- A button to copy the domains in the cart to the clipboard, separated by commas. For instance `[abc.com, def.com, ghi.com]` could be copied as `abc.com, def.com, ghi.com`.
- A button to keep only the `N` "best" domains, where `N` is `numDomainsRequired`. To prioritize domains, sort them by their domain ending first: `.com` is better than `.app` which is better than `.xyz`. If there are ties, shorter domains win. For instance, one correct ordering is `[abc.com, abcd.com, ab.app, abc.app, a.xyz]`.

## Components

You should use the [Chakra UI](https://chakra-ui.com/docs/components) component library; it's already been installed and wired up for you. You can [add inline styles](https://chakra-ui.com/docs/styled-system/style-props) to the Chakra components, which is helpful for specifying things like padding, margins, and width. You usually won't need to change more stylistic things like colors, fonts, or borders, since Chakra's default styling is quite good on the visual front.

Tailwind's utility CSS classes are available should you need them, though you should not build components from scratch using Tailwind. Only use Tailwind for one-off styling needs that Chakra doesn't offer (these are quite rare, though).

Avoid using components from other component libraries or importing random React components from NPM -- these tend to clash with the Chakra style.

## Tips

### Chakra

Chakra UI offers a variety of useful features that you should make use of, including:

- [Components](https://chakra-ui.com/docs/components) like `Card`, `Box`, and `Button`. Pay special attention to spacing / layout components like `HStack`, `VStack`, and `Flex`.
- [React Hooks](https://chakra-ui.com/docs/hooks/use-clipboard) for copying text and working with form controls
- [Responsive design tools](https://chakra-ui.com/docs/styled-system/responsive-styles#the-object-syntax)
- [Color schemes and variants](https://chakra-ui.com/docs/components/button/theming) to help you customize the look and feel of various components

### Modules

We recommend using the following Node.js modules:

- `@chakra-ui/react`
- `react`
- `react-icons`
- `lodash`
- `immutable`

These have been already added to `package.json`.

## Do this to impress us

Some tips to make your submission stand out:

- Add usability features like helpful error messages, loading states, confirmation messages, help text, etc.
- Optionally, you may add more advanced features like undo button and filtering/sorting.
- Create many small, modular, and reusable React components.
- Use plentiful comments for your helper functions, including commenting atop each helper function to explain what it does. VSCode can auto-generate JSDoc comments for you ((see this guide)[https://stackoverflow.com/a/42805312]), which are very helpful.
- Use `immutable`'s data types like `Set`, `List`, and `Map`; these work very well with React's immutable style.
- Use Promises and `async`/`await` rather than callbacks.
- Use functional constructs like `map`, `reduce`, and `filter` rather than imperative `for` loops.
- Use TypeScript generics wherever they're helpful.
- Use TypeScript interfaces whenever possible.
- Use [Prettier](https://prettier.io/) to auto-format your code. They have a great [VSCode plugin](https://github.com/prettier/prettier-vscode).

## Getting started

To start the challenge, install the required packages:

```sh
npm install
```

Be sure you're using Node version 18 or greater.

## Testing

To test your code, do:

```sh
npm run dev
```

And open `http://localhost:3000` in your browser.

To check your code's validity, you should run all of:

- `npm run build`, to ensure your code builds properly
- `npm run lint`, to ensure you pass all lint checks
- `npx tsc`, to ensure that your typings are correct.

## Deployment

You may optionally [deploy your project with Vercel](https://vercel.com/docs/frameworks/nextjs), but it's not required. We won't look at your Vercel instance if you make one; we will just run your Next.js project locally.

## Evaluation

We will run the following commands to test your code, starting in the `challenge-3` folder:

```sh
npm install
npm run build
npm run dev
```

Be sure that your web app runs correctly, with no warnings or errors.

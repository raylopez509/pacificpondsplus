This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Suggestions

### Change phone number in header to be a telephone link

- see ["Linking to telephone numbers"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_telephone_numbers
- this way, when the user views the page on their phone, they can click the phone number to call it

### Update navlinks to distinguish link to current page from other links

- for example, when you are on the Home page, it's not necessary for the Home link to be clickable (it will just take you to the page you are currently on)
- so instead, you can add some logic to your Header component
  - if the current page matches the href of a Link, do something different
  - reference my [personal website](https://dlopez.me/), where the link of the current page is underlined and not clickable (it's not an `a` element but a `span` element)

### Change header / navbar to be "sticky"

- it might be a good idea for the header / navbar to stick to the top of the page when scrolling down
- that way, even when the user is in the middle or bottom of the page, they can still click the phone number to call it or navigate to other pages using the navbar without having to scroll all the way up to the top
- do some research on "css sticky header"

### Update some elements on the Home page to use semantic HTML

- for the most part, you seem to use `div`s for everything
- but you can replace some of them with semantic HTML elements like `h1`, `h2`, `p`, `ul`, `li`, etc.
- i made some changes in a commit, but note: these will break your styles so you'll need to fix them if you decide to keep them
- more reading on semantic HTML: https://web.dev/learn/html/semantic-html

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# RUN THE PROJECT

Convert the instrumentation `ts` files to `js` run:

- tsc `path/to/your/instrumentation.ts`
- tsc `path/to/your/instrumentation.node.ts`

File will create `instrumentation.js` `instrumentation.node.js` and `instrumentation.node.ts` which should be in the root of your directory. 


- Make sure ` instrumentationHook: true,` is referenced in `next.config.js`

### package.json has the dev, build and start script:

```
{
  "name": "my-nextjs-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "NODE_OPTIONS='--trace-warnings -r ./instrumentation.js' next dev",
    "build": "NODE_OPTIONS='-r ./instrumentation.js' next build",
    "start": "NODE_OPTIONS='-r ./instrumentation.js' next start",
    "lint": "next lint"
  },
```

## Run the project using :

- `npm install`
- `npm run dev`




----

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

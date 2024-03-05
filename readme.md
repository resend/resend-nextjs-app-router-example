# Resend with Next.js (App Router)

This example shows how to use Resend with [Next.js](https://nextjs.org).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/resend/resend-nextjs-app-router-example&project-name=resend-nextjs-app-router-example&repository-name=resend-nextjs-app-router-example&env=RESEND_API_KEY)

## Instructions

1. Define environment variables in `.env` file.

```sh
cp .env.example .env
```

2. Install dependencies:

```sh
npm install
# or
yarn
```

3. Run Next.js locally:

```sh
npm run dev
```

4. Make a curl request

```sh
curl -X POST http://localhost:3000/api/send
```

## License

MIT License

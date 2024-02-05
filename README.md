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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

FloatingWhatsapp is a React component that allows you to add a floating WhatsApp button to your website. It is a simple and easy-to-use component that you can add to your website with just a few lines of code.

## How to use 

To use the FloatingWhatsapp component, you need to import it from the `floating-whatsapp` package and add it to your website. You can customize the component by passing props to it.

```tsx
import FloatingWhatsapp from 'floating-whatsapp';

export default function Home() {
  return (
    <div>
      <FloatingWhatsapp phoneNumber="1234567890" />
    </div>
  );
}
```
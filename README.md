# WeOpsy landing

This is the landing for WeOpsy, website built with Next.js.

## Prerequisites

- node 22.14
- npm 11.3

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NEXT_PUBLIC_ORIGIN=<website-origin>
```

You can copy the above example to a `.env.example` file and replace the values with your actual configuration.

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
```

### Running in Production

```bash
npm run start
```

## Project Structure

Localization:

- [EN Localization](./localization/en.json)
- [CS Localization](./localization/cs.json)

Documents pages:

- [EN Terms and Conditions](<./src/app/[locale]/(docs)/terms-and-conditions/en.mdx>)
- [EN Privacy Policy](<./src/app/[locale]/(docs)/privacy-policy/en.mdx>)
- [EN Cookie Policy](<./src/app/[locale]/(docs)/cookies/en.mdx>)
- [EN Fraud Prevention](<./src/app/[locale]/(docs)/fraud-prevention/en.mdx>)
- [EN Complaints Policy](<./src/app/[locale]/(docs)/complaints-policy/en.mdx>)

Code:

- `src/app` - Next.js app router pages and layouts
- `src/components` - Reusable UI components
- `src/features` - Feature-specific components
- `src/assets` - Static assets (images, data)
- `src/i18n` - Internationalization configuration
- `src/utils` - Utility functions

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- next-intl (for internationalization)
- MDX (for terms and conditions and privacy policy)
- Embla Carousel (for image galleries)

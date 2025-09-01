import { cx } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { Footer } from '@/features/footer';
import { Header } from '@/features/header';

import css from './docs.module.css';

export default function DocumentsLayout(properties: PropsWithChildren) {
  const { children } = properties;

  return (
    <body>
      <Header />
      <main className={cx(css.docsMarkdown, 'container mx-auto mb-40')}>{children}</main>
      <Footer />
    </body>
  );
}

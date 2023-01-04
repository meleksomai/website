// app/head.js
import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

export default function Head() {
  return (
    <>
      <title>Melek Somai | Personal Website</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
    </>
  );
}

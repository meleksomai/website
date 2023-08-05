import { Metadata } from "next";

const DEFAULT_TITLE = `Melek Somai, MD, MPH | Physician. Clinical Informatician. Data Scientist.`;
const DEFAULT_DESCRIPTION = `Physician. Clinical Informatician. Statistician. Works at the intersection of Healthcare Informatics, Data Science, and Product`;

export interface SeoProps {
  description?: string;
  keywords?: string[];
  og?: {
    subtitle?: string;
    title: string;
  };
  title?: string;
}

export const Seo = (props?: SeoProps): Metadata => {
  let ogUrl = `/og?`;

  if (props?.og?.title) {
    ogUrl += `title=${props.og.title}&`;
  }

  if (props?.og?.subtitle) {
    ogUrl += `subtitle=${props.og.subtitle}&`;
  }

  const seoTitle = props?.title
    ? `${props.title} | Melek Somai`
    : DEFAULT_TITLE;

  const seoDescription = props?.description ?? DEFAULT_DESCRIPTION;

  return {
    title: seoTitle,
    description: seoDescription,
    authors: [
      {
        name: "Melek Somai",
        url: "https://somai.me",
      },
    ],
    keywords: [
      ...(props?.keywords ?? []),
      "digital transformation",
      "health systems",
      "healthcare",
      "healthcare consulting",
      "healthcare consulting firms",
      "healthcare consulting companies",
      "healthcare consulting services",
      "healthcare consulting firms in usa",
      "digital health",
      "global health technology",
      "healthcare technology",
    ],
    openGraph: {
      type: "website",
      title: seoTitle,
      description: seoDescription,
      locale: "en_US",
      url: "https://somai.me",
      siteName: "Melek Somai",
      images: ogUrl,
    },
    twitter: {
      title: seoTitle,
      description: seoDescription,
      images: ogUrl,
      card: "summary",
      site: "@meleksomai",
    },
  };
};

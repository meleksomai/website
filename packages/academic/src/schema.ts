export type Publication = {
  citation: any;
  content: any;
  doi: string;
  meta: any;
  publishedAt: {
    iso: string;
    relative: string;
    text: string;
    timestamp: number;
  };
  publisher: string;
  slug: string;
  url: string;
};

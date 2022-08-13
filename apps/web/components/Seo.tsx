import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const DEFAULT_DOMAIN_URL = "https://somai.me";
const DEFAULT_SITE_NAME =
  "Melek Somai | Digital Health, Care Innovation, Clinical Informatics";
const DEFAULT_TWITTER_HANDLE = "@meleksomai";
const DEFAULT_TITLE_PREFIX = "Melek Somai | ";
const DEFAULT_DESCRIPTION =
  "Melek Somai is the Chief Technology Officer at Inception Health. He holds also the position of Assistant Professor of Medicine at Medical College of Wisconsin. Dr Somai's expertise is in health informatics and data engineering. Melek is trained in medicine, data scientist, and public health.";
const DEFAULT_KEYWORDS = [
  "clinical informatics",
  "data science",
  "clinical computing",
  "digital health",
];

// OG-IMAGE
const OG_IMAGE_URL = "http://og-image.somai.me";

export interface SeoProps {
  /**
   * Canonical URL for the page. This is optional and will override the default
   * canonical URL
   */
  canonicalUrl?: string;

  /**
   * Description of the page.
   */
  description?: string;

  /**
   * Image to be included in the Open Graph
   */
  image?: {
    alt?: string;
    url: string;
  };

  /**
   * The title to be appended to the prefix of the website
   */
  title: string;
}

export const Seo = (props: SeoProps) => {
  const { asPath } = useRouter();

  const title = `${DEFAULT_TITLE_PREFIX} ${props.title}`;
  const description = props.description ?? DEFAULT_DESCRIPTION;
  const canonical = `${props.canonicalUrl ?? DEFAULT_DOMAIN_URL}${asPath}`;

  // Creating the OG:Image
  const ogImage = `${OG_IMAGE_URL}/${encodeURI(
    props.title
  )}.png?theme=dark&md=1&fontSize=100px`;
  console.log(ogImage);

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      // OPEN GRAPH
      openGraph={{
        url: canonical,
        title: title,
        description: description,
        images: [
          {
            url: ogImage,
            width: 800,
            height: 600,
            alt: props.title,
            type: "image/png",
          },
        ],
        site_name: DEFAULT_SITE_NAME,
      }}
      // TWITTER
      twitter={{
        site: DEFAULT_TWITTER_HANDLE,
        cardType: "summary_large_image",
      }}
      // ROBOTS
      robotsProps={{
        noarchive: true,
        maxImagePreview: "large",
      }}
    />
  );
};

export default Seo;

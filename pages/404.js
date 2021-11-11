import { useRouter } from "next/router";

import { slugBlogs, getMetaBlogFromSlug } from "../utils/blog";
import { NotFoundTemplate } from "../templates/notFound";

const NotFound = ({ blogs }) => {
  const router = useRouter();
  const search = router.asPath.split("/").pop();
  const matchLinks = blogs.filter(({ slug }) => slug.includes(search));

  return <NotFoundTemplate blogs={matchLinks} />;
};

export const getStaticProps = () => {
  const blogs = slugBlogs.map(getMetaBlogFromSlug);

  return {
    props: {
      blogs,
    },
  };
};

export default NotFound;

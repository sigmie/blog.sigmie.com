import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" image="cards/sigmie.png" />

<header className="pb-9 sm:pb-16 sm:text-center">
  <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-gray-900 font-extrabold">Blog</h1>
  <p className="text-lg font-normal">All the Sigmie news and knowledge in one place.</p>
  </header>

      <ul className="divide-y divide-gray-300">
      {posts.map(({ frontmatter: { title, description, date, author }, slug }) => (
      <li key={slug} className="py-4 sm:px-0">
        <article>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-xl font-bold text-black hover:no-underline">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm font-semibold text-gray-500">{date}</span>
          </header>
          <section>
            <p className="mb-8 font-normal text-base">{description}</p>
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-sm hover:no-underline cursor-pointer font-semibold text-orange-500">
                  Read more
                </a>
              </Link>
          </section>
        </article>
      </li>
      ))}
    </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}

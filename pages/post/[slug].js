import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

import { Layout, Image, SEO, Bio } from "@components/common";
import { getPostBySlug, getPostsSlugs } from "@utils/posts";

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <div className="flex flex-row">
          <header className="mb-8">
            <h1 className="mb-2 text-3xl font-bold leading-none">
              {frontmatter.title}
            </h1>
            <span className="text-sm font-semibold text-gray-500">{frontmatter.date}</span>
          </header>
        </div>

        <ReactMarkdown
          className="mb-4 prose lg:prose-lg font-"
          skipHtml={false}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={style}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
          children={post.content}
        />
        <hr className="mt-4" />
      </article>

      <nav className="flex justify-between mb-10 mt-4">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-md font-semibold hover:no-underline text-orange-500 hover:text-orange-400">
              Previous post
            </a>
          </Link>
        ) : (
            <div />
          )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-md font-semibold hover:no-underline text-orange-500 hover:text-orange-400">Next post</a>
          </Link>
        ) : (
            <div />
          )}
      </nav>

        <footer className="flex-row justify-center items-center w-full">
          <Bio className="" />
        </footer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

import { MDXRemote } from 'next-mdx-remote';
import SnippetLayout from 'layouts/snippets';
import components from 'components/MDXComponents';
import { snippetsQuery, snippetSlugsQuery } from 'lib/queries';
import { sanityClient, getClient } from 'lib/sanity-server';
import { mdxToHtml } from 'lib/mdx';
import { Snippet } from 'lib/types';

export default function SnippetsPage({ snippet }: { snippet: Snippet }) {
  // Add custom styles for math equations
  const mathStyles = {
    '.math-display': {
      overflowX: 'auto',
      overflowY: 'hidden',
      maxWidth: '100%',
      padding: '0.5rem 0',
    }
  };

  return (
    <SnippetLayout snippet={snippet}>
      <style jsx global>{`
        .math-display {
          overflow-x: auto;
          overflow-y: hidden;
          max-width: 100%;
          padding: 0.5rem 0;
        }
      `}</style>
      <MDXRemote {...snippet.content} components={components} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(snippetSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { snippet } = await getClient(preview).fetch(snippetsQuery, {
    slug: params.slug
  });

  if (!snippet) {
    return { notFound: true };
  }

  const { html } = await mdxToHtml(snippet.content);

  return {
    props: {
      snippet: {
        ...snippet,
        content: html
      }
    }
  };
}

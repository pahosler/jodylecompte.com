import glob from 'fast-glob';
import * as path from 'path';

// TODO: Currently all articles are English, but this code will need to be modified
// eventually to support a top level directory for each language that articles may
// exist in
async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/en/${articleFilename}`
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles/en/'),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
}

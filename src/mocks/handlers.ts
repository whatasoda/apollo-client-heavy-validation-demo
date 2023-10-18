import { graphql } from "msw";
import { v4 as uuid } from "uuid";

const createData = ({
  numArticle,
  numParagraphPerArticle,
}: {
  numArticle: number;
  numParagraphPerArticle: number;
}) => ({
  article: Array.from({ length: numArticle }).map(() => {
    const articleId = uuid();
    return {
      id: articleId,
      title: `Article (${articleId})`,
      paragraph: Array.from({ length: numParagraphPerArticle }).map(() => ({
        id: uuid(),
        text: "sample",
      })),
    };
  }),
});

const sample01 = createData({ numArticle: 100, numParagraphPerArticle: 100 });
const sample02 = createData({ numArticle: 100, numParagraphPerArticle: 1000 });
const sample03 = createData({ numArticle: 100, numParagraphPerArticle: 10000 });

export const handlers = [
  graphql.query("Sample01", (_req, res, ctx) => res(ctx.data(sample01))),
  graphql.query("Sample02", (_req, res, ctx) => res(ctx.data(sample02))),
  graphql.query("Sample03", (_req, res, ctx) => res(ctx.data(sample03))),
];

export const dataHelper = [
  {
    id: 1,
    name: "Category",
    url: "/categories",
    fields: [
      {
        name: "ID",
        value: "id",
      },
      {
        name: "Title",
        value: `attributes`,
        value2: `title`,
      },
      {
        name: "Image URL",
        value: "attributes",
        value2: `image_url`,
      },
    ],
  },
  {
    id: 2,
    name: "Article",
    url: "/articles",
    fields: [
      {
        name: "ID",
        value: "id",
      },
      {
        name: "Title",
        value: `attributes`,
        value2: `title`,
      },
      {
        name: "Description",
        value: `attributes`,
        value2: `description`,
      },
      {
        name: "Article Date",
        value: `attributes`,
        value2: `article_date`,
      },
      {
        name: "Image URL",
        value: "attributes",
        value2: `image_url`,
      },
    ],
  },
];

export default {
  label: "Home Page",
  fields: [
    {
      name: "title",
      component: "text",
    },
    {
      name: "description",
      component: "textarea",
    },
    {
      name: "suppliers",
      fields: [
        {
          name: "name",
          component: "text",
        },
      ],
    },
  ],
};

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
      label: "Suppliers",
      name: "suppliers",
      description: "All the suppliers",
      component: "group",
      fields: [
        {
          label: "Name",
          name: "supplier-name",
          description: "Suppliers Name",
          component: "text",
        },
        {
          label: "Website",
          name: "website",
          description: "Suppliers Website",
          component: "text",
        },
        {
          label: "Description",
          name: "description",
          description: "Suppliers description",
          component: "text",
        },
      ],
    },
  ],
};

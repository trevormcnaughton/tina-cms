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
      label: "Suppliers List",
      name: "suppliers",
      component: "group-list",
      itemProps: (item) => ({
        key: item.id,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Supplier",
        id: Math.random().toString(36).substr(2, 9),
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Website",
          name: "website",
          component: "text",
        },
        {
          label: "Description",
          name: "description",
          component: "markdown",
        },
      ],
    },
  ],
};

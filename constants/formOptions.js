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
        name: "New supplier...",
        website: "New supplier website...",
        description: "New supplier description...",
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
        {
          label: "Recycled Products",
          name: "recycled-products",
          component: "group-list",
          itemProps: (item) => ({
            key: item.id,
            label: item.name,
          }),
          defaultItem: () => ({
            name: "Add Product",
            id: Math.random().toString(36).substr(2, 9),
          }),
          fields: [
            {
              label: "Product",
              name: "item",
              component: "group-list",
              fields: [
                {
                  label: "Name",
                  name: "product-name",
                  component: "select",
                  options: [
                    "Chain",
                    "Sheet",
                    "Wire",
                    "Tubing",
                    "Casting Grain",
                    "Findings",
                    "Mountings",
                  ],
                },
                {
                  label: "Materials",
                  name: "materials",
                  component: "group-list",
                  itemProps: (item) => ({
                    key: item.id,
                    label: item.name,
                  }),
                  defaultItem: () => ({
                    name: "Add material",
                    id: Math.random().toString(36).substr(2, 9),
                  }),
                  fields: [
                    {
                      label: "Certification",
                      name: "certification",
                      component: "select",
                      options: ["Third-Party Certified", "Company Claim"],
                    },
                    {
                      label: "Metal",
                      name: "metal",
                      component: "select",
                      options: ["Gold", "Silver", "Platinum", "Palladium"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

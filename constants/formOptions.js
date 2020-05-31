export default {
  label: "Suppliers",
  fields: [
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
          name: "recycledProducts",
          component: "group-list",
          itemProps: (item) => ({
            key: item.id,
            label: item.productName,
            name: item.productName,
          }),
          defaultItem: () => ({
            name: "Add Product",
            id: Math.random().toString(36).substr(2, 9),
          }),
          fields: [
            {
              label: "Name",
              name: "productName",
              component: "select",
              options: [
                "Select product type...",
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
                label: item.metal,
              }),
              defaultItem: () => ({
                name: "Add material",
                id: Math.random().toString(36).substr(2, 9),
              }),
              fields: [
                {
                  label: "Metal",
                  name: "metal",
                  component: "select",
                  options: [
                    "Select metal...",
                    "Gold",
                    "Silver",
                    "Platinum",
                    "Palladium",
                  ],
                },
                {
                  label: "Certification",
                  name: "certification",
                  component: "select",
                  options: [
                    "Select Certification...",
                    "Third-Party Certified",
                    "Company Claim",
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Artisanal Products",
          name: "artisanalProducts",
          component: "group-list",
          itemProps: (item) => ({
            key: item.id,
            label: item.productName,
            name: item.productName,
          }),
          defaultItem: () => ({
            name: "Add Product",
            id: Math.random().toString(36).substr(2, 9),
          }),
          fields: [
            {
              label: "Name",
              name: "productName",
              component: "select",
              options: [
                "Select product type...",
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
                label: item.metal,
              }),
              defaultItem: () => ({
                name: "Add material",
                id: Math.random().toString(36).substr(2, 9),
              }),
              fields: [
                {
                  label: "Metal",
                  name: "metal",
                  component: "select",
                  options: [
                    "Select metal...",
                    "Gold",
                    "Silver",
                    "Platinum",
                    "Palladium",
                  ],
                },
                {
                  label: "Certification",
                  name: "certification",
                  component: "select",
                  options: [
                    "Select Certification...",
                    "Fairtrade",
                    "Fairmined",
                    "Fair Trade",
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

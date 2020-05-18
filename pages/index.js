import Head from "next/head";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { GlobalStyle } from "./style";
import formOptions from "../constants/formOptions";
import styled from "styled-components";

const List = styled.ul`
  padding: 1rem;
  margin-bottom: 1rem;
  list-style: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;

const Item = styled.li`
  padding: 0;
`;

export default function Home({ file, preview }) {
  const [data, form] = useGithubJsonForm(file, formOptions);
  useGithubToolbarPlugins();

  console.log("$$$$$$", data);

  return (
    <div className="container">
      <Head>
        <title>Utitled Jewelry Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{data.title}</h1>
        <p>{data.description}</p>

        {data.suppliers.map((supplier) => (
          <List>
            <Item>{supplier.name}</Item>
            <Item>{supplier.website}</Item>
            <Item>{supplier.description}</Item>

            {supplier.recycledProducts?.map((p) => (
              <List>
                <Item>{p.productName}</Item>
                {p.materials?.map((mat) => (
                  <List>
                    <Item>{mat.metal}</Item>
                    <Item>{mat.certification}</Item>
                  </List>
                ))}
              </List>
            ))}
          </List>
        ))}
      </main>
      <GlobalStyle />
    </div>
  );
}

export const getStaticProps = async function ({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
    },
  };
};

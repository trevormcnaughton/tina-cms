import Head from "next/head";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import ReactMarkdown from "react-markdown";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { GlobalStyle } from "./style";
import formOptions from "../constants/formOptions";
import styled from "styled-components";

const List = styled.ul`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  list-style: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;

const Item = styled.li`
  padding: 0;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: bold;
`;

const Website = styled.a`
  text-decoration: none;
  color: #2296fe;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

export default function Home({ file, preview }) {
  const [data, form] = useGithubJsonForm(file, formOptions);
  // useGithubToolbarPlugins();

  return (
    <Container>
      <Head>
        <title>Utitled Jewelry Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        {data.suppliers.map((supplier) => (
          <List>
            <Item>
              <Title>{supplier.name}</Title>
            </Item>
            <Item>
              <Website href={supplier.website}>{supplier.website}</Website>
            </Item>
            <Item>
              <ReactMarkdown source={supplier.description} />
            </Item>

            {supplier.recycledProducts && <h3>Recycled Products</h3>}
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

            {supplier.artisanalProducts && <h3>Artisanal Products</h3>}
            {supplier.artisanalProducts?.map((p) => (
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
      </Content>
      <GlobalStyle />
    </Container>
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

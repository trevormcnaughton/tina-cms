import Head from "next/head";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import ReactMarkdown from "react-markdown";
import {
  useGithubEditing,
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { GlobalStyle } from "../components/style";
import formOptions from "../constants/formOptions";
import styled from "styled-components";

const List = styled.ul`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  list-style: none;
  border-bottom: 1px solid #cfcfcf;
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
  display: grid;
  grid-template-columns: 17.5rem 1fr;
`;

const Content = styled.div`
  max-width: 65rem;
  margin: 0 auto;
`;

const ScrollView = styled.div`
  height: 100vh;
  overflow: auto;
`;

const Sidebar = styled.div`
  max-width: 17.5rem;
  height: 100vh;
  background: #ffd875;
`;

const Logo = styled.div`
  font-weight: bold;
`;

const Edit = styled.button`
  background: #efefef;
  appearance: 0;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  margin-left: auto;
`;

const Badge = styled.div`
  display: inline-block;
  font-size: 0.875rem;
  padding: 0rem 0.5rem;
  border-radius: 1rem;
  background: peru;
`;

export const EditLink = ({ editMode }) => {
  const github = useGithubEditing();

  return (
    <Edit onClick={editMode ? github.exitEditMode : github.enterEditMode}>
      {editMode ? "Exit Edit Mode" : "Edit This Site"}
    </Edit>
  );
};

const ProductGrid = ({ products }) => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  `;

  const Item = styled.div`
    padding: 1rem;
    border: 4px solid rgba(0, 0, 0, 0.16);
  `;

  const Name = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  `;

  return (
    <Grid>
      {products?.map((p) => (
        <Item>
          <Name>{p.productName}</Name>
          {p.materials?.map((mat) => (
            <div>
              {mat.metal} {mat.certification}
            </div>
          ))}
        </Item>
      ))}
    </Grid>
  );
};

export default function Home({ file, preview }) {
  const [data, form] = useGithubJsonForm(file, formOptions);
  useGithubToolbarPlugins();

  return (
    <Container>
      <Head>
        <title>Utitled Jewelry Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <Logo>Untitled Jewelry Project</Logo>
        <EditLink editMode={preview} />
      </Sidebar>
      <ScrollView>
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
              <ProductGrid products={supplier.recycledProducts} />

              {supplier.artisanalProducts && <h3>Artisanal Products</h3>}
              <ProductGrid products={supplier.artisanalProducts} />
            </List>
          ))}
        </Content>
      </ScrollView>
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

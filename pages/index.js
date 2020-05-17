import Head from "next/head";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { GlobalStyle } from "./style";
import formOptions from "../constants/formOptions";

export default function Home({ file, preview }) {
  const [data, form] = useGithubJsonForm(file, formOptions);
  useGithubToolbarPlugins();

  return (
    <div className="container">
      <Head>
        <title>Utitled Jewelry Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{data.title}</h1>
        <p>{data.description}</p>

        <ul>
          <li>{data.suppliers[0].name}</li>
          <li>{data.suppliers[0].website}</li>
          <li>{data.suppliers[0].description}</li>
        </ul>
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

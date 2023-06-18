import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// custom loader
// const MyLoadingRenderer = ({ document, fileName }) => {
//   const fileText = fileName || document?.fileType || "";

//   if (fileText) {
//     return <div>Loading Renderer ({fileText})...</div>;
//   }

//   return <div>Loading Renderer...</div>;
// };

function Home() {
  // for docx, pptx & xlsx, you need to upload in any cloud platform it could be amazon s3, github and all. But you need to make sure there is no cors policy. for more info visit this link: https://www.npmjs.com/package/@cyntler/react-doc-viewer
  const docs = [
    {
      // uri: "url", // for remote file
      uri: "/demo.pdf", // for local file
    },
    {
      // uri: "url", // for remote file
      uri: "/demo.pptx", // for local file
    },
    {
      // uri: "url", // for remote file
      uri: "/demo.docx", // for local file
    },
    {
      // uri: "url", // for remote file
      uri: "/demo.xlsx", // for local file
    },
  ];
  return (
    <div>
      <DocViewer
        // prefetchMethod="GET" // for remote fetch
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: "100vh" }} //custom style
        // config={{
        //   loadingRenderer: {
        //     overrideComponent: MyLoadingRenderer,
        //   },
        // }}
      />
    </div>
  );
}

export default Home;

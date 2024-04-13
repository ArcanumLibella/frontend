import React from "react";
import { Blobs } from "../organisms/Blobs";
import { BlobsLight } from "../organisms/BlobsLight/BlobsLight";
import { Text } from "../atoms/Text";
import { MainLayout } from "./MainLayout";
import { graphql, useStaticQuery } from "gatsby";
// import { Footer } from "../organisms/Footer";

export const PageLayout = ({pageTitle, children, className: additionalStyle}) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     ... TODO:
  //   }
  // `
  // )

  return (
    <MainLayout>
      <div className={`${additionalStyle} relative px-4 pt-40 md:pt-56 md:px-8 md:ml-20 xl:ml-0 xl:py-0 pb-16 xl:px-0 xl:top-1/4 xl:-right-1/3 3xl:-right-2/5 max-w-fit z-10`}>
        <Blobs className="fixed flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[64vh] !-z-1" />
        <BlobsLight className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[72vh] !-z-1" />
        <div className="max-w-800 lg:max-w-5xl xl:max-w-800">
          <Text type="h2" className="mb-10 text-tomato">
            {pageTitle}
          </Text>
          {children}
        </div>
      </div>
      {/* <Footer /> TODO: A réactiver quand je serai prête ! */} 
    </MainLayout>
  )
};
import { pageIndex } from "../../globals/seo/index";
import { DERECTIONDEFAULT } from "../../globals/constants";
import { NextSeo, NextSeoProps } from "next-seo";

type SeopType = {
  title?: string;
  description?: string;
  page?: string;
};

export const SeoIndex = ({ title, description, page }: SeopType) => {
  return (
    <NextSeo
      title={title || pageIndex.title}
      titleTemplate={pageIndex.titleTemplate}
      openGraph={{
        title: pageIndex.title,
        description: pageIndex.description,
        url: DERECTIONDEFAULT,
        images: [],
        site_name: "Catzen | Agencia de Marketing Digital",
      }}
      facebook={{ appId: pageIndex.facebokappid }}
      description={pageIndex.description}
      canonical={pageIndex.canonical(page || "")}
    />
  );
};

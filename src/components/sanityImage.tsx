import Image from "next/image";
import { client } from "@/sanity/client";
import { useNextSanityImage } from "next-sanity-image";

export function SanityImage({
  asset,
}: {
  asset: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}) {
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      alt=""
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
      }}
    />
  );
}

export const myPortableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: {
        asset: {
          _type: string;
          asset: {
            _ref: string;
            _type: string;
          };
        };
      };
    }) => {
      return <SanityImage {...value} />;
    },
  },
};

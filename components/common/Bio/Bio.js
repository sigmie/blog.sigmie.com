import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-20 h-20"
        src="https://avatars0.githubusercontent.com/u/15706832?s=460&u=e2262b5777aea47219f3f10ec55e5339ec40be3a&v=4"
        alt="Profile"
      />

      <p className="text-base leading-7">
        <b className="font-semibold">Nico</b>
        <br></br>
        <a className="font-semibold" href={`https://twitter.com/@nicoorfi`}>
          Follow me on twitter
        </a>
      </p>
    </div>
  );
}

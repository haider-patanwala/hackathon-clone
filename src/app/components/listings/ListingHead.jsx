'use client';

import Image from "next/image";


import Heading from "../Heading";
import HeartButton from "../HeartButton";

const ListingHead = ({
  title,
  locationRegion,
  imageSrc,
  locationLabel,
}) => {


  return (
    <>
      <Heading
        title={title}
        subtitle={`${locationRegion}, ${locationLabel}`} center={false} />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton />
        </div>
      </div>
    </>
  );
}

export default ListingHead;
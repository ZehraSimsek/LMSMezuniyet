import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_utils/GlobalApi";
import Image from "next/image";

export default function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]);

  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      console.log(resp);
      setSideBannerList(resp.sideBanners);
    });
  };

  return (
    <div className="mt-0">
      {sideBannerList.map((item, index) => (
        <div key={index}>
          <Image
            src={item.banner.url}
            alt="banner"
            width={250}
            height={500}
            onClick={() => window.open(item?.url)}
            className="mb-4 rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

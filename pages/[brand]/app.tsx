import React from "react";
import { useOs } from "@mantine/hooks";
import { useRouter } from "next/router";
import { brand_details } from "@/constants";
import Layout from "../../components/SpecialPagesLayout/Special";
import { CustomImage } from "@/components";

const AppPage = () => {
  const router = useRouter();
  const { brand } = router.query;
  const os = useOs();

  const allowedPattern = /^a\d{1,6}$/;
  
  let brandName = brand;
  if (!brand || typeof brand !== "string" || !brand_details[brand] && allowedPattern.test(String(brand))) {
    brandName = 'a4';
  } else {
    // router.push('/');
  }
  
  const { logo, imgAlt, height, width } = brand_details[String(brandName)];

  let bannerSrc;
  let bannerImgAlt;
  if (brand === "a14") {
    bannerSrc =
      "https://acdn.dnamicro.net/instaprotek/instaprotek-product_replacement_warranty_banner.png";
    bannerImgAlt = "Product Replacement Warranty";
  } else if (brand === "otterprotect") {
    bannerSrc = "https://acdn.dnamicro.net/instaprotek/otterbox_logo.png";
    bannerImgAlt = "OtterBox Protection Program";
  } else {
    bannerSrc =
      "https://acdn.dnamicro.net/instaprotek/instaprotek-you-break-it-we-fix-it-guarantee.png";
    bannerImgAlt = "Product Guarantee";
  }

  const googleLink =
    brand !== "otterprotect"
      ? "https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en_US"
      : "https://play.google.com/store/apps/details?id=com.otterbox.app";
  const appleLink =
    brand !== "otterprotect"
      ? "https://apps.apple.com/us/app/instaprotek/id1456989327"
      : "https://apps.apple.com/us/app/otterprotect/id1609528349";

  const shouldShowGoogleButton = [
    "windows",
    "linux",
    "undetermined",
    "android",
  ].includes(os);
  const shouldShowAppleButton = [
    "windows",
    "linux",
    "undetermined",
    "ios",
    "macos",
  ].includes(os);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
					<CustomImage 
            style={{
              marginRight: "24px",
            }}
            height={height}
            width={width}
            src={logo}
            alt={imgAlt}
            priority
					/>
          {brand !== "a14" && brand !== "a4" && brand !== "otterprotect" && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ display: "inline-block" }}
              >
                <path
                  d="M20.4853 12H3.51472"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3.51471V20.4853"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
							<CustomImage 
                style={{ marginLeft: "24px" }}
                height={100}
                width={100}
                src="https://acdn.dnamicro.net/instaprotek/instaprotek-shield.png"
                alt="Additional Image"
                priority
							/>
            </>
          )}
        </div>
        <h1
          style={{
            marginTop: "44px",
            maxWidth: "32rem",
            fontSize: "14px",
            color: "#6B7280",
            textAlign: "center",
          }}
        >
          Tap to download the{" "}
          {brand !== "otterprotect" ? "InstaProtek App" : "OtterProtect App"}{" "}
          from App Store or Google Play Store
        </h1>
        <div
          style={{
            marginTop: "44px",
            display: "flex",
            gap: "16px",
          }}
        >
          {shouldShowAppleButton && (
            <a
              id="instaprotek_ios"
              href={appleLink}
              style={{ display: "inline-block" }}
            >
							<CustomImage 
                height={75}
                width={272}
                src="https://acdn.dnamicro.net/instaprotek/download_app_store_transparent.png"
                alt="Apple App Store"
                priority
							/>
            </a>
          )}

          {shouldShowGoogleButton && (
            <a
              id="instaprotek_android"
              href={googleLink}
              style={{ display: "inline-block" }}
            >
							<CustomImage 
                height={75}
                width={272}
                src="https://acdn.dnamicro.net/instaprotek/download_google_play_transparent.png"
                alt="Google Play Store"
                priority
							/>
            </a>
          )}
        </div>

        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
						<CustomImage 
              style={{
                margin: "50px auto 0",
              }}
              height={brand !== "a14" ? 215.5 : 176}
              width={572}
              src={bannerSrc}
              alt={bannerImgAlt}
              priority
						/>
          </dd>
        </div>
      </div>
    </Layout>
  );
};

export default AppPage;
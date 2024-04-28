import React, { useEffect } from "react";
import Image from "next/image";
import KakaoImage from "/public/Kakao_logo.jpg";

type KakaoShareButtonProps = {
  description: string;
};

const KakaoShareButton = ({ description }: KakaoShareButtonProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://mental-age-test.vercel.app";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { Kakao } = window;

      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    }
  }, []);

  const handleShare = () => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
      objectType: "text",
      text: description,
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl,
      },
      buttons: [
        {
          title: "테스트 하러가기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],

    });
  };

  return (
    <div onClick={handleShare}>
      <Image
        className="w-10 h-10 cursor-pointer sm:w-1 sm:h-1"
        src={KakaoImage}
        alt="카카오톡 공유 이미지"
      />
    </div>
  );
};

export default KakaoShareButton;
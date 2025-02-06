"use client"; // クライアントコンポーネントとして設定

import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Loader } from "semantic-ui-react";

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function Home() {
  const [catImageUrl, setCatImageUrl] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 初回レンダリング時に猫画像を取得
  useEffect(() => {
    fetchCatImage();
  }, []);

  async function fetchCatImage() {
    setIsLoading(true);
    const res = await fetch("/api/cat");
    const catImage: CatImage = await res.json();
    setCatImageUrl(catImage.url);
    setIsLoading(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      
      <h1>猫画像アプリ</h1>
      {isLoading ?
        <Loader active size = "huge" inline="centered" />
        : 
        <img src={catImageUrl} width={500} height={"auto"} alt="ねこ" />
      }
      <button style={{ marginTop: "18px" }} onClick={fetchCatImage}>
        きょうの猫さん
      </button>
    </div>
  );
}

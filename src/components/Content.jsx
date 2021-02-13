import React from "react";
import ContentAside from "./ContentAside.jsx";
import ContentSection from "./ContentSection.jsx";

export default function Content() {
  return (
    <div className="content">
      <div className="main-conteiner">
        <div className="content__row">
          <ContentSection />
          <ContentAside />
        </div>
      </div>
    </div>
  );
}

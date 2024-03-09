import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

/*const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/200/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/200/300?image=206",
];*/
const FastGallery = (props) => {
  const images = props.images;
  const fast = props.fastival;
  const [imageData, setImageData] = useState({ img: "", i: 0 });
  const viewEachImage = (img, i) => {
    setImageData({ img, i });
  };
  const imgAction = (action) => {
    let i = imageData.i;
    if (action === "next-img") {
      setImageData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setImageData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setImageData({ img: "", i: 0 });
    }
  };
  return (
    <>
      {imageData.img && (
        <div
          style={{
            width: "100%",
            height: "97vh",
            background: "black",
            opacity: "0.98",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            marginBottom: "30px",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "3px",
              marginRight: "12px",
            }}
          >
            X
          </button>
          <button
            onClick={() => imgAction("previous-img")}
            style={{
              background: "black",
              color: "white",
              margin: "300px 0 300px 0",
              border: "1px solid black",
            }}
          >
            Previous
          </button>
          <img
            src={imageData.img}
            style={{
              width: "auto",
              maxWidth: "70%",
              maxHeight: "90%",
              margin: "40px",
            }}
            alt=""
          />
          <button
            onClick={() => imgAction("next-img")}
            style={{
              background: "black",
              color: "white",
              margin: "300px 0 300px 0",
              border: "1px solid black",
            }}
          >
            Next
          </button>
        </div>
      )}
      <div
        style={{
          padding: "10px",
          background: "black",
          textAlign: "center",
          border: "1px solid black",
        }}
      >
        <h2 style={{ color: "white" }}>{fast}</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 850: 2, 1000: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewEachImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default FastGallery;

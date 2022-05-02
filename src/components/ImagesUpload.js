import React, { useState, useEffect } from "react";
import { storage } from "../utils/firebase";
import { getDownloadURL, list, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const imageListRef = ref(storage, "Images/");

const ImagesUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

 const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `Images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // alert("image uploaded");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    list(imageListRef).then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    /**[0] is because we only will upload 1 picture */
    <div>
      <input
        type="file"
        // value={url}
        onChange={(e) =>
          setImageUpload({imageUrl: e.target.files[0] })
        }
      ></input>
      <button onClick={uploadImage}>upload image</button>
     </div>
  );
};

export default ImagesUpload;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imageFiles from "@/util/imageFiles.js";
import styles from "./RandomBackground.module.css";

const RandomBackground = () => {
  const [randomImageFile, setRandomImageFile] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    setRandomImageFile(imageFiles[randomIndex]);
  }, []);

  return (
    <div className={styles.backdropContainer}>
      <div className={styles.backdropWrapper}>
        {randomImageFile && (
          <Image
            src={`/images/${randomImageFile}.jpg`}
            alt="Random Background"
            fill
            className={styles.backdropImage}
          />
        )}
        <div className={styles.backdropMask}></div>
      </div>
    </div>
  );
};

export default RandomBackground;

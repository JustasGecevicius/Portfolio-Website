import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import "./SCSS/blog.css";

export const Blog = ({ db }) => {
  const [fetched, setFetched] = useState(true);
  let zeba;
  useEffect(() => {
    (async () => {
      zeba = await getDocs(collection(db, "Blog"));
      zeba.forEach((elem) => {
        //console.log(elem.id, "=>", elem.data());
      });
    })();
  }, []);

  return fetched ? (
    <div className="blog">
      <h2 className="pageTitle"> New Blogs Coming Soon... </h2>
      <div className="blogsDiv"></div>
    </div>
  ) : null;
};

import { useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";


export const Blog = ({db}) => {
    const [fetched, setFetched] = useState(false);
    let zeba;
    useEffect (() => {
        (async () => {
            zeba = await (getDocs(collection(db, "Blog")));
            zeba.forEach(elem => {
                console.log(elem.id, "=>", elem.data());
            })
        })();
    },[]);




  return fetched ? (<div className="blog">
              <h2 className="pageTitle"> Blog </h2>
              <div className="blogsDiv">

              </div>
  </div>) : (null)
};

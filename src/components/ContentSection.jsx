import React from "react";
import {Context} from "./context.js"
import { useContext } from "react";
import Post from "./Post.jsx";

export default function ContentSection() {
let {posts} = useContext(Context);

  return (
      <section className="content__section">
        <h1>New Posts</h1>
        {posts.map(post => {return <Post postData={post} key={post.id} />})}
      </section>
  );
}

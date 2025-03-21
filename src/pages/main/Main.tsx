import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Post } from "./Post";

export interface IPost {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {

  const [postsList, setPostsList] = useState<IPost[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({...doc.data(), id: doc.id})) as IPost[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post) => <Post post={post} />)}
    </div>
  )
}
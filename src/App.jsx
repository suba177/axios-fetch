import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [post, setPost] = useState([]);

  // axios
  //   .get("https://fortniteapi.io/v3/challenges", {
  //     params: {
  //       lang: "ru",
  //       season: "current",
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "9be974cd-eda46426-30758749-595fb627",
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Тоже самое в другом формате

  // axios({
  //   method: "POST",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   data: {
  //     userId: 1,
  //     title: "My title",
  //     body: "My body",
  //   },
  // })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      <>HELLO WORLD</>
      {post
        .filter((item) => item.id <= 20)
        .map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
    </>
  );
}

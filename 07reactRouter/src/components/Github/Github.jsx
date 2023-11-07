// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);

  // useEffect(() => {
  //   fetch(
  //     "https://api.github.com/repos/Yogesh0312/Yogesh0312/contents/README.md?ref=main"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.content);
  //       let decodedValue = atob(data.content);
  //       console.log(decodedValue);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        className="mb-5"
      />
      <div>
        <a
          href="https://github.com/sagar2290"
          className="bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-800"
          target="_blank"
          rel="noreferrer"
        >
          My Github Account
        </a>
      </div>
    </div>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sagar2290");
  return response.json();
};

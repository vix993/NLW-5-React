import { useEffect } from "react";

export default function Home(props) {

  return (
    <h1>Hello</h1>
  )
}

export async function getStaticProps() {
  // Static site regenerated every 8 hours
  // when it is accessed
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

// export async function getServerSideProps() {
//   // Not a necessary strategy for sites
//   // that are not going to constantly change
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }
import { GetStaticProps } from "next";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { api } from "../services/api";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
};

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
};

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  return (
    <div className="px-16 h-fh overflow-scroll">
      <section className="">
        <h2 className="mt-12 mb-6">Latest Releases</h2>

        <ul className="grid grid-cols-2 gap-6">
          {latestEpisodes.map((episode) => {
            return (
              <li
                key={episode.id}
                className="bg-white border border-gray-100 p-6 rounded-3xl relative flex items-center"
              >
                <img
                  className="w-24 h-24 rounded-xl bg-cover"
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                />

                <div
                  className="max-w-xs flex-1 ml-4 block text-gray-800 font-semibold leading-6 hover:text-gray-400"
                >
                  <a href="">{episode.title}</a>
                  <p
                    className="text-sm mt-2 whitespace-nowrap overflow-hidden overflow-ellipsis"
                  >
                    {episode.members}
                  </p>
                  <div className="flex flex-row justify-start items-center">
                    <span className="inline-block mt-2 text-sm mr-2 pr-2 relative">{episode.publishedAt}</span>
                    <span className="inline-block mt-2 text-sm">{episode.durationAsString}</span>
                  </div>
                  
                </div>

                <button type="button">
                  <img className="w-24 h-24 rounded-xl" src="/play-green.svg" alt="Play Episode" />
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className=""></section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Static site regenerated every 8 hours
  // when it is accessed
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy"),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
};

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

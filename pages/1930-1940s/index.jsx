import Head from "next/head";
import GenerateMovies from "@/components/GenerateMovies/GenerateMovies";

const Pre1940sPage = () => {
  return (
    <>
      <Head>
        <title>1930-1940s Movies</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content-1920">
        <GenerateMovies startYear={1930} endYear={1949} />
      </div>
    </>
  );
};

export default Pre1940sPage;

import Head from "next/head";
import GenerateMovies from "@/components/GenerateMovies/GenerateMovies";

const Pre2000sPage = () => {
  return (
    <>
      <Head>
        <title>1990-2000s Movies</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content-1920">
        <GenerateMovies startYear={1990} endYear={2009} />
      </div>
    </>
  );
};

export default Pre2000sPage;

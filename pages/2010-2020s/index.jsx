import Head from "next/head";
import GenerateMovies from "@/components/GenerateMovies/GenerateMovies";

const Pre2020sPage = () => {
  return (
    <>
      <Head>
        <title>2010-2020s Movies</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content-1920">
        <GenerateMovies startYear={2010} endYear={2029} />
      </div>
    </>
  );
};

export default Pre2020sPage;

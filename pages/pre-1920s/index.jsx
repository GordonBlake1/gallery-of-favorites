import Head from "next/head";
import GenerateMovies from "@/components/GenerateMovies/GenerateMovies";

const Pre1920sPage = () => {
  return (
    <>
      <Head>
        <title>Pre-1920s Movies</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content-1920">
        <GenerateMovies startYear={1900} endYear={1929} />
      </div>
    </>
  );
};

export default Pre1920sPage;

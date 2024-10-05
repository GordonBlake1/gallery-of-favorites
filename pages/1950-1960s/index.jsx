import Head from "next/head";
import GenerateMovies from "@/components/GenerateMovies/GenerateMovies";

const Pre1960sPage = () => {
  return (
    <>
      <Head>
        <title>1950-1960s Movies</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content-1920">
        <GenerateMovies startYear={1950} endYear={1969} />
      </div>
    </>
  );
};

export default Pre1960sPage;

import Head from "next/head";
import GenerateMovies from "@/components/GenerateMovies/GenerateMovies";

const Pre1980sPage = () => {
  return (
    <>
      <Head>
        <title>1970-1980s Movies</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content-1920">
        <GenerateMovies startYear={1970} endYear={1989} />
      </div>
    </>
  );
};

export default Pre1980sPage;

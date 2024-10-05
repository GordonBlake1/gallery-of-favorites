import Head from "next/head";
import Link from "next/link";
import Contact from "@/components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>St. Gordon&quot;s Gallery</title>
        <meta
          name="description"
          content="The definitive list containing favorite movies of Gordon Blake, from the beginning to the end of times"
        />
      </Head>
      <div id="content">
        <h1 className="introTitle">A Brief Introduction</h1>
        <div className="epigraphWrapper">
          <div className="epigraph">
            Reality, whether approached imaginatively or empirically, remains a
            surface, hermetic. Imagination, applied to what is absent, is
            exercised in a vacuum and cannot tolerate the limits of the real
            <br />
            <span style={{ color: "gold" }}>&mdash;Samuel Beckett</span>
          </div>
        </div>

        <div className="epigraphWrapper">
          <div className="epigraph">
            I&apos;d like to talk to this audience, cos this audience has been
            curiously hostile to me. Are you really all truly idiots or is it
            me?
            <br />
            <span style={{ color: "gold" }}>&mdash;Norman Mailer</span>
          </div>
        </div>

        <div className="epigraphWrapper">
          <div className="epigraph">
            I do not care who it is that has or does influence me as long as it
            is not myself
            <br />
            <span style={{ color: "gold" }}>&mdash;Pablo Picasso</span>
          </div>
        </div>
        <div className="introduction">
          <p>
            Welcome to the dark corner of the Earth. I&apos;m Gordon Blake and
            these are the lists of my favorite movies of each year. Where&apos;s
            the 19xx year? you might ask. Where&apos;s the 20xx? As of today,
            I&apos;ve completed my journey through the{" "}
            <span style={{ color: "#f9c7d5" }}>...&mdash;1923</span> years. You
            should exercise a great deal of precaution if encountering any list
            not belonging to the mentioned time period: it&apos;s probably a
            placeholder.
          </p>
          {/* Insert an image of 20xx year with bullshit entries */}
          <p>
            It&apos;s not really a biggie in a grand scheme of things, just
            sitting there, observing frames change 24 times per second. What the
            hell, I just might be the best watcher there is. But there&apos;s a
            difference between seeing things and &quot;seeing things&quot;. So,
            do I &quot;see things&quot;? I watch things. I look into things. I
            observe. See Saw, Have Seen. Have Been Seen To Have Seeing Things.
            From the safest distance possible, mind you. We&apos;re not here to
            get affected, are we.
          </p>
          <p>
            When we critique movies, we often resort to the superficial method
            of evaluating them with a number, which can severely impair
            one&apos;s appreciation for cinema. Our memories diligently sort and
            file away anything that doesn&apos;t meet our arbitrary criteria,
            consigning those &quot;lesser&quot; movies to the dark recesses of
            our minds until they are forgotten entirely. I don&apos;t want this
            to happen to my besties. I had strings, but now I&apos;m free.
            Shoutout to{" "}
            <Link
              href={"https://sallittfavorites.wordpress.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: "#0096FF" }}>Dan Sallitt</span>
            </Link>{" "}
            for the idea of a color coded rating system, which I may or may not
            understand myself, but I&apos;m using it anyways throughout my
            lists. Each color represents how much I liked the film, and has the
            folowing progression, from highest to lowest:
          </p>
          <ul className="colorRatingExample">
            <li>
              <span style={{ color: "#cc0000" }}>Crimson</span>
            </li>
            <li>
              <span style={{ color: "#ff6600" }}>Orange</span>
            </li>
            <li>
              <span style={{ color: "#33cc00" }}>Lime Green</span>
            </li>
            <li>
              <span style={{ color: "#3366ff" }}>Royal Blue</span>
            </li>
            <li>
              <span style={{ color: "#cc33cc" }}>Fuchsia</span>
            </li>
            <li>
              <span style={{ color: "#4f4f4f" }}>Charcoal Gray</span>
            </li>
          </ul>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;

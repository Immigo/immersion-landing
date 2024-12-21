import React from "react";
import Head from "next/head";
import { JourneyButton } from "@/components/buttons/journeyButton";
import { NavBarSimple } from "@/components/navbar-simple";
import { useTranslations } from "next-intl";

const Home: React.FC = () => {
  const t = useTranslations('Journey');

  return (
    <>
      <NavBarSimple />
      <Head>
        <title>Immigo: Choose Your Journey</title>
        <meta name="description" content="Level up your English skills with Immigo's 8-bit adventure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen text-white font-mono">
        {/* Main Content */}
        <main className="container mx-auto p-4 text-center">
          <div className="grid grid-cols-3">

          <div className="font-press-start-2p text-pink-500 md:text-6xl text-3xl h-full flex md:px-24 md:text-left md:col-span-1 col-span-3 col-span-3 flex justify-center items-center flex-col">
            <span>{t('chooseYourJourney')}</span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:mt-12 mt-6 md:col-span-2 col-span-3">
            <JourneyButton redirectUrl={'https://app.immigo.io/pricing'} title="SAN FRANCISCO" description={t('lookForAJob')} imageUrl="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fsf.jpg?alt=media&token=edc5f0c5-dca5-4bc7-8d3b-f2828a78e65b" />
            <JourneyButton redirectUrl={'https://app.immigo.io/pricing'} title="LOS ANGELES" description={t('goOnADate')} imageUrl="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fla.webp?alt=media&token=c1f4da9c-fd32-46d8-8280-2ca2921ec4b1" />
            <JourneyButton redirectUrl={'https://app.immigo.io/pricing'} title="NEW YORK" description={t('orderACoffee')} imageUrl="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fnyc.jpg?alt=media&token=d8cdf6fe-338c-4ce5-abb4-78699e101026" />
          </div>
          </div>

        </main>

        {/* Footer Section */}
        <footer className="bg-black py-4">
          <div className="container mx-auto text-center">
            <p className="text-pink-500">&copy; 2024 Immigo. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

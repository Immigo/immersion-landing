import React from "react";
import Head from "next/head";
import { JourneyButton } from "@/components/buttons/journeyButton";
import { NavBarSimple } from "@/components/navbar-simple";
import { useTranslations } from "next-intl";
import { JourneyAnalytics } from "@/components/analytics/journey/journeyAnalytics";

const Home: React.FC = () => {
  const t = useTranslations('Journey');

  return (
    <>
      <JourneyAnalytics />
      <NavBarSimple />
      <Head>
        <title>Immigo: Choose Your Journey</title>
        <meta name="description" content="Level up your English skills with Immigo's 8-bit adventure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen text-white font-mono pt-24 md:mt-0 bg-black">
        {/* Main Content */}
        <main className="text-center">
          <div className="grid grid-cols-3 md:grid-rows-1 grid-rows-6">
            <div className="relative text-white md:text-6xl text-3xl h-full flex md:px-24 md:text-left md:col-span-1 col-span-3 col-span-3 row-span-1 flex justify-center items-center flex-col">
              <span className="z-10">{t('chooseYourJourney')}</span>
              <video 
                style={{filter: 'brightness(40%)'}} webkit-playsinline='true' playsInline autoPlay 
                className='absolute w-full object-none min-w-full min-h-full max-w-none' muted loop src="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fimmersion-cities.mov?alt=media&token=a42fb4c7-30b0-4fd1-a50c-cc768e12a18b" />
            </div>
            <div className="grid grid-cols-1 gap-8 md:mt-12 mt-6 md:col-span-2 col-span-3 row-span-5">
              <JourneyButton redirectUrl={'https://app.immigo.io/pricing'} title="SAN FRANCISCO" description={t('lookForAJob')} imageUrl="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fsf.jpg?alt=media&token=edc5f0c5-dca5-4bc7-8d3b-f2828a78e65b" />
              <JourneyButton redirectUrl={'https://app.immigo.io/pricing'} title="LOS ANGELES" description={t('goOnADate')} imageUrl="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fla.webp?alt=media&token=c1f4da9c-fd32-46d8-8280-2ca2921ec4b1" />
              <JourneyButton redirectUrl={'https://app.immigo.io/pricing'} title="NEW YORK" description={t('orderACoffee')} imageUrl="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fnyc.jpg?alt=media&token=d8cdf6fe-338c-4ce5-abb4-78699e101026" />
            </div>
          </div>

        </main>

        {/* Footer Section */}
        <footer className="bg-black py-4">
          <div className="container mx-auto text-center">
            <p className="text-white">&copy; 2024 Immigo. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

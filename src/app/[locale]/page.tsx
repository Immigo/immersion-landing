/* eslint no-unused-vars: 0 */

import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { HeroButtons } from '@/components/hero-buttons'
import { LogoCloud } from '@/components/logo-cloud'
import { NavBarSimple } from '@/components/navbar-simple'
import { Testimonials } from '@/components/testimonials_io'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { HomeAnalytics } from '../../components/analytics/home/homeAnalytics'
import { useTranslations } from 'next-intl'
import { ParamSaver } from '@/components/script/param-saver'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  const t = useTranslations('Home');

  return (
    <div className="relative bg-black">      {/* // <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" /> */}
      <Container className="relative">

      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:py-48 flex flex-col justify-center items-center text-center text-white">
      <video style={{filter: 'brightness(40%)'}} webkit-playsinline='true' playsInline autoPlay className='absolute h-full md:w-screen object-cover md:object-center object-left-bottom object-cover ' muted loop src="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fimmersion-cities.mov?alt=media&token=a42fb4c7-30b0-4fd1-a50c-cc768e12a18b" />
      <div className="relative border-4 py-28 md:px-64 px-6">
        <img className='w-64 mx-auto' src='https://cdn.prod.website-files.com/644c0ecc4a055c564b922d0b/645529068ac0540fd0b83c49_Immigo%20White%20Logo.svg' />
        <div className='md:text-5xl text-5xl mt-12 font-bold'>
          {t('learnEnglishByLiving')}
        </div>
        <Subheading as='h6' className='mt-12'>
          {t('startYourJourney')}
        </Subheading>
        <div className="flex space-x-4 justify-center mt-12">
          <HeroButtons mainButtonText={t('start')} />
        </div>
      </div>
      </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const t = useTranslations('Home'); 

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          {t('newWayOfLearningEnglish')}
        </Heading>
        <img 
        className="mt-12 md:mt-16 h-[12rem] sm:h-auto sm:w-[82rem] object-contain rounded-md"
          src={t('competitiveImg')} 
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  const t = useTranslations('Home');

  return (
    <Container>
      <Subheading>{t('process')}</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        {t('howImmigoWorks')}
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title={t('howImmigoWorks')}
          description={t('pickASession')}
          graphic={
            <div className="h-80 md:w-auto bg-[url('https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/67356422e4922c58f5ca5b0a_Screen%20Shot%202024-11-13%20at%206.35.06%20PM-p-500.png')] bg-[size:412px_290px] md:bg-[left_100px_top_10px] bg-[left_0px_top_10px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title={t('showUp')}
          description={t('ourClassesAreLive')}
          graphic={
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6735642242140efe2cb6fc08_Screen%20Shot%202024-11-13%20at%206.41.32%20PM-p-500.png')] bg-[size:500px_227px] md:bg-[left_60px_top_60px] bg-[left_0px_top_60px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title={t('firstPartSession')}
          description={t('first15Minutes')}
          graphic={
            <video className='absolute h-80 md:left-14 left-4' webkit-playsinline='true' playsInline muted loop autoPlay src='https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce6130d_In-class-transcode.mp4'  />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title={t('secondPartSession')}
          description={t('theRest35Minutes')}
          graphic={
            <video className='absolute h-80 ' webkit-playsinline='true' playsInline muted loop autoPlay src='https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/673564a0667e1e064f33bedb_webdemo-chat-transcode.mp4'  />
          }
          fade={['bottom']}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title={t('checkYourFeedback')}
          description={t('afterTheSession')}
          graphic={
            <video className='absolute h-80 left-16' webkit-playsinline='true' playsInline muted loop autoPlay src='https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce6130c_Post-class_vF-transcode.mp4'  />
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="overflow-hidden bg-black">
      <ParamSaver />
      <HomeAnalytics />
      <NavBarSimple />
      <Hero />
      <main className='bg-black'>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-black from-50% to-black py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <Testimonials subText={t('whatEveryoneIsSaying')} mainText={t('trustedByProfessionals')} />
      </main>
    </div>
  )
}

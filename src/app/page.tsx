import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { MainButton } from '@/components/buttons/mainButton'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { HeroButtons } from '@/components/hero-buttons'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { NavBarSimple } from '@/components/navbar_simple'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials_io'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative pt-8">      {/* // <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" /> */}
      <Container className="relative">

      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:py-48 flex flex-col justify-center items-center text-center text-white">
      <video autoPlay className='absolute h-full md:w-screen object-cover md:object-center object-left-bottom object-cover ' muted loop src="https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion.mov?alt=media&token=cfa249ac-154e-4d22-9176-87f2a92035dc" />
      <div className="relative border-4 rounded-xl border-green-500 py-28 md:px-64 px-6">
        <img className='w-64 mx-auto' src='https://cdn.prod.website-files.com/644c0ecc4a055c564b922d0b/645529068ac0540fd0b83c49_Immigo%20White%20Logo.svg' />
        <div className='md:text-2xl text-5xl mt-12 font-press-start-2p'>
          Learn English by Living
        </div>
        <Subheading as='h6' className='mt-12'>
          Start your journey in the US virtually today.
        </Subheading>
        <div className="flex space-x-4 justify-center mt-12">
          <HeroButtons />
        </div>
      </div>
      </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Immigo is the new way of learning English through immersion.
        </Heading>
        <img 
        className="mt-12 md:mt-16 h-[12rem] sm:h-auto sm:w-[82rem] object-contain rounded-md"
          src='https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/website_photos%2Fimmersion%2Fcompetitive-bw.png?alt=media&token=ab0de61f-24e0-4291-b3f9-3c6184ec0b99' 
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Process</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        How Immigo works
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Book a session"
          description="Pick a session that fits what you are looking for."
          graphic={
            <div className="h-80 bg-[url('https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/67356422e4922c58f5ca5b0a_Screen%20Shot%202024-11-13%20at%206.35.06%20PM-p-500.png')] bg-[size:412px_290px] bg-[left_100px_top_10px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Show up"
          description="Our classes are live, around 5 to 15 people, 50 minutes long. Our sessions are designed to simulate real life situations that happen in English speaking countrieslike the United States and Canada."
          graphic={
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6735642242140efe2cb6fc08_Screen%20Shot%202024-11-13%20at%206.41.32%20PM-p-500.png')] bg-[size:500px_227px] bg-[left_60px_top_60px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="First part of the session: Lesson"
          description="First 15 minutes, an experienced native speaker coach will give you a lesson, comprised of different expressions that you will practiceusing in the discussion."
          graphic={
            <video className='absolute h-80 left-14' muted loop autoPlay src='https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce6130d_In-class-transcode.mp4'  />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Second part of the session: Immersion"
          description="The rest of 35 minutes are dedicated to you practicing what you just learned with 2 to 3 other people. These are different scenarios and discussion questions based on real life situations."
          graphic={
            <video className='absolute h-80 ' muted loop autoPlay src='https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/673564a0667e1e064f33bedb_webdemo-chat-transcode.mp4'  />
          }
          fade={['bottom']}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Check your feedback"
          description="After the class, you will get a feedback report on what you can do differently in your next class!"
          graphic={
            <video className='absolute h-80 left-16' muted loop autoPlay src='https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce6130c_Post-class_vF-transcode.mp4'  />
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <NavBarSimple />
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-black from-50% to-black py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        {/* <DarkBentoSection /> */}
        <Testimonials />
      </main>
    </div>
  )
}

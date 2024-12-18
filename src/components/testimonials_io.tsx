'use client'
/* eslint no-sync-scripts: 0, no-unused-vars: 0 */

import { clsx } from 'clsx'
import { useRef } from 'react'
import { Container } from './container'
import { Heading, Subheading } from './text'

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null)


  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2">
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
      <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
    <iframe id='testimonialto-carousel-immigo-tag-all-light' src="https://embed-v2.testimonial.to/carousel/all/immigo?theme=light&autoplay=off&showmore=off&one-row=on&same-height=off&tag=all&arrowColor=9BA9B4&column-scale=0" scrolling="no" width="100%"></iframe>
    <script type="text/javascript" dangerouslySetInnerHTML={{__html : `iFrameResize({log: false, checkOrigin: false}, '#testimonialto-carousel-immigo-tag-all-light');`}}></script>      {/* <Footer /> */}

        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
    </div>
  )
}

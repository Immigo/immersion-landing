'use client'
/* eslint no-unused-vars: 0 */

import { clsx } from 'clsx'
import { useRef } from 'react'
import { Container } from './container'
import { Heading, Subheading } from './text'
import IframeResizer from '@iframe-resizer/react'


export function Testimonials(props : {
  subText : string,
  mainText : string
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const {subText, mainText} = props;


  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div>
          <Subheading>{subText}</Subheading>
          <Heading as="h3" className="mt-2">
            {mainText}
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
        <IframeResizer 
          license='xxx'
          src='https://embed-v2.testimonial.to/carousel/all/immigo?theme=light&autoplay=off&showmore=off&one-row=on&same-height=off&tag=all&arrowColor=9BA9B4&column-scale=0' 
          style={{ width: '100%', height: '100vh' }}
        />
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
    </div>
  )
}

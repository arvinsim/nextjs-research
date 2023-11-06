import React from 'react'
import styled, { keyframes } from 'styled-components'

export const StyledBaseSticker = styled.div`
  color: #ffffff;
  background: #8044ff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 15px;

  border-radius: 30px;
  border: none;
  padding: 10px 15px;
`

const ANIMATION_DELAY = '1s' // in seconds
const ANIMATION_DURATION = '0.5s' // in seconds

const wiggle = keyframes`
  50% {
    transform: rotate(-2.5deg);
  }
  90% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
    background: #088986;
  } 
`

const fadeInText = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    content: url('/public/check.svg') / 'check';
  }
`

const StyledWatchlistSticker = styled(StyledBaseSticker)`
  .icon {
    width: 29px;
    height: 28px;
  }

  .icon:before {
    content: url('/public/plus.svg') / 'plus';
    animation ${fadeInText} ${ANIMATION_DURATION} ease-out ${ANIMATION_DELAY} forwards;
  }

  transition: transform 0.2s;
  animation: ${wiggle} ${ANIMATION_DURATION} ease-in ${ANIMATION_DELAY} forwards; /* "forwards" ensures it stays at the final state */
`

export function Sticker(props: Record<string, unknown>): JSX.Element {
    return (
        <StyledWatchlistSticker {...props}>
            <div>Test</div>
            <div className={'icon'} />
            {/* This image is for preloading the svg image */}
            <img src='/static/svg-icons/check.svg' style={{ display: 'none' }} alt={'check'} />
        </StyledWatchlistSticker>
    )
}
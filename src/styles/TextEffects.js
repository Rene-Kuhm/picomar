import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const WaveText = styled(Typography)`
  font-family: 'Poppins', sans-serif;
  @keyframes wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes shine {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 300% 0;
    }
  }

  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  display: inline-block;
  text-align: center;

  &::before {
    content: 'PICOMAR';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.85) 50%,
      rgba(255, 255, 255, 0) 70%,
      transparent 100%
    );
    background-size: 300% 100%;
    animation: shine 3s infinite linear;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: 2;
  }

  background: linear-gradient(
    45deg,
    #00bfff,
    #ffffff,
    #87ceeb,
    #ffffff,
    #00bfff
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: wave 8s linear infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;

  &::after {
    content: 'PICOMAR';
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      transparent 40%,
      rgba(135, 206, 235, 0.3) 45%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(135, 206, 235, 0.3) 55%,
      transparent 60%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: wave 4s infinite linear;
    transform: translateZ(0);
  }

  @media (max-width: 768px) {
    letter-spacing: 0.05em;
    &::before,
    &::after {
      font-size: clamp(2.5rem, 8vw, 4.5rem);
    }
  }
`

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

  font-size: 4.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(
    45deg,
    #003876,
    #0056b3,
    #e31e24,
    #ffffff,
    #003876
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: wave 8s linear infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;

  &::after {
    content: 'PICOMAR';
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      transparent 40%,
      rgba(255, 255, 255, 0.3) 45%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.3) 55%,
      transparent 60%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: wave 4s infinite linear;
    transform: translateZ(0);
  }
`

import React from "react";
import { ReactComponent as PeleziLogo } from "../Assets/Pelezi.svg";

interface PreProps {
  load: boolean;
  alwaysVisible?: boolean;
}

const Pre: React.FC<PreProps> = ({ load, alwaysVisible = false }) => {
  return (
    <div
      className={`fixed inset-0 z-[999999] transition-opacity duration-300 ${
        alwaysVisible || load
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="pelezi-loader min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b132b]">
        <div className="stage">
          <PeleziLogo className="logo-svg" />
        </div>

        <p className="label">Loading</p>
        <div className="dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <style>{`
          .pelezi-loader::before {
            content: "";
            position: fixed;
            inset: 0;
            background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244, 208, 111, 0.07) 0%, transparent 70%);
            pointer-events: none;
            animation: glowPulse 3.5s ease-in-out infinite;
          }

          .pelezi-loader .stage {
            width: min(72vw, 420px);
            aspect-ratio: 1;
            position: relative;
            z-index: 1;
          }

          .pelezi-loader .logo-svg {
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          .pelezi-loader #Layer_3 {
            display: none;
          }

          .pelezi-loader #outer-ring {
            transform-origin: 1066.72px 1053.96px;
            transform: rotate(-45deg);
          }

          .pelezi-loader #outer-ring circle {
            stroke-dasharray: 5201;
            stroke-dashoffset: 5201;
            animation: drawOuterRing 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0s both;
          }

          .pelezi-loader #z-circle {
            transform-origin: 342.45px 641.36px;
            transform: rotate(180deg);
          }

          .pelezi-loader #z-circle circle {
            stroke-dasharray: 2015;
            stroke-dashoffset: 2015;
            animation: drawCircle2015 1s cubic-bezier(0.4, 0, 0.2, 1) 0.25s both;
          }

          .pelezi-loader #l-circle {
            transform-origin: 1282px 647.42px;
            transform: rotate(120deg);
          }

          .pelezi-loader #l-circle circle {
            stroke-dasharray: 2061;
            stroke-dashoffset: 2061;
            animation: drawCircle2061 1s cubic-bezier(0.4, 0, 0.2, 1) 0.25s both;
          }

          .pelezi-loader #p-circle {
            transform-origin: 1068.36px 1470.13px;
            transform: rotate(90deg);
          }

          .pelezi-loader #p-circle circle {
            stroke-dasharray: 2211;
            stroke-dashoffset: 2211;
            animation: drawCircle2211 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
          }

          .pelezi-loader #e-two circle,
          .pelezi-loader #i-circle circle,
          .pelezi-loader #e circle {
            opacity: 0;
          }

          .pelezi-loader #e-two circle {
            transform-origin: 1282.67px 646.69px;
            animation: fadeIn 0.6s ease 0.85s both, pulse 3s ease-in-out 1.45s infinite;
          }

          .pelezi-loader #i-circle circle {
            transform-origin: 342.1px 635.17px;
            animation: fadeIn 0.6s ease 0.95s both, pulse 3s ease-in-out 1.55s infinite;
          }

          .pelezi-loader #e circle {
            transform-origin: 1072.47px 1471.58px;
            animation: fadeIn 0.6s ease 1.05s both, pulse 3s ease-in-out 1.65s infinite;
          }

          .pelezi-loader #i-line {
            stroke-dasharray: 862;
            stroke-dashoffset: 862;
            animation: drawILine 1.8s cubic-bezier(0.4, 0, 0.2, 1) 1.15s both;
          }

          .pelezi-loader #p-line {
            stroke-dasharray: 1388;
            stroke-dashoffset: 1388;
            animation: drawPLine 2.2s cubic-bezier(0.4, 0, 0.2, 1) 1.15s both;
          }

          .pelezi-loader #i-line-dot-one,
          .pelezi-loader #i-line-dot-two,
          .pelezi-loader #i-line-dot-three {
            stroke-dasharray: 40;
            stroke-dashoffset: 40;
            opacity: 0;
          }

          .pelezi-loader #i-line-dot-one {
            animation: drawTrail 0.08s linear 2.45s both, trailPulse 1.8s ease-in-out 2.53s infinite;
          }

          .pelezi-loader #i-line-dot-two {
            animation: drawTrail 0.08s linear 2.53s both, trailPulse 1.8s ease-in-out 2.61s infinite;
          }

          .pelezi-loader #i-line-dot-three {
            animation: drawTrail 0.08s linear 2.61s both, trailPulse 1.8s ease-in-out 2.69s infinite;
          }

          .pelezi-loader #z-dot-one,
          .pelezi-loader #z-dot-two,
          .pelezi-loader #z-dot-three,
          .pelezi-loader #l-dot-one,
          .pelezi-loader #l-dot-two,
          .pelezi-loader #l-dot-three {
            opacity: 0;
          }

          .pelezi-loader #z-dot-one {
            transform-origin: 681.73px 444.11px;
            animation: twinkleS 2s ease-in-out 2.4s both infinite;
          }

          .pelezi-loader #z-dot-two {
            transform-origin: 724.57px 522.09px;
            animation: twinkleM 2s ease-in-out 2.65s both infinite;
          }

          .pelezi-loader #z-dot-three {
            transform-origin: 747.47px 617.24px;
            animation: twinkleL 2s ease-in-out 2.9s both infinite;
          }

          .pelezi-loader #l-dot-one {
            transform-origin: 1614.88px 861.01px;
            animation: twinkleS 2s ease-in-out 2.5s both infinite;
          }

          .pelezi-loader #l-dot-two {
            transform-origin: 1563.29px 937.55px;
            animation: twinkleM 2s ease-in-out 2.75s both infinite;
          }

          .pelezi-loader #l-dot-three {
            transform-origin: 1486.4px 1003.86px;
            animation: twinkleL 2s ease-in-out 3s both infinite;
          }

          .pelezi-loader .label {
            margin-top: 2.4rem;
            letter-spacing: 0.38em;
            font-size: 0.7rem;
            color: #f4d06f;
            text-transform: uppercase;
            opacity: 0;
            z-index: 1;
            animation: labelIn 0.8s ease 0.8s forwards;
          }

          .pelezi-loader .dots {
            display: flex;
            gap: 6px;
            margin-top: 1rem;
            opacity: 0;
            z-index: 1;
            animation: labelIn 0.8s ease 1s forwards;
          }

          .pelezi-loader .dots span {
            width: 4px;
            height: 4px;
            border-radius: 999px;
            background: #f4d06f;
            animation: dotBounce 1.2s ease-in-out infinite;
          }

          .pelezi-loader .dots span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .pelezi-loader .dots span:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes glowPulse {
            0%,
            100% {
              opacity: 0.5;
            }

            50% {
              opacity: 1;
            }
          }

          @keyframes drawOuterRing {
            from {
              stroke-dashoffset: 5201;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawCircle2015 {
            from {
              stroke-dashoffset: 2015;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawCircle2061 {
            from {
              stroke-dashoffset: 2061;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawCircle2211 {
            from {
              stroke-dashoffset: 2211;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.65;
              transform: scale(0.97);
            }

            50% {
              opacity: 1;
              transform: scale(1.04);
            }
          }

          @keyframes drawILine {
            from {
              stroke-dashoffset: 862;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawPLine {
            from {
              stroke-dashoffset: 1388;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawTrail {
            from {
              opacity: 1;
              stroke-dashoffset: 40;
            }

            to {
              opacity: 1;
              stroke-dashoffset: 0;
            }
          }

          @keyframes trailPulse {
            0%,
            100% {
              opacity: 0.35;
              stroke-dashoffset: 0;
            }

            50% {
              opacity: 1;
              stroke-dashoffset: 0;
            }
          }

          @keyframes twinkleS {
            0% {
              opacity: 0;
              transform: scale(0.7);
            }

            40%,
            60% {
              opacity: 1;
              transform: scale(1.15);
            }

            100% {
              opacity: 0.2;
              transform: scale(0.85);
            }
          }

          @keyframes twinkleM {
            0% {
              opacity: 0;
              transform: scale(0.7);
            }

            40%,
            60% {
              opacity: 1;
              transform: scale(1.25);
            }

            100% {
              opacity: 0.2;
              transform: scale(0.88);
            }
          }

          @keyframes twinkleL {
            0% {
              opacity: 0;
              transform: scale(0.7);
            }

            40%,
            60% {
              opacity: 1;
              transform: scale(1.35);
            }

            100% {
              opacity: 0.2;
              transform: scale(0.9);
            }
          }

          @keyframes labelIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }

            to {
              opacity: 0.7;
              transform: translateY(0);
            }
          }

          @keyframes dotBounce {
            0%,
            100% {
              opacity: 0.2;
              transform: scaleY(0.7);
            }

            50% {
              opacity: 1;
              transform: scaleY(1.3);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Pre;

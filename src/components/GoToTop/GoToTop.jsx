import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import './GoToTop.css'
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 550;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div  className="Gototop">
    <ThemeProvider
      theme={{
        colors: {
          btn: "#093B54", // Sample color value
          shadow: "0px 1px 8px 1px white", // Sample shadow value
        },
        media: {
          mobile: "768px", // Sample mobile breakpoint
        },
      }}
    >
      <Wrapper>
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn--icon" />
          </div>
        )}
      </Wrapper>
    </ThemeProvider>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.6srem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 4rem;
    right: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
        padding:1px
      animation: gototop 1.5s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 80%;
    }
  }
`;

export default GoToTop;

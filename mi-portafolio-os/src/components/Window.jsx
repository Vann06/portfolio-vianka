import { Rnd } from "react-rnd";
import { useEffect, useMemo, useRef, useState } from "react";
import closeIcon from "../assets/icon_close_white.png";
import useSound from "use-sound";
import { useSoundContext } from "../context/SoundContext";

const MOBILE_BREAKPOINT = 768;
const MOBILE_SIDE_MARGIN = 10;
const MOBILE_TOP_SAFE_AREA = 96;
const MOBILE_BOTTOM_MARGIN = 16;

function getViewport() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

function getWindowLayout(viewport, isMobile, defaultSize) {
  const sideMargin = isMobile ? MOBILE_SIDE_MARGIN : 24;
  const topSafeArea = isMobile ? MOBILE_TOP_SAFE_AREA : 80;
  const bottomMargin = isMobile ? MOBILE_BOTTOM_MARGIN : 24;
  const availableWidth = Math.max(280, viewport.width - sideMargin * 2);
  const availableHeight = Math.max(
    280,
    viewport.height - topSafeArea - bottomMargin
  );
  const width = Math.min(defaultSize.width, availableWidth);
  const height = Math.min(defaultSize.height, availableHeight, 700);

  return {
    x: isMobile
      ? sideMargin
      : Math.max(sideMargin, (viewport.width - width) / 2),
    y: isMobile
      ? Math.max(topSafeArea, viewport.height - height - bottomMargin)
      : Math.max(24, Math.min(80, viewport.height - height - bottomMargin)),
    width,
    height
  };
}

function Window({
  title,
  children,
  onClose,
  zIndex = 10,
  onFocus,
  defaultSize = { width: 550, height: 500 }
}) {
  const [isDark, setIsDark] = useState(false);
  const [viewport, setViewport] = useState(getViewport);
  const rndRef = useRef(null);
  const previousMode = useRef(viewport.width < MOBILE_BREAKPOINT);
  const [playClose] = useSound(
    "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748740505/close_uufjve.mp3",
    { volume: 1 }
  );
  const { isMuted } = useSoundContext();
  const isMobile = viewport.width < MOBILE_BREAKPOINT;
  const defaultWidth = defaultSize.width;
  const defaultHeight = defaultSize.height;
  const layout = useMemo(
    () =>
      getWindowLayout(viewport, isMobile, {
        width: defaultWidth,
        height: defaultHeight
      }),
    [defaultHeight, defaultWidth, isMobile, viewport]
  );

  useEffect(() => {
    let resizeFrame;

    const handleResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const nextViewport = getViewport();

        setViewport((current) => {
          const crossedBreakpoint =
            (current.width < MOBILE_BREAKPOINT) !==
            (nextViewport.width < MOBILE_BREAKPOINT);

          if (!crossedBreakpoint && current.width === nextViewport.width) {
            return current;
          }

          return nextViewport;
        });
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const modeChanged = previousMode.current !== isMobile;

    if (rndRef.current && (isMobile || modeChanged)) {
      rndRef.current.updateSize({
        width: layout.width,
        height: layout.height
      });
      rndRef.current.updatePosition({ x: layout.x, y: layout.y });
    }

    previousMode.current = isMobile;
  }, [isMobile, layout]);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    if (!isMuted) playClose();
    onClose?.();
  };

  return (
    <Rnd
      ref={rndRef}
      className="window-rnd"
      default={layout}
      minWidth={isMobile ? Math.min(280, layout.width) : 300}
      minHeight={isMobile ? Math.min(280, layout.height) : 300}
      maxWidth={Math.max(280, viewport.width - (isMobile ? 20 : 24))}
      maxHeight={Math.max(280, viewport.height - (isMobile ? 112 : 24))}
      bounds="window"
      dragHandleClassName="window-header"
      cancel=".window-close"
      enableResizing={!isMobile}
      style={{ zIndex }}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
    >
      <div
        className={`${isMobile ? "mobile-window" : "window-container"} ${
          isDark ? "dark" : ""
        }`}
      >
        <div className="window-header">
          <span className="window-title">{title}</span>

          {onClose && (
            <button
              type="button"
              className="window-close"
              onClick={handleClose}
              aria-label={`Close ${title}`}
            >
              {isMobile ? (
                <img src={closeIcon} alt="" width="22" draggable={false} />
              ) : (
                "[x]"
              )}
            </button>
          )}
        </div>

        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
}

export default Window;

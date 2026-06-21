import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import logoAnimationDark from "../../assets/logo/yoan/motion_dark.json";
import logoAnimationLight from "../../assets/logo/yoan/motion_light.json";
import logoYCDark from "../../assets/logo/yoan/yc_without_slash_dark.svg";
import logoYCLight from "../../assets/logo/yoan/yc_without_slash_light.svg";
import logoYoanDark from "../../assets/logo/yoan/yoan_dark.svg";
import logoYoanLight from "../../assets/logo/yoan/yoan_light.svg";
import switchLeft from "../../assets/switch-theme/left.svg";
import switchLeftPressed from "../../assets/switch-theme/left_pressed.svg";
import switchRight from "../../assets/switch-theme/right.svg";
import switchRightPressed from "../../assets/switch-theme/right_pressed.svg";
import Nav from "./Nav";

type LogoState = "yc" | "lottie" | "yoan";

export default function Header() {
  const [logoState, setLogoState] = useState<LogoState>("yc");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    document.documentElement.classList.contains("dark"),
  );
  const [isPressed, setIsPressed] = useState(false);
  const lottieContainer = useRef<HTMLDivElement>(null);

  const switchSrc = isDarkTheme
    ? isPressed
      ? switchRightPressed
      : switchRight
    : isPressed
      ? switchLeftPressed
      : switchLeft;

  const logoYCSrc = isDarkTheme ? logoYCDark : logoYCLight;
  const logoYoanSrc = isDarkTheme ? logoYoanDark : logoYoanLight;

  function handleThemeToggle() {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark", !isDarkTheme);
  }

  useEffect(() => {
    const timer = setTimeout(() => setLogoState("lottie"), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (logoState !== "lottie" || !lottieContainer.current) return;

    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: isDarkTheme ? logoAnimationDark : logoAnimationLight,
      rendererSettings: {
        preserveAspectRatio: "xMinYMid meet",
      },
    });

    anim.addEventListener("complete", () => setLogoState("yoan"));
    return () => anim.destroy();
  }, [logoState, isDarkTheme]);

  return (
    <header className="bg-light/50 dark:bg-dark/50 sticky top-0 z-50 flex items-center px-6 py-3 backdrop-blur-sm">
      <div className="flex-1">
        {logoState === "yc" && (
          <img src={logoYCSrc} alt="Logo YC" className="h-10" />
        )}
        {logoState === "lottie" && (
          <div ref={lottieContainer} className="h-10" />
        )}
        {logoState === "yoan" && (
          <img src={logoYoanSrc} alt="Logo Yoan" className="h-10" />
        )}
      </div>
      <Nav />
      <div className="flex flex-1 justify-end">
        <img
          src={switchSrc}
          alt="Switch theme"
          className="h-10 select-none hover:cursor-pointer"
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => {
            setIsPressed(false);
            handleThemeToggle();
          }}
          onMouseLeave={() => setIsPressed(false)}
          draggable={false}
        />
      </div>
    </header>
  );
}

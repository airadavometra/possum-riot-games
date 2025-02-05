import { motion } from "motion/react";
import s from "./App.module.css";
import { link } from "../../motion/link";
import { analytics } from "../../firebase";
import { logEvent } from "firebase/analytics";

function App() {
  return (
    <main className={s.main}>
      <h1 className={s.visuallyHidden}>Eyes that Hypnotise Game</h1>
      <img className={s.cat} src="/cat.png" aria-hidden />
      <div className={s.widthContainer}>
        <div className={s.content}>
          <div>
            <img
              className={s.gameLogo}
              src="/logo.png"
              alt="Eyes that hypnotise game logo"
            />
            <p className={s.description}>
              Eyes that Hypnotise is a cozy, hand-drawn puzzle <br /> where you
              arrange fluffy friends to fit the grid.
            </p>
          </div>
          <ul className={s.links}>
            <motion.li
              className={s.linkWrapper}
              variants={link}
              whileHover={link.hover}
            >
              <a
                className={s.link}
                href="https://store.steampowered.com/app/3344240?utm_source=website&utm_campaign=homePage"
                onClick={() => logEvent(analytics, "play_demo")}
              >
                Play Demo
              </a>
            </motion.li>
            <motion.li
              className={s.linkWrapper}
              variants={link}
              whileHover={link.hover}
            >
              <a
                className={s.link}
                href="https://store.steampowered.com/app/3156370?utm_source=website&utm_campaign=homePage"
                onClick={() => logEvent(analytics, "wishlist")}
              >
                Wishlist
              </a>
            </motion.li>
            <motion.li
              className={s.linkWrapper}
              variants={link}
              whileHover={link.hover}
            >
              <a
                className={s.link}
                href="https://drive.google.com/drive/folders/1kuFonhGGDQO38YaHTk6KciGWaPGgKUzL?usp=sharing"
                onClick={() => logEvent(analytics, "press_kit")}
              >
                Press Kit
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;

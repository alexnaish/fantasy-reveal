'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import styles from './reveal.module.css';

export default function Home() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={styles.main} data-active={started}>
      <video
        ref={videoRef}
        className={styles.smoke}
        src="https://static.videezy.com/system/resources/previews/000/013/098/original/Smoke_17_-_50s_-_4k_res.mp4"
        loop
        playsInline
        muted
        onTimeUpdate={(e) => {
          const opacity = (e.currentTarget.duration - e.currentTarget.currentTime < 3) ? '0' : '.6';
          e.currentTarget.style.opacity = opacity;
        }}
      ></video>
      <AnimatePresence mode="wait">
        {!started && (
          <motion.div
            key="start"
            className="grid place-content-center gap-y-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.6 } }}>
            <motion.h1 className="text-6xl font-bold bg-white/40 p-4 rounded-lg text-center">
              Begin your adventure
            </motion.h1>
            <button
              onClick={() => {
                setStarted(true)
                videoRef.current!.play();
              }}
              className="p-4 text-white bg-red-800 border-2 border-amber-400 rounded-lg transition hover:bg-red-900"
            >Create your world</button>
          </motion.div>
        )}
        {started && (
          <motion.div
            key="intro"
            className="grid place-content-center gap-y-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.6 } }}>
            <motion.h1 className="text-6xl font-bold bg-white/40 p-4 rounded-lg text-center">
              Your story begins...
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}

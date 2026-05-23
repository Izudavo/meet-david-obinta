"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const fullText = "David Obinta";

  useEffect(() => {
    // prevent repeat on same session
    const hasSeen = sessionStorage.getItem("splash_seen");

    if (hasSeen) {
      setShow(false);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("splash_seen", "true");
        }, 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.0 } }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              {text}
              <span className="animate-pulse">|</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-white/60 mt-4 tracking-widest uppercase"
            >
              Fullstack • DevOps • Cloud Engineer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
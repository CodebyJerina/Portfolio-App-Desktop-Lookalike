import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutIcon from './assets/about.svg';
import wallpaper from './assets/testWall.jpg'

function LoginScreen({ onLoginComplete }) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric' 
    })
}

return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center cursor-pointer z-50"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={onLoginComplete}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
      {/* Clock at top */}
      <div className="absolute top-16 flex flex-col items-center gap-1 z-10">
        <div className="text-white text-6xl font-light font-mono">
          {formatTime(time)}
        </div>
        <div className="text-gray-300 text-lg">
          {formatDate(time)}
        </div>
      </div>

      {/* Center — Avatar, name, subtitle */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.img
          src={AboutIcon}
          alt="Jerina"
          className="w-28 h-28 rounded-full border-2 border-white/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h1 className="text-white text-3xl font-semibold">Jerina</h1>
          <p className="text-gray-300 text-sm">Frontend Developer</p>
        </motion.div>
      </div>

      {/* Bottom — click hint */}
      <motion.div
        className="absolute bottom-16 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-gray-400 text-sm font-mono">Click anywhere to login</p>
        <motion.div
          className="w-8 h-0.5 bg-gray-400 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>

    </motion.div>
  )
}

export default LoginScreen


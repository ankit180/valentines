import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ValentinesPage() {
  const [message, setMessage] = useState("");
  const [noClicks, setNoClicks] = useState(0);

  const handleYes = () => {
    setMessage("Yayyy ❤️ I knew you’d say YES! Happy Valentine’s Day 💖");
  };

  const handleNo = () => {
    const responses = [
      "Are you sure? 🥺",
      "Think again… I’ll bring chocolates 🍫",
      "Last chance 😌",
      "No is not an option 😝",
      "You can only say YES 💘",
    ];

    setMessage(responses[noClicks % responses.length]);
    setNoClicks(noClicks + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-red-300 p-6">
      <Card className="w-full max-w-xl text-center shadow-2xl rounded-2xl bg-white/90 backdrop-blur">
        <CardContent className="p-10 space-y-8">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-rose-600"
          >
            Will You Be My Valentine? 💌
          </motion.h1>

          <motion.img
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
            alt="cute"
            className="mx-auto w-60 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />

          <div className="flex justify-center gap-6 pt-4">
            <Button
              onClick={handleYes}
              className="text-lg px-8 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600"
            >
              Yes ❤️
            </Button>

            <motion.div
              whileHover={{ x: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              <Button
                onClick={handleNo}
                variant="outline"
                className="text-lg px-8 py-3 rounded-2xl"
              >
                No 💔
              </Button>
            </motion.div>
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-semibold text-rose-600 pt-4"
            >
              {message}
            </motion.p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

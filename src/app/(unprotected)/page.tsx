"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import {
  Heart,
  TwoPeople,
  Comment,
  ActionsPlus,
  DeviceLaptop,
  WorldNet,
  Search,
  GridFeedCards,
} from "@/svg_components";

export default function LandingPage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const features = [
    {
      icon: TwoPeople,
      title: "Explore Communities",
      description:
        "Join vibrant communities for developers, gamers, crypto enthusiasts, news readers, and more. Find your tribe.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Comment,
      title: "Chat & Connect Instantly",
      description:
        "DM friends, join group chats, send voice notes, share files, and react with emojis in real-time.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: ActionsPlus,
      title: "Earn & Customize",
      description:
        "Get premium badges, unlock custom themes, tip creators, boost your posts, and personalize your profile.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: DeviceLaptop,
      title: "Responsive Everywhere",
      description:
        "Beautiful experience on desktop, tablet, and mobile with adaptive layouts and smooth animations.",
      color: "from-orange-500 to-amber-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-amber-200 dark:from-orange-800 dark:to-amber-800 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full blur-3xl opacity-20"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Cozy
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Your space to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                connect
              </span>
              <br />
              and feel at home online
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Where communities feel like home. Join developers, gamers, crypto
              traders, and news enthusiasts in a space designed for authentic
              connection and meaningful conversations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Link href="/register">
                <Button
                  size="large"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Join Cozy Now
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  mode="secondary"
                  size="large"
                  className="border-2 border-orange-300 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-4 text-lg font-semibold transition-all duration-200"
                >
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                stay connected
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built for communities, designed for connection. Experience social
              media the cozy way.
            </p>
          </motion.div>

          {/* Interactive Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = currentFeature === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer",
                      isActive
                        ? "bg-gradient-to-r from-white to-orange-50 dark:from-gray-700 dark:to-orange-900/20 border-orange-300 shadow-xl scale-105"
                        : "bg-white/80 dark:bg-gray-700/80 border-gray-200 dark:border-gray-600 hover:border-orange-200 hover:shadow-lg",
                    )}
                    onClick={() => setCurrentFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "p-3 rounded-xl bg-gradient-to-r",
                          feature.color,
                          isActive ? "shadow-lg scale-110" : "",
                        )}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature Preview */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  {/* Feature Preview Content */}
                  {currentFeature === 0 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white text-center">
                          <div className="text-lg">💻</div>
                          <div className="text-xs font-medium">Developers</div>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white text-center">
                          <div className="text-lg">🎮</div>
                          <div className="text-xs font-medium">Gamers</div>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white text-center">
                          <div className="text-lg">₿</div>
                          <div className="text-xs font-medium">Crypto</div>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white text-center">
                          <div className="text-lg">📰</div>
                          <div className="text-xs font-medium">News</div>
                        </div>
                      </div>
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Find your community
                      </div>
                    </div>
                  )}

                  {currentFeature === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 dark:text-green-300 font-medium">
                          Alex is typing...
                        </span>
                      </div>
                      <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                        Check out this new feature! 🎉 <br />
                        <div className="text-xs mt-1">🎵 voice-note.mp3</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
                        Love it! 😍🔥❤️
                      </div>
                    </div>
                  )}

                  {currentFeature === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-lg">
                          <span className="text-xl">🏆</span>
                          <span className="text-sm font-medium">
                            Premium Badge Unlocked!
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg">
                          <span className="text-xl">🎨</span>
                          <span className="text-sm font-medium">
                            Dark Neon Theme Available
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-lg">
                          <span className="text-xl">💰</span>
                          <span className="text-sm font-medium">
                            Received 5 tips today
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature === 3 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <DeviceLaptop className="w-6 h-6 mx-auto mb-1" />
                          <div className="text-xs">Desktop</div>
                        </div>
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <div className="w-6 h-6 mx-auto mb-1 bg-gray-400 rounded"></div>
                          <div className="text-xs">Tablet</div>
                        </div>
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <div className="w-4 h-6 mx-auto mb-1 bg-gray-400 rounded"></div>
                          <div className="text-xs">Mobile</div>
                        </div>
                      </div>
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Seamless across all devices
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 text-center text-white"
          >
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-orange-100">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-orange-100">Messages Daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-orange-100">Posts Shared</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Monetization Features */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Earn, Customize, and{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Stand Out
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Express yourself with premium features, support creators you love,
              and make your profile uniquely yours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Premium Badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Premium Badges
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get verified with a golden badge. Stand out in communities and
                show your commitment to the platform.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                  ✨ Verified
                </span>
                <span className="text-sm text-gray-500">Starting at $2.99</span>
              </div>
            </motion.div>

            {/* Custom Themes */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Custom Themes
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Unlock exclusive themes, animated profile frames, and custom
                emojis to personalize your experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                  Dark Neon
                </span>
                <span className="text-xs bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-2 py-1 rounded">
                  Gamer Pro
                </span>
                <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Minimal
                </span>
              </div>
            </motion.div>

            {/* Tipping System */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Tip Creators
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Support helpful posts and amazing content creators with our
                lightweight tipping system using Cozy coins.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  🪙 Cozy Coins
                </span>
                <span className="text-sm text-gray-500">Earn & Give</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Ready to make Cozy your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                digital home?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of people building meaningful connections in a
              space designed for authentic community.
            </p>
            <Link href="/register">
              <Button
                size="large"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Join Cozy Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

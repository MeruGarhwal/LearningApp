"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { markTopicCompleted } from "@/lib/progress";

const WATCH_THRESHOLD = 0.8; // 80% to mark completed

interface VideoPlayerProps {
  src?: string;
  title?: string;
  topicId?: string;
  className?: string;
}

export default function VideoPlayer({
  src,
  title = "Video",
  topicId,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastTimeRef = useRef(0);
  const sessionTimeRef = useRef(0);
  const hasMarkedCompleteRef = useRef(false);
  const [watchProgress, setWatchProgress] = useState(0);

  const { user } = useAuth();

  const saveProgress = useCallback(async () => {
    if (!user || !topicId || hasMarkedCompleteRef.current) return;
    hasMarkedCompleteRef.current = true;
    try {
      await markTopicCompleted(user.uid, topicId, Math.round(sessionTimeRef.current));
    } catch {
      hasMarkedCompleteRef.current = false;
    }
  }, [user, topicId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const onTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (duration <= 0) return;

      const progress = currentTime / duration;
      setWatchProgress(Math.min(1, progress));

      if (!video.paused && video.readyState >= 2) {
        const delta = currentTime - lastTimeRef.current;
        if (delta > 0 && delta < 2) sessionTimeRef.current += delta;
        lastTimeRef.current = currentTime;

        if (progress >= WATCH_THRESHOLD) saveProgress();
      }
    };

    const onSeeked = () => {
      lastTimeRef.current = video.currentTime;
    };

    const onPlay = () => {
      lastTimeRef.current = video.currentTime;
    };

    const onPause = () => {
      lastTimeRef.current = video.currentTime;
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [src, saveProgress]);

  if (!src) {
    return (
      <div
        className={`overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 ${className}`}
      >
        <div className="flex aspect-video flex-col items-center justify-center text-slate-500">
          <span className="text-5xl">▶</span>
          <span className="mt-2 text-sm font-medium">{title}</span>
          <span className="mt-1 text-xs text-slate-400">Video placeholder</span>
        </div>
        <p className="border-t border-slate-200/80 px-4 py-2.5 text-sm text-slate-600">
          {title}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200/80 bg-black ${className}`}
    >
      <div className="relative w-full aspect-video">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
        />
        {topicId && user && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
            <div
              className="h-full bg-brand-500 transition-all duration-300"
              style={{ width: `${watchProgress * 100}%` }}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-slate-200/80 bg-white px-4 py-2.5">
        <p className="text-sm text-slate-600">{title}</p>
        {topicId && user && watchProgress >= WATCH_THRESHOLD && (
          <span className="text-xs font-semibold text-emerald-600">Completed</span>
        )}
      </div>
    </div>
  );
}

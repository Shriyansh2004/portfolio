"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, FileText, ExternalLink } from "lucide-react";
import { playClick } from "@/lib/audio";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_URL = "/resume.pdf";

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => {
    playClick();
    setIsVisible(false);
    setIsLoading(true);
    window.setTimeout(onClose, 180);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      setIsVisible(false);
      return;
    }

    setIsLoading(true);
    const frame = requestAnimationFrame(() => setIsVisible(true));

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
      className={`fixed inset-0 z-[6000] flex items-stretch justify-center p-0 sm:p-3 md:p-5 transition-opacity duration-200 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-[#0a0a0a]/94" aria-hidden="true" />

      {/* Full-height panel — explicit h-[100dvh] so flex children can grow */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex flex-col w-full max-w-7xl h-[100dvh] sm:h-[96dvh] transition-transform duration-200 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-2"
        }`}
      >
        {/* Compact wooden sign — single row */}
        <div className="shrink-0 flex justify-center pb-0">
          <div
            className="px-4 py-1.5 sm:px-6 sm:py-2 bg-[#7a5c3a] border-[4px] border-t-[#a87c54] border-l-[#a87c54] border-b-[#473521] border-r-[#473521] shadow-lg"
          >
            <h2
              className="text-sm sm:text-lg font-extrabold font-vt323 text-[#ffff55] uppercase flex items-center gap-2"
              style={{ textShadow: "2px 2px 0px #3c2d1b" }}
            >
              <FileText size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
              [ RESUME SCROLL ]
            </h2>
          </div>
        </div>

        {/* Main panel fills all remaining height */}
        <div className="flex flex-col flex-1 min-h-0 mt-1 bg-[#2e2e2e] border-[4px] sm:border-[6px] border-t-[#5c5c5c] border-l-[#5c5c5c] border-b-[#1c1c1c] border-r-[#1c1c1c] shadow-2xl [image-rendering:pixelated]">
          {/* Toolbar */}
          <div className="shrink-0 flex items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 border-b-[4px] border-[#1c1c1c] bg-[#1e1e1e]">
            <span className="font-vt323 text-xs sm:text-sm text-[#ffff55] uppercase truncate min-w-0">
              ANUBHAB SAHOO — RESUME
            </span>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 font-vt323 text-xs sm:text-sm uppercase bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] text-white shadow-[2px_2px_0px_#000] hover:bg-[#9c9c9c] active:translate-y-px active:shadow-none"
              >
                <span className="hidden sm:inline">Open Tab</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a
                href={RESUME_URL}
                download="ANUBHAB_SAHOO_cv.pdf"
                onClick={() => playClick()}
                className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 font-vt323 text-xs sm:text-sm uppercase bg-[#5c8e32] border-[3px] border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b] text-white shadow-[2px_2px_0px_#000] hover:bg-[#6ba03c] active:translate-y-px active:shadow-none"
              >
                <span className="hidden sm:inline">Download</span>
                <Download size={14} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close resume viewer"
                className="inline-flex items-center justify-center w-8 h-8 bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] text-white shadow-[2px_2px_0px_#000] hover:bg-[#9c9c9c] active:translate-y-px active:shadow-none"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* PDF fills every pixel below toolbar */}
          <div className="flex-1 min-h-0 relative bg-[#111]">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#1e1e1e]">
                <div className="w-10 h-10 border-[4px] border-[#3c3c3c] border-t-[#55ff55] animate-spin" />
                <span className="font-vt323 text-sm text-[#ffff55] uppercase animate-pulse">
                  Loading scroll...
                </span>
              </div>
            )}
            <iframe
              src={RESUME_URL}
              title="Anubhab Sahoo Resume"
              className="absolute inset-0 w-full h-full border-0 bg-white"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

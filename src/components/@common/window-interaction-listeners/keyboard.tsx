"use client";
import { useEffect } from "react";

type KeyboardEventHandler = (e: KeyboardEvent) => void;
interface WindowClickEventHandlersProps {
  onKeyDown?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
  onKeyPress?: KeyboardEventHandler;
}
export function useWindowKeyboardInteraction({
  onKeyDown,
  onKeyUp,
  onKeyPress,
}: WindowClickEventHandlersProps) {
  useEffect(() => {
    if (onKeyDown) {
      window.addEventListener("keydown", onKeyDown);
      return () => {
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [onKeyDown]);

  useEffect(() => {
    if (onKeyUp) {
      window.addEventListener("keyup", onKeyUp);
      return () => {
        window.removeEventListener("keyup", onKeyUp);
      };
    }
  }, [onKeyUp]);

  useEffect(() => {
    if (onKeyPress) {
      window.addEventListener("keypress", onKeyPress);
      return () => {
        window.removeEventListener("keypress", onKeyPress);
      };
    }
  }, [onKeyPress]);

  return null;
}

export function WindowKeyboardInteraction(
  props: WindowClickEventHandlersProps
) {
  useWindowKeyboardInteraction(props);

  return null;
}

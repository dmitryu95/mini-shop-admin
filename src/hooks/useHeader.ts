import { useState } from "react";

export const useHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleSearch = () => {
    console.log('isVisible', isVisible)
    setIsVisible((prev) => !prev);
  }

  const closeSearch = () => setIsVisible(false);

  return {
    isVisible,
    toggleSearch,
    closeSearch,
  }
}
import {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";

export const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([]);
  const zCounter = useRef(100);

  const openWindow = useCallback((name) => {
    setWindows((currentWindows) => {
      const existingWindow = currentWindows.find(
        (windowItem) => windowItem.name === name
      );
      const currentTopZ = Math.max(
        0,
        ...currentWindows.map((windowItem) => windowItem.zIndex)
      );

      if (existingWindow?.zIndex === currentTopZ) {
        return currentWindows;
      }

      const nextZ = ++zCounter.current;

      if (existingWindow) {
        return currentWindows.map((windowItem) =>
          windowItem.name === name
            ? { ...windowItem, zIndex: nextZ }
            : windowItem
        );
      }

      return [...currentWindows, { name, zIndex: nextZ }];
    });
  }, []);

  const closeWindow = useCallback((name) => {
    setWindows((currentWindows) =>
      currentWindows.filter((windowItem) => windowItem.name !== name)
    );
  }, []);

  const bringToFront = useCallback((name) => {
    setWindows((currentWindows) => {
      const targetWindow = currentWindows.find(
        (windowItem) => windowItem.name === name
      );
      const currentTopZ = Math.max(
        0,
        ...currentWindows.map((windowItem) => windowItem.zIndex)
      );

      if (!targetWindow || targetWindow.zIndex === currentTopZ) {
        return currentWindows;
      }

      const nextZ = ++zCounter.current;

      return currentWindows.map((windowItem) =>
        windowItem.name === name
          ? { ...windowItem, zIndex: nextZ }
          : windowItem
      );
    });
  }, []);

  const contextValue = useMemo(
    () => ({ windows, openWindow, closeWindow, bringToFront }),
    [bringToFront, closeWindow, openWindow, windows]
  );

  return (
    <WindowContext.Provider value={contextValue}>
      {children}
    </WindowContext.Provider>
  );
}

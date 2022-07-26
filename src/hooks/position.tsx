import { useState, useEffect } from "react";
import { PositionState } from "./types";

const usePosition = () => {
  const [position, setPosition] = useState<PositionState>({} as PositionState);
  const [error, setError] = useState<string | null>(null);

  const onChange = ({ coords }: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...position, error };
};

export default usePosition;

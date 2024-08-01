import { useState, useEffect } from "react";

const useSessionProvider = () => {
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    // const storedSessionId = localStorage.getItem("sessionId");

    // if (storedSessionId) {
    // setSessionId(storedSessionId);
    // } else {
    generateNewSessionId();
    // }
  }, []);

  const generateNewSessionId = () => {
    const newSessionId = generateSessionId();
    localStorage.setItem("sessionId", newSessionId);
    setSessionId(newSessionId);
  };

  return { sessionId, generateNewSessionId };
};

const generateSessionId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export default useSessionProvider;

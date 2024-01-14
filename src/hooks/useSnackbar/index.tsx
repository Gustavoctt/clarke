import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import Snackbar from "../../components/Snackbar";

interface ISnackbarContext {
  newError: (message: string) => void;
  newSuccess: (message: string) => void;
}

const defaultContext: ISnackbarContext = {
  newError: () => null,
  newSuccess: () => null,
};

// eslint-disable-next-line react-refresh/only-export-components
const Context = createContext(defaultContext);
const useSnackbar = () => useContext(Context);

// eslint-disable-next-line react-refresh/only-export-components
const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [type, setType] = useState<"error" | "success">("success");

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const emptyTimeout = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }, []);

  const addTimeout = useCallback((callback: () => void) => {
    timeout.current = setTimeout(() => {
      callback();
    }, 3000);
  }, []);

  const clearAll = useCallback(() => {
    setMessage("");
    setType("success");
    setIsVisible(false);
    emptyTimeout();
  }, [emptyTimeout]);

  const setSnackbar = useCallback(
    (type: "error" | "success", message: string) => {
      setType(type);
      setIsVisible(true);
      setMessage(message);

      emptyTimeout();
      addTimeout(clearAll);
    },
    [addTimeout, clearAll, emptyTimeout]
  );

  const newError = useCallback(
    (message: string) => {
      clearAll();
      setTimeout(() => {
        setSnackbar("error", message);
      }, 0);
    },
    [clearAll, setSnackbar]
  );

  const newSuccess = useCallback((message: string) => {
    clearAll();
    setTimeout(() => {
      setSnackbar("success", message);
    }, 0);
  }, []);

  const providerValue = {
    newError,
    newSuccess,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
      <Snackbar
        type={type}
        message={message}
        onClick={clearAll}
        isVisible={isVisible}
      />
    </Context.Provider>
  );
};

export default {
  useSnackbar,
  Provider,
};

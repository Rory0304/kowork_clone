import React from "react";

interface DeferredLoadingProps {
  timedOut: number;
  children: React.ReactNode;
}

const DeferredLoading: React.FC<DeferredLoadingProps> = ({
  timedOut,
  children,
}) => {
  const [isDeferred, setIsDeferred] = React.useState(false);

  React.useEffect(() => {
    const checkTimeOut = setTimeout(() => {
      setIsDeferred(true);
    }, timedOut);

    return () => clearTimeout(checkTimeOut);
  }, []);

  if (!isDeferred) return null;
  return <>{children}</>;
};

export default DeferredLoading;

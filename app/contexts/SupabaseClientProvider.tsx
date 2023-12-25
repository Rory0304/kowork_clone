import React from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useAuth } from "./AuthProvider";

interface SupabaseClientProviderProps {
  children: React.ReactNode;
}

const SupabaseClientContext = React.createContext<{
  supbaseClient: SupabaseClient | null;
}>({ supbaseClient: null });

const SupabaseClientProvider: React.FC<SupabaseClientProviderProps> = ({
  children,
}) => {
  const { accessToken } = useAuth();

  const [supabaseClient] = React.useState(() =>
    createClient(
      process.env.SUPABASE_STORE_URL || "",
      accessToken || process.env.SUPABASE_API_KEY || ""
    )
  );

  return (
    <SupabaseClientContext.Provider value={{ supbaseClient: supabaseClient }}>
      {children}
    </SupabaseClientContext.Provider>
  );
};

//
//
//
const useSupabaseClient = () => {
  return React.useContext(SupabaseClientContext);
};

export { SupabaseClientContext, SupabaseClientProvider, useSupabaseClient };

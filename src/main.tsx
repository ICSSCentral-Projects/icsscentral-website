
  console.log("All Env Variables:", import.meta.env);
  
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
import { supabase } from './lib/supabase';

  console.log("Supabase Client:", supabase);

  createRoot(document.getElementById("root")!).render(<App />);
  
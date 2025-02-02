import { motion } from "framer-motion";
import { Spotlight } from "../components/ui/spotlight-new";

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex flex-row bg-black/[0.96] antialiased relative overflow-hidden">
        <Spotlight />
    </div>
  );
}

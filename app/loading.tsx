import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <Loader2 className="animate-spin text-gold" size={36} />
    </div>
  );
}

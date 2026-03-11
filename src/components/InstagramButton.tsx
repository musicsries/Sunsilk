import { Instagram } from "lucide-react";

const InstagramButton = () => {
  return (
    <a
      href="https://instagram.com/md_.sumair_pvt"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <Instagram className="w-6 h-6" />
    </a>
  );
};

export default InstagramButton;
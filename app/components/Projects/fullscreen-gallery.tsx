import { motion, AnimatePresence } from "framer-motion";

interface FullscreenGalleryProps {
  image: string | null;
  onClose: () => void;
}

export function FullscreenGallery({ image, onClose }: FullscreenGalleryProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <img
            src={image}
            alt=""
            className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
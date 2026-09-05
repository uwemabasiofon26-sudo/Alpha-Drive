import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Image } from "@/components/ui/image";
import { formatNZD } from "@/lib/brand";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, index = 0 }) {
  const [purchaseType, setPurchaseType] = useState("one_time");
  const { addItem } = useCart();
  const hasSub = product.subscription_price && product.subscription_price > 0;
  const price = purchaseType === "subscription" && hasSub ? product.subscription_price : product.price;

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      image: product.image,
      price,
      purchaseType,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden frame-corner">
        <div className="aspect-[4/5] overflow-hidden bg-av-teal/20">
          <Image
            src={product.image}
            alt={product.name}
            fittingType="fill"
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-col gap-3">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-base md:text-xl font-bold tracking-tight text-av-alloy group-hover:text-av-gold transition-colors">
            {product.name}
          </h3>
          {/* Category label: text-av-alloy/80 (not /60) to keep contrast
              readable on the dark background for low-vision users. */}
          <p className="text-xs md:text-sm text-av-alloy/80 mt-1">{product.tagline}</p>
          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-av-alloy/80">
            <div className="flex text-av-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-av-gold text-av-gold" />
              ))}
            </div>
            <span>4.9 (128)</span>
          </div>
        </Link>

        {product.inStock === false ? (
          <div className="w-full rounded-full border border-av-teal/60 bg-av-teal/10 py-2.5 text-center text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold text-av-alloy/60">
            Out of Stock
          </div>
        ) : hasSub ? (
          <div className="flex w-full rounded-full border border-av-teal divide-x divide-av-teal/50 overflow-hidden text-[11px] sm:text-xs uppercase tracking-[0.08em] font-bold">
            <button
              onClick={() => setPurchaseType("one_time")}
              className={cn(
                "flex-1 py-3 px-1.5 transition-colors",
                purchaseType === "one_time" ? "bg-av-teal text-av-gold" : "bg-av-teal/20 text-av-alloy/70"
              )}
            >
              One-time · {formatNZD(product.price)}
            </button>
            <button
              onClick={() => setPurchaseType("subscription")}
              className={cn(
                "flex-1 py-3 px-1.5 bg-transparent transition-colors",
                purchaseType === "subscription" ? "text-av-gold" : "text-av-alloy/70"
              )}
            >
              Monthly · {formatNZD(product.subscription_price)}
            </button>
            <button
              onClick={handleAdd}
              className="flex-1 py-3 px-1.5 bg-av-gold text-av-deep hover:brightness-110 transition"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="w-full rounded-full bg-av-gold text-av-deep py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold hover:brightness-110 transition"
          >
            Add to Cart · {formatNZD(product.price)}
          </button>
        )}
      </div>
    </motion.article>
  );
}

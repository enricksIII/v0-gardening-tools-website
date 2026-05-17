"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { getProductById, products, categories } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryName =
    categories.find((c) => c.slug === product.category)?.name || product.category;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-primary transition-colors"
            >
              {categoryName}
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium truncate max-w-[200px]">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Back Button (Mobile) */}
      <Link
        href="/shop"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 md:hidden"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Shop
      </Link>

      {/* Product Details */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <Link
              href={`/shop?category=${product.category}`}
              className="text-sm text-primary hover:underline"
            >
              {categoryName}
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(product.rating)
                      ? "fill-accent text-accent"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="text-4xl font-bold text-primary mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-muted-foreground mb-8">{product.description}</p>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-destructive">
                <span className="h-2 w-2 rounded-full bg-destructive" />
                Out of Stock
              </span>
            )}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={!product.inStock}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity((q) => q + 1)}
                disabled={!product.inStock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
            {[
              { icon: Truck, label: "Free Shipping", desc: "Over $50" },
              { icon: Shield, label: "2 Year Warranty", desc: "Full coverage" },
              { icon: RotateCcw, label: "Easy Returns", desc: "30 day policy" },
            ].map((feature) => (
              <div key={feature.label} className="text-center">
                <feature.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">
                  {feature.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Reviews ({product.reviews})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-6">
          <div className="prose prose-neutral max-w-none">
            <p className="text-muted-foreground">
              {product.description} This high-quality tool is designed for both
              professional landscapers and home gardening enthusiasts. Made with
              premium materials, it ensures durability and reliable performance
              season after season.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Features
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Premium quality construction</li>
              <li>Ergonomic design for comfortable use</li>
              <li>Weather-resistant materials</li>
              <li>Easy maintenance and cleaning</li>
              <li>Backed by our 2-year warranty</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="pt-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Brand", value: "Roro Gardening Tools" },
              { label: "Category", value: categoryName },
              { label: "Material", value: "Premium Steel/Composite" },
              { label: "Weight", value: "Varies by product" },
              { label: "Warranty", value: "2 Years" },
              { label: "Country of Origin", value: "USA" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between py-3 border-b border-border"
              >
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="font-medium text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="space-y-6">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                date: "2 weeks ago",
                comment:
                  "Excellent quality! This tool has made my gardening so much easier.",
              },
              {
                name: "John D.",
                rating: 4,
                date: "1 month ago",
                comment:
                  "Great product, durable and well-made. Shipping was fast too.",
              },
              {
                name: "Emily R.",
                rating: 5,
                date: "2 months ago",
                comment:
                  "Best gardening tool I've ever purchased. Worth every penny!",
              },
            ].map((review, idx) => (
              <div key={idx} className="border-b border-border pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {review.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import Link from "next/link";
import { Leaf, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Roro Gardening Tools
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Quality gardening tools for professionals and enthusiasts. Growing
              gardens, growing communities since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=hand-tools" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Hand Tools
                </Link>
              </li>
              <li>
                <Link href="/shop?category=power-tools" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Power Tools
                </Link>
              </li>
              <li>
                <Link href="/shop?category=watering" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Watering
                </Link>
              </li>
              <li>
                <Link href="/shop?category=planting" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Planting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Garden Street</li>
              <li>Greenville, CA 94102</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@rorogardening.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Roro Gardening Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

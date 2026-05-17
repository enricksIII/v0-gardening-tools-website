"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CreditCard,
  Truck,
  Shield,
  CheckCircle,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const shippingCost = shippingMethod === "express" ? 15.99 : shippingMethod === "standard" ? 5.99 : 0;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateShipping = () => {
    const newErrors: FormErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: FormErrors = {};
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    else if (formData.cardNumber.replace(/\s/g, "").length < 16)
      newErrors.cardNumber = "Invalid card number";
    if (!formData.cardName) newErrors.cardName = "Name on card is required";
    if (!formData.expiry) newErrors.expiry = "Expiry date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";
    else if (formData.cvv.length < 3) newErrors.cvv = "Invalid CVV";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateShipping()) {
      setStep("payment");
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePayment()) {
      setIsProcessing(true);
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOrderNumber(`RORO-${Date.now().toString().slice(-8)}`);
      setIsProcessing(false);
      setStep("confirmation");
      clearCart();
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <ShoppingBag className="h-16 w-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground">Add some items to proceed to checkout</p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 py-16">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-center">Order Confirmed!</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Thank you for your order. We&apos;ve sent a confirmation email to{" "}
          <span className="font-medium text-foreground">{formData.email}</span>
        </p>
        <div className="bg-secondary p-6 rounded-lg text-center">
          <p className="text-sm text-muted-foreground mb-1">Order Number</p>
          <p className="text-2xl font-bold text-primary">{orderNumber}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Shop
      </Link>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step === "shipping" || step === "payment"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            1
          </div>
          <span className="hidden sm:inline font-medium">Shipping</span>
        </div>
        <div className="w-12 h-0.5 bg-muted" />
        <div className="flex items-center gap-2">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step === "payment"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            2
          </div>
          <span className="hidden sm:inline font-medium">Payment</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Forms */}
        <div>
          {step === "shipping" && (
            <form onSubmit={handleShippingSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      className={errors.address ? "border-destructive" : ""}
                    />
                    {errors.address && (
                      <p className="text-sm text-destructive mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        className={errors.city ? "border-destructive" : ""}
                      />
                      {errors.city && (
                        <p className="text-sm text-destructive mt-1">{errors.city}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        className={errors.state ? "border-destructive" : ""}
                      />
                      {errors.state && (
                        <p className="text-sm text-destructive mt-1">{errors.state}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                        className={errors.zipCode ? "border-destructive" : ""}
                      />
                      {errors.zipCode && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Shipping Method</h3>
                <RadioGroup
                  value={shippingMethod}
                  onValueChange={setShippingMethod}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="free" id="free" />
                      <Label htmlFor="free" className="cursor-pointer">
                        <span className="font-medium">Free Shipping</span>
                        <span className="block text-sm text-muted-foreground">
                          7-10 business days
                        </span>
                      </Label>
                    </div>
                    <span className="font-medium">FREE</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="cursor-pointer">
                        <span className="font-medium">Standard Shipping</span>
                        <span className="block text-sm text-muted-foreground">
                          3-5 business days
                        </span>
                      </Label>
                    </div>
                    <span className="font-medium">$5.99</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="cursor-pointer">
                        <span className="font-medium">Express Shipping</span>
                        <span className="block text-sm text-muted-foreground">
                          1-2 business days
                        </span>
                      </Label>
                    </div>
                    <span className="font-medium">$15.99</span>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Continue to Payment
              </Button>
            </form>
          )}

          {step === "payment" && (
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Payment Details</h2>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep("shipping")}
                  >
                    Edit Shipping
                  </Button>
                </div>

                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground">Shipping to:</p>
                  <p className="font-medium">
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formData.address}, {formData.city}, {formData.state}{" "}
                    {formData.zipCode}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const formatted = formatCardNumber(e.target.value);
                          if (formatted.length <= 19) {
                            setFormData((prev) => ({
                              ...prev,
                              cardNumber: formatted,
                            }));
                          }
                        }}
                        placeholder="1234 5678 9012 3456"
                        className={errors.cardNumber ? "border-destructive pr-10" : "pr-10"}
                      />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                    {errors.cardNumber && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={errors.cardName ? "border-destructive" : ""}
                    />
                    {errors.cardName && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.cardName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, "");
                          if (value.length >= 2) {
                            value = value.slice(0, 2) + "/" + value.slice(2, 4);
                          }
                          setFormData((prev) => ({ ...prev, expiry: value }));
                        }}
                        placeholder="MM/YY"
                        maxLength={5}
                        className={errors.expiry ? "border-destructive" : ""}
                      />
                      {errors.expiry && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.expiry}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 4) {
                            setFormData((prev) => ({ ...prev, cvv: value }));
                          }
                        }}
                        placeholder="123"
                        maxLength={4}
                        className={errors.cvv ? "border-destructive" : ""}
                      />
                      {errors.cvv && (
                        <p className="text-sm text-destructive mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 bg-secondary rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Your payment information is secure and encrypted
                </p>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin mr-2">
                      <svg className="h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                    Processing...
                  </>
                ) : (
                  `Pay $${orderTotal.toFixed(2)}`
                )}
              </Button>
            </form>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-secondary p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>

            <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      ${item.product.price.toFixed(2)} each
                    </p>
                  </div>
                  <p className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${orderTotal.toFixed(2)}</span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

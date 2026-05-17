import Image from "next/image";
import { Leaf, Users, Award, Heart, Target, Globe } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const team = [
    {
      name: "Rosa Garcia",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Marco Santos",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Elena Martinez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We prioritize eco-friendly materials and sustainable manufacturing practices in all our products.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Every tool is crafted to the highest standards, ensuring durability and performance for years.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our love for gardening drives us to create tools that make your gardening experience joyful.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in building a community of gardeners who share knowledge and grow together.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Growing Gardens, Growing Communities
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, Roro Gardening Tools started with a simple
                mission: to provide gardeners with the best tools to nurture
                their green spaces. What began as a small family workshop has
                grown into a trusted name in gardening equipment.
              </p>
              <p className="text-muted-foreground">
                Today, we serve over 50,000 customers worldwide, from hobbyist
                gardeners to professional landscapers. Our commitment to
                quality, sustainability, and customer satisfaction remains at
                the heart of everything we do.
              </p>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop"
                alt="Beautiful garden with plants"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              To empower gardeners of all levels with high-quality, sustainable
              tools that make gardening more accessible, enjoyable, and
              rewarding. We believe that everyone deserves the joy of watching
              something grow, and we&apos;re here to help make that happen.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Roro Gardening Tools
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Serving Gardeners Worldwide
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            From our headquarters in California, we ship to over 30 countries,
            bringing quality gardening tools to green thumbs around the globe.
            Wherever you are, we&apos;re here to help your garden thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "United States",
              "Canada",
              "United Kingdom",
              "Australia",
              "Germany",
              "France",
              "Japan",
              "And More...",
            ].map((country) => (
              <span
                key={country}
                className="px-4 py-2 bg-primary-foreground/10 rounded-full"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

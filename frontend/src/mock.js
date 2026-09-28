// Mock content for the Saffron Wonders landing page.
// All copy and links live here so a backend/CMS can replace them later.

export const CONTACT_EMAIL = "hello@saffronwonders.co.uk";

export const navLinks = [
  { label: "What we do", href: "#what-we-do" },
  { label: "Our community", href: "#community" },
  { label: "Share an idea", href: "#share-an-idea" },
  { label: "Get involved", href: "#say-hello" },
];

export const hero = {
  titleA: "Saffron",
  titleB: "Wonders",
  tagline: ["Growing community.", "Inspiring young minds."],
  intro: "We create opportunities for children and families in Saffron Walden through",
  highlights: "childcare, science, arts and theatre.",
  cta: "Discover what we're creating",
};

export const features = {
  label: "What we're creating",
  headingA: "Small moments.",
  headingB: "Big wonders.",
  sub: "Local opportunities for curious, creative and confident children.",
  items: [
    {
      id: "childcare",
      title: "Childcare & Crèche",
      text: "A safe and nurturing space where nature meets learning and play.",
      image: "/Saffron-wonders-2/art/hut.png",
      icon: "home",
      tint: "bg-[#e6f0dc] text-[#6a8f4e]",
    },
    {
      id: "science",
      title: "Science Festivals",
      text: "Hands-on fun that sparks curiosity and a love of discovery.",
      image: "/Saffron-wonders-2/art/science.png",
      icon: "flask",
      tint: "bg-[#dde9f7] text-[#4a78b8]",
    },
    {
      id: "arts",
      title: "Arts & Theatre",
      text: "Creative experiences that inspire confidence and imagination.",
      image: "/Saffron-wonders-2/art/theatre.png",
      icon: "drama",
      tint: "bg-[#efdcf0] text-[#9b5aa8]",
    },
  ],
};

export const ideas = {
  label: "For local families, shaped by local families",
  line1A: "Your ideas",
  line1B: "today.",
  line2A: "Their wonders",
  line2B: "tomorrow.",
  body:
    "We're listening to families across Saffron Walden. What would make life here even better for children — a new activity, a place to meet, more opportunities to explore science and creativity, or an easier way to discover what's already happening?",
  closing: "Let's grow something wonderful, together.",
};

export const contact = {
  label: "Come and say hello",
  heading: ["We want to hear", "from you"],
  sub: "Share an idea, a suggestion or just say hello. We'd love to hear from you.",
  button: "Send your message",
  note: "We'll get back to you soon.",
};

export const footer = {
  text: "Saffron Wonders · Saffron Walden, Essex",
};

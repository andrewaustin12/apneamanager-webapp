const config = {
  // REQUIRED: This shows what the name of the app. It shows up in the name in the browser tab.
  //           It is showing up in all places where the app name is to be shown.
  appName: "Apnea Manager",
  appIcon: "/ApneaManagerAppIcon.ico",
  appLogoTransparent: "/app-logo-transparent.png",
  // Optional - The theme of your app. Can be "light" or "dark". Defaults to "dark".
  theme: {
    mode: "light",               
    // "light" or "dark"
    colors: {
      // Deep ocean blue - professional, calming, and aquatic
      primary: "#1e88e5",       // A rich medium blue
      
      // Lighter and darker shades for hover/active states
      primaryLight: "#42a5f5",  // Lighter blue for hover
      primaryDark: "#1565c0",   // Darker blue for active states
      
      // Optional: Secondary colors for different UI elements
      secondary: "#212121",        
      // Current dark background color
      // Optional: Accent colors for special elements
      accentPositive: "#22c55e",          
      // Success/green color (currently used in promotion badges)
      accentNegative: "#f43f5e",         
      // Error/red color (currently used in promotion badges)
    }
  },
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription: "Elevate your breath holding with Apnea Manager: Track and visualize training, enhance performance and explore your limits effortlessly. The ultimate training companion for freedivers and spearfishers!",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "https://apneamanager.com/",

  // REQUIRED: Update with your social media links
  social: {
    bluesky: "@neoprenecowboy",
    github: "https://github.com/andrew-austin-dev/mvpfast-convex",
    linkedin: "https://www.linkedin.com/in/andrew-austin-dev/",
    x: "https://x.com/andrew_austin_dev",
  },
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 179,
        currency: "USD",
        features: [
          { name: "NextJS boilerplate", included: true },
          { name: "SEO & Blog", included: true },
          { name: "Stripe payments", included: true },
          { name: "Clerk authentication", included: true },
          { name: "Convex database / Supabase", included: true },
          { name: "Resend emails", included: true },
          { name: "Components library", included: true },
          { name: "ChatGPT prompts for terms & privacy", included: true },
          { name: "Discord Community & leaderboard", included: false },
          { name: "24/7 support", included: false },
          { name: "Lifetime updates", included: false },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "All-In",
        description: "",
        price: 99,
        priceAnchor: 199,
        currency: "USD",
        features: [
          { name: "NextJS boilerplate", included: true },
          { name: "SEO & Blog", included: true },
          { name: "Stripe payments", included: true },
          { name: "Clerk authentication", included: true },
          { name: "Convex database / Supabase", included: true },
          { name: "Resend emails", included: true },
          { name: "Components library", included: true },
          { name: "ChatGPT prompts for terms & privacy", included: true },
          { name: "Discord Community & leaderboard", included: true },
          { name: "24/7 support", included: true },
          { name: "Lifetime updates", included: true },

        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `MVP Fast <noreply@mg.mvpfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `MVP Fast <andy@mvpfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "andy@mvpfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "andrew@mvpfa.st",
  },
  resend: {
    // REQUIRED - Resend API key from your dashboard
    apiKey: process.env.RESEND_API_KEY,
    // REQUIRED - Email 'From' field for magic login links
    fromNoReply: `Apnea Manager <noreply@apneamanager.app>`,
    // REQUIRED - Email 'From' field for administrative emails
    fromAdmin: `Apnea Manager <andy@apneamanager.app>`,
    // Optional - Support email address shown to customers
    supportEmail: "andy@sleeptopia.app",
  },
  auth: {
    // REQUIRED — the path to log in users via Clerk. It's used to protect private routes (like /dashboard) and for redirecting users when authentication is needed
    loginUrl: "/sign-in",
    // REQUIRED — the path to redirect users after successful login. This is normally a private page for users to manage their accounts
    callbackUrl: "/dashboard",
  },
  landingPage: {
    // REQUIRED - Hero section configuration
    hero: {
      badge: "🌊 Dive Deeper, Hold Longer",
      title: "Master Your Breath Hold Training",
      description: "Whether you're just starting out or you're a seasoned diver looking to push your limits, Apnea Manager is designed to help you train your dry static apnea training, track, analyze, and enhance your performance with precision and ease.",
      cta: "Start Training Now",
      image: {
        src: "/mockup-hero.png",
        alt: "Apnea Manager App Preview"
      }
    },
    // OPTIONAL - Problem section configuration
    problem: {
      title: "Why Train with Apnea Manager?",
      description: "Discover the potential of structured breath hold training",
      problems: [
        { value: "2-3x", metric: "typical improvement in breath hold time", color: "accentPositive" },
        { value: "100%", metric: "customizable to your level", color: "accentPositive" },
        { value: "4+", metric: "specialized breathing techniques", color: "accentPositive" },
        { value: "24/7", metric: "progress tracking and analytics", color: "accentPositive" }
      ],
      badge: "Transform Your Training",
      badgeColor: "rgba(30, 136, 229, 0.2)",
      badgeTextColor: "primary"
    },
    // OPTIONAL - Frequently Asked Questions shown on the landing page
    faq: [
      {
        question: "What is Apnea Manager?",
        answer: "Apnea Manager is the ultimate companion for freedivers and spearfishers, designed to help you train your dry static apnea, track progress, and enhance performance with precision and ease."
      },
      {
        question: "How do the training tables work?",
        answer: "Start with a breath hold test, and our algorithm will create personalized CO2 and O2 tables based on your Personal Best Breath Hold. Pro users can customize all aspects of their training tables."
      },
      {
        question: "What breathing exercises are available?",
        answer: "We offer a comprehensive suite of breathing exercises including diaphragmatic breathing, empty lungs training, square/box breathing, and pranayama exercises. Pro users get access to additional customizable training options."
      },
      {
        question: "What features are included in the Pro version?",
        answer: "Pro users get access to customizable training tables, additional breathing exercises (including square breathing and pranayama), training reminders with notifications, and the ability to modify all aspects of their training programs."
      }
    ],
    // OPTIONAL - How it Works section configuration
    howItWorks: {
      title: "Launch Your SaaS in 3 Simple Steps",
      steps: [
        {
          title: "Clone the Repository",
          description: "Start with our production-ready codebase. One command to get everything you need:",
          code: "git clone https://github.com/shipfast/saas-template.git"    // Optional: code snippet to display
        },
        {
          title: "Make It Yours",
          description: "Customize the template to match your needs. All components are modular and well-documented:",
          bullets: [                                      // Optional: bullet points to display
            "Modify the UI with 30+ pre-built components",
            "Configure Clerk, Stripe and Convex or Supabase authentication and payment settings",
            "Add your business logic and features"
          ]
        },
        {
          title: "Ship to Production",
          description: "Deploy with confidence using our production-ready infrastructure:",
          bullets: [
            "Change to production in Clerk, Stripe and Convex or Supabase",
            "Push to deploy to Vercel",
          ]
        }
      ]
    },
    // OPTIONAL - Newsletter section configuration
    newsletter: {
      title: "Join the Community",
      description: "Get notified about updates, new features, and our developer community.",
      buttonText: "Subscribe",
      inputPlaceholder: "you@example.com"
    },
    // OPTIONAL - Features section configuration
    features: {
      badge: "Features",
      title: "Your Complete Breath Hold Training Solution",
      description: "Unlock the power of personalized training with our comprehensive suite of features.",
      sections: [
        {
          title: "Personalized Training Tables",
          description: "Start with a breath hold test and get customized CO2 and O2 tables based on your Personal Best Breath Hold.",
          features: [
            "CO2 tolerance tables",
            "O2 maximization training",
            "Full lungs training",
            "Empty lungs training",
            "Pro customization options"
          ],
          imageSrc: "/mockup-tables.png",
          imageAlt: "Training tables interface"
        },
        {
          title: "Advanced Breathing Exercises",
          description: "Access a variety of specialized breathing techniques to enhance your practice.",
          features: [
            "Diaphragmatic breathing",
            "Square/box breathing",
            "Pranayama exercises",
            "Alternate nostril breathing",
            "Detailed guidance for each exercise"
          ],
          imageSrc: "/mockup-breathing.png",
          imageAlt: "Breathing exercises interface"
        },
        {
          title: "Progress Tracking & Reminders",
          description: "Monitor your journey with comprehensive tracking tools.",
          features: [
            "Session logging",
            "Detailed history charts",
            "Session summaries",
            "Personal best tracking",
            "Pro training reminders"
          ],
          imageSrc: "/mockup-progress.png",
          imageAlt: "Progress tracking interface"
        }
      ]
    },
    cta: {
      title: "Ready to Master Your Breath?",
      description: "Join thousands of freedivers who've improved their breath hold capacity with our proven training methods.",
      buttonText: "Download on App Store",
      buttonLink: "https://apps.apple.com/us/app/apnea-freedive-stamina-trainer/id6477821385",
      buttonIcon: {
        viewBox: "0 0 24 24",
        path: "M13 10V3L4 14h7v7l9-11h-7z"
      }
    },
    footer: {
      tagline: "Experience the freedom of the deep. Dive smarter, hold longer, and surpass your limits with Apnea Manager.",
      callToAction: "Start Your Journey Today"
    }
  },
};

export default config;

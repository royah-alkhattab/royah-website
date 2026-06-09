import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        work: "Work",
        product: "Product",
        about: "About",
        contact: "Contact"
      },
      // Inner page headers
      pages: {
        work: {
          eyebrow: "Selected work",
          title: "Real products, shipped.",
          subtitle: "A look at websites we've designed and built for real businesses in Oman — live, bilingual, and working today."
        },
        product: {
          eyebrow: "Our flagship product",
          title: "Royah Property",
          subtitle: "Smart property & building management software — bilingual and automated. Launching soon as a subscription anyone can use."
        },
        about: {
          eyebrow: "About Royah",
          title: "We build software that serves people.",
          subtitle: "Royah is a software company on a mission: to put intelligent, connected technology in the service of people — built by an engineer who specializes in artificial intelligence."
        }
      },
      // Selected work / portfolio
      work: {
        tag: "Selected work",
        intro: "Every project below is a live website we designed and built end to end — from the first pixel to production.",
        visit: "Visit site",
        privateLabel: "Private internal system",
        projects: {
          awtad: {
            name: "Awtad Development",
            category: "Real estate",
            coverTitle: "Building Landmarks of Tomorrow",
            coverSubtitle: "Premium developments across the Sultanate of Oman.",
            description: "A premium property developer's bilingual website — a cinematic hero, an elegant project showcase, and a clean register-interest flow for buyers.",
            url: "https://awtad.om",
            urlLabel: "awtad.om",
            tags: ["Design & build", "Bilingual EN / AR", "Real estate"]
          },
          germangold: {
            name: "German Gold",
            category: "Automotive · Lubricants",
            coverTitle: "Power to Perform.",
            coverSubtitle: "German-engineered engine oil, now in Oman.",
            description: "A German engine-oil brand brought to the Omani market — with an interactive “find your oil” selector, a full product catalogue, and a distributor locator.",
            url: "https://germangold.om",
            urlLabel: "germangold.om",
            tags: ["Design & build", "Interactive tool", "E-commerce ready"]
          },
          alsadiya: {
            name: "Al Sadiya Water Billing",
            category: "Business software · Utility billing",
            coverTitle: "Water Billing System",
            coverSubtitle: "Subscribers, readings, invoices & payments — built for Oman.",
            description: "A custom billing platform for a water utility in Nakhal — monthly meter readings, automated Arabic invoices, payments and reporting for 350+ subscribers. Live and running the business every day.",
            url: "https://alsadiya.om",
            urlLabel: "alsadiya.om",
            tags: ["Custom web app", "Billing & invoicing", "350+ subscribers"]
          }
        }
      },
      // Home product teaser
      productTeaser: {
        tag: "Coming soon · Our flagship product",
        title: "Meet Royah Property",
        desc: "All-in-one property and rent management — bilingual and automated. Launching soon as a subscription anyone can use.",
        cta: "Explore the product"
      },
      // Final call to action
      finalCta: {
        title: "Ready to work smarter?",
        desc: "Tell us what you're building, and we'll show you how Royah's software and AI can help.",
        button: "Talk to us",
        secondary: "Email us"
      },
      // Hero Section
      hero: {
        badge: "Built in Oman, for the world",
        headline: "The future,",
        headlineAccent: "built for you.",
        subheadline: "We design and build the websites, apps, and smart systems your business needs — with real AI built in to do the work for you.",
        ctaPrimary: "See our work",
        ctaSecondary: "Talk to us",
        trust: "Running in live production today"
      },
      // Problem Section
      problem: {
        tag: "What we believe",
        title: "Technology should serve people.",
        subtitle: "Great software gets out of your way — making the work simpler, the decisions smarter, and the day easier.",
        points: {
          paper: {
            title: "Simple by design",
            description: "Powerful underneath, effortless on top — no clutter, no manuals, no friction."
          },
          manual: {
            title: "Smart by default",
            description: "AI does the heavy lifting — surfacing insights and saving you real time."
          },
          blind: {
            title: "Connected as one",
            description: "Your tools, your data, and your people working together in one clear place."
          }
        }
      },
      // What We Do
      whatWeDo: {
        tag: "What we do",
        title: "Three crafts. One vision.",
        subtitle: "Custom software, practical AI, and a clear digital strategy — everything you need to build and grow.",
        items: {
          software: {
            title: "Custom Software",
            description: "Websites, apps, and smart systems built around your needs — from customers and billing to inventory, bookings, and reports.",
            features: ["Customers & sales", "Billing & payments", "Inventory & orders", "Dashboards & reports"]
          },
          ai: {
            title: "AI Solutions",
            description: "Practical AI that saves you time — Arabic chatbots, document automation, and smart insights from your data.",
            features: ["Arabic & English chatbots", "Document automation", "Data insights", "Smart assistants"]
          },
          strategy: {
            title: "Digital Strategy",
            description: "We map the path with you — what to build, in what order, and how it pays off, whether you're a company, an organization, or someone with an idea.",
            features: ["Digital roadmap", "Process review", "System design", "Vision 2040 alignment"]
          }
        }
      },
      // Homepage work teaser
      workTeaser: {
        title: "Real products, shipped.",
        view: "All projects"
      },
      // Flagship Product
      product: {
        tag: "Our flagship product",
        name: "Royah Property",
        tagline: "Property & building management, done right.",
        description: "Everything a property owner needs in one bilingual app: track units and tenants, generate rent schedules automatically, record payments, flag overdue rent, and see your income at a glance — with one-tap WhatsApp reminders.",
        cta: "Get early access",
        live: "Coming soon",
        features: {
          units: { title: "Units & tenants", description: "Track every shop or apartment, its rent, and who occupies it." },
          contracts: { title: "Smart contracts", description: "Save a contract and the full payment schedule is generated for you." },
          payments: { title: "Payments & reminders", description: "Record payments, auto-flag overdue rent, send WhatsApp reminders in one tap." },
          dashboard: { title: "Owner dashboard", description: "Expected income, collected, outstanding, occupancy — all in one view." }
        }
      },
      // Impact / metrics
      impact: {
        tag: "Why it's different",
        title: "Built to make property management effortless.",
        subtitle: "No spreadsheets, no paperwork, no chasing — one clear app that does the work for you.",
        stats: {
          customers: { value: "2", label: "languages — Arabic & English, built in" },
          production: { value: "Auto", label: "rent schedules generated for you" },
          paper: { value: "1-tap", label: "WhatsApp rent reminders" },
          uptime: { value: "AI", label: "intelligence built into the core" }
        }
      },
      // Why Royah
      why: {
        tag: "Why Royah",
        title: "Built by an engineer who specializes in AI.",
        description: "Royah is led by a software engineer with a Master's degree in Artificial Intelligence. That means the software you get isn't just functional — it's built to be intelligent, reliable, and ready for what's next.",
        points: {
          ai: { title: "AI expertise", description: "A Master's in AI — rare in the region — built into every product we make." },
          oman: { title: "Bilingual by design", description: "Arabic-first and English, RTL-ready, shaped around how people really work." },
          lasting: { title: "Built to last", description: "Production-grade engineering: secure, maintainable, and ready to grow with you." }
        }
      },
      // Vision 2040
      vision: {
        tag: "Our bigger purpose",
        manifesto: "We build technology in the service of people — software and AI that make everyday life simpler, smarter, and full of possibility.",
        title: "Technology in the service of people.",
        body: "We build technology that lifts people up — proudly from Oman, for the world.",
        note: "Every product we make is a step toward that.",
        principles: [
          { title: "People first", desc: "Designed around real human needs." },
          { title: "Built to last", desc: "Secure, production-grade, ready to grow." },
          { title: "Bilingual by design", desc: "Arabic-first and English, for everyone." }
        ]
      },
      // Process
      process: {
        tag: "How we work",
        title: "A simple path from idea to live.",
        subtitle: "Clear steps, no jargon, real results.",
        steps: {
          understand: { title: "Understand", description: "We learn how your business actually runs today." },
          build: { title: "Build", description: "We design and build a system that fits — bilingual and clean." },
          launch: { title: "Launch", description: "We get it live in your business, with your real data." },
          support: { title: "Support", description: "We stay with you — improving, fixing, and growing the system." }
        }
      },
      // Contact Section (kept compatible with Contact.tsx)
      contact: {
        tagline: "Start Your Digital Journey",
        title: "Ready to work smarter?",
        subtitle: "Tell us what you're working on — we'll show you how Royah can help.",
        whatsapp: "Chat on WhatsApp",
        whatsappDesc: "Get instant responses to your questions. We're available during business hours.",
        whatsappResponse: "Usually responds instantly",
        email: "Send us an Email",
        emailDesc: "Detailed project inquiries and formal communication.",
        phone: "Call Us",
        phoneDesc: "Speak directly with our team for urgent matters.",
        bookCall: "Book a Call",
        bookCallDesc: "Schedule a free consultation to discuss your project in detail.",
        bookCallResponse: "30-minute free consultation",
        hours: "Business Hours",
        location: "Where We Are",
        businessHours: {
          weekdays: "Sunday - Thursday:",
          weekdaysTime: "9:00 AM - 6:00 PM",
          weekend: "Friday - Saturday:",
          weekendTime: "Closed",
          timezone: "GMT+4 (Oman Time)"
        },
        locationDetails: {
          city: "Based in Oman",
          region: "Building for businesses everywhere",
          remote: "Remote consultations available"
        },
        cta: {
          title: "Ready to start your digital transformation?",
          description: "Let's turn the way your business runs today into clean, reliable software. Message us and we'll take it from there.",
          button: "Start WhatsApp Conversation"
        }
      },
      // Footer Section
      footer: {
        description: "Royah designs intelligent, connected software and AI that make work and everyday life simpler, smarter, and ready for what's next.",
        nav: {
          title: "Explore",
          whatWeDo: "What We Do",
          product: "Product",
          vision: "Vision 2040",
          contact: "Contact"
        },
        contactTitle: "Get in touch",
        getInTouch: "Get in Touch",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        location: "Sultanate of Oman",
        legalName: "Royah Advanced Technologies",
        copyright: "© 2026 Royah Advanced Technologies. All rights reserved.",
        tagline: "Smart software & AI, in the service of people."
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        work: "أعمالنا",
        product: "المنتج",
        about: "من نحن",
        contact: "تواصل معنا"
      },
      // Inner page headers
      pages: {
        work: {
          eyebrow: "مختارات من أعمالنا",
          title: "منتجات حقيقية… أُطلقت فعلاً.",
          subtitle: "نظرة على مواقع صمّمناها وبنيناها لأعمال حقيقية في عُمان — تعمل اليوم، بلغتين، على الإنترنت."
        },
        product: {
          eyebrow: "منتجنا الرئيسي",
          title: "رؤية العقار",
          subtitle: "برنامج ذكي لإدارة العقارات والمباني — بلغتين ومؤتمت. يُطلق قريباً كاشتراك متاح للجميع."
        },
        about: {
          eyebrow: "عن رؤية",
          title: "نبني برمجيات تخدم الإنسان.",
          subtitle: "رؤية شركة برمجيات برسالة واضحة: أن نضع تقنية ذكية ومتصلة في خدمة الإنسان — بناءً على يد مهندس متخصص في الذكاء الاصطناعي."
        }
      },
      // Selected work / portfolio
      work: {
        tag: "مختارات من أعمالنا",
        intro: "كل مشروع بالأسفل موقع حقيقي صمّمناه وبنيناه بالكامل — من أول بكسل حتى الإطلاق.",
        visit: "زيارة الموقع",
        privateLabel: "نظام داخلي خاص",
        projects: {
          awtad: {
            name: "أوتاد للتطوير العقاري",
            category: "العقارات",
            coverTitle: "نبني معالم الغد",
            coverSubtitle: "مشاريع سكنية راقية في ربوع سلطنة عُمان.",
            description: "موقع ثنائي اللغة لمطوّر عقاري راقٍ — واجهة بصرية آسرة، وعرض أنيق للمشاريع، ومسار واضح لتسجيل اهتمام المشترين.",
            url: "https://awtad.om",
            urlLabel: "awtad.om",
            tags: ["تصميم وتطوير", "عربي / إنجليزي", "عقارات"]
          },
          germangold: {
            name: "جيرمن جولد",
            category: "السيارات · الزيوت",
            coverTitle: "قوة الأداء.",
            coverSubtitle: "زيت محركات بمعايير ألمانية، الآن في عُمان.",
            description: "علامة زيوت محركات ألمانية في السوق العُماني — مع أداة تفاعلية لاختيار الزيت المناسب، وكتالوج كامل للمنتجات، ودليل للموزّعين.",
            url: "https://germangold.om",
            urlLabel: "germangold.om",
            tags: ["تصميم وتطوير", "أداة تفاعلية", "جاهز للمتاجر"]
          },
          alsadiya: {
            name: "نظام فواتير مياه السعدية",
            category: "برمجيات أعمال · فوترة المياه",
            coverTitle: "نظام إدارة فواتير المياه",
            coverSubtitle: "المشتركون والقراءات والفواتير والدفعات — مصمّم لعُمان.",
            description: "منصّة فوترة مخصّصة لمزوّد مياه في نخل — قراءات شهرية للعدادات، وفواتير عربية تلقائية، ومدفوعات وتقارير لأكثر من ٣٥٠ مشتركاً. تعمل وتُدير العمل كل يوم.",
            url: "https://alsadiya.om",
            urlLabel: "alsadiya.om",
            tags: ["تطبيق ويب مخصّص", "فوترة وإيصالات", "+٣٥٠ مشترك"]
          }
        }
      },
      // Home product teaser
      productTeaser: {
        tag: "قريباً · منتجنا الرئيسي",
        title: "تعرّف على رؤية العقار",
        desc: "إدارة شاملة للعقارات والإيجارات — بلغتين ومؤتمتة. يُطلق قريباً كاشتراك متاح للجميع.",
        cta: "استكشف المنتج"
      },
      // Final call to action
      finalCta: {
        title: "مستعد للعمل بذكاء أكبر؟",
        desc: "أخبرنا بما تبنيه، وسنُريك كيف يمكن لبرمجيات رؤية وذكائها الاصطناعي أن تساعدك.",
        button: "تحدّث معنا",
        secondary: "راسلنا"
      },
      // Hero Section
      hero: {
        badge: "صُنع في عُمان… للعالم",
        headline: "المستقبل،",
        headlineAccent: "نبنيه من أجلك.",
        subheadline: "نصمم ونبني المواقع والتطبيقات والأنظمة الذكية التي تحتاجها أعمالك — ونضع فيها الذكاء الاصطناعي ليعمل عنك.",
        ctaPrimary: "شاهد أعمالنا",
        ctaSecondary: "تحدّث معنا",
        trust: "يعمل فعلياً في بيئة إنتاج حقيقية"
      },
      // Problem Section
      problem: {
        tag: "ما نؤمن به",
        title: "التقنية يجب أن تخدم الإنسان.",
        subtitle: "البرمجيات الرائعة تبتعد عن طريقك — تجعل العمل أبسط، والقرارات أذكى، واليوم أسهل.",
        points: {
          paper: {
            title: "بساطة في التصميم",
            description: "قوة في العمق، وسهولة في الاستخدام — بلا تعقيد ولا أدلّة ولا عوائق."
          },
          manual: {
            title: "ذكاء بشكل افتراضي",
            description: "الذكاء الاصطناعي يتولّى المهام الثقيلة — يكشف الرؤى ويوفّر وقتك الحقيقي."
          },
          blind: {
            title: "متصل كوحدة واحدة",
            description: "أدواتك وبياناتك وفريقك يعملون معاً في مكان واحد واضح."
          }
        }
      },
      // What We Do
      whatWeDo: {
        tag: "ماذا نقدّم",
        title: "ثلاث خدمات، هدف واحد.",
        subtitle: "برمجيات مخصّصة، وذكاء اصطناعي عملي، واستراتيجية رقمية واضحة — كل ما تحتاجه لتبني وتنمو.",
        items: {
          software: {
            title: "البرمجيات المخصّصة",
            description: "مواقع، وتطبيقات، وأنظمة ذكية مصمّمة خصيصاً لاحتياجك — من إدارة العملاء والفوترة إلى المخزون والحجوزات والتقارير.",
            features: ["العملاء والمبيعات", "الفوترة والمدفوعات", "المخزون والطلبات", "لوحات وتقارير"]
          },
          ai: {
            title: "حلول الذكاء الاصطناعي",
            description: "ذكاء اصطناعي عملي يوفّر وقتك — روبوتات محادثة عربية، وأتمتة المستندات، ورؤى ذكية من بياناتك.",
            features: ["روبوتات محادثة عربية وإنجليزية", "أتمتة المستندات", "رؤى من البيانات", "مساعدون أذكياء"]
          },
          strategy: {
            title: "الاستراتيجية الرقمية",
            description: "نرسم معك خارطة الطريق — ماذا تبني، وبأي ترتيب، وكيف يعود عليك بالنفع، سواء كنت شركة، أو مؤسسة، أو صاحب فكرة.",
            features: ["خارطة طريق رقمية", "مراجعة العمليات", "تصميم الأنظمة", "الانسجام مع رؤية ٢٠٤٠"]
          }
        }
      },
      // Homepage work teaser
      workTeaser: {
        title: "منتجات حقيقية، تعمل اليوم.",
        view: "كل الأعمال"
      },
      // Flagship Product
      product: {
        tag: "منتجنا الرئيسي",
        name: "رؤية العقار",
        tagline: "إدارة العقارات والمباني… كما ينبغي.",
        description: "كل ما يحتاجه مالك العقار ضمن تطبيق واحد بلغتين: تتبّع الوحدات والمستأجرين، توليد جداول الإيجار تلقائياً، تسجيل المدفوعات، تنبيه المتأخرات، ورؤية دخلك بنظرة واحدة — مع تذكيرات واتساب بضغطة واحدة.",
        cta: "احصل على وصول مبكر",
        live: "قريباً",
        features: {
          units: { title: "الوحدات والمستأجرون", description: "تتبّع كل محل أو شقة، وإيجارها، ومن يشغلها." },
          contracts: { title: "عقود ذكية", description: "احفظ العقد ليُولَّد لك جدول المدفوعات كاملاً." },
          payments: { title: "المدفوعات والتذكيرات", description: "سجّل المدفوعات، ونبّه المتأخرات تلقائياً، وأرسل تذكير واتساب بضغطة." },
          dashboard: { title: "لوحة المالك", description: "الدخل المتوقع، والمحصّل، والمتبقّي، ونسبة الإشغال — في شاشة واحدة." }
        }
      },
      // Impact / metrics
      impact: {
        tag: "ما يميّزه",
        title: "مصمّم ليجعل إدارة العقارات بلا عناء.",
        subtitle: "بلا جداول، بلا أوراق، بلا مطاردة — تطبيق واحد واضح يقوم بالعمل عنك.",
        stats: {
          customers: { value: "٢", label: "لغتان — العربية والإنجليزية، أساساً" },
          production: { value: "تلقائي", label: "جداول إيجار تُولَّد لك" },
          paper: { value: "ضغطة", label: "تذكيرات واتساب للإيجار" },
          uptime: { value: "ذكاء", label: "مدمج في صميم التطبيق" }
        }
      },
      // Why Royah
      why: {
        tag: "لماذا رؤية",
        title: "بناء مهندس متخصّص في الذكاء الاصطناعي.",
        description: "تقود رؤيةَ مهندسُ برمجيات حاصل على ماجستير في الذكاء الاصطناعي. هذا يعني أن البرمجيات التي تحصل عليها ليست وظيفية فحسب — بل مبنية لتكون ذكية وموثوقة وجاهزة للمستقبل.",
        points: {
          ai: { title: "خبرة في الذكاء الاصطناعي", description: "ماجستير في الذكاء الاصطناعي — نادر في المنطقة — في صميم كل منتج نصنعه." },
          oman: { title: "ثنائية اللغة بالتصميم", description: "عربية أولاً وإنجليزية، جاهزة للكتابة من اليمين، ومبنية حول طريقة عمل الناس فعلاً." },
          lasting: { title: "مبنية لتدوم", description: "هندسة بمستوى الإنتاج: آمنة، وقابلة للصيانة، وجاهزة للنمو معك." }
        }
      },
      // Vision 2040
      vision: {
        tag: "غايتنا الأكبر",
        manifesto: "نبني التقنية في خدمة الإنسان — برمجيات وذكاءً اصطناعياً تجعل الحياة اليومية أبسط وأذكى وأكثر رحابةً بالفرص.",
        title: "التقنية في خدمة الإنسان.",
        body: "نبني تقنيةً ترتقي بالإنسان — من عُمان بفخر، وإلى العالم.",
        note: "كل منتج نصنعه خطوة نحو ذلك.",
        principles: [
          { title: "الإنسان أولاً", desc: "مصمّمة حول احتياجات الناس الحقيقية." },
          { title: "مبنية لتدوم", desc: "آمنة، بمستوى الإنتاج، وجاهزة للنمو." },
          { title: "ثنائية اللغة", desc: "عربية أولاً وإنجليزية، للجميع." }
        ]
      },
      // Process
      process: {
        tag: "كيف نعمل",
        title: "مسار بسيط من الفكرة إلى الإطلاق.",
        subtitle: "خطوات واضحة، بلا تعقيد، ونتائج حقيقية.",
        steps: {
          understand: { title: "نفهم", description: "نتعرّف على طريقة إدارة عملك اليوم فعلاً." },
          build: { title: "نبني", description: "نصمّم ونبني نظاماً يناسبك — بلغتين وبتصميم نظيف." },
          launch: { title: "نُطلق", description: "نُشغّله في عملك ببياناتك الحقيقية." },
          support: { title: "ندعم", description: "نبقى معك — تحسيناً وإصلاحاً وتطويراً للنظام." }
        }
      },
      // Contact Section
      contact: {
        tagline: "ابدأ رحلتك الرقمية",
        title: "مستعد للعمل بذكاء أكبر؟",
        subtitle: "أخبرنا بما تعمل عليه — وسنُريك كيف يمكن لرؤية أن تساعدك.",
        whatsapp: "تحدث عبر واتساب",
        whatsappDesc: "احصل على ردود فورية لأسئلتك. نحن متاحون خلال ساعات العمل.",
        whatsappResponse: "يرد عادة فوراً",
        email: "أرسل إيميل",
        emailDesc: "استفسارات مفصلة عن المشاريع والتواصل الرسمي.",
        phone: "اتصل بنا",
        phoneDesc: "تحدث مباشرة مع فريقنا للأمور العاجلة.",
        bookCall: "احجز مكالمة",
        bookCallDesc: "احجز استشارة مجانية لمناقشة مشروعك بالتفصيل.",
        bookCallResponse: "استشارة مجانية لمدة 30 دقيقة",
        hours: "ساعات العمل",
        location: "أين نحن",
        businessHours: {
          weekdays: "الأحد - الخميس:",
          weekdaysTime: "9:00 ص - 6:00 م",
          weekend: "الجمعة - السبت:",
          weekendTime: "مغلق",
          timezone: "GMT+4 (توقيت عُمان)"
        },
        locationDetails: {
          city: "مقرّنا في عُمان",
          region: "نبني لأعمال في كل مكان",
          remote: "الاستشارات عن بُعد متاحة"
        },
        cta: {
          title: "مستعد لبدء تحوّلك الرقمي؟",
          description: "لنحوّل طريقة إدارة عملك اليوم إلى برمجيات نظيفة وموثوقة. راسلنا وسنتولّى الباقي.",
          button: "ابدأ محادثة واتساب"
        }
      },
      // Footer Section
      footer: {
        description: "تصمّم رؤية برمجيات وذكاءً اصطناعياً متصلاً يجعل العمل والحياة اليومية أبسط وأذكى وأكثر جاهزية للمستقبل.",
        nav: {
          title: "استكشف",
          whatWeDo: "ماذا نقدّم",
          product: "المنتج",
          vision: "رؤية ٢٠٤٠",
          contact: "تواصل معنا"
        },
        contactTitle: "تواصل معنا",
        getInTouch: "تواصل معنا",
        emailLabel: "البريد الإلكتروني",
        phoneLabel: "الهاتف",
        locationLabel: "الموقع",
        location: "سلطنة عُمان",
        legalName: "رؤية للتقنيات المتقدمة",
        copyright: "© ٢٠٢٦ رؤية للتقنيات المتقدمة. جميع الحقوق محفوظة.",
        tagline: "برمجيات وذكاء اصطناعي… في خدمة الإنسان."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    detection: {
      // 'path' is intentionally omitted: with client-side routing the first path
      // segment is a page (e.g. /product), not a language. The /ar SEO entry is
      // handled explicitly in App via the router.
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Normalize regional locale codes (e.g. en-GB → en, ar-SA → ar) so that
// strict equality checks like `i18n.language === 'ar'` work consistently.
const base = i18n.language?.split('-')[0];
if (base && ['en', 'ar'].includes(base) && base !== i18n.language) {
  i18n.changeLanguage(base);
}

// Update document metadata based on language
const updateMeta = (lng: string) => {
  const isAr = lng === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.title = isAr
    ? 'رؤية — برمجيات وذكاء اصطناعي في خدمة الإنسان'
    : 'Royah — Smart Software & AI, built to serve people';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', isAr
      ? 'تصمّم رؤية برمجيات وذكاءً اصطناعياً متصلاً وذكياً يجعل العمل والحياة اليومية أبسط وأذكى وأكثر جاهزية للمستقبل.'
      : 'Royah designs intelligent, connected software and AI that make work and everyday life simpler, smarter, and ready for what\'s next.');
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', document.title);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', document.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  const desc = metaDesc?.getAttribute('content') || '';
  if (ogDesc) ogDesc.setAttribute('content', desc);
  if (twDesc) twDesc.setAttribute('content', desc);

  // Update canonical URL based on language
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = isAr ? 'https://www.royah.om/ar' : 'https://www.royah.om/';
    document.head.appendChild(link);
  }
};

updateMeta(i18n.language);
i18n.on('languageChanged', updateMeta);

export default i18n;

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
        product: "Product",
        about: "About",
        contact: "Contact"
      },
      // Inner page headers
      pages: {
        product: {
          eyebrow: "Our flagship product",
          title: "Royah Property",
          subtitle: "Property & building management software that takes owners off paper — bilingual, automated, and already running in real businesses."
        },
        about: {
          eyebrow: "About Royah",
          title: "We turn paper into software.",
          subtitle: "Royah is a software company on a mission: to take businesses off paper and into the age of AI — built by an engineer who specializes in artificial intelligence, and aligned with Oman Vision 2040."
        }
      },
      // Home product teaser
      productTeaser: {
        tag: "Our flagship product",
        title: "Meet Royah Property",
        desc: "The bilingual app that runs property and rent management end to end — tenants, contracts, payments, and reminders. Already live in real businesses.",
        cta: "Explore the product"
      },
      // Final call to action
      finalCta: {
        title: "Ready to get off paper?",
        desc: "Tell us about your business and we'll show you exactly how Royah can help.",
        button: "Talk to us"
      },
      // Hero Section
      hero: {
        badge: "Aligned with Oman Vision 2040",
        headline: "We take businesses off paper —",
        headlineAccent: "and into the age of AI.",
        subheadline: "Royah builds the software that runs real businesses: billing, tenants, payments and operations — bilingual, reliable, and AI-ready.",
        ctaPrimary: "See our product",
        ctaSecondary: "Talk to us",
        trust: "Running in live production today"
      },
      // Problem Section
      problem: {
        tag: "The reality on the ground",
        title: "Most businesses still run on paper.",
        subtitle: "Notebooks, WhatsApp messages, and scattered Excel sheets. It works — until it doesn't.",
        points: {
          paper: {
            title: "Data lives on paper",
            description: "Records in notebooks and chats get lost, forgotten, or duplicated."
          },
          manual: {
            title: "Billing is manual",
            description: "Invoices and payments tracked by hand cost hours and invite mistakes."
          },
          blind: {
            title: "No clear picture",
            description: "Without a system, owners can't see income, debts, or what's really happening."
          }
        }
      },
      // What We Do
      whatWeDo: {
        tag: "What we do",
        title: "Software built for how businesses actually work.",
        subtitle: "We focus on the operational software small and medium businesses need — and make it smart with AI.",
        items: {
          software: {
            title: "Business Software",
            description: "Custom systems for the work that runs your business — billing, tenants, payments, orders and reporting.",
            features: ["Billing & invoicing", "Tenant & customer records", "Payments & reminders", "Dashboards & reports"]
          },
          ai: {
            title: "AI Solutions",
            description: "Practical AI that saves real time — Arabic chatbots, document and data automation, and smart insights.",
            features: ["Arabic & English chatbots", "Document automation", "Data insights", "Smart assistants"]
          },
          strategy: {
            title: "Digital Strategy",
            description: "We help you plan the move from paper to digital — what to build, in what order, and how it pays off.",
            features: ["Digital roadmap", "Process review", "System design", "Vision 2040 alignment"]
          }
        }
      },
      // Flagship Product
      product: {
        tag: "Our flagship product",
        name: "Royah Property",
        tagline: "Property & building management, done right.",
        description: "Everything a property owner needs in one bilingual app: track units and tenants, generate rent schedules automatically, record payments, flag overdue rent, and see your income at a glance — with one-tap WhatsApp reminders.",
        cta: "Request a demo",
        live: "Live & in use",
        features: {
          units: { title: "Units & tenants", description: "Track every shop or apartment, its rent, and who occupies it." },
          contracts: { title: "Smart contracts", description: "Save a contract and the full payment schedule is generated for you." },
          payments: { title: "Payments & reminders", description: "Record payments, auto-flag overdue rent, send WhatsApp reminders in one tap." },
          dashboard: { title: "Owner dashboard", description: "Expected income, collected, outstanding, occupancy — all in one view." }
        }
      },
      // Impact / metrics
      impact: {
        tag: "Real results, not promises",
        title: "Already working in real businesses.",
        subtitle: "We don't just talk about digital transformation — we ship it.",
        stats: {
          customers: { value: "350+", label: "customers billed in live production" },
          production: { value: "100%", label: "bilingual — Arabic & English, by default" },
          paper: { value: "0", label: "paper notebooks needed" },
          uptime: { value: "24/7", label: "systems running in real businesses" }
        }
      },
      // Why Royah
      why: {
        tag: "Why Royah",
        title: "Built by an engineer who specializes in AI.",
        description: "Royah is led by a software engineer with a Master's degree in Artificial Intelligence. That means the software you get isn't just functional — it's built to be intelligent, reliable, and ready for what's next.",
        points: {
          ai: { title: "AI expertise", description: "A Master's in AI — rare in the region — built into every product we make." },
          oman: { title: "Made for Oman", description: "Bilingual, RTL-first, and shaped around how local businesses really operate." },
          lasting: { title: "Built to last", description: "Production-grade engineering: secure, maintainable, and ready to grow with you." }
        }
      },
      // Vision 2040
      vision: {
        tag: "Our bigger purpose",
        title: "Oman Vision 2040 starts on the ground.",
        body: "Oman aims to grow its digital economy from about 2% to 10% of GDP. That doesn't happen in boardrooms alone — it happens one business at a time, as each one moves from paper to software. That's the work we do, every day.",
        stat: "2% → 10%",
        statLabel: "target share of the digital economy in Oman's GDP by 2040",
        note: "Every business we digitize is a step toward that national goal."
      },
      // Process
      process: {
        tag: "How we work",
        title: "A simple path from paper to product.",
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
        title: "Ready to get off paper?",
        subtitle: "Tell us about your business and we'll show you exactly how Royah can help.",
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
        description: "Royah builds the software that takes Omani businesses off paper and into the age of AI — bilingual, reliable, and aligned with Oman Vision 2040.",
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
        tagline: "Digitizing Oman's businesses, one at a time."
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        product: "المنتج",
        about: "من نحن",
        contact: "تواصل معنا"
      },
      // Inner page headers
      pages: {
        product: {
          eyebrow: "منتجنا الرئيسي",
          title: "رؤية العقار",
          subtitle: "برنامج لإدارة العقارات والمباني ينقل الملّاك من الورق — بلغتين، ومؤتمت، ويعمل فعلاً في أعمال حقيقية."
        },
        about: {
          eyebrow: "عن رؤية",
          title: "نحوّل الورق إلى برمجيات.",
          subtitle: "رؤية شركة برمجيات برسالة واضحة: نقل الأعمال من الورق إلى عصر الذكاء الاصطناعي — بناءً على يد مهندس متخصص في الذكاء الاصطناعي، وبانسجام مع رؤية عُمان ٢٠٤٠."
        }
      },
      // Home product teaser
      productTeaser: {
        tag: "منتجنا الرئيسي",
        title: "تعرّف على رؤية العقار",
        desc: "التطبيق ثنائي اللغة الذي يُدير العقارات والإيجارات من البداية إلى النهاية — المستأجرون والعقود والمدفوعات والتذكيرات. يعمل فعلاً في أعمال حقيقية.",
        cta: "استكشف المنتج"
      },
      // Final call to action
      finalCta: {
        title: "مستعد لترك الورق؟",
        desc: "أخبرنا عن عملك وسنُريك بالضبط كيف يمكن لرؤية أن تساعدك.",
        button: "تحدّث معنا"
      },
      // Hero Section
      hero: {
        badge: "منسجمون مع رؤية عُمان ٢٠٤٠",
        headline: "ننقل الأعمال من الورق —",
        headlineAccent: "إلى عصر الذكاء الاصطناعي.",
        subheadline: "تبني رؤية البرمجيات التي تُدير الأعمال الحقيقية: الفوترة والمستأجرين والمدفوعات والعمليات — بلغتين، بموثوقية، وجاهزة للذكاء الاصطناعي.",
        ctaPrimary: "شاهد منتجنا",
        ctaSecondary: "تحدّث معنا",
        trust: "يعمل فعلياً في بيئة إنتاج حقيقية"
      },
      // Problem Section
      problem: {
        tag: "الواقع على الأرض",
        title: "معظم الأعمال لا تزال تُدار بالورق.",
        subtitle: "دفاتر، ورسائل واتساب، وجداول إكسل متفرقة. تنجح الأمور… حتى تتعطّل.",
        points: {
          paper: {
            title: "البيانات على الورق",
            description: "السجلات في الدفاتر والمحادثات تضيع أو تُنسى أو تتكرّر."
          },
          manual: {
            title: "الفوترة يدوية",
            description: "تتبّع الفواتير والمدفوعات يدوياً يكلّف ساعات ويفتح باب الأخطاء."
          },
          blind: {
            title: "لا صورة واضحة",
            description: "بلا نظام، لا يستطيع صاحب العمل رؤية الدخل أو الديون أو ما يجري فعلاً."
          }
        }
      },
      // What We Do
      whatWeDo: {
        tag: "ماذا نقدّم",
        title: "برمجيات مصمّمة لطريقة عمل الأعمال فعلاً.",
        subtitle: "نركّز على البرمجيات التشغيلية التي تحتاجها الأعمال الصغيرة والمتوسطة — ونجعلها ذكية بالذكاء الاصطناعي.",
        items: {
          software: {
            title: "برمجيات الأعمال",
            description: "أنظمة مخصصة للعمل الذي يُدير نشاطك — الفوترة والمستأجرون والمدفوعات والطلبات والتقارير.",
            features: ["الفوترة والإيصالات", "سجلات المستأجرين والعملاء", "المدفوعات والتذكيرات", "لوحات ومعلومات وتقارير"]
          },
          ai: {
            title: "حلول الذكاء الاصطناعي",
            description: "ذكاء اصطناعي عملي يوفّر وقتاً حقيقياً — روبوتات محادثة عربية، وأتمتة المستندات والبيانات، ورؤى ذكية.",
            features: ["روبوتات محادثة عربية وإنجليزية", "أتمتة المستندات", "رؤى من البيانات", "مساعدون أذكياء"]
          },
          strategy: {
            title: "الاستراتيجية الرقمية",
            description: "نساعدك في التخطيط للانتقال من الورق إلى الرقمنة — ماذا تبني، وبأي ترتيب، وكيف يعود عليك بالنفع.",
            features: ["خارطة طريق رقمية", "مراجعة العمليات", "تصميم الأنظمة", "الانسجام مع رؤية ٢٠٤٠"]
          }
        }
      },
      // Flagship Product
      product: {
        tag: "منتجنا الرئيسي",
        name: "رؤية العقار",
        tagline: "إدارة العقارات والمباني… كما ينبغي.",
        description: "كل ما يحتاجه مالك العقار ضمن تطبيق واحد بلغتين: تتبّع الوحدات والمستأجرين، توليد جداول الإيجار تلقائياً، تسجيل المدفوعات، تنبيه المتأخرات، ورؤية دخلك بنظرة واحدة — مع تذكيرات واتساب بضغطة واحدة.",
        cta: "اطلب عرضاً توضيحياً",
        live: "يعمل وقيد الاستخدام",
        features: {
          units: { title: "الوحدات والمستأجرون", description: "تتبّع كل محل أو شقة، وإيجارها، ومن يشغلها." },
          contracts: { title: "عقود ذكية", description: "احفظ العقد ليُولَّد لك جدول المدفوعات كاملاً." },
          payments: { title: "المدفوعات والتذكيرات", description: "سجّل المدفوعات، ونبّه المتأخرات تلقائياً، وأرسل تذكير واتساب بضغطة." },
          dashboard: { title: "لوحة المالك", description: "الدخل المتوقع، والمحصّل، والمتبقّي، ونسبة الإشغال — في شاشة واحدة." }
        }
      },
      // Impact / metrics
      impact: {
        tag: "نتائج حقيقية، لا وعود",
        title: "تعمل بالفعل في أعمال حقيقية.",
        subtitle: "نحن لا نتحدّث عن التحوّل الرقمي فحسب — بل ننفّذه.",
        stats: {
          customers: { value: "+٣٥٠", label: "عميل تُحتسب فواتيرهم في بيئة إنتاج فعلية" },
          production: { value: "١٠٠٪", label: "بالعربية والإنجليزية، تلقائياً" },
          paper: { value: "٠", label: "دفاتر ورقية مطلوبة" },
          uptime: { value: "٢٤/٧", label: "أنظمة تعمل في أعمال حقيقية" }
        }
      },
      // Why Royah
      why: {
        tag: "لماذا رؤية",
        title: "بناء مهندس متخصّص في الذكاء الاصطناعي.",
        description: "تقود رؤيةَ مهندسُ برمجيات حاصل على ماجستير في الذكاء الاصطناعي. هذا يعني أن البرمجيات التي تحصل عليها ليست وظيفية فحسب — بل مبنية لتكون ذكية وموثوقة وجاهزة للمستقبل.",
        points: {
          ai: { title: "خبرة في الذكاء الاصطناعي", description: "ماجستير في الذكاء الاصطناعي — نادر في المنطقة — في صميم كل منتج نصنعه." },
          oman: { title: "مصمَّمة لعُمان", description: "بلغتين، وبأولوية للكتابة من اليمين، ومبنية حول طريقة عمل الأعمال المحلية." },
          lasting: { title: "مبنية لتدوم", description: "هندسة بمستوى الإنتاج: آمنة، وقابلة للصيانة، وجاهزة للنمو معك." }
        }
      },
      // Vision 2040
      vision: {
        tag: "غايتنا الأكبر",
        title: "رؤية عُمان ٢٠٤٠ تبدأ من الأرض.",
        body: "تستهدف عُمان رفع مساهمة الاقتصاد الرقمي من نحو ٢٪ إلى ١٠٪ من الناتج المحلي. وهذا لا يحدث في قاعات الاجتماعات وحدها — بل عملاً تلو الآخر، مع انتقال كلٍّ منها من الورق إلى البرمجيات. هذا ما نفعله كل يوم.",
        stat: "٢٪ ← ١٠٪",
        statLabel: "حصة الاقتصاد الرقمي المستهدفة من الناتج المحلي بحلول ٢٠٤٠",
        note: "كل عمل نُرقمنه خطوة نحو هذا الهدف الوطني."
      },
      // Process
      process: {
        tag: "كيف نعمل",
        title: "مسار بسيط من الورق إلى المنتج.",
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
        title: "هل أنت مستعد لترك الورق؟",
        subtitle: "أخبرنا عن عملك وسنُريك بالضبط كيف يمكن لرؤية أن تساعدك.",
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
        description: "تبني رؤية البرمجيات التي تنقل الأعمال العُمانية من الورق إلى عصر الذكاء الاصطناعي — بلغتين، وبموثوقية، وبانسجام مع رؤية عُمان ٢٠٤٠.",
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
        tagline: "نُرقمن أعمال عُمان… عملاً تلو الآخر."
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
    ? 'رؤية - برمجيات وحلول ذكاء اصطناعي للأعمال العُمانية'
    : 'Royah - Software & AI for Omani Businesses';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', isAr
      ? 'تبني رؤية البرمجيات التي تنقل الأعمال العُمانية من الورق إلى عصر الذكاء الاصطناعي: الفوترة وإدارة العقارات والمدفوعات — بلغتين ومنسجمة مع رؤية عُمان ٢٠٤٠.'
      : 'Royah builds the software that takes Omani businesses off paper and into the age of AI: billing, property management, and payments — bilingual and aligned with Oman Vision 2040.');
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

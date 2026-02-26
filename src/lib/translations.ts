export type Language = "en" | "ar" | "darija";

export const languageNames: Record<Language, string> = {
  en: "English",
  ar: "العربية",
  darija: "Darija",
};

export const isRTL = (lang: Language) => lang === "ar";

export type TranslationKeys = {
  nav: {
    title: string;
    home: string;
    topics: string;
    quiz: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaQuiz: string;
  };
  topics: {
    sectionTitle: string;
    sectionSubtitle: string;
    readMore: string;
    collapse: string;
    socialMedia: {
      title: string;
      summary: string;
      tips: string[];
    };
    phishing: {
      title: string;
      summary: string;
      tips: string[];
    };
    privacy: {
      title: string;
      summary: string;
      tips: string[];
    };
    hygiene: {
      title: string;
      summary: string;
      tips: string[];
    };
  };
  quiz: {
    sectionTitle: string;
    sectionSubtitle: string;
    startBtn: string;
    nextBtn: string;
    resultTitle: string;
    resultGood: string;
    resultOk: string;
    resultBad: string;
    restartBtn: string;
    questionOf: string;
    questions: {
      q: string;
      options: string[];
      correct: number;
      explanation: string;
    }[];
  };
  footer: {
    tagline: string;
    rights: string;
  };
  theme: {
    light: string;
    dark: string;
  };
};

const en: TranslationKeys = {
  nav: {
    title: "CyberShield",
    home: "Home",
    topics: "Topics",
    quiz: "Quiz",
  },
  hero: {
    badge: "Your Digital Safety Companion",
    title: "Master Your Digital Security",
    subtitle: "Expert guidance to protect your digital life. Learn actionable strategies against modern cyber threats with interactive, easy-to-digest lessons.",
    cta: "Explore Topics",
    ctaQuiz: "Take the Quiz",
  },
  topics: {
    sectionTitle: "Security Topics",
    sectionSubtitle: "Deep-dive into essential cybersecurity domains with expert-level guidance",
    readMore: "Read More",
    collapse: "Show Less",
    socialMedia: {
      title: "Social Media Hardening",
      summary: "Lock down your WhatsApp, Facebook, and Instagram accounts with proven security configurations that most users overlook.",
      tips: [
        "WhatsApp: Enable two-step verification under Settings → Account. This adds a PIN that prevents someone from registering your number on another device.",
        "Facebook: Activate Login Alerts and review 'Where You're Logged In' monthly. Remove any sessions you don't recognize immediately.",
        "Instagram: Switch to a Professional account to access login activity logs. Revoke access to suspicious third-party apps under Settings → Security → Apps and Websites.",
        "All platforms: Never click 'Login with Facebook/Google' on untrusted sites—this grants them access to your profile data and email.",
        "Review your privacy settings quarterly. Platforms frequently reset preferences after updates, re-exposing your data.",
      ],
    },
    phishing: {
      title: "Modern Phishing Defense",
      summary: "AI-generated scams are nearly indistinguishable from legitimate messages. Learn to identify the subtle red flags that give them away.",
      tips: [
        "AI-generated emails now mimic corporate tone perfectly. Always verify the sender's actual email domain—not just the display name.",
        "Hover over links before clicking. Legitimate URLs match the company domain exactly. Watch for subtle misspellings like 'micros0ft.com' or 'g00gle.com'.",
        "Voice phishing (vishing) uses AI-cloned voices. If someone calls claiming to be your bank, hang up and call the official number yourself.",
        "QR code phishing (quishing) is rising. Never scan QR codes from untrusted sources—they can redirect to credential-harvesting pages.",
        "SMS phishing (smishing) creates urgency. Legitimate companies never ask you to 'verify your account immediately' via text message.",
      ],
    },
    privacy: {
      title: "Privacy Shields",
      summary: "Build a multi-layered privacy defense using VPNs, browser hardening, and strategic app permission management.",
      tips: [
        "Use a reputable VPN (WireGuard-based like Mullvad or ProtonVPN) on public WiFi. Free VPNs often sell your browsing data—the product is you.",
        "Browser: Install uBlock Origin and enable Firefox's Enhanced Tracking Protection (Strict mode). This blocks 90%+ of trackers.",
        "Audit app permissions monthly. Most apps don't need access to your camera, microphone, or location. Revoke unnecessary permissions.",
        "Use separate email addresses: one for important accounts, one for newsletters/signups. This limits damage from data breaches.",
        "Enable DNS-over-HTTPS in your browser settings to prevent your ISP from monitoring your browsing activity, you can see more about 'http' in youtube.",
      ],
    },
    hygiene: {
      title: "Digital Hygiene",
      summary: "Build unbreakable security habits with 2FA, password managers, and encrypted backups that protect your most sensitive data.",
      tips: [
        "Use a password manager (Bitwarden or 1Password). Generate unique 20+ character passwords for every account. Never reuse passwords.",
        "Enable 2FA everywhere, but prefer authenticator apps (Aegis, Authy) over SMS. SIM-swapping attacks can intercept SMS codes.",
        "Create encrypted backups of critical data using VeraCrypt or your OS's built-in encryption. Store one copy offline (USB drive in a safe place).",
        "Enable full-disk encryption: BitLocker (Windows), FileVault (Mac), LUKS (Linux). If your device is stolen, your data stays protected.",
        "Schedule a monthly 'security audit': check for breached credentials at haveibeenpwned.com, update critical passwords, and review account activity.",
      ],
    },
  },
  quiz: {
    sectionTitle: "Cyber-Hero vs Hacker",
    sectionSubtitle: "Test your digital safety knowledge and discover your security score",
    startBtn: "Start Quiz",
    nextBtn: "Next Question",
    resultTitle: "Your Security Score",
    resultGood: "🛡️ Cyber Hero! You have excellent security awareness. Keep it up!",
    resultOk: "⚠️ Getting There! You know the basics but there's room for improvement.",
    resultBad: "🚨 Vulnerable! Your digital safety needs serious attention. Review the topics above.",
    restartBtn: "Retake Quiz",
    questionOf: "of",
    questions: [
      {
        q: "What is the safest form of Two-Factor Authentication?",
        options: ["SMS codes", "Authenticator app", "Email verification", "Security questions"],
        correct: 1,
        explanation: "Authenticator apps generate time-based codes locally, making them immune to SIM-swapping attacks that can intercept SMS codes.",
      },
      {
        q: "You receive an urgent email from your bank. What should you do first?",
        options: ["Click the link to check your account", "Reply with your account details", "Check the sender's actual email domain", "Forward it to friends for advice"],
        correct: 2,
        explanation: "Always verify the sender's actual email domain. Phishing emails use display names that look legitimate but the actual domain reveals the scam.",
      },
      {
        q: "Which is the most secure password practice?",
        options: ["Using your birthday with symbols", "One strong password for all accounts", "Unique passwords via a password manager", "Writing passwords in a notebook"],
        correct: 2,
        explanation: "A password manager generates and stores unique, complex passwords for each account. If one account is breached, others remain safe.",
      },
      {
        q: "What does a VPN actually protect you from?",
        options: ["All viruses and malware", "Network eavesdropping on public WiFi", "Being tracked by any website", "Getting hacked by anyone"],
        correct: 1,
        explanation: "A VPN encrypts your traffic between your device and the VPN server, preventing eavesdropping on public networks. It doesn't protect against malware or all tracking.",
      },
      {
        q: "An AI-cloned voice calls you pretending to be a family member in trouble. What's the best response?",
        options: ["Send money immediately", "Ask personal questions only they'd know", "Hang up and call them on their known number", "Post about it on social media"],
        correct: 2,
        explanation: "AI voice cloning is increasingly realistic. The safest approach is to hang up and independently verify by calling the person on their known number.",
      },
      {
        q: "How often should you audit your app permissions?",
        options: ["Never, they're fine as set", "Once a year", "Monthly", "Only when something seems wrong"],
        correct: 2,
        explanation: "Monthly audits catch apps that gained new permissions through updates. Many apps request more access than they need over time.",
      },
    ],
  },
  footer: {
    tagline: "Made by Nizar.",
    rights: "School project",
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
};

const ar: TranslationKeys = {
  nav: {
    title: "سايبر شيلد",
    home: "الرئيسية",
    topics: "المواضيع",
    quiz: "الاختبار",
  },
  hero: {
    badge: "رفيقك في السلامة الرقمية",
    title: "أتقن أمانك الرقمي",
    subtitle: "إرشادات متخصصة لحماية حياتك الرقمية. تعلّم استراتيجيات فعّالة ضد التهديدات السيبرانية الحديثة.",
    cta: "استكشف المواضيع",
    ctaQuiz: "ابدأ الاختبار",
  },
  topics: {
    sectionTitle: "مواضيع الأمان",
    sectionSubtitle: "تعمّق في مجالات الأمن السيبراني الأساسية مع إرشادات متخصصة",
    readMore: "اقرأ المزيد",
    collapse: "عرض أقل",
    socialMedia: {
      title: "تأمين وسائل التواصل الاجتماعي",
      summary: "قم بتأمين حساباتك على واتساب وفيسبوك وإنستغرام بإعدادات أمان مثبتة يتجاهلها معظم المستخدمين.",
      tips: [
        "واتساب: فعّل التحقق بخطوتين من الإعدادات → الحساب. هذا يضيف رمز PIN يمنع أي شخص من تسجيل رقمك على جهاز آخر.",
        "فيسبوك: فعّل تنبيهات تسجيل الدخول وراجع 'أين سجلت دخولك' شهرياً. أزل أي جلسات لا تتعرف عليها فوراً.",
        "إنستغرام: حوّل إلى حساب احترافي للوصول إلى سجلات نشاط تسجيل الدخول.",
        "جميع المنصات: لا تنقر أبداً على 'تسجيل الدخول بفيسبوك/غوغل' في مواقع غير موثوقة.",
        "راجع إعدادات الخصوصية كل ثلاثة أشهر. المنصات تعيد ضبط التفضيلات بعد التحديثات.",
      ],
    },
    phishing: {
      title: "الدفاع ضد التصيد الحديث",
      summary: "عمليات الاحتيال المولّدة بالذكاء الاصطناعي تكاد لا تُميَّز عن الرسائل المشروعة. تعلّم تحديد العلامات الدقيقة.",
      tips: [
        "رسائل البريد المولّدة بالذكاء الاصطناعي تحاكي النبرة المؤسسية بشكل مثالي. تحقق دائماً من نطاق البريد الفعلي للمرسل.",
        "مرّر فوق الروابط قبل النقر. عناوين URL المشروعة تطابق نطاق الشركة تماماً.",
        "التصيد الصوتي يستخدم أصوات مستنسخة بالذكاء الاصطناعي. أغلق الخط واتصل بالرقم الرسمي بنفسك.",
        "التصيد عبر رموز QR في تزايد. لا تمسح رموز QR من مصادر غير موثوقة.",
        "التصيد عبر الرسائل النصية يخلق شعوراً بالإلحاح. الشركات المشروعة لا تطلب 'التحقق الفوري' عبر الرسائل.",
      ],
    },
    privacy: {
      title: "دروع الخصوصية",
      summary: "ابنِ دفاعاً متعدد الطبقات للخصوصية باستخدام VPN وتقوية المتصفح وإدارة أذونات التطبيقات.",
      tips: [
        "استخدم VPN موثوق على شبكات WiFi العامة. خدمات VPN المجانية غالباً تبيع بيانات تصفحك.",
        "المتصفح: ثبّت uBlock Origin وفعّل حماية التتبع المحسّنة في فايرفوكس.",
        "دقّق في أذونات التطبيقات شهرياً. معظم التطبيقات لا تحتاج الوصول لكاميرتك أو ميكروفونك.",
        "استخدم عناوين بريد منفصلة: واحد للحسابات المهمة وآخر للنشرات والتسجيلات.",
        "فعّل DNS-over-HTTPS في إعدادات المتصفح لمنع مزود الإنترنت من مراقبة نشاط تصفحك.",
      ],
    },
    hygiene: {
      title: "النظافة الرقمية",
      summary: "ابنِ عادات أمنية لا تُكسر مع المصادقة الثنائية ومديري كلمات المرور والنسخ الاحتياطية المشفرة.",
      tips: [
        "استخدم مدير كلمات مرور. أنشئ كلمات مرور فريدة بأكثر من 20 حرفاً لكل حساب.",
        "فعّل المصادقة الثنائية في كل مكان، ولكن فضّل تطبيقات المصادقة على الرسائل النصية.",
        "أنشئ نسخاً احتياطية مشفرة للبيانات الحرجة باستخدام VeraCrypt أو تشفير النظام المدمج.",
        "فعّل تشفير القرص الكامل: BitLocker أو FileVault أو LUKS.",
        "جدوِل 'تدقيق أمني' شهري: تحقق من الاختراقات وحدّث كلمات المرور وراجع نشاط الحسابات.",
      ],
    },
  },
  quiz: {
    sectionTitle: "بطل سيبراني أم هاكر؟",
    sectionSubtitle: "اختبر معرفتك بالسلامة الرقمية واكتشف درجة أمانك",
    startBtn: "ابدأ الاختبار",
    nextBtn: "السؤال التالي",
    resultTitle: "درجة أمانك",
    resultGood: "🛡️ بطل سيبراني! لديك وعي أمني ممتاز. استمر!",
    resultOk: "⚠️ في الطريق! تعرف الأساسيات لكن هناك مجال للتحسين.",
    resultBad: "🚨 معرّض للخطر! سلامتك الرقمية تحتاج اهتماماً جدياً.",
    restartBtn: "أعد الاختبار",
    questionOf: "من",
    questions: [
      {
        q: "ما هو أكثر أشكال المصادقة الثنائية أماناً؟",
        options: ["رموز SMS", "تطبيق المصادقة", "التحقق بالبريد", "أسئلة الأمان"],
        correct: 1,
        explanation: "تطبيقات المصادقة تولّد رموزاً محلية، مما يجعلها محصنة ضد هجمات استبدال بطاقة SIM.",
      },
      {
        q: "تلقيت بريداً عاجلاً من بنكك. ماذا تفعل أولاً؟",
        options: ["انقر على الرابط", "أرسل تفاصيل حسابك", "تحقق من نطاق المرسل", "أعد توجيهه للأصدقاء"],
        correct: 2,
        explanation: "تحقق دائماً من نطاق البريد الفعلي للمرسل. رسائل التصيد تستخدم أسماء عرض تبدو مشروعة.",
      },
      {
        q: "ما هي أفضل ممارسة لكلمات المرور؟",
        options: ["استخدام تاريخ ميلادك", "كلمة مرور واحدة قوية", "كلمات فريدة عبر مدير", "كتابتها في دفتر"],
        correct: 2,
        explanation: "مدير كلمات المرور ينشئ ويخزن كلمات مرور فريدة ومعقدة لكل حساب.",
      },
      {
        q: "ممّ يحميك VPN فعلاً؟",
        options: ["جميع الفيروسات", "التنصت على WiFi العام", "التتبع من أي موقع", "الاختراق من أي شخص"],
        correct: 1,
        explanation: "VPN يشفّر حركة المرور بين جهازك وخادم VPN، مما يمنع التنصت على الشبكات العامة.",
      },
      {
        q: "صوت مستنسخ بالذكاء الاصطناعي يتصل بك متظاهراً أنه أحد أفراد عائلتك. ما أفضل استجابة؟",
        options: ["أرسل المال فوراً", "اسأل أسئلة شخصية", "أغلق واتصل برقمهم المعروف", "انشر عنه في السوشال ميديا"],
        correct: 2,
        explanation: "استنساخ الصوت بالذكاء الاصطناعي واقعي بشكل متزايد. الأكثر أماناً هو الإغلاق والتحقق بالاتصال المستقل.",
      },
      {
        q: "كم مرة يجب أن تدقق في أذونات التطبيقات؟",
        options: ["أبداً", "مرة في السنة", "شهرياً", "عندما يبدو شيء خاطئاً فقط"],
        correct: 2,
        explanation: "التدقيق الشهري يكشف التطبيقات التي حصلت على أذونات جديدة من خلال التحديثات.",
      },
    ],
  },
  footer: {
    tagline: "مصنوع من نزار",
    rights: "مشروع مدرسي",
  },
  theme: {
    light: "فاتح",
    dark: "داكن",
  },
};

const darija: TranslationKeys = {
  nav: {
    title: "CyberShield",
    home: "sf7a dl home",
    topics: "lmawadi3",
    quiz: "i5tibar",
  },
  hero: {
    badge: "sa7bk fsalama ra9amiya",
    title: "zid salamtk ra9amiya",
    subtitle: "irxadat ta7mi salamtk ra9amiya, t3lm wo w3a",
    cta: "istakxif",
    ctaQuiz: "bda li5tibar",
  },
  topics: {
    sectionTitle: "mawadi3 l aman",
    sectionSubtitle: "9ra 3la lmawadi3 dl aman ra9mi, m3a irxadat lik",
    readMore: "9ra ktr",
    collapse: "n9s",
    socialMedia: {
      title: "amn rask fl social media",
      summary: "amn rask fl applications, wtb3 had nasa2i7 li ky4flo elihom lusers la5rin",
      tips: ["5ask dima t7di rask wtra9b accounts dyalk, wdima b9a mjhol", "lkolxi: dima 7di rask w5li l accounts dyalk msta9lin, bax ida tdrr xi account mytdrrox la5rin m3ah", "Instagram: b9a mla7d naxat dyal l accounts dyalk bi intidam, wdayman ssn3 password li 9wi ws3ib yt5mn", "Facebook: raj3 sijil dyal login dyalk wmsh ay haja mxkok fiha", "WhatsApp: f3l wahd lhaja smitha '2FA' whadi ktmn3 ay wahd ysr9 lk nmra ila ida kan 3ndo wahd lcode li kywslk 4ir nta"
      ],
    },

    phishing: {
      title: "difa3 dd nsabin",
      summary: "nsb wla sahl, wli knsmiwh fl cyber security nl 'phishing attack',t3lm kifax thmi rask mnha",
      tips: ["l messagat dl gmail, dima 7di mnha 7it hiya aktr blasa ktw93 fiha had l attack, wdima 9lb 3la ay gmail wslk", "7di mn links li kywslok , 7di mnhom wbzaf wdima 9ra link bax t2kd mno", "ida sona elik xi hd w7siti bxi haja maxi hiya hadik, nixan 9t3 w blocki lmosiba elik", "l QR codes, hado ma mxhorinx wlkn 7di mnhom, wmatswrhomx ila ida knti mt2kd mnhom 1000000%", "ida b4a yhdr m3ak xi hd fxi application li nta ma3arfox, matjawbox. w7ta ida jawbti dima 3tih lma3lomat lkadiba elik."],
    },

    privacy: {
      title: "doro3 dyal l5ososiya",
      summary: "sta3ml hdxi li an9olk bax t7mi rask wt7mi 5ososiytk",
      tips: ["5dm bl VPN dima, rah kaynin VPN's f appstore w7ta playstore, wo 7ta f microsoft store ll pc", "sta3ml applications wo motasafi7at li aminin, matsta3mlx chrome, ista3mil firefox wla brave", "ًxof l applications li kt telechargi wax amnin wmawto9in, wra9b l 7araka dyalhom fl OS dyalk", "ًdir bzaf dl G-mail's w5dm bwahd lkol accounts, wmt3mrx l accounts 3la l gmail, wdarori mn password m39da bhal hadak li kygls lor.", "dima t2kd anak f website 5dam b 'https' bhal lwebsite li kt9ra fih daba, whadi xwiya m39da 3la nas li mkyfhmox wlkn rah kaynin tutorials f youtube 3la xno howa l 'http"],
    },
    hygiene: {
      title: "nadafa ra9amiya daroriya",
      summary: "wlf rask 3la had l 3adat bax 3mrk tkon dahiya sahla",
      tips: ["dima sta5dm passwords li s3ab wb9a 3a9l elihom 4ir nta, mn lafdal ykono ktr mn 20 klma wr9m, wmatst3mlx passwords bhal'abc123' wla 'nizar123' wla '12345678' wla 7ta nmrtk wla 'smiytel+urm' 7it rak ktwli dahiya sahla", "dima 5dm l '2FA' l kna hdrna eliha, wrah kaynin bzaf dl xorohat eliha fyoutube. wla aji swlni wn9olk tutorial 3la 7asab l app li b4iti.", "dima 5od nos5a i7tiyatiya mn data dyalk f ay blasa bhal fl applications wla fl system", "bn nisba ll pc users, dima 5dm taxfir dl hard disk bhal 'bitlocker' li mxhor fl windows OS", "xahriyan b9a traj3 passwords dyalk, wl accounts dyalk, wl jihaz dyalk kaml"],
    },
  },
  quiz: {
    sectionTitle: "wax nta user mo7tarif , wla 4ir m5liha 3la allah?",
    sectionSubtitle: "5tabr l5ibra dyalk fl salama ra9amiya",
    startBtn: "bda",
    nextBtn: "kml so2al tani",
    resultTitle: "daraja dyalk",
    resultGood: "wooow. nta rak nadi wmt5afx ela rask, wlkn zid t3lm ktr 🛡️",
    resultOk: "maxi moxkil, zid 9ri zadk w7di rask ⚠️",
    resultBad: "rak 4a 4adi 3la allah awldi, nta dahiya sahla ll hackers 🚨 ",
    restartBtn: "3awd ",
    questionOf:"mn",
    questions: [
      {
        q: "xno afdl '2FA' methode ?",
        options: ["codes dyal SMS", "l 2FA application", "mn GMAIL", "as2ila dl aman"],
        correct: 1,
        explanation: "l 2FA applications aslan mo5tasin 4ir fl 2FA wmotaxadidin 3lha",
      },
      {
        q: "wslk gmail kytlb flos, xno tdir",
        options: ["t cliquer 3la link li 3atik","t3tih l information dyalk li tlbhom","t9lb ktr 3la l gmail li wslk","tsift l message lshabk (sadi9 wa9t di9, wlkn maxi hna)"],
        correct: 2,
        explanation: "kima knt 9lt lik 9bl, dima ra9b l gmails li kywslok."
      },
      {
        q: "xno afdl tndim ll passwords dyalk",
        options: ["t7t l tari5 lmilad dyalk","tktb 4ir xi password li ttxofo mzyan", "t7t password li ykon mzyan wtb9a tbdlo wtra9bo", "tktbhom fwr9a bax mtnsahomx wsafi"],
        correct: 2,
        explanation: "مدير كلمات المرور ينشئ ويخزن كلمات مرور فريدة ومعقدة لكل حساب.",
      },
      {
        q: "wax l VPN mzyan 100% ?",
        options: ["mzyan dd ga3 l vayrosat", "t5dm bih fl wifi dl 9wahi wdl madaris wl jami3at", "mzyan bax td5l bih lay website","ky5lik dd g3 L hackers"],
        correct: 1,
        explanation: "l VPN mzyan 7it kyxfr l itisal dyalk fl interet, wkyzid wahd taba9a dl himaya li mzyana",
      },
      {
        q: "wslk message wla appele mn wahd mn 3a2ilk wla shabk",
        options: ["tsift lih dkxi li b4a", "tsowlo xi as2ila kt3rfoha 4ir bjoj bax t2kd bli howa rah bsh sahbk wmaxi nsab", "t9t3 wtmxi tswl wax bsh howa dak linsan wla 4ir wahd ky9ldo", "tnxr 3lih fl social media"],
        correct: 2,
        explanation: "nasb bl sot wla sahl, 39lti fax knti z4ir wkano ky9ololk mty9x li ky9olk kn3rf babak? nfs lhaja hna",
      },
      {
        q: "xhal mn mra 5ask tt799 mn l applications li endk?",
        options: ["mt799x aslan", "mra fl 3am", "kol xhr", "4ir fax txof xi haja maxi hiya hadik"],
        correct: 2,
        explanation: "5ask t9lb l application dyalk wl salahiyat dyalhom bax mykonox fa5",
      },
    ],
  },
  footer: {
    tagline: "msno3 mn nizar",
    rights: "project dl mdrasa",
  },
  theme: {
    light: "fat7",
    dark: "mdlm/dakin",
  },
};

export const translations: Record<Language, TranslationKeys> = { en, ar, darija };

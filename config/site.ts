export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mindway Biomedical",
  description:
    "High-Quality Biomedical Equipment to Empower Your Diagnostic Center",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Products",
      href: "/products",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Products",
      href: "/products",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    whatsapp: "https://wa.me/+919108011234",
    instagram:
      "https://www.instagram.com/mindwaybiomedicalspvtltd?igsh=MWZ1MW5oempveXdxOA==",
    fb: "https://www.facebook.com/share/p/VF57k2EfDSKjHnpY/?mibextid=qi2Omg",
  },
  logo: {
    transparent: "/footer-logo.png",
  },
  info: {
    contact: "+919108011234",
    email: "reachus@mindwaybimedicals.com",
    address:
      "436, 5th Cross, 7th Main Rd, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
  },
  hero: {
    header: "Leading the Way",
    headerHighlightText: "in Diagnostic Innovation",
    subheader:
      "High-Quality Biomedical Equipment to Empower Your Diagnostic Center",
    review: {
      review1: {
        by: "From Industry Experts",
        from: "100+",
      },
      review2: {
        by: "From Customers",
        from: "100+",
      },
    },
    action: {
      primary: {
        text: "Explore",
      },
      secondary: {
        text: "Contact Us",
      },
    },
  },

  productCategory: [
    {
      title: "Hematology",
      description:
        "Examine blood, blood diseases, and the organs involved in forming blood.",
      subProducts: [
        {
          category: "Hematology",
          itemName: "Z3 Hematology Analyzer",
          highlightPoints: [
            "User-friendly Experience",
            "One screen display of test result",
            "One button sample aspiration and troubleshooting",
            "Compact Design",
          ],
          description:
            "A new generation 3-diff hematology analyzer tailored for small laboratory",
          imgSrc: "/exi18001.jpg",
          totalReview: "4",
        },
        {
          category: "Hematology",
          itemName: "Z3 CRP Hematology Analyzer",
          highlightPoints: [
            "10.4-inch touch screen+ intuitive navigation menu, bring you user-friendly experience",
            "One button sample aspiration and troubleshooting",
            "Compact Design",
          ],
          description:
            "Compact and portable design leads to spare more space for small labs, clinics and etc.",
          imgSrc: "/z3crp1.png",
          totalReview: "4",
        },
        {
          category: "Hematology",
          itemName: "Z50 Hematology Analyzer",
          highlightPoints: [
            "Tri-angle laser scatter + advanced flow cytometry + chemical dye, create the possibility for better 5-diff WBC differentiation even on samples with high Eosinophil.",
            "Dedicate channel and optical method for Basophil measurement, have a better performance on basophil counting than traditional impedance method.",
            "Multiple smart flags to indicate abnormal blood cell differentiation and morphology.",
          ],
          description:
            "An evolved 5-diff hematology analyzer enable all possibilities in the small laboratories",
          imgSrc: "/z501.png",
          totalReview: "4",
        },
        {
          category: "Hematology",
          itemName: "EXZ 6000 Hematology Analyzer",
          highlightPoints: [
            "Optimized testing process to reduce manual operations",
            "High-definition color touch screen",
            "Capillary blood auto loading, mixing, and sampling",
            "Auto loading reagent information",
          ],
          description:
            "A powerful assistant for micro-volume whole blood automatic detection",
          imgSrc: "/exz60001.png",
          totalReview: "4",
        },
        {
          category: "Hematology",
          itemName: "Hematology Reagent",
          highlightPoints: [],
          description:
            "These hematology reagents are created by professional R&D team, used with our hematology analyzer.",
          imgSrc: "/exz60001.png",
          totalReview: "4",
        },
      ],
    },
    {
      title: "Clinical Chemistry",
      description:
        "Analyze chemical processes and substances in the human body.",
      subProducts: [
        {
          category: "Clinical Chemistry",
          itemName: "EXC 400",
          highlightPoints: [
            "Constant 400 T/H offers a higher efficiency",
            "Bilateral LIS interface allows convenient results transfer",
            "Over 100 original reagents and quality controls ensure reliable and traceable results",
            "Minimum reaction volume and lower water consumption result in cost-effectiveness",
          ],
          description:
            "Chemistry Analyzer An automated floor-standing chemistry analyzer customized for medium throughput laboratories.",
          imgSrc: "exc4001.png",
          totalReview: "4",
        },
        {
          category: "Clinical Chemistry",
          itemName: "EXC 200",
          highlightPoints: [
            "Integrated design combining operation system and analyzer saves more space for small labs, clinics and etc.",
            "Colorful touch screen and intuitive navigation menu offer user-friendly experience",
            "Minimum reaction volume 90μL and lower water consumption result in cost-effectiveness",
            "Bilateral LIS interface allows convenient results transfer",
            "Over 100 original reagents and quality controls ensure reliable and traceable results",
          ],
          description:
            "Chemistry Analyzer An automated desktop chemistry analyzer dedicated for small healthcare institution",
          imgSrc: "exc2001.png",
          totalReview: "4",
        },
        {
          category: "Clinical Chemistry",
          itemName: "Chemical Reagent",
          //Hepatic Panel Renal Panel Lipids Panel Cardiac & Cardiovascular Panel Diabetes Panel Tumor Panel Coagulation Panel
          highlightPoints: [
            "Hepatic Panel , Renal Panel,  Lipids Panel , Cardiac & Cardiovascular Panel,  Diabetes Panel ",
            "Tumor Panel, Coagulation Panel",
            "Specific Proteins Panel, Electrolytes Panel , Inflammation Panel , Pancreatitis Panel",
          ],
          description:
            "To guarantee and control the quality of our products, we has been committed to independent research and development of antigens, antibodies, and other reagents and raw materials.",
          imgSrc: "chemicalReagent1.jpg",
          totalReview: "4",
        },
      ],
    },
    {
      title: "CLIA",
      description: "Ensure quality standards for laboratory testing.",
      subProducts: [
        {
          category: "CLIA",
          itemName: "EXI 1800",
          highlightPoints: [
            "Magnetic separation technical patent",
            "Innovative non-contact vortex mixing technology",
            "Unique constant temperature incubation system",
            "Multi-module integration technology Up to 351 T/H m²",
          ],
          description:
            "Technical innovation, more accurate resullts Magnetic separation patent Non-contact vortex mixing Multi-module integration",
          imgSrc: "/exi18001.jpg",
          totalReview: "4",
        },
        {
          category: "CLIA",
          itemName: "Chemiluminescence",
          //Cardiac Inflammation Thyroid Fertility Tumor markers Diabetes Bone metabolism Gastric Anemia
          highlightPoints: [
            "Cardiac",
            "Inflammation",
            "Thyroid",
            "Fertility",
            "Tumor markers",
          ],
          description:
            "The test menu covers thyroid, fertility, tumor markers, cardiac, inflammation, diabetes, etc.; Constantly innovating, fully meeting the needs of clinical laboratories .",
          imgSrc: "/Chemiluminescence1.jpg",
          totalReview: "4",
        },
      ],
    },
    {
      title: "POCT",
      description: "Perform medical diagnostic testing at the point of care.",
      subProducts: [
        {
          category: "POCT",
          itemName: "Q8 PRO Fluorescence Immunoassay Analyzer",
          highlightPoints: [
            "Disk 25 channels. Multi-language and high efficient",
            "15-inch HD touch screen. Easy to operation",
            "External waste card container. Easy to maintenance",
            "Sample types: serum, plasma and etc. Multi-sample processing",
          ],
          description:
            "Fluorescence based POCT immunoassay system Unique rare earth element fluorescent microsphere labeling technology",
          imgSrc: "/q8pro1.png",
          totalReview: "4",
        },
        {
          category: "POCT",
          itemName: "EXR110/120",
          highlightPoints: [
            "3 Channels. high efficient",
            "1 Step Loading. Easy operation and faster results",
            "8 inch Screen. Intuitive and easy-to-use user interface",
          ],
          description: "Fluorescence Immunochromatgraphy Analyzer",
          imgSrc: "/1201.png",
          totalReview: "4",
        },
      ],
    },
    {
      title: "Urinalysis",
      description:
        "Test and analyze urine to diagnose various medical conditions.",
      subProducts: [
        {
          category: "Urinalysis",
          itemName: "U 3600",
          highlightPoints: [],
          description: "",
          imgSrc: "/u36001.png",
          totalReview: "4",
        },
        {
          category: "Urinalysis",
          itemName: "U 2610/1600",
          highlightPoints: [
            "Intelligent: If the chemistry results are negative, no microscopic analysis is performed",
            "Flexible: No need for a connection bridge to connect machine",
            "Efficient: 150 T/H for Sediment or Chemistry+ Sediment joint detection",
          ],
          description: "Urine Sediment Analyzer Precise and effcient",
          imgSrc: "/u26101.png",
          totalReview: "4",
        },
      ],
    },
    {
      title: "Asterial Blood Gas",
      description:
        "works by analysing a small blood sample taken from an artery",
      subProducts: [],
    },

    {
      title: "Molecular",
      description:
        "Explore the molecular structure and function of biological molecules.",
      subProducts: [
        {
          category: "Molecular",
          itemName: "EXM 6000",
          highlightPoints: [
            "Only 12 min forextraction of 96 samples",
            "Magnetic flux is up to 5500 GS, avoiding the risk of magnetic bead down",
            "Recovery rate of magnetic bead",
            "≤3%ＣV",
          ],
          description:
            "Nucleic acid isolation system EXM6000 is designed as a high-tech instrument to isolate and purify DNA/RNA from various type of samples.",
          imgSrc: "/exm60001.png",
          totalReview: "4",
        },
        {
          category: "Molecular",
          itemName: "EXM 3000 Nucleic Acid Isolation System",
          highlightPoints: [
            "Throughput 1-32",
            "Process volume 30 μL-1000 μL",
            "Recovery rate ≥ 98%",
            "Stability CV ≤ 3%",
            "Pollution control UV sterilization",
            "Filtration HEPA Filter",
            "Dimensions(L*W*H) 375mm*415mm*440mm",
            "Weight 27kg",
          ],
          description:
            "The EXM3000 is designed as a high-tech instrument to isolate and purify the nucleic acid through magnetic bead method featuring more efficient extraction, smaller size and safer operation.",
          imgSrc: "/exm30001.png",
          totalReview: "4",
        },
        {
          category: "Molecular",
          itemName: "Nucleic Acid Extraction Kit",
          highlightPoints: [
            "For the extraction of nucleic acid（DNA/RNA) to be used in PCR, NGS etc.",
            "9 min for extraction of 32 viral samples",
            "One washing step, less loss of nucleic acid, more yield",
            "Stable performance and reliable quality, laying a reliable foundation for the subsequent molecular experiment.",
          ],
          description: "",
          imgSrc: "/extractionkit1.jpg",
          totalReview: "4",
        },
        {
          category: "Molecular",
          itemName: "Detection Kit",
          highlightPoints: [
            "Plan 1: High-throughput Nucleic Acid Isolation system + PCR System",
            "Plan 2: Low-throughput Nucleic Acid Isolation system + PCR System",
            "Plan 3: Manual Extraction + PCR System",
          ],
          description:
            "SARS-CoV-2 Nucleic Acid Detection Kit is designed for qualitative detecting the RNA of SARS-CoV-2 in the samples of nasal/throat swab. For suspected case, suspected cluster case or other cases that require the diagnostic and differential diagnosis of SARS-CoV-2 infection, which helps the clinical diagnosis of the infection of SARS-CoV-2.",
          imgSrc: "/detectionkit1.jpg",
          totalReview: "4",
          highlightHeader: "Available Plans",
        },
        {
          category: "Molecular",
          itemName: "vtm",
          highlightPoints: [
            "Safe and efficient: We add cryoprotectant specially, which is conducive to the long-term preservation of the virus.",
            "Easy operation：Flocked swabs ensure the maximum amount of sample sampling and release.",
            "Multiple specifications： Non- inactivated and inactivated sampling tube, meet your different clinical needs.",
          ],
          description:
            "Disposable Virus Sampling Tube adopts efficient virus inactivation technology and special flocked swab. It can be used for the collection and storage of clinical novel coronavirus, influenza, avian influenza (such as H7N9), hand-foot-mouth virus, measles and other virus specimens, as well as chlamydia, mycoplasma, and ureaplasma.",
          imgSrc: "/vtm1.jpg",
          totalReview: "4",
        },
        {
          category: "Molecular",
          itemName: "ZIP - 96V",
          highlightPoints: ["HIGH THROUGHPUT 96 test per run"],
          description:
            "Quantitative real-time PCR system ZIP-96V is intended to perform fluorescence-based PCR to provide quantitative and qualitative de-tection of nucleic acid sequences in human derived specimens.",
          imgSrc: "/zipv1.png",
          totalReview: "4",
        },
        {
          category: "Molecular",
          itemName: "EXP 160",
          highlightPoints: [
            "≤ 35 mins Operation speed by using Zybio fast detection kit",
            "16 tests/run 2×8 wells",
            "12.5 kg As light as 12.5kg system weight",
          ],
          description:
            "Fast Real-time PCR System EXP160 is an automated ampliﬁcation instrument designed for qualitative and quantitative detection of nucleic acid sequence in human-derived specimens.",
          imgSrc: "/exp1601.png",
          totalReview: "4",
        },
      ],
    },

    {
      title: "Hemostasis",
      description: "Study the process of blood clotting and its disorders.",
      subProducts: [
        {
          category: "Hemostasis",
          itemName: "YX 2000",
          highlightPoints: [
            "PT 320 T/H",
            "Reagent positions onboard. 20 (16 with cooling unit, 4 with room temperature).",
            "APTT/PT/TT/FIB. 132 T/H",
            "Light source . LED, slow decay, maintenance-free.",
            "Sample capacity onboard. 40, and can switch to STAT positions at any time.",
            "Automatic Sample Loading. Support continuous automatic sample loading.",
          ],
          description: "Automated Blood Coagulation Analyzer MOCAP",
          imgSrc: "/yx20001.png",
          totalReview: "4",
        },
        {
          category: "Hemostasis",
          itemName: "YX 3000",
          highlightPoints: [
            "PT 410 T/H",
            "Reagent positions onboard. 39 (35 with cooling unit, 4 with room temperature).",
            "APTT/PT/TT/FIB. 224 T/H",
            "Light source . LED, slow decay, maintenance-free.",
            "Sample capacity onboard. 80, and can switch to STAT positions at any time.",
            "Automatic Sample Loading. Support continuous automatic sample loading.",
          ],
          description: "Automated Blood Coagulation Analyzer",
          imgSrc: "/yx30001.png",
          totalReview: "4",
        },
      ],
    },
    {
      title: "Microbiology",
      description: "Examine and analyze microorganisms with precision.",
      subProducts: [
        // {
        //   category: "Microbiology",
        //   itemName: "EXS 200",
        //   highlightPoints: [
        //     "Rapid Identification Tool ＜1min Target - in/out time 12 min 96 spots tests at one plate",
        //     "High-quality structure and hardware technology",
        //     "Convenient Software Operaion",
        //     "Rich strains database"
        //   ],
        //   description: "Rapid and convenient identification tool for bacteria",
        //   imgSrc : "/exs2001.png",
        //   totalReview: "4"
        // },
        {
          category: "Microbiology",
          itemName: "Microbiology Reagents",
          highlightPoints: [
            "Sample Treatment Matrix Solution",
            "Mold Sample Pretreatment Kit",
            "Blood Culture Positive Sample Pretreatment Kit",
            "Microbe Sample Pretreatment Kit",
          ],
          description:
            "Several pretreatment reagent kits are used to speed up the bacteria pretreatment procedure and improve the accuracy of MALDI-TOF identification results",
          imgSrc: "/mReg1.jpg",
          totalReview: "4",
        },
      ],
    },
    {
      title: "Biomaterial",
      description:
        "Investigate materials used in medical devices and prosthetics.",
      subProducts: [
        {
          category: "Biomaterial",
          itemName: "EXI 1800",
          highlightPoints: [],
          description: "",
          imgSrc: "/bioreagent1.jpg",
          totalReview: "4",
        },
      ],
    },
  ],
  allProducts: [
    {
      category: "Microbiology",
      itemName: "Microbiology Reagents",
      highlightPoints: [
        "Sample Treatment Matrix Solution",
        "Mold Sample Pretreatment Kit",
        "Blood Culture Positive Sample Pretreatment Kit",
        "Microbe Sample Pretreatment Kit",
      ],
      description:
        "Several pretreatment reagent kits are used to speed up the bacteria pretreatment procedure and improve the accuracy of MALDI-TOF identification results",
      imgSrc: "/mReg1.jpg",
      totalReview: "4",
    },
    {
      category: "Molecular",
      itemName: "EXM 6000",
      highlightPoints: [
        "Only 12 min forextraction of 96 samples",
        "Magnetic flux is up to 5500 GS, avoiding the risk of magnetic bead down",
        "Recovery rate of magnetic bead",
        "≤3%ＣV",
      ],
      description:
        "Nucleic acid isolation system EXM6000 is designed as a high-tech instrument to isolate and purify DNA/RNA from various type of samples.",
      imgSrc: "/exm60001.png",
      totalReview: "4",
    },
    {
      category: "Molecular",
      itemName: "EXM 3000 Nucleic Acid Isolation System",
      highlightPoints: [
        "Throughput 1-32",
        "Process volume 30 μL-1000 μL",
        "Recovery rate ≥ 98%",
        "Stability CV ≤ 3%",
        "Pollution control UV sterilization",
        "Filtration HEPA Filter",
        "Dimensions(L*W*H) 375mm*415mm*440mm",
        "Weight 27kg",
      ],
      description:
        "The EXM3000 is designed as a high-tech instrument to isolate and purify the nucleic acid through magnetic bead method featuring more efficient extraction, smaller size and safer operation.",
      imgSrc: "/exm30001.png",
      totalReview: "4",
    },
    {
      category: "Molecular",
      itemName: "Nucleic Acid Extraction Kit",
      highlightPoints: [
        "For the extraction of nucleic acid（DNA/RNA) to be used in PCR, NGS etc.",
        "9 min for extraction of 32 viral samples",
        "One washing step, less loss of nucleic acid, more yield",
        "Stable performance and reliable quality, laying a reliable foundation for the subsequent molecular experiment.",
      ],
      description: "",
      imgSrc: "/extractionkit1.jpg",
      totalReview: "4",
    },
    {
      category: "Molecular",
      itemName: "Detection Kit",
      highlightPoints: [
        "Plan 1: High-throughput Nucleic Acid Isolation system + PCR System",
        "Plan 2: Low-throughput Nucleic Acid Isolation system + PCR System",
        "Plan 3: Manual Extraction + PCR System",
      ],
      description:
        "SARS-CoV-2 Nucleic Acid Detection Kit is designed for qualitative detecting the RNA of SARS-CoV-2 in the samples of nasal/throat swab. For suspected case, suspected cluster case or other cases that require the diagnostic and differential diagnosis of SARS-CoV-2 infection, which helps the clinical diagnosis of the infection of SARS-CoV-2.",
      imgSrc: "/detectionkit1.jpg",
      totalReview: "4",
      highlightHeader: "Available Plans",
    },
    {
      category: "Molecular",
      itemName: "vtm",
      highlightPoints: [
        "Safe and efficient: We add cryoprotectant specially, which is conducive to the long-term preservation of the virus.",
        "Easy operation：Flocked swabs ensure the maximum amount of sample sampling and release.",
        "Multiple specifications： Non- inactivated and inactivated sampling tube, meet your different clinical needs.",
      ],
      description:
        "Disposable Virus Sampling Tube adopts efficient virus inactivation technology and special flocked swab. It can be used for the collection and storage of clinical novel coronavirus, influenza, avian influenza (such as H7N9), hand-foot-mouth virus, measles and other virus specimens, as well as chlamydia, mycoplasma, and ureaplasma.",
      imgSrc: "/vtm1.jpg",
      totalReview: "4",
    },
    {
      category: "Molecular",
      itemName: "ZIP - 96V",
      highlightPoints: ["HIGH THROUGHPUT 96 test per run"],
      description:
        "Quantitative real-time PCR system ZIP-96V is intended to perform fluorescence-based PCR to provide quantitative and qualitative de-tection of nucleic acid sequences in human derived specimens.",
      imgSrc: "/zipv1.png",
      totalReview: "4",
    },
    {
      category: "Molecular",
      itemName: "EXP 160",
      highlightPoints: [
        "≤ 35 mins Operation speed by using Zybio fast detection kit",
        "16 tests/run 2×8 wells",
        "12.5 kg As light as 12.5kg system weight",
      ],
      description:
        "Fast Real-time PCR System EXP160 is an automated ampliﬁcation instrument designed for qualitative and quantitative detection of nucleic acid sequence in human-derived specimens.",
      imgSrc: "/exp1601.png",
      totalReview: "4",
    },
    {
      category: "CLIA",
      itemName: "EXI 1800",
      highlightPoints: [
        "Magnetic separation technical patent",
        "Innovative non-contact vortex mixing technology",
        "Unique constant temperature incubation system",
        "Multi-module integration technology Up to 351 T/H m²",
      ],
      description:
        "Technical innovation, more accurate resullts Magnetic separation patent Non-contact vortex mixing Multi-module integration",
      imgSrc: "/exi18001.jpg",
      totalReview: "4",
    },
    {
      category: "CLIA",
      itemName: "Chemiluminescence",
      //Cardiac Inflammation Thyroid Fertility Tumor markers Diabetes Bone metabolism Gastric Anemia
      highlightPoints: [
        "Cardiac",
        "Inflammation",
        "Thyroid",
        "Fertility",
        "Tumor markers",
      ],
      description:
        "The test menu covers thyroid, fertility, tumor markers, cardiac, inflammation, diabetes, etc.; Constantly innovating, fully meeting the needs of clinical laboratories .",
      imgSrc: "/Chemiluminescence1.jpg",
      totalReview: "4",
    },
    {
      category: "Clinical Chemistry",
      itemName: "EXC 400",
      highlightPoints: [
        "Constant 400 T/H offers a higher efficiency",
        "Bilateral LIS interface allows convenient results transfer",
        "Over 100 original reagents and quality controls ensure reliable and traceable results",
        "Minimum reaction volume and lower water consumption result in cost-effectiveness",
      ],
      description:
        "Chemistry Analyzer An automated floor-standing chemistry analyzer customized for medium throughput laboratories.",
      imgSrc: "exc4001.png",
      totalReview: "4",
    },
    {
      category: "Clinical Chemistry",
      itemName: "EXC 200",
      highlightPoints: [
        "Integrated design combining operation system and analyzer saves more space for small labs, clinics and etc.",
        "Colorful touch screen and intuitive navigation menu offer user-friendly experience",
        "Minimum reaction volume 90μL and lower water consumption result in cost-effectiveness",
        "Bilateral LIS interface allows convenient results transfer",
        "Over 100 original reagents and quality controls ensure reliable and traceable results",
      ],
      description:
        "Chemistry Analyzer An automated desktop chemistry analyzer dedicated for small healthcare institution",
      imgSrc: "exc2001.png",
      totalReview: "4",
    },
    {
      category: "Clinical Chemistry",
      itemName: "Chemical Reagent",
      //Hepatic Panel Renal Panel Lipids Panel Cardiac & Cardiovascular Panel Diabetes Panel Tumor Panel Coagulation Panel
      highlightPoints: [
        "Hepatic Panel , Renal Panel,  Lipids Panel , Cardiac & Cardiovascular Panel,  Diabetes Panel ",
        "Tumor Panel, Coagulation Panel",
        "Specific Proteins Panel, Electrolytes Panel , Inflammation Panel , Pancreatitis Panel",
      ],
      description:
        "To guarantee and control the quality of our products, we has been committed to independent research and development of antigens, antibodies, and other reagents and raw materials.",
      imgSrc: "chemicalReagent1.jpg",
      totalReview: "4",
    },
    {
      category: "POCT",
      itemName: "Q8 PRO Fluorescence Immunoassay Analyzer",
      highlightPoints: [
        "Disk 25 channels. Multi-language and high efficient",
        "15-inch HD touch screen. Easy to operation",
        "External waste card container. Easy to maintenance",
        "Sample types: serum, plasma and etc. Multi-sample processing",
      ],
      description:
        "Fluorescence based POCT immunoassay system Unique rare earth element fluorescent microsphere labeling technology",
      imgSrc: "/q8pro1.png",
      totalReview: "4",
    },
    {
      category: "POCT",
      itemName: "EXR110/120",
      highlightPoints: [
        "3 Channels. high efficient",
        "1 Step Loading. Easy operation and faster results",
        "8 inch Screen. Intuitive and easy-to-use user interface",
      ],
      description: "Fluorescence Immunochromatgraphy Analyzer",
      imgSrc: "/1201.png",
      totalReview: "4",
    },
    {
      category: "Hematology",
      itemName: "Z3 Hematology Analyzer",
      highlightPoints: [
        "User-friendly Experience",
        "One screen display of test result",
        "One button sample aspiration and troubleshooting",
        "Compact Design",
      ],
      description:
        "A new generation 3-diff hematology analyzer tailored for small laboratory",
      imgSrc: "/exi18001.jpg",
      totalReview: "4",
    },
    {
      category: "Hematology",
      itemName: "Z3 CRP Hematology Analyzer",
      highlightPoints: [
        "10.4-inch touch screen+ intuitive navigation menu, bring you user-friendly experience",
        "One button sample aspiration and troubleshooting",
        "Compact Design",
      ],
      description:
        "Compact and portable design leads to spare more space for small labs, clinics and etc.",
      imgSrc: "/z3crp1.png",
      totalReview: "4",
    },
    {
      category: "Hematology",
      itemName: "Z50 Hematology Analyzer",
      highlightPoints: [
        "Tri-angle laser scatter + advanced flow cytometry + chemical dye, create the possibility for better 5-diff WBC differentiation even on samples with high Eosinophil.",
        "Dedicate channel and optical method for Basophil measurement, have a better performance on basophil counting than traditional impedance method.",
        "Multiple smart flags to indicate abnormal blood cell differentiation and morphology.",
      ],
      description:
        "An evolved 5-diff hematology analyzer enable all possibilities in the small laboratories",
      imgSrc: "/z501.png",
      totalReview: "4",
    },
    {
      category: "Hematology",
      itemName: "EXZ 6000 Hematology Analyzer",
      highlightPoints: [
        "Optimized testing process to reduce manual operations",
        "High-definition color touch screen",
        "Capillary blood auto loading, mixing, and sampling",
        "Auto loading reagent information",
      ],
      description:
        "A powerful assistant for micro-volume whole blood automatic detection",
      imgSrc: "/exz60001.png",
      totalReview: "4",
    },
    {
      category: "Hematology",
      itemName: "Hematology Reagent",
      highlightPoints: [],
      description:
        "These hematology reagents are created by professional R&D team, used with our hematology analyzer.",
      imgSrc: "/exz60001.png",
      totalReview: "4",
    },
    {
      category: "Hemostasis",
      itemName: "YX 2000",
      highlightPoints: [
        "PT 320 T/H",
        "Reagent positions onboard. 20 (16 with cooling unit, 4 with room temperature).",
        "APTT/PT/TT/FIB. 132 T/H",
        "Light source . LED, slow decay, maintenance-free.",
        "Sample capacity onboard. 40, and can switch to STAT positions at any time.",
        "Automatic Sample Loading. Support continuous automatic sample loading.",
      ],
      description: "Automated Blood Coagulation Analyzer MOCAP",
      imgSrc: "/yx20001.png",
      totalReview: "4",
    },
    {
      category: "Hemostasis",
      itemName: "YX 3000",
      highlightPoints: [
        "PT 410 T/H",
        "Reagent positions onboard. 39 (35 with cooling unit, 4 with room temperature).",
        "APTT/PT/TT/FIB. 224 T/H",
        "Light source . LED, slow decay, maintenance-free.",
        "Sample capacity onboard. 80, and can switch to STAT positions at any time.",
        "Automatic Sample Loading. Support continuous automatic sample loading.",
      ],
      description: "Automated Blood Coagulation Analyzer",
      imgSrc: "/yx30001.png",
      totalReview: "4",
    },
    {
      category: "Urinalysis",
      itemName: "U 3600",
      highlightPoints: [],
      description: "",
      imgSrc: "/u36001.png",
      totalReview: "4",
    },
    {
      category: "Biomaterial",
      itemName: "EXI 1800",
      highlightPoints: [],
      description: "",
      imgSrc: "/bioreagent1.jpg",
      totalReview: "4",
    },
    {
      category: "Urinalysis",
      itemName: "U 2610/1600",
      highlightPoints: [
        "Intelligent: If the chemistry results are negative, no microscopic analysis is performed",
        "Flexible: No need for a connection bridge to connect machine",
        "Efficient: 150 T/H for Sediment or Chemistry+ Sediment joint detection",
      ],
      description: "Urine Sediment Analyzer Precise and effcient",
      imgSrc: "/u26101.png",
      totalReview: "4",
    },
  ],
};

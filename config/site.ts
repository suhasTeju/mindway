export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
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
    whatsapp: "https://wa.me/+919731370710"
  },
  logo: {
    transparent: "/footer-logo.png"
  },
  hero: {
    header: "Leading the Way",
    headerHighlightText : "in Diagnostic Innovation",
    subheader: "High-Quality Biomedical Equipment to Empower Your Diagnostic Center",
    review: {
      review1: {
        by: "From Industry Experts",
        from: "100+"
      },
      review2: {
        by: "From Customers",
        from: "100+"
      }
    },
    action: {
      primary: {
        text: "Get Started"
      } ,
      secondary: {
        text: "Contact Us"
      }
    }
  },
  
  productCategory: [
    {
      title: "Microbiology",
      description: "Examine and analyze microorganisms with precision.",
      subProducts: [
        {
          category: "Microbiology",
          itemName: "EXS 200",
          highlightPoints: [
            "Rapid Identification Tool ＜1min Target - in/out time 12 min 96 spots tests at one plate",
            "High-quality structure and hardware technology",
            "Convenient Software Operaion",
            "Rich strains database"
          ],
          description: "Rapid and convenient identification tool for bacteria",
          imgSrc : "/exs2001.png",
          totalReview: "4"
        },
        {
          category: "Microbiology",
          itemName: "Microbiology Reagents",
          highlightPoints: [
            "Sample Treatment Matrix Solution",
            "Mold Sample Pretreatment Kit",
            "Blood Culture Positive Sample Pretreatment Kit",
            "Microbe Sample Pretreatment Kit"
          ],
          description: "Several pretreatment reagent kits are used to speed up the bacteria pretreatment procedure and improve the accuracy of MALDI-TOF identification results",
          imgSrc : "/mReg1.jpg",
          totalReview: "4"
        }
      ]
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
              "≤3%ＣV"
            ],
            description: "Nucleic acid isolation system EXM6000 is designed as a high-tech instrument to isolate and purify DNA/RNA from various type of samples.",
            imgSrc : "/exm60001.png",
            totalReview: "4"
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
              "Weight 27kg"
            ],
            description: "The EXM3000 is designed as a high-tech instrument to isolate and purify the nucleic acid through magnetic bead method featuring more efficient extraction, smaller size and safer operation.",
            imgSrc : "/exm30001.png",
            totalReview: "4"
          },
          {
            category: "Molecular",
            itemName: "Nucleic Acid Extraction Kit",
            highlightPoints: [
              "For the extraction of nucleic acid（DNA/RNA) to be used in PCR, NGS etc.",
              "9 min for extraction of 32 viral samples",
              "One washing step, less loss of nucleic acid, more yield",
              "Stable performance and reliable quality, laying a reliable foundation for the subsequent molecular experiment."
            ],
            description: "",
            imgSrc : "/extractionkit1.jpg",
            totalReview: "4"
          },
          {
            category: "Molecular",
            itemName: "Detection Kit",
            highlightPoints: [
              "Plan 1: High-throughput Nucleic Acid Isolation system + PCR System",
              "Plan 2: Low-throughput Nucleic Acid Isolation system + PCR System",
              "Plan 3: Manual Extraction + PCR System"
            ],
            description: "SARS-CoV-2 Nucleic Acid Detection Kit is designed for qualitative detecting the RNA of SARS-CoV-2 in the samples of nasal/throat swab. For suspected case, suspected cluster case or other cases that require the diagnostic and differential diagnosis of SARS-CoV-2 infection, which helps the clinical diagnosis of the infection of SARS-CoV-2.",
            imgSrc : "/detectionkit1.jpg",
            totalReview: "4",
            highlightHeader: "Available Plans"
          },
          {
            category: "Molecular",
            itemName: "vtm",
            highlightPoints: [
              "Safe and efficient: We add cryoprotectant specially, which is conducive to the long-term preservation of the virus.",
              "Easy operation：Flocked swabs ensure the maximum amount of sample sampling and release.",
              "Multiple specifications： Non- inactivated and inactivated sampling tube, meet your different clinical needs."
            ],
            description: "Disposable Virus Sampling Tube adopts efficient virus inactivation technology and special flocked swab. It can be used for the collection and storage of clinical novel coronavirus, influenza, avian influenza (such as H7N9), hand-foot-mouth virus, measles and other virus specimens, as well as chlamydia, mycoplasma, and ureaplasma.",
            imgSrc : "/vtm1.jpg",
            totalReview: "4"
          },
          {
            category: "Molecular",
            itemName: "ZIP - 96V",
            highlightPoints: [
              "HIGH THROUGHPUT 96 test per run"
            ],
            description: "Quantitative real-time PCR system ZIP-96V is intended to perform fluorescence-based PCR to provide quantitative and qualitative de-tection of nucleic acid sequences in human derived specimens.",
            imgSrc : "/zipv1.png",
            totalReview: "4"
          },
          {
            category: "Molecular",
            itemName: "EXP 160",
            highlightPoints: [
              "≤ 35 mins Operation speed by using Zybio fast detection kit",
              "16 tests/run 2×8 wells",
              "12.5 kg As light as 12.5kg system weight"
            ],
            description: "Fast Real-time PCR System EXP160 is an automated ampliﬁcation instrument designed for qualitative and quantitative detection of nucleic acid sequence in human-derived specimens.",
            imgSrc : "/exp1601.png",
            totalReview: "4"
          },
        ]
    },
    {
      title: "CLIA",
      description: "Ensure quality standards for laboratory testing.",
      subProducts: [
        {
          category: "CLIA",
          itemName: "EXI 1800",
          highlightPoints: "",
          description: "",
          imgSrc : "/exi18001.jpg",
          totalReview: "4"
        }
      ],
    },
    {
      title: "Clinical Chemistry",
      description: "Analyze chemical processes and substances in the human body.",
      subProducts: [
        {
          category: "Clinical Chemistry",
          itemName: "EXC 400",
          highlightPoints: "",
          description: "",
          imgSrc : "exc4001.png",
          totalReview: "4"
        }
      ],
    },
    {
      title: "POCT",
      description: "Perform medical diagnostic testing at the point of care.",
      subProducts: [
        {
          category: "POCT",
          itemName: "Q8 PRO",
          highlightPoints: "",
          description: "",
          imgSrc : "/q8pro1.png",
          totalReview: "4"
        }
      ],
    },
    {
      title: "Hematology",
      description:
        "Examine blood, blood diseases, and the organs involved in forming blood.",
        subProducts: [
          {
            category: "Hematology",
            itemName: "EXI 1800",
            highlightPoints: "",
            description: "",
            imgSrc : "/exi18001.jpg",
            totalReview: "4"
          }
        ],
    },
    {
      title: "Hemostasis",
      description: "Study the process of blood clotting and its disorders.",
      subProducts: [
        {
          category: "Hemostasis",
          itemName: "YX 2000",
          highlightPoints: "",
          description: "",
          imgSrc : "/yx20001.png",
          totalReview: "4"
        }
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
            highlightPoints: "",
            description: "",
            imgSrc : "/bioreagent1.jpg",
            totalReview: "4"
          }
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
            highlightPoints: "",
            description: "",
            imgSrc : "/u36001.png",
            totalReview: "4"
          }
        ],
    },
  ]
};

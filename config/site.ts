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
      label: "All Products",
      href: "/all-product",
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
          itemName: "Zybio Z3 (3 part)",
          highlightPoints: [
            "User-friendly Experience",
            "One screen display of test result",
            "One button sample aspiration and troubleshooting",
            "Compact Design",
          ],
          description:
            "A new generation 3-diff hematology analyzer tailored for small laboratory",
          imgSrc: "/z3updated.jpg",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E3%80%90Zybio+Brochure%E3%80%91+Z3_EN.pdf",
        },
        {
          category: "Hematology",
          itemName: "Zybio Z3 CRP (3 part)",
          highlightPoints: [
            "10.4-inch touch screen+ intuitive navigation menu, bring you user-friendly experience",
            "One button sample aspiration and troubleshooting",
            "Compact Design",
          ],
          description:
            "Compact and portable design leads to spare more space for small labs, clinics and etc.",
          imgSrc: "/Z3crp.jpg",
          totalReview: "4",
        },
        {
          category: "Hematology",
          itemName: "Zybio Z50 (5 part)",
          highlightPoints: [
            "Tri-angle laser scatter + advanced flow cytometry + chemical dye, create the possibility for better 5-diff WBC differentiation even on samples with high Eosinophil.",
            "Dedicate channel and optical method for Basophil measurement, have a better performance on basophil counting than traditional impedance method.",
            "Multiple smart flags to indicate abnormal blood cell differentiation and morphology.",
          ],
          description:
            "An evolved 5-diff hematology analyzer enable all possibilities in the small laboratories",
          imgSrc: "/z50.jpg",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Zybio+Z50.pdf",
        },
        {
          category: "Hematology",
          itemName: "Zybio EXZ 6000 (Auto Loader)",
          highlightPoints: [
            "Optimized testing process to reduce manual operations",
            "High-definition color touch screen",
            "Capillary blood auto loading, mixing, and sampling",
            "Auto loading reagent information",
          ],
          description:
            "A powerful assistant for micro-volume whole blood automatic detection",
          imgSrc: "/EXZ 6000.jpg",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E3%80%90Zybio%E3%80%91EXZ6000+Hematology+Analyzer-flyer.pdf",
        },
        // {
        //   category: "Hematology",
        //   itemName: "Hematology Reagent",
        //   highlightPoints: [],
        //   description:
        //     "These hematology reagents are created by professional R&D team, used with our hematology analyzer.",
        //   imgSrc: "/exz60001.png",
        //   totalReview: "4",
        // },
      ],
    },
    {
      title: "Clinical Chemistry",
      description:
        "Analyze chemical processes and substances in the human body.",
      subProducts: [
        // {
        //   category: "Clinical Chemistry",
        //   itemName: "Zybio EXC 420",
        //   highlightPoints: [
        //     "Constant 400 T/H offers a higher efficiency",
        //     "Less maintainance",
        //     "Economic usage",
        //     "Reliable quality",
        //   ],
        //   description:
        //     "Chemistry Analyzer An automated floor-standing chemistry analyzer customized for medium throughput laboratories.",
        //   imgSrc: "exc420.jpg",
        //   totalReview: "4",
        //   fileLink: "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E3%80%90Zybio+Brochure%E3%80%91EXC420+%EF%BC%88English+version%EF%BC%89.pdf"
        // },\
        {
          category: "Clinical Chemistry",
          itemName: "Prochem PA-200 mini",
          highlightPoints: [
            "User Interface: LCD display with Touch Key board",
            "Real time curve showing",
            "Wavelengths: 7 wavelength, 80 test items pre programmed",
          ],
          description:
            "Promea’s PA 200 is a is a compact, simple, and reliable semi-automated biochemistry analyzer proficient in performing tests on whole blood, serum, plasma, and urine as a samples",
          imgSrc: "prochempa200min1.webp",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Promea+Clinical+Chemistry+Analyzer+(Semi+Auto)+Brochure+(1).pdf",
        },
        {
          category: "Clinical Chemistry",
          itemName: "EXC 200 (Fully Auto Bio Chemistry)",
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
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Zybio-Brochure-EXC200.pdf",
        },
        {
          category: "Clinical Chemistry",
          itemName: "EXC 400 (Fully Auto Bio Chemistry)",
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
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E3%80%90Zybio+Brochure%E3%80%91EXC420+%EF%BC%88English+version%EF%BC%89.pdf",
        },

        {
          category: "Clinical Chemistry",
          itemName: "Prochem PA-200 (Semi Auto Bio Chemistry)",
          highlightPoints: [
            "User Interface: LCD display with Touch Key board",
            "Absorbance range: 0 to 3 unit",
            "Wavelengths: Automatic selection facility with 8 position static photometer covers standard wavelength in the range of 340 to 700 nm 6 fixed and 2 free positions",
          ],
          description:
            "Promea’s PA 200 is a is a compact, simple, and reliable semi-automated biochemistry analyzer proficient in performing tests on whole blood, serum, plasma, and urine as a samples",
          imgSrc: "prochem2001.webp",
          totalReview: "0",
        },
        // {
        //   category: "Clinical Chemistry",
        //   itemName: "Chemical Reagent",
        //   //Hepatic Panel Renal Panel Lipids Panel Cardiac & Cardiovascular Panel Diabetes Panel Tumor Panel Coagulation Panel
        //   highlightPoints: [
        //     "Hepatic Panel , Renal Panel,  Lipids Panel , Cardiac & Cardiovascular Panel,  Diabetes Panel ",
        //     "Tumor Panel, Coagulation Panel",
        //     "Specific Proteins Panel, Electrolytes Panel , Inflammation Panel , Pancreatitis Panel",
        //   ],
        //   description:
        //     "To guarantee and control the quality of our products, we has been committed to independent research and development of antigens, antibodies, and other reagents and raw materials.",
        //   imgSrc: "chemicalReagent1.jpg",
        //   totalReview: "4",
        // },
      ],
      extra: [
        { image: "Chemistry Menu 1.jpg", title: "categorySlide1" },
        { image: "Chemistry Menu 2 .jpg", title: "categorySlide2" },
      ],
    },
    {
      title: "CLIA",
      description: "Ensure quality standards for laboratory testing.",
      subProducts: [
        {
          category: "CLIA",
          itemName: "Getein Magicl 6000",
          highlightPoints: [
            "Smaple type: Whole Blood/Serum/Plasma/Urine/Fingertip Blood",
            "Test Time: 150 T/H",
            "Methodology: Acridinium Ester, Direct CLIA",
            "Sample Position: 50 samples per run",
          ],
          description:
            "MAGICL 6000, a compact and innovative chemiluminescence immunoassay analyzer, with optimal choice for mid to high-workflow laboratories which need a one-step chemiluminescence solution.",
          imgSrc: "/magic60001.png",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Catalogue.+MAGICAL6000+Chemiluminescence+Immunoassay+Analyzer.pdf",
        },
        {
          category: "CLIA",
          itemName: "Getein Magicl 6000i",
          highlightPoints: [
            "Smaple type: Serum/Plasma/Urine/Fingertip Blood",
            "Test Time: 200 T/H",
            "Methodology: Acridinium Ester, Direct CLIA",
            "Sample Position: 50 samples per run",
          ],
          description:
            "The MAGICL 6000i is an innovative chemiluminescent immunoassay analyser that is a variation of the MAGICL 6000, featuring high productivity, compactness and the highly sensitive CLIA method, which is accurate, easy to use and offers the fastest detection speed in its class.",
          imgSrc: "/magic6000i1.png",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E5%A4%96%E8%B4%B8MAGICL+6000i%E4%BB%AA%E5%99%A8%E5%8F%8C%E6%8A%98%E9%A1%B5%EF%BC%88%E7%AB%96%E5%B0%8F%EF%BC%8924-3(1).pdf",
        },
        {
          category: "CLIA",
          itemName: "Zybio EXI 1800",
          highlightPoints: [
            "Magnetic separation technical patent",
            "Innovative non-contact vortex mixing technology",
            "Unique constant temperature incubation system",
            "Multi-module integration technology Up to 351 T/H m²",
          ],
          description:
            "Technical innovation, more accurate resullts Magnetic separation patent Non-contact vortex mixing Multi-module integration",
          imgSrc: "/EXI 1800.jpg",
          totalReview: "0",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E3%80%90Zybio%E3%80%91EXI1800+iMMUNOASSAY+ANALYZER.pdf",
        },
        {
          category: "CLIA",
          itemName: "Zybio EXI 1820",
          highlightPoints: [
            "High-efficiency magnetic separation",
            "Innovative non-contact vortex mixing",
            "Constant temperature incubation system",
            "Advanced multi-module integration",
            "Throughput up to 182 tests per hour",
            "User-friendly interface and automation",
          ],
          description:
            "The EXI 1820 is designed for high-efficiency CLIA testing. It features magnetic separation, innovative non-contact vortex mixing, a constant temperature incubation system, and advanced multi-module integration. Capable of processing up to 182 tests per hour, it offers a user-friendly interface and high automation.",
          imgSrc: "/exi1820i1.jpg",
          totalReview: "0",
        },
        {
          category: "CLIA",
          itemName: "Zybio EXI 2400",
          highlightPoints: [
            "Advanced magnetic separation technology",
            "Non-contact vortex mixing for contamination-free results",
            "Precision temperature control system",
            "Integrated multi-module architecture",
            "High throughput of up to 240 tests per hour",
            "Enhanced data management and connectivity",
          ],
          description:
            "The EXI 2400 is an advanced CLIA analyzer offering superior magnetic separation technology, non-contact vortex mixing, and precision temperature control. It features an integrated multi-module architecture and can process up to 240 tests per hour. With enhanced data management and connectivity options, it provides reliable and efficient testing.",
          imgSrc: "/exi2400i1.png",
          totalReview: "0",
        },
        // {
        //   category: "CLIA",
        //   itemName: "Chemiluminescence",
        //   //Cardiac Inflammation Thyroid Fertility Tumor markers Diabetes Bone metabolism Gastric Anemia
        //   highlightPoints: [
        //     "Cardiac",
        //     "Inflammation",
        //     "Thyroid",
        //     "Fertility",
        //     "Tumor markers",
        //   ],
        //   description:
        //     "The test menu covers thyroid, fertility, tumor markers, cardiac, inflammation, diabetes, etc.; Constantly innovating, fully meeting the needs of clinical laboratories .",
        //   imgSrc: "/Chemiluminescence1.jpg",
        //   totalReview: "4",
        // },
      ],
      extra: [
        { image: "Clia ( CLIA REAGENT MENU ) 2.jpg", title: "categorySlide2" },
        { image: "Clia ( CLIA REAGENT MENU ).jpg", title: "categorySlide1" },
      ],
    },
    {
      title: "POCT Fluorescence Immunoassay Analyzer",
      description: "Perform medical diagnostic testing at the point of care.",
      subProducts: [
        {
          category: "POCT",
          itemName: "Zybio Q8 PRO",
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
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/q8-pro-1.pdf",
        },
        {
          category: "POCT",
          itemName: "Zybio EXR110/120",
          highlightPoints: [
            "3 Channels. high efficient",
            "1 Step Loading. Easy operation and faster results",
            "8 inch Screen. Intuitive and easy-to-use user interface",
          ],
          description: "Fluorescence Immunochromatgraphy Analyzer",
          imgSrc: "/1201.png",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/%E3%80%90Zybio+Brochure%E3%80%91POCT-EXR+110-20221221H_%E9%A2%84%E8%A7%88.pdf",
        },
        {
          category: "POCT",
          itemName: "Getein 1160",
          highlightPoints: [
            "Sample Type: Serum/Plasma/Whole blood/Capillary blood/Urine/Swab/Saliva/Stool",
            "Methodology: Lateral Flow Chromatography (Immunofluorescence)",
          ],
          description:
            "Getein 1160 is a multi-channel analyzer which has 4 incubation channels and 1 emergency test channel, and also has constant test environment with 32℃ to ensure more accurate test results.",
          imgSrc: "/getin11601.jpg",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Getein-1160-brochure-.pdf",
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
          itemName: "Mission® U120 Smart Urine Analyzer",
          highlightPoints: [
            "High Accuracy and Reliability",
            "Easy Operation",
            "Includes RS232C and USB ports for data transfer to a computer and LIS",
          ],
          description:
            "The Mission® U120 Smart Urine Analyzer is a compact, efficient device designed for precise urine analysis.",
          imgSrc: "/u1201.png",
          totalReview: "4",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Venkatesh+03.pdf",
        },
        {
          category: "Urinalysis",
          itemName: "Zybio Urine Chemistry U1600",
          highlightPoints: [
            "Intelligent: If the chemistry results are negative, no microscopic analysis is performed",
            "Flexible: No need for a connection bridge to connect machine",
            "Efficient: 150 T/H for Sediment or Chemistry+ Sediment joint detection",
          ],
          description: "Urine Sediment Analyzer Precise and effcient",
          imgSrc: "/U1600.jpg",
          totalReview: "4",
        },
        {
          category: "Urinalysis",
          itemName: "Zybio Urine Sediment U2600",
          highlightPoints: [
            "Intelligent: If the chemistry results are negative, no microscopic analysis is performed",
            "Flexible: No need for a connection bridge to connect machine",
            "Efficient: 150 T/H for Sediment or Chemistry+ Sediment joint detection",
          ],
          description: "Urine Sediment Analyzer Precise and effcient",
          imgSrc: "/U2600.jpg",
          totalReview: "4",
        },
        {
          category: "Urinalysis",
          itemName: "Zybio Urinalysis Hybrid U3600",
          highlightPoints: [],
          description: "",
          imgSrc: "/U3600.jpg",
          totalReview: "4",
        },
      ],
    },
    {
      title: "Arterial Blood Gas",
      description:
        "works by analysing a small blood sample taken from an artery",
      subProducts: [
        {
          category: "Arterial Blood Gas",
          itemName: "Sensacore ST-200CC ABGE",
          description:
            "This next-generation Hybrid device represents a significant leap forward in efficiency, accuracy, and connectivity for critical blood gas and electrolyte analysis",
          highlightPoints: [
            "Aspirate 1 sample and acquire 20 different results.",
            "Levey-Jennings chart for NABL and seamless integration to LIS (Lab information system).",
            "7 inch high definition LCD with capacitive touch display.",
            "Single touch calibration for new reagent pack.",
            "Maximum 2,00,000+ sample storage capacity.",
          ],
          imgSrc: "st200cc1.jpg",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/3457dcb654b2c5cf34e36ab2153373c2.pdf",
        },
        {
          category: "Arterial Blood Gas",
          itemName: "Sensacore ST-200CC Ultra Smart ABGEM",
          description:
            "Sensa Core’s ST-200CC Ultra Smart Blood Gas Analyzer is an automated, microprocessor-controlled electrolyte, blood gases and metabolites system",
          highlightPoints: [
            "Sample Volume	100 μL (Capillary/Micro mode)",
            "Sample Type	Whole Blood, Serum, Plasma, CSF & Diluted Urine",
            "External Integration	Barcode Scanner, Mouse, Keypad (Any 2 at a Time) & LIS Integration (Serial Port)",
            "Principle	Direct Measurement with ISE(electrolytes), Impedance (Hct), and Amperometry (Gases and Metobolites)",
          ],
          imgSrc: "abgem1.jpg",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/Ultra+Smart+Brochure++(1).pdf",
        },
        {
          category: "Arterial Blood Gas",
          itemName: "Sensacore ST-200CC Smart Hybrid ABGEM",
          description:
            "This next-generation Hybrid device represents a significant leap forward in efficiency, accuracy, and connectivity for critical blood gas and electrolyte analysis",
          highlightPoints: [
            "Sample Volume	100 μL (Capillary/Micro mode)",
            "Sample Type	Whole Blood, Serum, Plasma, Diluted Urine and QC",
            "External Integration	Barcode Scanner, Mouse, Keypad (Any 2 at a Time) & LIS Integration (Serial Port)",
          ],
          imgSrc: "st200cchybrid1.png",
        },
        {
          category: "Arterial Blood Gas",
          itemName: "Edan i15 POCT Blood Gas Analzer",
          description:
            "i15 offers new features you can't find on any other analyzer. It's lightweight, portable, and easy to use. With a user-friendly design requiring zero maintenance, it makes patient-side blood testing efficient and convenient.",
          highlightPoints: [
            "Portable and Easy",
            "Accurate and Reliable",
            "Minimal Maintenance",
            "Economical",
          ],
          imgSrc: "edani151.jpg",
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/20191115121303_227052.pdf",
        },
        {
          category: "Arterial Blood Gas",
          itemName: "Promea PA1000 Blood Gas Analyzer",
          description:
            "The PA1000 is a testament to Promea's commitment to advancing medical technology. Its intuitive interface and cutting-edge features streamline the diagnostic process",
          highlightPoints: [
            "Portable and Easy",
            "Accurate and Reliable",
            "Minimal Maintenance",
            "Economical",
          ],
          imgSrc: "pa10001.png",
          totalReview: "0",
        },
        {
          category: "Arterial Blood Gas",
          itemName: "Sensacore ST-200CS",
          description:
            "Sensa Core introduces the revolutionary ST 200 CS Blood Gas Analyzer with Sensor Cartridge, an advancement that will redefine point-of-care blood gas analysis.",
          highlightPoints: [
            "Portable and Easy",
            "Accurate and Reliable",
            "Minimal Maintenance",
            "Economical",
          ],
          imgSrc: "st200csup1.png",
          totalReview: "0",
        },
      ],
    },

    {
      title: "Electrolytes",
      description: "Find other useful materials and machines",
      category: "Electrolytes Analyzer",
      subProducts: [
        {
          imgSrc: "/pa100updated1.webp",
          itemName: "Promea Prochem-PA100",
          description:
            "The Promea PA100 Electrolyte Analyzer is a cutting-edge device designed to accurately measure and analyze various essential parameters in a wide range of specimens, including Whole Blood, Serum, Plasma, and Urine.",
          highlightPoints: [
            "Measuring time: Less than 60 seconds",
            "Samples per Pack: Up to 1000 samples per Reagent Pack.",
            "Reagent Security: Intelligent Reagent Pack with electronic chip.",
            "Parameter Conversion: Integrated Parameter conversion functionality.",
          ],
          category: "Electrolytes Analyzer",
        },
        {
          imgSrc: "st200aqua1.jpg",
          itemName: "Sensacore ST-200 aQua",
          category: "Electrolytes Analyzer",
          description:
            "Sensa Cores ST-200aQua Electrolyte Analyzer is a automated, microprocessor-controlled electrolyte system that uses current ISE technology to make imbalance of electrolyte measurement.",
          highlightPoints: [
            "Sample Volume: 100 µL",
            "Sample Type: Whole Blood, Serum, Plasma, CSF & Urine",
            "Parameters: Na, K, iCa, Cl, Li, pH.",
            "External Integration: LIS Integration (Serial Port).",
          ],
          fileLink:
            "https://shopsi-dev.s3.ap-south-1.amazonaws.com/622b42eb0df1709579dcdcf2ff2d411a.pdf",
        },
        {
          imgSrc: "st200bicarb1.jpeg",
          itemName: "Sensacore ST-200 aQua BI-Carbonate",
          category: "Electrolytes Analyzer",
          description:
            "Fully Automatic Sensa Core ST-200 AQua HCO3 Electrolyte Analyzer, For Laboratory, User Input: Touch",
          highlightPoints: [
            "Principle : Direct measurement with ion selective electrode(ISE).",
            "Parameters: This functionality allows the change of analytes.",
            "SampleType: Wholeblood, serum, plasma, CSF and diluted urine",
          ],
        },
      ],
    },

    {
      title: "Molecular",
      description:
        "Explore the molecular structure and function of biological molecules.",
      subProducts: [
        {
          category: "Molecular",
          itemName: "Zybio EXM 3000 Nucleic Acid Isolation System",
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
          itemName: "Zybio EXM 6000",
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

        // {
        //   category: "Molecular",
        //   itemName: "Zybio Quantitative RTPCR",
        //   highlightPoints: [
        //     "For the extraction of nucleic acid（DNA/RNA) to be used in PCR, NGS etc.",
        //     "9 min for extraction of 32 viral samples",
        //     "One washing step, less loss of nucleic acid, more yield",
        //     "Stable performance and reliable quality, laying a reliable foundation for the subsequent molecular experiment.",
        //   ],
        //   description: "",
        //   imgSrc: "/extractionkit1.jpg",
        //   totalReview: "4",
        // },
        // {
        //   category: "Molecular",
        //   itemName: "Zybio Detection Kit",
        //   highlightPoints: [
        //     "Plan 1: High-throughput Nucleic Acid Isolation system + PCR System",
        //     "Plan 2: Low-throughput Nucleic Acid Isolation system + PCR System",
        //     "Plan 3: Manual Extraction + PCR System",
        //   ],
        //   description:
        //     "SARS-CoV-2 Nucleic Acid Detection Kit is designed for qualitative detecting the RNA of SARS-CoV-2 in the samples of nasal/throat swab. For suspected case, suspected cluster case or other cases that require the diagnostic and differential diagnosis of SARS-CoV-2 infection, which helps the clinical diagnosis of the infection of SARS-CoV-2.",
        //   imgSrc: "/detectionkit1.jpg",
        //   totalReview: "4",
        //   highlightHeader: "Available Plans",
        // },
        // {
        //   category: "Molecular",
        //   itemName: "Zybio vtm",
        //   highlightPoints: [
        //     "Safe and efficient: We add cryoprotectant specially, which is conducive to the long-term preservation of the virus.",
        //     "Easy operation：Flocked swabs ensure the maximum amount of sample sampling and release.",
        //     "Multiple specifications： Non- inactivated and inactivated sampling tube, meet your different clinical needs.",
        //   ],
        //   description:
        //     "Disposable Virus Sampling Tube adopts efficient virus inactivation technology and special flocked swab. It can be used for the collection and storage of clinical novel coronavirus, influenza, avian influenza (such as H7N9), hand-foot-mouth virus, measles and other virus specimens, as well as chlamydia, mycoplasma, and ureaplasma.",
        //   imgSrc: "/vtm1.jpg",
        //   totalReview: "4",
        // },
        {
          category: "Molecular",
          itemName: "Zybio RTPCR ZIP - 96V",
          highlightPoints: ["HIGH THROUGHPUT 96 test per run"],
          description:
            "Quantitative real-time PCR system ZIP-96V is intended to perform fluorescence-based PCR to provide quantitative and qualitative de-tection of nucleic acid sequences in human derived specimens.",
          imgSrc: "/zipv1.png",
          totalReview: "4",
        },
        {
          category: "Molecular",
          itemName: "Zybio RTPCR EXP 160",
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
        // {
        //   category: "Molecular",
        //   itemName: "Zybio RTPCR EXP 160R",
        //   highlightPoints: [
        //     "≤ 35 mins Operation speed by using Zybio fast detection kit",
        //     "16 tests/run 2×8 wells",
        //     "12.5 kg As light as 12.5kg system weight",
        //   ],
        //   description:
        //     "Fast Real-time PCR System EXP160 is an automated ampliﬁcation instrument designed for qualitative and quantitative detection of nucleic acid sequence in human-derived specimens.",
        //   imgSrc: "/exp1601.png",
        //   totalReview: "4",
        // },
      ],
      extra: [
        {
          image: "Nuclear - Nucleic Acid Extraction Kit 1.jpg",
          title: "categorySlide2",
        },
        {
          image: "Nuclear - Nucleic Acid Extraction Kit 2.jpg",
          title: "categorySlide1",
        },
        {
          image: "Molicular - Disposable Virus Sampling tube 01.jpg",
          title: "categorySlide2",
        },
        {
          image: "Molicular - Disposable Virus Sampling tube 02.jpg",
          title: "categorySlide2",
        },
        {
          image: "MOLICUAR Zybio RUO products 01.jpg",
          title: "categorySlide2",
        },
        {
          image: "MOLICUAR Zybio RUO products 2.jpg",
          title: "categorySlide2",
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
          itemName: "Zybio Mass Spectrometry System EXS 2600",
          highlightPoints: [
            "Sample Treatment Matrix Solution",
            "Mold Sample Pretreatment Kit",
            "Blood Culture Positive Sample Pretreatment Kit",
            "Microbe Sample Pretreatment Kit",
          ],
          description:
            "Several pretreatment reagent kits are used to speed up the bacteria pretreatment procedure and improve the accuracy of MALDI-TOF identification results",
          imgSrc: "/exs26001.png",
          totalReview: "0",
        },
      ],
      extra: [
        {
          image: "Microbology  - Microbe Sample Pretreatment Kit  1.jpg",
          title: "categorySlide1",
        },
        {
          image: "Microbology  - Microbe Sample Pretreatment Kit  2.jpg",
          title: "categorySlide2",
        },
      ],
    },
    {
      title: "Hemostasis",
      description: "Study the process of blood clotting and its disorders.",
      subProducts: [
        {
          category: "Hemostasis",
          itemName: "Zybio YX 2000 Coagulation (Fully auto)",
          highlightPoints: [
            "PT 320 T/H",
            "Reagent positions onboard. 20 (16 with cooling unit, 4 with room temperature).",
            "APTT/PT/TT/FIB. 132 T/H",
            "Light source . LED, slow decay, maintenance-free.",
            "Sample capacity onboard. 40, and can switch to STAT positions at any time.",
            "Automatic Sample Loading. Support continuous automatic sample loading.",
          ],
          description: "Automated Blood Coagulation Analyzer MOCAP",
          imgSrc: "/yx200ac1.png",
          totalReview: "4",
        },

        // {
        //   imgSrc: "hemareg1.jpg", // Replace with actual image path
        //   itemName: "Liquid Hemostasis Reagent Analyzer",
        //   description:
        //     "The Liquid Hemostasis Reagent Analyzer offers precise and reliable testing for coagulation studies using advanced liquid reagent technology. Ideal for laboratories and diagnostic centers, it ensures accurate and consistent results.",
        //   highlightPoints: [
        //     "Sample Volume: 50 µL",
        //     "Sample Type: Whole Blood, Plasma",
        //     "Parameters: PT, APTT, Fibrinogen, D-Dimer.",
        //     "User-friendly Interface with Touch Screen",
        //     "External Integration: LIS Integration (USB/Serial Port).",
        //   ],
        // },
        {
          category: "Hemostasis",
          itemName: "Zybio YX 3000 Coagulation",
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
      extra: [
        {
          image: "Hemostasis - Liquid Hemostasis Reagent 1 .jpg",
          title: "categorySlide1",
        },
        {
          image: "Hemostasis - Liquid Hemostasis Reagent 2 .jpg",
          title: "categorySlide2",
        },
      ],
    },
    // {
    //   title: "Biomaterial",
    //   description:
    //     "Investigate materials used in medical devices and prosthetics.",
    //   subProducts: [
    //     {
    //       category: "Biomaterial",
    //       itemName: "EXI 1800",
    //       highlightPoints: [],
    //       description: "",
    //       imgSrc: "/bioreagent1.jpg",
    //       totalReview: "4",
    //     },
    //   ],
    // },
    {
      title: "Others",
      description: "Find other useful materials and machines",
      subProducts: [
        {
          category: "Others",
          itemName: "Laboratory Consumables",
          highlightPoints: [
            "High-quality materials for reliable performance",
            "Wide range of products including tubes, pipettes, and tips",
            "Compatible with various laboratory instruments",
            "Cost-effective solutions for everyday lab use",
          ],
          description:
            "Our Laboratory Consumables are made from high-quality materials to ensure reliable performance in everyday laboratory tasks. This range includes tubes, pipettes, tips, and more, all compatible with various instruments.",
          imgSrc: "/bioreagent1.jpg",
          totalReview: "4",
        },
        {
          category: "Others",
          itemName: "Centrifuge",
          highlightPoints: [
            "High-speed and efficient separation",
            "Variable speed control for different applications",
            "Durable construction with safety features",
            "Compatible with various rotor types and sizes",
          ],
          description:
            "Our Centrifuge offers high-speed and efficient separation with variable speed control for different applications. It is built with durable construction and safety features, compatible with various rotor types and sizes.",
          imgSrc: "/centrifuge1.jpg",
          totalReview: "4",
        },
        {
          category: "Others",
          itemName: "Microscope",
          highlightPoints: [
            "High-resolution optics for clear images",
            "Multiple magnification levels for detailed observation",
            "Ergonomic design for comfortable use",
            "Built-in light source with adjustable intensity",
          ],
          description:
            "Our Microscope features high-resolution optics for clear images and multiple magnification levels for detailed observation. It has an ergonomic design for comfortable use and a built-in light source with adjustable intensity.",
          imgSrc: "/microscope1.jpg",
          totalReview: "4",
        },
        {
          category: "Others",
          itemName: "Incubator",
          highlightPoints: [
            "Precise temperature control for optimal growth",
            "Uniform heat distribution",
            "User-friendly interface with programmable settings",
            "Sturdy construction with safety features",
          ],
          description:
            "Our Incubator offers precise temperature control for optimal growth and uniform heat distribution. It features a user-friendly interface with programmable settings and sturdy construction with safety features.",
          imgSrc: "/incubator1.png",
          totalReview: "4",
        },
      ],
    },
  ],
};

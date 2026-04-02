const about = {
  title: "Hi, I'm Kevin.",
  description: "Welcome to my website.",
  githubLinks: [
    { label: "lkevint", url: "https://github.com/lkevint" },
    { label: "magicianmathematician", url: "https://github.com/magicianmathematician" },
  ],
  email: "liu.kevint.2001@gmail.com",
  cv: "/Resume.pdf",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Ranked Toontown",
      description:
        "Distributed multiplayer game project built in Python, \
featuring competitive matchmaking and player ranking.",
      technologies: [
        "#Python",
        "#Docker",
        "#MongoDB"
      ],
      github: "https://github.com/ranked-toontown/ranked-toontown",
    },
    {
      title: "Neural Network for Optical Character Recognition",
      description:
        "OCR system for reading text from images \
using a Convolutional Recurrent Neural Network (CRNN) \
built with PyTorch.",
      technologies: ["#Python", "#PyTorch", "#NumPy"],
      github: "https://github.com/lkevint/OCR_CRNN/",
    },
    {
      title: "Clinical Biomarker Analysis",
      description:
        "Clinical publication using subgroup comparisons, \
hypothesis testing, and multivariate regression \
to evaluate biomarker predictors of fibrosis severity in MASLD patients.",
      technologies: ["#Excel", "#SPSS"],
      github: "https://www.cureus.com/articles/254954-\
serum-creatinine-as-an-independent-predictor-of-moderate-to-\
severe-fibrosis-in-chinese-american-non-obese-metabolic-dysfunction-associated-steatotic-liver-disease",
    }
  ],
};

export { about, projects };
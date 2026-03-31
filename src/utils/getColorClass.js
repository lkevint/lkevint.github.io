const getColorClass = (tech) => {
  switch (tech) {
    case "#Python":
      return "python";
    case "#PyTorch":
      return "pytorch";
    case "#NumPy":
      return "numpy";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Node.js":
      return "nodejs";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#Next.js":
      return "nextjs";
    default:
      return "";
  }
};

export default getColorClass;

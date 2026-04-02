const getColorClass = (tech) => {
  switch (tech) {
    case "#Python":
      return "python";
    case "#PyTorch":
      return "pytorch";
    case "#NumPy":
      return "numpy";
    case "#Docker":
      return "docker";
    case "#Git":
      return "git";
    case "#Excel":
      return "excel";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#SPSS":
      return "spss";
    default:
      return "";
  }
};

export default getColorClass;

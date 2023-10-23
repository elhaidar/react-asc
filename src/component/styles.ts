export const currentTheme = () => {
    try {
      return JSON.parse(localStorage.currentTheme);
    } catch (error) {
      localStorage.currentTheme = true;
      return true;
    }
  };
  
  export const primaryColor = () => {
    return "#4B73FF";
  };
  export const backgroundColor = () => {
    if (currentTheme()) {
      return "#0C0C1D";
    } else {
      return "#F7F9FB";
    }
  };
  export const textColor = () => {
    if (currentTheme()) {
      return "#F7F9FB";
    } else {
      return "#0C0C1D";
    }
  };
  export const buttonTextColor = () => {
    if (currentTheme()) {
      return "#0C0C1D";
    } else {
      return "#F7F9FB";
    }
  };
  export const buttonBackgroundColor = () => {
    if (currentTheme()) {
      return "#F7F9FB";
    } else {
      return "#0C0C1D";
    }
  };
  export const buttonHoverBackgroundColor = () => {
    if (currentTheme()) {
      return "#d8d8d8";
    } else {
      return "#30303f";
    }
  };
  export const buttonSecondaryTextColor = () => {
    if (currentTheme()) {
      return "yellow.300";
    } else {
      return "yellow.700";
    }
  };
  export const cardBackgroundColor = () => {
    if (currentTheme()) {
      return "gray.600";
    } else {
      return "white";
    }
  };
  export const cardTextColor = () => {
    if (currentTheme()) {
      return "#F7F9FB";
    } else {
      return "#0C0C1D";
    }
  };
  export const iconHoverBackgroundColor = () => {
    if (currentTheme()) {
      return "gray.600";
    } else {
      return "gray.200";
    }
  };
  export const primaryTextColor = () => {
    if (currentTheme()) {
      return "#b3c3ff";
    } else {
      return primaryColor();
    }
  };
  export const borderPremiumColor = () => {
    if (currentTheme()) {
      return "yellow.300";
    } else {
      return "yellow.700";
    }
  };
  export const borderColor = () => {
    if (currentTheme()) {
      return "#F7F9FB";
    } else {
      return "#0C0C1D";
    }
  };
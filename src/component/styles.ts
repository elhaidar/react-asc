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
  export const buttonPrimaryBackgroundColor = () => {
    if (currentTheme()) {
      return "blue.300";
    } else {
      return primaryColor();
    }
  };
  export const buttonPrimaryHoverBackgroundColor = () => {
    if (currentTheme()) {
      return "blue.200";
    } else {
      return "blue.500";
    }
  };
  export const buttonSecondaryBackgroundColor = () => {
    if (currentTheme()) {
      return "yellow.200";
    } else {
      return "yellow.300";
    }
  };
  export const buttonSecondaryHoverBackgroundColor = () => {
    if (currentTheme()) {
      return "yellow.100";
    } else {
      return "yellow.200";
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

  export const secondaryTextColor = () => {
    // return "#FF9228";
    return "#A0AEC0";
  };
  export const customBorder = () => {
    if (currentTheme()) {
      return "1px solid #253536";
    } else {
      return "1px solid #E9EDF7";
    }
  };
  export const borderWhite = () => {
    return "1px solid #E9EDF7";
  };
  export const inputColor = () => {
    if (currentTheme()) {
      return "#FFFFFF";
    } else {
      return "#2D3748";
    }
  };
  export const inputBackgroundColor = () => {
    if (currentTheme()) {
      return "#1B2627";
    } else {
      return "#F8F9FA";
    }
  };  
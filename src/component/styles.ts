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
  
  export const secondaryColor = () => {
    return "#FF9228";
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
  export const primaryTextTitleColor = () => {
    return "rgb(55, 158, 104)";
  };
  export const secondaryTextColor = () => {
    // return "#FF9228";
    return "#A0AEC0";
  };
  
  export const backgroundContainer = () => {
    if (currentTheme()) {
      return "#202C2D";
    } else {
      return "#FFFFFF";
    }
  };
  export const backgroundContainer2 = () => {
    if (currentTheme()) {
      return "rgba(37, 53, 54, 1)";
    } else {
      return "blue.600";
    }
  };
  
  export const backgroundColorHover = () => {
    if (currentTheme()) {
      return "#171919";
    } else {
      return "gray.200";
    }
  };
  
  export const selectedItem = () => {
    if (currentTheme()) {
      return "rgba(66, 170, 88, 0.05)";
    } else {
      // return "#E8F2EA";
      return "#F8F9FA";
    }
    // return "#E8F2EA";
  };
  export const borderColor = () => {
    if (currentTheme()) {
      return "#2C3D3F";
    } else {
      return "#A0AEC0";
    }
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
  export const primaryButtonColor = () => {
    return "#42AA58";
  };
  
  export const gradientColor = () =>
    "linear-gradient(90deg, #3EA955 50%, #D8F285 126.52%)";
  export const borderRadius = () => "14px";
// import LogoDrawDesktop from "./logoDrawDesktop";
import LogoDrawDesktopNoWords from "./logoDrawDesktopNoWords";
import React from "react";
import WordDrawDesktop from "./wordDrawDesktop";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

function FullLogoDesktop() {
  return (
    <div className="flex">
      <ErrorBoundary>
        <LogoDrawDesktopNoWords />
        <WordDrawDesktop />
      </ErrorBoundary>
    </div>
  );
}

export default FullLogoDesktop;

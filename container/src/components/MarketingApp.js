import React from "react";
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}

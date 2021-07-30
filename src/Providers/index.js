import { ServicesProvider } from "../Providers/Services";

const Providers = ({ children }) => {
  return <ServicesProvider>{children}</ServicesProvider>;
};

export default Providers;

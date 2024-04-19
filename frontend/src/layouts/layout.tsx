import Navbar from "../Components/Navbar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;

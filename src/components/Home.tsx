type HeaderProps = {
  title: string;
};

export const Home = ({ title }: HeaderProps) => {
  return <h1>{title}</h1>;
};
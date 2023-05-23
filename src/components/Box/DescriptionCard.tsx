interface Props {
  title: string;
  description: string;
}

const DescriptionCard = ({ title, description }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default DescriptionCard;

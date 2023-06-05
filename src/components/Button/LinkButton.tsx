import Link from "next/link";

interface Props {
  className: string;
  text: string;
}

const LinkButton = ({ className, text }: Props) => {
  return (
    <>
      <Link data-testid={"lobby_link"} href="/lobby" className={className}>
        <p>{text}</p>
      </Link>
    </>
  );
};

export default LinkButton;

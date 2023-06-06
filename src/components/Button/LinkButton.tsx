import Link from "next/link";

interface Props {
  className: string;
  text: string;
  href: string;
}

const LinkButton = ({ className, text, href }: Props) => {
  return (
    <>
      <Link
        data-testid={`${text}_link`}
        href={`/${href}`}
        className={className}
      >
        <p>{text}</p>
      </Link>
    </>
  );
};

export default LinkButton;

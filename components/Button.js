import Link from "next/link";

export default function Button({ text, link }) {
  return (
    <Link
      className="w-full bg-button text-white rounded py-3 px-5 text-center hover:bg-blue-500"
      href={link}
    >
      {text}
    </Link>
  );
}

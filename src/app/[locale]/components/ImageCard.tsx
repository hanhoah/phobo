import Image from "next/image";
import Link from "next/link";

function ImageCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={image}
          alt={title}
          width={640}
          height={480}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ImageCard;

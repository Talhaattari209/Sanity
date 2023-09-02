import Image from "next/image";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "phvda444",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default async function Home() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  console.log(pets);
  return (
    <div>
      {pets.map((pets: any) => (
        <ul key={pets.id}>
          <li key={pets.id}>{pets?.name}</li>
          <li key={pets.id}>{pets?.email}</li>
          <li key={pets.id}>{pets?.age}</li>
        </ul>
      ))}
      <Image
        src={
          "https://cdn.sanity.io/files/phvda444/production/f0c02030b2e456ba4e707c1f3f301f95da8675a0.png"
        }
        width={30}
        height={30}
        alt="water"
      />
    </div>
  );
}

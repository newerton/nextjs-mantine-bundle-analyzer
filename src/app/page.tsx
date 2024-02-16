import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const dataSource = [
  {
    env: "Dev",
    side: "nodejs (server)",
    link: "https://newerton.github.io/nextjs-mantine-bundle-analyzer/_analyze/dev/nodejs.html",
  },
  {
    env: "Dev",
    side: "client (browser)",
    link: "https://newerton.github.io/nextjs-mantine-bundle-analyzer/_analyze/dev/client.html",
  },
  {
    env: "Build",
    side: "nodejs (server)",
    link: "https://newerton.github.io/nextjs-mantine-bundle-analyzer/_analyze/prod/nodejs.html",
  },
  {
    env: "Build",
    side: "client (browser)",
    link: "https://newerton.github.io/nextjs-mantine-bundle-analyzer/_analyze/prod/client.html",
  },
];

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button variant="filled">Button</Button>
      </div>

      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Environment</th>
            <th>Side</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={index}>
              <td>{item.env}</td>
              <td>{item.side}</td>
              <td>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { Button } from "@mantine/core";
import Link from "next/link";

const dataSource = [
  {
    side: "nodejs (server)",
    link: "https://newerton.github.io/nextjs-mantine-bundle-analyzer/analyze/nodejs.html",
  },
  {
    side: "client (browser)",
    link: "https://newerton.github.io/nextjs-mantine-bundle-analyzer/analyze/client.html",
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
            <th>Side</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={index}>
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

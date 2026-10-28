import QRCode from "qrcode";
import { APP_STORE_URL } from "@/lib/links";

export default function AppStoreQr() {
  const { modules } = QRCode.create(APP_STORE_URL, { errorCorrectionLevel: "M" });
  const size = modules.size;

  let path = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (modules.get(y, x)) path += `M${x} ${y}h1v1h-1z`;
    }
  }

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scan to download Steyel on the App Store"
      className="block rounded-2xl bg-white p-3 transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="size-28" shapeRendering="crispEdges" aria-hidden="true">
        <path d={path} fill="#08060d" />
      </svg>
    </a>
  );
}

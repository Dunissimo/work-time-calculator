import "./style.css";
import { init } from "./logic";

document.addEventListener("DOMContentLoaded", async () => {
  const { default: data } =
    import.meta.env.MODE === "development"
      ? await import("../data.json", { assert: { type: "json" } })
      : await import("../data.example.json", { assert: { type: "json" } });

  init(data);
});

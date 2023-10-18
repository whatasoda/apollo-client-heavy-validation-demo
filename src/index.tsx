import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { worker } from "./mocks/worker";

worker.start();

const root = ReactDOMClient.createRoot(document.getElementById("root")!);
root.render(<App />);

import { BACKENDURL } from "@/URL";
import axios from "axios";
axios.get(`${BACKENDURL}registration`)
export default function Attendee() {
    return (
      <main className="h-screen">
        <h1 className="text-3xl font-semibold">Attendee</h1>
      </main>
    );
  }
  
import { HostelService } from "./service/hostelService.js";
import { UI } from "./UI/ui.js";

const hostelService = new HostelService();
const ui = new UI(hostelService);

ui.initialize();

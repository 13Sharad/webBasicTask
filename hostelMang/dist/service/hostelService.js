import { roomsAvailability } from "../data/roomData.js";
export class hostelService {
    constructor() {
        this.rooms = [];
        this.resident = [];
        this.loadData();
    }
    loadData() {
        const storedRooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("residents");
        if (storedRooms) {
            this.rooms = JSON.parse(storedRooms);
        }
        else {
            this.rooms = roomsAvailability;
        }
        if (storedResidents) {
            this.resident = JSON.parse(storedResidents);
        }
        else {
            this.resident = [];
        }
        console.log(this.rooms);
        console.log(this.resident);
    }
}

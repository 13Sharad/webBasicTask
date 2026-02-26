var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Promise Example
export function fetchProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Product Data Loaded");
        }, 2000);
    });
}
// Async/Await Example
export function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = yield response.json();
            console.log("User Data:", data);
        }
        catch (error) {
            console.log("Error fetching user data");
        }
    });
}

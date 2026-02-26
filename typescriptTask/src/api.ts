// Promise Example
export function fetchProduct(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Product Data Loaded");
      } else {
        reject("Failed to load product");
      }
    }, 2000);
  });
}

// Async/Await Example
export async function fetchUser(): Promise<void> {
  try {
    const response = await fetch("https://fakestore.com/products");
    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.log("Error fetching user data");
  }
}

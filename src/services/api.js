export const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch('https://dummyjson.com/c/082a-be91-46ef-a3e2');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                resolve(result);
            } catch (error) {
                reject(error.message);
            }
        }, 3000);
    });
};
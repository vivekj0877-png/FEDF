// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================

// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;

                if (success) {
                    resolve([
                        { id: 1, name: "charan", email: "charan@gmail.com" },
                        { id: 2, name: "Krishna", email: "krishna@gmail.com" },
                        { id: 3, name: "Sita", email: "sita@gmail.com" },
                        { id: 1, name: "sruthi", email: "sruthi@gmail.com" },
                        { id: 2, name: "vivek", email: "vivek@gmail.com" },
                        { id: 3, name: "yashwanth", email: "yashwanth@gmail.com" },
                        { id: 1, name: "sathvik", email: "sathvik@gmail.com" },
                        { id: 2, name: "laxmikanth", email: "laxmikanth@gmail.com" },
                        { id: 3, name: "partheev", email: "partheev@gmail.com" }

                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};

// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");

        // Safety check (prevents null error)
        if (!userList) {
            console.error("Element with id 'userList' not found");
            return;
        }

        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");

            // ✅ FIXED LINE (template literal with backticks)
            li.textContent = `${user.name} - ${user.email}`;

            userList.appendChild(li);
        });
    }
};

// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");

        const users = await UserAPI.fetchUsers();

        UI.displayUsers(users);

        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}

// Call the function (important, otherwise nothing runs)
loadUsers();
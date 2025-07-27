import { Client, Databases, Account, ID } from 'appwrite';

// Set up the Appwrite client
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('672624b200134cf8f846');         // Your Appwrite project ID

// Log client configuration
console.log("Appwrite Client Initialized:", {
  endpoint: client.config.endpoint,
  projectId: client.config.project
});

// Initialize the databases and account instances
const databases = new Databases(client);
const account = new Account(client);

// ✅ Export ID as well
export { client, databases, account, ID };

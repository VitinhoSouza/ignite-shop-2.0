# Welcome to **Ignite Shop 2.0** 🛒
- Ignite Shop 2.0 is the fourth Ignite challenge in the React trail 2022;
- The application works as a very **simplified e-commerce**, where it sells products (shirts) consumed from the **stripe** platform;  
- Version 2.0 also brings the **cart functionality** to the application, thus being able to buy several items in a single purchase.

https://user-images.githubusercontent.com/51724518/218265824-c65e0c15-55e4-4ca3-9f19-353f43d77b29.mp4

## Techs:
The framework used was **Next.js**, which is based on server-side rendering and generation of static websites, important items when it comes to e-commerce. Others libs:
- **stitches** for styling;
- **typescript** in data typing;
- **axios** for execute API requests;
- **keen-slider** for carousel creation;
- **stripe** (sdk) for make the connection with the stripe platform and fetch the data;
- **phosphor-react** for the use of some icons;
- **ContextAPI** for global state handling;
- **LocalStorage** for data persistence after page reload.

## Get started:
- With Git installed, in your terminal run the following command: `git clone https://github.com/VitinhoSouza/ignite-shop-2.0.git`;
- Enter the project folder and do: `npm install`. When all packages are installed, do `npm run dev` to start in development mode;
- For the project to work correctly, you must have a stripe account, register products in it, add the tow keys related to the account in a local .env file and another one to indicate the base url of the application:
  - **STRIPE_PUBLIC_KEY**;
  - **STRIPE_SECRET_KEY**;  
  - **NEXT_URL**, where the value is the base url of your project, the default in development is `http://localhost:3000`.
- To check the project in production, go to: https://ignite-shop-2-0-vitinho.vercel.app/.

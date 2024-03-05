# Atlan SQL Query App

SQL Query App built using React on the frontend and styled using styled-components. The users can run queries and view the result which is displayed in table format.

Please note that the dummy data was obtained from https://www.mockaroo.com/

## Deployed link

I have deployed the app on Vercel and here is the link
https://atlan-sql-kappa.vercel.app/

## Walkthrough Video

[Click me to see the loom recording](https://www.loom.com/share/6d90051669b543c58baa0352f0329c02?sid=bd2c7d3f-bed5-4447-a073-49ebdc17c2e7)

## Tech: Libraries and framework

- React Js library for Frontend
- Styled Components for CSS.

## Page Load Time and Optimisation

- Used lighthouse from the chrome dev tools and the performance score is 100😄
- Prevent CLP by specifying width and height for images.
- Lazy loaded components which are not required in the initial page load.
- Used WebP image format.
- Reusable code wherever possible so that DRY principle is maintained.
- Used least dependencies for creating the whole app thereby leading to smaller js bundles.
- Hosted on Vercel which provides CDN and caching benefits and also every code change pushed to github triggers an automatic deployment. Other benefits are SSL certificate ensuring that application is served over HTTPS.

## Screenshot

![Screenshot of SQL Query app](/images/sql-query-app-1.png)
![Screenshot of SQL Query app](/images/sql-query-app-2.png)

## Available Scripts

Clone the repository and open up in any code editor and then you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

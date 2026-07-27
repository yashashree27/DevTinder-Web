- Created a Vite + React Project
- Removed the unnecessary code and files like app.css and  created a Hello World app
- Install Tailwind CSS (CSS Framework)
- Install Daisy UI (daisyUI is a component library built on top of Tailwind CSS )
- Add Navbar Component to App.jsx
- Create a Navbar.jsx separate component file
- Insatlled react-router-dom
- Create BrowserRouter > Routes > Route =/Body > RouteChildren
- Create an Outlet in your Body Component
- Create Footer Component

- Create a login page
- Install axios
- CORS - Install cors in backend => add middleware to app.js with configuration
- Whenever you are making and API call from frontend so pass axios => { withCredential:true }

- Install Redux toolkit + react-redux package
- Create a configure store => Provider => CreateSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if data is coming or not in the store
- Navbar should show user profile as soon as user logs in
- Refactor our code to add constants file + create components folder

- When we refresh the page we are being logged out, even if token is present, handle this 
- You should not be able to access other routes without login if token is not present, redirect user to login page

- Logout feature

- Get the feed and add the feed in the store
- build the user card in the feed section

- Edit Profile page
- Show Toast message on save of profile
- Add dropdwon for male, femlae, others instaed of typing

- See all my connections / Connections page

- See my request received page
- Accept, Reject Request feature

- Send connection request functionality(Ignored/Interested)

- do not show pasword when typing
- build register user page


*Deployment*

- signup on AWS
- Create EC2 instance
- launch instance then click on connect and open terminal
- then write command  chmod 400 <secret>.pem
-  connect to VM using this command 
  ssh -i "Devtinder_Yash-secret.pem" ubuntu@ec2-18-225-167-9.us-east-2.compute.amazonaws.com
- Install node version and check waht version is installed in your local system then install that only on VM
- Clone your both frontend and backend project

-  FRONTEND
- went to frontend proj -> cd devTinder-web and did npm install
- npm run build
- sudo apt update
- sudo apt install nginx (using nginx http-server to deploy frontend)
- sudo systemctl start nginx
- sudo systemctl enable nginx
- copy code from dist folder to  /var/www/html/ with command ( sudo scp -r dist/*  /var/www/html )
- Enable port :80 of your instance. (HTTP uses port 80.
  HTTPS uses port 443.)
- go run your website on public ip address


- BACKEND
- went to backend proj -> cd devTinder and did npm install
- in mongo db atlas in network in IP address list add public ip of vm so that vm can access database
- in vm in security grp add port 4000 (backend running on this port) and save
- npm run start / npm start
- now open on browser. http://18.188.10.153:4000  (http://18.188.10.153 - public IP address of ec2 instance and 4000 backend running on this port)

- Install  PM2
   . npm install pm2 -g (PM2 is a daemon process manager that will help you manage and keep your application online 24/7)
   . pm2 start npm -- start (Backend is running using the PM2 process manager)
   . pm2 logs (for logs)
   . pm2 flush <name> (to clear the logs)
   . pm2 list 
   . pm2 stop <name>
   . pm2 delete <name>
   . pm2 start npm --name "devtinder-backend" -- start (change name of pm2 process)

  - Nginx config (to map our ip to domain name)

    <!-- Frontend = http://18.188.10.153/
    Backend = http://18.188.10.153:4000/

    Domain name = devtinder.com => http://18.188.10.153

    Frontend = devtinder.com
    Backend = devtinder.com:4000 => devtinder.com/api -->

    nginx config : 

    . open the default Nginx config
      sudo nano /etc/nginx/sites-available/default

    server_name 18.188.10.153;

    location /api/ {
        proxy_pass http://localhost:4000/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
   
   . clict clt x , save and enter
   . restart nginx ( sudo systemctl restart nginx)

   now frontend running on  http://18.188.10.153 and backend /api

   . modify the BASE_URL in frontend repository to "/api"


   # Adding a custom Domain name
     
     - purchased domain anme from Godaddy
     - signup on cloudflare and add the newly careetd domain name
     - chnage the nameservers on godaddy and point it to cloudflare
     - wait for sometime till your nameservers are updated
     - Added  A record with ec2 id address in DNS records with domain name purchased
       DNS record : A thedevtindery.in  18.225.216.215
     - enable SSL for website

    # A domain registrar is a company where you buy and manage your domain name (e.g., GoDaddy or Namecheap). A nameserver is a specialized server that tells the internet where your website's files and email records are hosted (e.g., hosting.com). #


  # Sending Emails via  AWS SES
    - Create an IAM usee
    - give access to AmazonSESFullAccess
    - Amazon SES: Create an identity
    - Verify your domain name
    - Verify an email address
    - Install AWS SDK - v3 
    - https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
    - Setup SesClient
    - Access Credentials should be created on IAM  under SecurityCredentials Tab
    - Add the credentials to the .env file
    - Write code for SESClient
    - Write code for sending Email Address
    - Make the email dynamic by passing more parameters to the run function


# Scheduling cron jobs in NodeJS
  - Installing node-cron
  - Lesrning about cron expressions syntax - crontab.guru
  - schedule a job
  - install date-fns
  - Find all the unique email Id who  have got connection request on previous day
  - send Email
  - explore queue mechanism to send bulk emails
  - Amazon SES Bulk email

# Razorpay Payment Gateway Integration

- Sign up on Razorpay & complete KYC 
- Cerated a UI for premium page
- Creating an API for create order in backend
- added my key and secret in env file
- Intialized Razorpay in utils
- creating order on Razorpay
- create Schema and model
- saved the order in payments collection
- make the API dynamic
- Setup RRazorpay webhook on your live APi
- Ref - https://github.com/razorpay/razorpay-node/tree/master/documents
- Ref - https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/#integrate-with-razorpay-payment-gateway
- Ref - https://razorpay.com/docs/webhooks/validate-test/
- Ref - https://razorpay.com/docs/webhooks/payloads/payments/
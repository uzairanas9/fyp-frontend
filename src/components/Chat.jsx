import React from 'react'
import ChatBot from "react-simple-chatbot";
import {Segment} from "semantic-ui-react";
function Chat() {
    const steps = [

        {
    
          id: "Greet",
    
          message: "Hello, Welcome to Online Bakramandi, How can we Help You Today",
    
          trigger: "Done",
    
        },
    
        {
    
          id: "Done",
    
          message: "Please enter your name!",
    
          trigger: "waiting1",
    
        },
    
        {
    
          id: "waiting1",
    
          user: true,
    
          trigger: "Name",
    
        },
    
        {
    
          id: "Name",
    
          message: "Hi {previousValue}, Please let us know what is your issue",
    
          trigger: "issues",
    
        },
    
        {
    
          id: "issues",
    
          options: [
    
            {
    
              value: "Ad",
    
              label: "AdPosting",
    
              trigger: "Ad",
    
            },
            {
    
                value: "Adu",
      
                label: "Ad Posting information in Urdu",
      
                trigger: "Adu",
      
              },
    
            { value: "complain", label: "complain about sellers", trigger: "complain" },
    
          ],
    
        },

        {
    
            id: "Adu",
      
            message:"مجھے یہ بتانے کا شکریہ کہ اشتہار پوسٹ کرتے وقت آپ کو مسئلہ درپیش ہے۔ اشتہار پوسٹ کرنے کے لیے براہ کرم نیچے دیے گئے مراحل پر عمل کریں۔ 1. سب سے پہلے اپنے اکاؤنٹ میں لاگ ان کریں، اگر آپ کے پاس اکاؤنٹ نہیں ہے تو پہلے سائن اپ کریں۔ 2 Navbar کے اوپری دائیں کونے میں My Account Page پر جائیں۔ 3. Manage Animal پر جائیں اور Add new animal پر کلک کریں۔ 4. اپنے جانور کی متعلقہ تفصیلات درج کر کے فارم کو پُر کریں اور پھر Submit Ad پر کلک کریں۔ 5. آپ کا اشتہار ابھی پوسٹ کیا گیا ہے۔",
              trigger: "issues2",
      
  
      
          },
    
        {
    
          id: "Ad",
    
          message:
    
            "Thanks for letting me know that you are facing issue while ad posting. Please follow the steps below for posting ad. 1. First of all Log in to your account, if you don't have account then sign Up first. 2. Go to My Account Page on the top right corner of the Navbar. 3. Go to Manage Animal and click on Add new animal. 4. Fill the form by entering the relevant details of your animal and then click on submit ad. 5. Your Ad is posted Now.",
            trigger: "issues2"
    

    
        },
    
        {
    
          id: "complain",
    
          message:
    
            "Please select the relevant option",
    
          trigger:"complainoption",
    
        },
        {
            id:"complainoption",
            options: [
    
                {
        
                  value: "seller",
        
                  label: "About Seller",
        
                  trigger: "seller",
        
                },
        
                { value: "web", label: "About bug in website", trigger: "web" },
        
              ],

        },
        {
            id:"issues2",
            options: [
    
                {
        
                  value: "notsolved",
        
                  label: "Problem Not Solved",
        
                  trigger: "notsolved",
        
                },
        
                { value: "solved", label: "My Problem is Solved", trigger: "solved" },
        
              ],

        },

        {
    
            id: "seller",
      
            message:"We are sorry for your bad experience on Online Bakramandi, we will try our best to solve your issue, Please enter your complain in the following way.... First of all enter the name of seller... Secondly enter the description of complain and at the last please provide your contact details so that we can contact you",
            
            trigger:"entercomplain",
      
  
      
          },

          {
    
            id: "web",
      
            message:"We are sorry for your bad experience on Online Bakramandi, we will try our best to solve your issue, Please enter your complain in the following way.... First of all enter your name... Secondly enter the description of complain and at the last please provide your contact details so that we can contact you",
            
            trigger:"entercomplain",
      
  
      
          },

          {
            id: "entercomplain",
            user: true,
           
            trigger: "endingmessage1"

          },

          {
            id: "endingmessage1",
            message:"Thanks for letting us your issue, our representative will contact you shortly. Thank You for Visiting Online Bakramandi",
           
            end:true,

          },

        {
    
            id: "notsolved",
      
            message:
      
              "We are very sorry to know that your issues is not solved yet, please enter your email or phone number so that our representative can contact you.",
              trigger: "contact"
      
  
      
          },
          {
    
            id: "solved",
      
            message:
      
              "We are very happy to assist you Thank You so much for visiting Online Bakramandi",
      
            end: true,
      
          },

          {
            id: "contact",
            user: true,
           
            trigger: "endingmessage"

          },
          {
            id:"endingmessage",
            message:"Thanks for providing your contact details we will contact you shortly, Stay Blessed",
            end:true,
          },

    
      ]; 
    return (
        <>
        <div style={{float:"right"}}>
            <Segment floated='right'>
      <ChatBot steps={steps} />
      </Segment>
      </div>
        </>
    )
}

export default Chat
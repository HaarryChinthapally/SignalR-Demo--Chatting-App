using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRChatApp.Hubs
{
   // [HubName("myChatHub")]
    public class ChatHubs : Hub
    {
        public void send(string name,string message)
        {
            Clients.All.addNewMessageToPage(name,message);
            //Clients.All.hello();
        }
    }
}
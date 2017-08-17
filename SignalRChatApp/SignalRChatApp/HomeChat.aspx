<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomeChat.aspx.cs" Inherits="SignalRChatApp.HomeChat" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <%--<script src="Scripts/jquery-1.6.4.js"></script>--%>
    <script src="Scripts/jquery-1.6.4.min.js"></script>
    <script src="Scripts/jquery.signalR-2.2.1.min.js"></script>
    <script src="signalr/hubs" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            var chat = $.connection.chatHub;
            chat.client.addNewMessageToPage = function (name, message) {
                var encodedName = $('<div />').text(name).html();
                var encodedmsg = $('<div />').text(message).html();
                $('#discussion').append('<li><strong>' + encodedName + '</strong>:' + encodedmsg + '</li>');
            };
            var neme = $('#txtname').val();
            $('#displayname').val(neme);
            $('#message').focus();
            $.connection.hub.start().done(function () {
                $(document).bind('keypress', function (e) {
                    if (e.which === 13) { // return
                        $('#sendmessage').trigger('click');
                    }
                });
                $('#sendmessage').click(function () {
                    chat.server.send($('#displayname').val(), $('#message').val());
                    $('#message').val('').focus();
                });
            });
        });

    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <input type="text" id="txtname" /><br />
      <input type="text" id="message" />
        <input type="button" id="sendmessage" value="Send" /><br />
        <input type="hidden" id="displayname" />
        <ul id="discussion"></ul>

    </div>
    </form>
</body>
</html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Content</title>
</head>

<body>
    <h1>Notification</h1>
    <p>Content: {{ $mailData['content'] }}</p>
    <p>Email:  {{ $mailData['email'] }}</p>
    <p>Password:  {{ $mailData['password'] }}</p>
    <p>Find below the link to access the dashboard of the user that invited you so you can collaborate with them
    
    <br><br>  {{ $mailData['dashboard-link'] }}</p>
</body>

</html>

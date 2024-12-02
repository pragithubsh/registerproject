<!DOCTYPE html>
<html lang="en">
<head>
    <title>Webpage Design</title>
    <link rel="stylesheet" href="style.css">
    <script>
        Function to load the header
        function loadHeader() {
            var header = document.getElementById("header");
            fetch("header.html")
                .then(response => response.text())
                .then(data => {
                    header.innerHTML = data;
                });
        }
    </script>
</head>
<body onload="loadHeader()">
    <!-- This is where the header will be loaded -->
    <div id="header"></div>

    <div class="content">
        <!-- Your page content goes here -->
        <h1>Navindhara Research & <br><span>It Organization</span> <br>Course</h1>
        <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque expedita atque eveniet quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus a quae totam ipsa illum minus laudantium?</p>

        <button class="cn"><a href="joinus.html">JOIN US</a></button>

        <footer>
            <div class="footer-content">
                <p>&copy; 2024 Ndrio. All Rights Reserved.</p>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">Terms of Service</a> |
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </footer>

        <div class="form">
            <h2>Login Here</h2>
            <form name="loginForm" onsubmit="return validateForm()">
                <input type="email" name="email" placeholder="Enter Email Here">
                <input type="password" name="password" placeholder="Enter Password Here">
                <button class="btnn"><a href="#">Login</a></button>
            </form>

            <p class="link">Don't have an account<br>
            <a href="#">Sign up </a> here</p>
            <p class="liw">Log in with</p>
        </div>
    </div>
</body>
</html>

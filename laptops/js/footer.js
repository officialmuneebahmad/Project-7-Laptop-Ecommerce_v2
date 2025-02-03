document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
<!-- ======================== FOOTER =========================================-->

     <footer id="footer" class="flex flex-row justify-between items-start p-4 mt-8">

        <div class=" flex flex-col justify-center items-center">
            <img class="size-32 rounded-3xl " src="../../imgs/logo.png" alt="logo">
            <p class=" w-64 p-2">
                "We are committed to provide you the best & fresh in condition laptops
                We ensure each laptop is thoroughly inspected, tested, and packaged with care. 
                Your satisfaction and trust are our top priorities. "
            </p>
        </div>

        <div class="flex flex-col px-4 text-center ">
            <h1 class="text-lg font-bold mb-2">USEFUL LINKS</h1>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="./useful_links/about.html">About Us</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="./useful_links/terms_con.html">Terms & Conditions</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="./useful_links/pri_policy.html">Privacy Policy</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="https://wa.link/laptopmartmultan">
                <img class="size-40" src="../../imgs/QR.png" alt="QR-CODE">
            </a>            
        </div>

        <div class="flex flex-col px-4 text-center ">
            <h1 class="text-lg font-bold mb-2">SOCIAL MEDIA</h1>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="https://bit.ly/4fSH7tf">Facebook</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="https://bit.ly/3YUprGO">Twitter</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="https://bit.ly/3Vquiia">Instagram</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="https://bit.ly/4fOyxvm">TikTok</a>
            <a class="hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg p-1 text-slate-600" href="https://bit.ly/41ggYR3">Youtube</a>
        </div>

        <div class="flex flex-col px-4 text-center ">
            <h1 class="text-lg font-bold mb-2">KNOW ABOUT CEO ?</h1>
            <a class=" hover:bg-blue-300 hover:text-bgBlue my-1 rounded-lg text-center p-1 underline text-blue-600" href="./useful_links/junaid_umar.html">Click Here</a>
        </div>

        <div>
            <iframe class="h-3/6 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.405026746067!2d71.4638019741255!3d30.196985474847086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3314cfe5069f%3A0xcc3cbdda2af3beca!2sLaptop%20Mart!5e0!3m2!1sen!2s!4v1732517224205!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

     </footer>

     <div id="web-end" class="flex justify-between items-center p-4 mt-8 bg-bgBlue text-white">
        <p>&copy; Copyright By LaptopMart (Multan) 💻 Team 2024 - 2025. All Rights Reserved</p>
        <p class="flex justify-center items-center">Made with ❤️ from <img class="size-8 mx-4" src="../../imgs/flag.png" alt="pak-flag"></p>
     </div>
    `;

    // Inject footer into the page
    document.getElementById("footer-container").innerHTML = footerHTML;
});

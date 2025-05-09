import React from "react";
import ContactForm from "../../components/getintouch/Getintouch.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

const GetinTouchPage = () => {
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div>
        <ContactForm />
        </div>
        <div>
        <Footer />
        </div>
        </>
    );
    };

export default GetinTouchPage;

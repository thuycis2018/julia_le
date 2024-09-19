export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-brown-2 text-white p-4 text-center md:mt-10">
            <p>&copy; {currentYear} Julia Le. All rights reserved.</p>
        </footer>
    );
}
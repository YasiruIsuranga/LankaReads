import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';
import Authors from './pages/Authors/Authors';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';
import OpenPage from './pages/OpenPage/OpenPage';
import Delivery from './pages/Delivery/Delivery';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import OpenCartSelection from './pages/OpenCartSelection/OpenCartSelection';
import MultipleDelivery from './pages/MultipleDelivery/MultipleDelivery';
import BookDoc from './pages/BookDoc/BookDoc';
import MultipleBookDoc from './pages/MultipleBookDoc/MultipleBookDoc';  // New import

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/openpage/:bookId" element={<OpenPage />} />
            <Route path="/opencartselection/:bookId" element={<OpenCartSelection />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/bookdoc" element={<BookDoc />} />
            <Route path="/multiplebookdoc" element={<MultipleBookDoc />} /> {/* New route */}
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/multipledelivery" element={<MultipleDelivery />} />
            <Route path="*" element={<div>Page Not Found</div>} /> {/* Catch-all route */}
          </Routes>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

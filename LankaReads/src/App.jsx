import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';
import Authors from './pages/authors/Authors';
import Blogs from './pages/blogs/Blogs';
import Register from './pages/Register/Register';
import Payment from './pages/payment/Payment';
import OpenPage from './pages/OpenPage/OpenPage';
import Delivery from './pages/delivery/Delivery';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import OpenCartSelection from './pages/OpenCartSelection/OpenCartSelection';
import MultipleDelivery from './pages/multipleDelivery/MultipleDelivery';
import BookDoc from './pages/bookDoc/BookDoc';
import MultipleBookDoc from './pages/multipleBookDoc/MultipleBookDoc';  
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminBooks from './pages/AdminBooks/AdminBooks';
import AdminDelivery from './pages/AdminDelivery/AdminDelivery';
import AdminSubscription from './pages/AdminSubscription/AdminSubscription';
import AdminUsers from './pages/AdminUsers/AdminUsers';


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
            <Route path="/opencartselection/:bookId" element={<OpenCartSelection/>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/bookdoc" element={<BookDoc />} />
            <Route path="/multiplebookdoc" element={<MultipleBookDoc />} /> {/* New route */}
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/multipledelivery" element={<MultipleDelivery />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminbooks" element={<AdminBooks />} />
            <Route path="/admindelivery" element={<AdminDelivery />} />
            <Route path="/adminsubscription" element={<AdminSubscription />} />
            <Route path="/adminusers" element={<AdminUsers />} />
            <Route path="*" element={<div>Page Not Found</div>} /> {/* Catch-all route */}
          </Routes>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

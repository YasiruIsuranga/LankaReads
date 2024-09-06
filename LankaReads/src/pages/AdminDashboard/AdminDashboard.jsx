import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch books
        axios.get('/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching books:', error));

        // Fetch users
        axios.get('/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));

        // Fetch orders
        axios.get('/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-section">
                <h2>Books</h2>
                <ul>
                    {books.map(book => (
                        <li key={book._id}>
                            {book.name} - ${book.price} ({book.category})
                        </li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h2>Orders</h2>
                <ul>
                    {orders.map(order => (
                        <li key={order._id}>
                            Order by {order.name} - Total: ${order.totalPrice}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;

async function loadOrders() {
const API_BASE = 'https://webiphone-backend-api.onrender.com';

const res = await fetch(`${API_BASE}/api/preorders`);

const orders = await res.json();


const tbody = document.getElementById('orderList');
tbody.innerHTML = '';


orders.forEach(o => {
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${o.name}</td>
<td>${o.phone}</td>
<td>${o.email}</td>
<td>${o.address}</td>
<td>${new Date(o.createdAt).toLocaleString()}</td>
`;
tbody.appendChild(tr);
});
}


loadOrders();
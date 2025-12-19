const URL ='https://dummyjson.com/products'
const getSingleProduct = async () => {
    const productID = document.getElementById('productID').value;
    const errorDiv = document.getElementById('errorMessage');
    const table = document.getElementById('productTable');
    const tableBody = document.getElementById('tableBody');
    
    errorDiv.innerHTML = '';
    
    try {
        const response = await fetch(`${URL}/${productID}`);
        
        if (!response.ok) {
            throw new Error('Product not found');
        }
        
        const data = await response.json();
        tableBody.innerHTML = '';
                const productInfo = [
            { label: 'ID', value: data.id },
            { label: 'Title', value: data.title },
            { label: 'Description', value: data.description },
            { label: 'Price', value: '$' + data.price },
            { label: 'Discount Percentage', value: data.discountPercentage + '%' },
            { label: 'Rating', value: data.rating },
            { label: 'Stock', value: data.stock },
            { label: 'Category', value: data.category },
            { label: 'Brand', value: data.brand },
            { label: 'SKU', value: data.sku },
            { label: 'Availability Status', value: data.availabilityStatus },
            { label: 'Warranty Information', value: data.warrantyInformation },
            { label: 'Shipping Information', value: data.shippingInformation },
            { label: 'Return Policy', value: data.returnPolicy }
        ];
        
        productInfo.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${item.label}</strong></td>
                <td>${item.value}</td>
            `;
            tableBody.appendChild(row);
        });
        
        table.style.display = 'table';
        
    } catch (error) {
        errorDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        table.style.display = 'none';
        console.error(error);
    }
}

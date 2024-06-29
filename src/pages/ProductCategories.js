import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/ProductCategories.css';

const ProductCategories = () => {
  const navigate = useNavigate(); 

  const categories = [
    { name: 'Sofas', icon: '🛋️', description: 'Explore our range of comfortable sofas.', slug: 'sofas' },
    { name: 'Beds', icon: '🛏️', description: 'Browse various styles of beds for a good night\'s sleep.', slug: 'beds' },
    { name: 'Dining', icon: '🍽️', description: 'Find dining tables and chairs for your family meals.', slug: 'dining' },
    { name: 'Seating', icon: '🪑', description: 'Discover chairs and seating options for every space.', slug: 'seating' },
    { name: 'Coffee Tables', icon: '☕', description: 'View our collection of stylish coffee tables.', slug: 'coffee-tables' },
    { name: 'TV Units', icon: '📺', description: 'Explore TV units that combine style and functionality.', slug: 'tv-units' },
    { name: 'Shoe Racks', icon: '👞', description: 'Organize your shoes with our range of shoe racks.', slug: 'shoe-racks' },
    { name: 'Study', icon: '📚', description: 'Find study desks and chairs for a productive workspace.', slug: 'study' },
    { name: 'Lighting', icon: '💡', description: 'Illuminate your home with our diverse lighting options.', slug: 'lighting' },
    { name: 'Home Decor', icon: '🖼️', description: 'Enhance your living space with our home decor items.', slug: 'home-decor' },
    { name: 'Office Furniture', icon: '🖥️', description: 'Furnish your office with ergonomic furniture solutions.', slug: 'office-furniture' },
    { name: 'Mattresses', icon: '🛏️', description: 'Discover mattresses for a restful sleep experience.', slug: 'mattresses' },
    { name: 'Kitchenware', icon: '🍽️', description: 'Explore kitchen essentials and dining accessories.', slug: 'kitchenware' },
    { name: 'Bathroom Accessories', icon: '🚿', description: 'Find functional and stylish bathroom accessories.', slug: 'bathroom-accessories' },
    { name: 'Outdoor Furniture', icon: '🌳', description: 'Browse outdoor furniture for your patio or garden.', slug: 'outdoor-furniture' },
    { name: 'Rugs & Carpets', icon: '🏞️', description: 'Discover rugs and carpets to complement your decor.', slug: 'rugs-carpets' },
    { name: 'Wall Art', icon: '🖼️', description: 'Decorate your walls with our curated collection of art.', slug: 'wall-art' },
    { name: 'Planters & Gardening', icon: '🌿', description: 'Find planters and gardening tools for your green space.', slug: 'planters-gardening' },
    { name: 'Kids Furniture', icon: '🧸', description: 'Explore furniture and decor for kids\' rooms.', slug: 'kids-furniture' },
    { name: 'Storage Solutions', icon: '📦', description: 'Organize with our range of storage and shelving solutions.', slug: 'storage-solutions' },
  ];

  const handleCategoryClick = (slug) => {
    navigate(`/products/${slug}`); 
  };

  return (
    <div className="product-categories-container">
      <h1>Explore Our Products</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => handleCategoryClick(category.slug)}>
            <span className="category-icon">{category.icon}</span>
            <div>
              <p className="category-name">{category.name}</p>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;

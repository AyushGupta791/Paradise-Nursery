
export const categories = [
  {
    id: 'air-purifying',
    name: 'Air-Purifying Plants',
    intro: 'Freshen up your favourite spaces with leafy companions.',
    plants: [
      { id: 'peace-lily', name: 'Peace Lily', price: 18, description: 'Elegant white blooms and deep green leaves.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80' },
      { id: 'snake-plant', name: 'Snake Plant', price: 22, description: 'Sculptural leaves and an easy-care routine.', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b3b?auto=format&fit=crop&w=800&q=80' },
      { id: 'spider-plant', name: 'Spider Plant', price: 15, description: 'A lively, arching plant for shelves and desks.', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80' },
      { id: 'areca-palm', name: 'Areca Palm', price: 29, description: 'Soft, feathery fronds bring a tropical feel.', image: 'https://images.unsplash.com/photo-1597055181300-a8f7b2b8b0f4?auto=format&fit=crop&w=800&q=80' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 26, description: 'Glossy, bold foliage that makes a statement.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80' },
      { id: 'boston-fern', name: 'Boston Fern', price: 17, description: 'Full, feathered fronds with a classic look.', image: 'https://images.unsplash.com/photo-1597055181449-3c6c0d6d31f8?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'low-maintenance',
    name: 'Low-Maintenance Plants',
    intro: 'Beautiful greenery that is happy with a little less fuss.',
    plants: [
      { id: 'zz-plant', name: 'ZZ Plant', price: 24, description: 'Shiny leaves and a forgiving nature.', image: 'https://images.unsplash.com/photo-1632207691143-643e2b9a934a?auto=format&fit=crop&w=800&q=80' },
      { id: 'pothos', name: 'Golden Pothos', price: 16, description: 'Trailing vines that brighten a high shelf.', image: 'https://images.unsplash.com/photo-1616690247739-7f6c5c1a1e5d?auto=format&fit=crop&w=800&q=80' },
      { id: 'monstera', name: 'Monstera', price: 32, description: 'Iconic split leaves with a tropical vibe.', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=80' },
      { id: 'jade-plant', name: 'Jade Plant', price: 14, description: 'A compact succulent with rounded leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80' },
      { id: 'dracaena', name: 'Dracaena', price: 25, description: 'Upright foliage for an effortless corner accent.', image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 19, description: 'A graceful palm for cosy indoor spaces.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'succulents',
    name: 'Succulents & Cacti',
    intro: 'Small, characterful plants for sunny windowsills.',
    plants: [
      { id: 'echeveria', name: 'Echeveria', price: 10, description: 'A neat rosette with pastel-toned leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 12, description: 'A sturdy succulent with architectural leaves.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80' },
      { id: 'moon-cactus', name: 'Moon Cactus', price: 9, description: 'A cheerful pop of colour in a tiny pot.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80' },
      { id: 'haworthia', name: 'Haworthia', price: 11, description: 'Compact striped leaves with plenty of character.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80' },
      { id: 'burros-tail', name: "Burro's Tail", price: 13, description: 'Trailing stems covered in plump, bead-like leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80' },
      { id: 'panda-plant', name: 'Panda Plant', price: 12, description: 'Velvety leaves with a soft silvery edge.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

export const allPlants = categories.flatMap((category) =>
  category.plants.map((plant) => ({
    ...plant,
    category: category.name
  }))
);

interface Juice {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface JuiceData {
  [key: string]: Juice[];
}

const juiceData: JuiceData = {
  protein: [
    {
      id: 1,
      name: "Banana Protein Blast",
      description: "Rich blend of bananas, milk, and whey protein",
      price: 120,
      image: "/images/protein/banana-protein.jpg"
    },
    {
      id: 2,
      name: "Almond Power",
      description: "Almond milk with protein powder and dates",
      price: 150,
      image: "/images/protein/almond-power.jpg"
    },
    {
      id: 3,
      name: "Berry Protein Smoothie",
      description: "Mixed berries with protein-rich yogurt",
      price: 140,
      image: "/images/protein/berry-protein.jpg"
    },
    {
      id: 4,
      name: "Green Protein Machine",
      description: "Spinach and kale with pea protein",
      price: 160,
      image: "/images/protein/green-protein.jpg"
    },
    {
      id: 5,
      name: "Chocolate Protein Shake",
      description: "Rich chocolate with banana and protein",
      price: 130,
      image: "/images/protein/chocolate-protein.jpg"
    }
  ],
  summer: [
    {
      id: 6,
      name: "Watermelon Cooler",
      description: "Fresh watermelon juice with mint",
      price: 90,
      image: "/images/summer/watermelon.jpg"
    },
    {
      id: 7,
      name: "Mango Paradise",
      description: "Sweet mango juice with cardamom",
      price: 100,
      image: "/images/summer/mango.jpg"
    },
    {
      id: 8,
      name: "Lime Mint Splash",
      description: "Refreshing lime juice with mint",
      price: 80,
      image: "/images/summer/lime-mint.jpg"
    },
    {
      id: 9,
      name: "Orange Sunrise",
      description: "Fresh orange juice with ginger",
      price: 95,
      image: "/images/summer/orange.jpg"
    },
    {
      id: 10,
      name: "Coconut Cooler",
      description: "Fresh coconut water with lime",
      price: 110,
      image: "/images/summer/coconut.jpg"
    }
  ],
  exotic: [
    {
      id: 11,
      name: "Dragon Fruit Delight",
      description: "Dragon fruit blend with apple",
      price: 180,
      image: "/images/exotic/dragon-fruit.jpg"
    },
    {
      id: 12,
      name: "Passion Fruit Paradise",
      description: "Tropical passion fruit with honey",
      price: 170,
      image: "/images/exotic/passion-fruit.jpg"
    },
    {
      id: 13,
      name: "Kiwi Blast",
      description: "Fresh kiwi juice with mint",
      price: 160,
      image: "/images/exotic/kiwi.jpg"
    },
    {
      id: 14,
      name: "Avocado Dream",
      description: "Creamy avocado shake with vanilla",
      price: 190,
      image: "/images/exotic/avocado.jpg"
    },
    {
      id: 15,
      name: "Blue Butterfly Pea",
      description: "Blue butterfly pea flower juice",
      price: 200,
      image: "/images/exotic/butterfly-pea.jpg"
    }
  ],
  everyday: [
    {
      id: 16,
      name: "Apple Fresh",
      description: "Classic fresh apple juice",
      price: 70,
      image: "/images/everyday/apple.jpg"
    },
    {
      id: 17,
      name: "Carrot Vitality",
      description: "Healthy carrot juice with ginger",
      price: 75,
      image: "/images/everyday/carrot.jpg"
    },
    {
      id: 18,
      name: "Mixed Fruit Punch",
      description: "Blend of seasonal fruits",
      price: 85,
      image: "/images/everyday/mixed-fruit.jpg"
    },
    {
      id: 19,
      name: "Sweet Lime Soda",
      description: "Refreshing sweet lime with soda",
      price: 65,
      image: "/images/everyday/sweet-lime.jpg"
    },
    {
      id: 20,
      name: "Grape Joy",
      description: "Pure grape juice",
      price: 80,
      image: "/images/everyday/grape.jpg"
    }
  ]
};

export default juiceData;
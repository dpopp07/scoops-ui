import {
  IngredientCategory,
  IngredientData,
  Preparation,
  RecipeIngredientSummary,
} from './utils';

interface RecipeData {
  name: string;
  subtitle: string;
  description: string;
  estimatedMass: number;
  base: string;
  instructions: string[];
  ingredients: RecipeIngredientSummary[];
}

interface Ingredient {
  name: string;
  description: string;
  data?: IngredientData;
  category: IngredientCategory;
  preparation?: Preparation;
}

export const recipes: Record<string, RecipeData> = {
  vanilla: {
    name: 'Vanilla',
    subtitle: 'Simple and elegant',
    description:
      'Vanilla is one of the most complex spices in the world, yet few things are as paradoxically simple as a classic Vanilla ice cream. Smooth, creamy, and delicious - it will never get old!',
    estimatedMass: 945,
    base: 'Vanilla',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the vanilla paste and dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Continue cooking the dairy, whisking occasionally. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools to about 80° F.',
      'Cover the bowl or transfer the mixture to a container. Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 475,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 338,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 61,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 58,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Vanilla Paste',
        quantity: 5,
        unit: 'g',
      },
    ],
  },
  chocolate: {
    name: 'Chocolate',
    subtitle: 'Rich and bold',
    description:
      'Few flavors are as prized and beloved as chocolate, made from beans of the cacao plant. This recipe is for a daily driver type of chocolate ice cream. It always hits the spot!',
    estimatedMass: 937,
    base: 'Chocolate',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved. If not all the cocoa dissolves right away, that is okay. Keep going.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Continue cooking the dairy, whisking occasionally. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools. Once the temperature is below 80° F, add the finishing ingredients.',
      'Cover the bowl or transfer the mixture to a container. Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 514,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 291,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 29,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 64,
        unit: 'g',
      },
      {
        name: 'Fructose',
        quantity: 26,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 40,
        unit: 'g',
      },
      {
        name: 'Cocoa Powder',
        quantity: 30,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Vanilla Extract',
        quantity: 3,
        unit: 'g',
      },
    ],
  },
  butterPecan: {
    name: 'Butter Pecan',
    subtitle: 'Candied pecans mixed into brown butter and molasses ice cream',
    description:
      'This is a decadent, buttery ice cream filled with salty-sweet pecans that is a far cry from a standard vanilla with some pecans thrown in!',
    estimatedMass: 935,
    base: 'Butter Pecan', // Note: this could (maybe should?) change to TMS or BB one day.
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved. If not all the toasted milk powder dissolves right away, that is okay. Keep going.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Temper the egg yolks by whisking them in a bowl, then whisking in about a half cup of warm dairy a little bit at a time.',
      'Add the egg mixture back to the pot, scraping the sides with a rubber spatula.',
      'Continue cooking the mixture, whisking frequently to prevent scrambling the eggs. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools. Once the temperature is below 80° F, add the finishing ingredients.',
      'Measure the final weight of the mixture and transfer into a container. Use the final weight to determine the amount of pecans to mix in while churning.',
      'Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Once the ice cream is nearly done churning, slowly add the pecans to the churner so that they disperse through the ice cream.',
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 465,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 333,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 27,
        unit: 'g',
      },
      {
        name: 'Brown Sugar',
        quantity: 35,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 58,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 35,
        unit: 'g',
      },
      {
        name: 'Toasted Milk Powder',
        quantity: 25,
        unit: 'g',
      },
      {
        name: 'Egg Yolks',
        quantity: 15,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Vanilla Extract',
        quantity: 4,
        unit: 'g',
      },
      {
        name: 'Candied Pecans',
        quantity: 9,
        unit: '% of final weight',
      },
    ],
  },
  cookiesAndCream: {
    name: 'Cookies and Cream',
    subtitle: 'Genuine, name-brand Oreo cookies mixed into vanilla ice cream',
    description:
      'Cookies paired with cream is among the greatest duos known to mankind. It will never not hit.',
    estimatedMass: 950,
    base: 'Vanilla',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Continue cooking the dairy, whisking occasionally. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools. Once the temperature is below 80° F, add the finishing ingredients.',
      "Measure the final weight of the mixture and transfer into a container. Use the final weight to determine the amount of Oreo's to mix in while churning.",
      'Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      "Once the ice cream is nearly done churning, slowly add the crushed Oreo's to the churner so that they disperse through the ice cream.",
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 454,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 360,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 62,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 56,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Vanilla Extract',
        quantity: 5,
        unit: 'g',
      },
      {
        name: "Crushed Oreo's",
        quantity: 15,
        unit: '% of final weight',
      },
    ],
  },
  mintChocolateChip: {
    name: 'Mint Chocolate Chip',
    subtitle:
      'Cool peppermint ice cream, riddled with flecks of dark chocolate',
    description:
      'A true classic! Refreshing and invigorating at the same time. The ice cream will be white by default but you can add ~5 drops of green food coloring for an old-school appearance.',
    estimatedMass: 950,
    base: 'Mint',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Continue cooking the dairy, whisking occasionally. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools. Once the temperature is below 80° F, add the finishing ingredients.',
      'Measure the final weight of the mixture and transfer into a container. Use the final weight to calculate the amount of chocolate to mix in while churning.',
      'Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Once the ice cream is a few minutes away from being done churning, slowly drizzle the melted chocolate mixture into the churner. It will break up as it freezes, resulting in scattered flecks being dispersed throughout the ice cream.',
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 467,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 343,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 65,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 55,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Peppermint Extract',
        quantity: 7,
        unit: 'g',
      },
      {
        name: 'Chocolate Chips',
        quantity: 7,
        unit: '% of final weight',
      },
    ],
  },
  pistachio: {
    name: 'Pistachio',
    subtitle: 'Pistachio flavored ice cream mixed with more pistachios',
    description:
      'For whatever reason, the flavor of this nut just works so well in ice cream. No almond extract here, only pure pistachio pizzazz.',
    estimatedMass: 945,
    base: 'Pistachio',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Continue cooking the dairy, whisking occasionally. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools to below 80° F.',
      'Measure the final weight of the mixture and transfer into a container. Use the final weight to calculate the amount of pistachios to mix in while churning.',
      'Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Once the ice cream is nearly done churning, slowly add the pistachios to the churner so that they disperse through the ice cream.',
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Pistachio Infused Milk',
        quantity: 360,
        unit: 'g',
      },
      {
        name: 'Whole Milk',
        quantity: 127,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 330,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 65,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 55,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Pistachios',
        quantity: 5,
        unit: '% of final weight',
      },
    ],
  },
  banana: {
    name: 'Banana',
    subtitle: 'Pure banana ice cream',
    description:
      'Bursting with vibrant, tropical banana flavor that comes from steeping ripe bananas in the base, a technique I learned from "Hello My Name Is Ice Cream", by Dana Cree.',
    estimatedMass: 850,
    base: 'Banana',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'While the dairy is heating up, peel the ripe bananas and put them in a metal mixing bowl or freezer gallon bag.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Prepare an ice bath by filling a large bowl with ice and water.',
      'Temper the egg yolks by whisking them in a bowl, then whisking in about a half cup of warm dairy a little bit at a time.',
      'Add the egg mixture back to the pot, scraping the sides with a rubber spatula.',
      'Continue cooking the mixture, whisking frequently to prevent scrambling the eggs. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour into the bowl or bag containing the bananas.',
      'Nest the bowl or the bag in the ice bath to cool.',
      'Once the temperature is below 80° F, add the finishing ingredients and carefully agitate or stir to combine.',
      'Leaving the bananas in the mixture, place the bowl (covered) or bag in the fridge so the bananas can steep, 12-24 hours.',
      'Pour the mixture through a fine mesh strainer to filter out the bananas and any other undissolved solids.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 465,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 333,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 64,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 56,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Egg Yolks',
        quantity: 16,
        unit: 'g',
      },
      {
        name: 'Vanilla Extract',
        quantity: 3,
        unit: 'g',
      },
      {
        name: 'Bananas',
        quantity: 4,
      },
    ],
  },
  coffee: {
    name: 'Coffee',
    subtitle: 'Pure coffee ice cream, a wake up call',
    description:
      "Rich and smooth, with bold, aromatic coffee that's perfect for any coffee lover. Your favorite brew, now in a scoop!",
    estimatedMass: 940,
    base: 'Coffee',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved. If not all the instant coffee dissolves right away, that is okay. Keep going.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Temper the egg yolks by whisking them in a bowl, then whisking in about a half cup of warm dairy a little bit at a time.',
      'Add the egg mixture back to the pot, scraping the sides with a rubber spatula.',
      'Continue cooking the mixture, whisking frequently to prevent scrambling the eggs. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools to below 80° F.',
      'Cover the bowl or transfer the mixture to a container. Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 465,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 333,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 65,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 55,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 55,
        unit: 'g',
      },
      {
        name: 'Egg Yolks',
        quantity: 16,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Instant Coffee',
        quantity: 8,
        unit: 'g',
      },
    ],
  },
  chocolateChipCookieDough: {
    name: 'Chocolate Chip Cookie Dough',
    subtitle: 'Fresh vanilla ice cream mixed with bits of real cookie dough',
    description:
      'The perfect combination of creamy vanilla ice cream and soft, chewy cookie dough chunks. It’s a classic treat that never goes out of style!',
    estimatedMass: 935,
    base: 'Vanilla',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Temper the egg yolks by whisking them in a bowl, then whisking in about a half cup of warm dairy a little bit at a time.',
      'Add the egg mixture back to the pot, scraping the sides with a rubber spatula.',
      'Continue cooking the mixture, whisking frequently to prevent scrambling the eggs. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools. Once the temperature is below 80° F, add the finishing ingredients.',
      'Measure the final weight of the mixture and transfer into a container. Use the final weight to calculate the amount of cookie dough to mix in while churning.',
      'Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container, layering in the cookie dough bits as you go. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 465,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 344,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 61,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 57,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Egg Yolks',
        quantity: 16,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 2,
        unit: 'g',
      },
      {
        name: 'Vanilla Extract',
        quantity: 3.5,
        unit: 'g',
      },
      {
        name: 'Chocolate Chip Cookie Dough',
        quantity: 17,
        unit: '% of final weight',
      },
    ],
  },
  peanutButter: {
    name: 'Peanut Butter',
    subtitle: 'Pure peanut butter ice cream',
    description:
      'Creamy peanut butter ice cream that is sweet, nutty, and just the right amount of savory.',
    estimatedMass: 925,
    base: 'Peanut Butter',
    instructions: [
      'Measure out and mix together all of the solids.',
      'Add the peanut butter to a medium-sized mixing bowl.',
      'Add the dairy to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved.',
      'Add about a 1/4 cup of the warm dairy to the peanut butter, gently whisking to integrate. Repeat this process until thin and runny.',
      'Add the peanut butter mixture back to the pot, scraping the sides with a rubber spatula.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Temper the egg yolks by whisking them in a bowl, then whisking in about a half cup of warm dairy a little bit at a time.',
      'Add the egg mixture back to the pot, scraping the sides with a rubber spatula.',
      'Continue cooking the mixture, whisking frequently to prevent scrambling the eggs. Cook until the temperature reaches 165° F.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools to below 80° F.',
      'Cover the bowl or transfer the mixture to a container. Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 536,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 211,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 11,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 60,
        unit: 'g',
      },
      {
        name: 'Fructose',
        quantity: 27,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 45,
        unit: 'g',
      },
      {
        name: 'Egg Yolks',
        quantity: 32,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.5,
        unit: 'g',
      },
      {
        name: 'Peanut Butter',
        quantity: 75,
        unit: 'g',
      },
    ],
  },
  tiramisu: {
    name: 'Tiramisu',
    subtitle: 'Inspired by the classic Italian dessert',
    description:
      'Mascarpone-coffee base swirled with espresso and liqueur soaked ladyfingers and cacao.',
    estimatedMass: 930,
    base: 'Tiramisu',
    instructions: [
      'Measure out and mix together all of the solids except cocao powder (save that for after churning).',
      'Add all dairy except the mascarpone to a medium-sized, heavy-bottomed pot.',
      'Heat the dairy on the stove until warm, around 90° F.',
      'Slowly add the solids to the pot, whisking as you pour to dissolve the solids. Continue whisking until dissolved. If not all the instant coffee dissolves right away, that is okay. Keep going.',
      'Prepare an ice bath by nesting a metal mixing bowl into a larger bowl that is filled with ice and water.',
      'Continue cooking the mixture, whisking frequently. Cook until the temperature reaches 165° F.',
      'Add the coffee liqueur right before you pull off heat. Add it sooner for more sublte alcohol flavor, add it after cooling for a stronger flavor.',
      'Once the mixture is at temperature, pour through a fine mesh strainer into the bowl in the ice bath.',
      'Whisk occasionally while the mixture cools to below 80° F.',
      'Measure out the mascarpone in a small bowl. Add some of the chilled base to it and whisk to combine. Repeat until smooth then add back into the base.',
      'Cover the bowl or transfer the mixture to a container. Store in the fridge to age, at least 4 hours and up to overnight.',
      "Churn in an ice cream machine according to the manufacture's instructions, about 15-20 minutes.",
      'Draw ice cream from the machine and into a freezer-safe container. Layer in the ladyfingers as you go and dust each layer with cocoa powder. Store in the freezer.',
    ],
    ingredients: [
      {
        name: 'Whole Milk',
        quantity: 435,
        unit: 'g',
      },
      {
        name: 'Heavy Cream',
        quantity: 340,
        unit: 'g',
      },
      {
        name: 'Sugar',
        quantity: 69,
        unit: 'g',
      },
      {
        name: 'Dextrose',
        quantity: 41,
        unit: 'g',
      },
      {
        name: 'Milk Powder',
        quantity: 50,
        unit: 'g',
      },
      {
        name: 'Stabilizer Blend',
        quantity: 1.4,
        unit: 'g',
      },
      {
        name: 'Salt',
        quantity: 1.6,
        unit: 'g',
      },
      {
        name: 'Instant Coffee',
        quantity: 5,
        unit: 'g',
      },
      {
        name: 'Mascarpone',
        quantity: 45,
        unit: 'g',
      },
      {
        name: 'Coffee Liqueur',
        quantity: 12,
        unit: 'g',
      },
      {
        name: 'Soaked Ladyfingers',
        quantity: 3.5,
        unit: '% of final weight',
      },
      {
        name: 'Cocoa',
        quantity: 0.5,
        unit: '% of final weight',
      },
    ],
  },
};

export const ingredients: Record<string, Ingredient> = {
  milk: {
    name: 'Whole Milk',
    description:
      "Good ol' cow's milk. The backbone of ice cream. When balancing a recipe and there are gaps to fill, use milk.",
    data: {
      pac: 0.04,
      pod: 0.0067,
      milkFat: 0.036,
      milkSolidsNonfat: 0.088,
      water: 0.873,
    },
    category: 'dairy' as IngredientCategory,
  },
  cream: {
    name: 'Heavy Cream',
    description:
      'Heavy whipping cream. Adds fat, creaminess, and richness to ice cream. Using different ratios between cream and milk adjusts the fat content of your ice cream.',
    data: {
      pac: 0.035,
      pod: 0.0005,
      milkFat: 0.36,
      milkSolidsNonfat: 0.056,
      water: 0.58,
    },
    category: 'dairy' as IngredientCategory,
  },
  sugar: {
    name: 'Sugar',
    description:
      'Normal table sugar, aka "sucrose". Adds sweetness and reduces the freezing point.',
    data: {
      pac: 1,
      pod: 1,
      sugars: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  dextrose: {
    name: 'Dextrose',
    description:
      'One half of of the sucrose molecule. Considerably reduces the freezing point and is not very sweet. Ideal for making ice cream soft and smooth without making it too sweet.',
    data: {
      pac: 1.9,
      pod: 0.75,
      sugars: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  milkPowder: {
    name: 'Milk Powder',
    description:
      "The solids found in milk, including lactose and milk proteins. Essentially, everything in milk that isn't water or milk fat. Helps to balance the solids-to-water ratio in ice cream.",
    data: {
      pod: 0.08,
      pac: 0.5,
      milkSolidsNonfat: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  eggYolks: {
    name: 'Egg Yolks',
    description:
      'Egg yolks are emulsifiers and stabilizers that assist with the texture and lend a custard flavor to ice cream. I typically use no more than 1-2 in recipes, and only when they pair well with the flavor of the ice cream.',
    data: {
      otherFat: 0.23,
      otherSolidsNonfat: 0.27,
      water: 0.5,
    },
    category: 'other' as IngredientCategory,
  },
  stabilizerBlend: {
    name: 'Stabilizer Blend',
    description:
      'Stabilizers significantly improve the texture and longevity of ice cream. They may spook some people but they are all natural and nothing to be afraid of!',
    data: {
      stabilizers: 1,
    },
    preparation: {
      ingredients: [
        {
          name: 'Locust bean gum',
          quantity: 8,
          unit: 'g',
        },
        {
          name: 'Guar gum',
          quantity: 4,
          unit: 'g',
        },
        {
          name: 'Lambda carageenan',
          quantity: 2,
          unit: 'g',
        },
      ],
      instructions: [
        'Mix together until thoroughly combined.',
        'Store in a sealed container or plastic bag at room temperature.',
      ],
      description:
        'My go-to stabilizer blend, taken from the UnderBelly blog. Makes enough for ~10 batches of ice cream. Can likely be replaced by most commercial stabilizer blends.',
    },
    category: 'solids' as IngredientCategory,
  },
  salt: {
    name: 'Salt',
    description:
      'You know it, you love it. The mineral that makes all other flavors pop! It would be silly to make ice cream without it.',
    data: {
      otherSolidsNonfat: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  vanillaExtract: {
    name: 'Vanilla Extract',
    description:
      'Extraction of vanilla bean into a blend of water and alcohol. Use something high quality! May be substituted with vanilla paste for a stronger bean flavor, if desired.',
    data: {
      water: 0.526,
    },
    category: 'finishing' as IngredientCategory,
  },
  vanillaPaste: {
    name: 'Vanilla Paste',
    description:
      'Blend of vanilla bean, water, and alcohol. Bean flecks continue to extract so add while hot for a more intense flavor. Use something high quality!',
    data: {
      water: 0.5, // totally made this up idk
    },
    category: 'other' as IngredientCategory,
  },
  cocoaPowder: {
    name: 'Cocoa Powder',
    description:
      'Ground cocoa beans with the cocoa butter mostly removed. Use something high quality, like Valrhona.',
    data: {
      pac: -0.42,
      pod: -0.5,
      otherFat: 0.214,
      otherSolidsNonfat: 0.786,
    },
    category: 'solids' as IngredientCategory,
  },
  cocoa: {
    name: 'Cocoa',
    description: 'Cocoa powder... as a mix-in.',
    data: {
      pac: -0.42,
      pod: -0.5,
      otherFat: 0.214,
      otherSolidsNonfat: 0.786,
    },
    category: 'drawing' as IngredientCategory,
  },
  fructose: {
    name: 'Fructose',
    description:
      'One half of a standard sugar molecule. Considerably reduces freezing point and increases sweetness. Helpful when overall solids need to be reduced.',
    data: {
      pac: 1.9,
      pod: 1.7,
      sugars: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  toastedMilkPowder: {
    name: 'Toasted Milk Powder',
    description:
      'Toasting milk solids is my favorite way to add brown butter flavor to an ice cream. It lends sweet, nutty notes that can present as brown butter, graham cracker, or shortbread depending on the application. Be careful of using too much - it shines at or below a certain threshold (around 2.5-3% of the total mass).',
    data: {
      pod: 0.08,
      pac: 0.5,
      milkSolidsNonfat: 1,
    },
    preparation: {
      ingredients: [
        {
          name: 'Milk Powder',
          quantity: 50,
          unit: 'g',
        },
      ],
      instructions: [
        'Preheat the oven to 300° F.',
        'Spread out milk powder on sheet pan lined with parchment paper or aluminum foil.',
        'Toast in oven for 12 minutes, pulling out to stir halfway through.',
        'Remove and remove the paper/foil from the pan and place somewhere to cool down.',
        'Store in a sealed container in a cool, dry place. It should keep fairly well.',
      ],
      description:
        'Toasting milk solids is exactly what happens when you brown butter. This replicates those flavors, without the milkfat.',
    },
    category: 'solids' as IngredientCategory,
  },
  brownSugar: {
    name: 'Brown Sugar',
    description:
      'Sugar, but with some molasses hanging around. Can add a subtle caramel-like flavor to ice cream.',
    data: {
      pac: 1,
      pod: 1,
      sugars: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  candiedPecans: {
    name: 'Candied Pecans',
    description:
      'Pecans toasted with sugar and butter, to be used as a mix-in.',
    preparation: {
      ingredients: [
        {
          name: 'Chopped pecans',
          quantity: 100,
          unit: 'g',
        },
        {
          name: 'Unsalted butter',
          quantity: 20,
          unit: 'g',
        },
        {
          name: 'Brown Sugar',
          quantity: 20,
          unit: 'g',
        },
        {
          name: 'Water',
          quantity: 20,
          unit: 'g',
        },
        {
          name: 'Salt',
          quantity: 2,
          unit: 'g',
        },
      ],
      instructions: [
        'Add sugar, water, and butter to large saucepan.',
        'Cook on medium-low and stir to melt the butter and dissolve the sugar.',
        'Once the mixture is just starting to bubble, add the chopped pecans and salt and stir to coat the nuts in the mixture.',
        "Cook until the pecans become fragrant. It should just take a minute or two. Don't overcook them - if they smell good, they're done.",
        'Transfer to a plate to cool, then transfer to a sealed container.',
        'Store in the fridge.',
      ],
      description:
        'Butter and pecans are a match made in heaven. Sugar and salt help the flavor to pop once frozen in ice cream. Toasting brings out the flavor of the nuts but be careful not to overcook them!',
    },
    category: 'churning' as IngredientCategory,
  },
  crushedOreos: {
    name: "Crushed Oreo's",
    description:
      "There's a reason they are America's favorite cookie. Crushed for use as a mix-in.",
    preparation: {
      ingredients: [
        {
          name: 'Oreo Cookies',
          quantity: 15,
        },
      ],
      instructions: [
        'Separate the cookies from the icing by twisting, pulling apart, and scraping off any residual icing with a knife.',
        'Discard icing and weigh cookies. 15 is an approximation - use as many as you need for the given ice cream recipe.',
        'Transfer the cookies to a sealed bag. Crush with a kitchen mallet until desired consistency is reached. I like a mix of powder and chunks.',
        'Keep sealed and stored until ready to use.',
      ],
      description:
        'I think ice cream is better with only the cookies, so I recommend removing the icing. That said, if you want it - keep it! Note that the amount is just an estimate - use as much as you need for your batch.',
    },
    category: 'churning' as IngredientCategory,
  },
  peppermintExtract: {
    name: 'Peppermint Extract',
    description:
      'Extraction of peppermint leaves, the classic mint ice cream flavor. The flavor is usually intense - a little goes a long way. Use something high quality.',
    data: {
      water: 0.526,
    },
    category: 'finishing' as IngredientCategory,
  },
  chocolateChips: {
    name: 'Chocolate Chips',
    description:
      'Chocolate chips, in the form of "straciatella" - an Italian style that distributes flecks of soft chocolate throughout the ice cream.',
    preparation: {
      ingredients: [
        {
          name: 'Dark Chocolate',
          quantity: 80,
          unit: '%',
        },
        {
          name: 'Refined Coconut Oil',
          quantity: 20,
          unit: '%',
        },
      ],
      instructions: [
        'Calculate and measure, in weight, the amounts of chocolate and coconut oil based on the provided ratios and the ice cream recipe.',
        'Fill a large pot of water with just a couple inches of water.',
        'Heat the water on the stove until boiling.',
        'Add the chocolate and coconut oil to a metal mixing bowl or double boiler.',
        'Turn off the stove and nest the bowl in the pot - the bottom should not touch the water.',
        'As the steam melts the chocolate and the oil, stir occasionally with a heatproof spatula.',
        'Once the mixture is totally melted and well-integrated, remove from heat.',
        "When pouring into the ice cream, I like the temperature to be between 110-130° F, though that isn't a strict range.",
      ],
      description:
        'Mixing chocolate with coconut oil prevents the chocolate from freezing too hard. Pouring the mixture in warm will result in the chips being broken up as they freeze. A cooler mixture will result in larger chips; hotter, smaller.',
    },
    category: 'churning' as IngredientCategory,
  },
  pistachioInfusedMilk: {
    name: 'Pistachio Infused Milk',
    description: 'Pistachio flavored milk for pistachio flavored ice cream.',
    data: {
      // TODO: This exactly matches whole milk for now, which is obviously not
      // correct, but I have no idea of knowing what it actually is right now.
      pac: 0.04,
      pod: 0.0067,
      milkFat: 0.036,
      milkSolidsNonfat: 0.088,
      water: 0.873,
    },
    preparation: {
      ingredients: [
        {
          name: 'Whole Milk',
          quantity: 443,
          unit: 'g',
        },
        {
          name: 'Unsalted Pistachios',
          quantity: 111,
          unit: 'g',
        },
      ],
      instructions: [
        'Preheat oven to 300° F.',
        'Arrange pistachios on a sheet pan lined with parchment paper or aluminum foil.',
        'Toast nuts for 5 minutes or until fragrant. Be careful not to overcook them.',
        'Add nuts and milk to a blender. Quickly pulse blender 3-4 times. The nuts should not be completely pulverized or they will be hard to strain.',
        'Leave in the fridge to steep for 8-24 hours. Shake every now and then if you think about it.',
        'Strain through a nut milk bag. Squeeze the bag to extract as much yield as you can. You should end up with 388+ g of infused milk if you try hard and believe in yourself.',
        'Store in a sealed container in the fridge until ready to use.',
      ],
      description:
        "This is the best method I've found for flavoring an ice cream with pistachios without compromising on texture. Allocate the time needed for a good long steep and you'll be rewarded with a flavorful ice cream.",
    },
    category: 'dairy' as IngredientCategory,
  },
  pistachios: {
    name: 'Pistachios',
    description:
      'Pistachio nuts, salted or unsalted, toasted or not - your choice - for use as a mix-in.',
    category: 'churning' as IngredientCategory,
  },
  instantCoffee: {
    name: 'Instant Coffee',
    description:
      'Easy to dissolve coffee granules. They are highly effective for producing a great coffee flavor in ice cream. Use the highest quality you can get your hands on.',
    data: {
      pac: 0.2,
      otherSolidsNonfat: 1,
    },
    category: 'solids' as IngredientCategory,
  },
  peanutButter: {
    name: 'Peanut Butter',
    description:
      'Needs no introduction. Use a creamy version with no added salt, oil, etc. Ideally, it contains nothing but ground peanuts.',
    data: {
      pod: 0.03,
      pac: -0.22,
      otherFat: 0.53,
      otherSolidsNonfat: 0.47,
    },
    category: 'other' as IngredientCategory,
  },
  chocolateChipCookieDough: {
    name: 'Chocolate Chip Cookie Dough',
    description:
      'Cookie dough rules; this is especially true in the context of ice cream. I find it works best in smaller chunks for more evenly distributed bites.',
    preparation: {
      ingredients: [
        {
          name: 'Butter',
          quantity: 100,
          unit: 'g',
        },
        {
          name: 'Brown Sugar',
          quantity: 75,
          unit: 'g',
        },
        {
          name: 'Sugar',
          quantity: 75,
          unit: 'g',
        },
        {
          name: 'Vanilla Extract',
          quantity: 5,
          unit: 'g',
        },
        {
          name: 'Salt',
          quantity: 5,
          unit: 'g',
        },
        {
          name: 'Egg',
          quantity: 1,
          unit: 'large',
        },
        {
          name: 'Flour',
          quantity: 150,
          unit: 'g',
        },
        {
          name: 'Baking Chocolate',
          quantity: 80,
          unit: 'g',
        },
        {
          name: 'Coconut Oil',
          quantity: 20,
          unit: 'g',
        },
      ],
      instructions: [
        'Start by preparing the chocolate, which will involve melting it with coconut oil.',
        'Fill a large pot of water with just a couple inches of water.',
        'Heat the water on the stove until boiling.',
        'Add the chocolate and coconut oil to a metal mixing bowl or double boiler.',
        'Turn off the stove and nest the bowl in the pot - the bottom should not touch the water.',
        'As the steam melts the chocolate and the oil, stir occasionally with a heatproof spatula.',
        'Once the mixture is totally melted and well-integrated, remove from heat.',
        'Line a baking sheet with parchment paper and pour the melted chocolate mixture onto the paper. Let it spread out.',
        'Set aside in the fridge to cool down.',
        'Mix the butter, sugar, brown sugar, vanilla, and salt in a stand mixer, on medium, until smooth.',
        'Add egg and mix until combined.',
        'Pull the chocolate out of the fridge, transfer paper to a cutting board, and cut the chocolate into small pieces.',
        'Add flour to the mixer bowl and mix until combined.',
        'Add the chocolate chips to the mixing bowl while running the mixer on slow. Mix only as long as necessary to integrate. If not entirely cooled, they may streak into the dough, which is cool, but avoid over-mixing.',
        'Transfer dough to a sheet pan and spread out into a thin layer. Store in the freezer from one hour to one day.',
        'Transfer to a cutting board and chop into small bits. Transfer back into the pan, and back into the freezer.',
        "Once it's hard enough not to stick together, transfer to a sealed container or freezer gallon bag.",
        'Store in the freezer until ready to use.',
      ],
      description:
        'This recipe is adapted from "Hello, My Name Is Ice Cream" by Dana Cree, with only a small tweak to make the chocolate chips softer when frozen.',
    },
    category: 'drawing' as IngredientCategory,
  },
  bananas: {
    name: 'Bananas',
    description:
      'A delicious, yellow, and slightly radioactive fruit. The ideal way to flavor ice cream with them is by steeping, not blending. They should be VERY ripe.',
    category: 'steeping' as IngredientCategory,
  },
  mascarpone: {
    name: 'Mascarpone',
    description: 'Italian cream cheese',
    data: {
      pac: 0.279,
      pod: 0.042,
      milkFat: 0.0476,
      milkSolidsNonfat: 0.4824,
      water: 0.47,
    },
    category: 'finishing' as IngredientCategory,
  },
  coffeeLiqueur: {
    name: 'Coffee Liqueur',
    description:
      'Usually a spirit steeped with fresh coffee, then diluted and sweetened. Worth using something good quality like Mr Blacks or St George.',
    data: {
      // Underbelly data for Kahlua
      pac: 2.89,
      pod: 0.36,
      water: 0.44,
      sugars: 0.36,
    },
    category: 'other' as IngredientCategory,
  },
  soakedLadyfingers: {
    name: 'Soaked Ladyfingers',
    description:
      'Traditional ladyfingers soaked in a blend of espresso, sugar, and alcohol to make them cakey without being icy.',
    preparation: {
      ingredients: [
        {
          name: 'Ladyfingers',
          quantity: 40,
          unit: 'g',
        },
        {
          name: 'Espresso',
          quantity: 75,
          unit: 'g',
        },
        {
          name: 'Brown Sugar',
          quantity: 25,
          unit: 'g',
        },
        {
          name: 'Amaretto',
          quantity: 15,
          unit: 'g',
        },
        {
          name: 'Coffee Liqueur',
          quantity: 20,
          unit: 'g',
        },
        {
          name: 'Salt',
          quantity: 0.3,
          unit: 'g',
        },
      ],
      instructions: [
        'Measure out and combine the brown sugar and salt.',
        'Ideally, brew fresh espresso. Pulling two shots should get you there. Otherwise, cold brew concentrate may work.',
        'Dissolve solids in the coffee while it is still hot.',
        'Measure and combine the two liqueurs.',
        'Once the espresso syrup is cool, add the liqueurs and stir to combine.',
        'When it is time to actually use them in the ice cream, cut the ladyfingers into quarters.',
        'Dunk each ladyfinger piece into the soak for ~2 seconds before adding to churned ice cream.',
      ],
      description:
        'Traditional ladyfingers soaked in a blend of espresso, sugar, and liqueur to make them flavorful and cakey without being icy. I like to prep this right before, or while, I churn the ice cream I am adding it to. Using good quality liqueurs goes a long way. Undersoaking will result in the chunks being bready and tough when frozen. Oversoaking will result in the chunks getting mushy. Try the extremes for a couple chunks, you may have a preference.',
    },
    category: 'drawing' as IngredientCategory,
  },
};

import classes from './About.module.css';

export default function About() {
  return (
    <>
      <h3>About Scoops</h3>
      <p className={classes.text}>
        Hello there, and welcome to Scoops! Scoops is a web application I built
        to share the ice cream recipes I've developed, while giving folks a peek
        behind the curtain at the data that goes into a balanced recipe.
        <br />
        <br />
        For as long as I can remember, ice cream has been my favorite dessert
        (and I love dessert). It's a trait that's been passed-down by a long
        line of ice cream lovers. A couple years ago, I decided that buying and
        eating it wasn't enough - I wanted to make it. And if I was going to
        make it, I wanted to <i>understand</i> it. Such is my personality. I
        spent a couple weeks reading and studying before I ever churned a batch.
        Turns out, for something so seemingly simple, the science behind ice
        cream is rather complex! It's always fun when something is
        simultaneously accessible to everyone and yet rewards deep study for
        nerds like me, and ice cream is one of those things.
        <br />
        <br />
        It’s also a data-driven endeavor and, using the wealth of knowledge at
        the{' '}
        <a href="https://under-belly.org/category/ice-cream">
          Underbelly ice cream blog
        </a>
        , I built a calculator in Excel to compute measurable metrics for the
        recipes I would make (more on that in the next section). Pretty cool,
        huh? Real nerdy stuff!
        <br />
        <br />
        As a fledgling, wannabe ice cream scientist, I spent my first few weeks
        in the game making nothing but vanilla ice cream. Tweaking variables,
        identifying the characteristics associated with those tweaks, taking
        good notes, etc. - that’s just good science! By the end, my wife and
        friends were sick of vanilla ice cream but I had more or less dialed in
        my ideal ice cream. Not only that, I identified target values for the
        metrics I was calculating - values I could apply to any recipe,
        regardless of flavor. From there, I expanded to all sorts of flavors,
        classics and more creative ventures alike.
        <br />
        <br />
        Scoops is the culmination of the years since - years of experimentation,
        recipe development, and eating delicious ice cream. Thanks for reading.
        I’m excited to share these recipes with y’all!
      </p>
      <h3 id="about-analysis">What is analysis?</h3>
      <p className={classes.text}>
        Ice cream is complicated, chemically. However, there are a few metrics
        that are easy to measure, simple to calculate, and provide valuable
        predictive insight into what a batch of ice cream will be like. The
        metrics indicate things like how sweet an ice cream will be, how soft
        once frozen, what the texture will be like, etc. Descriptive adjectives
        like rich, creamy, oily, thin, chalky, grainy, and icy can all be
        roughly estimated by calculating a few numbers prior to making an ice
        cream.
        <br />
        <br />
        These are the metrics that I calculate and provide for each recipe on
        this website. Through trial and error, I’ve mostly determined which
        values I want for a given flavor. Before I make a batch of ice cream, I
        balance the recipe - tweaking the ingredient amounts until I reach the
        desired values. If a recipe needs improvement, I’ll adjust the targets
        accordingly and iterate from there. This site contains recipes that are
        generally the final version of each flavor, though I can always find new
        things to try!
      </p>
      <h4>Glossary</h4>
      <p className={classes.text}>
        Some of the terms in the "Analysis" section of each recipe page are
        likely unfamiliar to most readers. Refer to this glossary to understand
        what each metric is and why I care about it!
      </p>
      <h5>POD</h5>
      <p className={classes.text}>
        POD is essentially “perceived sweetness”. It’s a measure, not of how
        sugary something is, but how sweet it actually tastes. It’s find it’s
        one of the most useful things to measure for ice cream. I target values
        between 112 and 115, with 114 being my typical sweet spot (pun
        intended).
      </p>
      <h5>PAC</h5>
      <p className={classes.text}>
        PAC basically boils down to “softness when frozen”. It’s roughly tied to
        the freezing point depression certain ingredients (like sugar) have on a
        solution. If you put water in a freezer, it becomes a block of ice. Ice
        cream is mostly water, yet it does not freeze as hard as ice. This is
        because molecules dissolved in the water lower the freezing point below
        that of water; thus, it is softer when frozen!
      </p>
      <h5>Milk Fat</h5>
      <p className={classes.text}>
        Milk Fat is the proportion of butterfat in a recipe - fat contributed by
        dairy ingredients like milk and cream. Higher proportions make for a
        richer and more creamy ice cream, but too high and an ice cream gets
        oily, coats the mouth in a slightly unpleasant way, and can be grainy.
      </p>
      <h5>Total Fat</h5>
      <p className={classes.text}>
        Total Fat is the proportion of a recipe made up of fat molecules,
        including milk fat. Too low, and an ice cream comes off as thin and
        watery. Too high, and the ice cream is flabby and oily. My ideal is
        around 14% by weight.
      </p>
      <h5>Milk Solids Nonfat</h5>
      <p className={classes.text}>
        Dairy products like milk and cream are a mixture of water, butterfat,
        and dissolved solids. These solids consist of lactose (a sugar) and
        various proteins. Ice cream benefits from more nonfat milk solids that
        dairy contributes on its own. We can add more with milk powder, and we
        calculate this number to ensure we’re adding an appropriate amount.
        Usually around 12% of a recipe.
      </p>
      <h5>Total Solids Nonfat</h5>
      <p className={classes.text}>
        This provides the sum of all non-water molecules in an ice cream that
        aren’t fat molecules. It includes things like milk solids, sugars, salt,
        etc. It’s primary an intermediary calculation but it can be useful to
        check.
      </p>
      <h5>Sugars</h5>
      <p className={classes.text}>
        This number is less useful than POD and PAC, which are both influenced
        primarily by sugars, but I still like to understand what proportion of a
        recipe is made up of sugar. Typically my recipes hover around 12% sugar
        by weight, significantly less than commercial ice creams. The nuances of
        the dairy and other flavors are easily covered up by too much sugar.
      </p>
      <h5>Stabilizers</h5>
      <p className={classes.text}>
        Water is both a hero and a villain when it comes to ice cream. Without
        it, there is no ice cream (hence the “ice” part of the name). However,
        if not properly controlled, it can be an ice cream’s downfall. Anyone
        who has ever described an ice cream as “too icy” knows exactly what I’m
        talking about. Stabilizers are products, typically plant-based, that
        essentially bind to water in a unique way and, when used correctly,
        significantly improve the texture and longevity of ice cream. Some folks
        get squeamish about putting “chemicals” they don’t understand in their
        ice cream, but stabilizers are all natural and nothing to be afraid of!
        This metric tells us how much is included in a recipe. Stabilizers are
        powerful and a little goes a very long way. Typically around 0.15% by
        weight is perfect. Too little and you risk an icy and thin ice cream.
        Too much and you will end up with the texture of a Laffy Taffy.
      </p>
      <h5>Total Solids</h5>
      <p className={classes.text}>
        In ice cream, solids are everything that isn’t water. Fat, sugars, etc.
        At the end of the day, the fundamental building blocks of ice cream that
        need to be balanced are solids and water. Solids are crucial - they are
        what separate a block of ice from a batch of delicious ice cream. Too
        few, and you end up with ice. Too much, and you end up with a crumbly
        mess. There’s a little bit of wiggle room here, but I typically shoot
        for around 40% solids by weight in my recipes.
      </p>
      <h5>Water</h5>
      <p className={classes.text}>
        We all know what this is. Water is never added directly to ice cream -
        it comes from the milk and cream (which are both mostly water). It is
        absolutely crucial for making ice cream, but must be kept under control.
        It’s like Derek Zoolander said: “You gotta tame the beast before you let
        it out of its cage”. Water is balanced out with solids of various kinds
        but it always needs to be there and should usually be around 60% of the
        total weight of the ice cream.
      </p>
    </>
  );
}

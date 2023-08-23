## Sustainable Frontend Cheatsheet

### Unused elements

- Check if the package.json contains any packages that are not being used - the packages you use will make a big contribution to the size of your repository. You can use depcheck to find them. Remember to run ‘npm install’ after changing your package.json to see your changes.
- If you can minimise the number of packages you use, that can help you further reduce overhead.
- Check that you don’t have any unused assets or code within your repository. Anything marked as 'old' or 'archive' within the repository should be deleted.

### Video

- Videos will make a large contribution to the weight of your page. It’s worth considering if you can deliver a good user experience without video.
- If you have any uncompressed videos on your site, compress them.
- If you’re hosting high quality videos, consider whether you could host them in lower quality without affecting user experience.

### Images

- Images will make a large contribution to the weight of your page. It’s worth considering if you can deliver a good user experience without images, or with only a few images.
- If you have any uncompressed images on your site, compress them.
- Consider replacing pixellated images (.jpg, .png) with vector images (.svg).
- Right-size your images, rather than scaling them up or down using css.
- Read more on using images effectively [here](https://sustainablewebdesign.org/has-the-design-used-imagery-efficiently/).

### Animation

- Animated elements will make a medium contributions to the weight of your page. Consider removing them if they’re not making a big impact.

### Fonts

- Font choices can make a large contribution to the weight of your page. The lightest fonts are system fonts- these are fonts which are already present on every users’ machine by default. Examples of system fonts are Helvetica, Arial and Futura. Web fonts like Google Fonts make a page heavier as they have to be fetched. This page uses Montesserat and Bebas Neue.
- If you use Google Fonts, you can reduce the amount your webpage needs to fetch by refining the query you use to fetch them. For instance, in this project we fetch the entire font family for the fonts we are using (see `public/index.html`).

### Icons

- Similarly to web fonts, if you use web icons, they need to be fetched. You can reduce the amount your webpage needs to fetch by refining the query you use to fetch them. For instance, in this project we are fetching a large number of icons (see `public/index.html`).

### Efficiency

- More sustainable solutions are more efficient solutions. A good way to make your project more sustainable is to look up efficiency strategies for the tech stack that you are using on your project. For instance, you can find documentation on making your React project more efficient [here](https://legacy.reactjs.org/docs/optimizing-performance.html).

### The Philosophy of Sustainability Design

Creating a sustainable website is not all about stripping everything out of a website which you can- if you slim a website down without taking account of design and usability few people will use it, and then you’ve simply created waste. Instead, good, sustainable web design is about delivering your website in a way which is lean, and which works well for your users. A good way to find this balance on your own projects is to you use mobile-first development, which forces you to be thoughtful about the elements that you choose to include on a page, and to set yourself [page weight budgets](https://sustainablewebdesign.org/has-the-design-team-set-a-page-weight-budget/) and efficiency targets while designing.
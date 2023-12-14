# Biodanza

## Init the repo

## Start the app

To start the development server run `nx serve web`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Linting

styling on a specific project:
> > `nx stylelint <projectname> --skip-nx-cache`

run style lint all all projects:
> `nx run-many -t stylelint --skip-nx-cache`

## Test Driven Development

### Storybook
Per library or app, you'll need to create a storybook configuration with this command:

> `nx g @nx/storybook:configuration project-name`

Generate stories for all components in a project:
> `nx g @nx/angular:stories project-name`

Run storybook for project:
> `nx run project-name:storybook`


### Issue

--skip-nx-cache: add this especially when you're playing around with nx settings. 


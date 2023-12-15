# Biodanza

## Prepare

| Package | Version  |
| :------ |----------|
| Node    | 18.17.0  |
| Yarn    | v1.22.19 |

## Start the app

> `yarn`  

> `nx serve web`
 
Browse to http://localhost:4200/

## Generating code
Nx has various ways to generate code based on schematics. For any Nx command you can use the --dry-run flag to see what would happen if you have run a certain command

- Generate project (application or library) inside top-level folder

> `nx g lib <project name> --directory=<apps | libs>`

## Linting

styling on a specific project:

> `nx stylelint <projectname> --skip-nx-cache`

run style lint all projects:

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


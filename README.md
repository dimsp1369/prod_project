### 1. Project structure 

Current project uses the [**Feature-Sliced Design**](https://feature-sliced.design/) (FSD)

In FSD, a project consists of **layers**, each layer is made up of **slices** and each slice is made up of **segments**.

The layers are standardized across all projects and vertically arranged. Modules on one layer can only interact with modules from the layers strictly below. There are currently seven of them (bottom to top):

* `shared` — reusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, API)
* `entity` — business entities.(e.g., User, Product, Order)
* `features` — user interactions, actions that bring business value to the user.(e.g. SendComment, AddToCart, UsersSearch)
* `widgets` — compositional layer to combine entities and features into meaningful blocks.(e.g. IssuesList, UserProfile)
* `pages` — compositional layer to construct full pages from entities, features and widgets.
* `processes` — complex inter-page scenarios. (e.g., authentication)
* `app` — app-wide settings, styles and providers.

Then there are **slices**, which partition the code by business domain. This makes your codebase easy to navigate by keeping logically related modules close together. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling.

Each slice, in turn, consists of **segments**. These are tiny modules that are meant to help with separating code within a slice by its technical purpose. The most common segments are `ui`, `model` (store, actions), `api` and `lib` (utils/hooks), but you can omit some or add more, as you see fit.


### 2. Technologies

### 3. Scripts


### 4. Sources

 1. https://github.com/reg-viz/reg-cli -- Репозиторий по отрисовке скриншитного тестирования
 2. https://feature-sliced.design/ - Architectural methodology for frontend projects

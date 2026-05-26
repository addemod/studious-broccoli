1. Create plugin by following the docs: https://docs.medusajs.com/learn/fundamentals/plugins/create
2. Create an admin route (/src/admin/routes/test/page.tsx or similar) with some content
3. Build and publish the plugin `yarn medusa plugin:publish`
4. Add the plugin to the medusa backend with `yarn medusa plugin:add @myorg/plugin-name`
5. Register the plugin in medusa-config.ts
6. Run `yarn medusa plugin:develop` in the plugin
7. Run the backend as dev `yarn dev`
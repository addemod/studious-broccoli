import { defineRouteConfig } from "@medusajs/admin-sdk"
import { TagSolid } from "@medusajs/icons"

const TestPage = () => {
    return <div>Some content CHANGEME</div>
}

export const config = defineRouteConfig({
  label: "Test",
  icon: TagSolid,
})

export default TestPage
